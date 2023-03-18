package com.backend.vosce.services;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.entities.Professores;
import com.backend.vosce.records.Login;
import com.backend.vosce.repository.RepositoryProfessores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceProfessores {
    @Autowired
    private RepositoryProfessores professoresRepository;

    public Professores createTeacher(Professores professor){
        Optional<Professores> professorExist = professoresRepository.findById(professor.getCpf());
        if (professorExist.isEmpty()) {
            professoresRepository.save(professor);
            return professor;
        } else {
            return professorExist.orElseThrow(() -> new
                    ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Erro ao cadastrar usuário, já existe um com essas credenciais!"));
        }
    }

    public Optional<Professores> findByCpf(String cpf) throws Exception {
        Optional<Professores> teacherFound = professoresRepository.findById(cpf);
        if (teacherFound.isPresent()) {
            return teacherFound;
        } else {
            throw new Exception("Usuario não encontrado");
        }
    }

    public boolean loginProfessor(Login login){
        Optional<Professores> teacherEmail = professoresRepository.findByEmail(login.email());
        if (teacherEmail.get().getPassword().equals(login.password())){
            return true;
        } else {
            return false;
        }
    }

    public List<Professores> findAllTeachers(){
        List<Professores> professores = professoresRepository.findAll();
        return professores;
    }

    public boolean deleteStudent(String cpf){
        Optional<Professores> teacherExist = professoresRepository.findById(cpf);
        if (teacherExist.isPresent()){
            professoresRepository.deleteById(cpf);
            return true;
        } else {
            return false;
        }
    }
}
