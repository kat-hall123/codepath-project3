import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import CardList from './BoardDetailComponents/CardList';
import CreateCardForm from './BoardDetailComponents/CreateCardForm';
import './css/BoardDetailPage.css';

function BoardDetailPage() {
    const { boardId } = useParams();
    const [cards, setCards] = useState([]);
    const [boardTitle, setBoardTitle] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const fetchCards = async () => {
        try {
            const boardResponse = await fetch(`${import.meta.env.VITE_API_URL}/boards/${boardId}`);
            const boardData = await boardResponse.json();
            setBoardTitle(boardData.title);

            const cardsResponse = await fetch(`${import.meta.env.VITE_API_URL}/boards/${boardId}/cards`);
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
            const response = await fetch(`${import.meta.env.VITE_API_URL}/boards/${boardId}/cards/${cardId}`, {
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

    const handleCardCreated = () => {
        fetchCards();
        setShowModal(false);
    }

    return (
        <div>
            <header>
                <h1>KUDOS BOARD</h1>
            </header>
            
            <button onClick={() => navigate('/')}>Back to Dashboard</button>
            
            <div className="board-info">
                <h1>{boardTitle}</h1>

                <button onClick={() => setShowModal(true)}> Create a card</button>
                {showModal && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <CreateCardForm boardId={boardId} onCardCreated={handleCardCreated} />
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                )}

                <CardList cards={cards} onDelete={handleDeleteCard}/>
            </div>
        </div>
    );
}

export default BoardDetailPage;