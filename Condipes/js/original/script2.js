//Referencia al cuerpo
var body = document.getElementsByTagName("body");

//Crear tabla y tbody
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

//creacion de celdas

for (var index = 1; index < 4; index++) {
    
    var row = document.createElement("tr");

    for (var i = 0; i < 2; i++) {
        // Crear elemento td y nodo de texto
        //Make text node the contents of <td> element
        // put <td> at end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell is row " + j + ", column " + i);
  
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      //row added to end of table body
      tblBody.appendChild(row);
    }
    
     // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}

