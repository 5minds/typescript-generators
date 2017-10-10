'use strict';

const <%= featureNamePascalCase %>Router = require('./dist/commonjs/index').<%= featureNamePascalCase %>Router;
const <%= featureNamePascalCase %>Controller = require('./dist/commonjs/index').<%= featureNamePascalCase %>Controller;
const routerDiscoveryTag = require('@essential-projects/core_contracts').RouterDiscoveryTag;

function registerInContainer(container) {

  container.register('<%= featureNamePascalCase %>Router', <%= featureNamePascalCase %>Router)
    .dependencies('<%= featureNamePascalCase %>Controller')
    .configure('<%= featureNameSnakeCase %>:router')
    .tags(routerDiscoveryTag)
    .singleton();

  container.register('<%= featureNamePascalCase %>Controller', <%= featureNamePascalCase %>Controller)
    .dependencies('<%= featureNamePascalCase %>Service')
    .singleton();
}

module.exports.registerInContainer = registerInContainer;
