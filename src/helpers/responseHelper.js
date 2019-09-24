/**
 * success: prepare json response for API endpoint
 * @param {object} res response object
 * @param {Number} statusCode success status code of response
 * @param {object} payload Object data corresponding with success status code
 * @returns {object} json response object
*/

export const successResponse = (res, statusCode, payload) => res.status(statusCode).json({
  status: 'success',
  payload,
});

/**
 * error: prepare json response for API endpoint
 * @param {object} res response object
 * @param {Number} statusCode error status code of response
 * @param {object} errors error message corresponding with status code
 * @returns {object} json response object
*/

export const warningResponse = (res, statusCode, error) => res.status(statusCode).json({
  status: 'error',
  error,
});
