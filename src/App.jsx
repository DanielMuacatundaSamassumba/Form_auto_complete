import { useState } from 'react'
import './App.css'

function App() {
  const [Bi, setBi]=  useState("")
const handlebi =async(e)=>{

  if(e.target.value.length == 14){
    setBi(e.target.value)
    await fetch(`https://consulta.edgarsingui.ao/consultar/${Bi}`).then((response)=>{
   console.log(response.json())
  
  })

  }
}

  return (

    <div className='container'>
      <div className="title">
        <h2>Formulario de Cadastro</h2>
      </div>
      <div className="content">
        <div className="content-input">
          <input type="text" placeholder='Nº BI' onChange={handlebi} />
          <input type="text" placeholder='Nome Completo' disabled/>
        </div>
        <div className="content-input">
          <input type="text" placeholder='Data de Nascimento' disabled/>
          <input type="text"  placeholder='Morada' disabled/>
        </div>
        <div className="btn">
          <button>Cadastrar</button>
        </div>
      </div>
    </div>

  )
}

export default App
