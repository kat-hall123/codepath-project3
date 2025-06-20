import '../css/CreateCardForm.css';

import { useState } from 'react';

function CreateCardForm({ boardId, onCardCreated }) {
    const [formData, setFormData] = useState({
        title: '',
        message: '',
        gifUrl: '',
        author: ''
    });

    const [gifSearch, setGifSearch] = useState('');
    const [gifResults, setGifResults] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/boards/${boardId}/cards`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                onCardCreated();
            } else {
                console.error('Failed to create card');
            }
        } catch (error) {
            console.error('Error creating card:', error);
        }
    };

    const handleGifSearch = async () => {
        if (!gifSearch) {
            return;
        } 
        
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(gifSearch)}&api_key=KPrkqb4Re2v2RA95wo6s6tId6rgoCahY&limit=5`);
            const data = await response.json();
            setGifResults(data.data);
        } catch (error) {
            console.error('Error fetching GIFs:', error);
        }
    };

    return (
        <>
            <h3>Create a card: </h3>
            <form onSubmit={handleSubmit} className="create-card-form">
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="message">Message: </label>
                <input 
                    type="text"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                />

                <label htmlFor="gifUrl">GIF URL (or search for GIFs below): </label>
                <input 
                    type="text" 
                    name="gifUrl" 
                    value={formData.gifUrl} 
                    onChange={handleChange} 
                />

                <label htmlFor="author">Author (optional): </label>
                <input 
                    type="text" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleChange} 
                />

                <div>
                    <label htmlFor="gifSearch">Search for GIFs: </label>
                    <input 
                        id="gifSearch"
                        type="text" 
                        value={gifSearch} 
                        onChange={(event) => setGifSearch(event.target.value)} 
                    />
                    <button type="button" onClick={handleGifSearch}>Search</button>
                    <div className="gif-results">
                        {gifResults.map(gif => (
                            <img
                                key={gif.id}
                                src={gif.images.fixed_height.url}
                                alt={gif.title}
                                onClick={() => setFormData(prev => ({ ...prev, gifUrl: gif.images.fixed_height.url }))}
                                className="gif"
                            />
                        ))}
                    </div>
                </div>

                <button type="submit">Add Card</button>
            </form>
        </>
        
    );
}

export default CreateCardForm;