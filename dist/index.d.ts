export declare type reviver = (this: any, key: string, value: any) => any;
export declare type replacer = (this: any, key: string, value: any) => any;
export declare type errorCallback = (err: Error) => void;
/**
 * Decode JSON string
 *
 * @param  json  JSON string to parse
 * @param  reviver  Optional function that transforms the results. This function is called for each member of the object. If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @param errorCallback  Optional callback function excecuted on failure
 * returns parsed JSON on success, null on failure
 */
export declare function decode(json: string, reviver?: reviver, errorCallback?: errorCallback): any | null;
/**
 * Encode data into JSON string
 *
 * @param data  The json-data to convert to string
 * @param replacer  Optional function that transforms the results.
 * @param errorCallback  Optional callback function excecuted on failure
 * returns JSON string on success, null on failure
 */
export declare function encode(data: any, replacer?: replacer, errorCallback?: errorCallback): string | null;
