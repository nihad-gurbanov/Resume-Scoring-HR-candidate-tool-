package com.autorecruit.reportservice.service;

import com.autorecruit.reportservice.entity.ReportData;
import org.springframework.web.multipart.MultipartFile;

public interface ReportDataService {
    ReportData generateReportData(MultipartFile requirements, MultipartFile resumesZip);
}
