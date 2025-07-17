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
        h2,input,button{
            margin: 10px;
            padding: 10px;
        }
    </style> 
</head>
<body>
    <input type="number" placeholder="enter a number" id="num">
    <button onclick="playgame()">Guess the number</button>
    <p id="feedback"></p>
    <p id="count"></p>
    <script>
        let target=Math.floor(Math.random()*100)+1;
        console.log(target)
        let count=0;
        function playgame(){
                let guess =parseInt(document.getElementById("num").value);
                count++;
                if(guess<target){
                    document.getElementById("feedback").innerText="TOO LOW";
                }else if(guess>target){
                    document.getElementById("feedback").innerText="TOO HIGH";
                }
                else{
                    document.getElementById("feedback").innerText="YOUR GUESS IS CORRECT";
                    document.getElementById("feedback").innerText="Your Attempts:"+count;
                }

        }
    </script>
</body>
</html>
