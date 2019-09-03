declare module 'toml-js' {
  export function dump(json: object): string;
}

declare module "netlify" {
  export class NetlifyAPI {
    constructor(accessToken: string);
    listSites: () => { name: string }
  }
}

declare module "@netlify/cli-utils" {
  export default class BaseCommand {
    constructor();
    // Overwritten manually
    getConfigToken(): [string, string];
    isLoggedIn(): boolean;

    authenticate(...args: any[]): void;
    expensivelyAuthenticate(...args: any[]): void;
    init(): void;
    log(...args: any[]): void;
    logJson(...args: any[]): void;
    parse(...args: any[]): void;
    static aliases: any[];
    static parse: boolean;
    static parserOptions: {};
    static run(argv: any, opts: any): any;
    static strict: boolean;
  }
}
