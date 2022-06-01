import axios from "axios";

const PALETTE_API = "http://localhost:3900/palettes/";

export function getAll() {
    return axios.get(PALETTE_API);
}

export function set(palette) {
    return axios.post(PALETTE_API, palette);
}

export function remove(id) {
    return axios.delete(PALETTE_API + id);
}
