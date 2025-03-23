interface RoomCardProps {
  title: string;
  price: number;
  image: string;
}

const RoomCard = ({ title, price, image }: RoomCardProps) => {
  return (
    <div className="room-card">
      <img className="room-card-image" src={image} alt={title} />
      <div className="room-card-content">
        <h3 className="room-card-title">{title}</h3>
        <p className="room-card-price">
          Desde <span>${price}</span> por noche
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
