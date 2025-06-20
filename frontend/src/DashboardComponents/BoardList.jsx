import '../css/BoardList.css';
import BoardCard from './BoardCard';

const BoardList = ({ boards, onDelete }) => {
    return (
        <div className="board-grid">
            {boards.map((board) => (
                <BoardCard key={board.id} board={board} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default BoardList;