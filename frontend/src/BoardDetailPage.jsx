import { useParams } from 'react-router';

function BoardDetailPage() {
    const { boardId } = useParams();

    return (
        <div>
            <h1>Board Detail Page</h1>
            <p>Board ID: {boardId}</p>
        </div>
    );
}

export default BoardDetailPage;