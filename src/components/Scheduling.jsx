import React, { useState, useEffect, useContext } from "react";
import ServiceContext from './contexts/ServiceContext';
import EmployeeContext from './contexts/EmployeeContext';
import DateContext from './contexts/DateContext';
import HourContext from './contexts/HourContext';
import DateUtils from "../utils/DateUtils";

export function Scheduling({ nextStep, goBack }) {
    const { service } = useContext(ServiceContext);
    const { employee } = useContext(EmployeeContext);
    const { date } = useContext(DateContext);
    const { hour } = useContext(HourContext);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedHour, setSelectedHour] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const start = hour[0];
        const end = hour[1];
        const startTime = new Date(`${DateUtils.formatDate(date)}T${start}`);
        const endTime = new Date(`${DateUtils.formatDate(date)}T${end}`);
        const newTimeSlots = [];
      
        while (startTime <= endTime) {
          const formattedTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          newTimeSlots.push(formattedTime);
          startTime.setMinutes(startTime.getMinutes() + 15);
        }

        setTimeSlots(newTimeSlots);
    }, [date, hour]);

    const renderHours = () => {
        return timeSlots.map(x => (
            <option key={x} value={`${DateUtils.formatDate(date)} ${x}:00`}>{x}</option>
        ));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const requestData = {
            dataHora: selectedHour,
            status: 'ABERTO',
            descricao: description,
            servico: service,
            funcionario: employee,
            cliente: 1
        };

        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(requestData),
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }),
        };

        
        const response = await (await fetch(`http://localhost:8080/agendamentos`, requestOptions)).json();

        if (response && response.id > 0) {
            nextStep();
        }
    };

    return (
        <div className="bg-base-100 rounded-r-lg flex-1 bg-base-100 w-full y-full py-4">
            <form onSubmit={handleSubmit}>
                <div className="flex space-x-8">
                    <div className="flex-1 space-y-12">
                        <div className="pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Horário</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Selecione o horário.
                            </p>
                            <div className="mt-10">
                                <div className="mt-2">
                                    <select 
                                        id="hour"
                                        name="hour"
                                        className="select select-bordered w-full max-w-xs"
                                        onChange={(e) => setSelectedHour(e.target.value)}
                                    >
                                        {renderHours()}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Descrição</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Escreva alguns detalhes extras sobre o serviço.
                            </p>
                            <div className="mt-10">
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        name="description"
                                        rows={3}
                                        className="textarea textarea-bordered w-full max-w-xs"
                                        defaultValue={''}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Notificações</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            Você será notificado assim que seu agendamento for confirmado.
                        </p>
                        <div className="mt-10 space-y-10">
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Por e-mail</legend>
                                <div className="mt-6 space-y-6">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        rows={3}
                                        className="input input-bordered w-full max-w-xs"
                                        defaultValue={''}
                                    />
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="text-sm font-semibold leading-6 text-gray-900">Por SMS</legend>
                                <div className="mt-6 space-y-6">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        rows={3}
                                        className="input input-bordered w-full max-w-xs"
                                        defaultValue={''}
                                    />
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>

                <div className="mt-6 mr-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={goBack}>
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}
