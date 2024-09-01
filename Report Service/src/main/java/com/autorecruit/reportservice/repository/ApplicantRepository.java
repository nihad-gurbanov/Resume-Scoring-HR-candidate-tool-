package com.autorecruit.reportservice.repository;

import com.autorecruit.reportservice.entity.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    List<Applicant> findByReportDataId(Long reportDataId);
}
