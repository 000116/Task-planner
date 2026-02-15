import React, { useState, useEffect } from 'react'
import TaskForm from '../Components/TaskForm'
import TaskList from '../Components/TaskList'
import { createTask } from '../Interfaces/Task';

const Main = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (title) => {
        const newTask = createTask(title);
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleToggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));
    };

    const handleUpdateTask = (id, newTitle) => {
         setTasks(tasks.map(task =>
            task.id === id ? { ...task, title: newTitle } : task
        ));
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.isCompleted;
        if (filter === 'active') return !task.isCompleted;
        return true;
    });

    return (

        <div className="bg-pastel-card p-8 rounded-[2.5rem] shadow-soft w-full max-w-xl transition-all sm:p-10">
            
            {/* Başlık Rengi ve Fontu */}
            <h1 className="text-4xl font-extrabold text-pastel-blue-dark mb-8 tracking-tight">
                Task Planner
            </h1>

            {/* Form ve Filtreleme Alanı */}
            <div className='mb-8'>
                <TaskForm 
                    onAddTask={handleAddTask} 
                    filter={filter} 
                    setFilter={setFilter} 
                />
            </div>

            {/* Liste Alanı */}
            <TaskList
                tasks={filteredTasks}
                onDeleteTask={handleDeleteTask}
                onToggleTask={handleToggleTask}
                onUpdateTask={handleUpdateTask}
            />
        </div>
    )
}

export default Main