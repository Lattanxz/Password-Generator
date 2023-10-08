import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

function GenerateButton(){
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
        const passwordLength = 16;
        let newPassword = ''; 
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters.charAt(randomIndex);
        }
        setPassword(newPassword);
        
    };

    return(
        <button onClick={generatePassword}>Generar Contraseña
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />        
        </button>
    )
}

export default GenerateButton;
