    // 100 / 100
function solve(obj) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = [ 'HTTP/0.9', 'HTTP/1.0','HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /^([^<>\\&'"]+)$/gm;
    const uriRegex = /^([\w\.\*]+)$/gm;

    var isMethodValid = (obj.method && (validMethods.includes(obj.method)));
    var isURIValid = (obj.uri && ((obj.uri.match(uriRegex) || obj.uri == '*')));
    var isVersionValid = (obj.version && (validVersions.includes(obj.version)));
    
    if ( ! isMethodValid) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if ( ! isURIValid) {
        throw new Error ('Invalid request header: Invalid URI')
    }
    
    if (! isVersionValid) {
        throw new Error ('Invalid request header: Invalid Version');
    }
    
    if (obj.hasOwnProperty('message')) {

        var isMessageValid = ((obj.message.match(messageRegex) || obj.message == ''));

        if (! isMessageValid) {
            throw new Error ('Invalid request header: Invalid Message');
        }
    } else {
        throw new Error ('Invalid request header: Invalid Message');
    }

    return obj;
};

console.log(solve(
    {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }))