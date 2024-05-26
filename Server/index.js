const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const { ObjectId } = require('mongodb');
const isValidObjectId = (id) => ObjectId.isValid(id) && new ObjectId(id).toString() === id;
const idToCheck = '651a53a046a92da798190302';

if (isValidObjectId(idToCheck)) {
    console.log(`${idToCheck} is a valid MongoDB ObjectID.`);
} else {
    console.log(`${idToCheck} is not a valid MongoDB ObjectID.`);
}


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let bookCollection;

// Endpoint for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Endpoint to insert a book into the database
app.post("/upload-book", async (req, res) => {
    try {
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
    } catch (error) {
        console.error('Error uploading book:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/all-books", async(req ,res) =>{
   const books =  bookCollection.find();
   const result = await books.toArray();
   res.send(result);
});

//update
app.patch("/books/:id", async (req, res) => {
    const id = req.params.id;
     console.log('Received ID:', id);
     const updateBookData = req.body;
     const filter = {_id:new ObjectId(id)};
     const updatDoc = {
        $set:{
            ...updateBookData
        },

     }
     const options = {upsert:true};
     const result = await bookCollection.updateOne(filter, updatDoc, options);
     res.send(result);

});

app.delete("/book/:id",async(req,res) =>{
    const id = req.params.id;
    const filter = {_id:new ObjectId(id)};
    const result = await bookCollection.deleteOne(filter);
    res.send(result);
});

//find by category
//find by category
app.get("/all-books", async (req, res) => {
    let query = {};
    if (req.query?.category) {
        query = { category: req.query.category };
    }
    const result = await bookCollection.find(query).toArray();
    res.send(result);
});


// const isValidObjectId = (id) => ObjectId.isValid(id) && new ObjectId(id).toString() === id;

// app.get("/book/:id", async (req, res) => {
//     try {
//         let id = req.params.id;

//         console.log('Received ID:', id);

//         if (!isValidObjectId(id)) {
//             console.log('Invalid ObjectId:', id);
//             res.status(400).send({ error: "Invalid ObjectId" });
//             return;
//         }

//         const filter = { _id: new ObjectId(id) };
//         console.log('Database Query:', filter);

//         const result = await bookCollection.findOne(filter);

//         if (result) {
//             res.send(result);
//         } else {
//             console.log('Book not found in the database.');
//             res.status(404).send({ error: "Book not found" });
//         }
//     } catch (error) {
//         console.error("Error fetching book:", error);
//         res.status(500).send({ error: "Internal server error" });
//     }
// });

app.get("/book/:id", async (req, res) => {
    try {
        const id = req.params.id;
        console.log('Received ID:', id);

        const filter = { _id: new ObjectId(id).toString() };
        console.log('Database Query:', filter);

        const result = await bookCollection.findOne(filter);

        if (result) {
            res.json(result);
        } else {
            console.log('Book not found in the database.');
            res.status(404).json({ error: "Book not found" });
        }
    } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
});








// Database
const username = 'BookStore'; // Replace with your MongoDB Atlas username
const password = 'jRJHTi6ByFvmYqdk'; // Replace with your MongoDB Atlas password
const cluster = 'cluster0.th9bbr3.mongodb.net'; // Replace with your MongoDB Atlas cluster name
const database = 'bookInventory'; // Replace with your MongoDB Atlas database name

const uri = `mongodb+srv://${username}:${password}@${cluster}/${database}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();

        // Access the bookCollection
        bookCollection = client.db(database).collection('books');

        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 });
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Start the Express.js server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Run the MongoDB connection
run().catch(console.dir);
