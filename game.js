console.log("let's play");
random = false
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
        if (!(random))
        {
            player = prompt("1 or 2?:")
        } else
        {
            player = getRndInteger(1, 2)
        }
        if (player == correct )
        {
            points++
            console.log("✔️" + " correct!")
        }
    }
    
    console.log("✖️" + " wrong!")
    console.log("you reached " + points +" points")
    rp = prompt("replay? (y/n):")
    if ( rp == "y" )
    {
        game--
        random = false
    } else if (rp == "r")
    {
        game--
        random = true
    }
}

console.log("bye bye 👋")
