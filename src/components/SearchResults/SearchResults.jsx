import propTypes from 'prop-types';
import * as Styled from './SearchResults.styled.js';
import Cards from '../Cards/Cards.jsx';
/**
 * Define prop types
 * { example : proptypes.string }
 */
SearchResults.propTypes = {

  data : propTypes.object
}

/**
 * Default Props for the component
 * { example : 'value' }
 */
 SearchResults.defaultProps = {

  data: {}
}

export default function SearchResults({data}) {
  return (
    <Styled.Wrapper >
      <Styled.MetaContainer>
        <Styled.Thumbnail src={data.thumbnail} alt="" />
        <Styled.MetaInfo>

          <Styled.Title>
            {data.title} 
          </Styled.Title>

          <Styled.Description>
            Length: {data.duration_string} 
          </Styled.Description>

          <Styled.Categories>
            Categories: 
            {data.categories.map((category) => 
            <Styled.Category key={`${data.id}-${category}`}>
              {category}
            </Styled.Category>)}
          </Styled.Categories>

        </Styled.MetaInfo>

      </Styled.MetaContainer>
     
      <Cards data={data.formats} />
        {/* {data.formats.map((format) =>  <Styled.Card>
s
                            </Styled.Card>)} */}

      {/* Content goes here */}
    </Styled.Wrapper>
  );
}