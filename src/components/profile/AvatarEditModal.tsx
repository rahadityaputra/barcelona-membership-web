import React, { useState, useRef } from 'react';

interface AvatarEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentAvatar: string;
    onSave: (file: File) => void;
}

const AvatarEditModal: React.FC<AvatarEditModalProps> = ({ isOpen, onClose, currentAvatar, onSave }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string>(currentAvatar);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (selectedFile) {
            onSave(selectedFile);
            onClose();
        }
    };

    const handleCancel = () => {
        setSelectedFile(null);
        setPreview(currentAvatar);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 rounded-xl shadow-lg overflow-hidden relative p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Avatar</h2>

                <div className="flex flex-col items-center mb-4">
                    <img src={preview} alt="Avatar Preview" className="w-32 h-32 rounded-full border-4 border-barcelonaGold object-cover mb-4" />
                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-barcelonaBlue text-white rounded-md hover:opacity-90"
                    >
                        Choose Image
                    </button>
                </div>

                <div className="flex justify-end space-x-3">
                    <button onClick={handleCancel} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                    <button onClick={handleSave} className="px-4 py-2 bg-barcelonaRed text-white rounded-md" disabled={!selectedFile}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvatarEditModal;
