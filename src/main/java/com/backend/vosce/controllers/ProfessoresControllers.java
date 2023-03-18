package com.backend.vosce.controllers;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.entities.Professores;
import com.backend.vosce.records.Login;
import com.backend.vosce.services.ServiceAlunos;
import com.backend.vosce.services.ServiceProfessores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/professores")
@CrossOrigin(origins = "*")
public class ProfessoresControllers {
    @Autowired
    ServiceProfessores serviceProfessores;

    @GetMapping("/")
    public ResponseEntity<List<Professores>> findAll(){
        try {
            List<Professores> allTeachers = serviceProfessores.findAllTeachers();
            return ResponseEntity.ok().header("Header-Custom", "Lista de Alunos").body(allTeachers);
        } catch (Exception error){
            return ResponseEntity.internalServerError().body((List<Professores>) error);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Professores professor){
        try {
            Professores createdTeacher = serviceProfessores.createTeacher(professor);
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/professores/{cpf}")
                    .buildAndExpand(createdTeacher.getCpf())
                    .toUri();

            return ResponseEntity.created(uri).header("Custom-Header", "Aluno criado com sucesso!").body(professor);
        }catch (Exception error){
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @GetMapping("/{cpf}")
    public ResponseEntity<Object> findByCpf(@PathVariable String cpf){
        try {
            Optional<Professores> teacherFound = serviceProfessores.findByCpf(cpf);
            if (teacherFound != null) {
                return ResponseEntity.ok().header("Custom-Header", "Usuário encontrado!").body(teacherFound);
            } else {
                return ResponseEntity.notFound().header("Custom-Header", "Usuário não encontrado!").build();
            }
        } catch (Exception err) {
            return ResponseEntity.internalServerError().body(err);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Login login){
        try {
            if (serviceProfessores.loginProfessor(login)){
                return ResponseEntity.ok().body("Usuário encontrado e logado com sucesso!");
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception error){
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @DeleteMapping("/{cpf}")
    public ResponseEntity<Object> deleteStudent(@PathVariable String cpf){
        try {
            if (serviceProfessores.deleteStudent(cpf)){
                return ResponseEntity.status(202).body("Usuário deletado com sucesso!");
            } else {
                return ResponseEntity.status(404).body("Usuário não encontrado");
            }
        } catch (Exception err) {
            return ResponseEntity.internalServerError().body(err);
        }
    }
}
