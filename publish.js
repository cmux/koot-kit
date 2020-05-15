/* eslint-disable no-console */

const inquirer = require('inquirer');
const spawn = require('./packages/koot-cli-kit/spawn');

const run = async () => {
    console.log('\n');
    console.log(`\x1b[43m \x1b[0m\x1b[33m koot-kit publish...\x1b[0m`);
    console.log('');

    const { tag = false } = await inquirer.prompt({
        type: 'list',
        name: 'tag',
        message: 'Select tag for NPM',
        choices: [
            {
                name: 'Please select a tag',
                value: false,
            },
            {
                name: 'No tag (none)',
                value: '',
            },
            'next',
        ],
        default: 0,
    });
    console.log('');
    if (tag === false) {
        console.log('\n');
        console.log(
            `\x1b[43m \x1b[0m\x1b[31m Please select a tag type. Abort!\x1b[0m`
        );
        console.log('');
        return;
    }

    await spawn(`lerna publish` + (tag ? ` --dist-tag ${tag}` : ''));

    console.log('\n');
    console.log(`\x1b[42m \x1b[0m\x1b[32m Publish complete\x1b[0m`);
    console.log('');
};

run().catch(async (e) => console.error(e));
