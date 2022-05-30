// // console.log('Hello World');

// let age: number = 20;
// if (age < 50)
//     age += 10;
// console.log(age);

// let sales: number = 123_456_789;
// let sales = 123_456_789;
// let course: string = 'TypeScript';
// let course = 'TypeScript';
// let is_published: boolean = true;
// let is_published = true;
// let level;  //avoid using any
// level = 1;
// level = 'a';
// function render(document: any) {
// function render(document) {
//     console.log(document);
// }
// let numbers = [1, 2, 3];
// let numbers = [];
// let numbers: number[] = [];
// numbers[0] = 1;
// numbers[1] = '1';
// numbers.forEach(n => n.)


//--Tuples--
//1, 'Tharun'
// let user: [number, string] = [1, 'Tharun'];
// user[0].
// user.push(1); //tuple is a fixed length array


//--enum-- (list of related constants)
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
// enum Size { Small = 1, Medium, Large };
// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);


//Functions
// function calculateTax(income: number, taxYear?: number): number {
/*function calculateTax(income: number, taxYear = 2022): number {
    // let x;
    // return 0;
    // if (income < 50_000)
    if (taxYear < 2022)
    // if ((taxYear || 2022) < 2022)
        return income * 1.2;
    // undefined
    return income * 1.3;
}

// calculateTax(10_000, 2022);
calculateTax(10_000);*/


// objects
type Employee = {           //using type alias
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: /*{
    // id: number,
    readonly id: number,    //prevents accidental modification to value
    // name?: string
    name: string,
    retire: (date: Date) => void
}*/Employee = {
    id: 1,
    name: 'Tharun',
    retire: (date: Date) => {
        console.log(date);
    }
};
// } = { id: 1, name: '' };
// employee.name = 'Tharun';
// employee.id = 0;


// union types
/*function kgToLbs(weight: number | string): number {
    // weight.
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');*/


// intersection types

// let weight: number & string; //an object which is both a number and a string at the same time which is technically not possible
/*
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
*/


// Literal Types (used to limit the number of values that can be assigned to a variable)

// Literal (exact, specific)
type Quantity = 50 | 100;
// let quantity: 50 | 100 
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';


// Nullable Types
// function greet(name: string) {
/*function greet(name: string | null | undefined) {   //union operator used
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

//greet(null); // to remove null error disable strictNullChecks in tsconfig.json
greet(undefined);*/


// Optional Chaining

type Customer = {
    // birthday: Date
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

// let customer = getCustomer(0);
let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
// Optional property access operator
// console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// if (customers !== null && customers !== undefined)
//    customers[0]
//instead we can use
// customers?.[0]

// Optional call operator 
// let log: any = (message: string) => console.log(message);
let log: any = null;
log?.('a');