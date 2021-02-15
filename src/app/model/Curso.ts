export class Curso {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public duracao: number,
        public urlImagem: string,
        public preco: number
    ) {}
}