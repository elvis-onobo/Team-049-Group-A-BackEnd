"use strict";

const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }

  // Create JSON validation schema
  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstname", "lastname", "phone", "password"],

      properties: {
        id: { type: "integer" },
        firstname: { type: "string", minLength: 1, maxLength: 255 },
        lastname: { type: "string", minLength: 1, maxLength: 255 },
        phone: { type: "string", minLength: 11, maxLength: 11 },
        password: { type: "string", minLength: 6, maxLength: 255 },
      },
    };
  }
}

module.exports = User;
