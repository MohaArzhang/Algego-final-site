import Typewriter from "typewriter-effect"

export default function EndTypeWriter() {
    return (
        <div className='textTypeWriter endTypeWriter'>
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("De l'idée à la diffusion,<br>ALGEGO a la solution.")
                        .start();
                }}
            />
        </div>
    );
}