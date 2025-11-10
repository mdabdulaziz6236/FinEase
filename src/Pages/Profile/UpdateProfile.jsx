import React, { use } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const UpdateProfile = () => {
  const { updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedInfo = {
      displayName: event.target.name.value,
      photoURL: event.target.photo.value,
    };
    updateUser(updatedInfo)
      .then(() => {
        toast.success("Profile Updated");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Update Profile</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleUpdate}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  required
                  name="name"
                  placeholder="Enter Your Name"
                />
                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  required
                  name="photo"
                  placeholder="Enter Photo URL"
                />
                <button type="submit" className="btn btn-neutral mt-4">
                  Update
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
