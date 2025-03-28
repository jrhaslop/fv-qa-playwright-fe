# Install
> npm i

# Run in local
> npm run test:prod

## Configuración

Antes de correr los tests, creá tu archivo `.env.*`
---- .env.dev .end.prod .env.test ----
• Te todas formas hice un agregado para que puedan correrlo sin cargar los .env

# .env.dev
BASE_URL=https://www.dev.fravega.com/
# .env.test
BASE_URL=https://www.test.fravega.com/
# .env.prod
BASE_URL=https://www.fravega.com/


# Notas

• En los test cases se esta saltando el step de set geoloc porque ya esta por cookie.
• Si quieren que los tests corran headed cambien el valor en playwright.config por false
    • Defconfig.use.headless: false,


Caso de Uso 1

Ingresar a la pagina : https://www.fravega.com/
Como usuario de Frávega queres:
Buscar "Heladera Samsung" en el buscador.
Elegir el segundo resultado, verificar si hay stock y comprar (Verificar que el producto se
encuentre en el carrito)

Caso de Uso 2

Como QA Automation del equipo de Frávega elegí un caso de uso que creas conveniente
para automatizarlo.Tené en cuenta que en este caso de uso vamos a evaluar técnicas de
desarrollo pero además skills de calidad.