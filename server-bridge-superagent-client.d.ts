export class ClientBase {
    protected baseUrl: string;
    constructor(baseUrl: string);
    protected get<ReturnType>(url: string, args?: Object): Promise<ReturnType>;
    protected post<ReturnType>(url: string, sendObj: any, args?: Object): Promise<ReturnType>;
}
