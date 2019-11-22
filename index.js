document.getElementById("b").addEventListener("click",function(){
    var d=document.getElementById("data").value.toUpperCase();
   if(d.length==0)
   {
       alert("oh oo!!Empty Search");
   }
   else
   {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var obj = JSON.parse(this.responseText);
              document.getElementById("content").style.display="block";
              document.getElementById("image").style.display="block";
              document.getElementById("type").style.display="block";
              document.getElementById("info").style.display="block";
              document.getElementById("name").style.display="block"; 
              document.getElementById("cock-tail").style.display = "none";   
              document.getElementById("glasses").style.display = "none";
              document.getElementById("mock-tail").style.display = "none";
              document.getElementById("abc").innerHTML = this.responseText;
        
            for(var i=0;i<200;i++)
            {
                var a=obj.drinks[i].strDrink;
                var b=a.toUpperCase();
                if(b.indexOf(d)>-1)
                {
                    document.getElementById("info").innerHTML = obj.drinks[i].strInstructions;
                    document.getElementById("name").innerHTML = obj.drinks[i].strDrink;
                    document.getElementById("image").setAttribute("src", obj.drinks[i].strDrinkThumb); 
                    document.getElementById("type").innerHTML = obj.drinks[i].strAlcoholic;
                    document.getElementById("abc").innerHTML = obj.drinks[i].strGlass;
                }
                else{
                    alert("Invalid Search");
                }
            }
          }
      }

    }
      xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+d, true);
      xhttp.send();

});

document.getElementById("b1").addEventListener("click",function()
{
    document.getElementById("cock-tail").style.display = "none";   
    document.getElementById("glasses").style.display = "none";
    document.getElementById("content").style.display = "none";
 document.getElementById("mock-tail").style.display = "block";
 document.getElementById("mock-tail").innerHTML = "";
 document.getElementById("glasses").innerHTML = "";
 document.getElementById("cock-tail").innerHTML = "";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            var i,j;
            for(i = 4; i < 10; i++)
            {
                var div = document.getElementById("mock-tail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","result");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
          }
      };
      xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic", true);
      xhttp.send();

});



document.getElementById("b2").addEventListener("click",function(c){ 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
            document.getElementById("cock-tail").style.display = "block";   
            document.getElementById("glasses").style.display = "none";
            document.getElementById("mock-tail").style.display = "none";
            document.getElementById("content").style.display = "none";
            document.getElementById("mock-tail").innerHTML = "";
            document.getElementById("glasses").innerHTML = "";
            document.getElementById("cock-tail").innerHTML = "";
            var i,j;
            for(i = 4; i < 10; i++)
            {
                var div = document.getElementById("cock-tail");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","result");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }
          }
      };
      xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink", true);
      xhttp.send();

});

var btn3=document.getElementById("b3");
btn3.addEventListener("click",function(d){
    var d3=document.getElementById("data3");

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var obj = JSON.parse(this.responseText);
            //   for(var i=0;i<10;i++)
            //   {
            //       document.getElementById("abc").innerHTML +=obj.drinks[0].strDrink+"<br>"+"<img src='obj.drinks[0].strDrinkThumb'>"+"<br>";
            //   }
            document.getElementById("cock-tail").style.display = "block";   
            document.getElementById("glasses").style.display = "block";
            document.getElementById("mock-tail").style.display = "none";
            document.getElementById("content").style.display = "none";
            document.getElementById("mock-tail").innerHTML = "";
            document.getElementById("glasses").innerHTML = "";
            document.getElementById("cock-tail").innerHTML = "";
            var i,j;
            for(i = 4; i < 10; i++)
            {
                var div = document.getElementById("glasses");
                var divItems = document.createElement("div");
                divItems.setAttribute("class","items");
                var img = document.createElement("img");
                var divCaption = document.createElement("div");
                divCaption.setAttribute("class","caption");
                var p = document.createElement("p");
                img.setAttribute("src",obj.drinks[i].strDrinkThumb);
                img.setAttribute("class","result");
                p.innerHTML = obj.drinks[i].strDrink;
                divCaption.appendChild(p);
                divItems.appendChild(img);
                divItems.appendChild(divCaption);
                div.appendChild(divItems);
            }


            
          }
      };
      xhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass", true);
      xhttp.send();

});







