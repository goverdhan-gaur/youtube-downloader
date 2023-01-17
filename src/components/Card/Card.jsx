import propTypes from 'prop-types';
import * as Styled from './Card.styled.js';
import filesize from 'file-size';
import saveFileByUrl from 'save-file-by-url';
// import download from 'video-downloader';
/**
 * Define prop types
 * { example : proptypes.string }
 */
Card.propTypes = {
  //
  content: propTypes.object
}

/**
 * Default Props for the component
 * { example : 'value' }
 */
 Card.defaultProps = {
  //
  content: {}
}

export default function Card({content}){
  console.info(content)
  
  return (
    <Styled.Wrapper >
      <Styled.Resolution>{content.format_note}</Styled.Resolution>
 
      {filesize(content.filesize, {
        fixed: 2,
        spacer: ' '
      }).human('jedec')}
  <a href={content.url} download="download" target="_blank">Downlload</a>
    </Styled.Wrapper>
  );
}