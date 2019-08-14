/* The main entry. */
import express from 'express';
import bodyParser from './modules/bodyParser';
import requestParser from './modules/requestParser';

/* Delegates */
const app = express();

/* Exports */
export default (config, core) => {
	const router = core ? core.parse(config.router, 'router') : config.router;
	const { port, bodyFormat, idField = 'id' } = config;

	app.use(bodyParser(bodyFormat));

	app.all('/*', async (req, resp) => {
		resp.end(await router(requestParser(req, idField)));
	});

	app.listen(port);
};
