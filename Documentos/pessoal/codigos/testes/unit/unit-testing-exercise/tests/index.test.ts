import { calculateTax } from "../src/index";
import { generateRandomNumber } from "./utils/generateRandomNumber";

describe("Calculate Tax", () => {
    it("when salary is less than 2500 should return 0", () => {
        const salary = generateRandomNumber(0, 2500);
        const tax = calculateTax(salary);
        expect(tax).toBe(0);
    });
    it("when salary is less than 3200 and greater than 2500 should return 0.075 * salary", () => {
        const salary = generateRandomNumber(2500, 3200);
        const tax = calculateTax(salary);
        expect(tax).toBe(salary * 0.075);
    });
    it("when salary is less than 4250 and greater than 3200 should return 0.15 * salary", () => {
        const salary = generateRandomNumber(3200, 4250);
        const tax = calculateTax(salary);
        expect(tax).toBe(salary * 0.15);
    });
    it("when salary is less than 5300 and greater than 4250 should return 0.225 * salary", () => {
        const salary = generateRandomNumber(4250, 5300);
        const tax = calculateTax(salary);
        expect(tax).toBe(salary * 0.225);
    });
    it("when salary is greater than 5300 should return 0.275 * salary", () => {
        const salary = generateRandomNumber(5300, 7000);
        const tax = calculateTax(salary);
        expect(tax).toBe(salary * 0.275);
    });
});

