import Typewriter from "typewriter-effect"

export default function EndTypeWriter() {
    var chiz = document.getElementById('chiz');
    let typeType = new Typewriter(chiz, {
        delay: 2000,
    });
    return (
        <div className='textTypeWriter'>
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Partenaire complice de vos projets")
                        .start();
                }}
            />
        </div>
    );

}