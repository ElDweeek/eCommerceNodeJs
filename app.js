
import express from 'express'


const app = express()
const port = 8000

app.use(express.json())




app.get('/',(req,res) => {
    res.json({Message:`hii`})
})


app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))