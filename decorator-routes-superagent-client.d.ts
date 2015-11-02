/// <reference path="node_modules/decorator-routes-base-client/decorator-routes-base-client.d.ts" />
/// <reference path="src/typings/es6-promise/es6-promise.d.ts" />

declare module "decorator-routes-superagent-client" {
    import * as BaseClient from "decorator-routes-base-client";

    export class ClientBase extends BaseClient.BaseClient {
        protected baseUrl;
        constructor(baseUrl: string);
        protected get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
        protected post<SendType, ReturnType>(url: string, sendObj: SendType, args?: Object): Promise<ReturnType>;
    }
}
