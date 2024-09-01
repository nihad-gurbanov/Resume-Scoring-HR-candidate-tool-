package com.autorecruit.reportservice.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScoringApiApplicantsResponseDTO {
    private List<ScoringApiApplicantResponseDTO> results;
}

