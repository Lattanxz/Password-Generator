import React, {useState} from "react";

const SafetyWarning = ({passwordLength}) => {
    const calculateStrength = (length) => {
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

    const strength = calculateStrength(passwordLength);

    return(
        <div className="safety-warning-ruler">
            <p>Nivel de seguridad: {strength}</p>
        </div>
    )
    
}

export default SafetyWarning;