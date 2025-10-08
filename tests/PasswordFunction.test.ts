import { calculatePasswordStrength} from "../src/PasswordFunction";

describe("calculatePasswordStrength", () => {
    test("очень слабый пароль — короткий и без разных символов", () => {
        expect(calculatePasswordStrength("abc")).toBe("Very Weak");
    });
    test("пустая строка", () => {
        expect(calculatePasswordStrength("")).toBe("Very Weak");
    });

    test("слабый пароль — достаточная длина, но мало разнообразия", () => {
        expect(calculatePasswordStrength("Abcd")).toBe("Weak");
    });

    test("умеренный пароль — буквы + цифры, но без спецсимволов", () => {
        expect(calculatePasswordStrength("Abcd1234")).toBe("Moderate");
    });
    test("пароль без цифр, но длинный и со спецсимволами", () => {
        expect(calculatePasswordStrength("@bcd1111e")).toBe("Moderate");
    });

    test("сильный пароль — буквы, цифры и спецсимволы", () => {
        expect(calculatePasswordStrength("Abcd1234!")).toBe("Strong");
    });


    test("очень сильный пароль — длинный, содержит всё", () => {
        expect(calculatePasswordStrength("A1b2c3d4e5f6!@#")).toBe("Strong");
    });


});

