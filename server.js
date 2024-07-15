const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require('cors');

const app = express();
const port = 8000;
const connectDB = require("./db/dbConnection");
const User = require("./db/user");


// app.use(express.json());
app.use(express.json());
app.use(cors());


app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        // Generate a salt
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, password: hashedPassword});
        await user.save();
        res.status(201).json({ message: "Registration Successful" });

    } catch (error) {
        console.error(error);
        res.status(501).json({ error: "Registration Failed" });
    }
});


app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });

        if (!user) {
            // User not found
            return res.status(401).json({ error: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            // Password does not match
            return res.status(401).json({ error: "Invalid password" });
        }

        // Login successful
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Login Failed" });
    }
});

connectDB();
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})