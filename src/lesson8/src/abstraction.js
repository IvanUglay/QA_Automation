var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Operation = /** @class */ (function () {
    function Operation(name) {
        this.name = name;
    }
    Operation.prototype.describe = function () {
        console.log("\u0412\u0438\u043A\u043E\u043D\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0456\u044F: ".concat(this.name));
    };
    return Operation;
}());
var ResultPrinter = /** @class */ (function () {
    function ResultPrinter() {
    }
    ResultPrinter.prototype.print = function (result) {
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result));
    };
    return ResultPrinter;
}());
var AddOperation = /** @class */ (function (_super) {
    __extends(AddOperation, _super);
    function AddOperation() {
        var _this = _super.call(this, "Додавання") || this;
        _this.printer = new ResultPrinter();
        return _this;
    }
    AddOperation.prototype.execute = function (a, b) {
        var result = a + b;
        this.printer.print(result);
        return result;
    };
    return AddOperation;
}(Operation));
var MultiplyOperation = /** @class */ (function (_super) {
    __extends(MultiplyOperation, _super);
    function MultiplyOperation() {
        var _this = _super.call(this, "Множення") || this;
        _this.printer = new ResultPrinter();
        return _this;
    }
    MultiplyOperation.prototype.execute = function (a, b) {
        var result = a * b;
        this.printer.print(result);
        return result;
    };
    return MultiplyOperation;
}(Operation));
// Приклад використання
function main() {
    var add = new AddOperation();
    var multiply = new MultiplyOperation();
    add.describe();
    add.execute(5, 7);
    console.log("-----");
    multiply.describe();
    multiply.execute(3, 4);
}
main();
