import React, { useState } from 'react';

const FilterButton = ({ label, value, currentFilter, onClick }) => {
    const isActive = currentFilter === value;
    return (
        <button
            onClick={() => onClick(value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                    ? 'bg-white text-pastel-blue-dark shadow-soft-sm scale-105' // Aktif: Beyaz, gölgeli
                    : 'bg-pastel-gray-light text-pastel-gray hover:bg-gray-200' // Pasif: Gri
            }`}
        >
            {label}
        </button>
    );
};


const TaskForm = ({ onAddTask, filter, setFilter }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <div>
            {/* Input ve Ekle Butonu Grubu */}
            <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Yeni görev ekle..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 p-4 rounded-full border-2 border-pastel-blue-light bg-pastel-gray-light focus:outline-none focus:border-pastel-blue text-pastel-gray-dark placeholder-pastel-gray transition-colors"
                />
                <button
                    type="submit"
                    className="bg-pastel-blue text-white px-6 py-4 rounded-full font-bold hover:bg-blue-400 transition-colors shadow-sm active:scale-95"
                >
                    Ekle
                </button>
            </form>

            {/* Filtreleme Sekmeleri */}
            <div className="flex justify-start gap-2 p-1 rounded-full">
                <FilterButton label="Tümü" value="all" currentFilter={filter} onClick={setFilter} />
                <FilterButton label="Tamamlanan" value="completed" currentFilter={filter} onClick={setFilter} />
                <FilterButton label="Tamamlanmayan" value="active" currentFilter={filter} onClick={setFilter} />
            </div>
        </div>
    );
};

export default TaskForm;