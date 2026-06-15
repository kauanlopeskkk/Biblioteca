import {Livro} from '../tipos/livros'

interface livrosItemProps {
    livro: Livro;
    deletarLigado: (id: string) => void;

}
export function LivroItem({livro,deletarLigado}; livrosItemProps){
    
}