package com.gucardev.todobe.resolver.user;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.gucardev.todobe.dto.UserDto;
import com.gucardev.todobe.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserQueryResolver implements GraphQLQueryResolver {

    private final UserService userService;
    private final ModelMapper modelMapper;


    public UserDto getUser(Long id) {
        return modelMapper.map(userService.getUserByID(id), UserDto.class);
    }

    public UserDto getUserByUsername(String username) {
        return modelMapper.map(userService.getUserByUsername(username), UserDto.class);
    }

}
