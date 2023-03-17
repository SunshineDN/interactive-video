package com.backend.vosce.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Entity
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Table(name = "avaliacoes")
public class Avaliacoes {
    @Id
    @Column(nullable = false)
    private String title;

    private String description;
    @Column(nullable = false)

    private String video;
    @ElementCollection
    @Column(nullable = false)
    private List<Questoes> questoes;
}
