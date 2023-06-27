import { createUser, updateUser } from "../api/apiUsers";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createUser({
        nombre: state.user.nombre, 
        correo: state.user.correo,
        nickname: state.user.nickname,
        password: state.user.password,
        DPI: state.user.dpi,
        direccion: state.user.direccion,
        celular: state.user.celular,
        img: state.user.img,
        trabajo: state.user.trabajo,
        ingresos: state.user.ingresos
  });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "user creado!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/ListaUsuarios";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
    case 2:
      resultado = await updateUser(
        state.user._id, 
        state.user.nickname,
        state.user.celular,
        state.user.correo
       
      );
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: `user actualizado correctamente!`,
          confirmButtonText: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/ListaUsuarios";
          } else {
            window.location.href = "/";
          }
        });
      }
      break;
  }
};