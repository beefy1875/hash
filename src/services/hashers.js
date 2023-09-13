import axios from "axios"

const getAll = () => {
    console.log('hasherService getAll')
    const req = axios.get('http://localhost:3001/api/notes')
    return req.then(res => res.data)
}

export default { getAll }