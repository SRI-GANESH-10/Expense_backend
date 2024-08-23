"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const expense_schema_1 = require("../../repositories/schemas/expense.schema");
const mongoose_2 = require("mongoose");
let ExpenseService = class ExpenseService {
    constructor(expenseModel) {
        this.expenseModel = expenseModel;
    }
    async create(createExpenseDto) {
        const newExpense = new this.expenseModel(createExpenseDto);
        return newExpense.save();
    }
    async findAll() {
        return this.expenseModel.find().exec();
    }
    async findById(id) {
        return this.expenseModel.findById(id).exec();
    }
    async update(id, updateExpenseDto) {
        const updateExpense = await this.expenseModel.findByIdAndUpdate(id, updateExpenseDto, { new: true }).exec();
        return updateExpense;
    }
    async remove(id) {
        const removeExpense = await this.expenseModel.findByIdAndDelete(id).exec();
        return removeExpense;
    }
};
exports.ExpenseService = ExpenseService;
exports.ExpenseService = ExpenseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(expense_schema_1.Expense.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ExpenseService);
//# sourceMappingURL=expenses.services.js.map