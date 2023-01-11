const fs = require('fs');
const storiesTemplate = require('./templates/stories');
const jsxTemplate = require('./templates/jsx');
const styledTemplate = require('./templates/styledcomponent');


const createDir = (dirPath, callback) => {
    fs.mkdir(dirPath, (err) => {
        typeof callback === 'function' && callback(err);
    });
}

const createFiles = (dirPath, input) => {
    createJsx(dirPath, input.name, jsxTemplate, (err) => {
        !err && console.info('Component File Created!!')
        if(err) {
            console.info(err);
            process.exit();
        }  
        else {
            createStyled(dirPath, input.name, styledTemplate, (err) => {
                !err && console.info('Styles File Created!!')
                if(err) {
                    console.info(err);
                    process.exit();
                }  
                else { 
                    input.stories ? createStories(dirPath, input.name, 
                        storiesTemplate, (err) => {
                            !err && console.info('Stories File Created!!');
                            process.exit();
                        }
                    ): '';
                }
            }) 
        } 
    })
}

function create  (dirPath, input) {
    createDir(dirPath, (err) => {
        if(err) {
            console.info('Could not create directory. Try Again', err);
            process.exit();
        } else {
            console.info('Directory created Successfully.');
            createFiles(dirPath,  input);
        }
    });
}

const createJsx = (dirPath, filename, template, callback) => {
    fs.writeFile(`${dirPath}/${filename}.jsx`, template(filename) ,  (err) => {
        callback(err);
    })  
} 

const createStyled = (dirPath, filename, template, callback) => {
    fs.writeFile(`${dirPath}/${filename}.styled.js`, template() ,  (err) => {
        callback(err);
    })  
} 

const createStories = (dirPath, filename, template, callback) => {
    fs.writeFile(`${dirPath}/${filename}.stories.jsx`, template(filename) ,  (err) => {
        callback(err);
    })  
} 
// 
module.exports = create;