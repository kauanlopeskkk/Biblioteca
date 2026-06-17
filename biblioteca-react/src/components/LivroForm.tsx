import { useState } from "react";
import type { FormEvent } from "react";
import type { Livro } from "../tipos/livros";

interface BookFormProps {
    onAddLivro: (livro: Livro) => void;
}

export function LivroForm({ onAddLivro }: BookFormProps) {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [status, setStatus] = useState<"Lido" | "Não Lido">("Não Lido");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onAddLivro({ titulo, autor, status });

        setTitulo("");
        setAutor("");
        setStatus("Não Lido");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Adicionar Livro</h2>

            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                required
            />

            <select
                value={status}
                onChange={(e) => setStatus(e.target.value as "Lido" | "Não Lido")}
            >
                <option value="Lido">Lido</option>
                <option value="Não Lido">Não Lido</option>
            </select>

            <button type="submit">Adicionar</button>
        </form>
    );
}


