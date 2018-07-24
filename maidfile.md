## dev
Develop mode

Run task `build` before this

```js
const gaze = require('gaze');
const { exec } = require('child_process');
const maid = require('maid')();

gaze('src/**/*.js').on('all', function(e, filepath) {
    console.log(`${e} ${filepath}`);
    maid.runTask('build');
});
```

## build
Make Userscript

```js
const fs = require('fs-extra');
const uglifyJS = require('uglify-js');
let packageJson = require('./package.json');
delete require.cache[require.resolve('./src/userscript.meta')]
let meta = require('./src/userscript.meta');
let metaString = meta(packageJson.version);

module.exports = () => {

    fs.readFile('src/index.js')
        .then((jsString) => {
            return uglifyJS.minify(jsString.toString()).code;
        }).then((minifiedString) => {
            return fs.outputFile('dist/youtubeShot.user.js', metaString+'\n'+minifiedString);
        })
};
```