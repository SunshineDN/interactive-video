import React, { useState } from 'react'
import { Container, Input, InputWrapper, Label, Radios, RadioWrapper, Submit } from './styles';

const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");

  return (
    <>
      <Container action={"/" + cargo}>
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
