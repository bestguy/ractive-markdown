'use strict';
let assert = require('assert');
let Ractive = require('ractive');

let helpers = require('../ractive-markdown.js');

describe('Ractive', () => {
  it('should self-register Ractive helpers', () => {
    assert(Ractive.defaults.data.md, 'md is not registered');
  });
});

describe('md', () => {
  it('should format standard markdown', () => {
    assert.equal(helpers.md('# Hello _World!_').trim(),
                 '<h1>Hello <em>World!</em></h1>');
  });
  it('should add hyperlinks', () => {
    assert.equal(helpers.md('http://google.com').trim(),
                 '<p><a href="http://google.com">http://google.com</a></p>');
  });
  it('should format typographic symbols', () => {
    assert.equal(helpers.md('(c) (C) (r) (R) (tm) (TM) (p) (P) +- ... -- ---').trim(),
                 '<p>© © ® ® ™ ™ § § ± … – —</p>');
  });
  it('should format quotes', () => {
    assert.equal(helpers.md('"When we met, she said: \'Hi.\'"').trim(),
                 '<p>“When we met, she said: ‘Hi.’”</p>');
  });
  it('should format emojis', () => {
    assert.equal(helpers.md(':eyes: <3 :-)').trim(),
                 '<p>👀 ❤️ 😃</p>');
  });
});
