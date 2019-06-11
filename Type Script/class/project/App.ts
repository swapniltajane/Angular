/// <reference path="Oracle.ts" />
/// <reference path="MySql.ts" />

let oraConnect=new Database.Oracle();
let sqlConnect=new Database.MySql();
oraConnect.connect();
sqlConnect.connect();