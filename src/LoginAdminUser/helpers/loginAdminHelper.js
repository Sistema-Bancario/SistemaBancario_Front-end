
export const isAdminAuthenticated = () => {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}