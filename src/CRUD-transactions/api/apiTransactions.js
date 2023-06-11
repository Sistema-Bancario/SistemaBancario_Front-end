import axios from "axios";
import Swal from "sweetalert2";


const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/transactions/";


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
    tipoCuenta
}) => {
    try {
        const response = await axios.post(
            `${URL}hacerTransaccion`,
            {
                cuentaOrigen: cuentaOrigen,
                cuentaDestino: cuentaDestino,
                monto: monto,
                tipoCuenta: tipoCuenta
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
