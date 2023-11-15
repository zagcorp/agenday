import { createContext } from 'react';

const HourContext = createContext({
    hour: [],
    setHour: (hour) => {}
});

export default HourContext;