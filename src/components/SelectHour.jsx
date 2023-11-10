import React, { useState, useEffect, useContext } from "react";
import DateContext from './contexts/DateContext';
import DateUtils from '../utils/DateUtils'

export function SelectHour() {
    const { date } = useContext(DateContext);
    const [availableHours, setAvailableHours] = useState([]);
    const service = 1;

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

    return (
        <div className="bg-base-100 rounded-r-lg flex-1 bg-base-100 w-full py-4">
            {availableHours.length > 0 ? (
                <div>
                <h1 className="text-2xl font-bold mb-4">Horários Disponíveis</h1>
                <ul>
                    {availableHours.map((hour, index) => (
                    <li key={index} className="cursor-pointer mb-2">
                        <div className="dropdown dropdown-hover">
                        <label tabIndex={0} className="btn m-1">{hour.funcionario.nome}</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {hour.agendamentosLivres.map((agendamento, agendamentoIndex) => (
                                <li key={agendamentoIndex} className="text-sm">
                                    {`${agendamento.inicioHorarioLivre} - ${agendamento.fimHorarioLivre}`}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            ) : (
                <p className="text-red-500">Sem horários disponíveis para hoje.</p>
            )}
            </div>
    )
}