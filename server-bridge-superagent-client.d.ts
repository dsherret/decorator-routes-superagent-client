declare module "server-bridge-superagent-client" {
    import * as BaseClient from "server-bridge-base-client";

    export class ClientBase extends BaseClient.BaseClient {
        protected baseUrl: string;
        constructor(baseUrl: string);
        protected get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
        protected post<ReturnType>(url: string, sendObj: any, args?: Object): Promise<ReturnType>;
    }
}
