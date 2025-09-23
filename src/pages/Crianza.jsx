import centro from '../assets/centro.avif';
import cuidado from '../assets/cuidado.avif';
import poke from '../assets/poke.avif';
import evolucion from '../assets/evolucion.avif';
import comida from '../assets/comida.avif';

function Crianza() {
  return (
    <>
      <h1 className="titulo">Crianza Pokémon</h1>
      <p className="bienve-text">
        La crianza en el universo Pokémon reúne prácticas de cuidado, socialización y
        rehabilitación. Guarderías, criaderos y centros médicos especializan su
        trabajo en la salud y el desarrollo de tu Pokémon.
      </p>

      {/* Centros Pokespecializados */}
      <section className="seccion">
        <h2>Centros Pokespecializados</h2>
        <p className="bienve-text">
          Siempre cuentas con ayuda para tu pokemón, así que en tu viaje puedes mirar el mapa y buscar alguno de los centros que ayuden en tu viaje de entrenamiento.
        </p>
        <div className="subseccion-wrapper reverse">
          <div className="subseccion">
            <ul>
              <li><strong>Guarderías / Day Care:</strong> supervisan alimentación, ejercicio y socialización.</li>
              <li><strong>Criaderos:</strong> rehabilitación, rescate y cuidado con historias emotivas.</li>
              <li><strong>Historias típicas:</strong> rescates, recuperación tras heridas o separación temporal del entrenador.</li>
            </ul>
          </div>
          <img src={centro} alt="centro" className="seccion-img" />
        </div>
      </section>

      {/* Cuidado y alimentación */}
      <section className="seccion">
        <h2>Cuidado y alimentación</h2>
        <p className="bienve-text">
          Los Pokémon bebés y jóvenes necesitan atención especial: alimentación adecuada según especie, supervisión constante y protección de peligros. Cada cuidado fortalece el vínculo entre entrenador y Pokémon.
        </p>
        <div className="subseccion-wrapper">
          <img src={comida} alt="comida" className="seccion-img" />
          <div className="subseccion">
            <h3>Dieta y nutrición según especie</h3>
            <p>Alimentos según tipo (fuego, agua, planta, etc.) que influyen en salud y desempeño.</p>

            <h3>Rutinas de alimentación</h3>
            <p>Horarios regulares fomentan disciplina y constancia.</p>

            <h3>Hidratación y descanso</h3>
            <p>Agua fresca y descanso suficiente para mantener rendimiento y prevenir enfermedades.</p>

            <h3>Cuidado del pelaje, escamas o piel</h3>
            <p>Baños y limpieza refuerzan higiene y vínculo afectivo.</p>

            <h3>Ejercicios de estimulación temprana</h3>
            <p>Juegos y actividades que desarrollan coordinación, fuerza y habilidades básicas.</p>

            <h3>Prevención de enfermedades y parásitos</h3>
            <p>Observación y remedios previenen enfermedades y complementan la crianza.</p>

            <h3>Alimentos como refuerzo afectivo</h3>
            <p>Premios o golosinas fortalecen el vínculo emocional y afectan la evolución.</p>
          </div>
        </div>
      </section>

      {/* Salud y atención médica */}
      <section className="seccion">
        <h2>Salud y atención médica</h2>
        <p className="bienve-text">
          Curar heridas, descansar, alimentación balanceada y medicina Pokémon son pasos fundamentales para su crecimiento y desempeño.
        </p>
        <div className="subseccion-wrapper reverse">
          <div className="subseccion">
            <h3>Centros Pokémon</h3>
            <p>Instalaciones para curar y revitalizar Pokémon. Nurse Joy monitorea la salud y ofrece consejos.</p>
            <p>Más allá de la curación física, refuerzan la ética de cuidado y sirven como lugar de socialización.</p>
          </div>
          <img src={cuidado} alt="cuidado" className="seccion-img" />
        </div>
      </section>

      {/* Evolución y Crecimiento */}
      <section className="seccion">
        <h2>Evolución y Crecimiento</h2>
        <p className="bienve-text">
          La evolución representa crecimiento, adaptación y madurez. Puede depender del vínculo con el entrenador, experiencias vividas y decisiones clave.
        </p>
        <div className="subseccion-wrapper">
          <img src={evolucion} alt="evolucion" className="seccion-img" />
          <div className="subseccion">
            <h4>Tipos de Evolución</h4>
            <ul>
              <li><strong>Por nivel:</strong> Pokémon evoluciona al alcanzar cierto nivel.</li>
              <li><strong>Por amistad o afecto:</strong> evoluciona con lazos emocionales fuertes.</li>
              <li><strong>Por objetos o condiciones especiales:</strong> requiere objetos o condiciones especiales.</li>
              <li><strong>Por intercambio:</strong> evoluciona al ser intercambiado entre entrenadores (Kadabra, Machoke).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Métodos de crianza */}
      <section className="seccion">
        <h2>Métodos de crianza</h2>
        <p className="bienve-text">
          Sin duda, cómo entretes a tu pokemón siempre es tu decisión, pero siempre hay parámetros que puedes seguir para tener en cuenta.
        </p>
        <div className="subseccion-wrapper reverse">
          <div className="subseccion">
            <ul>
              <li><strong>Natural / vivencial:</strong> crecer enfrentando retos cotidianos.</li>
              <li><strong>Entrenamiento guiado:</strong> rutinas adaptadas a tipo y personalidad.</li>
              <li><strong>Cuidado afectivo:</strong> amor, paciencia y confianza clave para habilidades únicas y evolución.</li>
            </ul>
          </div>
          <img src={poke} alt="poke" className="seccion-img" />
        </div>
      </section>
    </>
  );
}

export default Crianza;
