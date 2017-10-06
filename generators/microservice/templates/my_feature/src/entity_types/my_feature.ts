import {ClaimActionType, ExecutionContext, IEntity, IInheritedSchema, IQueryClause, SchemaAttributeType} from '@process-engine-js/core_contracts';
import {Entity, EntityCollection, EntityDependencyHelper, IEntityType, IPropertyBag} from '@process-engine-js/data_model_contracts';
import {requiresClaim, schemaAttribute} from '@process-engine-js/metadata';
import {I<%= featureNamePascalCase %>Entity, IMyOtherProperty} from '<%= featureNameSnakeCase %>_contracts';

@requiresClaim({
  actions: [
    [ClaimActionType.write, ['_iam_internal']],
  ],
})
export class <%= featureNamePascalCase %>Entity extends Entity implements I<%= featureNamePascalCase %>Entity {

  @schemaAttribute({ type: SchemaAttributeType.string})
  public get myProperty(): string {
    return this.getProperty(this, 'myProperty');
  }

  public set myProperty(value: string) {
    this.setProperty(this, 'myProperty', value);
  }

  @schemaAttribute({ type: SchemaAttributeType.object})
  public get anotherProperty(): IMyOtherProperty {
    return this.getProperty(this, 'anotherProperty');
  }

  public set anotherProperty(value: IMyOtherProperty) {
    this.setProperty(this, 'anotherProperty', value);
  }

  constructor(entityDependencyHelper: EntityDependencyHelper,
              context: ExecutionContext,
              schema: IInheritedSchema,
              propertyBag: IPropertyBag,
              entityType: IEntityType<IEntity>) {
    super(entityDependencyHelper, context, schema, propertyBag, entityType);
  }

  public async initialize(derivedClassInstance: IEntity): Promise<void> {
    const actualInstance: IEntity = derivedClassInstance || this;
    await super.initialize(actualInstance);
  }
}
