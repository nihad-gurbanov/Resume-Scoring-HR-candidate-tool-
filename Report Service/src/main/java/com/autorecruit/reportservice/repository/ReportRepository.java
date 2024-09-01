package com.autorecruit.reportservice.repository;

import com.autorecruit.reportservice.dto.response.ReportResponseDTO;
import com.autorecruit.reportservice.entity.Applicant;
import com.autorecruit.reportservice.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;

public interface ReportRepository extends JpaRepository<Report, Long> {
    @Query(value = """
        SELECT a.* 
        FROM applicants a 
        JOIN report_data rd ON a.report_data_id = rd.id 
        JOIN reports r ON rd.id = r.report_data_id 
        WHERE r.report_id = :reportId 
          AND r.user_id = :userId
        """, nativeQuery = true)
    Collection<Object[]> findApplicantsByUserIdAndReportId(@Param("userId") Long userId, @Param("reportId") Long reportId);

    @Query("SELECT new com.autorecruit.reportservice.dto.response.ReportResponseDTO(r.reportId, r.userId, r.reportName, r.reportData) " +
            "FROM Report r WHERE r.userId = :userId")
    List<ReportResponseDTO> findReportsByUserId(@Param("userId") Long userId);

}