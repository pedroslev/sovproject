//DOCUMENTACION PARA POSTGRES SQL DATABASE

//LAS QUERYS SON IGUAL A SQL, PERO SE LE DEBE DAR PERMISO LECTURA Y ESCRITURA A LA TRANSACCION Y REALIZAR COMIT LUEGO DE CADA UNA

//EJEMPLO DE QUERY PARA CREAR LA TABLA DE PRODUCTOS
set transaction read write;
CREATE TABLE Productos (
    ID int,
    Codigo varchar(255),
    Nombre varchar(255),
    Descripcion varchar(255),
    Cantidad int,
    Categoria varchar(255),
    Proveedor varchar(255),
    LinkFoto varchar(255),
    Costo int,
    Margen int,
    Precio int,
    Mostrar int
);
commit;

//EJEMPLO DE QUERY PARA INSERTAR VALORES EN DICHA TABLAs
set transaction read write;
INSERT INTO Productos (ID, Codigo, Nombre, Descripcion, Cantidad, Categoria, Proveedor, LinkFoto, Costo, Margen, Precio, Mostrar)
VALUES ('1', 'ABC', 'Test', 'Esto es un test', '10', 'testing', 'haze', 'NULL', '10', '100', '20', '1');
commit;

hola esto es una prueba de build