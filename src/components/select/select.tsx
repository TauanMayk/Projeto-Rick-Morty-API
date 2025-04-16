import './select.css'
import { getCharacters } from "rickmortyapi";
const personagens = await getCharacters();
const response = personagens.data;
const results = response.results;
const species = results?.map((personagem) => personagem.species);
const speciesUnicos = Array.from(new Set(species));

export const Select = ({setEspecie}: {setEspecie: (especie: string) => void}) => {
    return (
        <>
        <select className="selecionar-especie" onChange={(e) => {
            setEspecie(e.target.value);
        }}>
            <option className="opcao selecionar" value="Human" key={1} onClick={() => {
                setEspecie("Human");
                document.body.classList.toggle("wallpaper-human");
            }}
            >{speciesUnicos[0]}</option>
            <option className="opcao selecionar" value="Alien" key={2} onClick={() => {
                setEspecie("Alien");
                document.body.classList.toggle("wallpaper-alien");
            }}
            >{speciesUnicos[1]}</option>
        </select>
        </>
    )
};