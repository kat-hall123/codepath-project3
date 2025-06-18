const { PrismaClient } = require('./generated/prisma')
const prisma = new PrismaClient()

const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(express.json())

//GET all boards
app.get('/boards', async (req, res) => {
    try {
        const boards = await prisma.board.findMany()
        res.json(boards)
    } catch (error) {
        res.status(500).send('An error occurred while fetching the boards.');        
    }
}) 

//GET single board
app.get('/boards/:boardId', async (req, res) => {
    const boardId = parseInt(req.params.boardId)

    try {
        const board = await prisma.board.findUnique({
            where: { id: boardId}
        })

        if(board) {
            res.json(board)
        } else {
            res.status(404).send('Board not found')
        }
    } catch (error) {
        res.status(500).send('An error occurred while fetching the board.');
    }
})

//CREATE single board
app.post('/boards', async (req, res) => {
    const { title, category, author, imageUrl } = req.body
    if(!title || !category || !imageUrl) {
        throw new Error('Title, category, and image URL required')
    }

    try {
        const newBoard = await prisma.board.create({
            data: {
                title, 
                category,
                imageUrl,
                author
            }
        })
        res.status(201).json(newBoard)    
    } catch(error) {
        res.status(500).send('An error occurred while creating the board.');
    }
})

//DELETE single board 
app.delete('/boards/:boardId', async (req, res) => {
    const { boardId } = req.params

    try {
        const deletedBoard = await prisma.board.delete({
            where: { id: parseInt(boardId) }
        })
        res.json(deletedBoard)    
    } catch(error) {
        res.status(500).send('An error occurred while deleting the board.');
    }
})

//GET all cards (single board)
app.get('/boards/:boardId/cards', async (req, res) => {
    const { boardId } = req.params
    try {
        const cards = await prisma.card.findMany({
            where: { boardId: parseInt(boardId) }
        })
        res.json(cards)
    } catch(error) {
        res.status(500).send('An error occurred while fetching the cards.');
    }
}) 

//GET single card (single board)
app.get('/boards/:boardId/cards/:cardId', async (req, res) => {
    const { boardId, cardId } = req.params

    try{
        const card = await prisma.card.findFirst({
            where: {
                id: parseInt(cardId),
                boardId: parseInt(boardId)
            }
        })
        if(card) {
            res.json(card)
        } else {
            res.status(404).send('Card not found');
        }
    } catch(error) {
        res.status(500).send('An error occurred while fetching the card.');
    }
})

//CREATE single card (single board)
app.post('/boards/:boardId/cards', async (req, res) => {
    const { boardId } = req.params
    const { title, message, gifUrl, author } = req.body
    if(!title || !message || !gifUrl) {
        throw new Error('Title, message, and GIF required')
    }

    try{
        const newCard = await prisma.card.create({
            data: {
                title,
                message,
                gifUrl,
                author,
                boardId: parseInt(boardId)
            }
        })
        res.status(201).json(newCard)
    } catch(error) {
        res.status(500).send('An error occurred while creating the card.');
    }
}) 

//DELETE single card 
app.delete('/boards/:boardId/cards/:cardId', async (req, res) => {
    const { boardId, cardId } = req.params

    try {
        const deletedCard = await prisma.card.deleteMany({
            where: {
                id: parseInt(cardId),
                boardId: parseInt(boardId)
            }
        })
        res.json({ message: 'Card deleted successfully' });
    } catch(error) {
        res.status(500).send('An error occurred while deleting the card.');
    }
})

//UPDATE single card (upvote)
app.put('/boards/:boardId/cards/:cardId/upvote', async (req, res) => {
    const { boardId, cardId } = req.params

    try {
        const updatedCard = await prisma.card.updateMany({
            where: {
                id: parseInt(cardId),
                boardId: parseInt(boardId)
            },
            data: {
                upvotes: {
                    increment: 1
                }
            }
        })
        res.json({ message: 'Card upvoted successfully' })
    } catch(error) {
        res.status(500).send('An error occurred while upvoting the card.');
    }
    
})