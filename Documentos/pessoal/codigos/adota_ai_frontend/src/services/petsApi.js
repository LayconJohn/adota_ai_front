import api from "./api";

async function getPets(token, page) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = await api.get(`/pet?page=${page}`, config);
    return promise;
} 

async function getPet(token, id) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = await api.get(`/pet/${id}`, config);
    return promise;
}

function postPet(token, pet) {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const promise = api.post(`/pet`, pet, config);
    return promise;
}

export { getPets, getPet, postPet };