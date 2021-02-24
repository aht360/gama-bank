const Headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('@GamaBank:token')
    }
}
export default Headers;