import { useState } from "react";
import type { TodoType } from "../types/todo";

type FilterType = "all" | "active" | "completed";

export const useTodoFilter = (todos: TodoType[]) => {
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredTasks = todos.filter((task) => {
        if (filter === "all") return true;
        if (filter === "active") return !task.isActive;
        if (filter === "completed") return task.isActive;
        return true;
    });

    return {
        filter,
        setFilter,
        filteredTasks,
    };
};