package com.gucardev.todobe.dto;

import com.gucardev.todobe.model.Priority;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TodoDto {

    private Long id;
    private Timestamp created;
    private String task;
    private Priority priority;
    private boolean completed;

}
