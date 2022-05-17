export const authHeaders = () => {
    const token = localStorage.getItem("access-token");
    if(token) return `Bearer ${token}`
    return
}