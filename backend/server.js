require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const{getJson}=require("serpapi");

app.use(cors());
app.use(express.json());

const PORT = 5001;


app.post('/', async (req, res) => {
    const {search}=req.body;
    console.log(search);
    try {
        const response = await getJson({
            engine: "google",
            api_key: "0b427700f40a34159360b2a65efa55afe548a135364f618e5ed4400a261bca51",
            q: search,
            location: " Mumbai",
        });
 
     res.json({
        "pagination": response.pagination,
        "related_searches": response.related_searches,
        "organic_results": response.organic_results,
        "related_questions": response.related_questions,
     });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
// console.log(response);
app.listen(PORT, () => {
    console.log("server is running at port:", ` ${PORT}`);
});