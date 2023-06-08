import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/adminUsers/";

export const apiUserAdmin = async () => {
  try {
    const listaUsers = await axios.get(`${URL}mostrarAdmins`);
    return listaUsers.data.listauserAdmins;
  } catch ({ response: { data } }) {
    return data.msg;
  }
};

export const createUserAdmin = async ({
  nombre,
  correo,
  password
 
}) => {
  console.log("TOKEN", token);
 // dpi = Number(dpi);
  //celular= Number(celular);
 // ingresos = Number(ingresos);
 
  try {
    const response = await axios.post(
      `${URL}agregarAdmin`,
      {
        nombre: nombre ,
        correo: correo ,
        password: password 
      },
      { headers: { "x-token": token } }
    );
    
    return true;
  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "no se pudo agregar un Admin",
    });
  }
};
/*export const DeleteUserAdmin = async (id) => {
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
};c*/



/*export const updateUserAdmin = async (
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
}; */