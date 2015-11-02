/// <reference path="node_modules/server-bridge-base-client/server-bridge-base-client.d.ts" />
/// <reference path="src/typings/es6-promise/es6-promise.d.ts" />

declare module "server-bridge-superagent-client" {
    import * as BaseClient from "server-bridge-base-client";

    export class ClientBase extends BaseClient.BaseClient {
        protected baseUrl: string;
        constructor(baseUrl: string);
        protected get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
        protected post<ReturnType>(url: string, sendObj: any, args?: Object): Promise<ReturnType>;
    }
}
