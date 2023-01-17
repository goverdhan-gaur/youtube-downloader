import dynamic from 'next/dynamic.js'
import styles from '../styles/Home.module.css'
import { validateURI } from '../utils/ytValidation.js';
import _ from 'lodash';

const HomePage = dynamic(() => import('../src/components/Homepage/Homepage'), {
  ssr: false,
})

export default function Home(youtubeInfo) {
  console.info(youtubeInfo)
  return (
    <div className={styles.container}>
      <HomePage data={youtubeInfo}/>
    </div>
  )
}
export const getServerSideProps = async ({query}) => {
 
  const youtubedl = require('youtube-dl-exec');
  const url = _.get(query, 'url', '');
  
  const isValid = await validateURI(url);
  let youtubeInfo = null;

  // isValid &&
  // .then(res => {
  //   console.info(res,'ss')
    
  // }).catch((err) => {
  //   console.info(err, 'as')
  // })

   youtubeInfo = isValid && await youtubedl(url, {
    
      mergeOutputFormat: 'mp4',
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
      
      addHeader: [
        'referer:youtube.com',
        'user-agent:googlebot'
      ]
    }).then((res) => res);

  return {
    props: {youtubeInfo}
  }
};