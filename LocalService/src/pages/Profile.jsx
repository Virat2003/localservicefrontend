import { useEffect, useState } from "react";
import { User, Mail, Shield, Calendar, Edit2, Save, X, AlertCircle } from "lucide-react";
import api from "../api/axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("profile/");
        setProfile(res.data);
        setError(null);
      } catch (err) {
        setError("Failed to load profile. Please try again.");
        console.error("Profile load failed:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    try {
      const res = await api.put("profile/", profile);
      setProfile(res.data);
      setEditMode(false);
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (err) {
      setError("Update failed. Please try again.");
      console.error("Update failed:", err);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    // Reset to original profile data if needed
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error && !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex justify-center items-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <AlertCircle className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Please Login</h3>
          </div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Alert */}
        {updateSuccess && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-md animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-green-800 font-medium">Profile updated successfully!</p>
            </div>
          </div>
        )}

        {/* Error Alert */}
        {error && profile && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative flex items-center gap-6">
              <div className="w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white border-opacity-30">
                <User className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-1">
                  {profile?.username || "User"}
                </h1>
                <p className="text-indigo-100 text-sm font-medium">
                  {profile?.role || "Member"}
                </p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
              {!editMode && (
                <button
                  onClick={() => setEditMode(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              )}
            </div>

            <div className="space-y-5">
              {/* Username Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  Username
                </label>
                <input
                  type="text"
                  value={profile?.username || ""}
                  disabled={!editMode}
                  onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    editMode
                      ? "border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 bg-white"
                      : "border-gray-200 bg-gray-50 text-gray-700"
                  } outline-none font-medium`}
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={profile?.email || ""}
                  disabled={!editMode}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 border-2 rounded-xl transition-all ${
                    editMode
                      ? "border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 bg-white"
                      : "border-gray-200 bg-gray-50 text-gray-700"
                  } outline-none font-medium`}
                />
              </div>

              {/* Role Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Shield className="w-4 h-4 text-indigo-600" />
                  Role
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={profile?.role || ""}
                    disabled
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-500 font-medium outline-none cursor-not-allowed"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full font-semibold">
                    Read Only
                  </div>
                </div>
              </div>

              {/* Date Joined Field */}
              <div className="group">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  Member Since
                </label>
                <input
                  type="text"
                  value={profile?.date_joined ? new Date(profile.date_joined).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : ""}
                  disabled
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-500 font-medium outline-none cursor-not-allowed"
                />
              </div>
            </div>

            {/* Action Buttons */}
            {editMode && (
              <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleUpdate}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-all border-2 border-gray-300"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Profile Stats Card
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Account Activity</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-indigo-50 rounded-xl">
              <div className="text-2xl font-bold text-indigo-600">24</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Projects</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600">156</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Tasks</div>
            </div>
            <div className="text-center p-4 bg-pink-50 rounded-xl">
              <div className="text-2xl font-bold text-pink-600">89%</div>
              <div className="text-sm text-gray-600 font-medium mt-1">Complete</div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Profile;