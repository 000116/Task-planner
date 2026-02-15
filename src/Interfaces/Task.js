export const createTask = (title) => {
  return {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date().toISOString(),
  };
};

export const updateTask = (task, updates) => {
  return {
    ...task,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
};

export const validateTask = (title) => {
  return title && title.trim().length > 0;
};