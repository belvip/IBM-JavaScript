/**
 * Employee Management System
 * This script manages employee data and provides functions to display, filter, and analyze employee information
 */

// Employee data array containing employee records
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Emily Davis', age: 40, department: 'IT', salary: 55000 },
    { id: 5, name: 'Michael Brown', age: 32, department: 'HR', salary: 48000 },
    { id: 6, name: 'Sarah Wilson', age: 45, department: 'Finance', salary: 65000 },
    { id: 7, name: 'David Lee', age: 38, department: 'IT', salary: 52000 },
    { id: 8, name: 'Emma Taylor', age: 29, department: 'HR', salary: 47000 },
    { id: 9, name: 'James Anderson', age: 33, department: 'Finance', salary: 62000 },
    { id: 10, name: 'Olivia Martinez', age: 31, department: 'IT', salary: 51000 },
    { id: 11, name: 'Daniel Thomas', age: 27, department: 'HR', salary: 46000 },
    { id: 12, name: 'Sophia Garcia', age: 36, department: 'Finance', salary: 63000 },
    { id: 13, name: 'William Hernandez', age: 39, department: 'IT', salary: 53000 },
    { id: 14, name: 'Ava Rodriguez', age: 26, department: 'HR', salary: 47000 },
    { id: 15, name: 'Ethan Lopez', age: 34, department: 'Finance', salary: 64000 },
    { id: 16, name: 'Isabella Gonzalez', age: 37, department: 'IT', salary: 54000 },
    { id: 17, name: 'Mia Perez', age: 25, department: 'HR', salary: 48000 },
    { id: 18, name: 'Liam Martinez', age: 32, department: 'Finance', salary: 63000 },
    { id: 19, name: 'Avery Wilson', age: 29, department: 'IT', salary: 52000 },
    { id: 20, name: 'Ella Taylor', age: 30, department: 'HR', salary: 47000 },
];

/**
 * Displays all employees in the HTML element with id 'employeesDetails'
 * Uses map() to transform employee data into HTML strings and join() to combine them
 */
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

/**
 * Filters and displays only HR department employees
 * Uses filter() to select HR employees and map() to format their details
 */
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

/**
 * Calculates and displays the sum of all employee salaries
 * Uses reduce() to accumulate the total salary amount
 */
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Note: This is a duplicate function that should be removed
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

/**
 * Finds and displays an employee by their ID
 * Uses find() to locate the employee with the matching ID
 * @param {number} employeeId - The ID of the employee to find
 */
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
        if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
        }
        else{
            document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
        }
}