/// <reference path="IDatabase.ts" />
namespace Database{
    export class MySql implements IDatabase{
        public connect():void{
            console.log("Connected to MySql");
        }
    }
}