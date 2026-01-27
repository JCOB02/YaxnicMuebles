"use client";
import Typewriter from 'typewriter-effect';

export default function TypingEffect (){
    const phrases = [
        "con alma de madera.",
        "que cuentan historias.",
        "hechos para durar.",
        "creados para tu espacio."
    ];
    return (
        <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Muebles ").pauseFor(500);

        phrases.forEach((text) => {
          typewriter
            .typeString(text)
            .pauseFor(2000)
            .deleteChars(text.length);
        });

        typewriter.start();
      }}
      options={{
        loop: true,
        delay: 70,
        deleteSpeed: 50,
      }}
    />
    );
}
