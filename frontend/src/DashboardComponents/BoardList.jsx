import '../css/BoardList.css';

import BoardCard from './BoardCard';

const BoardList = () => {
    return (
        <div className="board-grid">
            <BoardCard />
            <BoardCard />
            <BoardCard />
            <BoardCard />
        </div>
        
    )
}

export default BoardList;