import request from 'request';
import {
  CLIENT_ID, CLIENT_SECRET,
} from '../config/config';
import { prepareRequestMessage } from '../helpers/slackRequest';
import { forbiddenMessage } from '../helpers/messages';
import { ACCESS_TOKEN } from '../../token';

export const authenticateApp = (req, res) => {
  res.sendFile(`${__dirname}/add_to_slack.html`);
};

export const authenticateAppRedirect = (req, res) => {
  const options = {
    uri: `https://slack.com/api/oauth.access?code=${req.query.code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    method: 'GET',
  };
  request(options, (error, response, body) => {
    const JSONresponse = JSON.parse(body);
    const { access_token, team_id } = JSONresponse;
    if (!JSONresponse.ok) {
      res.send(`Error encountered: \n${JSON.stringify(JSONresponse)}`).status(200).end();
    }
    ACCESS_TOKEN[team_id] = access_token;
    res.redirect('https://priapus.slack.com/apps/ANFETCSN5-priapus-saver');
  });
};

export const checkAuth = (req, res, next) => {
  const payload = req.body;
  if (!payload.token) {
    res.status(403).end('Access forbidden');
    const responseURL = payload.response_url;
    const postOptions = prepareRequestMessage('POST', responseURL, forbiddenMessage);
    request(postOptions, (error, response, body) => {
      if (error) {
        console.log(error);
      }
    });
    return;
  }
  next();
};
