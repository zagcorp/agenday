export default function Card({ title }) {
  return (
    <button className="btn btn-outline px-4 py-6 min-w-[170px] min-h-[170px] bg-base-100">
    
      <p>{title}</p>
    </button>
  );
}
