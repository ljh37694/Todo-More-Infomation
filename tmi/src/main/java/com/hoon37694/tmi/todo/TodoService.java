package com.hoon37694.tmi.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {
    private List<Todo> todos = new ArrayList<>();
    private int cnt = 0;

    public TodoService() {
        todos.add(new Todo(1, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(2, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(5, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(3, "Hello World!", new Date(), false, "hoon37694"));
    }

    public List<Todo> getTodosByUserId(String userId) {
        return todos
                .stream()
                .filter(todo -> todo.getUserId().equals(userId))
                .toList();
    }

    public Todo insertTodo(Todo todo) {
        todo.setId(todos.size() + 1);

        todos.add(todo);

        System.out.println(todo);

        return todo;
    }

    public void deleteTodoById(int id) {
        todos.removeIf(todo -> todo.getId() == id);
    }

    public void updateTodo(Todo todo) {

    }
}
