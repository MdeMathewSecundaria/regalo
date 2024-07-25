import { useState } from 'react';
import './Principal.css'

export function Principal ({setUser}) {

    const [entrada, setEntrada] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if(entrada != "11/03/2019"){
            setEntrada("")
            setError(true)
            return
        }
        
        setError(false)
        setUser("true")

    }

    return (
        <section className='main4'>
            <img className="gato-pestañeando" src="https://media1.tenor.com/m/GOabrbLMl4AAAAAC/plink-cat-plink.gif" />
            <div className='bienvenida-text'>
                <p className='bienvenida'>Bienvenida preciosa</p>
            </div>
            <div className='msg'>
                Esta es mi primera página web y es para ti ♡
            </div>
            <form className='container' onSubmit={handleSubmit}> 
                <label for="password">Contraseña:</label>
                <input value = {entrada}
                       onChange={event => setEntrada(event.target.value)} 
                       type='password' name='password' 
                       placeholder='Introduzca la contraseña...' required />
                <div>
                    <img title='Todo comenzó el día... (dd/mm/aaaa)' className='ayuda' src='https://img.icons8.com/?size=100&id=77&format=png&color=000000' />
                </div>
                <br/><button className='Enter'>➜</button>
            </form>
            {error && <p className='mensaje-error'>Contraseña incorrecta.</p>}
        </section>
    );


}