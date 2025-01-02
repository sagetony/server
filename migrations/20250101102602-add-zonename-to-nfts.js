"use strict";

import { Sequelize } from "sequelize";
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Nfts", "zonename", {
      type: Sequelize.STRING,
      allowNull: true, // Set to true if optional
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("Nfts", "zonename");
  },
};
