<H4>Prerequisitos</H4>

*Descargar Nodes (https://nodejs.org/es))

*Correr comando "npm install -g @angular/cli" (instalar angular cli)

*Correr comando "npm install -g @ionic/cli"  (instalar ionic)

*IDE de desarrollo visual studio code

<H4>Proceso</H4>

1.Ejecutar comando ionic start marvelApp blank --type=angular
cd marvelApp

2.Ejecutar 
* npm install (Instalar paquetes requeridos)


2.Configurar variables de entorno
Ruta: "src/environments/environment.ts"
<pre>
export const environment = {
  production: false,
  marvel: {
    publicKey: 'YOUR_PUBLIC_KEY',
    privateKey: 'YOUR_PRIVATE_KEY', // if needed for generating hash
    baseUrl: 'https://gateway.marvel.com/v1/public'
  }
};
</pre>
<h4>Estructura del proyecto</h4>
<pre>
src/
 └── app/
     ├── pages/
     │    ├── heroes-list/      // List screen
     │    └── hero-detail/      // Detail screen
     ├── services/
     │    └── marvel.service.ts
     └── app-routing.module.ts
</pre>
 Recursos idiomas:
 <pre>
Ruta:  "src/assets/i18n/en.json"
{
  "MARVEL_HEROES": "Marvel Heroes",
  "COMICS": "Comics",
  "SERIES": "Series",
  "STORIES": "Stories"
}
<pre>
Ruta: "src/assets/i18n/es.json"
{
  "MARVEL_HEROES": "Héroes de Marvel",
  "COMICS": "Comics",
  "SERIES": "Series",
  "STORIES": "Historias"
}
</pre>
<h4>Pruebas</h4>

*Ejecutar comando "ionic serve"


 
