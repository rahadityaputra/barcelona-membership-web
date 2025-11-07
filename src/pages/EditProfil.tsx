import  { useState, useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useProfile from "../hooks/useProfile";

const EditProfile = () => {
  const { profile, fetchProfile, updateProfile } = useProfile();
  const [form, setForm] = useState({
    fullname: "",
    address: "",
    gender: "",
    birthDate: "",
    email: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState<string| null>(null);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (profile) {
      setForm({
        fullname: profile.fullname || "",
        address: profile.address || "",
        gender: profile.gender || "",
        birthDate: profile.birthDate || "",
        email: profile.email || "",
      });
      setPreview(profile.profileImageUrl || null);
    }
  }, [profile]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      console.log(key, " = ", form[key]);
      
      formData.append(key, form[key]);
    });

    if (image) formData.append("avatarImage", image);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    // await updateProfile(formData);

  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h1 className="text-2xl font-bold text-center text-barcelonaBlue mb-6">Edit Profile</h1>

          <div className="flex flex-col items-center">
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={preview || "https://via.placeholder.com/150"}
                alt="Preview"
                className="w-24 h-24 rounded-full border-4 border-barcelonaGold object-cover"
              />
            </label>
            <input
              type="file"
              id="image"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded p-2"
          />

          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border rounded p-2"
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="date"
            name="dateOfBirth"
            value={form.birthDate}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border rounded p-2"
            disabled
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed"
          >
            Save Changes
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfile;
