import '../css/BoardCard.css';

import { Link } from 'react-router';

const BoardCard = ({ board }) => {
    return (
        <div className="board-card">
            <Link to={`/boards/${board.id}`} className="board-card-link">
                <img src={board.imageUrl} alt={board.title} className="board-image" />
                <div className="board-info">
                    <h3>{board.title}</h3>
                    <p>{board.category}</p>
                    {board.author && <p>By {board.author}</p>}
                </div>
            </Link>
        </div>
    )
}

export default BoardCard;