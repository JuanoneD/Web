function setplay(){
    let botao = document.getElementById("play-pause");
    botao.classList.remove("bi-pause-circle-fill");
    botao.classList.add("bi-play-circle-fill");
}
function setpause(){
    let botao = document.getElementById("play-pause");
    botao.classList.remove("bi-play-circle-fill");
    botao.classList.add("bi-pause-circle-fill");
}

function playMusic(){
    let audio = document.getElementById("audio-capitulo");
    if (audio.paused){
        audio.play();
        setpause();
    }else{
        audio.pause();
        setplay();
    }
}
function nextMusic(){
    let capitulo = document.getElementById("capitulo");
    let cap = capitulo.innerHTML.split(" ");
    let valueCap = Number(cap[1])+1 >10 ? 1 : Number(cap[1])+1
    capitulo.innerHTML  = cap[0] + " " + valueCap;
    let audio = document.getElementById("audio-capitulo");
    let source = audio.src.split("/");
    source[source.length - 1] = valueCap + ".mp3";
    audio.src = source.join("/");
    setplay();
}

function backMusic(){
    let capitulo = document.getElementById("capitulo");
    let cap = capitulo.innerHTML.split(" ");
    let valueCap = Number(cap[1])-1 <1?10: Number(cap[1])-1
    capitulo.innerHTML  = cap[0] + " " + valueCap;
    setplay();
}