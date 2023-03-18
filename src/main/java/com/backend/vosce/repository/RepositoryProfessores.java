package com.backend.vosce.repository;

import com.backend.vosce.entities.Professores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RepositoryProfessores extends JpaRepository<Professores, String> {
    Optional<Professores> findByEmail(String email);
}
