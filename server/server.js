require("dotenv").config();

const app = require("./app");
const testConnection = require("./database/testConnection");

const PORT = process.env.PORT || 5000;

testConnection();

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
const {
    sequelize
} = require("./models");
sequelize.sync({ alter: false })
.then(() => {
    console.log("✅ Database Synced");
})
.catch(err => {
    console.log(err);
});