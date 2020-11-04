
//Multiplicadores

    //Positivos
        doce = 1.12;
        nueve = 1.09;
        seis = 1.06;
        cuatro = 1.048;
        seis4= 1.064;
        tres = 1.03;

    //Negativos
        ochon = 0.92;
        docen = 0.88;
        seisn = 0.94;
        nueven= 0.91;
        cuatron= 0.952;
        tresn = 0.97;
        dochon = 0.82;
        dseisn = 0.84;






//Inputs
var ataque = document.getElementById("ataqueIn");
var defensa = document.getElementById("defensaIn");
var estabilidad = document.getElementById("estabilidadIn");
var resistencia = document.getElementById("resistenciaIn");
var velmax = document.getElementById("velmaxIn");
var acel = document.getElementById("acelIn");
var respuesta = document.getElementById("respuestaIn");
var agilidad = document.getElementById("agilidadIn");
var precc = document.getElementById("preccIn");
var velc = document.getElementById("velcIn");
var prepc = document.getElementById("prepcIn");
var velpc = document.getElementById("velpcIn");
var prepl = document.getElementById("preplIn");
var velpl = document.getElementById("velplIn");
var prectir = document.getElementById("prectirIn");
var pottir = document.getElementById("pottirIn");
var tectir = document.getElementById("tectirIn");
var precsaqfal = document.getElementById("precsaqfalIn");
var efecto = document.getElementById("efectoIn");
var cabezazo = document.getElementById("cabezazoIn");
var salto = document.getElementById("saltoIn");
var tec = document.getElementById("tecIn");
var agresividad = document.getElementById("agresividadIn");
var mentalidad = document.getElementById("mentalidadIn");



function calculo(){

//Tomo el valor actual de los input
ataqueAct = ataque.value;
defensaAct = defensa.value;
estabilidadAct = estabilidad.value;
resistenciaAct = resistencia.value;
velmaxAct = velmax.value;
acelAct = acel.value;
respuestaAct = respuesta.value;
agilidadAct = agilidad.value;
preccAct = precc.value;
velcAct = velc.value;
prepcAct = prepc.value;
velpcAct = velpc.value;
preplAct = prepl.value;
velplAct = velpl.value;
prectirAct = prectir.value;
pottirAct = pottir.value;
tectirAct = tectir.value;
precsaqfalAct = precsaqfal.value;
efectoAct = efecto.value;
cabezazoAct = cabezazo.value;
saltoAct = salto.value;
tecAct = tec.value;
agresividadAct = agresividad.value;
mentalidadAct = mentalidad.value;

//Condicion ROJO
document.getElementById("atqR").innerHTML = Math.round(ataqueAct*doce);
document.getElementById("defR").innerHTML = Math.round(defensaAct*doce);
document.getElementById("estR").innerHTML = Math.round(estabilidadAct*doce);
document.getElementById("resR").innerHTML = Math.round(resistenciaAct*doce);
document.getElementById("velmR").innerHTML = Math.round(velmaxAct*nueve);
document.getElementById("acelR").innerHTML = Math.round(acelAct*doce);
document.getElementById("respR").innerHTML = Math.round(respuestaAct*doce);
document.getElementById("agiR").innerHTML = Math.round(agilidadAct*doce);
document.getElementById("preccR").innerHTML = Math.round(preccAct*nueve);
document.getElementById("velcR").innerHTML = Math.round(velcAct*nueve);
document.getElementById("prepcR").innerHTML = Math.round(prepcAct*nueve);
document.getElementById("velpcR").innerHTML = Math.round(velpcAct*seis);
document.getElementById("preplR").innerHTML = Math.round(preplAct*nueve);
document.getElementById("velplR").innerHTML = Math.round(velplAct*seis);
document.getElementById("prectirR").innerHTML = Math.round(prectirAct*nueve);
document.getElementById("pottirR").innerHTML = Math.round(pottirAct*doce);
document.getElementById("tecdisR").innerHTML = Math.round(tectirAct*nueve);
document.getElementById("precsfR").innerHTML = Math.round(precsaqfalAct*nueve);
document.getElementById("efeR").innerHTML = Math.round(efectoAct*nueve);
document.getElementById("cabR").innerHTML = Math.round(cabezazoAct*nueve);
document.getElementById("salR").innerHTML = Math.round(saltoAct*doce);
document.getElementById("tecR").innerHTML = Math.round(tecAct*nueve);
document.getElementById("agrR").innerHTML = Math.round(agresividadAct*nueve);
document.getElementById("menR").innerHTML = Math.round(mentalidadAct*doce);

//Condicion AMARILLO
document.getElementById("atqAm").innerHTML = Math.round(ataqueAct*seis4);
document.getElementById("defAm").innerHTML = Math.round(defensaAct*seis4);
document.getElementById("estAm").innerHTML = Math.round(estabilidadAct*seis);
document.getElementById("resAm").innerHTML = Math.round(resistenciaAct*seis);
document.getElementById("velmAm").innerHTML = Math.round(velmaxAct*cuatro);
document.getElementById("acelAm").innerHTML = Math.round(acelAct*seis);
document.getElementById("respAm").innerHTML = Math.round(respuestaAct*seis);
document.getElementById("agiAm").innerHTML = Math.round(agilidadAct*seis);
document.getElementById("preccAm").innerHTML = Math.round(preccAct*cuatro);
document.getElementById("velcAm").innerHTML = Math.round(velcAct*seis);
document.getElementById("prepcAm").innerHTML = Math.round(prepcAct*cuatro);
document.getElementById("velpcAm").innerHTML = Math.round(velpcAct*tres);
document.getElementById("preplAm").innerHTML = Math.round(preplAct*cuatro);
document.getElementById("velplAm").innerHTML = Math.round(velplAct*tres);
document.getElementById("prectirAm").innerHTML = Math.round(prectirAct*cuatro);
document.getElementById("pottirAm").innerHTML = Math.round(pottirAct*seis);
document.getElementById("tecdisAm").innerHTML = Math.round(tectirAct*cuatro);
document.getElementById("precsfAm").innerHTML = Math.round(precsaqfalAct*cuatro);
document.getElementById("efeAm").innerHTML = Math.round(efectoAct*cuatro);
document.getElementById("cabAm").innerHTML = Math.round(cabezazoAct*cuatro);
document.getElementById("salAm").innerHTML = Math.round(saltoAct*seis);
document.getElementById("tecAm").innerHTML = Math.round(tecAct*cuatro);
document.getElementById("agrAm").innerHTML = Math.round(agresividadAct*cuatro);
document.getElementById("menAm").innerHTML = Math.round(mentalidadAct*seis);

//Condicion Azul
document.getElementById("atqAz").innerHTML = Math.round(ataqueAct*ochon);
document.getElementById("defAz").innerHTML = Math.round(defensaAct*ochon);
document.getElementById("estAz").innerHTML = Math.round(estabilidadAct*docen);
document.getElementById("resAz").innerHTML = Math.round(resistenciaAct*seisn);
document.getElementById("velmAz").innerHTML = Math.round(velmaxAct*seisn);
document.getElementById("acelAz").innerHTML = Math.round(acelAct*nueven);
document.getElementById("respAz").innerHTML = Math.round(respuestaAct*nueven);
document.getElementById("agiAz").innerHTML = Math.round(agilidadAct*nueven);
document.getElementById("preccAz").innerHTML = Math.round(preccAct*cuatron);
document.getElementById("velcAz").innerHTML = Math.round(velcAct*seisn);
document.getElementById("prepcAz").innerHTML = Math.round(prepcAct*cuatron);
document.getElementById("velpcAz").innerHTML = Math.round(velpcAct*tresn);
document.getElementById("preplAz").innerHTML = Math.round(preplAct*cuatron);
document.getElementById("velplAz").innerHTML = Math.round(velplAct*tresn);
document.getElementById("prectirAz").innerHTML = Math.round(prectirAct*cuatron);
document.getElementById("pottirAz").innerHTML = Math.round(pottirAct*seisn);
document.getElementById("tecdisAz").innerHTML = Math.round(tectirAct*cuatron);
document.getElementById("precsfAz").innerHTML = Math.round(precsaqfalAct*seisn);
document.getElementById("efeAz").innerHTML = Math.round(efectoAct*seisn);
document.getElementById("cabAz").innerHTML = Math.round(cabezazoAct*cuatron);
 document.getElementById("salAz").innerHTML = Math.round(saltoAct*seisn);
document.getElementById("tecAz").innerHTML = Math.round(tecAct*seisn);
document.getElementById("agrAz").innerHTML = Math.round(agresividadAct*seisn);
document.getElementById("menAz").innerHTML = Math.round(mentalidadAct*nueven);

//Condicion Violeta
document.getElementById("atqV").innerHTML = Math.round(ataqueAct*dseisn);
document.getElementById("defV").innerHTML = Math.round(defensaAct*dseisn);
document.getElementById("estV").innerHTML = Math.round(estabilidadAct*dochon);
document.getElementById("resV").innerHTML = Math.round(resistenciaAct*docen);
document.getElementById("velmV").innerHTML = Math.round(velmaxAct*docen);
document.getElementById("acelV").innerHTML = Math.round(acelAct*dochon);
document.getElementById("respV").innerHTML = Math.round(respuestaAct*dochon);
document.getElementById("agiV").innerHTML = Math.round(agilidadAct*dochon);
document.getElementById("preccV").innerHTML = Math.round(preccAct*nueven);
document.getElementById("velcV").innerHTML = Math.round(velcAct*docen);
document.getElementById("prepcV").innerHTML = Math.round(prepcAct*nueven);
document.getElementById("velpcV").innerHTML = Math.round(velpcAct*seisn);
document.getElementById("preplV").innerHTML = Math.round(preplAct*nueven);
document.getElementById("velplV").innerHTML = Math.round(velplAct*seisn);
document.getElementById("prectirV").innerHTML = Math.round(prectirAct*nueven);
document.getElementById("pottirV").innerHTML = Math.round(pottirAct*docen);
document.getElementById("tecdisV").innerHTML = Math.round(tectirAct*nueven);
document.getElementById("precsfV").innerHTML = Math.round(precsaqfalAct*docen);
document.getElementById("efeV").innerHTML = Math.round(efectoAct*docen);
document.getElementById("cabV").innerHTML = Math.round(cabezazoAct*nueven);
document.getElementById("salV").innerHTML = Math.round(saltoAct*docen);
document.getElementById("tecV").innerHTML = Math.round(tecAct*docen);
document.getElementById("agrV").innerHTML = Math.round(agresividadAct*docen);
document.getElementById("menV").innerHTML = Math.round(mentalidadAct*dochon);


//Hacer las variables para manejar los estilos
//ROJO
var atqR = document.getElementById("atqR");
var defR = document.getElementById("defR");
var estR = document.getElementById("estR");
var resR = document.getElementById("resR");
var velR = document.getElementById("velmR");
var acelR = document.getElementById("acelR");
var respR = document.getElementById("respR");
var agiR = document.getElementById("agiR");
var preccR = document.getElementById("preccR");
var velcR = document.getElementById("velcR");
var prepcR = document.getElementById("prepcR");
var velpcR = document.getElementById("velpcR");
var preplR = document.getElementById("preplR");
var velplR = document.getElementById("velplR");
var prectirR = document.getElementById("prectirR");
var pottirR = document.getElementById("pottirR");
var tecdisR = document.getElementById("tecdisR");
var precsfR = document.getElementById("precsfR");
var efeR = document.getElementById("efeR");
var cabR = document.getElementById("cabR");
var salR = document.getElementById("salR");
var tecR = document.getElementById("tecR");
var agrR = document.getElementById("agrR");
var menR = document.getElementById("menR");

//AMARILLO
var atqAm = document.getElementById("atqAm");
var defAm = document.getElementById("defAm");
var estAm = document.getElementById("estAm");
var resAm = document.getElementById("resAm");
var velmAm = document.getElementById("velmAm");
var acelAm = document.getElementById("acelAm");
var respAm = document.getElementById("respAm");
var agiAm = document.getElementById("agiAm");
var preccAm = document.getElementById("preccAm");
var velcAm = document.getElementById("velcAm");
var prepcAm = document.getElementById("prepcAm");
var velpcAm = document.getElementById("velpcAm");
var preplAm = document.getElementById("preplAm");
var velplAm = document.getElementById("velplAm");
var prectirAm = document.getElementById("prectirAm");
var pottirAm = document.getElementById("pottirAm");
var tecdisAm = document.getElementById("tecdisAm");
var precsfAm = document.getElementById("precsfAm");
var efeAm = document.getElementById("efeAm");
var cabAm = document.getElementById("cabAm");
var salAm = document.getElementById("salAm");
var tecAm = document.getElementById("tecAm");
var agrAm = document.getElementById("agrAm");
var menAm = document.getElementById("menAm");

//AZUL
var atqAz = document.getElementById("atqAz");
var defAz = document.getElementById("defAz");
var estAz = document.getElementById("estAz");
var resAz = document.getElementById("resAz");
var velmAz = document.getElementById("velmAz");
var acelAz = document.getElementById("acelAz");
var respAz = document.getElementById("respAz");
var agiAz = document.getElementById("agiAz");
var preccAz = document.getElementById("preccAz");
var velcAz = document.getElementById("velcAz");
var prepcAz = document.getElementById("prepcAz");
var velpcAz = document.getElementById("velpcAz");
var preplAz = document.getElementById("preplAz");
var velplAz = document.getElementById("velplAz");
var prectirAz = document.getElementById("prectirAz");
var pottirAz = document.getElementById("pottirAz");
var tecdisAz = document.getElementById("tecdisAz");
var precsfAz = document.getElementById("precsfAz");
var efeAz = document.getElementById("efeAz");
var cabAz = document.getElementById("cabAz");
var salAz = document.getElementById("salAz");
var tecAz = document.getElementById("tecAz");
var agrAz = document.getElementById("agrAz");
var menAz = document.getElementById("menAz");

//VIOLETA
var atqV= document.getElementById("atqV");
var defV= document.getElementById("defV");
var estV= document.getElementById("estV");
var resV= document.getElementById("resV");
var velmV= document.getElementById("velmV");
var acelV= document.getElementById("acelV");
var respV= document.getElementById("respV");
var agiV= document.getElementById("agiV");
var preccV= document.getElementById("preccV");
var velcV= document.getElementById("velcV");
var prepcV= document.getElementById("prepcV");
var velpcV= document.getElementById("velpcV");
var preplV= document.getElementById("preplV");
var velplV= document.getElementById("velplV");
var prectirV= document.getElementById("prectirV");
var pottirV= document.getElementById("pottirV");
var tecdisV= document.getElementById("tecdisV");
var precsfV= document.getElementById("precsfV");
var efeV= document.getElementById("efeV");
var cabV= document.getElementById("cabV");
var salV= document.getElementById("salV");
var tecV= document.getElementById("tecV");
var agreV= document.getElementById("agrV");
var menV= document.getElementById("menV");




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Le doy color a los numeros segun el valor

//Condicion ROJO
if(atqV >80){
    console.log(atqV.innerHTML);
    atqV.innerHTML = 99;

}




//Fin de la funcion
}

