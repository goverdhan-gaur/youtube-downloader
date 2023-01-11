
import Homepage from './Homepage';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
  title: 'Homepage',
  component: Homepage,
};
  

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Homepage {...args} />;

export const Normal = Template.bind();

Normal.args = {
  args: {
    //👇 The args you need here will depend on your component
    
  },
  argTypes : {
    //👇 The argTypes you need here will depend on your component
    
  }
};