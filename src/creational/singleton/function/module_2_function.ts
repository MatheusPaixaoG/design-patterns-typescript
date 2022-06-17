import { MyDatabaseFunction } from "./db/my-database-function";
import {myDatabaseFunction as myDatabaseFunctionFromFunction1} from './module_1_function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({name: 'Eduardo', age: 40});
myDatabaseFunction.add({name: 'Josefina', age: 35});
myDatabaseFunction.add({name: 'Roberto', age: 23});
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseFunctionFromFunction1);