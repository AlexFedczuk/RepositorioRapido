/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los Barbijos, la cantidad de unidades y el fabricante
b) Del ítem con más unidades, el fabricante
c) Cuántas unidades de jabones hay en total*/



function mostrar()
{
	var productoPrevencionContagio;
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

	

	document.write("<br> ")
}


	/*if(contadorBarbijo==1)
	{
		barbijoMasCaro=productoPrevencionContagioPrecio;
	}else
	{
		if(contadorBarbijo>1 && barbijoMasCaro<productoPrevencionContagioPrecio)
		{
			barbijoMasCaro=productoPrevencionContagioPrecio;
		}
	}*/
