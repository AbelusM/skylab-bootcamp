### COMANDOS SHELL / TERMINAL / CMDER

- ls: sirve para listar cada uno de los elementos dentro de una carpeta (list files)
- mkdir: crear una carpeta (make a folder)
- touch: crear un archivo (create a empty file)
- echo: con este comando podemos crear un fichero con contenido (create a file with initial content)
```shell
$ echo "Hello, World!" > helloworld.txt
```
- cd: sirve para meternos en una carpeta (change directory)
```sh
$ cd <path-to-folder>
```
- mv: para cambiar el nombre o para mover un archivo de carpeta (rename or move a file or folder)
```sh
$ mv <from-path> <to-path>
```
- rm: eliminar un archivo o carpeta. rm - r (delete file)
```sh
$ rm <path-to-file>
```
- rmdir: elimina un directorio (delete a folder)
```sh
$ rmdir <path-to-folder>
```
- grep: sirve para buscar contenido en una carpeta de archivos (find files with content, recursevely)

```sh
$ grep -r <path-to-folder> -e <expression>
```
- change folder relatively
```sh
$ cd ../..
```

- change folder absolutely
```sh
$ cd path-to-folder
```
- list hidden files
```sh
$ ls -a 
```

rm -rf --> elimina todo dentro de una carpeta
cat --> para ejecutar