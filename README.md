# Reloj (componente React)

`Reloj` es un componente React que toma como propiedad la hora actual y la muestra en formato analógico.

Proyecto realizado con `Create React App`.

## Instalación

En el directorio del proyecto ejecutar:

```console
npm install
npm start
```

## Personalización

### Cambiar tamaño
Es posible cambiar el tamaño del reloj definiendo sólo el diámetro.
El diámetro se encuentra en la clase `:root` del archivo `components/Reloj/index.css`.

Valor por defecto:

```css
    --diametro: 400px;
```    
### Cambiar hora
Se puede establecer una hora manualmente pasándole un string como propiedad `"hora"` al componente `Reloj` en `components/App/index.js`. La hora debe estar en formato `"hh:mm"` o `"h:mm"`. Se pueden agregar segundos para mas exactitud `"hh:mm:ss"`, pero son opcionales. Funciona con modo 24 hs o 12 hs.

Ejemplo:

```javascript
<Reloj hora = "5:26:00" />
```
### Demo
Probalo en: [https://reloj.dami.com.ar](https://reloj.dami.com.ar).