import './App.css'
import { Principal } from './Principal.jsx';
import { useState } from 'react';
import { Siguiente } from './Siguiente.jsx';

export function App() {

    const [user, setUser] = useState([]);


    return(
        <div className='wrapper'>
            {
                !user.length > 0 ? <Principal setUser = {setUser} /> : <Siguiente user={user} setUser = {setUser} />
            }
        </div>
    );
};