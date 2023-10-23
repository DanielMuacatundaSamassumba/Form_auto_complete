import { useState } from 'react'
import './App.css'

function App() {
  const [Bi, setBi]=  useState("")
   const [name,setName]=useState("")
   const [Birth,setBirth]=useState("")
   const [Place,setPlace]=useState("")
const handlebi =async(e)=>{



  await fetch(`https://consulta.edgarsingui.ao/consultar/${e.target.value}`).then((response)=>{
response.json().then((res)=>{
setName(res.name)
setBirth(res.data_de_nascimento)
setPlace(res.morada)

})
  
  })

  
}

  return (

    <div className='container'>
      <div className="title">
        <h2>Formulario de Cadastro</h2>
      </div>
      <div className="content">
        <div className="content-input">
          <input type="text" placeholder='Nº BI' onChange={handlebi} />
          <input type="text" placeholder='Nome Completo' disabled value={name}/>
        </div>
        <div className="content-input">
          <input type="text" placeholder='Data de Nascimento' disabled value={Birth}/>
          <input type="text"  placeholder='Morada' disabled value={Place}/>
        </div>
        <div className="btn">
          <button>Cadastrar</button>
        </div>
      </div>
    </div>

  )
}

export default App
