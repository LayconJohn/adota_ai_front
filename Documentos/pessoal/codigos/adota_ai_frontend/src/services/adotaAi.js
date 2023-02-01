import axios from "axios";

const BASE_URL = "http://localhost:5000"

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/signup`, body);
    return promise;
}

export { signUp, BASE_URL };