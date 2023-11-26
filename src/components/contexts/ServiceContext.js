import { createContext } from 'react';

const ServiceContext = createContext({
    service: 0,
    setService: (service) => {}
});

export default ServiceContext;