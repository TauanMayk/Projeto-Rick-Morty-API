import "./personagens.css";
import FsLightbox from "fslightbox-react";
import { Detalhes } from "../detalhes/detalhes";
import { getCharacters } from "rickmortyapi";
import { useState, useEffect } from "react";

export const Personagens = ({ 
  busca,
  especie,
}: {
  busca: string;
  especie: string;
}) => {
  const [personagensRenderizados, setPersonagensRenderizados] = useState<
    {
      id: number;
      name: string;
      species: string;
      image: string;
      url: string;
    }[]
  >([]);
  const [pagina, setPagina] = useState(1);
  async function mostrarMaisPersonagens (pagina: number) {
    const response = await getCharacters({ page: pagina });
    const novosPersonagens =
      response?.data?.results?.map((personagem) => ({
        id: personagem.id, 
        name: personagem.name,
        species: personagem.species,
        image: personagem.image,
        url: personagem.url,
      }));

    setPersonagensRenderizados((prev) => [
      ...prev,
      ...(novosPersonagens || []),
    ]);
    setPagina((prev) => prev + 1);
  }

  const personagensFiltrados = personagensRenderizados?.filter((personagem) => {
    return (
      (especie === "" || personagem.species === especie) &&
      personagem.name.toLowerCase().includes(busca.toLowerCase())
    );
  });

  const [islightboxOpen, setIslightboxOpen] = useState(false);
  const [personagemSelecionado, setPersonagemSelecionado] =
    useState<number>(Number);
  const [quantidadeMostrada] = useState(5);

  const abrirLightbox = (id: number) => {
    setPersonagemSelecionado(id);
    setIslightboxOpen(true);
  };

  const fecharLightbox = () => {
    setIslightboxOpen(false);
  };

  const [paginaAtual, setPaginaAtual] = useState(0);
  const quantidadePorPagina = 5;

  const personagensParaExibir = personagensFiltrados.slice(
  paginaAtual * quantidadePorPagina,
  (paginaAtual + 1) * quantidadePorPagina
  );

  useEffect(() => {
    const carregarInicial = async () => {
      await mostrarMaisPersonagens(pagina);
    };
    carregarInicial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <>
      <h1 className="titulo-personagens">Personagens</h1>
      <main>
        <div className="container-image">
          <ul className="lista-personagens">
            {personagensParaExibir?.map((personagem) => (
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
            ))}
          </ul>
        </div>
        {quantidadeMostrada < personagensFiltrados.length && (
          <button
            className="button-mais-personagens"
          onClick={() =>
            setPaginaAtual(prev => prev + 1)
            }>
            Mostrar Mais Personagens
          </button>
        )}
      </main>
    </>
  );
};
