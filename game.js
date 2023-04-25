console.log("let's play");
for (game = 0; game < 1; game++)
{
    unknown1 = "❔"
    unknown2 = "❓"
    
    points = 0
    
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    for (i = 0; i<=points; i++)
    {
        console.log(unknown1 + " " + unknown2)
        console.log("-1" + "-" + "-2-")
        console.log("points: " + points)
        correct = getRndInteger(1, 2)
        if (prompt("1 or 2?:") == correct )
        {
            points++
            console.log("✔️" + " correct!")
        }
    }
    
    console.log("✖️" + " wrong!")
    if (prompt("replay? (y/n):") == "y" )
    {
        game--
    }
}

console.log("bye bye 👋")
