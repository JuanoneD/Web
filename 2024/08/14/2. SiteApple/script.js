function trocaCor(){
    let cor = document.getElementsByName("opcao-cor");
    let img = [document.getElementById("0-imagem-miniatura"),document.getElementById("1-imagem-miniatura"),document.getElementById("2-imagem-miniatura")];

    let cor_id = null;
    cor.forEach(x=>{
        if(x.checked){
            cor_id = x.getAttribute("id");
            return;
        }
    });

    let nome_cor = null;
    switch (cor_id){
        case "0-cor":
            nome_cor = "verde-cipreste"
            break;
        case "1-cor":
            nome_cor = "azul-inverno"
            break;
        case "2-cor":
            nome_cor = "meia-noite"
            break;
        case "3-cor":
            nome_cor = "estelar"
            break;
        case "4-cor":
            nome_cor = "rosa-claro"
            break;
        
    };
            
    img.forEach(img=>{
        let linkImg = img.src.split("/");
        linkImg[linkImg.length - 2] = "imagens-"+nome_cor;
        img.src = linkImg.join("/");
    });

    document.getElementById("nome-cor-selecionada").innerHTML = "Cor - "+ nome_cor
    let title = document.getElementById("titulo-produto").innerHTML.split(" ");
    title[3] = nome_cor;
    document.getElementById("titulo-produto").innerHTML = title.join(" ");    

   trocarImagem();
}
function trocarImagem(){
    let lista_img = document.getElementsByName("opcao-imagem");
    lista_img.forEach(x=>{
        if(x.checked){
            console.log(x.parentElement.children[1].children[0].src)
            document.getElementById("imagem-visualizacao").src = x.parentElement.children[1].children[0].src;
        }
    })
}
function trocarTamanho(){
    let lista = document.getElementsByName("opcao-tamanho");
    lista.forEach(x=>{
        if(x.checked){
            let title = document.getElementById("titulo-produto").innerHTML.split(" ");
            title[title.length - 2] = x.id == "0-tamanho" ? 41: 45;
            document.getElementById("titulo-produto").innerHTML = title.join(" ");
        }
    })
}