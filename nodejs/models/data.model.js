module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define('data', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        letters: { type: Sequelize.STRING, allowNull: false },
        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    });

    return Data;
}