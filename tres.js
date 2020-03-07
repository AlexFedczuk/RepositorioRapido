/*En el ingreso a un viaje en crucero nos solicitan nombre , edad(mayores de 18), sexo("f" o "m") y estado civil("soltero", "casado" o "viudo");
a) El nombre del hombre casado más joven.
b) El sexo y nombre del pasajero/a más viejo.
c) La cantidad de mujeres que hay casadas o viudas.
d) El promedio de edad entre las mujeres.
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{	
	var nombrePasajero;
	var edadPasajero;
	var sexoPasajero;
	var estadoCivilPasajero;
	var respuesta;
	var bandera;
	var nombreHombreCasadoMasJoven;
	var edadMasJoven;

	bandera=0;

	do
	{
		do
		{
			nombrePasajero=prompt("Ingrese su nombre");
		}
		while(!isNaN(nombrePasajero));

		do
		{
			edadPasajero=prompt("Ingrese su edad");
			edadPasajero=parseInt(edadPasajero);
		}
		while(isNaN(edadPasajero) || edadPasajero<18);

		do
		{
			sexoPasajero=prompt("Ingrese su sexo");
		}
		while(!isNaN(sexoPasajero) || sexoPasajero!="m" && sexoPasajero!="f");

		do
		{
			estadoCivilPasajero=prompt("Ingrese su estado civil");
		}
		while(!isNaN(estadoCivilPasajero) || estadoCivilPasajero!="soltero" && estadoCivilPasajero!="casado" && estadoCivilPasajero!="viudo");

		if(sexoPasajero=="m" && bandera==0 && edadMasJoven<edadPasajero)
		{
			nombreHombreCasadoMasJoven=nombrePasajero;

			bandera++;
		}//Revisar, esta mal.
	
		respuesta=prompt("Desea cancelar la reserva, ingrese 'si'.");
	}
	while(respuesta=="si");
}
