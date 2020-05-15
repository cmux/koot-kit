/* eslint-disable no-console */

const spawn = require('./packages/koot-cli-kit/spawn');

const runCmd = async (msg, cmd, options = {}) => {
    if (!cmd || typeof cmd === 'object') return await runCmd(cmd, cmd, options);

    // print name
    console.log('\n');
    console.log(`\x1b[43m \x1b[0m\x1b[33m ` + msg + `\x1b[0m`);
    console.log('');

    return await spawn(cmd, options);
};

const run = async () => {
    await runCmd(
        `Install deps for root directory`,
        'npm install --no-package-lock'
    );
    await runCmd(`Run: lerna bootstrap`, `lerna bootstrap"`);

    //

    console.log('\n');
    console.log(`\x1b[42m \x1b[0m\x1b[32m Bootstrap complete\x1b[0m`);
    console.log('');
};

run().catch((err) => console.error(err));
