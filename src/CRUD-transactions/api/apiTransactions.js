import axios from "axios";
import Swal from "sweetalert2";


const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/transactions/";
const URL_CUENTAS = "http://localhost:8080/api/accounts/";



export const apiTransaction = async () => {
    try {
        const listaTransactions = await axios.get(`${URL}vertransacciones/:numeroCuenta`);
        return listaTransactions.data.listaTransactions;
    } catch ({ response: { data } }) {
        return data.msg;
    }
}

export const createTransaction = async ({
    cuentaOrigen,
    cuentaDestino,
    monto,
    tipoCuenta,
    descripcion
}) => {
    try {
        const response = await axios.post(
            `${URL}hacerTransaccion`,
            {
                cuentaOrigen: cuentaOrigen,
                cuentaDestino: cuentaDestino,
                monto: monto,
                tipoCuenta: tipoCuenta,
                descripcion:descripcion,
            },
            { headers: { "x-token": token } }
        );
       
    
        return true;
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Ocurrió un error",
            text: "Transferencia fallida",
        });
    }
};

export const apiAccount = async (cuenta) => {
    try {
      const historial = await axios.get(`${URL_CUENTAS}historial/${cuenta}`, {
        headers: { "x-token": token },
      });
      return historial.data.cuentasActivas;
    } catch ({ response: { data } }) {
      return data.msg;
    }
  };
  
  
