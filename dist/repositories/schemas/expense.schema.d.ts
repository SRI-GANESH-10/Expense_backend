import { Document } from "mongoose";
export declare class Expense extends Document {
    Type: String;
    Name: String;
    Cost: Number;
}
export declare const ExpenseSchema: import("mongoose").Schema<Expense, import("mongoose").Model<Expense, any, any, any, Document<unknown, any, Expense> & Expense & Required<{
    _id: unknown;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Expense, Document<unknown, {}, import("mongoose").FlatRecord<Expense>> & import("mongoose").FlatRecord<Expense> & Required<{
    _id: unknown;
}>>;
