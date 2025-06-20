import '../css/CardItem.css';

function CardItem({ card }) {
    return(
        <div className="card-item">
            <h3>{card.title}</h3>
            <p>{card.message}</p>
            <img src={card.gifUrl} alt="GIF" className="card-gif" />
            {card.author && <p>{card.author}</p>}
        </div>
    )
}

export default CardItem;