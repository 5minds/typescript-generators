'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');
const path = require('path');

module.exports = class extends Generator {

  constructor(args, options) {
    super(args, options);

    this.props = {};
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the cat\'s pajamas ' + chalk.red('generator-5-minds-typescript') + ' generator!'
    ));

    const prompts = [{
      name: 'featureName',
      message: 'Please choose a name for your micro service feature',
      when: !this.props.featureName
    },{
      name: 'gitSshUrl',
      message: 'Please choose the SSH url for your git repositories (e.g.: git@github.com:MyOrga)',
      when: !this.props.gitSshUrl
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {

    this.props.featureNamePascalCase = changeCase.pascalCase(this.props.featureName);
    this.props.featureNameCamelCase = changeCase.camelCase(this.props.featureName);
    this.props.featureNameSnakeCase = changeCase.snakeCase(this.props.featureName);
    this.props.featureNameLowerCase = changeCase.lowerCase(this.props.featureName);

    this._copyFeature();
    this._copyFeatureContracts();
    this._copyFeatureDemo();
    this._copyFeatureHttp();
    this._copyFeatureHttpContracts();

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(`package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('.meta'),
      this.destinationPath(`.meta`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase,
        gitSshUrl: this.props.gitSshUrl
      }
    );
  }

  _copyFeatureDemo() {

    this.fs.copyTpl(
      this.templatePath('my_feature_demo/bin/start.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/bin/start.js`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/package.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/application'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/application`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/data_sources'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/data_sources`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/datastore'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/datastore`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/http'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/http`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/iam'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/iam`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/my_feature/router.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/${this.props.featureNameSnakeCase}/router.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/security'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/security`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_demo/config/development/timing'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_demo/config/development/timing`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
  }

  _copyFeature() {

    this.fs.copyTpl(
      this.templatePath('my_feature/src/entity_type_services/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/entity_type_services/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature/src/entity_type_services/my_feature.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/entity_type_services/${this.props.featureNameSnakeCase}.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameCamelCase: this.props.featureNameCamelCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature/src/entity_types/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/entity_types/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature/src/entity_types/my_feature.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/entity_types/${this.props.featureNameSnakeCase}.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature/src/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature/src/my_feature_service.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/src/${this.props.featureNameSnakeCase}_service.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature/gulpfile.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/gulpfile.js`));

    this.fs.copyTpl(
      this.templatePath('my_feature/tsconfig.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/tsconfig.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature/tslint.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/tslint.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature/package.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature/ioc_module.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}/ioc_module.js`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
  }


  _copyFeatureContracts() {

    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/src/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/src/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/src/interfaces.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/src/interfaces.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/gulpfile.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/gulpfile.js`));

    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/tsconfig.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/tsconfig.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/tslint.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/tslint.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_contracts/package.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_contracts/package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase
      }
    );
  }

  _copyFeatureHttp() {
    this.fs.copyTpl(
      this.templatePath('my_feature_http/src/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/src/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_http/src/my_feature_controller.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/src/${this.props.featureNameSnakeCase}_controller.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_http/src/my_feature_router.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/src/${this.props.featureNameSnakeCase}_router.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature_http/gulpfile.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/gulpfile.js`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http/tsconfig.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/tsconfig.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http/tslint.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/tslint.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http/package.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_http/ioc_module.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http/ioc_module.js`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
  }

  _copyFeatureHttpContracts() {
    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/src/index.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/src/index.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );
    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/src/interfaces.ts'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/src/interfaces.ts`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase
      }
    );

    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/gulpfile.js'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/gulpfile.js`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/tsconfig.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/tsconfig.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/tslint.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/tslint.json`));

    this.fs.copyTpl(
      this.templatePath('my_feature_http_contracts/package.json'),
      this.destinationPath(`${this.props.featureNameSnakeCase}_http_contracts/package.json`), {
        featureNamePascalCase: this.props.featureNamePascalCase,
        featureNameSnakeCase: this.props.featureNameSnakeCase,
        featureNameLowerCase: this.props.featureNameLowerCase
      }
    );
  }

  install() {
    const installOptions = {
      npm: true,
      bower: false,
      yarn: false,
      skipMessage: false,
      callback: () => {
        const commandArgs = [
          'exec',
          'npm run build',
          `--include-only=${this.props.featureNameSnakeCase}_contracts,${this.props.featureNameSnakeCase}_http_contracts,${this.props.featureNameSnakeCase},${this.props.featureNameSnakeCase}_http`
        ];
        this.spawnCommandSync('meta', commandArgs);
      }
    };
    return this.installDependencies(installOptions);
  }
};
