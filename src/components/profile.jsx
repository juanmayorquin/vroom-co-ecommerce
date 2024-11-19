import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase/credentials";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../App.css"; // Si necesitas mantener el CSS global

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [image, setImage] = useState(null); // Para almacenar la imagen seleccionada
  const [loading, setLoading] = useState(false);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Función para manejar la subida de la imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Función para subir la foto y actualizar la base de datos
  const uploadImage = async () => {
    if (!image) return;

    setLoading(true);
    const user = auth.currentUser;
    const storageRef = ref(storage, `userProfileImages/${user.uid}`);
    try {
      // Subir la imagen a Firebase Storage
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Actualizar la URL de la foto en Firestore
      const userRef = doc(db, "Users", user.uid);
      await updateDoc(userRef, {
        photo: imageUrl, 
      });

      
      setUserDetails((prevState) => ({
        ...prevState,
        photo: imageUrl,
      }));

      console.log("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen p-8">
      {userDetails ? (
        <>
          <div className="flex flex-col items-center mb-6">
            <img
              src={userDetails.photo}
              className="rounded-full shadow-lg mb-4"
              alt="Profile"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h3 className="text-3xl font-bold text-gray-800">Bienvenido, {userDetails.name} 🙏🙏</h3>
          </div>
          <div className="text-lg text-gray-700 mb-6">
            <p>Email: {userDetails.email}</p>
            <p>Nombre: {userDetails.name}</p>
          </div>
          {/* Input para seleccionar la foto */}
          <input
            type="file"
            onChange={handleImageChange}
            className="mb-4"
          />
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            onClick={uploadImage}
            disabled={loading}
          >
            {loading ? "Subiendo..." : "Actualiza tu foto"}
          </button>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-red-600 focus:outline-none mt-4"
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
