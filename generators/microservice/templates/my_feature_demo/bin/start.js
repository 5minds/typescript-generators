const bootstrapperIocModule = require('@process-engine-js/bootstrapper/ioc_module');
const bootstrapperNodeIocModule = require('@process-engine-js/bootstrapper_node/ioc_module');
const InvocationContainer = require('addict-ioc').InvocationContainer;
const debug = require('debug')('bootstrapper');

const iocModuleNames = [
  '@process-engine-js/bootstrapper',
  '@process-engine-js/bootstrapper_node',
  '@process-engine-js/core',
  '@process-engine-js/core_contracts',
  '@process-engine-js/data_model',
  '@process-engine-js/data_model_contracts',
  '@process-engine-js/datasource_adapter_base',
  '@process-engine-js/datasource_adapter_postgres',
  '@process-engine-js/datastore',
  '@process-engine-js/datastore_http',
  '@process-engine-js/event_aggregator',
  '@process-engine-js/http_extension',
  '@process-engine-js/iam',
  '@process-engine-js/iam_http',
  '@process-engine-js/invocation',
  '@process-engine-js/metadata',
  '@process-engine-js/pki_service',
  '@process-engine-js/security_service',
  '@process-engine-js/validation',
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