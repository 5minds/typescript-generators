import {I<%= featureNamePascalCase %>Service} from '<%= featureNameSnakeCase %>_contracts';

export class <%= featureNamePascalCase %>Controller {

  private _<%= featureNamePascalCase %>Service: I<%= featureNamePascalCase %>Service = undefined;

  constructor(<%= featureNamePascalCase %>Service: I<%= featureNamePascalCase %>Service) {
    this._<%= featureNamePascalCase %>Service = <%= featureNamePascalCase %>Service;
  }

  private get <%= featureNamePascalCase %>Service(): I<%= featureNamePascalCase %>Service {
    return this._<%= featureNamePascalCase %>Service;
  }

  public async handleDoSomething(req: any, res: any, next: any): Promise<void> {

    try {
      const result = await this.<%= featureNamePascalCase %>Service.doSomething(req.body);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
