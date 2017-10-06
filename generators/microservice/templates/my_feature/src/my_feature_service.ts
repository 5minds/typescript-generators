import {I<%= featureNamePascalCase %>Service} from '<%= featureNameSnakeCase %>_contracts';

export class <%= featureNamePascalCase %>Service implements I<%= featureNamePascalCase %>Service {

  public doSomething(something: any): void {
    console.log('doing something');
    console.log(something);
    console.log('did something');
  };
}
