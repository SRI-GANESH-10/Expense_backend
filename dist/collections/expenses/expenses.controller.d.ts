import { ExpenseService } from "./expenses.services";
import { CreateExpenseDto } from "../../dto/expenses.dto";
export declare class ExpensesController {
    private readonly expenseService;
    constructor(expenseService: ExpenseService);
    findAll(): Promise<any>;
    create(createExpenseDto: {
        Type: string;
        Name: string;
        Cost: number;
    }): Promise<import("../../repositories/schemas/expense.schema").Expense>;
    update(id: string, createExpenseDto: CreateExpenseDto): Promise<import("../../repositories/schemas/expense.schema").Expense>;
    remove(id: string): Promise<import("../../repositories/schemas/expense.schema").Expense>;
}
