import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({name: 'Matheus', age: 20});
myDatabaseFunction.add({name: 'Maria', age: 30});
myDatabaseFunction.add({name: 'Marcos', age: 25});

export {myDatabaseFunction};