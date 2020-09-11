const bcrypt = require("bcrypt");

const hashedPassword =
  "$2b$10$9WXXOLxh3CcmzDw6HZlG0efOts2yOogvOOWNPJ7Fu9OLLPnm/ARg.";
// Password === 1234Admin

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("admin")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("admin").insert([
        {
          id: 1,
          firstname: "Super",
          lastname: "Admin",
          email: "admin@emed.com",
          phone: "08011122233",
          address: "123 Some Street",
          next_of_kin: "Sub Admin",
          id_type: "NIN",
          id_number: "NIN124545646",
          password: hashedPassword,
        },
      ]);
    });
};
