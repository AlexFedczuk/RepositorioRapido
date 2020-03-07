/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar()
{
	var pesoIngrediente;
	var	precioIngrediente;
	var tipoValidadIngrediente;
	var respuesta;
	var precioFinalIngrediente;
	var tipoIngredienteMasCaro;
	var precioIngredienteMasCaro;
	var contador;
	
	contador=0;

	do
	{
		do
		{
			pesoIngrediente=prompt("Ingrese el peso");
			pesoIngrediente=parseInt(pesoIngrediente);
		}
		while(isNaN(pesoIngrediente) || pesoIngrediente<10 || pesoIngrediente>1000);

		do
		{
			precioIngrediente=prompt("Ingrese el precio");
			precioIngrediente=parseInt(precioIngrediente);
		}
		while(isNaN(precioIngrediente) || precioIngrediente<0);

		do
		{
			tipoValidadIngrediente=prompt("Ingrese el tipo de ingrediente");
		}
		while(!isNaN(tipoValidadIngrediente) || tipoValidadIngrediente!="v" && tipoValidadIngrediente!="a" && tipoValidadIngrediente!="m");

		if(pesoIngrediente>300)
		{
			precioFinalIngrediente=precioIngrediente-precioIngrediente*25/100;
		}else
		{
			if(pesoIngrediente>100)
			{
				precioFinalIngrediente=precioIngrediente-precioIngrediente*15/100;
			}else
			{
				precioFinalIngrediente=precioIngrediente;
			}
		}

		if(contador==0 || precioIngredienteMasCaro<precioIngrediente)
		{
			tipoIngredienteMasCaro=tipoValidadIngrediente;
			precioIngredienteMasCaro=precioIngrediente;
		}

		contador++;

		respuesta=prompt("Ingrese 'si',para continuar");
	}
	while(respuesta=="si");

	document.write("<br> El importe total a pagar es: "+precioFinalIngrediente);

}
