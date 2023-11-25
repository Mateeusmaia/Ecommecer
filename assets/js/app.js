let lista = document.getElementById(`lista`)

const tenis = [
    {
        nome: "Hublot Geneve",
        descricao: "",
        preco: "",
        url: "",
    },
    {
        nome: "",
        descricao: "",
        preco: "",
        url: "",
    },
    {
        nome: "",
        descricao: "",
        preco: "",
        url: "",
    },
    {
        nome: "",
        descricao: "",
        preco: "",
        url: "",
    },
    {
        nome: "",
        descricao: "",
        preco: "",
        url: "",
    },

    {
        nome: "",
        descricao: "",
        preco: "",
        url: "",
    },

]


function carregar(){
    for (let i = 0; i <= 7; i++) {
        lista.innerHTML +=

        `<div class="col">
            <div class="card" style="width: 18rem;">
                    <img src="${tenis[i].url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${tenis[i].nome}</h5>
                        <p class="card-text">${tenis[i].descricao}</p>
                        <a href="chekout.html" class="btn btn-primary">Go somewhere</a>
            
                    </div>
            </div>
        </div>`

    }
}