#!/bin/bash

# Navegar a la carpeta de construcción
cd build

# Inicializar el repositorio de Git y agregar todo
git init
git add .
git commit -m "Deploy to gh-pages"

# Configurar el remote
git remote add origin https://github.com/ulisesumasnky/drum_machine.git

# Empujar a la rama gh-pages
git push --force origin HEAD:gh-pages
