/* eslint-disable no-unused-vars */
import request from 'request';

export const sendMessageToSlackResponseURL = (responseURL, JSONmessage) => {
  const postOptions = {
    uri: responseURL,
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    json: JSONmessage,
  };
  request(postOptions, (error, res, body) => {
    if (error) {
      console.log(error);
    }
    console.log(res);
  });
};
