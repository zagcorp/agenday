import Card from "./Card.jsx";

export function Scheduler() {
    return (
        <div className="flex m-auto flex-wrap max-w-6xl text-center bg-neutral py-24 px-4 rounded-lg">
            <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
            <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
            <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
            <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
        </div>
    )
}