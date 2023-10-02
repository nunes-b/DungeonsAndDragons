import { Personagem } from "./modules/personagem.js";
import { Mago } from "./modules/mago.js";
import { PersonagemView } from "./components/personagem-view.js";

const magoMiguel = new Mago("Miguelzinho", 4, "fogo", 4, 7);
const magoGiovana = new Mago("Giovana", 4, "gelo", 6, 9);

const personagemRomulo = new Personagem(
  "Rômulo",
  12,
  "Mago",
  "Faz magia com codigos através de um computador."
);
const personagemGabriela = new Personagem(
  "Gabriela",
  8,
  "Guerreiro",
  "Luta diariamente com os problemas do dia-a-dia."
);

const personagens = [
  personagemGabriela,
  personagemRomulo,
  magoGiovana,
  magoMiguel,
];

new PersonagemView(personagens).render();
