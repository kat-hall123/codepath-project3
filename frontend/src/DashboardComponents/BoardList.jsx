import '../css/BoardList.css';

import BoardCard from './BoardCard';

const BoardList = ({ boards }) => {
    return (
        <div className="board-grid">
            {boards.map((board) => (
                <BoardCard key={board.id} board={board} />
            ))}
        </div>
    )
}

export default BoardList;