"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atom_languageclient_1 = require("atom-languageclient");
const semver_1 = require("semver");
const args = ['--node-ipc'];
const { version } = process;
const semver = semver_1.parse(version);
if (semver != null && semver.major < 10) {
    args.unshift('--harmony_async_iteration');
}
class KosLanguageClient extends atom_languageclient_1.AutoLanguageClient {
    getGrammarScopes() {
        return ['source.kos'];
    }
    getLanguageName() {
        return 'Kerbal Operating System';
    }
    getServerName() {
        return 'kos-language-server';
    }
    getConnectionType() {
        return 'ipc';
    }
    startServerProcess() {
        const server = require.resolve('kos-language-server/dist/server');
        return super.spawnChildNode([server, ...args], { stdio: [null, null, null, 'ipc'] });
    }
    shouldStartForEditor(_) {
        return true;
    }
}
exports.client = new KosLanguageClient();
//# sourceMappingURL=main.js.map