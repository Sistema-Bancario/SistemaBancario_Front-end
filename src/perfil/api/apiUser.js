import axios from "axios";
const URL = "http://localhost:8080/api/users/";
const token = localStorage.getItem("token");

export const apiUsuarioById = async () => {
  try {
    const listaUsuarios = await axios.get(`${URL}miPerfil`, {headers:{'x-token': token}});
    return listaUsuarios.data.usuarioDB;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (id, usuario) => {
  try {
    const listaUsuarios = await axios.put(`${URL}editarMiPerfil/`, {
      correo: usuario.correo,
      password: usuario.password,
      img: usuario.img,
      celular: usuario.celular
    }, {headers:{'x-token': token}});
    return listaUsuarios.data;
  } catch (error) {
    console.log(error);
  }
};

export const apiEliminarMiUsuario = async () => {
  try {
    const listaUsuarios = await axios.delete(`${URL}eliminarMiPerfil`, {headers:{'x-token': token}});
    console.log(listaUsuarios.data);
    return listaUsuarios.data;
  } catch (error) {
    console.log(error);
  }
};