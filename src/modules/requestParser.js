/**
 * Request Parser
 */

import constants from './constants';

/* Data */
const { methodMap } = constants;

/* Helpers */
const getAction = (method, id) =>
	methodMap[id ? method : 'LIST'];

/* Exports */
export default (req) => {
	const { query } = req;
	const { id } = query;

	return {
		action: getAction(req.method, id),
		base: req,
		params: query,
		path: req.params[0],
	};
};
