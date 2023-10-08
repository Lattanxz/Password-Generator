import React, {useState} from "react";


const SafetyWarning = ({passwordLength}) => {
    const calculateStrenght = (length) => {
        if (length < 6){
            return "Muy Debil ❌";
        }else if(length < 10){
            return "Debil ⚠️";
        }else if(length < 14){
        return "Media ❗";
        }else if(length < 18){
            return "Fuerte 👌";
        }else{
            return "Muy Fuerte 💪";
        };
    };

    const strength = calculateStrenght(passwordLength);

    return(
        <div className="safety-warning">
            <p>Nivel de seguridad: {strength}</p>
        </div>
    )
    
}

export default SafetyWarning;