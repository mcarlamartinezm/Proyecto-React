import vinculo from '../assets/vinculo.avif';
import vocacion from '../assets/vocacion.webp';
import entrenamiento from '../assets/entrenamiento.webp';
import gym from '../assets/gym.avif';
import kanto from '../assets/kanto.avif';

function Maestro() {
  return (
    <>
      <h1 className="titulo">Maestro Pokémon</h1>
      <p className="bienve-text">
        Ser maestro Pokémon no se trata solo de coleccionar medallas, sino de
        vivir una filosofía: crecer junto a tus compañeros y descubrir el
        verdadero poder del vínculo.
      </p>

      {/* El vínculo con los Pokémon */}
      <section className="seccion">
        <h2>El vínculo con los Pokémon</h2>
        <p className="bienve-text">
          En la historia de Pokémon, el lazo entre entrenador y criatura es la
          clave para alcanzar el máximo potencial. Un Pokémon que confía en su
          entrenador pelea con más motivación, evoluciona con alegría y supera
          límites que la fuerza bruta nunca alcanzaría.
        </p>
        <div className="subseccion-wrapper reverse">
          <div className="subseccion">
            <ul>
              <li><strong>Confianza mutua:</strong> paciencia y respeto, como cuando Ash protegió a Pikachu.</li>
              <li><strong>Evolución por afecto:</strong> algunos Pokémon cambian de forma gracias al cariño, como Togepi con Misty.</li>
              <li><strong>Lealtad y sacrificio:</strong> implica poner la felicidad del Pokémon primero, como hizo Ash con Butterfree.</li>
            </ul>
          </div>
          <img src={vinculo} alt="vinculo" className="seccion-img" />
        </div>
      </section>

      {/* La vocación del entrenador */}
      <section className="seccion">
        <h2>La vocación del entrenador</h2>
        <p className="bienve-text">
          Convertirse en maestro Pokémon es una vocación: combina habilidad,
          conocimiento y ética. No basta con ganar batallas; se requiere
          sensibilidad y respeto hacia cada compañero.
        </p>
        <div className="subseccion-wrapper">
          <img src={vocacion} alt="vocacion" className="seccion-img" />
          <div className="subseccion">
            <ul>
              <li><strong>Más que medallas:</strong> crecer junto a los Pokémon.</li>
              <li><strong>Diversidad de metas:</strong> gloria en ligas, crianza, investigación o especialización por tipo.</li>
              <li><strong>Ideal del maestro:</strong> dominar estrategia, cuidar a sus Pokémon y ser ejemplo de responsabilidad.</li>
              <li><strong>Viaje iniciático:</strong> el primer Pokémon marca el inicio de una aventura que define tu carácter y vocación.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Estilos de entrenamiento */}
      <section className="seccion">
        <h2>Estilos de entrenamiento</h2>
        <p className="bienve-text"></p>
        <div className="subseccion-wrapper reverse">
          <div className="subseccion">
            <ul>
              <li><strong>Combate real:</strong> experiencia práctica con Pokémon salvajes y entrenadores.</li>
              <li><strong>Entrenamientos extremos:</strong> superar límites físicos, con consecuencias si se abusa.</li>
              <li><strong>Especialización de tipo:</strong> aprovechar ambiente para reforzar fortalezas y corregir debilidades.</li>
              <li><strong>Vínculo emocional:</strong> muchos Pokémon crecen cuando sienten apoyo y respeto.</li>
              <li><strong>Desafíos naturales:</strong> rutas difíciles y condiciones adversas como escuela de supervivencia.</li>
              <li><strong>Estrategia y técnica:</strong> preparación para líderes de gimnasio y estudio de habilidades.</li>
              <li><strong>Recuperación y rehabilitación:</strong> cuidado tras daños físicos o emocionales.</li>
              <li><strong>Entrenamiento natural / vivencial:</strong> aprendizaje continuo a partir de experiencias cotidianas.</li>
            </ul>
          </div>
          <img src={entrenamiento} alt="entrenamiento" className="seccion-img" />
        </div>
      </section>

      {/* Gimnasios y pruebas especiales */}
      <section className="seccion">
        <h2>Gimnasios y pruebas especiales</h2>
        <p className="bienve-text">
          Algunos gimnasios no sólo exigen derrotar al líder, sino cumplir pruebas
          especiales: acertijos, trampas, desafíos ambientales o debilidades del tipo.
          Ganar la medalla puede involucrar algo más que “vencer en batalla”.
        </p>
        <div className="subseccion-wrapper">
          <img src={gym} alt="gym" className="seccion-img" />
        </div>
      </section>

      {/* Gimnasios de Kanto */}
     <section className="seccion">
        <h2>Gimnasios de Kanto — Desafía, aprende y gana medallas</h2>
        <p className="bienve-text">
            Todo Entrenador Pokémon debe recorrer estas pruebas para demostrar su
            verdadera vocación. Cada gimnasio es más que un combate: es una lección
            de vida, estrategia y vínculo con tu equipo.
        </p>
        <div className="kanto-img-wrapper">
            <img src={kanto} alt="kanto" className="seccion-img" />
        </div>
        <div className="tabla-gimnasios">
            <table>
            <thead>
                <tr>
                <th>Ciudad</th>
                <th>Líder</th>
                <th>Tipo</th>
                <th>Medalla</th>
                <th>Enfoque</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Pewter City</td>
                <td>Brock</td>
                <td>Roca</td>
                <td>Boulder Badge</td>
                <td>Resistencia, defensa, dureza.</td>
                </tr>
                <tr>
                <td>Cerulean City</td>
                <td>Misty</td>
                <td>Agua</td>
                <td>Cascade Badge</td>
                <td>Adaptación, velocidad, equilibrio emocional.</td>
                </tr>
                <tr>
                <td>Vermilion City</td>
                <td>Lt. Surge</td>
                <td>Eléctrico</td>
                <td>Thunder Badge</td>
                <td>Poder explosivo, disciplina militar.</td>
                </tr>
                <tr>
                <td>Celadon City</td>
                <td>Erika</td>
                <td>Planta</td>
                <td>Rainbow Badge</td>
                <td>Paciencia, estrategia gradual, conexión natural.</td>
                </tr>
                <tr>
                <td>Fuchsia City</td>
                <td>Koga</td>
                <td>Veneno</td>
                <td>Soul Badge</td>
                <td>Táctica, trampas, resistencia a adversidades.</td>
                </tr>
                <tr>
                <td>Saffron City</td>
                <td>Sabrina</td>
                <td>Psíquico</td>
                <td>Marsh Badge</td>
                <td>Control mental, disciplina, dominio interno.</td>
                </tr>
                <tr>
                <td>Cinnabar Island</td>
                <td>Blaine</td>
                <td>Fuego</td>
                <td>Volcano Badge</td>
                <td>Pasión, intensidad, fuerza destructiva.</td>
                </tr>
                <tr>
                <td>Viridian City</td>
                <td>Giovanni</td>
                <td>Tierra</td>
                <td>Earth Badge</td>
                <td>Poder, estrategia oculta, ambición.</td>
                </tr>
            </tbody>
            </table>
        </div>
       </section>

    </>
  );
}

export default Maestro;
