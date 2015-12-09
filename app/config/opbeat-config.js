require('dotenv').load();

// top of your main app's file
var opbeat = require('opbeat').start({
  organizationId: [process.env.ORGANIZATION_ID],
  appId: process.env.APP_ID,
  secretToken: process.env.SECRET_TOKEN
});

module.exports = opbeat;