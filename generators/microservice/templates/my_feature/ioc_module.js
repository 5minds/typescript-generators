'use strict';

const <%= featureNamePascalCase %>Entity = require('./dist/commonjs/index').<%= featureNamePascalCase %>Entity;
const <%= featureNamePascalCase %>Service = require('./dist/commonjs/index').<%= featureNamePascalCase %>Service;
const <%= featureNamePascalCase %>EntityTypeService = require('./dist/commonjs/index').<%= featureNamePascalCase %>EntityTypeService;

const entityDiscoveryTag = require('@essential-projects/core_contracts').EntityDiscoveryTag;

function registerInContainer(container) {
  
    container.register('<%= featureNamePascalCase %>EntityTypeService', <%= featureNamePascalCase %>EntityTypeService)
      .dependencies('DatastoreService')
      .singleton();
  
    container.register('<%= featureNamePascalCase %>Entity', <%= featureNamePascalCase %>Entity)
      .tags(entityDiscoveryTag);
  
    container.register('<%= featureNamePascalCase %>Service', <%= featureNamePascalCase %>Service)
      .singleton();
      
}

module.exports.registerInContainer = registerInContainer;
