import React, { useState, useEffect, useContext } from "react";
import ServiceContext from './contexts/ServiceContext';
import EmployeeContext from './contexts/EmployeeContext';
import DateContext from './contexts/DateContext';
import HourContext from './contexts/HourContext';
import DateUtils from '../utils/DateUtils'

export function SelectHour({ nextStep }) {
    const { service } = useContext(ServiceContext);
    const { setEmployee } = useContext(EmployeeContext);
    const { date } = useContext(DateContext);
    const { setHour } = useContext(HourContext);
    const [availableHours, setAvailableHours] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/agendamentos/servicos/${service}/horarios-disponiveis?data=${DateUtils.formatDate(date)}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(date);
                console.log(data);
                setAvailableHours(data);
            })
            .catch((err) => {
                setAvailableHours([]);
            });
    }, [date]);

    const onClick = (employee, agendamento) => {
        setEmployee(employee);
        setHour([agendamento.inicioHorarioLivre, agendamento.fimHorarioLivre]);
        nextStep();
    }

    return (
        <div className="bg-base-100 rounded-r-lg flex-1 bg-base-100 w-full py-4">
            {availableHours.length > 0 ? (
                <div>
                <h1 className="text-2xl font-bold mb-4">Horários Disponíveis</h1>
                <div className="flex justify-center overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                {availableHours.map((hour) => (<th>{hour.funcionario.nome}</th>))}
                            </tr>
                          </thead>
                          <tbody>
                            {availableHours.map((hour) => (
                                hour.agendamentosLivres.map((agendamento, index) => (
                                    <tr className="hover cursor-pointer" onClick={() => onClick(hour.funcionario.id, agendamento)}>
                                        <th>{index + 1}</th>
                                        <td>{`${agendamento.inicioHorarioLivre} - ${agendamento.fimHorarioLivre}`}</td>
                                    </tr>
                                ))
                            ))}
                          </tbody>
                        </table>
                      </div>
                </div>
            ) : (
                <p className="text-red-500">Sem horários disponíveis para hoje.</p>
            )}
            </div>
    )
}