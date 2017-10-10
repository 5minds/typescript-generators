import {IHttpExtension} from '@essential-projects/http_contracts';
import {BaseRouter} from '@essential-projects/http_node';
import {I<%= featureNamePascalCase %>Controller, I<%= featureNamePascalCase %>Router} from '<%= featureNameSnakeCase %>_http_contracts';

export class <%= featureNamePascalCase %>Router extends BaseRouter implements I<%= featureNamePascalCase %>Router {

  private _<%= featureNamePascalCase %>Controller: I<%= featureNamePascalCase %>Controller = undefined;

  public config: any = undefined;

  constructor(<%= featureNamePascalCase %>Controller: I<%= featureNamePascalCase %>Controller) {
    super();

    this._<%= featureNamePascalCase %>Controller = <%= featureNamePascalCase %>Controller;
  }

  public get baseRoute(): string {
    return this.config.baseRoute || '<%= featureNameSnakeCase %>';
  }

  private get <%= featureNamePascalCase %>Controller(): any {
    return this._<%= featureNamePascalCase %>Controller;
  }

  public async initialize(): Promise<void> {
    super.initialize();
  }

  public async initializeRouter(): Promise<void> {
    this.router.post('/do_something', this.<%= featureNamePascalCase %>Controller.handleDoSomething.bind(this.<%= featureNamePascalCase %>Controller));
  }
}
