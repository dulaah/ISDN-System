const sequelize = require("../config/database");

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("✅  Connected Successfully");
    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error.message);
    }
}

module.exports = testConnection;