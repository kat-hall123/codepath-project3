import './css/DashboardPage.css';

import SearchForm from './DashboardComponents/SearchForm';
import FilterTags from './DashboardComponents/FilterTags';
import CreateBoardForm from './DashboardComponents/CreateBoardForm';
import BoardList from './DashboardComponents/BoardList';

import { useEffect, useState } from 'react';

const DashboardPage = () => {
    const [boards, setBoards] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState('');

    const fetchBoards = async () => {
        try {
            const response = await fetch('http://localhost:3000/boards');
            const data = await response.json();
            setBoards(data);
        } catch(error) {
            console.error('Error fetching boards: ', error);
        }
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    const filteredBoards = boards.filter(board => 
        board.title.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div className="dashboard-container">
            <SearchForm 
                query={query}
                setQuery={setQuery}
            />
            <FilterTags />
            <div className="create-board-form">
                <button onClick={() => setShowModal(true)}>Create New Board</button>
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <CreateBoardForm onBoardCreated={() => {
                                fetchBoards();
                                setShowModal(false);
                            }} />
                            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>

            <BoardList boards={filteredBoards} />
        </div>
    );
};

export default DashboardPage;