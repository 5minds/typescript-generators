import {ExecutionContext} from '@essential-projects/core_contracts';
import {IDatastoreService, IEntityCollection} from '@essential-projects/data_model_contracts';
import {I<%= featureNamePascalCase %>Entity} from '<%= featureNameSnakeCase %>_contracts';

export class <%= featureNamePascalCase %>EntityTypeService {

  private _datastoreService: IDatastoreService = undefined;

  constructor(datastoreService: IDatastoreService) {
    this._datastoreService = datastoreService;
  }

  private get datastoreService(): IDatastoreService {
    return this._datastoreService;
  }

  public async deleteAll(context: ExecutionContext): Promise<void> {

    const <%= featureNameCamelCase %>EntityCollection: IEntityCollection<I<%= featureNamePascalCase %>Entity > =
      await this.datastoreService.getCollection<I<%= featureNamePascalCase %>Entity>('<%= featureNamePascalCase %>', context);

    <%= featureNameCamelCase %>EntityCollection.each(context, async(entry: I<%= featureNamePascalCase %>Entity) => {
      await entry.remove(context);
    });
  }
}
