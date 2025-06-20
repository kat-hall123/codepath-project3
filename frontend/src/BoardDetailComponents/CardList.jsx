import '../css/CardList.css';
import CardItem from './CardItem';

function CardList({ cards, onDelete }) {
    return(
        <div className="card-list">
            {cards.map(card => (
                <CardItem key={card.id} card={card} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default CardList;