package com.autorecruit.reportservice.dto.response;

import com.autorecruit.reportservice.entity.ReportData;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReportResponseDTO {
    private Long reportId;
    private Long userId;
    private String reportName;
    private ReportData reportData;

    @Override
    public String toString() {
        return "ReportResponseDTO{" +
                "reportId=" + reportId +
                ", userId=" + userId +
                ", reportName=" + reportName +
                ", reportData=" + reportData +
                '}';
    }


}
