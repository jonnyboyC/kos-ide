import { AutoLanguageClient, ConnectionType, LanguageServerProcess } from 'atom-languageclient';
declare class KosLanguageClient extends AutoLanguageClient {
    getGrammarScopes(): string[];
    getLanguageName(): string;
    getServerName(): string;
    getConnectionType(): ConnectionType;
    startServerProcess(): LanguageServerProcess;
    shouldStartForEditor(_: any): boolean;
}
export declare const client: KosLanguageClient;
export {};
