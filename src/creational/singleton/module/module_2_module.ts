import { MyDatabaseModule } from "./db/my-database-module";
import {myDatabaseModule as myDatabaseModuleFromModule1} from './module_1_module';

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({name: 'Eduardo', age: 40});
myDatabaseModule.add({name: 'Josefina', age: 35});
myDatabaseModule.add({name: 'Roberto', age: 23});
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleFromModule1);