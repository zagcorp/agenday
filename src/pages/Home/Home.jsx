import Card from './Card.jsx';

export function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">LOGO</h1>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">TÍTULO</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center bg-neutral py-24 px-4 rounded-lg">
          <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
          <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
          <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
          <Card title="TÍTULO" desc="DESCRIÇÃO"></Card>
        </div>
      </div>
    </section>
  );
}
