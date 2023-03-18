package com.backend.vosce.repository;

import com.backend.vosce.entities.Alunos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepositoryAlunos extends JpaRepository<Alunos, String> {
    Optional<Alunos> findByEmail(String email);
}
