export class Personagem {
  constructor(nome, vida, mana, level, tipo, descricao) {
    this.nome = nome;
    this.vida = vida;
    this.mana = mana;
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
