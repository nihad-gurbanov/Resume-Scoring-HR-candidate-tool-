package com.autorecruit.reportservice.service;

import com.autorecruit.reportservice.dto.response.ReportResponseDTO;
import com.autorecruit.reportservice.entity.Applicant;
import com.autorecruit.reportservice.entity.Report;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.List;

public interface ReportService {
    ReportResponseDTO generateReport(MultipartFile requirements,
                                     MultipartFile resumesZip,
                                     Long userId,
                                     String reportName);

    Collection<Object[]> getApplicantsByUserIdAndReportId(Long userId, Long reportId);

    List<ReportResponseDTO> getReportsByUserId(Long userId);
}
