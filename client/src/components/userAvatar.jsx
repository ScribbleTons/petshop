export default function UserAvatar({ picture, name,id=null }) {
  return (
    <div className="user-avi">
      <img src={picture} alt={name} className="user-avatar" id={id} />
    </div>
  );
}
