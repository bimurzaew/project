import React, {useState} from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
    const [state, setState] = useState(0);
    const handleIncrement = () => {
        setState((prev) => prev+1)
    }

    return (
        <div>
            {state}
            <button onClick={handleIncrement} className={styles.btn}>add</button>
        </div>
    );
};

