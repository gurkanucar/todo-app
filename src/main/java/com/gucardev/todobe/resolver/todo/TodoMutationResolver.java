package com.gucardev.todobe.resolver.todo;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.gucardev.todobe.dto.TodoDto;
import com.gucardev.todobe.model.Todo;
import com.gucardev.todobe.request.CreateTodo;
import com.gucardev.todobe.request.UpdateTodo;
import com.gucardev.todobe.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import javax.validation.Valid;

@Component
@RequiredArgsConstructor
public class TodoMutationResolver implements GraphQLMutationResolver {

    private final TodoService todoService;
    private final ModelMapper modelMapper;


    public TodoDto createTodo(@Valid CreateTodo createTodo) {
        final var todo = modelMapper.map(createTodo, Todo.class);
        return modelMapper.map(todoService.createTodo(todo), TodoDto.class);
    }

    public TodoDto updateTodo(@Valid UpdateTodo updateTodo) {
        final var todo = modelMapper.map(updateTodo, Todo.class);
        return modelMapper.map(todoService.updateTodo(todo), TodoDto.class);
    }

    public TodoDto delete(Long id) {
        return modelMapper.map(todoService.delete(id), TodoDto.class);
    }


}
