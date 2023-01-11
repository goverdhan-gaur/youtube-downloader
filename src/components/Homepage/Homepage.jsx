import * as Styled from './Homepage.styled.js';

/**
 * Define prop types
 * { example : proptypes.string }
 */
Homepage.propTypes = {
  //
};

/**
 * Default Props for the component
 * { example : 'value' }
 */
Homepage.defaultProps = {
  //
};

export default function Homepage(props) {
  return (
    <Styled.Wrapper >
      Hello World !!
    </Styled.Wrapper>
  );
}