exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
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
          password: "1234Admin",
        },
      ]);
    });
};
