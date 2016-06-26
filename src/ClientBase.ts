import * as request from "superagent";
import * as BaseClient from "server-bridge-base-client";

export class ClientBase extends BaseClient.BaseClient {
    constructor(protected baseUrl: string) {
        super(baseUrl);
    }

    protected get<ReturnType>(url: string, args: Object = null) {
        const req = request.get(this.baseUrl + url);

        if (args != null) {
            req.query(args);
        }

        return this.sendRequest<ReturnType>(req);
    }

    protected post<ReturnType>(url: string, sendObj: any, args: Object = null) {
        const req = request.post(this.baseUrl + url);

        if (args != null) {
            req.query(args);
        }

        // todo: change this to allow the user to insert their own configuration while generating the code
        req.type("json");
        req.set("Content-Type", "application/json");
        req.send(sendObj);

        return this.sendRequest<ReturnType>(req);
    }

    private sendRequest<ReturnType>(req: request.SuperAgentRequest) {
        return new Promise<ReturnType>((resolve, reject) => {
            req.end((err: any, res: request.Response) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(res.body as ReturnType);
            });
        });
    }
}
