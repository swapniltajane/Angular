/// <reference path="IDatabase.ts"/>
var Database;
(function (Database) {
    var Oracle = /** @class */ (function () {
        function Oracle() {
        }
        Oracle.prototype.connect = function () {
            console.log("Connected to Oracle");
        };
        return Oracle;
    }());
    Database.Oracle = Oracle;
})(Database || (Database = {}));
/// <reference path="IDatabase.ts" />
var Database;
(function (Database) {
    var MySql = /** @class */ (function () {
        function MySql() {
        }
        MySql.prototype.connect = function () {
            console.log("Connected to MySql");
        };
        return MySql;
    }());
    Database.MySql = MySql;
})(Database || (Database = {}));
/// <reference path="Oracle.ts" />
/// <reference path="MySql.ts" />
var oraConnect = new Database.Oracle();
var sqlConnect = new Database.MySql();
oraConnect.connect();
sqlConnect.connect();
