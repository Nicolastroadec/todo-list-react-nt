import { useState } from 'react'

function Compteur() {
    const [count, setCount] = useState(0);

    return <div>
        <button onClick={() => { setCount(count + 1) }}>Augmente le compteur ! ^^</button>
        <div>Compteur à : {count}</div>
        <button onClick={() => { setCount(count - 1) }}>Diminue le compteur :(</button>

    </div>
}

export default Compteur;