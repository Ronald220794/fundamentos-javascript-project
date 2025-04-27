# 🧮 Título del proyecto: "Simulador de Encuestas con Resultados Dinámicos"
## 📌 Contexto / Introducción
En el mundo real, las empresas, ONGs y medios digitales usan encuestas para recopilar opiniones y tomar decisiones. Muchas veces los datos se almacenan en archivos .txt o .json, y deben ser procesados para obtener estadísticas útiles. Este proyecto consiste en construir un sistema capaz de leer, validar y analizar resultados de encuestas, generando un resumen de respuestas por pregunta, sin usar frameworks ni navegador.

Este ejercicio afianza conocimientos sobre estructuras dinámicas, manejo de errores, modularización y lógica funcional en un contexto práctico.

## ✅ Requerimientos funcionales
1. El script debe leer un archivo .json que contenga las respuestas de una encuesta.

    Ejemplo:

```json
[
    { 
        "nombre": "Ana",
        "edad": 25,
        "respuestas": { "p1": "Sí", "p2": "No", "p3": "Tal vez" }
    },
    {
        "nombre": "Luis",
        "edad": 30,
        "respuestas": { "p1": "No", "p2": "No", "p3": "" }
    },
    ...
]
```

2. Validar que:

    - Cada respuesta esté presente (no vacía).

    - La edad sea un número entero positivo.

    - El nombre esté compuesto solo por letras y espacios.

3. Contabilizar cuántas veces se eligió cada respuesta para cada pregunta.

4. Mostrar por consola:

    - El total de respuestas válidas y no válidas.

    - Para cada pregunta: el porcentaje de cada respuesta.

    - El promedio de edad de los participantes válidos.

5. Modularizar la lógica: validaciones, lectura de archivo, cálculos estadísticos, formateo de salida.

6. Incluir manejo de errores como archivo no válido, formato incorrecto o datos mal tipados.

7. Usar funciones puras y tipado (JSDoc, @typedef o ts si aplica).

8. Usar destructuración, objetos como mapas ({ [respuesta]: count }), Sets y métodos funcionales como reduce, filter y map.

## ⭐ Desafío opcional (Nivel 2%)
- Agrega soporte para múltiples encuestas (varios bloques de preguntas).

- Permite filtrar resultados por rango de edad (por ejemplo: solo mayores de 30).

- Genera un archivo resultados.json con el resumen estadístico final.

## 🧠 Buenas prácticas y sugerencias técnicas
- Usa fs.promises.readFile para leer el archivo.

- Encapsula validaciones como esEdadValida(edad: number) o validarRespuesta(respuesta: string): boolean.

- Usa estructuras anidadas como { p1: { 'Sí': 3, 'No': 2 } } para el conteo.

- No mutar los datos originales, aplica inmutabilidad y funciones puras.

- Usa Object.entries, Set, y Array.reduce para análisis más sofisticados.

### 📥 Ejemplo de archivo de entrada
```json
[
    {
        "nombre": "Carlos",
        "edad": 29,
        "respuestas": { "p1": "Sí", "p2": "No", "p3": "Tal vez" }
    },
    {
        "nombre": "Lucía",
        "edad": "veinticinco",
        "respuestas": { "p1": "Sí", "p2": "", "p3": "No sé" }
    },
    {
        "nombre": "Mario",
        "edad": 40,
        "respuestas": { "p1": "No", "p2": "Sí", "p3": "No" }
    }
]

```

### 📤 Ejemplo de salida esperada

```
Total de participantes: 3
Participantes válidos: 2
Participantes inválidos: 1

Promedio de edad: 34.5

Resultados por pregunta:
P1:
  Sí: 50%
  No: 50%

P2:
  No: 50%
  Sí: 50%

P3:
  Tal vez: 50%
  No: 50%

```