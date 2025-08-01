console.log("🚀 Starting API Data Retrieval Simulation with Callbacks\n");

// Simulated API data
const mockDatabase = {
    users: [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", departmentId: 1 },
        { id: 2, name: "Bob Smith", email: "bob@example.com", departmentId: 2 },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", departmentId: 1 }
    ],
    departments: [
        { id: 1, name: "Engineering", location: "Building A" },
        { id: 2, name: "Marketing", location: "Building B" }
    ],
    projects: [
        { id: 1, name: "Website Redesign", userId: 1, status: "In Progress" },
        { id: 2, name: "Marketing Campaign", userId: 2, status: "Completed" },
        { id: 3, name: "Mobile App", userId: 1, status: "Planning" }
    ]
};

// 1. Basic API simulation functions with callbacks
function fetchUser(userId, callback) {
    console.log(`Fetching user with ID: ${userId}...`);
    
    // Simulate network delay
    setTimeout(() => {
        const user = mockDatabase.users.find(u => u.id === userId);
        if (user) {
            console.log(`User fetched: ${user.name}`);
            callback(null, user);
        } else {
            const error = new Error(`User with ID ${userId} not found`);
            console.log(`Error: ${error.message}`);
            callback(error, null);
        }
    }, Math.random() * 1000 + 500); // Random delay between 500-1500ms
}

function fetchDepartment(departmentId, callback) {
    console.log(`Fetching department with ID: ${departmentId}...`);
    
    setTimeout(() => {
        const department = mockDatabase.departments.find(d => d.id === departmentId);
        if (department) {
            console.log(`Department fetched: ${department.name}`);
            callback(null, department);
        } else {
            const error = new Error(`Department with ID ${departmentId} not found`);
            console.log(`Error: ${error.message}`);
            callback(error, null);
        }
    }, Math.random() * 800 + 300);
}

function fetchUserProjects(userId, callback) {
    console.log(`Fetching projects for user ID: ${userId}...`);
    
    setTimeout(() => {
        const projects = mockDatabase.projects.filter(p => p.userId === userId);
        console.log(`Projects fetched: ${projects.length} project(s)`);
        callback(null, projects);
    }, Math.random() * 600 + 400);
}

// 2. Simple callback example
function demonstrateBasicCallback() {
    console.log("\n=== 1. Basic Callback Example ===");
    
    fetchUser(1, (error, user) => {
        if (error) {
            console.log("Failed to fetch user:", error.message);
            return;
        }
        
        console.log("User Details:");
        console.log(`- Name: ${user.name}`);
        console.log(`- Email: ${user.email}`);
        console.log(`- Department ID: ${user.departmentId}`);
    });
}

// 3. Callback Hell Example
function demonstrateCallbackHell() {
    console.log("\n=== 2. Callback Hell Example ===");
    console.log("Fetching user -> department -> projects (nested callbacks)");
    
    fetchUser(1, (userError, user) => {
        if (userError) {
            console.log("Error fetching user:", userError.message);
            return;
        }
        
        fetchDepartment(user.departmentId, (deptError, department) => {
            if (deptError) {
                console.log("Error fetching department:", deptError.message);
                return;
            }
            
            fetchUserProjects(user.id, (projectsError, projects) => {
                if (projectsError) {
                    console.log("Error fetching projects:", projectsError.message);
                    return;
                }
                
                // Finally display all data - deeply nested!
                console.log("\n Complete User Profile:");
                console.log(`Name: ${user.name}`);
                console.log(`Email: ${user.email}`);
                console.log(`Department: ${department.name} (${department.location})`);
                console.log(`Projects:`);
                projects.forEach(project => {
                    console.log(`   - ${project.name} (${project.status})`);
                });
            });
        });
    });
}

// 4. Solution to Callback Hell - Named Functions
function displayUserProfile(user, department, projects) {
    console.log("\nComplete User Profile:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Department: ${department.name} (${department.location})`);
    console.log(`Projects:`);
    projects.forEach(project => {
        console.log(`   - ${project.name} (${project.status})`);
    });
}

function handleProjects(error, projects, user, department) {
    if (error) {
        console.log("Error fetching projects:", error.message);
        return;
    }
    displayUserProfile(user, department, projects);
}

function handleDepartment(error, department, user) {
    if (error) {
        console.log("Error fetching department:", error.message);
        return;
    }
    fetchUserProjects(user.id, (projectsError, projects) => {
        handleProjects(projectsError, projects, user, department);
    });
}

function handleUser(error, user) {
    if (error) {
        console.log("Error fetching user:", error.message);
        return;
    }
    fetchDepartment(user.departmentId, (deptError, department) => {
        handleDepartment(deptError, department, user);
    });
}

function demonstrateNamedFunctions() {
    console.log("\n=== 3. Avoiding Callback Hell with Named Functions ===");
    fetchUser(2, handleUser);
}

// 5. Callback Chaining with Control Flow
function createCallbackChain(operations, finalCallback) {
    let currentIndex = 0;
    const results = [];
    
    function executeNext(error, result) {
        if (error) {
            finalCallback(error, null);
            return;
        }
        
        if (result !== undefined) {
            results.push(result);
        }
        
        if (currentIndex >= operations.length) {
            finalCallback(null, results);
            return;
        }
        
        const currentOperation = operations[currentIndex];
        currentIndex++;
        
        currentOperation(executeNext);
    }
    
    executeNext();
}

function demonstrateCallbackChaining() {
    console.log("\n=== 4. Callback Chaining Example ===");
    
    const operations = [
        (callback) => {
            console.log("Step 1: Initializing system...");
            setTimeout(() => {
                console.log("System initialized");
                callback(null, "System Ready");
            }, 500);
        },
        (callback) => {
            console.log("Step 2: Authenticating user...");
            setTimeout(() => {
                console.log("User authenticated");
                callback(null, "Auth Token: abc123");
            }, 300);
        },
        (callback) => {
            console.log("Step 3: Loading user preferences...");
            setTimeout(() => {
                console.log("Preferences loaded");
                callback(null, "Preferences: Dark Mode, English");
            }, 700);
        },
        (callback) => {
            console.log("Step 4: Preparing dashboard...");
            setTimeout(() => {
                console.log("Dashboard ready");
                callback(null, "Dashboard: 5 widgets loaded");
            }, 400);
        }
    ];
    
    createCallbackChain(operations, (error, results) => {
        if (error) {
            console.log("Chain failed:", error.message);
            return;
        }
        
        console.log("\nAll operations completed successfully!");
        console.log("Results:");
        results.forEach((result, index) => {
            console.log(`   ${index + 1}. ${result}`);
        });
    });
}

// 6. Timing Demonstration
function demonstrateTiming() {
    console.log("\n=== 5. Timing in Asynchronous Systems ===");
    
    const startTime = Date.now();
    
    console.log("Starting parallel operations...");
    
    let completedOperations = 0;
    const totalOperations = 3;
    const results = {};
    
    function checkCompletion() {
        completedOperations++;
        if (completedOperations === totalOperations) {
            const endTime = Date.now();
            console.log(`\nAll operations completed in ${endTime - startTime}ms`);
            console.log("Results received:");
            console.log(`- User: ${results.user?.name || 'Failed'}`);
            console.log(`- Department: ${results.department?.name || 'Failed'}`);
            console.log(`- Projects: ${results.projects?.length || 0} found`);
        }
    }
    
    // Parallel execution
    fetchUser(1, (error, user) => {
        results.user = error ? null : user;
        console.log(`User operation completed (${Date.now() - startTime}ms)`);
        checkCompletion();
    });
    
    fetchDepartment(1, (error, department) => {
        results.department = error ? null : department;
        console.log(`Department operation completed (${Date.now() - startTime}ms)`);
        checkCompletion();
    });
    
    fetchUserProjects(1, (error, projects) => {
        results.projects = error ? null : projects;
        console.log(`Projects operation completed (${Date.now() - startTime}ms)`);
        checkCompletion();
    });
}

// 7. Error Handling Patterns
function demonstrateErrorHandling() {
    console.log("\n=== 6. Error Handling with Callbacks ===");
    
    // Attempt to fetch non-existent user
    fetchUser(999, (error, user) => {
        if (error) {
            console.log("Handling error gracefully...");
            console.log("Falling back to default user...");
            
            // Fallback to default user
            const defaultUser = { id: 0, name: "Guest User", email: "guest@example.com", departmentId: 1 };
            console.log(`Using fallback: ${defaultUser.name}`);
            
            fetchDepartment(defaultUser.departmentId, (deptError, department) => {
                if (!deptError) {
                    console.log(`Department: ${department.name}`);
                }
            });
        }
    });
}

// 8. Animation Sequence Simulation
function createAnimationSequence() {
    console.log("\n=== 7. Animation Sequence Simulation ===");
    
    const animations = [
        { name: "Fade In", duration: 300 },
        { name: "Slide Down", duration: 500 },
        { name: "Scale Up", duration: 200 },
        { name: "Bounce", duration: 400 },
        { name: "Fade Out", duration: 300 }
    ];
    
    function animateStep(stepIndex, callback) {
        if (stepIndex >= animations.length) {
            callback(null, "Animation sequence completed");
            return;
        }
        
        const animation = animations[stepIndex];
        console.log(`Playing: ${animation.name} (${animation.duration}ms)`);
        
        setTimeout(() => {
            console.log(`Completed: ${animation.name}`);
            animateStep(stepIndex + 1, callback);
        }, animation.duration);
    }
    
    animateStep(0, (error, result) => {
        if (error) {
            console.log("Animation failed:", error.message);
        } else {
            console.log(result);
        }
    });
}


function runSimulation() {
    console.log("Starting comprehensive callback simulation...\n");
    

    setTimeout(() => demonstrateBasicCallback(), 100);
    setTimeout(() => demonstrateCallbackHell(), 3000);
    setTimeout(() => demonstrateNamedFunctions(), 8000);
    setTimeout(() => demonstrateCallbackChaining(), 13000);
    setTimeout(() => demonstrateTiming(), 18000);
    setTimeout(() => demonstrateErrorHandling(), 23000);
    setTimeout(() => createAnimationSequence(), 26000);
    

    setTimeout(() => {
        console.log("\n" + "=".repeat(50));
        console.log("KEY LEARNING POINTS:");
        console.log("=".repeat(50));
        console.log("1. CALLBACKS vs PROMISES:");
        console.log("   • Callbacks: Functions passed as arguments, executed later");
        console.log("   • Promises: Objects representing future completion of async operations");
        console.log("   • Callbacks are harder to chain and can lead to 'callback hell'");
        console.log("");
        console.log("2. CALLBACK HELL:");
        console.log("   • Deeply nested callbacks create pyramid of doom");
        console.log("   • Solutions: Named functions, modularization, control flow libraries");
        console.log("   • Modern solution: Promises and async/await");
        console.log("");
        console.log("3. TIMING IN ASYNC SYSTEMS:");
        console.log("   • Operations don't complete in predictable order");
        console.log("   • Parallel execution can improve performance");
        console.log("   • Proper coordination mechanisms are essential");
        console.log("=".repeat(50));
    }, 30000);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchUser,
        fetchDepartment,
        fetchUserProjects,
        createCallbackChain,
        runSimulation
    };
}

runSimulation();