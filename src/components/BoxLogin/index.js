import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Container, Input, InputWrapper, Label, Radios, RadioWrapper, Submit } from './styles';

const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const navigate = useNavigate;

  function handleNavigate(e) {
    e.preventDefault();
    if (cargo === "Aluno") {
      navigate("/aluno")
    } else if (cargo === "Professor") {
      navigate("/professor")
    }
  }

  return (
    <>
      <Container onSubmit={e => handleNavigate(e)}>
        <InputWrapper>
          <Label htmlFor='user'>Email</Label>
          <Input id='user' type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <Label htmlFor='pass'>Senha</Label>
          <Input minLength="8" id='pass' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </InputWrapper>
        <RadioWrapper>
          <Radios>
            <Input type="radio" id="aluno" name="cargo" value="Aluno" onChange={e => setCargo(e.target.value)} />
            <Label htmlFor='aluno'>Aluno</Label>
            <Input type="radio" id="professor" name="cargo" value="Professor" onChange={e => setCargo(e.target.value)} />
            <Label htmlFor='professor'>Professor</Label>
          </Radios>
        </RadioWrapper>
        <Submit />
      </Container>
    </>
  )
}

export default BoxLogin
