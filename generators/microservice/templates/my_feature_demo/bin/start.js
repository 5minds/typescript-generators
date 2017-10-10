const bootstrapperIocModule = require('@essential-projects/bootstrapper/ioc_module');
const bootstrapperNodeIocModule = require('@essential-projects/bootstrapper_node/ioc_module');
const InvocationContainer = require('addict-ioc').InvocationContainer;
const debug = require('debug')('bootstrapper');

const iocModuleNames = [
  '@essential-projects/bootstrapper',
  '@essential-projects/bootstrapper_node',
  '@essential-projects/core',
  '@essential-projects/core_contracts',
  '@essential-projects/data_model',
  '@essential-projects/data_model_contracts',
  '@essential-projects/datasource_adapter_base',
  '@essential-projects/datasource_adapter_postgres',
  '@essential-projects/datastore',
  '@essential-projects/datastore_http',
  '@essential-projects/event_aggregator',
  '@essential-projects/http_extension',
  '@essential-projects/iam',
  '@essential-projects/iam_http',
  '@essential-projects/invocation',
  '@essential-projects/metadata',
  '@essential-projects/pki_service',
  '@essential-projects/security_service',
  '@essential-projects/validation',
  '<%= featureNameSnakeCase %>',
  '<%= featureNameSnakeCase %>_http'
];

const iocModules = iocModuleNames.map((moduleName) => {
  return require(`${moduleName}/ioc_module`);
});

async function start() {

  const container = new InvocationContainer({
    defaults: {
      conventionCalls: ['initialize'],
    },
  });

  for (const iocModule of iocModules) {
    iocModule.registerInContainer(container);
  }

  const bootstrapper = await container.resolveAsync('AppBootstrapper');
  
  container.register('MessageBusAdapter', class MessageBusAdapter {
    start() {
      return Promise.resolve();
    }
  });

  container.validateDependencies();

  bootstrapper.start()
  .then(() => {
    const iamService = container.resolve('IamService');
    return iamService.createInternalContext('iam_system');
  })
  .then((context) => {
    debug('IamService found - context generated');
    const datastoreService = container.resolve('DatastoreService');
    return datastoreService.importDefaultData(context);
  })
  .then(() => {
    debug('Bootstrapper started successfully.');
  })
  .catch((error) => {
    debug('Bootstrapper failed to start.', error);
  });
}

start();