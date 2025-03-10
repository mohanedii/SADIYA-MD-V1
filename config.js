const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SADIYA-MD=FBoGXB4b#nwoq8wAsiG_THozgRlbqjwFyaLhj1Yy9Mob9kLI9OIs', //Put Session-id Here
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME || '', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '', //Put Your Github Auth Token
DATABASE_REPO_NAME: process.env.DATABASE_REPO_NAME || 'SADIYA-MD-DATABASE' //Bot Database Repo Name
};
