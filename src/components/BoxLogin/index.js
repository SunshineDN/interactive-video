import React, { useState } from 'react'
import "./style.css"
const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");

  function handleMessage(){
    if (email === "" || password === "" || cargo === "" ){
      return
    }
    alert("Você entrou")
  }
  return (
    <div>
      <form className='container'>
        <div className='input-wrapper'>
          <label htmlFor="user">Email</label>
          <input id="user" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Digite o email" required />
          <label className='passLabel' htmlFor="pass">Senha</label>
          <input id='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite a senha" required />
        </div>
        <div className='radio-wrapper'>
          <div className='radios'>
            <input type="radio" id="aluno" name="cargo" value="Aluno" onChange={e => setCargo(e.target.value)} required />
            <label htmlFor="aluno">Aluno</label>
          </div>
          <div className='radios'>
            <input type="radio" id="professor" name="cargo" value="Professor" onChange={e => setCargo(e.target.value)} required />
            <label htmlFor="professor">Professor</label>
          </div>
        </div>
        <input type="submit" className='bot' value="Acessar" onClick={handleMessage} />
      </form>
    </div >
  )
}

export default BoxLogin
