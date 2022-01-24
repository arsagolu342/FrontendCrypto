import React, { useState } from 'react'
function Create() {

  const [nombre, setNombre] = useState("");
  const [usd, setUsd] = useState("");

  function saveCrypto() {
    let data = { nombre, usd }

    // console.warn(nombre, usd);
    fetch("http://localhost:3001/api/createCryptos", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result)
      })
    })
  }

  return (


    <div className='container'> 
   <div class="input-group">
   <span className="input-group-text btn btn-info" id="basic-addon1">Nombre</span>
          <input type='text' value={nombre} onChange={(e) => { setNombre(e.target.value) }} name='nombre' />
   
          <span className="input-group-text btn btn-info" id="basic-addon1">Valor en $</span>
          <input type='number' value={usd} onChange={(e) => { setUsd(e.target.value) }} name='usd' /> 
         <button className='btn btn-info' type="button" onClick={saveCrypto} >Guardar</button> 
</div>
 
    </div>
  )

 
};

export default Create
