sessionStorage.clear();
h1sampletext = document.getElementById("sampletext");
h1sampletext.innerText = "The quick brown fox jumps over the lazy dog.";
document.querySelectorAll('.optionbutton').forEach(el => el.hidden = true);
score = 0;

var fonts = [];
var options = []

function setfonts() {
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
}

function setoptions() {
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
}

setfonts()
setoptions()
console.log("OPTIONS:" + options)
  
function createoptions(correctfont) {
    console.log("PASSED correct font: " + correctfont)
    optionbuttons = document.getElementsByClassName("optionbutton");
    correctbuttonnumber = Math.floor(Math.random() * 3); 
    correctbutton = optionbuttons[correctbuttonnumber];
    correctbutton.setAttribute("id", "correctanswerbutton");
    correctbutton = document.getElementById("correctanswerbutton")
    document.getElementById("correctanswerbutton").innerText = correctfont;
    document.getElementById("correctanswerbutton").className = "correctbutton";
    document.getElementById("correctanswerbutton").setAttribute('onclick','correct()')
    optionbuttons = document.getElementsByClassName("optionbutton");
    n = 3;
    options.splice($.inArray(correctfont,options), 1);
    if (options.length < 4) {
        window.location.href = "results.html?" + score;
    }
    console.log("OPTIONS after pop to remove duplicate:" + options);
    var wrongoptionstext = options.sort(() => .5 - Math.random()).slice(0,n);
    console.log(optionbuttons);
    console.log(wrongoptionstext);
    optionbuttons[0].innerText = wrongoptionstext[0]
    optionbuttons[0].setAttribute('onclick','incorrect()')
    optionbuttons[1].innerText = wrongoptionstext[1]
    optionbuttons[1].setAttribute('onclick','incorrect()')
    optionbuttons[2].innerText = wrongoptionstext[2]
    optionbuttons[2].setAttribute('onclick','incorrect()')
}

function changefont() {
    options = [];
    setoptions();
    const oldstyle = document.getElementById("customfontstyle-element");
    if (oldstyle != null){
        oldstyle.remove()
    }
    if (fonts.length != 0) {
        randomfont = fonts[Math.floor(Math.random() * fonts.length)];
        console.log(randomfont)
        fonts.splice($.inArray(randomfont,fonts), 1);
        var newStyle = document.createElement('style');
        newStyle.setAttribute("id", "customfontstyle-element");
        newStyle.appendChild(document.createTextNode('@font-face{font-family: '+"randomfontname"+'; src: url('+randomfont+');}'));
        document.body.appendChild(newStyle);
        sessionStorage.setItem("correctfont", randomfont)
        createoptions(randomfont);
    } else {
        window.location.href = "results.html?score=" + score;
    }

}

function startgame() {
    document.querySelectorAll('.optionbutton').forEach(el => el.hidden = false);
    changefont()
    titlescreen = document.getElementById("titlescreen");
    titlescreen.remove();
    h1sampletext.style.display = "block";
}

function correct() {
    $("#correctmodaldiv").modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
    });
    score += 1;
}

function incorrect() { 
    document.getElementById("incorrectmodaltext").innerText = "Incorrect! The correct font was: " + sessionStorage.getItem("correctfont");
    $("#incorrectmodaldiv").modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
    });
}

function reset() {
    $.modal.close();
    changefont();
}