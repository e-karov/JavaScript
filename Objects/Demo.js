let jsonArr = [{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}];

function jsonToHtmlTable(jsonArr){
    let arr = JSON.parse(jsonArr);
    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.array.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("<table/>");

    function makeKeyRow(arr){
        return `<tr><th>${arr.Name}</th><th>${arr.Price}</th></tr>`
    };

    function makeValueRow(obj){
        return `<tr><td>${obj.Name}<td/><td>${obj.Price}</td><tr/>`
    };

    function escapeHtml(value){

        return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    console.log(arr.join('\n'));
}

function jsonToHtmlTable([{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}])

