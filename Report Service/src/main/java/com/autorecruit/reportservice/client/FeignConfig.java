package com.autorecruit.reportservice.client;

import feign.Request;
import org.springframework.context.annotation.Bean;

public class FeignConfig {

    @Bean
    public Request.Options options() {
        return new Request.Options(5000, 120000); // 5 seconds connect timeout, 30 seconds read timeout
    }
}
