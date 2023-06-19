import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/accounts/";

export const apiMisCuentas = async () => {
  try {
    const cuentas = await axios.get(`${URL}misCuentas`, 
    { headers: { "x-token": token } 
  });
    return cuentas.data.cuentas;
  } catch (error) {
    console.log(error);
  }
};

export const buscarCuentaPorNumero = async (id) => {
  try {
    const response = await axios.get(`${URL}buscarporNum/${id}`, {
      headers: { "x-token": token },
    });
    return [response.data.cuenta]; // Envolver el objeto cuenta en un arreglo
  } catch (error) {
    console.log(error);
  }
};



export const CuentaId= async (id) => {
  try {
    const cuentas = await axios.get(`${URL}cuentaSaldoId/${id}`, { headers: { "x-token": token } });
    return cuentas.data.saldo;
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


export const CuentasconMasMovimiento = async (userId, orden) => {
  try {
    const response = await axios.get(`${URL}mostrarCuentasConMasTransferencias/${userId}?orden=${orden}`, {
      headers: { "x-token": token }
    });
    return response.data.cuentas;
  } catch (error) {
    console.log(error);
  }
};



  