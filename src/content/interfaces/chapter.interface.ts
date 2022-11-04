import { Task } from './task.interface';

export interface Chapter {
  id: string;
  title: string;
  content: Array<Task>;
}
