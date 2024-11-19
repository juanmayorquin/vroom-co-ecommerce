import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase/credentials";
import { doc, getDoc } from "firebase/firestore";
import "../App.css"; // Si necesitas mantener el CSS global

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-8">
      {userDetails ? (
        <>
          <div className="flex flex-col items-center mb-6">
            <img
              src={userDetails.photo}
              width={"40%"}
              className="rounded-full shadow-lg mb-4"
              alt="Profile"
            />
            <h3 className="text-3xl font-bold text-gray-800">Welcome {userDetails.firstName} 🙏🙏</h3>
          </div>
          <div className="text-lg text-gray-700 mb-6">
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstName}</p>
          </div>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-600 focus:outline-none"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-lg text-gray-500">Loading...</p>
      )}
    </div>
  );
}

export default Profile;
