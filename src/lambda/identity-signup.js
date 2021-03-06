const fetch = require('node-fetch');
const slackUrl = process.env.SLACK_WEBHOOK_URL;

export function handler(event, context, callback) {
  const payload = JSON.parse(event.body);
  const user = payload.user;

  fetch(slackUrl, {
    method: 'POST',
    body: JSON.stringify({
      text: `New signup: ${user.email}`
    })
  }).then(() => {
    callback(null, { statusCode: 200, body: '{}' });
  }).catch(err => {
    callback(null, { statusCode: 500, body: '{"msg": "Error Reporting to Slack"}' });
  })
}
