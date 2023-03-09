import api from "./api";

async function getPets(token) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = await api.get('/pets', config);
    return promise;
}

export { getPets };