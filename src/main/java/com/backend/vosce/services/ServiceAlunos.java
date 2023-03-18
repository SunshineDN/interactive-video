package com.backend.vosce.services;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.records.Login;
import com.backend.vosce.repository.RepositoryAlunos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceAlunos {
    @Autowired
    private RepositoryAlunos alunosRepository;

    public Alunos createAluno(Alunos aluno){
        Optional<Alunos> alunoExist = alunosRepository.findById(aluno.getCpf());
        if (alunoExist.isEmpty()) {
            alunosRepository.save(aluno);
            return aluno;
        } else {
            return alunoExist.orElseThrow(() -> new
                    ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao cadastrar usuário, já existe um com essas credenciais!"));
        }
    }

    public Optional<Alunos> findByCpf(String cpf) throws Exception {
        Optional<Alunos> studentFound = alunosRepository.findById(cpf);
        if (studentFound.isPresent()) {
            return studentFound;
        } else {
            throw new Exception("Usuario não encontrado");
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

    public List<Alunos> findAllStudents(){
        List<Alunos> alunos = alunosRepository.findAll();
        return alunos;
    }

    public boolean deleteStudent(String cpf){
        Optional<Alunos> alunoExist = alunosRepository.findById(cpf);
        if (alunoExist.isPresent()){
            alunosRepository.deleteById(cpf);
            return true;
        } else {
            return false;
        }
    }
}
