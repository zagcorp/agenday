import { createContext } from 'react';

const DateContext = createContext({
    date: new Date(),
    setDate: (date) => {}
});

export default DateContext;