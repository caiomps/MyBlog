// src/components/EditPostModal.jsx
import React from "react";

const EditPostModal = ({
  isOpen,
  onClose,
  onSave,
  title,
  setTitle,
  content,
  setContent,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-bold mb-4">Editar Post</h2>
        <input
          className="w-full border border-gray-300 p-2 rounded"
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border border-gray-300 p-2 rounded"
          rows="5"
          placeholder="Conteúdo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
            onClick={onSave}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
