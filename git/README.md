# git

nos genera copias que nos permite proteger parte del código. existen varias ramas:
1. Master (la principal)
2. Develop (que es donde mergeamos el codigo)
3. Feature (dónde desarrollamos el codigo)

git permite que todos los cambios sean guardados. 

```sh
$ git init --> para iniciar el uso de git
$ git commit -m "<nombre resumido de la versión>" --> consolidación del archivo, cerramos cajón con la copia del archivo.
$ git status  --> nos muestra si hay cambios en el archivo
$ git branch --> para ver en que rama nos encontramos, si añadimos: $ git branch -d feature -> podemos eliminar la rama.
$ git log --> historia de commits
$ git diff --> nos permite ver la diferencias entre las veriones
$ git add <nombre del archivo> (--a = all) --> añadir un archivo a GIT 
$ git checkout -b <master>  --> con el -b lo que hace es crear la rama e ir a ella. $ git checkout -->para cambiar la rama con la que estamos trabajando: Master, develop, feature. con el $ git checkout <nombre del archivo> --> regresa la versión del archivo
$ git merge <ubicación y nombre del archivo> --> se hace desde la que tiene la version antigua o más importante
$ git reset --> te quita del stage lo que tienes ahí, lo que pones en el cajón. $ git reset --hard HEAD --> nos devuelve al último commit
$ git fetch --> nos trae la información de una copia que tenemos un fork
``` 

[git cheat sheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

- .gitignore hay veces que tenemos archivos que no queremos subir al repositorio remoto, por lo que hacemos es crear otro archivo llamado ".gitignore", en este archivo añadimos el nombre del archivo que no queremos que aparezca, este archivo ignorará los archivos incluidos.
