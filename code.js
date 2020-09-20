var quote = [["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"], ["“A room without books is like a body without a soul.”"], ["“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"], ["“If you tell the truth, you don't have to remember anything.”"], ["“We are all in the gutter, but some of us are looking at the stars.”"], ["“Life is what happens to us while we are making other plans.”"], ["“The man who does not read has no advantage over the man who cannot read.”"]];
function quote_box(head1){
    let choice = Math.floor(Math.random() * (quote.length));
    message = quote[choice]
    document.getElementById(head1).innerHTML = message;
};

function func01(head1, id1){
    document.getElementById(head1).style.color = "yellow";    
    document.getElementById(head1).style.fontFamily = "monospace";
    document.getElementById(id1).style.backgroundColor = "green";
    document.getElementById(id1).style.borderColor = "blue";

};

function func02(head1, id1){
    document.getElementById(head1).style.color = "red";    
    document.getElementById(head1).style.fontFamily = "'Courier New', Courier";
    document.getElementById(id1).style.backgroundColor = "yellow";
    document.getElementById(id1).style.borderColor = "black";

};

function func03(head1, id1){
    document.getElementById(head1).style.color = "white";    
    document.getElementById(head1).style.fontFamily = "Lucida Sans Unicode";    
    document.getElementById(id1).style.backgroundColor = "black";
    document.getElementById(id1).style.borderColor = "gray";

};

function func04(head1, id1){
    document.getElementById(head1).style.color = "black";    
    document.getElementById(head1).style.fontFamily = "sans-serif";              
    document.getElementById(id1).style.backgroundColor = "pink";
    document.getElementById(id1).style.borderColor = "red";

};

function convert(){
    let val = document.getElementById("convert_id1").value;
    if(document.getElementById("convert_id2").value == "lb_to_kg"){
        document.getElementById("convert_out").innerHTML = (val * 0.453592) + " kg";
    }
    else{
        document.getElementById("convert_out").innerHTML = (val * 2.20462) + " lb";
    }
};

function calculate(){
    let array = document.getElementById("calculate_id").value;
    let max = -10000000000, min = 10000000000, sum = 0;
    let x = 0, y = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == ','){
            y.push(x);
            x = 0;
        }
        else x = (x * 10) + (array[i] - '0');
    }
    if(array[array.length - 1] != ',') y.push(x);
    for(let i = 0; i < y.length; i++){
        sum += y[i];
        if(y[i] > max) max = y[i];
        if(y[i] < min) min = y[i];
    }
    y.reverse();
    document.getElementById("max").innerHTML = "max: " + max;
    document.getElementById("min").innerHTML = "min: " + min;
    document.getElementById("sum").innerHTML = "sum: " + sum;
    document.getElementById("avg").innerHTML = "avg: " + (sum / y.length);
    document.getElementById("rev").innerHTML = "rev: " + y.join(",");
};

let abc = 0;
function magic_1(){
    abc = 0;
    document.getElementById("magic").value = "";
}
function magic_2(){
    let txt = document.getElementById("magic").value;
    let str = "";
    if(abc % 2 == 0) str = txt.toUpperCase();
    else str = txt.toLowerCase();
    document.getElementById("magic").value = str;
    abc++;
};
function magic_3(){
    let txt = document.getElementById("magic").value;
    let str = txt.split("\n");
    str.sort();
    document.getElementById("magic").value = str.join("\n");
}
function magic_4(){
    let txt = document.getElementById("magic").value;
    let str = txt.split("\n");
    for(let i = 0; i < str.length; i++){
        let st = str[i].split("");
        st.reverse();
        str[i] = st.join("");
    }
    document.getElementById("magic").value = str.join("\n");
};
function magic_5(){
    let txt = document.getElementById("magic").value;
    let str = txt.split("\n");
    for(let i = 0; i < str.length; i++){
        let st = str[i].split(" ");
        str[i] = st.join("");
    }
    document.getElementById("magic").value = str.join("\n");
};
function magic_6(){
    let txt = document.getElementById("magic").value;
    let str = txt.split("\n");
    for(let i = 0; i < str.length; i++){
        str[i] = (i + 1) + " " + str[i];
    }
    document.getElementById("magic").value = str.join("\n");
};
function magic_7(){
    let txt = document.getElementById("magic").value;
    let str = txt.split("\n");
    for(let i = 0; i < str.length; i++){
        let r = Math.floor(Math.random() * str.length);
        let t = str[i];
        str[i] = str[r];
        str[r] = t;
    }
    document.getElementById("magic").value = str.join("\n");
};