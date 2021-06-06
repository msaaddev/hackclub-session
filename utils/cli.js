const clipboardy = require('clipboardy');

module.exports = async (isAlphaOnly = false) => {
    // cli
    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';

    if (isAlphaOnly) {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }

    let charactersLength = characters.length;

    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * charactersLength)];
    }

    try {
        await clipboardy.write(password);
    } catch (error) {
        console.log(error);
    }

    console.log('Password: ', password, 'has been copied to your clipboard.');
};
