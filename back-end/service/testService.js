// import BaseService from './baseService'
var BaseService = require('./baseService.js');
// import { AutoWritedCompanyModel } from '../common/AutoWrite.js';
class TestService extends BaseService {
	constructor() {
		super(CompanyService.model);
	}
}
TestService.model = require('../model/testModel');
module.exports = new TestService()