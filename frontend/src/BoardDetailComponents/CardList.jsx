import '../css/CardList.css';
import CardItem from './CardItem';

function CardList({ cards }) {
    return(
        <div className="card-list">
            {cards.map(card => (
                <CardItem key={card.id} card={card} />
            ))}
        </div>
    )
}

export default CardList;