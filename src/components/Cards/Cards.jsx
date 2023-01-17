import propTypes from 'prop-types';
import * as Styled from './Cards.styled.js';
import Card from '../Card/Card.jsx';
/**
 * Define prop types
 * { example : proptypes.string }
 */
Cards.propTypes = {
  //
  data: propTypes.array
}

/**
 * Default Props for the component
 * { example : 'value' }
 */
 Cards.defaultProps = {
  //
  data: []
}
const filterArrayVideos = (array) => {
    const Videos = array.filter((val, id, array) => 
    val.format_note !== 'storyboard' 
    && val.filesize !== null 
    && val.ext === 'mp4' 
    // && val.fps > 24 
    // && val.filesize > array[id+1].filesize
    && val.asr !== null
    );
    return Videos
}

const filterArrayAudio = (array) => {
  const Videos = array.filter((val) => 
  val.format_note !== 'storyboard' 
  && val.ext === 'm4a' 
  );
  return Videos
}

// return  id !== array.length + 1 || val.filesize < array[(id + 1)].filesize 
export default function Cards({data}) {
  return (
    <Styled.Wrapper>
      <Styled.Section>
        <Styled.Heading>
          MP3
        </Styled.Heading>
        <Styled.AudioFiles>
          {filterArrayAudio(data).map((item) => <Card content={item}></Card>)}
        </Styled.AudioFiles>
      </Styled.Section>

      <Styled.Section>
      <Styled.Heading>
          MP4
        </Styled.Heading>
      <Styled.VideoFiles>
        {filterArrayVideos(data).map((item) => <Card content={item}></Card>)}
      </Styled.VideoFiles>
      </Styled.Section>
    </Styled.Wrapper>
  );
}