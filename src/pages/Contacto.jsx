

function Contacto(){
    return(
        <>
        <div className="contact-container">
        <h1>PokeContacto</h1>
        <form action="submit" className="contactform">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />

            <label htmlFor="telefono">Teléfono</label>
            <input type="text" id="telefono" name="telefono" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="cuentanos">¡Cuéntanos!</label>
            <textarea id="cuentanos" name="cuentanos"></textarea>

            <button id="contactbutton">Enviar</button>
        </form>
        </div>     
        </>    
    )
}

export default Contacto