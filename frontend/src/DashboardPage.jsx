import './css/DashboardPage.css';

import SearchForm from './DashboardComponents/SearchForm';
import FilterTags from './DashboardComponents/FilterTags';
import CreateBoardForm from './DashboardComponents/CreateBoardForm';
import BoardList from './DashboardComponents/BoardList';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <SearchForm />
            <FilterTags />
            <CreateBoardForm />
            <BoardList />
        </div>
    );
};

export default DashboardPage;