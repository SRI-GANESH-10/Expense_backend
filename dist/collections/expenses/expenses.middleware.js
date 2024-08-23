"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
class LoggerMiddleware {
    use(req, res, next) {
        console.log("Hello");
        next();
    }
}
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=expenses.middleware.js.map