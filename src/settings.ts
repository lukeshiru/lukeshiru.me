/**
 * CORS settings.
 *
 * @exports
 */
export const CORS: string = [
	"default-src 'self'",
	"child-src 'self'",
	"connect-src 'self'",
	"font-src 'self' *.gstatic.com",
	"img-src 'self'",
	"media-src 'self'",
	"object-src 'self'",
	"script-src 'self' 'unsafe-inline' data:",
	"style-src 'self' 'unsafe-inline' *.googleapis.com"
].join("; ");
/**
 * Server port.
 *
 * @exports
 */
export const PORT: number = process.env.OPENSHIFT_NODEJS_PORT || 8080;
/**
 * Server host.
 *
 * @exports
 */
export const HOST: string = process.env.OPENSHIFT_NODEJS_IP || "localhost";
/**
 * Static directory.
 *
 * @exports
 */
export const STATIC_DIR: string = `${__dirname}/../static/build/es5-bundled`;
/**
 * File with data for GraphQL.
 *
 * @exports
 */
export const DATA_FILE: string = `${__dirname}/data.json`;