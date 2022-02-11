import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { maxGuesses } from "./util";

export function About() {
  return (
    <div className="App-about">
      <p>
        <i>hola wordl</i> es una traducción de {" "}
        <a href="https://hellowordl.net/">
          <i>hello wordl</i>
        </a>{" "}
        , que a su vez es un remake del juego de palabras {" "}
        <a href="https://www.powerlanguage.co.uk/wordle/">
          <i>Wordle</i>
        </a>{" "}
        de <a href="https://twitter.com/powerlanguish">powerlanguage</a>, que
        según creo está basado en la serie <i>Lingo</i>.
      </p>
      <p>
        Tienes por defecto {maxGuesses} intentos para averiguar la palabra.
        El número de intentos se puede cambiar desde los ajustes.
        <br />
        Después de cada intento obtienes pistas.
      </p>
      <hr />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "h" },
          { clue: Clue.Elsewhere, letter: "o" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Absent, letter: "a" },
        ]}
      />
      <p>
        <b>H</b> y <b>A</b> no se encuentran en la palabra a averiguar.
      </p>
      <p>
        <b className={"green-bg"}>L</b> es corresta! La tercera letra es {" "}
        <b className={"green-bg"}>L</b>
        .<br />
        <strong>(Puede seguir habiendo una segunda R en la palabra.)</strong>
      </p>
      <p>
        <b className={"yellow-bg"}>O</b> se encuentra en la palabra pero <em>en otra posición</em>.
        <br />
        <strong>(A lo mejor más de una vez. 🤔)</strong>
      </p>
      <hr />
      <p>
        Movamos la <b>O</b> en nuestro próximo intento:
      </p>
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Absent, letter: "c" },
          { clue: Clue.Correct, letter: "e" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Correct, letter: "o" },
        ]}
        annotation={"¡Casi!"}
      />
      <Row
        rowState={RowState.LockedIn}
        wordLength={4}
        cluedLetters={[
          { clue: Clue.Correct, letter: "p" },
          { clue: Clue.Correct, letter: "e" },
          { clue: Clue.Correct, letter: "l" },
          { clue: Clue.Correct, letter: "o" },
        ]}
        annotation={"¡Acertada!"}
      />
      <p>
        Este juego será gratis y sin anuncios para siempre.
      </p>
    </div>
  );
}
