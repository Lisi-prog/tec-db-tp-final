

function cargarFoja(){
    // const ventana = document.getElementById("ventana-principal");
    // const result = await pool.query("select * from Empresa;");
    // console.log(result)
}

function insertaTabla(){
    const ventana = document.getElementById("ventana-principal");
    ventana.innerHTML = "";
}

function nuevaFoja(){
    // var ventana = document.getElementsByClassName("ventana-principal");
    let contenedor = document.createElement("div");
    contenedor.setAttribute("class","contenedor");
    contenedor.setAttribute("id","con-te");
    
    let head = document.createElement("div");
    head.setAttribute("class","head");

    let containerTabla = document.createElement("div");
    containerTabla.setAttribute("class","container-tabla");

    let nav = document.createElement("nav");
    nav.setAttribute("class","navbar bg-light");

    let containerFluid = document.createElement("div");
    containerFluid.setAttribute("class","container-fluid");

    let elementA = document.createElement("a");
    elementA.setAttribute("class", "navbar-brand text-black");
    elementA.innerHTML = "Nueva Foja";

    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action","newFoja");
    form.setAttribute("class","d-flex");

    let input = document.createElement("input");
    input.setAttribute("class","form-control me-2");
    input.setAttribute("placeholder","id_obra");
    input.setAttribute("name","id_obra");

    let button = document.createElement("button");
    button.setAttribute("class","btn btn-outline-success");
    button.setAttribute("type","submit");
    button.innerHTML = "Buscar";

    form.appendChild(input);
    form.appendChild(button);

    containerFluid.appendChild(elementA);
    containerFluid.appendChild(form);

    nav.appendChild(containerFluid);

    head.appendChild(nav);

    contenedor.appendChild(head);
    contenedor.appendChild(containerTabla);

    
    // node.appendChild(contenedor);

    var node = document.getElementById("ven-prin");
    var bandera = document.getElementById("con-te");
    if(!bandera){
        node.insertBefore(contenedor, null);
    }else{
        node.removeChild(bandera);
    }
}

{/* <div class="contenedor">
                    <div class="head">
                        <nav class="navbar bg-light">
                            <div class="container-fluid">
                              <a class="navbar-brand text-black">Nueva Foja</a>
                              <form method="post" action="newFoja" class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="id_obra" aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Buscar</button>
                              </form>
                            </div>
                          </nav>
                    </div>
                    <div class="container-tabla">

                    </div>
</div> */}