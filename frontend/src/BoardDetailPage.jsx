import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import CardList from './BoardDetailComponents/CardList';
// import CreateCardForm from './BoardDetailComponents/CreateCardForm';

function BoardDetailPage() {
    const { boardId } = useParams();
    const [cards, setCards] = useState([]);
    const [boardTitle, setBoardTitle] = useState('');

    const fetchCards = async () => {
        try {
            const boardResponse = await fetch(`http://localhost:3000/boards/${boardId}`);
            const boardData = await boardResponse.json();
            setBoardTitle(boardData.title);

            const cardsResponse = await fetch(`http://localhost:3000/boards/${boardId}/cards`);
            const cardsData = await cardsResponse.json();
            setCards(cardsData);
        } catch(error) {
            console.error('Error fetching boards or cards: ', error)
        }
    }

    useEffect(() => {
        fetchCards();
    }, [boardId]);

    return (
        <div>
            <h1>{boardTitle}</h1>
            <p>Create Card Form (here)</p>
            <CardList cards={cards} />
        </div>
    );
}

export default BoardDetailPage;