import api from "./api";

async function signUp(body) {
    const promise = await api.post('/user', body);
    return promise;
}

async function signIn(body) {
    const promise = await api.post('/login', body);
    return promise;
}

export { signUp, signIn };