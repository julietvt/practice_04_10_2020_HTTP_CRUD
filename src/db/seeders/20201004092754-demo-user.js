'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', createUsers(15), {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};


function createUsers(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push({
      firstName: `First_name ${i}`,
      lastName: `Last_name ${i}`,
      email: `${i}@mail.com`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return arr;
}