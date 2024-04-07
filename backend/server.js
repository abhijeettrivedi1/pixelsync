require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const{getJson}=require("serpapi");
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
         "*"
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

const PORT = 5001;


app.get('/', async (req, res) => {
    const {q}=req.body;
    try {
        const response = await getJson({
            engine: "google",
            api_key: "0b427700f40a34159360b2a65efa55afe548a135364f618e5ed4400a261bca51",
            q: "Jamshedpur",
            location: " Mumbai",
        });
 
     res.json({
        "pagination": response.pagination,
        "related_searches": response.related_searches,
        "organic_results": response.organic_results,
        "related_questions": response.related_questions,
     });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// console.log(response);
app.listen(PORT, () => {
    console.log("server is running at port:", ` ${PORT}`);
});