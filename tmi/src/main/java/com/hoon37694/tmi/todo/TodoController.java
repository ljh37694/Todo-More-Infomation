package com.hoon37694.tmi.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(path = "/todos/{id}")
    public List<Todo> retrieveTodosByUserId(@PathVariable String id) {
        System.out.println(id);

        return todoService.getTodosByUserId(id);
    }
}
