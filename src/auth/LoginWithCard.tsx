import React, { useEffect, useState, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import fans from "../assets/fans.webp";

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=> {
    console.log(error);
  }, [error])
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // validate size (2MB) and type image/*
    if (file.size > 2 * 1024 * 1024) {
      setError('File size should not exceed 2MB');
      return;
    }
    if (!file.type.includes('image/')) {
      setError('Please upload an image file');
      return;
    }

    setSelectedFile(file);
    const imagePreview = URL.createObjectURL(file);
    setPreviewUrl(imagePreview);
    setError(null);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);



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
    <div className="relative min-h-screen bg-gray-100">
      {/* Background image */}
      <img src={fans} alt="fans" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30" />

      <div className="relative flex flex-col min-h-screen items-center justify-center p-6">
        <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-md w-full max-w-md z-10">
          <h1 className="text-2xl font-bold text-center mb-4">Login dengan Kartu Member</h1>

          <label className="block mb-3 font-medium">Upload Kartu Member</label>

          {/* show upload dropzone only when no file selected */}
          {!selectedFile && (
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="login-card"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-barcelonaBlue hover:text-barcelonaRed"
                  >
                    <span>Upload a file</span>
                    <input
                      id="login-card"
                      name="login-card"
                      type="file"
                      ref={el => { inputRef.current = el; }}
                      className="sr-only"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
              </div>
            </div>
          )}

          {selectedFile && previewUrl && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Selected file: {selectedFile.name}</p>
              <div className="mt-3">
                <div className="flex justify-center">
                  <img src={previewUrl} alt="preview" className="h-56 w-56 md:h-64 md:w-64 object-contain rounded-md border" />
                </div>
                <p className="text-sm text-gray-600 text-center mt-2">Preview</p>
                <div className="flex justify-center mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      if (previewUrl) URL.revokeObjectURL(previewUrl);
                      setPreviewUrl(null);
                      setSelectedFile(null);
                      if (inputRef.current) inputRef.current.value = '';
                    }}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Remove file
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-barcelonaBlue hover:bg-barcelonaRed text-white font-semibold py-2 rounded mt-6"
          >
            {loading ? "Memproses..." : "Login"}
          </button>

          {error && <p className="mt-4 text-center text-sm text-gray-700">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginWithCard;
