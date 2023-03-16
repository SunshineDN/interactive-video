import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai"

export const Container = styled.form`
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
    margin: 100px auto 0 auto;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`

export const Input = styled.input.attrs({
    required: true,
})`
    font-family: 'Source Sans Pro', sans-serif;
    &:nth-child(2n) {
        font-weight: 400;
        padding: 0 10px;
        background-color: rgba(119, 131, 177, .3);
        border: 1px solid #7783b1;
        outline: none;
        border-radius: 4px;
        font-size: 1em;
        height: 30px;
    }
    &:nth-child(1n) {
        accent-color: #7783b1;
    }
`

export const Label = styled.label`
    font-size: 1.1em;
    user-select: none;
    font-weight: 600;
    &:nth-child(3) {
        margin-top: 20px
    }
    &:nth-child(2) {
        margin-right: 15px;
    }
`

export const RadioWrapper = styled.div`
    margin: 20px 0;
`

export const Radios = styled.div`
    display: flex;
    align-items: center;
    gap: 0 5px;
`

export const Submit = styled.input.attrs({
    type: "submit",
    value: "Entrar",
})`
    text-align: center;
    color: #f4f7f9;
    background-color: #8da833;
    font-size: 1em;
    font-weight: 600;
    height: 30px;
    width: 70%;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    transition: all .2s ease-in-out;
    &:disabled {
      cursor: not-allowed;
      background-color: gray;
      opacity: .5;
    }
    &:disabled:hover{
      background-color: gray;
      border:none;
      color: white;
    }
    &:hover {
        color: #8da833;
        background-color: #f4f7f9;
        border: 2px solid rgba(119, 131, 177, .6);
    }
`

export const ErrorMsg = styled.div`
  background-color: rgba(206, 151, 151, 0.55);
  width: 70%;
  border: 1px solid red;
  border-radius: 4px;
  margin-top: 5%;
  padding: 10px;
  text-align: justify;
  color: red;
  position: relative;
  transition: all .2s ease-in-out;
  &:hover {
    box-shadow: 0 0 5px 0 red;
  }
`

export const CloseBtn = styled(AiOutlineCloseCircle)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
`