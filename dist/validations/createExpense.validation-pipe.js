"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZodCreateExpensePipe = void 0;
const common_1 = require("@nestjs/common");
class ZodCreateExpensePipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(value, metadata) {
        try {
            const parsedValue = this.schema.parse(value);
            return parsedValue;
        }
        catch (error) {
            throw new common_1.BadRequestException({ message: error.message });
        }
    }
}
exports.ZodCreateExpensePipe = ZodCreateExpensePipe;
//# sourceMappingURL=createExpense.validation-pipe.js.map