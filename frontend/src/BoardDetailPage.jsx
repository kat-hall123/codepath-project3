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

    const handleDeleteCard = async (cardId) => {
        try {
            const response = await fetch(`http://localhost:3000/boards/${boardId}/cards/${cardId}`, {
                method: 'DELETE'
            })

            if(response.ok) {
                setCards(prev => prev.filter(card => card.id !== cardId))
            } else {
                console.error('Failed to delte card')
            }
        } catch(error) {
            console.error('Error deleting card: ', error)
        }
    }



    return (
        <div>
            <h1>{boardTitle}</h1>
            <p>Create Card Form (here)</p>
            <CardList cards={cards} onDelete={handleDeleteCard}/>
        </div>
    );
}

export default BoardDetailPage;