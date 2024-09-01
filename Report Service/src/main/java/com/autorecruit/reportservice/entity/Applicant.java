package com.autorecruit.reportservice.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "applicants")
public class Applicant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "applicant_id")
    private Long applicantId;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "original_link")
    private String originalLink;

    @Column(name = "similarity_score")
    private String similarityScore;


    @ManyToOne
    @JoinColumn(name = "report_data_id")
    @JsonBackReference
    private ReportData reportData;

    @Override
    public String toString() {
        return "Applicant{" +
                "applicantId=" + applicantId +
                ", fileName='" + fileName + '\'' +
                ", originalLink='" + originalLink + '\'' +
                ", similarityScore='" + similarityScore + '\'' +
                '}';
    }
}
