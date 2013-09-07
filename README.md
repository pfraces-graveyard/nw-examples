# node-webkit examples

With the target of build a new browser on node-webkit inspired by **uzbl**,
there's a bunch of examples on how to do simple isolated tasks which combined,
could offer the basis for new desktop development

*One language to rule them all*

# Pre requisites

*   node-webkit (`nw` command)
*   node.js (`npm` command)

# Install

    $ git clone https://github/pfraces-playground/nw-examples.git
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

    {
      "name": "frameless",
      "main": "index.html",
      "window": {
        "frame": false,
        "toolbar": false
      }
    }

## 2. args

How to access to command line arguments

**index.html**

    <div id="canvas"></div>
    <script>
      var gui = require('nw.gui'),
        canvas = document.getElementById('canvas')
          .innerHTML = '<h1>Args: ' + gui.App.argv + '</h1>';

      process.stdin.on('data', function (data) {
        console.log(data);
      });
    </script>

## 3. modules

How to organize your code in isolated files

## Single entry point

**index.html**

    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="style.css" />
        <title>Modules example</title>
      </head>
      <body>
        <div id="canvas"></div>
        <script src="main.js"></script>
      </body>
    </html>
