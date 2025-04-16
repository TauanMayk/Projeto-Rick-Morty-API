import './themetoggler.css'

export const Themetoggler = () => {
    return (
        <>
            <button className='botao-sol' id='btn-sol' name='btn-sol' onClick={() => document.body.classList.toggle('dark-mode')}>
                <img srcSet="../../src/images/—Pngtree—toggle-switch-icon-on-button_6389075.png" alt="botao-toggler" className='imagem-botao-lua'/>
                <img srcSet="../../src/images/—Pngtree—toggle-switch-icon-off-button_6389076.png" alt="botao-toggler" className='imagem-botao-sol'/>
            </button>
        </>
    )
}