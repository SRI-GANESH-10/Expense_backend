import { Expense } from "../../repositories/schemas/expense.schema";
import { Model } from "mongoose";
import { CreateExpenseDto } from "../../dto/expenses.dto";
export declare class ExpenseService {
    private readonly expenseModel;
    constructor(expenseModel: Model<Expense>);
    create(createExpenseDto: CreateExpenseDto): Promise<Expense>;
    findAll(): Promise<Expense[]>;
    findById(id: string): Promise<Expense>;
    update(id: string, updateExpenseDto: CreateExpenseDto): Promise<Expense>;
    remove(id: string): Promise<Expense>;
}
