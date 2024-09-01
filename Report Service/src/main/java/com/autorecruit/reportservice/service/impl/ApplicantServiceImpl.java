package com.autorecruit.reportservice.service.impl;

import com.autorecruit.reportservice.client.ReportFeignClient;
import com.autorecruit.reportservice.dto.response.ScoringApiApplicantResponseDTO;
import com.autorecruit.reportservice.dto.response.ScoringApiApplicantsResponseDTO;
import com.autorecruit.reportservice.entity.Applicant;
import com.autorecruit.reportservice.entity.ReportData;
import com.autorecruit.reportservice.repository.ApplicantRepository;
import com.autorecruit.reportservice.service.ApplicantService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collection;
import java.util.List;

@Service
@AllArgsConstructor
public class ApplicantServiceImpl implements ApplicantService {
    private final ApplicantRepository applicantRepository;
    private final ReportFeignClient reportFeignClient;
    private final ModelMapper modelMapper;

    public List<Applicant> generateApplicants(MultipartFile requirements, MultipartFile resumesZip, ReportData reportData) {
        ScoringApiApplicantsResponseDTO applicants = reportFeignClient.generateReport(requirements, resumesZip);

        for (ScoringApiApplicantResponseDTO applicantDTO : applicants.getResults()) {
            Applicant applicant = modelMapper.map(applicantDTO, Applicant.class);
            applicant.setReportData(reportData);
            applicantRepository.save(applicant);
        }

        return applicantRepository.findByReportDataId(reportData.getId());
    }

}
