var xo='O';
var np=0;
document.getElementById("inp").focus();

function play() {

    var c1 =document.getElementById("c1");
    var c2 =document.getElementById("c2");
    var c3 =document.getElementById("c3");
    var c4 =document.getElementById("c4");
    var c5 =document.getElementById("c5");
    var c6 =document.getElementById("c6");
    var c7 =document.getElementById("c7");
    var c8 =document.getElementById("c8");
    var c9 =document.getElementById("c9");

    var p=document.getElementById("inp").value;

    //alert(c1.innerHTML);
    
    if(p==c1.innerHTML)
    {
        c1.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c2.innerHTML)
    {
        c2.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c3.innerHTML)
    {
        c3.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c4.innerHTML)
    {
        c4.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c5.innerHTML)
    {
        c5.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c6.innerHTML)
    {
        c6.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c7.innerHTML)
    {
        c7.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c8.innerHTML)
    {
        c8.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }
    if(p==c9.innerHTML)
    {
        c9.innerHTML=xo;
        if(xo=='O')
        {
            xo='X'
        }
        else{
            xo='O'
        }
        np++;
    }


    if(c1.innerHTML==c2.innerHTML &&c2.innerHTML==c3.innerHTML)
    {
        c1.style.backgroundColor="rgb(36, 228, 170)";
        c2.style.backgroundColor="rgb(36, 228, 170)";
        c3.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c4.innerHTML==c5.innerHTML &&c5.innerHTML==c6.innerHTML)
    {
        c4.style.backgroundColor="rgb(36, 228, 170)";
        c5.style.backgroundColor="rgb(36, 228, 170)";
        c6.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c7.innerHTML==c8.innerHTML &&c8.innerHTML==c9.innerHTML)
    {
        c7.style.backgroundColor="rgb(36, 228, 170)";
        c8.style.backgroundColor="rgb(36, 228, 170)";
        c9.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c1.innerHTML==c4.innerHTML &&c4.innerHTML==c7.innerHTML)
    {
        c1.style.backgroundColor="rgb(36, 228, 170)";
        c4.style.backgroundColor="rgb(36, 228, 170)";
        c7.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c5.innerHTML==c2.innerHTML &&c2.innerHTML==c8.innerHTML)
    {
        c5.style.backgroundColor="rgb(36, 228, 170)";
        c2.style.backgroundColor="rgb(36, 228, 170)";
        c8.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c6.innerHTML==c9.innerHTML &&c9.innerHTML==c3.innerHTML)
    {
        c6.style.backgroundColor="rgb(36, 228, 170)";
        c9.style.backgroundColor="rgb(36, 228, 170)";
        c3.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c1.innerHTML==c5.innerHTML &&c5.innerHTML==c9.innerHTML)
    {
        c1.style.backgroundColor="rgb(36, 228, 170)";
        c5.style.backgroundColor="rgb(36, 228, 170)";
        c9.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    if(c7.innerHTML==c5.innerHTML &&c5.innerHTML==c3.innerHTML)
    {
        c7.style.backgroundColor="rgb(36, 228, 170)";
        c5.style.backgroundColor="rgb(36, 228, 170)";
        c3.style.backgroundColor="rgb(36, 228, 170)";

    document.getElementById("btn").style.visibility="visible";

    }
    /*
        123
        456
        789

        147
        258
        369

        159
        357
    */
    document.getElementById("inp").value="";
    document.getElementById("inp").focus();
    if(np==9)
    {
    document.getElementById("btn").style.visibility="visible";
    }

}

document.getElementById('inp').onkeydown = function(event) {
if (event.keyCode == 13) {
play();
}
}