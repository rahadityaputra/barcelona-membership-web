import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";

// interface LoginResponse {
//   status: boolean;
//   message: string;
//   token?: string;
// }

const LoginWithCard: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState<string>("");
   const [error, setError] = useState<string | null>(null);
  const {loginWithCard} = useAuth();
  const navigate = useNavigate();

  useEffect(()=> {
    console.log(error);
  }, [error])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    const imagePreview = URL.createObjectURL(file);
    setPreviewUrl(imagePreview);
  };



  const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          if (!selectedFile) {
              setError('Please upload your identity card');
              return;
          }
  
          setLoading(true);
          try {
              const result = await loginWithCard(selectedFile);
              if (result.success) {
                  navigate('/');
              } else {
                  setError(result.message);
              }
          } catch (err: any) {
              setError(err.message || 'Failed to register membership');
          } finally {
              setLoading(false);
          }
  };


  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login dengan Kartu Member</h1>

        <label className="block mb-3 font-medium">Upload Kartu Member</label>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          className="w-full mb-4"
        />

        {previewUrl && (
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">Preview:</p>
            <img src={previewUrl} alt="Preview" className="w-full rounded shadow" />
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          {loading ? "Memproses..." : "Login"}
        </button>

        {error && <p className="mt-4 text-center text-sm text-gray-700">{error}</p>}
      </div>
    </div>
  );
};

export default LoginWithCard;
