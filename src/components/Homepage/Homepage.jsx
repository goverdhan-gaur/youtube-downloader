import { useRouter } from 'next/router.js';
import { useClipboard } from '../../../utils/useClipboard.js';
import * as Styled from './Homepage.styled.js';
import propTypes from 'prop-types'
import SearchResults from '../SearchResults/SearchResults.jsx';
import _ from 'lodash';

Homepage.propTypes = {
  data: propTypes.object
};


Homepage.defaultProps = {
  data : {}
};


export default function Homepage({data}) {

  const getClipBoardText = useClipboard();
  const router = useRouter();
  
  const searchData = _.get(data, 'youtubeInfo', null)
  const handlePaste = async (e) => {
    const clipBoardtext = await getClipBoardText();
    router.push(`?url=${clipBoardtext}`);
  };
  console.info(searchData)
  
  return (
    <Styled.Wrapper >
      {
        searchData ? 
        <SearchResults data={searchData} /> : (
        <>
          <Styled.Textarea autoFocus={true} name="" id="" cols="30" rows="10" onPaste={handlePaste}></Styled.Textarea>
          <Styled.Heading> Please paste the link here.</Styled.Heading>
        </>  
        )
      }
    </Styled.Wrapper>
  );s
}