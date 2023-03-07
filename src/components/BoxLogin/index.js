import React from 'react'
import "./style.css"
const BoxLogin = () => {
  return (
    <div>
        
        <div className='main'>
        <h5>Usuario</h5>
    <form action="#"> <input type="email" placeholder="Digite o email" /> 
    <h5>Senha</h5>
    <input type="password" placeholder="Digite a senha" /> 
    <br/>
    <br/><button className='bot'>Acessar</button>
     </form>
     </div>
     

     <br/>  
    <div className='radio'>
     <fieldset>
     <input type="radio" id="Aluno" name="cargo" value="Aluno"
             checked/>
      <label for="aluno">Aluno</label>
      <input type="radio" id="Professor" name="cargo" value="Professor"/    >
      <label for="dewey">Professor</label>
     </fieldset>
     </div>
        

     </div>
        
        
     
  )
}

export default BoxLogin
 