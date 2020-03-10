/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,ok
el precio (validar entre 100 y 300),ok
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),ok
la Marca y el fabricante.ok
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante.ok
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/



function mostrar()
{
	var tipoDeProductoDePrevencionDeContagio;
	var precioDeProductoDePrevencionDeContagio;
	var cantidadDeProductoDePrevencionDeContagio;
	var marcaDeProductoDePrevencionDeContagio;
	var fabricanteDeProductoDePrevencionDeContagio;
	var contador;
	var barbijoMasCaro;
	var fabricanteDelBarbijoMasCaro;
	var precioDelBarbijoMasCaro;
	var cantidadDeUnidadesDelBarbijoMasCaro;
	var productoConMasUnidades;
	var fabricanteDelProductoConMasUnidades;
	var acumuladorUnidadesEnTotalDeJabones;


	contador=0;
	acumuladorUnidadesEnTotalDeJabones=0;

	do
	{
		do
		{
			tipoDeProductoDePrevencionDeContagio=prompt("Ingrese el tipo de producto");
		}
		while(!isNaN(tipoDeProductoDePrevencionDeContagio) || tipoDeProductoDePrevencionDeContagio!="barbijo" && tipoDeProductoDePrevencionDeContagio!="jabon" && tipoDeProductoDePrevencionDeContagio!="alcohol");

		do
		{
			precioDeProductoDePrevencionDeContagio=prompt("Ingrese el precio");
			precioDeProductoDePrevencionDeContagio=parseInt(precioDeProductoDePrevencionDeContagio);
		}
		while(isNaN(precioDeProductoDePrevencionDeContagio) || precioDeProductoDePrevencionDeContagio<100 && precioDeProductoDePrevencionDeContagio>300);

		do
		{
			cantidadDeProductoDePrevencionDeContagio=prompt("Ingrese la cantidad");
			cantidadDeProductoDePrevencionDeContagio=parseInt(cantidadDeProductoDePrevencionDeContagio);
		}
		while(isNaN(cantidadDeProductoDePrevencionDeContagio) || cantidadDeProductoDePrevencionDeContagio<1 && cantidadDeProductoDePrevencionDeContagio>1000);

		do
		{
			marcaDeProductoDePrevencionDeContagio=prompt("Ingrese la marca del producto");
		}
		while(!isNaN(marcaDeProductoDePrevencionDeContagio));

		do
		{
			fabricanteDeProductoDePrevencionDeContagio=prompt("Ingrese el fabricante del producto");
		}
		while(!isNaN(fabricanteDeProductoDePrevencionDeContagio));

		if(contador==0 && tipoDeProductoDePrevencionDeContagio=="barbijoMasCaro" || tipoDeProductoDePrevencionDeContagio=="barbijoMasCaro" && precioDelBarbijoMasCaro<precioDeProductoDePrevencionDeContagio)
		{
			barbijoMasCaro=tipoDeProductoDePrevencionDeContagio;
			fabricanteDelBarbijoMasCaro=fabricanteDeProductoDePrevencionDeContagio;
			precioDelBarbijoMasCaro=precioDeProductoDePrevencionDeContagio;
			cantidadDeUnidadesDelBarbijoMasCaro=cantidadDeProductoDePrevencionDeContagio;
		}

		if(contador==0 || productoConMasUnidades<cantidadDeProductoDePrevencionDeContagio)
		{
			productoConMasUnidades=cantidadDeProductoDePrevencionDeContagio;
			fabricanteDelProductoConMasUnidades=fabricanteDeProductoDePrevencionDeContagio;
		}

		if(tipoDeProductoDePrevencionDeContagio=="jabon")
		{
			acumuladorUnidadesEnTotalDeJabones=acumuladorUnidadesEnTotalDeJabones+cantidadDeProductoDePrevencionDeContagio;
		}


		contador++;
	}
	while(contador<5);

	document.write("<br> Del más caro de los Barbijos, la cantidad de unidades y el fabricante es: "+cantidadDeUnidadesDelBarbijoMasCaro+" y "+fabricanteDelBarbijoMasCaro);
	document.write("<br> Del ítem con más unidades, el fabricante es: "+fabricanteDelProductoConMasUnidades);
	document.write("<br> Cuántas unidades de jabones hay en total es: "+acumuladorUnidadesEnTotalDeJabones);
}


	/*var productoPrevencionContagio;
	var productoPrevencionContagioPrecio;
	var productoPrevencionContagioUnidades;
	var productoPrevencionContagioMarca;
	var productoPrevencionContagioFabricante;
	var contadorProducto;
	var precioBarbijoMasCaro;
	var precioBarbijoMasCaroFabricante;
	var precioBarbijoMasCaroUnidades;
	var bandera;
	var ;


	contadorProducto=0;
	bandera=0;

	do
	{
		do
		{
			productoPrevencionContagio=prompt("Ingrese el tipo de producto.");
		}
		while(!isNaN(productoPrevencionContagio) || productoPrevencionContagio!="barbijo" && productoPrevencionContagio!="jabon" && productoPrevencionContagio!="alcohol");

		do
		{
			productoPrevencionContagioPrecio=prompt("Ingrese el precio del producto.");
			productoPrevencionContagioPrecio=parseInt(productoPrevencionContagioPrecio);

		}
		while(isNaN(productoPrevencionContagioPrecio) || productoPrevencionContagioPrecio<100 && productoPrevencionContagioPrecio>300);

		do
		{
			productoPrevencionContagioUnidades=prompt("Ingrese las unidades del producto.");
			productoPrevencionContagioUnidades=parseInt(productoPrevencionContagioUnidades);
		}
		while(isNaN(productoPrevencionContagioUnidades) || productoPrevencionContagioUnidades<1 && productoPrevencionContagioUnidades>1000);

		do
		{
			productoPrevencionContagioMarca=prompt("Ingrese la marca del producto.");
		}
		while(!isNaN(productoPrevencionContagioMarca));

		do
		{
			productoPrevencionContagioFabricante=prompt("Ingrese el nombre del fabricante del producto.");
		}
		while(!isNaN(productoPrevencionContagioFabricante));

		if(productoPrevencionContagio=="barbijo" && bandera==0 || precioBarbijoMasCaro<productoPrevencionContagioPrecio)
		{
			precioBarbijoMasCaro=productoPrevencionContagioPrecio;
			precioBarbijoMasCaroFabricante=productoPrevencionContagioFabricante;
			productoPrevencionContagioUnidades=productoPrevencionContagioUnidades;

			bandera++;
		}

		//

		contadorProducto++;
	}
	while(contadorProducto<5);

	

	document.write("<br> ")*/
