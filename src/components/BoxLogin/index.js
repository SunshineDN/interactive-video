import React, {useEffect, useState} from 'react'
import {ErrorMsg, CloseBtn, Container, Input, InputWrapper, Label, Radios, RadioWrapper, Submit} from './styles';
import {useLoginValidate} from "../../hooks/useLoginValidate";

const BoxLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [error, setError] = useState("Erro encontrado: O email ou a senha estão inválidos, favor conferir!");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (email !== "" && password !== "" && cargo !== "") {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [email, password, cargo])

  return (
    <>
      <Container onSubmit={ useLoginValidate(email, password, cargo, setError) } msg={!!error}>
        <InputWrapper>
          <Label htmlFor='user'>Email</Label>
          <Input id='user' type="email" name={"email"} value={email} onChange={e => setEmail(e.target.value)} />
          <Label htmlFor='pass'>Senha</Label>
          <Input minLength="8" id='pass' type="password" name={"password"} value={password} onChange={e => setPassword(e.target.value)} />
        </InputWrapper>
        <RadioWrapper>
          <Radios>
            <Input type="radio" id="aluno" name="cargo" value="Aluno" onChange={e => setCargo(e.target.value)} />
            <Label htmlFor='aluno'>Aluno</Label>
            <Input type="radio" id="professor" name="cargo" value="Professor" onChange={e => setCargo(e.target.value)} />
            <Label htmlFor='professor'>Professor</Label>
          </Radios>
        </RadioWrapper>
        <Submit disabled={isDisabled} />
        {error ?
            <ErrorMsg>
              {error}
              <CloseBtn onClick={e => setError("")}/>
            </ErrorMsg> : null}
      </Container>
    </>
  )
}

export default BoxLogin
