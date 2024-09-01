package com.autorecruit.reportservice.repository;

import com.autorecruit.reportservice.entity.ReportData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportDataRepository extends JpaRepository<ReportData, Long> {
}
