export default function Links({ togle }) {
    return (
        <>
            <a href="/" onClick={togle}>Início</a>
            <a href="/sobre" onClick={togle}>Sobre</a>
            <a href="/servicos" onClick={togle}>Serviços</a>
            <a href="/beneficios" onClick={togle}>Beneficios</a>
            <a href="/contato" onClick={togle}>Contato</a>
        </>

    )
}