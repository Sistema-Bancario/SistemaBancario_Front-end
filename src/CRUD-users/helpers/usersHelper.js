import { createUser, updateUser } from "../api/apiUsers";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  console.log(state.user.nombre)
  console.log(state.user.correo)
  console.log(state.user.nickname)
  console.log(state.user.password)
  console.log(state.user.dpi)
  console.log(state.user.direccion)
  console.log(state.user.celular)
  console.log(state.user.trabajo)
  console.log(state.user.ingresos)
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