import { AutoLanguageClient, ConnectionType, LanguageServerProcess } from 'atom-languageclient';
import { parse } from 'semver';

const args = ['--node-ipc'];

const { version } = process;
const semver = parse(version);

if (semver != null && semver.major < 10) {
  args.unshift('--harmony_async_iteration')
}

class KosLanguageClient extends AutoLanguageClient {
  getGrammarScopes(): string[] {
    return ['source.kos'];
  }
  getLanguageName(): string {
    return 'Kerbal Operating System';
  }
  getServerName(): string {
    return 'kos-language-server';
  }
  getConnectionType(): ConnectionType {
    return 'ipc';
  }

  startServerProcess(): LanguageServerProcess {
    const server = require.resolve('kos-language-server/dist/server');

    return super.spawnChildNode(
      [server, ...args],
      { stdio: [null, null, null, 'ipc'] },
    ) as LanguageServerProcess;
  }

  shouldStartForEditor(_: any) {
    return true;
  }
}

export const client = new KosLanguageClient();
