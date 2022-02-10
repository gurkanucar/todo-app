package com.gucardev.todobe.service;

import com.gucardev.todobe.model.Todo;
import com.gucardev.todobe.repository.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;



@Service
@RequiredArgsConstructor
public class TodoService {

    private final TodoRepository todoRepository;
    private final UserService userService;

    public List<Todo> getAllTodosByUserID(Long userID) {
        userService.checkUser(userID);
        return todoRepository.findAllByUserId(userID);
    }

    public List<Todo> getAllCompletedTodosByUserID(Long userID) {
        userService.checkUser(userID);
        return todoRepository.findAllByUserIdAndCompleted(userID, true);
    }

    public List<Todo> getAllNotCompletedTodosByUserID(Long userID) {
        userService.checkUser(userID);
        return todoRepository.findAllByUserIdAndCompleted(userID, false);
    }

    public Todo createTodo(Todo todo) {
        userService.checkUser(todo.getUser().getId());
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Todo todo) {
        Todo existing = getByID(todo.getId());
        existing.setTask(todo.getTask());
        existing.setCompleted(todo.isCompleted());
        existing.setPriority(todo.getPriority());
        return todoRepository.save(existing);
    }

    public Todo delete(Long id) {
        Todo todo = getByID(id);
        todoRepository.delete(todo);
        return todo;
    }

    public Todo getByID(Long id) {
        return todoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("todo not found!"));
    }

}