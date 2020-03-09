/*En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{	
	var nombreDelPasajero;
	var edadDelPasajero;
	var sexoDelPasajero;
	var estadoCivilDelPasajero;
	var respuesta;
	var nombreDelHombreCasadoMasJoven;
	var edadDelPasajeroMasJoven;
	var contador;
	var sexoDelPasajeroMasViejo;
	var nombreDelPasajeroMasViejo;
	var edadDelPasajeroMasViejo;
	var contadorDeMujeresCasadas;
	var promedioDeEdadEntreMujeres;
	var contadorDeMujeres;
	var acumuladorDeEdadDeMujeres;
	var promedioDeEdadEntreHombresSolteros;
	var acumuladorDeEdadEntreHombresSolteros;
	var contadorDeEdadEntreHombresSolteros;

	contador=0;
	contadorDeMujeresCasadas=0;
	contadorDeMujeres=0;
	acumuladorDeEdadDeMujeres=0;
	contadorDeEdadEntreHombresSolteros=0;
	acumuladorDeEdadEntreHombresSolteros=0;

	do
	{
		do
		{
			nombreDelPasajero=prompt("Ingrese el nombre del pasajero.");
		}
		while(!isNaN(nombreDelPasajero));
		do
		{
			edadDelPasajero=prompt("Ingrese la edad del pasajero.");
			edadDelPasajero=parseInt(edadDelPasajero);
		}
		while(isNaN(edadDelPasajero) || edadDelPasajero<18);

		do
		{
			sexoDelPasajero=prompt("Ingrese el sexo del pasajero.");
		}
		while(!isNaN(sexoDelPasajero) || sexoDelPasajero!="f" && sexoDelPasajero!="m");

		do
		{
			estadoCivilDelPasajero=prompt("Ingrese el estado civil del pasajero.");
		}
		while(!isNaN(estadoCivilDelPasajero) || estadoCivilDelPasajero!="soltero" && estadoCivilDelPasajero!="casado" && estadoCivilDelPasajero!="viudo");

		if(contador==0 && estadoCivilDelPasajero=="casado" && sexoDelPasajero=="m" || edadDelPasajero<edadDelPasajeroMasJoven && estadoCivilDelPasajero=="casado" && sexoDelPasajero=="m")
		{
			nombreDelHombreCasadoMasJoven=nombreDelPasajero;
			edadDelPasajeroMasJoven=edadDelPasajero;
		}

		if(contador==0 || edadDelPasajeroMasViejo<edadDelPasajero)
		{
			edadDelPasajeroMasViejo=edadDelPasajero;
			sexoDelPasajeroMasViejo=sexoDelPasajero;
			nombreDelPasajeroMasViejo=nombreDelPasajero;
		}

		if(estadoCivilDelPasajero=="casado" && sexoDelPasajero=="f")
		{
			contadorDeMujeresCasadas++;
		}

		if(sexoDelPasajero=="f")
		{
			contadorDeMujeres++;
			acumuladorDeEdadDeMujeres=acumuladorDeEdadDeMujeres+edadDelPasajero;
		}

		if(sexoDelPasajero=="m" && estadoCivilDelPasajero=="soltero")
		{
			contadorDeEdadEntreHombresSolteros++;
			acumuladorDeEdadEntreHombresSolteros=acumuladorDeEdadEntreHombresSolteros+edadDelPasajero;
		}

		contador++;

		respuesta=prompt("Ingrese 'si', para continuar reservando.");
	}
	while(respuesta=="si");

	promedioDeEdadEntreMujeres=acumuladorDeEdadDeMujeres/contadorDeMujeres;

	promedioDeEdadEntreHombresSolteros=acumuladorDeEdadEntreHombresSolteros/contadorDeEdadEntreHombresSolteros;

	document.write("<br> El nombre del hombre casado más joven es: "+nombreDelHombreCasadoMasJoven);
	document.write("<br> El sexo y nombre del pasajero/a más viejo es: "+sexoDelPasajeroMasViejo+" y "+edadDelPasajeroMasViejo);
	document.write("<br> La cantidad de mujeres que hay casadas es: "+contadorDeMujeresCasadas);
	document.write("<br> El promedio de edad entre las mujeres es: "+promedioDeEdadEntreMujeres);
	document.write("<br> El promedio de edad entre los hombres solteros es: "+promedioDeEdadEntreHombresSolteros);
}

	/*var nombreDelPasajero;
	var edadDelPasajero;
	var sexoDelPasajero;
	var estadoCivilDelPasajero;
	var respuesta;
	var nombreDelHombreCasadoMasJoven;
	var edadDelPasajeroMasJoven;
	var contador;
	var sexoDelPasajeroMasViejo;
	var nombreDelPasajeroMasViejo;
	var edadDelPasajeroMasViejo;
	var contadorDeMujeresCasadas;
	var promedioDeEdadEntreMujeres;
	var contadorDeMujeres;
	var acumuladorDeEdadDeMujeres;
	var promedioDeEdadEntreHombresSolteros;
	var acumuladorDeEdadEntreHombresSolteros;
	var contadorDeEdadEntreHombresSolteros


	contador=0;
	contadorDeMujeresCasadas=0;
	contadorDeMujeres=0;
	acumuladorDeEdadDeMujeres=0;
	contadorDeEdadEntreHombresSolteros=0;
	acumuladorDeEdadEntreHombresSolteros=0;

	do
	{
		do
		{
			nombreDelPasajero=prompt("Ingrese el nombre del pasajero.");
		}
		while(!isNaN(nombreDelPasajero));

		do
		{
			edadDelPasajero=prompt("Ingrese la edad del pasajero.");
			edadDelPasajero=parseInt(edadDelPasajero);
		}
		while(isNaN(edadDelPasajero) || edadDelPasajero<18);

		do
		{
			sexoDelPasajero=prompt("Ingrese el sexo del pasajero.");
		}
		while(!isNaN(sexoDelPasajero) || sexoDelPasajero!="f" && sexoDelPasajero!="m");

		do
		{
			estadoCivilDelPasajero=prompt("Ingrese el estado civil del pasajero.");
		}
		while(!isNaN(estadoCivilDelPasajero) || estadoCivilDelPasajero!="soltero" && estadoCivilDelPasajero!="casado" && estadoCivilDelPasajero!="viudo");

		if(contador==0 && estadoCivilDelPasajero=="casado" && sexoDelPasajero=="m" || edadDelPasajeroMasJoven>edadDelPasajero && estadoCivilDelPasajero=="casado" && sexoDelPasajero=="m");
		{
			nombreDelHombreCasadoMasJoven=nombreDelPasajero;
			edadDelPasajeroMasJoven=edadDelPasajero;
		}

		if(contador==0 || edadDelPasajeroMasViejo<edadDelPasajero);
		{
			nombreDelPasajeroMasViejo=nombreDelPasajero;
			edadDelPasajeroMasViejo=edadDelPasajero;
			sexoDelPasajeroMasViejo=sexoDelPasajero;
		}

		if(sexoDelPasajero=="f" && estadoCivilDelPasajero=="casado");
		{
			contadorDeMujeresCasadas++;	
		}

		if(sexoDelPasajero=="f")
		{
			contadorDeMujeres++;
			acumuladorDeEdadDeMujeres=acumuladorDeEdadDeMujeres+edadDelPasajero;
		}

		if(sexoDelPasajero=="m" && estadoCivilDelPasajero=="soltero")
		{
			contadorDeEdadEntreHombresSolteros++;
			acumuladorDeEdadEntreHombresSolteros=acumuladorDeEdadEntreHombresSolteros+edadDelPasajero;
		}

		contador++;

		respuesta=prompt("Ingrese si, para seguir reservando.");
	}
	while(respuesta=="si");

	promedioDeEdadEntreMujeres=acumuladorDeEdadDeMujeres/contadorDeMujeres;
	promedioDeEdadEntreHombresSolteros=acumuladorDeEdadEntreHombresSolteros/contadorDeEdadEntreHombresSolteros;

    document.write("<br> El nombre del hombre casado más joven es: "+nombreDelHombreCasadoMasJoven);
    document.write("<br> El sexo y nombre del pasajero/a más viejo es: "+sexoDelPasajeroMasViejo+" y "+nombreDelPasajeroMasViejo);
    document.write("<br> La cantidad de mujeres que hay casadas es: "+contadorDeMujeresCasadas);
    document.write("<br> El promedio de edad entre las mujeres es: "+promedioDeEdadEntreMujeres);
    document.write("<br> El promedio de edad entre los hombres solteros es: "+promedioDeEdadEntreHombresSolteros);*/

