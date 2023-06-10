import {createTransaction} from "../api/apiTransactions"
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
    let resultado;
    console.log(state.transaction.cuentaOrigen);
    console.log(state.transaction.cuentaDestino);
    console.log(state.transaction.monto);
    console.log(state.transaction.fecha);
    console.log(state.transaction.tipoCuenta);
    switch (option) {
        case 1:
            resultado = await createTransaction({
                cuentaOrigen: state.transaction.cuentaOrigen,
                cuentaDestino: state.transaction.cuentaDestino,
                monto: state.transaction.monto,
                fecha: state.transaction.fecha,
                tipoCuenta: state.transaction.tipoCuenta
            });
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Genial!",
                    text: "Transaccion hecha",
                    showConfirmButton: true,
                    confirmButtonText: "Ok",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/ListaTransacciones";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
        break;
    }
}