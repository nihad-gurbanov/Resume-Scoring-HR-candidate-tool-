package com.autorecruit.reportservice.service.impl;


import com.autorecruit.reportservice.dto.response.ReportResponseDTO;
import com.autorecruit.reportservice.entity.Report;
import com.autorecruit.reportservice.repository.ReportRepository;
import com.autorecruit.reportservice.service.ReportDataService;
import com.autorecruit.reportservice.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {

    private final ReportDataService reportDataService;
    private final ReportRepository reportRepository;
    private final ModelMapper modelMapper;

    public ReportResponseDTO generateReport(MultipartFile requirements,
                                            MultipartFile resumesZip,
                                            Long userId,
                                            String reportName) {

        Report report = new Report();
        report.setUserId(userId);
        report.setReportName(reportName);

        report.setReportData(reportDataService.generateReportData(requirements, resumesZip));

        reportRepository.save(report);
        return modelMapper.map(report, ReportResponseDTO.class);
    }


    public Collection<Object[]> getApplicantsByUserIdAndReportId(Long userId, Long reportId) {
        return reportRepository.findApplicantsByUserIdAndReportId(userId, reportId);
    }

    @Override
    public List<ReportResponseDTO> getReportsByUserId(Long userId) {
        return reportRepository.findReportsByUserId(userId);
    }
}
