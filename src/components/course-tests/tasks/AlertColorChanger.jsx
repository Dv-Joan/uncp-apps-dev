import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const colors = ['primary', 'warning', 'danger', 'success', 'secondary'];

export default function AlertColorChanger() {
    const [currentColor, setCurrentColor] = useState(0);

    setTimeout(() => {
        setCurrentColor((currentColor + 1) % colors.length);
    }, 3000);


    return (
        <div className="p-5 flex justify-center items-center">
            <div className={`alert alert-${colors[currentColor]} w-64`} role="alert">
                Alerta que cambia de color!
            </div>

        </div>
    );
}


