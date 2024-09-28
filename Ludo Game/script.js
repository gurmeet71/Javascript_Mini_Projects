let Roll=()=>{
    const play1=Math.ceil(Math.random()*6);//3
    // console.log(play1);
    const play1dice=`Images/${play1}.png`;//3.png
    document.getElementById("check1").setAttribute("src", play1dice);//2

    const play2=Math.ceil(Math.random()*6);//4
    // console.log(play2);
    const play2dice=`Images/${play2}.png`;
    document.getElementById("check2").setAttribute("src", play2dice);//4

    if(play1>play2){
        document.querySelector("h1").innerHTML="Player 1 Won";
    }
    else if(play1<play2){
        document.querySelector("h1").innerHTML="Player 2 Won"
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }
}