import {useNavigate} from "react-router";
import {api} from "../../services/api";
import {useCallback} from "react";

export function useLoginValidate (email, password, cargo, setError) {
    const navigate = useNavigate();
    return (
        useCallback(async (e) => {
            e.preventDefault();
            try {
                console.log(`Enviando requisição para: login/${cargo};\n Dados: ${email}, ${password}`)
                const response = await api.post("login/" + cargo, { email, password });
                if (response.status === 200) {
                    console.log("Autorizado, " + cargo)
                    navigate("/"+cargo)
                }
            } catch (error) {
                console.error("Error", error)
                setError(error.message)
            }
        }, [email, password, cargo, setError, navigate])
    )

}