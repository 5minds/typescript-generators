'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-5-minds-typescript:microservice', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/microservice'))
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'dummyfile.txt'
    ]);
  });
});
