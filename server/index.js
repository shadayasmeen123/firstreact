
import express from 'express'
import mongoose, { connect } from 'mongoose'
const app = express()
const PORT = 5000
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.htt3eqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.get('/', (req, res) => {
    res.send("Backend Running!!!!")
})
app.listen(PORT, () => {
    mongoose.connect(MONGO_URI)
    console.log(`server started on http://localhost:${PORT}/`)
})
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Mongo URI connected");


    
    })
    .catch(() => {
        console.log("DB connection error")
    
    })
const UserSchema = new mongoose.Schema(
    {
        name: String,
        email:String
    }
)
const user = mongoose.model('user', UserSchema )
add.post('/users', async (req, res) => {
    try { 
        const newUser = new UserSchema(req.res)
        await newUser.save();
        res.status(201).send("user created")

    }
    catch (err) {
        res.status(400).send("Error:" + err)

    }    
})
