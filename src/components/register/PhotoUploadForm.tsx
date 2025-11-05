import React from 'react';

interface PhotoUploadFormProps {
    identityCard: File | null;
    setIdentityCard: (file: File | null) => void;
}

const PhotoUploadForm: React.FC<PhotoUploadFormProps> = ({ identityCard, setIdentityCard }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setIdentityCard(e.target.files[0]);
        } else {
            setIdentityCard(null);
        }
    };

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="face-photo" className="block text-sm font-medium text-gray-700">Identity Card</label>
                <input
                    type="file"
                    id="face-photo"
                    accept="image/jpg, image/jpeg"
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-barcelonaBlue file:text-white hover:file:bg-barcelonaRed"
                    onChange={handleFileChange}
                    required
                />
                {identityCard && (
                    <p className="mt-2 text-sm text-gray-500">Selected file: {identityCard.name}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">Max file size: 2MB, Format: JPG, JPEG</p>
            </div>
        </div>
    );
};

export default PhotoUploadForm;