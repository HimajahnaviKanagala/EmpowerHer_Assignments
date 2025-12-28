import AxiosInstance from "./AxiosInstance";

export const getTodos = () => {
  return AxiosInstance.get("/todos");
};

export const getTodoById = (id) => {
  return AxiosInstance.get(`/todos/${id}`);
};
