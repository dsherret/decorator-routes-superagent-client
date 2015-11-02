var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var request = require("superagent");
var BaseClient = require("server-bridge-base-client");
var ClientBase = (function (_super) {
    __extends(ClientBase, _super);
    function ClientBase(baseUrl) {
        _super.call(this, baseUrl);
        this.baseUrl = baseUrl;
    }
    ClientBase.prototype.get = function (url, args) {
        if (args === void 0) { args = null; }
        var req = request.get(this.baseUrl + url);
        if (args != null) {
            req.query(args);
        }
        return new Promise(function (resolve, reject) {
            req.end(function (err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res.body);
            });
        });
    };
    ClientBase.prototype.post = function (url, sendObj, args) {
        if (args === void 0) { args = null; }
        var req = request.post(this.baseUrl + url);
        if (args != null) {
            req.query(args);
        }
        req.type("json");
        req.set("Content-Type", "application/json");
        req.send(sendObj);
        return new Promise(function (resolve, reject) {
            req.end(function (err, res) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(res.body);
            });
        });
    };
    return ClientBase;
})(BaseClient.BaseClient);
exports.ClientBase = ClientBase;
