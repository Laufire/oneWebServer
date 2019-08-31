/* The main entry. */

import express from 'express';
import bodyParser from './modules/bodyParser';
import requestParser from './modules/requestParser';
import oneRouter from '@laufire/one-router';

/* Delegates */
const app = express();

/* Exports */
export default (config, one) => {
	one.types.router = one.types.router || oneRouter;

	const router = one.parse({ router: config.router });
	const { port, bodyFormat, idField = 'id' } = config;

	app.use(bodyParser(bodyFormat));

	app.all('/*', async (req, resp) =>
		resp.end(await router(requestParser(req, idField)).router.toString()));

	app.listen(port);
};
