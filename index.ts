/**
 * Decode JSON string
 *
 * @param {string} json  JSON string to parse
 * @param reviver  Optional function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @param errorCallback  Optional callback function excecuted on failure
 * @returns {(any | null)}
 * returns parsed JSON on success, null on failure
 */
function decode(
	json: string,
	reviver?: (this: any, key: string, value: any) => any | undefined,
	errorCallback?: (err: Error) => void | any
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
 * @param {any} data  The json-string to parse
 * @param replacer  Optional function that transforms the results.
 * @param errorCallback  Optional callback function excecuted on failure
 * @returns {(string | null)}
 * returns JSON string on success, null on failure
 */
function encode(
	data: any,
	replacer?: (this: any, key: string, value: any) => any | undefined,
	errorCallback?: (err: Error) => void | any
): string | null {
	try {
		return JSON.stringify(
			data,
			typeof replacer === 'function' ? replacer : undefined
		);
	} catch (err) {
		if (typeof errorCallback === 'function') errorCallback(err);
		return null;
	}
}

export { decode, encode };
