var score = "unknown";

function getParameters() {
    let urlString = window.location.href;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for(let pair of queryString.entries()) {
        score = pair[1];
    }
}

getParameters()

console.log(score);

document.getElementById("scoretext").innerText = score + "/11";

function restart() {
    window.location.href = "main.html";
}