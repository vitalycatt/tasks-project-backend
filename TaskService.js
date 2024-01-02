import Task from "./Task.js";

class TaskService {
  async create(task) {
    const createdTask = await Task.create(task);
    return createdTask;
  }

  async getAll() {
    try {
      const tasks = await Task.find();
      return tasks;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(id) {
    try {
      if (!id) {
        throw new Error("Id is not defined");
      }
      const task = await Task.findById(id);
      return task;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(task) {
    try {
      if (!task._id) {
        throw new Error("Id is not defined");
      }
      const updatedTask = await Task.findByIdAndUpdate(task._id, task, {
        new: true,
      });
      return updatedTask;
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(id) {
    try {
      if (!id) {
        throw new Error("Id is not defined");
      }
      const task = await Task.findByIdAndDelete(id);
      return task;
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TaskService();
