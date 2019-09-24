import request from 'request';
import {
  CLIENT_ID, CLIENT_SECRET,
} from '../config/config';

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
    if (!JSONresponse.ok) {
      // console.log(JSONresponse);
      res.send(`Error encountered: \n${JSON.stringify(JSONresponse)}`).status(200).end();
    }
    res.redirect('https://priapus.slack.com/apps/ANFETCSN5-priapus-saver');
    // console.log(JSONresponse);
    // res.send('Success!');
  });
};
