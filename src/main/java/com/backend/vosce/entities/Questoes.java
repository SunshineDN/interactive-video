package com.backend.vosce.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;
@Embeddable
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Table(name = "questoes")
public class Questoes {
    @Id
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String responseType;
    @Column(nullable = false)
    private LocalTime responseTime;
}
