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
            // !isUserAuthenticated() ? (
            <LoginUser />
            // ) : (
            //   <Navigate to="/" />
            // )
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
          path="/miPerfil"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <Profile />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />

        <Route
          path="/buscarporNum/:id"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <VerCuentaDetalle />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />

        <Route
          path="/transferirFav/:cuentaDestino"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <TransactionFav />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />

        <Route path="/favoritos/:id"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser></NavbarUser>
                <Favoritos />

              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />


        {/* TRANSACCIONES  */}
        <Route
          path="/ListaTransacciones"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <ListaTransactions />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />

        <Route
          path="/createTransaction"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <CreateTransaction />
              </>
            ) : (
              <Navigate to="/LoginUser" />
            )
          }
        />

        <Route path="/historial/:id"
          element={
            isUserAuthenticated() ? (
              <>
                <NavbarUser />
                <HistorialTransaccion />
              </>
            ) : (
              <Navigate to="/LoginUser" />
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
            isAuthenticated() ? (
              <>
                <NavbarAdmin></NavbarAdmin>
                <ListaAccountMasMovimiento />
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
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
            isAuthenticated() ? (

              <>
                <NavbarAdmin></NavbarAdmin>
                <CreateAccount></CreateAccount>
              </>
            ) : (
              <Navigate to="/LoginAdminUser" />
            )
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
