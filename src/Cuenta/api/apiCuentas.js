import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/accounts/";

export const apiMisCuentas = async () => {
  try {
    const cuentas = await axios.get(`${URL}misCuentas`, { headers: { "x-token": token } });
    return cuentas.data.cuentas;
  } catch (error) {
    console.log(error);
  }
};

export const createAccount = async ({
  propietario,
  tipoCuenta,
  saldo
}) => {
  try {
    const response = await axios.post(
      `${URL}crearcuenta`,
      {
        propietario: propietario,
        tipoCuenta: tipoCuenta,
        saldo: saldo
      },
      { headers: { "x-token": token } }
    );
    return true

  } catch ({ response: { data } }) {
    Swal.fire({
      icon: "error",
      title: "Ocurrió un error",
      text: "No se pudo agregar la cuenta al usuario",
    })


  }

};

  