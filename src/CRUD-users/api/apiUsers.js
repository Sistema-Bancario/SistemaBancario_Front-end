import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "https://sistema-bancario-backend.vercel.app/api/users/";

export const apiUser = async () => {
  try {
    const listaUsers = await axios.get(`${URL}mostrar`);
    return listaUsers.data.listaUsers;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const DeleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${URL}eliminarUser/${id}`,
      { headers: { "x-token": token } });

    return true;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    if (msg === "DELETE eliminar user") {
      window.location.href = "/";
    }
    if (message) {
      return message;
    }
  }
};


export const updateUser = async (
  id,
  nickname,
  celular,
  correo
) => {
  celular = Number(celular);
  try {
    const userEditado = await axios.put(
      `${URL}editarUser/${id}`,
      {
        nickname,
        celular,
        correo

      },
      { headers: { "x-token": token } }
    );
    return userEditado.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No se pudo editar el user",
    });
  }
};

export const createUser = async ({
  nombre,
  correo,
  nickname,
  password,
  DPI,
  direccion,
  celular,
  img,
  trabajo,
  ingresos,
}) => {

  try {
    const response = await axios.post(
      `${URL}agregarUser`,
      {
        nombre: nombre,
        correo: correo,
        nickname: nickname,
        password: password,
        DPI: DPI,
        direccion: direccion,
        celular: celular,
        img: img,
        trabajo: trabajo,
        ingresos: ingresos
      },
      { headers: { "x-token": token } }
    );
    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "no se pudo agregar el usuario",
    });
  }
};