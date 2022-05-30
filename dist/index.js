"use strict";
var _a;
let employee = {
    id: 1,
    name: 'Tharun',
    retire: (date) => {
        console.log(date);
    }
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map