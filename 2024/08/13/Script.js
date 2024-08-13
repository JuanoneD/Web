console.log("JAVA SCRIPT FOI");

function butao(){
    let list = [
        "<p>",
        "abacaxi", "abacate", "abafar", "abismo", "abóbora", "abono", "aborto", "abriu", "absinto", "abstêmio",
        "academia", "acaso", "acervo", "adverso", "aflito", "agosto", "alguém", "amável", "amparo", "anatomia",
        "anel", "anexo", "angústia", "aparelho", "apatia", "aquário", "arame", "arbusto", "ardente", "argila",
        "balança", "banco", "barulho", "bateria", "beijo", "belas", "bicicleta", "bomba", "bonito", "borda",
        "caderno", "café", "calor", "campo", "caneta", "cansado", "carnaval", "carro", "casaco", "cesta",
        "dado", "dente", "desafio", "dívida", "doença", "domingo", "dúvida", "dócil", "dormir", "dúzia",
        "edifício", "eficaz", "elefante", "enigma", "ensaio", "escola", "espada", "estrada", "escuridão", "esfinge",
        "faca", "fama", "festa", "fibra", "fios", "flores", "fumaça", "futebol", "fruta", "fúria",
        "galo", "garagem", "gelo", "generoso", "gente", "girassol", "globo", "graça", "grito", "grupo",
        "habitat", "herança", "história", "homem", "horizonte", "hotel", "húmus", "humano", "hino", "hálito",
        "idioma", "imagem", "informar", "inscrição", "instrumento", "intenso", "inverno", "item", "índice", "íntimo",
        "jacaré", "jardim", "jeito", "jogo", "jovem", "juiz", "julho", "justo", "jornal", "joia",
        "lago", "leitura", "liberdade", "lugar", "luz", "lápis", "lembrar", "leite", "lanterna", "lenda",
        "mãe", "malha", "massa", "matéria", "melhor", "música", "natureza", "nuvem", "número", "notícia",
        "ocasião", "olho", "opção", "orvalho", "orgulho", "ouvido", "ouro", "outra", "oficina", "objetivo",
        "padrão", "palavra", "pão", "papel", "parada", "pássaro", "peito", "pelota", "pimenta", "plano",
        "quadrado", "quente", "quinto", "rabia", "raio", "raro", "reforma", "rima", "risco", "rua",
        "sabor", "salário", "salto", "sangue", "selo", "silêncio", "sonho", "sorvete", "tarefa", "tempo",
        "universo", "vacina", "vale", "venda", "velocidade", "veto", "vida", "vôo", "vulcão", "zebra",
        "abóbora", "abrigo", "acervo", "advento", "aflito", "agente", "alarde", "alcança", "apenas", "aperto",
        "avesso", "balada", "barril", "bastão", "beiral", "bicicleta", "bilhete", "bloco", "borboleta", "brilho",
        "cais", "calça", "caráter", "cavalo", "cesto", "chave", "ciclo", "cidadão", "cidade", "clima",
        "dado", "daqui", "delícia", "desvio", "digno", "dócil", "docente", "dobro", "dócil", "dúvida",
        "enigma", "enviar", "escrita", "espelho", "estrela", "estilo", "etapa", "exemplo", "excelente", "fácil",
        "fator", "feliz", "festa", "fiança", "folha", "fogo", "fome", "forte", "foto", "frio",
        "galho", "gama", "garra", "gelo", "gosto", "grau", "guia", "guerra", "gelo", "giz",
        "habito", "hábito", "hino", "hora", "hotel", "humo", "húmus", "humor", "hidrante", "ingresso",
        "imagem", "importar", "incenso", "início", "irregular", "item", "íntimo", "irmão", "íris", "isla",
        "jogo", "juiz", "julho", "jovem", "joia", "jorge", "justo", "jacaré", "jornal", "jovial",
        "lagoa", "laço", "leitura", "livro", "luz", "lago", "lenda", "limpo", "lembra", "luta",
        "maçã", "mãe", "moeda", "morte", "música", "melhor", "memória", "mesmo", "médio", "mistura",
        "navio", "ninho", "notícia", "natureza", "número", "noite", "nuvem", "nunca", "normal", "notável",
        "ocaso", "olho", "orgulho", "ouro", "olho", "opção", "obra", "obrigado", "obrigar", "outra",
        "palavra", "pato", "pão", "peito", "ponto", "pelo", "pôr", "prato", "passo", "prova",
        "quarto", "questão", "queijo", "quase", "quadrado", "quadro", "quente", "qualidade", "quebrar", "quase",
        "rua", "rima", "rato", "raro", "recurso", "rio", "risco", "reconhecer", "revista", "raiz",
        "sabão", "salário", "sabor", "salto", "senhor", "selo", "sol", "secreta", "som", "sombra",
        "tela", "tempo", "tarefa", "trabalho", "teatro", "tigre", "tinta", "trilha", "troca", "torneio",
        "unidade", "uso", "único", "universo", "urgente", "uso", "utilizar", "utopia", "útil", "usado",
        "vaca", "vale", "venda", "verão", "veto", "vida", "vulcão", "voto", "voar", "você",
        "xaxim", "xaxins", "xícara", "xaxim", "xaxins", "xaxin", "xaxin", "xerox", "xingar", "xilofone",
        "zebra", "zero", "zona", "zelar", "zelo", "zelo", "zumbi", "zen", "zagueiro", "zumbir","</p>"
    ];           
    console.log("2"+"2" - "2");
    let span = document.getElementById("spanLe");
    list.forEach(x=>{span.innerHTML += x + " ";})
};

function enviar(){
    let nome = document.getElementById("nome");
    let fone = document.getElementById("Telefone");
    let tabela = document.getElementById("tabela");
    tabela.innerHTML += "<tr> <td>" + nome.value + "</td> <td>" + fone.value + "</td> </tr>"
    nome.value = "";
    fone.value = "";

}