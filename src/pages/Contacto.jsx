

function Contacto(){
    return(
        <>
        <h1 className="titulo">Poke Contacto</h1>
        <form action="submit">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" />
            <label htmlFor="Telefono">Telefono</label>
            <input type="text" />
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="cuentanos">¡Cuéntanos!</label>
            <input type="text" />
            <button id="contactbutton">Enviar</button>
        </form>

       
        </>    
    )
}

export default Contacto