package com.backend.vosce.controllers;

import com.backend.vosce.entities.Alunos;
import com.backend.vosce.records.Login;
import com.backend.vosce.services.ServiceAlunos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/alunos")
@CrossOrigin(origins = "*")
public class AlunosControllers {
    @Autowired
    ServiceAlunos serviceAlunos;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody Alunos aluno){
        try {
            serviceAlunos.createAluno(aluno);
            return ResponseEntity.ok("Usuario cadastrado com sucesso!");
        }catch (Exception error){
            return ResponseEntity.internalServerError().body(error);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody Login login){
        try {
            if (serviceAlunos.loginAluno(login)){
                return ResponseEntity.ok("Usuário encontrado e logado com sucesso!");
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception error){
            return ResponseEntity.internalServerError().body(error);
        }
    }
}
