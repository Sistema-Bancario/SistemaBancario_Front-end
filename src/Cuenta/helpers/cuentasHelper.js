import Swal from "sweetalert2";
import { createAccount } from "../api/apiCuentas";



export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createAccount({
        propietario: state.account.propietario,
        tipoCuenta: state.account.tipoCuenta,
        saldo: state.account.saldo
  });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Genial!",
          text: "Account Creado",
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
    
  }
};