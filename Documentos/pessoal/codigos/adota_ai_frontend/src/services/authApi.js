import api from "./api";

async function signUp(body) {
    const promise = await api.post('/user', body);
    return promise;
}

async function signIn(body) {
    try {
        const promise = await api.post('/login', body);
        return promise;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export { signUp, signIn };