import React from "react";
import api from "../../services/api";

interface IdentitCardModalType {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    fullname?: string;
    identityCardUrl?: string;
    email?: string;
  };
}

const IdentityCardModal: React.FC<IdentitCardModalType> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const downloadCard = async () => {
    const res = await api.get("http://localhost:3000/api/user/identity-card/download", {
      responseType: 'blob',

    });

    const blob = res.data;
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "identity-card.png";
    a.click();
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-80 rounded-xl shadow-lg overflow-hidden relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        {/* Membership Card UI */}
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-barcelonaBlue mb-4">Membership Card</h2>

          <img
            src={profile.identityCardUrl}
            className="border-barcelonaGold"
            alt="Profile"
          />
          <button onClick={downloadCard} className=" text-blue-600 hover:text-blue-800 text-lg">
            Download Card
          </button>

          <p className="text-lg font-semibold mt-4 text-gray-700">{profile.fullname}</p>
          <p className="text-sm text-gray-500">Email: {profile.email || "N/A"}</p>

          {/* Card Design Accent */}
          <div className="mt-5 bg-barcelonaBlue text-white p-3 rounded-lg font-bold tracking-wide">
            FC Barcelona Official Fan Member
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityCardModal;
