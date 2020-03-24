function solve(){
    let heading = document.createElement("h1");
    heading.innerHTML = "<i><strong>Heading's Hello</strong></i>";

    document.querySelector('.main').prepend(heading);

}

document.addEventListener("DOMContentLoaded", solve);
