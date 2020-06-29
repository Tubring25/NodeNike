module.exports = {
  AutoWritedPersonModel(target, key, descriptor) {
    target.model = require("../model/personModel");
  },
  AutoWritedCompanyModel(target, key, descriptor) {
    target.model = require("../model/companyModel");
  }
};
