const jsxTemplate  = (name) =>  `import propTypes from 'prop-types';
import * as Styled from './${name}.styled.js';

/**
 * Define prop types
 * { example : proptypes.string }
 */
${name}.propTypes = {
  //
}

/**
 * Default Props for the component
 * { example : 'value' }
 */
 ${name}.defaultProps = {
  //
}

export default function ${name}(props) {
  return (
    <Styled.Wrapper >
      {/* Content goes here */}
    </Styled.Wrapper>
  );
}`;

module.exports = jsxTemplate;