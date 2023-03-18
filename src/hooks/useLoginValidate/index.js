import {useNavigate} from "react-router";
import {api} from "../../services/api";
import {useCallback} from "react";

export function useLoginValidate (email, password, cargo, setError, setIsDisabled) {
    const navigate = useNavigate();
    return (
        useCallback(async (e) => {
            e.preventDefault();
            try {
                setIsDisabled(true);
                console.log(`Enviando requisição para: login/${cargo};\n Dados: ${email}, ${password}`)
                let response;
                if (cargo === "Aluno"){
                    response = await api.post("/alunos/login", { email, password });
                } else if (cargo === "Professor"){
                    response = await api.post("/professores/login", { email, password });
                }
                setIsDisabled(false)
                if (response.status === 200) {
                    console.log("Autorizado, " + cargo)
                    navigate("/"+cargo)
                }
            } catch (error) {
                console.error("Error", error)
                setError(error.message)
                setIsDisabled(false)
            }
        }, [email, password, cargo, setError, navigate, setIsDisabled])
    )

}
