package com.gucardev.todobe.resolver.todo;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.gucardev.todobe.dto.TodoDto;
import com.gucardev.todobe.service.TodoService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class TodoQueryResolver implements GraphQLQueryResolver {

    private final TodoService todoService;
    private final ModelMapper modelMapper;


    public List<TodoDto> getAllTodos(Long id, Boolean completed) {
        if (completed != null) {
            var todos = completed ? todoService.getAllCompletedTodosByUserID(id) :
                    todoService.getAllNotCompletedTodosByUserID(id);
            return todos.stream().map(x -> modelMapper.map(x, TodoDto.class))
                    .collect(Collectors.toList());
        } else {
            return todoService.getAllTodosByUserID(id)
                    .stream().map(x -> modelMapper.map(x, TodoDto.class))
                    .collect(Collectors.toList());
        }
    }


}