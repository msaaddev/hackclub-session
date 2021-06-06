const cliTable = require('cli-table');

module.exports = () => {
    // end
    const table = new cliTable();
    table.push(
        ['Star', 'https://github.com/msaaddev/hackclub-session'],
        ['Follow', 'https://github.com/msaaddev']
    );

    console.log(table.toString());
};
