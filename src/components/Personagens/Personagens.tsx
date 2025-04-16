import "./personagens.css";
import FsLightbox from "fslightbox-react";
import { Detalhes } from "../detalhes/detalhes";
import { getCharacters } from "rickmortyapi";
import { useState } from "react";
const personagens = await getCharacters();
const response = personagens.data;
const arrayPersonagens = response?.results?.map((personagem) => {
  return {
    id: personagem.id,
    name: personagem.name,
    species: personagem.species,
    image: personagem.image,
    url: personagem.url,
  };
});

export const Personagens = ({
  busca,
  especie,
}: {
  busca: string;
  especie: string;
}) => {
  const personagensHumanosFiltrados = arrayPersonagens?.filter((personagem) => {
    return (
      personagem.species === "Human" &&
      personagem.name.toLowerCase().includes(busca.toLowerCase()) &&
      personagem.id <= 5
    );
  });

  const personagensAliensFiltrados = arrayPersonagens?.filter((personagem) => {
    return (
      personagem.species === "Alien" &&
      personagem.name.toLowerCase().includes(busca.toLowerCase())
    );
  });

  const [islightboxOpen, setIslightboxOpen] = useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] =
    useState<number>(Number);

const abrirLightbox = (id: number) => {
  setPersonagemSelecionado(id);
  setIslightboxOpen(true);
};

const fecharLightbox = () => {
    setIslightboxOpen(false);
};

  return (
    <>
      <h1 className="titulo-personagens">Personagens</h1>
      <main>
        <div className="container-image">
          <ul className="lista-personagens">
            {especie === "Human"
              ? personagensHumanosFiltrados?.map((personagem) => (
                  <>
                    <div key={personagem.id} className="image-avatar">
                      <img
                        src={personagem.image}
                        alt="imagem-avatar"
                        className="imagem-personagem"
                        onClick={() => {
                          setPersonagemSelecionado(personagem.id);
                          abrirLightbox(personagem.id);
                        }}
                      />
                      <FsLightbox
                        toggler={islightboxOpen}
                        sources={[
                          <Detalhes 
                            personagemSelecionado={personagemSelecionado}
                            fecharLightbox={fecharLightbox}
                          />,
                        ]}
                      />
                      <div className="descricao">
                        <li>{personagem.name}</li>
                        <p>{personagem.species}</p>
                      </div>
                    </div>
                  </>
                ))
              : personagensAliensFiltrados?.map((personagem) => (
                  <>
                    <div key={personagem.id} className="image-avatar">
                      <img
                        src={personagem.image}
                        alt="imagem-avatar"
                        className="imagem-personagem"
                        onClick={() => {
                          setPersonagemSelecionado(personagem.id);
                          abrirLightbox(personagem.id);
                        }}
                      />
                      <FsLightbox
                        toggler={islightboxOpen}
                        sources={[
                          <Detalhes
                            personagemSelecionado={personagemSelecionado}
                            fecharLightbox={fecharLightbox}
                          />,
                        ]}
                      />
                      <div className="descricao">
                        <li>{personagem.name}</li>
                        <p>{personagem.species}</p>
                      </div>
                    </div>
                  </>
                ))}
          </ul>
        </div>
      </main>
    </>
  );
};
