package com.gucardev.todobe.request;


import com.gucardev.todobe.model.Priority;
import com.gucardev.todobe.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateTodo {

    @NotNull
    private String task;

    @NotNull
    private Priority priority;

    @NotNull
    private User user;

}
