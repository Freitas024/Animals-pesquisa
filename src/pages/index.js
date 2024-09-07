let dados = [
    {
        titulo: "Gato",
        descricao: "fofo gatinho gato laranja peludo",
        link: "../public/cat.jpg"
    },
    {
        titulo: "Cachorro",
        descricao: "cachorro dog chorro peludo",
        link: "../public/dog.jpg"
    },
    {
        titulo: "Cobra",
        descricao: "Cobra cobra serpente",
        link: "../public/cobra.jpg"
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
    let descricao = "";
    

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultado += `
        <div class="card">
            <img src="${dado.link}" style="width: 100%;"/>            
            <h3 class="title">${dado.titulo}</h3> 
            <p class="text">${dado.descricao}</p>
        </div>
        
        `;
        }
    }

    if(!resultado){
        resultado = `<p>Nada foi encontrado.</p>`
    }

    section.innerHTML = resultado;


}