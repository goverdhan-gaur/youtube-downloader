import propTypes from 'prop-types';
import * as Styled from './Card.styled.js';
import filesize from 'file-size';
import Link from 'next/link.js';
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

export default function Card({ content }) {
  console.info(content)

  return (
    <Styled.Wrapper >
      <Styled.Resolution>{content.format_note}</Styled.Resolution>
      <p>
        {filesize(content.filesize, {
          fixed: 2,
          spacer: ' '
        }).human('jedec')}
      </p>
      <Styled.link href={content.url} download="download" rel="noreferrer" target="_blank">
        Downloads
      </Styled.link>
    </Styled.Wrapper>
  );
}