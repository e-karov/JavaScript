    // 100 / 100
function notify(message) {
   
    let notification = document.getElementsByTagName("div")[2] ;
    notification.textContent = message;

    showMessage();

    function showMessage(){
        notification.style.display = "block";

        let timeout = setTimeout(hideMessage, 2 * 1000);
    }

    function hideMessage(){
        notification.style.display = "none";
    }
}