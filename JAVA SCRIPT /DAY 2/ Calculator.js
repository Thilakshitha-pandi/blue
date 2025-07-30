<!DOCTYPE html>
<html lang="en"> 
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
     body{
        text-align: center;
     } 
     input,select,button{
        margin: 10px;
        padding: 10px;
     }
    </style>
</head>
<body>
    <h2>Calculator Program</h2>
    <input type="number" placeholder="Enter first No:" id="num1">
    <input type="number" placeholder="Enter second No:" id="num2"><br><br>
    <select name=" " id="operation">
        <option value="Addition">Addition</option>
        <option value="Multiplication">Multiplication</option>
        <option value="Subtraction">Subtraction</option>
        <option value="Division">Division</option>
        
    </select>
    <button onclick="Calculate()">Calculate</button>

    
    <div id="Result">Result</div>
    <script>
        function Calculate(){
            let num1=parseInt(document.getElementById("num1").value) ;
            let num2=parseInt (document.getElementById("num2").value);
            let operation=document.getElementById("operation").value;
            let resultDisplay=document.getElementById("Result");

            if (isNaN(num1)|| isNaN(num2)) {
                resultDisplay.innerText = "Please enter valid numbers.";
                resultDisplay.style.color = "red";
        return;
            }
            else{
                document.getElementById("Result").innerText="Result";

                let result;

      switch (operation) {
        case "Addition":
          result = num1 + num2;
          break;
        case "Subtraction":
          result = num1 - num2;
          break;
        case "Multiplication":
          result = num1 * num2;
          break;
        case "Division":
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            result = "Error: Division by zero";
          }
          break;
        default:
          result = "Unknown operation";
      }

      resultDisplay.innerText = `Result: ${result}`;
      resultDisplay.style.color = "darkblue";
    }
            

        }
    </script>

</body>
</html>
