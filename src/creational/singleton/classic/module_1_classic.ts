import { MyDatabaseClassic } from "./db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({name: 'Matheus', age: 20});
myDatabaseClassic.add({name: 'Maria', age: 30});
myDatabaseClassic.add({name: 'Marcos', age: 25});

export {myDatabaseClassic};