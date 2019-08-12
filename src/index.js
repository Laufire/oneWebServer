/* The main entry. */

import http from 'http';
import { log } from 'util';

/* Exports */
export default (config, core) => {
	const router = core ? core.parse(config.router) : config.router;
	const { port } = config;

	http.createServer(router).listen(port, (err) => {
		if(err)
			return log(err);

		log(`oneWebServer is listening to ${ port }`);
	});
};
