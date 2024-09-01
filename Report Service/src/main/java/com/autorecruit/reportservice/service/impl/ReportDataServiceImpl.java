package com.autorecruit.reportservice.service.impl;

import com.autorecruit.reportservice.dto.response.ScoringApiApplicantResponseDTO;
import com.autorecruit.reportservice.dto.response.ScoringApiApplicantsResponseDTO;
import com.autorecruit.reportservice.entity.Applicant;
import com.autorecruit.reportservice.entity.Report;
import com.autorecruit.reportservice.entity.ReportData;
import com.autorecruit.reportservice.repository.ReportDataRepository;
import com.autorecruit.reportservice.service.ReportDataService;
import com.autorecruit.reportservice.service.ReportService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class ReportDataServiceImpl implements ReportDataService {
    private final ApplicantServiceImpl applicantService;
    private final ReportDataRepository reportDataRepository;

    public ReportData generateReportData(MultipartFile requirements, MultipartFile resumesZip) {
        ReportData reportData = new ReportData();
        reportDataRepository.save(reportData);

        reportData.setResults(applicantService.generateApplicants(requirements, resumesZip, reportData));

        return reportDataRepository.save(reportData);
    }
}
