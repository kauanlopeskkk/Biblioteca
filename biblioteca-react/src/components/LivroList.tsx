import type { Livro } from '../tipos/livros'
import { LivroItem } from './LivroItem'

interface LivroListProps {
    livros: Livro[];
    onDeletar: (id: string) => void;
}

export function LivroList({
    livros,
    onDeletar,
}: LivroListProps) {
    return (
        <ul>
            {livros.map((livro) => (
                <LivroItem
                    key={livro._id}
                    livro={livro}
                    onDeletar={onDeletar}
                />
            ))}
        </ul>
    )
}









