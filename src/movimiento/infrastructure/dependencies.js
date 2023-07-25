"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameEsp32Controller = exports.getByIdProductController = exports.getAllProductController = exports.createProductController = exports.getByIdProductUseCase = exports.getAllUseCase = exports.getNameEsp32UseCase = exports.createProductUseCase = exports.mysqlProductRepository = void 0;
const MysqlProductRepository_1 = require("./MysqlProductRepository");
const CreateMovimientoUseCase_1 = require("../application/CreateMovimientoUseCase");
const GetAllMovimientoUseCase_1 = require("../application/GetAllMovimientoUseCase");
const GetByIdMovimientoUseCase_1 = require("../application/GetByIdMovimientoUseCase");
const GetNameEsp32_1 = require("../application/GetNameEsp32");
const CreateProductController_1 = require("./controllers/CreateProductController");
const GetAllProductController_1 = require("./controllers/GetAllProductController");
const GetByIdProductController_1 = require("./controllers/GetByIdProductController");
const GetNameEsp32_2 = require("./controllers/GetNameEsp32");
exports.mysqlProductRepository = new MysqlProductRepository_1.MysqlMovimientoRepository();
exports.createProductUseCase = new CreateMovimientoUseCase_1.CreateMovimientoUseCase(exports.mysqlProductRepository);
exports.getNameEsp32UseCase = new GetNameEsp32_1.GetNameEsp32UseCase(exports.mysqlProductRepository);
exports.getAllUseCase = new GetAllMovimientoUseCase_1.GetAllMovimientoUseCase(exports.mysqlProductRepository);
exports.getByIdProductUseCase = new GetByIdMovimientoUseCase_1.GetByIdMovimientoUseCase(exports.mysqlProductRepository);
exports.createProductController = new CreateProductController_1.CreateProductController(exports.createProductUseCase, exports.mysqlProductRepository);
exports.getAllProductController = new GetAllProductController_1.GetAllProductController(exports.getAllUseCase);
exports.getByIdProductController = new GetByIdProductController_1.GetByIdProductController(exports.getByIdProductUseCase);
exports.getNameEsp32Controller = new GetNameEsp32_2.GetNameEsp32Controller(exports.getNameEsp32UseCase);
