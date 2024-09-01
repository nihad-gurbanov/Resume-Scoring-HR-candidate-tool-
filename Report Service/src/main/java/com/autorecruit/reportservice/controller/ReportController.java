package com.autorecruit.reportservice.controller;

import com.autorecruit.reportservice.dto.response.ReportResponseDTO;
import com.autorecruit.reportservice.entity.Report;
import com.autorecruit.reportservice.service.impl.ReportServiceImpl;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Collection;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/report")
@Slf4j
public class ReportController {

private final ReportServiceImpl reportService;

    @PostMapping(value = "/generate", consumes = "multipart/form-data")
    public ReportResponseDTO generateReport(
            @RequestParam("userId") Long userId,
            @RequestParam("reportName") String reportName,
            @RequestParam("requirements") MultipartFile requirements,
            @RequestParam("resumesZip") MultipartFile resumesZip) {

        return reportService.generateReport(requirements, resumesZip, userId, reportName);
    }

    @GetMapping("/get")
    public Collection<Object[]> getReportByUserIdAndReportId(
            @RequestParam("userId") Long userId,
            @RequestParam("reportId") Long reportId) {
        return reportService.getApplicantsByUserIdAndReportId(userId, reportId);
    }

    @GetMapping("/get-all-reports")
    public List<ReportResponseDTO> getReportsByUserId(@RequestParam("userId") Long userId) {
        return reportService.getReportsByUserId(userId);
    }
}
