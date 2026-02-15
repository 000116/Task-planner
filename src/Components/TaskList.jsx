import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiX } from "react-icons/fi"; 

const TaskList = ({ tasks, onDeleteTask, onToggleTask, onUpdateTask }) => {
    if (tasks.length === 0) {
        return <p className="text-center text-pastel-gray py-4">Henüz bir görev yok.</p>;
    }

    return (
        <div className="space-y-4">
            {tasks.map(task => (
                 <TaskItem 
                    key={task.id} 
                    task={task} 
                    onDeleteTask={onDeleteTask} 
                    onToggleTask={onToggleTask}
                    onUpdateTask={onUpdateTask}
                 />
            ))}
        </div>
    );
};

const TaskItem = ({ task, onDeleteTask, onToggleTask, onUpdateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleEditSubmit = () => {
        if(editTitle.trim()){
            onUpdateTask(task.id, editTitle);
            setIsEditing(false);
        }
    }

    return (
        <div className={`flex items-center justify-between p-3 pl-4 rounded-3xl transition-all duration-300 group ${task.isCompleted ? 'bg-opacity-70' : 'bg-pastel-gray-light hover:shadow-soft-sm'}`}>
            
            <div className="flex items-center gap-4 flex-1 overflow-hidden">
                {/* Checkbox Tasarımı */}
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={task.isCompleted}
                        onChange={() => onToggleTask(task.id)}
                        // Standart checkbox'ı gizle, yerine özel stil uygula
                        className="peer sr-only" 
                        id={`check-${task.id}`}
                    />
                    {/* Özel Checkbox Görünümü */}
                    <label 
                        htmlFor={`check-${task.id}`}
                        className={`flex items-center justify-center h-7 w-7 rounded-lg border-2 transition-all cursor-pointer
                            ${task.isCompleted 
                                ? 'bg-pastel-blue border-pastel-blue text-white' 
                                : 'border-pastel-gray hover:border-pastel-blue'
                            }`}
                    >
                        {/* Tik İkonu */}
                         <FiCheck className={`w-5 h-5 transition-opacity ${task.isCompleted ? 'opacity-100' : 'opacity-0'}`} />
                    </label>
                </div>

                {/* Görev Metni veya Düzenleme Inputu */}
                {isEditing ? (
                    <div className="flex flex-1 gap-2 mr-2">
                        <input 
                            type="text" 
                            value={editTitle} 
                            onChange={(e) => setEditTitle(e.target.value)}
                            className="flex-1 p-2 text-sm rounded-lg border-2 border-pastel-blue-light outline-none text-pastel-gray-dark"
                            autoFocus
                        />
                         {/* Düzenleme Kaydet/İptal İkonları */}
                        <button onClick={handleEditSubmit} className="p-2 bg-pastel-blue rounded-full text-white hover:bg-blue-500 transition"><FiCheck/></button>
                        <button onClick={() => setIsEditing(false)} className="p-2 bg-pastel-red-light text-pastel-red rounded-full hover:bg-red-200 transition"><FiX/></button>
                    </div>
                ) : (
                    // Görev Başlığı
                    <span className={`flex-1 truncate text-lg font-medium transition-all ${task.isCompleted ? 'line-through text-pastel-gray' : 'text-pastel-gray-dark'}`}>
                        {task.title}
                    </span>
                )}
            </div>

            {/* Aksiyon Butonları (Sadece düzenleme modunda değilken göster) */}
            {!isEditing && (
                <div className="flex gap-2 ml-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {/* Düzenle Butonu (Kalem İkonu) */}
                    <button
                        onClick={() => setIsEditing(true)}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-pastel-blue-light text-pastel-blue hover:bg-blue-200 hover:scale-110 transition-all"
                        disabled={task.isCompleted}
                    >
                        <FiEdit2 size={18} />
                    </button>
                    {/* Sil Butonu (Çöp Kutusu İkonu) */}
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-pastel-red-light text-pastel-red hover:bg-red-200 hover:scale-110 transition-all"
                    >
                        <FiTrash2 size={18} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default TaskList;