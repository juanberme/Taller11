const ID = document.getElementById("ID");
const Nombre = document.getElementById("Nombre");
const registrar = document.getElementById("registrar");
const votaId = document.getElementById("votaId");
const votarBtn = document.getElementById("votarBtn");//
const verCan = document.getElementById("verCandidato");
const verVote = document.getElementById("verVotaciones");
const database = firebase.database();

candidate = () =>{

    let id = ID.value;
    let name = Nombre.value;
    let vID = votaId.value;

    if(id === ''){
        alert('falta tu ID');
        return;
    }

    if(name === ''){
        alert('falta tu nombre');
        return;
    }

    //ref.child("users").orderByChild("ID").equalTo("U1EL5623").once("value",snapshot => { const userData = snapshot.val(); if (userData){ console.log("exists!"); } });

    firebase.database.ref
    let candidatos = {
        identificación: id,
        nombreC: name,
    }

    let json = JSON.stringify(candidatos);
    console.log(json);
    //console.log(candidatos);

    database.ref('users/').push().set(candidatos);

     
    
}

registrar.addEventListener('click', candidate);

database.ref('users').on('value', function(data){
    data.forEach(function(comprobar){
        let valor = comprobar.val();
        let id = valor.id;
        
        if(id === i){
            igual = true;
        }

        if(igual === false){
            database.ref('candidate').push().set(candidatos);
        }else{
            alert('usuario ya existente');
            return;
        }
    })

}
)
