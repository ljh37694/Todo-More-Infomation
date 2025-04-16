package com.hoon37694.tmi.todo;

import java.util.Date;

public class Todo {
    private int id;
    private String content;
    private Date estimatedDate;
    private boolean isDone;
    private String userId;

    public Todo(int id, String content, Date estimatedDate, boolean isDone, String userId) {
        this.content = content;
        this.estimatedDate = estimatedDate;
        this.id = id;
        this.isDone = isDone;
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getEstimatedDate() {
        return estimatedDate;
    }

    public void setEstimatedDate(Date estimatedDate) {
        this.estimatedDate = estimatedDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "content='" + content + '\'' +
                ", estimatedDate=" + estimatedDate +
                ", id=" + id +
                ", isDone=" + isDone +
                ", userId='" + userId + '\'' +
                '}';
    }
}
