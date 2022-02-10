package com.gucardev.todobe.request;


import com.gucardev.todobe.model.Priority;
import lombok.Data;

@Data
public class UpdateTodo {
    private Long id;
    private String task;
    private Priority priority;
    private boolean completed;
}
