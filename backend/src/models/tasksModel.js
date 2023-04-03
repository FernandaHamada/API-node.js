const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) =>{
    const { title } = task;
    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks(title, status, create_at) VALUES (? ,? ,?)';
    const [createdTask] = await connection.execute(query, [title, 'pending', dateUTC]);
    return {insertId: createdTask.insertId};
}

const deleteTask = async (idTask) =>{
    const removedTask = await connection.execute('DELETE FROM tasks WHERE idTasks = ?', [idTask]);
    return removedTask;
}

const updateTask = async(idTask, task) =>{
    const query = 'UPDATE tasks SET title = ? , status = ? WHERE idTasks = ?';
    const {title, status} = task;
    const [updatedTaks] = await connection.execute(query, [title, status, idTask]);
    return updatedTaks;
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};