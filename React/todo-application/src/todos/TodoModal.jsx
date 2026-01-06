export default function TodoModal({
  isOpen,
  value,
  onChange,
  onSave,
  onClose,
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-lg font-semibold mb-4">
          Update Todo
        </h2>

        <input
          value={value}
          onChange={onChange}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
