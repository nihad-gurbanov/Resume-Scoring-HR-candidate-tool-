package com.autorecruit.reportservice.service;

import com.autorecruit.reportservice.entity.Applicant;
import com.autorecruit.reportservice.entity.ReportData;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.List;

public interface ApplicantService {
    List<Applicant> generateApplicants(MultipartFile requirements,
                                  MultipartFile resumesZip,
                                  ReportData reportData);

}
