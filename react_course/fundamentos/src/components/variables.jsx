import React from "react";

const Variable = () => {
    const saludo = "Hola saludos!"
    const img = 'https://picsum.photos/200/300'
    return (
        <>
            <h2>{saludo}</h2>
            <img src={img} alt="Imagen cualquiera"></img>
        </>
    )
}

export default Variable