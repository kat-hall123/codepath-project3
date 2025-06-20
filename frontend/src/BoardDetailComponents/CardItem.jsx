import '../css/CardItem.css';
import { useState } from 'react';

function CardItem({ card, onDelete }) {
    const [upvotes, setUpvotes] = useState(card.upvotes);
    
    const handleUpvote = async () => {
        try {
            const response = await fetch(`http://localhost:3000/boards/${card.boardId}/cards/${card.id}/upvote`, {
                method: 'PUT'
            });
            
            if(response.ok) {
                setUpvotes(prev => prev + 1);
            } else {
                console.error('Failed to upvote');
            }
        } catch(error) {
            console.error('Error upvoting: ', error);
        }
    }
    
    const handleDelete = async () => {
        await onDelete(card.id);
    }

    return(
        <div className="card-item">
            <h3>{card.title}</h3>
            <p>{card.message}</p>
            <img src={card.gifUrl} alt="GIF" className="card-gif" />
            {card.author && <p>{card.author}</p>}
            <button onClick={handleUpvote}>Upvote ({upvotes})</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CardItem;