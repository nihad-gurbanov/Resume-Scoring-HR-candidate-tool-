package com.autorecruit.reportservice.dto.response;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScoringApiApplicantResponseDTO {
    @JsonProperty("file_name")
    private String fileName;
    @JsonProperty("original_link")
    private String originalLink;
    @JsonProperty("similarity_score")
    private String similarityScore;
}
