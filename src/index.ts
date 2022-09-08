export type reviver = (this: any, key: string, value: any) => any;
export type replacer = (this: any, key: string, value: any) => any;
export type errorCallback = (err: Error) => void;

/**
 * Decode JSON string
 *
 * @param  json  JSON string to parse
 * @param  reviver  Optional function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @param errorCallback  Optional callback function excecuted on failure
 * returns parsed JSON on success, null on failure
 */
function decode(
	json: string,
	reviver?: reviver,
	errorCallback?: errorCallback
): any | null {
	try {
		return JSON.parse(
			json,
			typeof reviver === 'function' ? reviver : undefined
		);
	} catch (err) {
		if (typeof errorCallback === 'function') errorCallback(err);
		return null;
	}
}

/**
 * Encode data into JSON string
 *
 * @param data  The json-data to convert to string
 * @param replacer  Optional function that transforms the results.
 * @param errorCallback  Optional callback function excecuted on failure
 * returns JSON string on success, null on failure
 */
function encode(
	data: any,
	replacer?: replacer,
	errorCallback?: errorCallback,
	space?: string | number
): string | null {
	try {
		return JSON.stringify(
			data,
			typeof replacer === 'function' ? replacer : undefined,
			space
		);
	} catch (err) {
		if (typeof errorCallback === 'function') errorCallback(err);
		return null;
	}
}

export default { decode, encode };
