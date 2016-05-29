# Ractive Markdown helper

A markdown mustache helper for [Ractive](http://www.ractivejs.org/), 
using [Markdown-it](https://github.com/markdown-it/markdown-it)

Also supports emoji via [Markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)

----

## Usage

_Note: this helper is a self-registering CommonJS module, and in the browser 
requires a module system such as Webpack or Browserify._

    npm install ractive-markdown

### ES5:

```js
var Ractive = require('ractive');
require('ractive-markdown');
```

### ES6/2015+:

```js
import Ractive from 'ractive';
import 'ractive-markdown';
```

### In Ractive template 
(Requires triple brackets to show unescaped HTML):

    {{{md('# Hello _World!_')}}}

#### Outputs:

# Hello _World!_
