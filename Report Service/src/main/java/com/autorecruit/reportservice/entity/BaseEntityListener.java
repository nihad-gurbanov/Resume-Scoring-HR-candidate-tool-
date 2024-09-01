package com.autorecruit.reportservice.entity;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import java.time.LocalDateTime;

public class BaseEntityListener {

    @PrePersist
    public void prePersist(BaseEntity baseEntity) {
        LocalDateTime now = LocalDateTime.now();
        baseEntity.setCreatedAt(now);
        baseEntity.setUpdatedAt(now);
    }

    @PreUpdate
    public void preUpdate(BaseEntity baseEntity) {
        baseEntity.setUpdatedAt(LocalDateTime.now());
    }
}