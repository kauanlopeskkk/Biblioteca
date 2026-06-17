import axios from "axios";

const CRUDCRUD_ENDPOINT = (import.meta.env.VITE_CRUDCRUD_ENDPOINT as string) || "";
export const baseURL = CRUDCRUD_ENDPOINT
	? `https://crudcrud.com/api/${CRUDCRUD_ENDPOINT}/livros`
	: "";

export const api = axios.create({ baseURL });