package com.autorecruit.reportservice.repository;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ApplicantRepositoryTest {
    @Autowired
    ApplicantRepository underTest;

    @Test
    void ShouldReturnApplicantWhenFindByReportDataId() {
        // Given
        Long reportDataId = 1L;
        // When
        var result = underTest.findByReportDataId(reportDataId);
        // Then
        assertNotNull(result);
    }
}