import Typewriter from "typewriter-effect"

export default function TemoignageTypeWriter() {
    return (
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Ce que disent nos clients")
                        .start();
                }}
            />
    );
}