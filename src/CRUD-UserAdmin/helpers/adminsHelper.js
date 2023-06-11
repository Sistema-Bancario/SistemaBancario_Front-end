import { createUserAdmin } from "../api/apiUsersAdmin";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createUserAdmin({
        nombre: state.usersAdmin.nombre, 
        correo: state.usersAdmin.correo,
        password: state.usersAdmin.password,
        
  });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Admin creado!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/ListaUsuariosAdmin";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    }
};