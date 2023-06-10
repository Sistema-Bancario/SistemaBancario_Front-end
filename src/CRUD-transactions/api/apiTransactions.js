import axios from "axios";
import Swal from "sweetalert2";

const URL = "localhost:8080/api/transactions/";

export const apiTransaction = async () => {
    try {
        const listaTransactions = await axios.get(`${URL}vertransacciones/:numeroCuenta`);
        return listaTransactions.data.listaTransactions;
    } catch ({response: {data}}) {
        return data.msg;
    }
}

export const createTransaction = async ({
    cuentaOrigen,
    cuentaDestino,
    monto,
    fecha,
    tipoCuenta
}) => {
    try {
        const response = await axios.post(
            `${URL}hacerTransaccion`,
            {
                cuentaOrigen: cuentaOrigen,
                cuentaDestino: cuentaDestino,
                monto: monto,
                fecha: fecha,
                tipoCuenta: tipoCuenta
            }
        );

        return true;
    } catch ({response: {data}}) {
        Swal.fire({
            icon: "error",
            title: "Ocurrió un error",
            text: "transferencia fallida",
        });
    }
}