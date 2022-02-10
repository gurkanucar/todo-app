package com.gucardev.todobe.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateUser {

    @NotNull
    @Size(min = 3, max = 20)
    private String username;

    @NotNull
    @Max(30)
    private String name;

}