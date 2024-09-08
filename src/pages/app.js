let dados = [
    {
        titulo: "Gato",
        descricao: "O gato ou gato doméstico é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.",
        link: "../public/cat.jpg",
        tag: "gato cat gatinho mamifero terrestre"
    },
    {
        titulo: "Cachorro",
        descricao: "O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano. Teorias postulam que surgiu do lobo cinzento no continente asiático há mais de 100 000 anos.",
        link: "../public/dog.jpg",
        tag: "cachorro cao dog cachorrinho mamifero terrestre"
    },
    {
        titulo: "Cobra",
        descricao: "As serpentes, também chamadas ofídios, cobras, mbóis, mboias e malacatifas, são répteis poiquilotérmicos sem patas, pertencentes à subordem Serpentes, ou Ophidia. São bastante próximos dos lagartos, com os quais partilham a ordem Squamata.",
        link: "../public/cobra.jpg",
        tag: "serpente cobra vibora rastegante terrestre"
    }, 
    {
        titulo: "Passaro",
        descricao: "Aves são uma classe de seres vivos vertebrados endotérmicos caracterizada pela presença de penas, um bico sem dentes, oviparidade de casca rígida, elevado metabolismo, um coração com quatro câmaras e um esqueleto pneumático resistente e leve. ",
        link: "../public/passaro.jpg",
        tag: "ave passsaro passarinho voador"
    },
    {
        titulo: "peixe",
        descricao: "Os Peixes são animais vertebrados, aquáticos, tipicamente ectotérmicos, que possuem o corpo fusiforme, os membros transformados em barbatanas ou nadadeiras sustentadas por raios ósseos ou cartilaginosos.",
        link: "../public/peixe.jpg",
        tag: "marinho peixe agua fish nadador"
    },
    {
        titulo: "Lontra",
        descricao: "A subfamília Lutrinae pertence à família dos Mustelídeos. Existem 13 espécies, dentro de 7 géneros. Todas as espécies são nadadoras, vivendo no litoral, em rios ou em lagos, e possuem os dedos unidos por membranas interdigitais, que facilitam a natação.",
        link: "../public/lontra.jpg",
        tag: "lontra mamifero nadador terrestre"
    }
];

dados.forEach( animals => {
    console.log("Titulo: " + animals.titulo);
    console.log("Descrição: " + animals.descricao);
    console.log("Descrição: " + animals.link);
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
});

function pesquisar(){
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(!campoPesquisa){
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultado = "";
    let titulo = "";
    let tag = "";
    

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tag = dado.tag.toLowerCase();

        if(titulo.includes(campoPesquisa) || tag.includes(campoPesquisa)){
            resultado += `
        <div class="card">
            <img src="${dado.link}" class="card-image" "/>  
            <div class="card-information">
                <h3 class="card-information-title">${dado.titulo}</h3> 
                <p class="card-information-text">${dado.descricao}</p>
            </div>          
        </div>
        
        `;
        }
    }

    if(!resultado){
        resultado = `<p>Nada foi encontrado.</p>`
    }

    section.innerHTML = resultado;


}