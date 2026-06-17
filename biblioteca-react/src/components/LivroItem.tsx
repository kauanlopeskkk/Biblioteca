import type { Livro } from "../tipos/livros"

interface LivroItemProps {
    livro: Livro;
    onDeletar: (id: string) => void;
}

export function LivroItem({ livro, onDeletar }: LivroItemProps) {
    return (
        <li>
            <strong>{livro.titulo}</strong> - {livro.autor}
            <br />
            Status: {livro.status}
            <br />
            <button
                onClick={() => livro._id && onDeletar(livro._id)}
                disabled={!livro._id}
            >
                Remover
            </button>
        </li>
    )
}