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
	var pesoDelIngrediente;
	var precioDelIngrediente;
	var tipoDeIngrediente;
	var respuesta;
	var precioFinalDelIngrediente;
	var acumuladorPreciosDeIngredientes;
	var tipoDeIngredienteMasCaro;
	var precioDeIngredienteMasCaro;
	var contador;
	var promedioDelPrecioEnTotal;

	acumuladorPreciosDeIngredientes=0;
	contador=0;

	do
	{
		do
		{
			pesoDelIngrediente=prompt("Ingrese el peso.");
		}
		while(isNaN(pesoDelIngrediente) || pesoDelIngrediente<10 && pesoDelIngrediente>1000);

		do
		{
			precioDelIngrediente=prompt("Ingrese el precio.");
		}
		while(isNaN(precioDelIngrediente) || precioDelIngrediente<1);

		do
		{
			tipoDeIngrediente=prompt("Ingrese el tipo.");
		}
		while(!isNaN(tipoDeIngrediente) || tipoDeIngrediente!="v" && tipoDeIngrediente!="a" && tipoDeIngrediente!="m");

		if(pesoDelIngrediente>300)
		{
			precioFinalDelIngrediente=precioDelIngrediente-precioDelIngrediente*25/100;
		}else
		{
			if(pesoDelIngrediente>100)
			{
				precioFinalDelIngrediente=precioDelIngrediente-precioDelIngrediente*15/100;
			}else
			{
				precioFinalDelIngrediente=precioDelIngrediente;
			}
		}

		if(contador==0 || precioDeIngredienteMasCaro<precioDelIngrediente)
		{
			precioDeIngredienteMasCaro=precioDelIngrediente;
			tipoIngredienteMasCaro=tipoDeIngrediente;
		}

		acumuladorPreciosDeIngredientes=acumuladorPreciosDeIngredientes+precioFinalDelIngrediente;

		contador++;

		respuesta=prompt("Ingrese 'si', para seguir.");
	}
	while(respuesta=="si");

	promedioDelPrecioEnTotal=acumuladorPreciosDeIngredientes/contador;

	document.write("<br> El importe total a pagar es: "+acumuladorPreciosDeIngredientes);
	document.write("<br> El tipo de ingrediente mas caro es: "+tipoDeIngredienteMasCaro);
	document.write("<br> El promedio del precio en total es: "+promedioDelPrecioEnTotal);
}

	/*var pesoKiloIngrediente;
	var precioKiloIngrediente;
	var tipoIngrediente;
	var respuesta;
	var precioFinalIngrediente;
	var acumuladorPrecioKiloTotalIngrediente;
	var tipoIngredienteMasCaro;
	var precioIngredienteMasCaro;
	var contador;
	var promedioPrecioKiloTotal;

	acumuladorPrecioKiloTotalIngrediente=0;
	contador=0;

	do
	{
		do
		{
			pesoKiloIngrediente=prompt("Ingrese el peso por kilo.");
		}
		while(isNaN(pesoKiloIngrediente) || pesoKiloIngrediente<10 && pesoKiloIngrediente>1000);

		do
		{
			precioKiloIngrediente=prompt("Ingrese el precio por kilo.");
		}
		while(isNaN(precioKiloIngrediente) || precioKiloIngrediente<1);

		do
		{
			tipoIngrediente=prompt("Ingrese el tipo de ingrediente.");
		}
		while(!isNaN(tipoIngrediente) || tipoIngrediente!="v" && tipoIngrediente!="a" && tipoIngrediente!="m");

		if(pesoKiloIngrediente>300)
		{
			precioFinalIngrediente=precioKiloIngrediente-precioKiloIngrediente*25/100;
		}else
		{
			if(pesoKiloIngrediente>100)
			{
				precioFinalIngrediente=precioKiloIngrediente-precioKiloIngrediente*15/100;
			}else
			{
				precioFinalIngrediente=precioKiloIngrediente;
			}
		}

		if(contador==0 || precioIngredienteMasCaro<precioKiloIngrediente)
		{
			precioIngredienteMasCaro=precioKiloIngrediente;
			ingredienteMasCaro=tipoIngrediente;
		}

		acumuladorPrecioKiloTotalIngrediente=acumuladorPrecioKiloTotalIngrediente+precioFinalIngrediente;

		contador++;

		respuesta=prompt("Ingrese 'si', para seguir.");
	}
	while(respuesta="si");

	promedioPrecioKiloTotal=acumuladorPrecioKiloTotalIngrediente/contador;

	document.write("<br> El importe total a pagar es: "+acumuladorPrecioKiloTotalIngrediente);
	document.write("<br> El tipo de alimento mas caro es: "+ingredienteMasCaro);
	document.write("<br> El promedio de precio por kilo en total es: "+promedioPrecioKiloTotal);*/
