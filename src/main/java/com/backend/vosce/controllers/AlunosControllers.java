package com.backend.vosce.controllers;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.records.Login;
import com.backend.vosce.services.ServiceAlunos;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "*")
public class AlunosControllers {
    @Autowired
    ServiceAlunos serviceAlunos;

    @GetMapping("/")
    public ResponseEntity<List<Alunos>> findAll(){
        try {
            List<Alunos> allStudents = serviceAlunos.findAllStudents();
            return ResponseEntity.ok().header("Header-Custom", "Lista de Alunos").body(allStudents);
        } catch (Exception error){
            return ResponseEntity.internalServerError().body((List<Alunos>) error);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Alunos aluno){
        try {
            Alunos createdStudent = serviceAlunos.createAluno(aluno);
            URI uri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/alunos/{cpf}")
                    .buildAndExpand(createdStudent.getCpf())
                    .toUri();

            return ResponseEntity.created(uri).header("Custom-Header", "Aluno criado com sucesso!").body(aluno);
        }catch (Exception error){
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @GetMapping("/{cpf}")
    public ResponseEntity<Object> findByCpf(@PathVariable String cpf){
        try {
            Optional<Alunos> studentFound = serviceAlunos.findByCpf(cpf);
            if (studentFound != null) {
                return ResponseEntity.ok().header("Custom-Header", "Usuário encontrado!").body(studentFound);
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
            if (serviceAlunos.loginAluno(login)){
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
            if (serviceAlunos.deleteStudent(cpf)){
                return ResponseEntity.status(202).body("Usuário deletado com sucesso!");
            } else {
                return ResponseEntity.status(404).body("Usuário não encontrado");
            }
        } catch (Exception err) {
            return ResponseEntity.internalServerError().body(err);
        }
    }
}
