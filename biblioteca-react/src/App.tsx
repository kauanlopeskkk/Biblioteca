import { useEffect, useState } from "react";
import { api, baseURL } from "./serviços/api";
import type { Livro } from "./tipos/livros";
import { LivroForm } from "./components/LivroForm";
import { LivroList } from "./components/LivroList";
import '../src/App.css'


function App() {
    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        loadLivros();
    }, []);

    async function loadLivros() {
        try {
            if (!baseURL) return; // endpoint não configurado
            const response = await api.get<Livro[]>("");
            setLivros(response.data);
        } catch (error) {
            console.error("Erro ao carregar livros:", error);
        }
    }

    async function addLivro(livro: Livro) {
        try {
            if (!baseURL) {
                // modo local: gerar id e salvar apenas no estado
                const local = { ...livro, _id: Date.now().toString() } as Livro;
                setLivros((prev) => [...prev, local]);
                return;
            }

            const response = await api.post<Livro>("", livro);
            setLivros((prev) => [...prev, response.data]);
        } catch (error) {
            console.error("Erro ao adicionar livro:", error);
        }
    }

    async function deletarLivro(id: string) {
        try {
            if (!baseURL) {
                setLivros((prev) => prev.filter((l) => l._id !== id));
                return;
            }

            await api.delete(`/${id}`);
            setLivros((prev) => prev.filter((l) => l._id !== id));
        } catch (error) {
            console.error("Erro ao remover livro:", error);
        }
    }

    return (
        <div>
            <h1>Catálogo de Livros</h1>
            <LivroForm onAddLivro={addLivro} />
            <LivroList livros={livros} onDeletar={deletarLivro} />
        </div>
    );
}

export default App;








