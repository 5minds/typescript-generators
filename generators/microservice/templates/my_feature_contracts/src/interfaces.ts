import {IEntity} from '@process-engine-js/core_contracts';

export interface I<%= featureNamePascalCase %>Entity extends IEntity {
  myProperty: string;
  anotherProperty: IMyOtherProperty;
}

export interface IMyOtherProperty {
  anAttribute: boolean;
}

export interface I<%= featureNamePascalCase %>Service {
  doSomething(something: any): void;
}
