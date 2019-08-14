/**
 * Request Parser
 */

import constants from './constants';

/* Data */
const { methodActions } = constants;

/* Helpers */
const getAction = (method, id) =>
	methodActions[method !== 'GET'
		? method
		: id ? 'GET' : 'LIST'
	];

/* Exports */
export default (req, idField) => {
	const { query } = req;
	const { [idField]: id } = query;
	const action = getAction(req.method, id);

	return {
		action: action,
		base: req,
		data: action !== 'list' ? req.body : query,
		id: id,
		path: req.params[0],
	};
};
