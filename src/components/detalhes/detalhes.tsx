import "./detalhes.css";
import { getCharacters } from "rickmortyapi";
const personagens = await getCharacters();
const response = personagens.data;
const arrayPersonagens = response?.results?.map((personagem) => {
  return {
    id: personagem.id,
    name: personagem.name,
    status: personagem.status,
    gender: personagem.gender,
    location: personagem.location,
    species: personagem.species,
    image: personagem.image
  };
});
// const personagensFiltradoHumanos = arrayPersonagens?.filter((personagem) => {
//   return personagem.species === "Human" && personagem.id <= 8;
// });
// const personagensFiltradoAliens = arrayPersonagens?.filter((personagem) => {
//   return personagem.species === "Alien"
// });

export const Detalhes = ({personagemSelecionado, fecharLightbox}: {personagemSelecionado: number, fecharLightbox: () => void}) => {
  const personagemSelecionadoFiltrado = arrayPersonagens?.find((personagem) => personagem.id === personagemSelecionado);
  return (
    <>
      <div className="container-detalhes">
        <div className="container-personagens">
          <div className="personagem-selecionado">
          <div className="botao-fechar-container">
          <button className="botao-fechar" onClick={fecharLightbox}>X</button>
          </div>
          <h1 className="nome-personagem">{personagemSelecionadoFiltrado?.name}</h1>
          <img src={personagemSelecionadoFiltrado?.image} alt="imagem-personagem" className="imagem-personagem" />
          <p className="status">Status: {personagemSelecionadoFiltrado?.status}</p>
          <p className="gender">Gender: {personagemSelecionadoFiltrado?.gender}</p>
          <p className="location">Location: {personagemSelecionadoFiltrado?.location?.name}</p>
          <p className="species">Species: {personagemSelecionadoFiltrado?.species}</p>
          </div>
        </div>
      </div>
    </>
  );
};
