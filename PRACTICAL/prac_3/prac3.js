console.log("--- 1. `const` and Template Literals ---");
        const course = "AWT";
        const year = 2025;
        console.log(`Course: ${course}, Year: ${year}`);
        console.log("\n");


        console.log("--- 2. Arrow Functions ---");
        const add = (a, b) => a + b;
        console.log(`Sum of 10 + 5 is: ${add(10, 5)}`);
        console.log("\n");


        console.log("--- 3. `let` and Spread Operator (...) for Arrays ---");
        let dept1 = ["CE", "IT", "CSE"];
        let dept2 = ["EC", "EE", "ME"];
        let allDept = [...dept1, ...dept2, "CL"];
        console.log("All Departments:", allDept);
        console.log("\n");


        console.log("--- 4. Spread Operator (...) for Objects ---");
        const student = { id: 188, name: "bhavya" };
        const profile = { city: "ahmedabad", age: 21 };
        const fullProfile = { ...student, ...profile, email: "bhavya@gmail.com" };
        console.log("Full Profile:", fullProfile);
        console.log("\n");


        console.log("--- 5. Object Destructuring ---");
        const emp = {
            id: 188,
            name: "bhavya",
            designation: "Developer",
            language: "JavaScript"
        };
        const { name, ...otherDetails } = emp;
        console.log(`Name: ${name}`);
        console.log("Other Details:", otherDetails);
        console.log("\n");


        console.log("--- 6. Rest Parameters (...) ---");
        const calculateTotal = (...nums) => nums.reduce((sum, current) => sum + current, 0);
        console.log(`Total Marks (70, 85, 90, 95): ${calculateTotal(70, 85, 90, 95)}`);
        console.log("\n");


        console.log("--- 7. Array Destructuring ---");
        const numbers = [1, 2, 3, 4, 5, 6];
        const [first, second, ...remaining] = numbers;
        console.log(`First element: ${first}`);
        console.log(`Second element: ${second}`);
        console.log("Remaining Array:", remaining);
        console.log("\n");
