import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction("tasks/addTask", (text) => {
  return { payload: { id: nanoid(), text, completed: false } };
});

export const deleteTask = createAction("tasks/delTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filter/setStatusFilter");
