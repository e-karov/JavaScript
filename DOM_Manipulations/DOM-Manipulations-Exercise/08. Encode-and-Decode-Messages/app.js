// 100 / 100
function encodeAndDecodeMessages() {
    let inputField = document.querySelector("textarea");
    let receiverField = document.querySelectorAll("textarea")[1];
    let encodeButton = document.querySelector("button");
    encodeButton.addEventListener("click", encodeAndSend);

    let encodedMessage;
    function encodeAndSend() {

        encodedMessage = inputField.value
        .split("")
        .map(char => {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        })
        .join("");
       
        document.querySelector("textarea").value = "";
        document.querySelectorAll("textarea")[1].value = "";
        receiverField.value = encodedMessage;
    }

    let decodeButton = document.querySelectorAll("button")[1];
    decodeButton.addEventListener("click", decodeMessage);

    function decodeMessage(){
        let decodedMessage = encodedMessage
        .split("")
        .map(char => {
            return String.fromCharCode(char.charCodeAt(0) - 1)
        })
        .join("");
        
        receiverField.value = decodedMessage;
    }
}