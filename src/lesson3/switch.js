let value = true;

switch (typeof value) {
    case "number":
        console.log("Це число");
        break;
    case "string":
        console.log("Це рядок");
        break;
    case "boolean":
        console.log("Це булеве значення");
        break;
    default:
        console.log("Невідомий тип");
}