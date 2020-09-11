"use strict";

const { Model } = require("objection");

class Admin extends Model {
  // bind your model to the corresponsing migration
  static get tableName() {
    return "admin";
  }

  // Add validation rules for your model
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "firstname",
        "lastname",
        "phone",
        "email",
        "password",
        "address",
      ],

      properties: {
        id: { type: "integer" },
        firstname: { type: "string", minLength: 1, maxLength: 255 },
        lastname: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 11, maxLength: 11 },
        email: { type: "string", minLength: 3, maxLength: 255 },
        password: { type: "string", minLength: 6, maxLength: 255 },
        address: { type: "string", minLength: 3, maxLength: 255 },
      },
    };
  }
}

module.exports = Admin;
