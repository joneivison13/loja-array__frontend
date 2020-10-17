export const isAuthenticated = () => (localStorage.getItem('@TOKEN') && localStorage.getItem('@USER')) !== null;
export const getToken = () => localStorage.getItem('@TOKEN')
export const login = (token:string) => localStorage.setItem('@TOKEN', token)
export const logout = () => localStorage.remoteItem('@TOKEN')