package com.autorecruit.reportservice.client;

import com.autorecruit.reportservice.dto.response.ScoringApiApplicantsResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@FeignClient(name = "report-service", url = "http://172.21.85.118:5000", configuration = FeignConfig.class)
public interface ReportFeignClient {
    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    ScoringApiApplicantsResponseDTO generateReport(@RequestPart("requirements") MultipartFile requirements,
                                                   @RequestPart("resumes_zip") MultipartFile resumesZip);
}
