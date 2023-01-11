const storiesTemplate  = (name) =>  `import ${name} from './${name}';

//👇 This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: '${name}',
    component: ${name},
  };
  

//👇 We create a “template” of how args map to rendering
const Template = (args) => <${name} {...args} />;

export const Normal = {
  args: {
    //👇 The args you need here will depend on your component
    
  },
  argTypes : {
    //👇 The argTypes you need here will depend on your component
    
  }
};`;

module.exports = storiesTemplate;
