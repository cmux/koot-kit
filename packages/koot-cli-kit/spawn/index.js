const spawn = async (cmd, options = {}) => {
    const chunks = cmd.split(' ');

    return new Promise((resolve, reject) => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true,
            cwd: process.cwd(),
            ...options,
        });
        if (options.stdio === 'pipe') {
            child.stdout.pipe(process.stdin);
        }

        child.on('close', () => {
            resolve();
        });
        child.on('error', (...args) => {
            reject(...args);
        });
    }).catch((e) => {
        throw e;
    });
};

module.exports = spawn;
