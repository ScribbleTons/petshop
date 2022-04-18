export default function CarouselCard({ username, text, image }) {
  return (
    <div className="testimony-card">
      <img src={image} alt="A standing being" className="avatar" />
      <h2 className="name">{username}</h2>
      <p className="legend">{text}</p>
    </div>
  );
}
