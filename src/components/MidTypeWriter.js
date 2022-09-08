import React from 'react'
import Typewriter from "typewriter-effect"

export default function MidTypeWriter() {
    return (
        <div className='textTypeWriter'>
            <Typewriter
                options={{
                    delay: 100,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Nos expertises")
                        .start();
                }}
            />
        </div>
    );

}