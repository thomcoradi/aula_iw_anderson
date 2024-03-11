function banco(){
    const ds = [
                    {id:1,login:"rogers",senha:"12345",email:"rogers@gmail.com",fone:"4455-2235"},
                    {id:1,login:"raul",senha:"67890",email:"rogers@gmail.com",fone:"4455-2234"},
                    {id:1,login:"ratinho",senha:"15161",email:"rogers@gmail.com",fone:"4455-2233"}
                ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados

}

function cadCliente(){
    let id = document.getElementById("id").value
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value
    let em = document.getElementById("email").value
    let fn = document.getElementById("fone").value

    let meuId = parseInt(id)

    const ds = {id:meuId,login:lg,senha:sn,email:em,fone:fn}

    alert(ds)
}