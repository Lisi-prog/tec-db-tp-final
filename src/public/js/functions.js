

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


function verObras() {
    var url = "http://localhost:3000/api/obrasEmpresa";
    $('#tablaObras').DataTable({            
        "ajax":{
            "url": url,
            "dataSrc":""
        },
        "columns":[
            {"data":"id_obra"},
            {"data":"nom_obra"},
            {"data":"plazo_mes"},
            {"data":"razon_social"},
        ],
    });
};

function prueba(){
    fetch('http://localhost:3000/api/avanceObra')
    .then(result => result.json())
    .then((output) => {
        let res = document.querySelector("#res");
        res.innerHTML = "";

        for(let item of output){
            res.innerHTML += `
            <tr>
                <td> ${item.id_obra} </td>
                <td> ${item.NOM_OBRA} </td>
                <td> ${item.avance} </td>
            </tr>
            `
        }
        
    }).catch(err => console.error(err));
}

function prueba1(){
    fetch('http://localhost:3000/api/obrasEmpresa')
    .then(result => result.json())
    .then((output) => {
        let res = document.querySelector("#res");
        res.innerHTML = "";

        for(let item of output){
            res.innerHTML += `
            <tr>
                <td> ${item.id_obra} </td>
                <td> ${item.nom_obra} </td>
                <td> ${item.plazo_mes} </td>
                <td> ${item.razon_social} </td>
            </tr>
            `
        }
        
    }).catch(err => console.error(err));
}

function prueba2(){
    fetch('http://localhost:3000/api/obrasEmpresa')
    .then(result => result.json())
    .then((output) => {
        let res = document.querySelector("#res");
        res.innerHTML = "";

        for(let item of output){
            res.innerHTML += `
            <tr>
                <td> ${item.id_obra} </td>
                <td> ${item.nom_obra} </td>
                <td> ${item.razon_social} </td>
                <td><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </td>
            </tr>
            `
        }
        
    }).catch(err => console.error(err));
}

function prueba3(id_obra){
    // var hul = $('#idobratxt').val(); //document.querySelector("#idobratxt").value;
    // console.log(hul);
    fetch('http://localhost:3000/api/foja/' + id_obra)
    .then(result => result.json())
    .then((output) => {
        let res = document.querySelector("#res");
        res.innerHTML = "";

        let res2 = document.querySelector("#res2");
        res2.innerHTML = "";

        var b = 0;

        for(let item of output){
            res.innerHTML += `
            <tr>
                <td>${item.id_item}</td>
                <td>${item.den_item}</td>
                <td>${item.ava_acu_ant}</td>
                <td>
                    <div class="input-group">
                        <input type="text" class="form-control" minlength="1" maxlength="5" style="text-align: center;">
                        <span class="input-group-text" id="basic-addon1">%</span>
                      </div>
                </td>
            </tr>
            `
            if(b == 0){
                res2.innerHTML += `
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" value="${item.nom_obra}" disabled>
                            <label for="floatingInputGrid">Obra</label>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" value="${item.fecha}" disabled>
                            <label for="floatingInputGrid">Fecha</label>
                        </div>
                    </div>
                `
                b = 1;
            }
        }
        
    }).catch(err => console.error(err));
}

function mostrarID(){
    let valor = document.querySelector("#idobratxt").value;
    prueba3(valor);
}



$(document).ready(function(){
    let bandera = document.querySelector("#tablaAvance");
    if (bandera != null) {
        prueba();
    }

    let bandera1 = document.querySelector("#tablaObras");
    if (bandera1 != null) {
        prueba1();
    }

    let bandera2 = document.querySelector("#tablaNuevaFoja");
    if (bandera2 != null) {
        prueba2();
    }

}   
);