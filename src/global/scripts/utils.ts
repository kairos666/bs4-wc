/**
 * output JS object from object (identity) or JSON format
 * @param value 
 * @param errMsg 
 */
export function objectPropConverter(value:Object|string, errMsg:string):Object {
    if (typeof value === 'object') {
        // received an object so pass through
        return value;
    } else if (typeof value === 'string') {
        try {
            // received a string (try to convert into object)
            return JSON.parse(value);
        } catch (error) {
            console.warn(errMsg, error);
            return {};
        }
    }
}

export function arrayPropConverter(value:any[]|string, errMsg:string):any[] {
    if (value instanceof Array) {
        // received an array so pass through
        return value;
    } else if (typeof value === 'string') {
        try {
            // received a string (try to convert into object)
            return JSON.parse(value);
        } catch (error) {
            console.warn(errMsg, error);
            return [];
        }
    } else {
        return [];
    }
}
