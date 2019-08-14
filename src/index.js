/* The main entry. */
import express from 'express';
import requestParser from './modules/requestParser';

/* Delegates */
const app = express();

/* Exports */
export default (config, core) => {
	const router = core ? core.parse(config.router, 'router') : config.router;
	const { port } = config;

	app.all('/*', async (req, resp) => {
		resp.end(await router(requestParser(req)));
	});

	app.listen(port);
};
