package com.autorecruit.reportservice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApplicantResponseDTO {
    private Long id;
    private String filename;
    private String fileUrl;
    private String score;
    private Long reportDataId;
}
