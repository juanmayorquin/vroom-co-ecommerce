import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebase/credentials";
import { toast } from "react-toastify";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

function SignInwithGoogle() {
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userDocRef = doc(db, "Users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          
          await updateDoc(userDocRef, {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
          });
          toast.info("Bienvenido de nuevo, " + user.displayName, {
            position: "top-center",
          });
        } else {
          
          await setDoc(userDocRef, {
            email: user.email,
            name: user.displayName,
            photo: user.photoURL,
            is_admin: false,
          });
          toast.success("Cuenta creada exitosamente", {
            position: "top-center",
          });
        }

        
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
      toast.error("Error al iniciar sesión: " + error.message, {
        position: "bottom-center",
      });
    }
  }

  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={googleLogin}
      >
        <img src={"/img/google.png"} width={"60%"} />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
