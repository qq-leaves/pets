/**
 * Created by Administrator on 2018/8/7.
 */
var p_ceng;
window.onload =function () {
    var b_p = document.getElementsByClassName("block")[0];
    var bigimg=document.getElementsByClassName ("bigimg")[0];
    b_p.onmouseenter = function () {
        p_ceng = document.createElement("div");
        p_ceng.className = "c";
        this.appendChild(p_ceng);
        this.style.cursor = "move";
        bigimg.style.display="block";
    }
    b_p.onmouseleave = function () {
        p_ceng.remove();
        bigimg.style.display="none";
    }
    b_p.onmousemove = function (e) {
        var event = e || window.event;
        var olef = this.offsetLeft;
        var w_ceng = window.getComputedStyle(p_ceng);
        var x = (event.pageX - olef - parseInt(w_ceng.width) / 2);
        var y = (event.pageY - parseInt(w_ceng.height) / 2);
        /* p_ceng.style.left = event.pageX + "px";
         p_ceng.style.top = event.pageY + "px";*/
        judgeLeftorTop(x, y);
    }
     function judgeLeftorTop(x,y){
     var par_b=window.getComputedStyle (b_p);
     var chil_c=window.getComputedStyle(p_ceng);
     if(x<0){
     x=0;
     }
     else if(x>parseInt(par_b.width)-parseInt(chil_c.width)){
     x=parseInt(par_b.width)-parseInt(chil_c.width);
     }

     if(y<0){
     y=0;
     }
     else if(y>parseInt(par_b.height)-parseInt(chil_c.height)){
     y=parseInt(par_b.height)-parseInt(chil_c.height);
     }
     p_ceng.style.left=x+"px";
     p_ceng.style.top=y+"px";
         bigimg.style.backgroundPosition=(-2.5 * x)+"px " + (-2.5 * y) + "px";
        /* bigimg.style.backgroundPosition = (-2.5 * x) + "px " + (-2.5 * y) + "px";*!/*/
     }
}