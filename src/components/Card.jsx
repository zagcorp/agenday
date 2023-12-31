import { useContext } from "react";
import ServiceContext from './contexts/ServiceContext';

export default function Card({ id, title, image, nextStep }) {
  const { setService } = useContext(ServiceContext);

  const onClick = () => {
    setService(id);
    nextStep();
  };

  return (
    <button onClick={onClick} className="btn btn-success text-neutral px-4 py-6 min-w-[170px] min-h-[170px] bg-base-100 hover:text-base-100">
      <svg 
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="text-red-500 w-12 h-12 mb-3 inline-block"
        viewBox="0 0 24 24"
      >
        <path d="M8 17l4 4 4-4m-4-5v9"></path>
        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
      </svg>
      <p>{title}</p>
    </button>
  );
}
