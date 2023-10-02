export class Personagem {
  mana = 100;
  vida = 100;
  constructor(nome, level, tipo, descricao) {
    this.nome = nome;
    this.level = level;
    this.tipo = tipo;
    this.descricao = descricao;
  }
  obterInsignia() {
    if (this.level >= 5) {
      return `A insignia de ${this.nome} é implacavel como ${this.tipo}(a)`;
    }
    return ` A insingnia de ${this.nome} é ${this.tipo}(a) iniciante`;
  }
}
