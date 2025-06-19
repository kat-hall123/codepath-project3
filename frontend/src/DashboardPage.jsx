import './css/DashboardPage.css';

import SearchForm from './DashboardComponents/SearchForm';
import FilterTags from './DashboardComponents/FilterTags';
import CreateBoardForm from './DashboardComponents/CreateBoardForm';
import BoardList from './DashboardComponents/BoardList';

import { useEffect, useState } from 'react';

const DashboardPage = () => {
    const [boards, setBoards] = useState([]);

    const fetchBoards = async () => {
        try {
            const response = await fetch('http://localhost:3000/boards');
            const data = await response.json();
            setBoards(data);
        } catch(error) {
            console.error('Error fetching boards: ', error)
        }
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <div className="dashboard-container">
            <SearchForm />
            <FilterTags />
            <CreateBoardForm />
            <BoardList boards={boards} />
        </div>
    );
};

export default DashboardPage;