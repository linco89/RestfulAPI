const express = require('express');
const router = express.Router(); 
const items = require('../data/items');

// Get all items
router.get('/', (req, res) => {   
    res.send(items);
});

// Get a single item by ID
router.get('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find(i => i.id === itemId);
    
    if (!item) {
        return res.status(404).json({ error: 'Item not found' });
    }
    
    res.json(item);
});
//adding a new item
router.post('/', (req, res) => {
    const { name, description} = req.body;
    const newItem = {
        id:items.length + 1, 
        name,
        description
    };
     // Check if item with the same name already exists
    const existingItem = items.find(item => item.name === name);
    if (existingItem) {
        return res.status(409).json({ error: 'Item with this name already exists' });
    }

    if(!name || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    else{
        items.push(newItem);
        res.status(201).json({ message: 'Item added successfully', item: newItem });
         }});

// Delete an item by ID
router.delete('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }

    const deletedItem = items.splice(itemIndex, 1)[0];
    res.json({ message: 'Item deleted successfully', item: deletedItem });
});

// Update an item by ID  
router.put('/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({ error: 'Item not found' });
    }

    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if item with the same name already exists
    const existingItem = items.find(item => item.name === name && item.id !== itemId);
    if (existingItem) {
        return res.status(409).json({ error: 'Item with this name already exists' });
    }

    const updatedItem = { id: itemId, name, description };
    items[itemIndex] = updatedItem;
    
    res.json({ message: 'Item updated successfully', item: updatedItem });
});



module.exports= router;