import axios from "axios";
const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/accounts/";

export const apiMisCuentas = async() => {
    try {
        const cuentas = await axios.get(`${URL}misCuentas`, { headers: { "x-token": token } });
        console.log(cuentas.data);
        return cuentas.data.cuentas;
      } catch (error) {
        console.log(error);
      }
};