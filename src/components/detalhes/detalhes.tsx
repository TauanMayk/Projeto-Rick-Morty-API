import "./detalhes.css";
import { getCharacters, getEpisodes } from "rickmortyapi";
const personagens = await getCharacters();
const episodes = await getEpisodes();
const response = personagens.data;
const responseEpisodes = episodes.data;

const arrayPersonagens = response?.results?.map((personagem) => {
  return {
    id: personagem.id,
    name: personagem.name,
    status: personagem.status,
    gender: personagem.gender,
    location: personagem.location,
    species: personagem.species,
    image: personagem.image,
    episodes: personagem.episode,
  };
});

const arrayEpisodes = responseEpisodes?.results?.map((episode) => {
  return {
    id: episode.id,
    name: episode.name,
    episode: episode.episode,
  };
});

export const Detalhes = ({
  personagemSelecionado,
  fecharLightbox,
}: {
  personagemSelecionado: number;
  fecharLightbox: () => void;
}) => {
  const personagemSelecionadoFiltrado = arrayPersonagens?.find(
    (personagem) => personagem.id === personagemSelecionado
  );
  const episodeSelecionadoFiltrado = arrayEpisodes?.find(
    (episode) =>
      episode.id ===
      Number(personagemSelecionadoFiltrado?.episodes[0].split("/").pop())
  );
  return (
    <>
      <div className="container-detalhes">
        <div className="container-personagens">
          <div className="personagem-selecionado">
            <div className="botao-fechar-container">
              <button className="botao-fechar" onClick={fecharLightbox}>
                X
              </button>
            </div>
            <h1 className="nome-personagem">
              {personagemSelecionadoFiltrado?.name}
            </h1>
            <img
              src={personagemSelecionadoFiltrado?.image}
              alt="imagem-personagem"
              className="imagem-personagem"
            />
            <p className="status">
              Status: {personagemSelecionadoFiltrado?.status}
            </p>
            <p className="gender">
              Gender: {personagemSelecionadoFiltrado?.gender}
            </p>
            <p className="location">
              Location: {personagemSelecionadoFiltrado?.location?.name}
            </p>
            <p className="species">
              Species: {personagemSelecionadoFiltrado?.species}
            </p>
          </div>
          <div className="container-episodes">
            <div className="episodes-container">
              <div className="episode">
                <p className="episode-name">
                  Nome do Episódio: {episodeSelecionadoFiltrado?.name}
                  <span className="episode-number">
                  Episódio:{" "}
                  {episodeSelecionadoFiltrado?.episode}
                  </span> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
