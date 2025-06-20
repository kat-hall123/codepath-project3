import '../css/BoardCard.css';
import { Link } from 'react-router';

const BoardCard = ({ board, onDelete }) => {
    const handleDelete = async (event) => {
        event.preventDefault();
        await onDelete(board.id)
    }

    return (
        <div className="board-card">
            <img src={board.imageUrl} alt={board.title} className="board-image" />
            <h3>{board.title}</h3>
            <p>{board.category}</p>
            {board.author && <p>By {board.author}</p>}
            <div className="board-buttons">
                <Link to={`/boards/${board.id}`}>
                    <button>View Board</button>
                </Link>
                <button onClick={handleDelete}>Delete Board</button>
            </div>
        </div>
    )
}

export default BoardCard;