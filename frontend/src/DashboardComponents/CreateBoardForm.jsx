import '../css/CreateBoardForm.css';
import { useState } from 'react';

const CreateBoardForm = ({ onBoardCreated }) => {
    const[formData, setFormData] = useState({
        title: '',
        category: '',
        author: '',
        imageUrl: ''
    })

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // adds the new value to the existing form data 
        setFormData((prev) => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!formData.title || !formData.category || !formData.imageUrl) {
            alert('Title, category, and image URL are required')
            return
        }

        try {
            const response = await fetch('http://localhost:3000/boards', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            if(response.ok) {
                // clear form, then refresh dashboard 
                setFormData({ title: '', category: '', author: '', imageUrl: ''})
                onBoardCreated()
            } else{
                console.error('Error creating board')
            }
        } catch (error) {
            console.error('Error: ', error)
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="create-board-form">
            <h3>Create a board: </h3>

            <div className="questions">
                <label htmlFor="title">Title: </label>
                <input 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <div className="dropdown">
                    <label htmlFor="category">Category: </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="category"
                    >
                        <option value="">Select a category</option>
                        <option value="Thank You">Thank You</option>
                        <option value="Celebration">Celebration</option>
                        <option value="Inspiration">Inspiration</option>
                    </select>
                </div>

                <label htmlFor="author">Author(optional): </label>
                <input 
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                />

                <label htmlFor="imageUrl">Image Address: </label>
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                />
            </div>
            
            <button type="submit">Create Board</button>
        </form>
    )
}

export default CreateBoardForm;
