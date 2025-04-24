import { getLocation } from "rickmortyapi";
import './cidades.css'
const cidades = await getLocation([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const response = cidades.data;

export const Cidades = () => {
    return (
        <>
        <section className="container-cidades">
            <h3 className="titulo-cidades">Dimensões</h3>
                <div className="lista-cidades">
                    <div className="cidade-location">
                        <p className="dimension">{response[0].dimension}</p>
                        <div className="descricao">
                            <span className="name-location">{`${response[0].name} - `}</span>
                            <small className="type">{response[0].type}</small>
                        </div>
                    </div>
                    <div className="cidade-location">
                        <p className="dimension">{response[7].dimension}</p>
                        <div className="descricao">
                            <span className="name-location">{`${response[7].name} - `}</span>
                            <small className="type">{response[7].type}</small>
                        </div>
                    </div>
                    <div className="cidade-location">
                        <p className="dimension">{response[8].dimension}</p>
                        <div className="descricao">
                            <span className="name-location">{`${response[8].name} - `}</span>
                            <small className="type">{response[8].type}</small>
                        </div>
                    </div>
                    <div className="cidade-location">
                        <p className="dimension">{response[4].dimension}</p>
                        <div className="descricao">
                            <span className="name-location">{`${response[4].name} - `}</span>
                            <small className="type">{response[4].type}</small>
                        </div>
                    </div>
                </div>
                {/* <button className="button-cidades">Ver mais</button> */}
            </section>
        </>
    );
}