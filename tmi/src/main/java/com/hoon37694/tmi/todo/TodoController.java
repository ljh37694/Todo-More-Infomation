package com.hoon37694.tmi.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {
    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping(path = "/users/{id}")
    public List<Todo> retrieveTodosByUserId(@PathVariable String id) {
        System.out.println(id);

        return todoService.getTodosByUserId(id);
    }

    @GetMapping(path = "/todos/{id}")
    public Todo retrieveTodoById(@PathVariable int id) {
        System.out.println(id);

        return todoService.getTodoById(id);
    }

    @PostMapping(path = "/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.insertTodo(todo);
    }

    @DeleteMapping(path = "/todos/{id}")
    public void deleteTodoById(@PathVariable int id) {
        todoService.deleteTodoById(id);
    }

    @PutMapping(path = "/todos")
    public void updateTodo(@RequestBody Todo todo) {
        todoService.updateTodo(todo);
    }
}
