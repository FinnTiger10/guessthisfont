h1sampletext = document.getElementById("sampletext");
h1sampletext.innerText = "The quick brown fox jumps over the lazy dog.";

var fonts = [];
var options = []
fonts.push("algerian.ttf");
fonts.push("arial.ttf");
fonts.push("arialround.TTF");
fonts.push("bauhaus.TTF");
fonts.push("berlinsans.TTF");
fonts.push("calibri.ttf");
fonts.push("centurygothic.TTF");
fonts.push("consolas.ttf");
fonts.push("courier.ttf");
fonts.push("showcardgothic.TTF");
fonts.push("timesnewroman.ttf");
//
options.push("algerian.ttf");
options.push("arial.ttf");
options.push("arialround.TTF");
options.push("bauhaus.TTF");
options.push("berlinsans.TTF");
options.push("calibri.ttf");
options.push("centurygothic.TTF");
options.push("consolas.ttf");
options.push("courier.ttf");
options.push("showcardgothic.TTF");
options.push("timesnewroman.ttf");

console.log("OPTIONS:" + options)

function createoptions(correctfont) {
    optionbuttons = document.getElementsByClassName("optionbutton");
    console.log(optionbuttons);
    correctbuttonnumber = Math.floor(Math.random() * 3);
    correctbutton = optionbuttons[correctbuttonnumber];
    correctbutton.setAttribute("id", "correctanswerbutton");
    correctbutton = document.getElementById("correctanswerbutton").innerText = correctfont;
    correctbutton.setAttribute("class", "correctbutton");
    optionbuttons = document.getElementsByClassName("optionbutton");
    n = 3;
    let wrongoptionstext = options.sort(() => .5 - Math.random()).slice(0,n);
    console.log(wrongoptionstext);
}

function changefont() {
    const oldstyle = document.getElementById("customfontstyle-element");
    if (oldstyle != null){
        oldstyle.remove()
    }
    if (fonts.length != 0) {
        randomfont = fonts[Math.floor(Math.random() * fonts.length)];
        console.log(randomfont)
        fonts.pop(randomfont)
        console.log(fonts)
        var newStyle = document.createElement('style');
        newStyle.setAttribute("id", "customfontstyle-element");
        newStyle.appendChild(document.createTextNode('@font-face{font-family: '+"randomfontname"+'; src: url('+randomfont+');}'));
        document.body.appendChild(newStyle);
        createoptions(randomfont);
    } else {
        h1sampletext.innerText = "FONTS DEPLETED.";
    }

}

function startgame() {
    changefont()
    sgbutton = document.getElementById("startgamebutton");
    sgbutton.remove();
    h1sampletext.style.color = "black";
}