/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'students',
    'email',
    {
      type: Sequelize.STRING,
      allownull: false,
      unique: true,
    },
  ),
  down: () => {},
};
