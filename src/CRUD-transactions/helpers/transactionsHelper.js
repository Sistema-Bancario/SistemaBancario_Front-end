import { createTransaction, createTransactionFav } from '../api/apiTransactions';
import Swal from 'sweetalert2';

export const sendData = async (state, option, _id) => {
    let resultado;

    switch (option) {
        case 1:
            resultado = await createTransaction({
                cuentaOrigen: state.transaction.cuentaOrigen,
                cuentaDestino: state.transaction.cuentaDestino,
                monto: Number(state.transaction.monto),
                tipoCuenta: state.transaction.tipoCuenta,
                descripcion: state.transaction.descripcion
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
                        window.location.href = "/misCuentas";
                    } else {
                        window.location.href = "/";
                    }
                });
            }
            break;
        case 2:
            resultado = await createTransactionFav({
                cuentaDestino: _id,
                cuentaOrigen: state.cuentaOrigen,
                monto: Number(state.monto),
                tipoCuenta: state.tipoCuenta,
                descripcion: state.descripcion
            });
            if (resultado) {
                Swal.fire({
                    icon: 'success',
                    title: '¡Genial!',
                    text: 'Transacción realizada',
                    showConfirmButton: true,
                    confirmButtonText: 'Ok'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = '/misCuentas';
                    } else {
                        window.location.href = '/';
                    }
                });
            }
            break;
    }
};
