import axios from "axios";
import Swal from "sweetalert2";

export const apiLoginAdmin = async (correo, password) => {
  try {
    const URL = "https://sistema-bancario-backend.vercel.app/api/auth/loginAdmin";

    const response = await axios.post(URL, {
      correo,
      password,
    });

    const token = response.data.token;

    token ? localStorage.setItem("token", token) : null;

    return token;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Swal.fire({
      icon: "error",
      title: "Informacion Incorrecta",
      text: "Correo o Password Incorrectos",
      confirmButtonText: "Ok",
    });
  }
};
