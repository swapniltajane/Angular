/// <reference path="IDatabase.ts"/>
namespace Database{
    export class Oracle implements IDatabase{
        public connect():void{
            console.log("Connected to Oracle");
        }
    }
}