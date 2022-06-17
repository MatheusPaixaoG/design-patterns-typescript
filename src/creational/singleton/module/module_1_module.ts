import { MyDatabaseModule } from "./db/my-database-module";

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({name: 'Matheus', age: 20});
myDatabaseModule.add({name: 'Maria', age: 30});
myDatabaseModule.add({name: 'Marcos', age: 25});

export {myDatabaseModule};