"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_1 = require("./exceptions/http.exception");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_1.HttpExceptionFilter());
    await app.listen(5050);
}
bootstrap();
//# sourceMappingURL=main.js.map