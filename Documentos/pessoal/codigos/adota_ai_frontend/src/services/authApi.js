import api from "./api";

async function signUp(body) {
    const promise = await api.post('/signup', body);
    return promise;
}

async function signIn(body) {
    const promise = await api.post('/signin', body);
    return promise;
}

export { signUp, signIn };