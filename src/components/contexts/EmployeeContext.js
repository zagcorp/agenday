import { createContext } from 'react';

const EmployeeContext = createContext({
    employee: 0,
    setEmployee: (employee) => {}
});

export default EmployeeContext;