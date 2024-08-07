import { useState} from 'react';
const ItemCount = () => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count > 1 ? count - 1 : 1);
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default ItemCount;
