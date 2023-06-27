import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "./LoginAdminUser/helpers/loginAdminHelper";
import { HomePage } from "./HomePage";
import { AdminPage } from "./AdminPage/AdminPage";
import { LoginUser } from "./loginUser/components/LoginUser";
import { ListaUsers } from "./CRUD-users/components/ListaUsers";
import { CreateUser } from "./CRUD-users/components/AgregarUser";
import { CreateAdmin } from "./CRUD-UserAdmin/components/AgregarAdmin";
import { LoginAdmin } from "./LoginAdminUser/components/LoginAdmin";
import NavbarAdmin from "./NavbarAdmin";
import NavbarUser from "./NavbarUser";
import { isUserAuthenticated } from "./loginUser/helpers/loginUserHelper";
import UserPage from "./UserPage/UserPage";
import ListarAccount from "./Cuenta/components/ListarAccount";
import { ListaTransactions } from "./CRUD-transactions/components/ListTransactions";
import { CreateTransaction } from "./CRUD-transactions/components/AgregarTransaction";
import { ListaAdmins } from "./CRUD-UserAdmin/components/ListaAdmin";
import { Profile } from "./perfil/components/Profile";
import { Favoritos } from "./favorito/MisFavoritos";
import { CreateAccount } from "./Cuenta/components/AgregarCuenta";
import ListaAccountMasMovimiento from "./Cuenta/components/ListaAccountMasMovimiento";
import { HistorialTransaccion } from "./CRUD-transactions/components/HistorialTransaccion";
import VerCuentaDetalle from "./Cuenta/components/VerCuentaDetalle";
import TransactionFav from "./CRUD-transactions/components/TransactionFav";


export const AppRouter = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/miPerfil" element={<Profile />} />
        {/* HOME PAGE --- PRINCIPAL */}
        <Route
          path="/"
          element={
            <HomePage />
          }
        />

        {/* USER PAGE */}
        <Route
          path="/UserPage"
          element={
            <>
              <NavbarUser />
              <UserPage />
            </>
          }
        />

        <Route
          path="/LoginUser"
          element={
            !isUserAuthenticated() ? (
              <LoginUser />
            ) : (
              <Navigate to="/misCuentas" />
            )
          }
        />


        <Route
          path="/misCuentas"
          element={
            <>
              <NavbarUser></NavbarUser>
              <ListarAccount></ListarAccount>

            </>
          }
        />

        <Route
          path="/buscarporNum/:id"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <VerCuentaDetalle />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        <Route
          path="/transferirFav/:cuentaDestino"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <TransactionFav />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        <Route path="/favoritos/:id"
          element={
            <>
              <NavbarUser></NavbarUser>
              <Favoritos />

            </>

          }
        />


        {/* TRANSACCIONES  */}
        <Route
          path="/ListaTransacciones"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <ListaTransactions />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        <Route
          path="/createTransaction"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <CreateTransaction />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        <Route path="/historial/:id"
          element={
            isAuthenticated() ? (
              <>
                <NavbarUser />
                <HistorialTransaccion />
              </>
            ) : (
              <Navigate to="/UserPage" />
            )
          }
        />

        {/* ADMIN PAGE */}
        <Route
          path="/AdminPage"
          element={
            <>
              <NavbarAdmin />
              <AdminPage />
            </>
          }
        />

        <Route
          path="/LoginAdminUser"
          element={
            !isAuthenticated() && !isUserAuthenticated() ? (
              <LoginAdmin />
            ) : (
              <Navigate to="/ListaUsuarios" />
            )
          }
        />

        <Route
          path="/CuentasMasMovimiento/:userId"
          element={
            <>
              <NavbarAdmin></NavbarAdmin>
              <ListaAccountMasMovimiento />
            </>
          }
        />



        <Route
          path="/ListaUsuarios"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <ListaUsers />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route path="/createAccount"
          element={
            <>
              <NavbarAdmin></NavbarAdmin>
              <CreateAccount></CreateAccount>
            </>

          }
        />

        <Route
          path="/createUser"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <CreateUser />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route
          path="/ListaUsuariosAdmin"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <ListaAdmins></ListaAdmins>

              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />

        <Route
          path="/createUserAdmin"
          element={
            isAuthenticated() ? (
              <>
                <NavbarAdmin />
                <CreateAdmin />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
          }
        />


      </Routes>
    </BrowserRouter>
  );
};
