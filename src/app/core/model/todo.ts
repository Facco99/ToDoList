import { TodoStep } from './todo-step';

export interface Todo {
    id: number;
    title: string;
    description: string;
    steps: TodoStep[];
    users: string[];
}
