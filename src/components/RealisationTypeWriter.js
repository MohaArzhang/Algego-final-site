import Typewriter from "typewriter-effect"

export default function RealisationTypeWriter() {
    return (
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Réalisations")
                        .start();
                }}
            />
    );
}