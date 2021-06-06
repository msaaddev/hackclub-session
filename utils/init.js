const welcome = require('cli-welcome');
const pkgJSON = require('../package.json');

module.exports = () => {
	// initialization
    welcome({
        title: `${pkgJSON.name}`,
        tagLine: `by ${pkgJSON.author.name}`,
        description: `${pkgJSON.description}`,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${pkgJSON.version}`,
    });
};
