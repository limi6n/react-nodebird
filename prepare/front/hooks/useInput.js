import { useState, useCallback } from 'react';

export default (initialValue) => {
    const [value, setValue] = useState(initialValue);

    // 컴포넌트에 props 으로 넘겨주는 함수는 useCallback 꼭 쓰기 -> 그래야 최적화가 된다 
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler];
}