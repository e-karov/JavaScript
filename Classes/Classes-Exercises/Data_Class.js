
// class Request{
    
//     constructor(method, uri, version, message){
//         this.method = method;
//         this.uri = uri;
//         this.version = version;
//         this.message = message;
//         this.response = undefined;
//         this.fulfilled = false;
//     }
// }

function httpRequest(method, uri, version, message){
    return {
        method,
        uri,
        version,
        message,
        response: undefined,
        fulfilled: false
    }
}

