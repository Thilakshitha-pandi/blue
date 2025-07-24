<!DOCTYPE html>
<html>
<head>
  <title>Calculator</title>
</head>
<body>
  <script>
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
      console.log("Error: Invalid number input.");
    } else {
      console.log("----- Calculator Output -----");

      console.log(`Addition (${num1} + ${num2}) = ${num1 + num2}`);
      console.log(`Subtraction (${num1} - ${num2}) = ${num1 - num2}`);
      console.log(`Multiplication (${num1} * ${num2}) = ${num1 * num2}`);
      console.log(`Division (${num1} / ${num2}) = ${num2 !== 0 ? num1 / num2 : 'Error: Division by zero'}`);
      console.log(`Modulus (${num1} % ${num2}) = ${num2 !== 0 ? num1 % num2 : 'Error: Modulus by zero'}`);
    }
  </script>
</body>
</html>
