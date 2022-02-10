package com.gucardev.todobe.resolver.user;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.gucardev.todobe.dto.UserDto;
import com.gucardev.todobe.model.User;
import com.gucardev.todobe.request.CreateUser;
import com.gucardev.todobe.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import javax.validation.Valid;

@Component
@RequiredArgsConstructor
public class UserMutationResolver implements GraphQLMutationResolver {

    private final UserService userService;
    private final ModelMapper modelMapper;


    public UserDto createUser(@Valid CreateUser createUser) {
        final var user = modelMapper.map(createUser, User.class);
        return modelMapper.map(userService.createUser(user), UserDto.class);
    }

}

