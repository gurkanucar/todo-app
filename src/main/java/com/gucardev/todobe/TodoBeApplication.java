package com.gucardev.todobe;

import com.gucardev.todobe.model.Priority;
import com.gucardev.todobe.model.Todo;
import com.gucardev.todobe.model.User;
import com.gucardev.todobe.service.TodoService;
import com.gucardev.todobe.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoBeApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(TodoBeApplication.class, args);
    }


    @Autowired
    TodoService todoService;

    @Autowired
    UserService userService;

    @Override
    public void run(String... args) throws Exception {

        userService.createUser(User.builder()
                .username("@grkn")
                .name("gurkan")
                .build());


        todoService.createTodo(Todo.builder()
                .task("water the plants")
                .priority(Priority.HIGH)
                .completed(true)
                .user(userService.getUserByID(1L))
                .build());

        todoService.createTodo(Todo.builder()
                .task("wash the dishes")
                .priority(Priority.MEDIUM)
                .user(userService.getUserByID(1L))
                .build());


        todoService.createTodo(Todo.builder()
                .task("go for a walk 30 min")
                .priority(Priority.HIGH)
                .user(userService.getUserByID(1L))
                .build());


        todoService.createTodo(Todo.builder()
                .task("read book")
                .priority(Priority.LOW)
                .user(userService.getUserByID(1L))
                .build());

        todoService.createTodo(Todo.builder()
                .task("prepare dinner")
                .priority(Priority.MEDIUM)
                .completed(true)
                .user(userService.getUserByID(1L))
                .build());

        todoService.createTodo(Todo.builder()
                .task("call Jon")
                .priority(Priority.MEDIUM)
                .user(userService.getUserByID(1L))
                .build());

    }
}
