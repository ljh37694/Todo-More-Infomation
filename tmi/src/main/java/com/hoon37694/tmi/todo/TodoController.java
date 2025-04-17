package com.hoon37694.tmi.todo;

import org.springframework.web.bind.annotation.*;

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

    @PostMapping(path = "/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.insertTodo(todo);
    }

    @DeleteMapping(path = "/todos/{id}")
    public void deleteTodoById(@PathVariable int id) {
        todoService.deleteTodoById(id);
    }
}
