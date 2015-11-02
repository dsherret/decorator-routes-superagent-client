import * as request from "superagent";
import * as BaseClient from "decorator-routes-base-client";

export class ClientBase extends BaseClient.BaseClient {
    constructor(protected baseUrl: string) {
        super(baseUrl);
    }

    protected get<ReturnType>(url: string, args: Object = null) {
        const req = request.get(this.baseUrl + url);

        if (args != null) {
            req.query(args);
        }

        return new Promise<ReturnType>((resolve, reject) => {
            req.end((err: any, res: request.Response) => {
                if (err) {
                    reject(err);
                }

                resolve(res.body as ReturnType);
            });
        });
    }

    protected post<ReturnType>(url: string, sendObj: any, args: Object = null) {
        const req = request.post(this.baseUrl + url);

        if (args != null) {
            req.query(args);
        }

        req.send(sendObj);

        return new Promise<ReturnType>((resolve, reject) => {
            req.end((err: any, res: request.Response) => {
                if (err) {
                    reject(err);
                }

                resolve(res.body as ReturnType);
            });
        });
    }
}
