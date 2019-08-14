import bodyParser from 'body-parser';

/* Data */
const defaultBodyFormat = 'json';

/* Exports */
export default (bodyFormat) => bodyParser[bodyFormat || defaultBodyFormat]({
	type: '*/*',
});
