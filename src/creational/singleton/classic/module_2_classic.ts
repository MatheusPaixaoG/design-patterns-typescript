import { MyDatabaseClassic } from "./db/my-database-classic";
import {myDatabaseClassic as myDatabaseClassicFromModule1} from './module_1_classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({name: 'Eduardo', age: 40});
myDatabaseClassic.add({name: 'Josefina', age: 35});
myDatabaseClassic.add({name: 'Roberto', age: 23});
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModule1);