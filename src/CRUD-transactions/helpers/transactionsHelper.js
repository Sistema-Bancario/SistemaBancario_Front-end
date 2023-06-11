import { createTransaction } from "../api/apiTransactions"
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
    let resultado;

    switch (option) {
        case 1:
            resultado = await createTransaction({
                cuentaOrigen: state.transaction.cuentaOrigen,
                cuentaDestino: state.transaction.cuentaDestino,
                monto: Number(state.transaction.monto), // Convert monto to a number
                tipoCuenta: state.transaction.tipoCuenta,
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
                        window.location.href = "/ListaAccount";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
        break;
    }
}


