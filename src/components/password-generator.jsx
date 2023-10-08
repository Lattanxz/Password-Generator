import React, { useState, useEffect } from 'react';
import './password-generator.css';
import CopyButton from './copy-button';
import RegenButton from './regen-button';       
import SafetyWarning from './safety-warning';


function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(0);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);

    useEffect(() => {
        generatePassword();
    }, [passwordLength])

    const generatePassword = (e) => {
        let characters = '';
        if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (includeNumbers) characters += '0123456789';
        if (includeSymbols) characters += '!@#$%^&*()_+[]{}|;:,.<>?';
        let newPassword = '';   
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(randomIndex);
        }
        setPassword(newPassword);
    };

    const handlePasswordLengthChange = (e) => {
        setPasswordLength(e.target.value);
        generatePassword();
    }
    
    return(
        <main className=''>
                <h1>Generador de Contraseñas</h1>
                <div className='length'>
                <label>
                <p>Longitud de la contraseña: {passwordLength}</p>
                <input type="range" 
                    value={passwordLength}  
                    min="0"
                    max="30"
                    onChange={handlePasswordLengthChange}/>
                 </label>
                 <SafetyWarning passwordLength={passwordLength} />       
                </div>
                         
                <div className='options'>
                <label>Mayusculas<input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)}/></label>
                <label>Minusculas<input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)}/></label>
                <label>Numeros<input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)}/></label>
                <label>Caracteres Especiales<input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)}/></label>
                </ div>
                <div className='password-buttons'>
                <label>Contraseña generada
                <div className='pass-center'>
                <input type="text" value={password} readOnly />
                </div>
                <CopyButton textToCopy={password}/><RegenButton regenNewPassword={generatePassword}/>
                </label>
                </div> 
        </main>
    )
}

export default PasswordGenerator;