package com.backend.vosce.services;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.records.Login;
import com.backend.vosce.repository.RepositoryAlunos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
public class ServiceAlunos {
    @Autowired
    private RepositoryAlunos alunosRepository;

    public void createAluno(Alunos aluno){
        Optional<Alunos> alunoExist = alunosRepository.findById(aluno.getCpf());
        if (alunoExist.isEmpty()) {
            alunosRepository.save(aluno);
        } else {
            alunoExist.orElseThrow(() -> new
                    ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao cadastrar usuário!"));
        }
    }

    public boolean loginAluno(Login login){
        Optional<Alunos> alunoEmail = alunosRepository.findByEmail(login.email());
        if (alunoEmail.get().getPassword().equals(login.password())){
            return true;
        } else {
            return false;
        }
    }
}
