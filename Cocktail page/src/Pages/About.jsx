import '../styles/About.css'

function About() {
    return (
        <section className="about-section">
            <h1 className="about-title">About</h1>
            <p>
                Cocktails Page es una aplicación web desarrollada en React que permite a los usuarios descubrir,
                buscar y explorar una gran variedad de cócteles gracias a la API pública de TheCocktailDB . El proyecto
                fue creado con el objetivo de practicar y aplicar conceptos clave de React, como el uso de hooks
                (useState, useEffect, useCallback, useContext, useRef) así como la implementación
                de React Router para la navegación entre páginas. Además de servir como práctica de consumo de APIs y
                gestión de estados, esta aplicación busca ofrecer una experiencia sencilla, dinámica y responsive para
                cualquier persona interesada en aprender más sobre cócteles y sus ingredientes.
            </p>
        </section>
    );
}

export default About;
