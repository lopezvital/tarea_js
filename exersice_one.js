let dia=27
let mes="octubre"
let anio=2001



let fecha=null
fecha=new Date (anio+mes+dia);
let dias=null

switch(fecha.getDay()){

   case 0:
     dias="Domingo"
     break
   case 1:
     dias="Lunes"
     break
   case 2:
     dias="Martes"    
     break
   case 3:
     dias="Miercoles"
     break
   case 4:
     dias="Jueves"  
     break
   case 5:
     dias="Viernes"
     break
   case 6:
     dias="Sabado"    
     break
}     
     console.log("Entonces naci en este dia: "+dias)