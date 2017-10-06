import {IHttpRouter} from '@process-engine-js/http_contracts';

export interface I<%= featureNamePascalCase %>Router extends IHttpRouter {

}

export interface I<%= featureNamePascalCase %>Controller {
  handleDoSomething(req: any, res: any, next: any): Promise<void>;
}