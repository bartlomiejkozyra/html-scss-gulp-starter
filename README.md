# html-scss-gulp-starter
A helpful template for web design projects based on HTML, SCSS and Gulp.js


## Usage
### 1. Clone repo
```
git clone https://github.com/bartlomiejkozyra/html-scss-gulp-starter.git
```

### 2. Go inside cloned repo
```
cd html-scss-gulp-starter
```

### 3. Install all dependencies (you should have installed nodejs with npm)
```
npm install
```

### 4. Run default gulp task
```
gulp
```


## Build
In order to build the production version of your project run gulp build inside 'src' directory of the cloned repo. The production version may be found in 'dist' directory.

### List of used npm packages:
- gulp
- browser-sync
- gulp-sass
- gulp-sourcemaps
- gulp-autoprefixer
- gulp-clean-css
- gulp-uglify
- gulp-concat
- gulp-imagemin
- gulp-changed
- gulp-html-replace
- del
- run-sequence

### HTML
The HTML template includes attached styles and scripts from libraries such as
- Bootstrap 4.0.0 - [Link](https://getbootstrap.com)
- Slick 1.8.0 - [Link](http://kenwheeler.github.io/slick)
- Fontawesome 5.0.6 - [Link](https://fontawesome.com)

In <head> tag you should select the full version of Bootstrap or only Bootstrap Grid and reboot (reset styles). The unselected files should be deleted.

### GULP
The project includes a live window reload - you can write code and after saving the file, the result will be visible immediately on the screen. You don’t have to worry about prefixes, they are added automatically. In the production version, images from 'img' directory will be optimized automatically. 

All *.scss, *.css files are minified and combined to style.css and all *.js to script.js

For your convenience, while inspecting the scss of your website, sourcemaps have been added. They show the file location of the inspected style.

### SCSS
In SASS there is a design pattern, named - The 7-1 Pattern [Link](https://sass-guidelin.es/#the-7-1-pattern)

The current project template has been slightly modified. The 'themes' directory has been replaced by 'sections' folder. I think, such structure is better to use for SPA.

```
abstract :
  _variables –  sample variables have been added
  _mixins –    some useful mixins have been added - check it out!
base:
  _typography
  _useful – added styles to solve the problem with object-fit in IE, check the script.js file as well
components:
  _buttons  
  _menu
layout:
  _header
  _footer
pages:
  _index
  _subpage
sections:
  _section1
  _section2
  _section3
vendors:
  _slick –  styles for the slider
```
