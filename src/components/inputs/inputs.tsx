import './inputs.css'
export const InputSearch = ({busca, setBusca}) => {
    return (
        <div className="input-search">
            <input
            className="input-personagem"
            type="text" 
            placeholder="Buscar personagem..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            />
        </div>
    )
}