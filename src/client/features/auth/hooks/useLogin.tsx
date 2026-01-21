import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../pages/public/firebase";

export const useLogin = () => {
  const navigate = useNavigate();

  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Función auxiliar para verificar whitelist en tu Backend Bun
  const verifyAccess = async (email: string | null) => {
    if (!email) throw new Error("No se pudo obtener el email.");

    const response = await fetch("/api/auth/check-access", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      // Si no está autorizado, cerramos la sesión de Firebase inmediatamente
      await signOut(auth);
      throw new Error(
        "⛔ Tu correo no está autorizado para acceder a esta aplicación."
      );
    }

    return true;
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Verificar con Bun SQLite
      await verifyAccess(userCredential.user.email);
      navigate("/admin");
    } catch (err) {
      console.error(err);
      // Si el error viene de nuestra verificación manual, mostramos ese mensaje
      if (err instanceof Error && err.message.includes("⛔")) {
        setError(err.message);
      } else {
        setError("Credenciales incorrectas o error de conexión.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("email");
      const userCredential = await signInWithPopup(auth, provider);

      const email =
        userCredential.user.email ||
        userCredential.user.providerData[0]?.email ||
        null;

      // Verificar con Bun SQLite
      await verifyAccess(email);

      navigate("/admin");
    } catch (err) {
      console.error(err);
      if (err instanceof Error && err.message.includes("⛔")) {
        setError(err.message);
      } else {
        setError("No se pudo iniciar sesión con Google.");
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
    handleGoogleLogin,
  };
};
