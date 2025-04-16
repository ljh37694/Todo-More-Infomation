package com.hoon37694.tmi.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {
    private static List<Todo> todos = new ArrayList<>();
    private int cnt = 0;

    static {
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
}
