# node-webkit examples

With the target of building a new browser on node-webkit inspired by **uzbl**,
there's a bunch of examples on how to do simple and isolated tasks which combined
could offer the basis for new desktop development

*One language to rule them all*

# Pre requisites

*   node-webkit (`nw` command)
*   node.js (`npm` command)

# Install

    $ git clone https://github.com/pfraces-playground/nw-examples.git
    $ cd nw-examples
    $ npm install

# Usage

    $ nw <example>

# Index

Examples are using ideas from previous examples. Better if you follow this
order for a good understanding of concepts

## 1. frameless

How to build a frameless window

**package.json**

```json
{
  "name": "frameless",
  "main": "index.html",
  "window": {
    "frame": false,
    "toolbar": false
  }
}
```

## 2. modules

How to organize your code in isolated files

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <div id="canvas"></div>
    <script src="main.js"></script>
  </body>
</html>
```

**main.js**

```js
var canvas = document.getElementById('canvas');

canvas.innerHTML = '<h1>Modules</h1>';
canvas.innerHTML += '<p>This is modules example</p>';
```

## 3. args

How to access to command line arguments

**index.html**

```js
var gui = require('nw.gui');

document.getElementById('canvas')
  .innerHTML = '<h1>Args: ' + gui.App.argv + '</h1>';
```
