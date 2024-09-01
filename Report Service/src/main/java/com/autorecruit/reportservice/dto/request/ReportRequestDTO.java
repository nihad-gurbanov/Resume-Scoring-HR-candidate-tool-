package com.autorecruit.reportservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReportRequestDTO {
    private Long userId;
    private String reportName;
}
