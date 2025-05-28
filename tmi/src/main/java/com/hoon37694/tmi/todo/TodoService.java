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
        todos.add(new Todo(3, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(4, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(5, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(6, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(7, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(8, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(9, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(10, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(11, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(12, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(13, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(14, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(15, "Hello World!", new Date(), false, "hoon37694"));
        todos.add(new Todo(16, "Hello World!", new Date(), false, "hoon37694"));
    }

    public List<Todo> getTodosByUserId(String userId) {
        return todos
                .stream()
                .filter(todo -> todo.getUserId().equals(userId))
                .toList();
    }

    public Todo getTodoById(int id) {
        Todo tmp = todos.stream().filter(todo -> todo.getId() == id).toList().getFirst();
        System.out.println(tmp);

        return tmp;
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
        for (int i = 0; i < todos.size(); i++) {
            System.out.println(todos.get(i));
            if (todos.get(i).getId() == todo.getId()) {
                todos.set(i, todo);
                System.out.println("updated " + todo);
            }
        }
    }
}
