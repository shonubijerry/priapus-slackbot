import { BOT_TOKEN } from '../config/config';
import { sendMessageToSlackResponseURL } from '../helpers/slackResponse';
import { initMessage } from '../helpers/messages';

export const getSlashCommandInfo = (req, res) => {
  const payload = req.body;
  res.status(200).end();
  if (payload.token !== BOT_TOKEN) {
    res.status(403).end('Access forbidden');
  }
  const responseURL = payload.response_url;
  sendMessageToSlackResponseURL(responseURL, initMessage);
};

export const initButtonConfirmation = (req, res) => {
  res.status(200).end(); // best practice to respond with 200 status
  const actionJSONPayload = JSON.parse(req.body.payload); // parse URL-encoded payload JSON string
  const message = {
    text: `${actionJSONPayload.user.name} clicked: ${actionJSONPayload.actions[0].name}`,
    replace_original: false,
  };
  sendMessageToSlackResponseURL(actionJSONPayload.response_url, message);
};
