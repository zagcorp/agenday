export default function PageTitle({ subTitle, title, desc, img, color = 'white' }) {
  return (
    <div className="flex p-5">
      <div className="w-[120px]">
        <img src={img}></img>
      </div>
      <div style={{color: color}}>
        <span className="text-base-100 text-inherit">{subTitle}</span>
        <h1 className="text-base-100 text-inherit">{title}</h1>
        <p className="text-base-100 text-inherit">{desc}</p>
      </div>
    </div>
  );
}