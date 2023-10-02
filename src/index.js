import { Personagem } from "./modules/personagem.js";

const personagemRomulo = new Personagem();
personagemRomulo.nome = "Rômulo";
personagemRomulo.mana = 12;
personagemRomulo.vida = 7;
personagemRomulo.level = 12;
personagemRomulo.tipo = "Mago";
personagemRomulo.descricao =
  "Faz magica com os codigos através de um computador.";

const personagemGabriela = new Personagem();
personagemGabriela.nome = "Gabriela";
personagemGabriela.mana = 10;
personagemGabriela.vida = 9;
personagemGabriela.level = 3;
personagemGabriela.tipo = "Arqueira";
personagemGabriela.descricao =
  "Faz magica com os codigos através de um computador.";

console.log(
  personagemRomulo.obterInsignia() + " " + personagemGabriela.obterInsignia()
);
