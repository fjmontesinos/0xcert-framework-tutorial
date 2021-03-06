# 0xcert Framework Tutorial en Ganache

Este repositorio contiene las pruebas realizadas para probar el [Tutorial de 0xcert Framework](https://0xcert.org/news/0xcert-framework-tutorial-1-run-and-prepare-geth-node-for-backend-integration/) sobre Ganache utilizando HttpProvider con la versión 2.0 del framework. 
Se ha usado de base el código disponible en el siguiente repositorio de Github: [ethereum example](https://github.com/MoMannn/ethereum-example)

Este tutorial crea una API Rest con Express que una aplicación web consume mediante peticiones ajax con jQuery.

Para lanzar el proyecto y probarlo es necesario tener instalado en el equipo:

- python (para correr la aplicación)
- node
- ganache-cli para simular una blockchain en local.

Una vez tenemos estos componentes instalados en el equipo podemos probar el desarrollo siguiendo los siguientes pasos:

- [Clonar y build del proyecto](#clone-and-build)
- [Iniciar Ganache](#init-ganache)
- [Iniciar Express(node) API Rest](#init-express)
- [Iniciar App Web](#init-webapp)

Una vez realizados estos sencillos pasos, podremos acceder a la aplicación desde cualquier navegador web con la url `http://localhost:8000` y ejecutar las diferentes opciones disponibles siguiendo los pasos de ejecución regocigos en el tutorial de 0xcert a la hora de establecer el schemaId del Token No Fungible, la dirección del smart contract asociado al asset ledger desplegado o informar el imprint del token que vamos a crear:

> Se considera a modo de prueba tanto para el schemaId como para el imprint el valor: 0000000000000000000000000000000000000000000000000000000000000000

* Desplegar un smart contract (ERC721) asociado al asset ledger que queremos
* Crear un asset nuevo en el sc creado anteriormente
* Transferir a otra cuenta el asset creado (deberemos asegurarnos que el asset lo creamos asociado a la cuenta establecida en el provider para que se pueda realizar la transferencia, en caso contrario deberíamos cambiar el código e implementar un provider con la cuenta propietaria del asset)

**Siguientes pasos:** 

1. Utilizar el recurso de [Certificación de 0xcert](https://docs.0xcert.org/framework/v2/guides/certification.html) para crear un Token ERC721 que represente un certificado que registre en Ganache un certificado con su schemaId e imprint correctos de forma que se puedan enviar a un tercero una evidencia del certificado y que este pueda verificarlos. [Ejemplo de Certificación](https://codesandbox.io/s/github/0xcert/example-certification?module=%2FREADME.md)
2. Tras probar que lo anterior funciona sobre Ganache, realizar pruebas sobre una de las testnets disponible de Ethereum como pueda ser `Rinkeby`

## 1. <a name="clone-and-build"></a>Clonar el proyecto y hacer build

Para lanzar la prueba del proyecto no tenemos más que clonar el proyecto y hacer un build de los paquetes npm, para ello no tendremos más que ejecutar el siguiente comando:

Clonar el proyecto:

```console
$ git clone https://github.com/fjmontesinos/0xcert-framework-tutorial.git
```

Build de los paquetes npm

```console
$ cd 0xcert-framework-tutorial
$ npm build
```

## 2. <a name="init-ganache"></a>Iniciar Ganache

Una vez tenemos nuestro código disponible y sobre el que ya hemos realizado el build debemos lanzar ganache-cli, para ellos usaremos un `mnemonic` concreto que nos garantizará que las direcciones generadas serán las necesarias según la configuración de la aplicación. Se deberá lanzar en el puerto `8545`. En caso contrario deberemos modificar el fichero `index.ts` y establecer en el provider el puerto correspondiente.

Si no lanzamos ganache-cli con el mnemonic indicado deberemos cambiar la cuenta asociada al provider en `index.ts` por una cuenta disponible.

Lanzaremos el servicio con el siguiente comando desde una ventana de terminal:

```console
$ ganache-cli -m="belt allow snack gain mom rug wave inflict risk verb health notable" -p=8545
```

### 2.1. Despliegue con una testnet como Rinkeby 

Si quisieramos lanzar con un nodo geth contra Rinkeby por ejemplo, deberíamos [instalar geth](https://gist.github.com/cryptogoth/10a98e8078cfd69f7ca892ddbdcf26bc) y una vez instalado ejecutar:

```console
geth --rinkeby --syncmode "light" --rpc --rpcaddr "0.0.0.0" --rpcport "8545" --rpccorsdomain "*" --rpcapi="eth,net,web3,personal"
```

Cuando hayamos iniciado el nodo, deberemos importar nuestra cuenta si la tenemos y desbloquearla, conectándonos primero a la consola:

```console
$ geth attach ipc:$HOME/.ethereum/rinkeby/geth.ipc

> personal.importRawKey("<YOUR GENERATED PRIVATE KEY WITHOUT THE LEADING 0x>","<PASSWORD OF YOUR CHOICE>")

```
Por último deberemos desbloquear nuestra cuenta:

```console
> personal.unlockAccount("<YOUR ADDRESS>", "<PASSWORD USED EARLIER>", 0)
```

Podemos obtener un error de permisos, en ese caso deberemos iniciar el nodo con el siguiente parámetro `--allow-insecure-unlock`

En la configuración del provider del api REST deberemos confirmar esta cuenta:

```js
const provider = new HttpProvider({
    url: 'http://localhost:8545',
    requiredConfirmations: 1,
    accountId: '<YOUR ADDRESS>',
});
```

## 3. <a name="init-express"></a>Iniciar Express(node) API Rest

Una vez hemos iniciado ganache-cli y tras haber ejecutado npm build sobre el raiz del proyecto podemos lanzar el API `express` para ello no necesitamos más que ejecutar en una terminal el siguiente comando que nos iniciará el api en el puerto 3000

```console
$ npm run start
```

Si accedemos a http://localhost:3000 debemos ver el mensaje Hello World!

## 4. <a name="init-webapp"></a>Iniciar App Web

Para lanzar la aplicación he usado SimpleHttpServer de la versión 2 de python, pero podéis utilizar cualquier otra utilidad similar. Para ello basta con ejectuar desde una nueva consola en el raíz del proyecto:

```console
$ python -m SimpleHTTPServer 8000
```

