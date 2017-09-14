import ns from '../namespace';

ns.namespace('ima.http');

/**
 * Options for a request sent using the HTTP agent.
 * @typedef {Object} AgentRequestOptions
 * @property {number} [timeout] Specifies the request timeout in milliseconds.
 * @property {number} [ttl] Specified how long the request may be cached in
 *           milliseconds.
 * @property {number} [repeatRequest] Specifies the maximum number of tries to
 *           repeat the request if the request fails.
 * @property {Object<string, string>} [headers] Sets the additional request
 *           headers (the keys are case-insensitive header names, the values
 *           are header values).
 * @property {boolean} [cache] Flag that enables caching the HTTP request
 *           (enabled by default, also applies to requests in progress).
 * @property {boolean} [withCredentials] Flag that indicates whether the
 *           request should be made using credentials such as cookies or
 *           authorization headers.
 * @property {{progress: function=}} [listeners] Listeners for request events.
 * @property {function(AgentResponse)} [postProcessor] Response post-processor
 *           applied just before the response is stored in the cache and
 *           returned.
 */

/**
 * @typedef {Object} AgentResponse
 * @property {number} status The HTTP response status code.
 * @property {*} body The parsed response body, parsed as JSON.
 * @property {string} params.method The HTTP method used to make the request.
 * @property {string} params.url The original URL to which the request should
 *           have been made.
 * @property {string} params.transformedUrl The final URL after all
 *           pre-processors have been applied. This is the URL to which the
 *           request was made.
 * @property {Object<string, (boolean|number|string)>} params.data The data
 *           sent in the original request.
 * @property {Object<string, string>} headers The response HTTP headers.
 * @property {boolean} cached Whether or not the response has been cached.
 */

/**
 * The {@codelink HttpAgent} defines unifying API for sending HTTP requests at
 * both client-side and server-side.
 *
 * @interface
 */
export default class HttpAgent {
	/**
	 * Sends an HTTP GET request to the specified URL, sending the provided
	 * data as query parameters.
	 *
	 * @param {string} url The URL to which the request should be made.
	 * @param {Object<string, (boolean|number|string)>} data The data to send
	 *        to the server as query parameters.
	 * @param {AgentRequestOptions=} options Optional request options.
	 * @return {Promise<AgentResponse>} A promise that resolves to the
	 *         response.
	 */
	get(url, data, options = {}) {}

	/**
	 * Sends an HTTP POST request to the specified URL, sending the provided
	 * data as the request body. If an object is provided as the request data,
	 * the data will be JSON-encoded. Sending other primitive non-string values
	 * as the request body is not supported.
	 *
	 * @param {string} url The URL to which the request should be made.
	 * @param {(string|Object<string, *>)} data The data to send to the server
	 *        as the request body.
	 * @param {AgentRequestOptions=} options Optional request options.
	 * @return {Promise<AgentResponse>} A promise that resolves to the
	 *         response.
	 */
	post(url, data, options = {}) {}

	/**
	 * Sends an HTTP PUT request to the specified URL, sending the provided
	 * data as the request body. If an object is provided as the request data,
	 * the data will be JSON-encoded. Sending other primitive non-string values
	 * as the request body is not supported.
	 *
	 * @param {string} url The URL to which the request should be made.
	 * @param {(string|Object<string, *>)} data The data to send to the server
	 *        as the request body.
	 * @param {AgentRequestOptions=} options Optional request options.
	 * @return {Promise<AgentResponse>} A promise that resolves to the
	 *         response.
	 */
	put(url, data, options = {}) {}

	/**
	 * Sends an HTTP PATCH request to the specified URL, sending the provided
	 * data as the request body. If an object is provided as the request data,
	 * the data will be JSON-encoded. Sending other primitive non-string values
	 * as the request body is not supported.
	 *
	 * @param {string} url The URL to which the request should be made.
	 * @param {(string|Object<string, *>)} data The data to send to the server
	 *        as the request body.
	 * @param {AgentRequestOptions=} options Optional request options.
	 * @return {Promise<AgentResponse>} A promise that resolves to the
	 *         response.
	 */
	patch(url, data, options = {}) {}

	/**
	 * Sends an HTTP DELETE request to the specified URL, sending the provided
	 * data as the request body. If an object is provided as the request data,
	 * the data will be JSON-encoded. Sending other primitive non-string values
	 * as the request body is not supported.
	 *
	 * @param {string} url The URL to which the request should be made.
	 * @param {(string|Object<string, *>)} data The data to send to the server
	 *        as the request body.
	 * @param {AgentRequestOptions=} options Optional request options.
	 * @return {Promise<AgentResponse>} A promise that resolves to the
	 *         response.
	 */
	delete(url, data, options = {}) {}

	/**
	 * Generates a cache key to use for identifying a request to the specified
	 * URL using the specified HTTP method, submitting the provided data.
	 *
	 * @param {string} method The HTTP method used by the request.
	 * @param {string} url The URL to which the request is sent.
	 * @param {Object<string, string>} data The data associated with the
	 *        request. These can be either the query parameters or request body
	 *        data.
	 * @return {string} The key to use for identifying such a request in the
	 *         cache.
	 */
	getCacheKey(method, url, data) {}

	/**
	 * Sets the specified header to be sent with every subsequent HTTP request,
	 * unless explicitly overridden by request options.
	 *
	 * @param {string} header The name of the header.
	 * @param {string} value The header value. To provide multiple values,
	 *        separate them with commas
	 *        (see http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2).
	 * @return {HttpAgent} This HTTP agent.
	 */
	setDefaultHeader(header, value) {}

	/**
	 * Clears all configured default headers.
	 *
	 * @return {HttpAgent} This HTTP agent.
	 */
	clearDefaultHeaders() {}
}

ns.ima.http.HttpAgent = HttpAgent;
