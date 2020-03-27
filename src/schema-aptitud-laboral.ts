export const schemaAptitudLaboral = {
    $schema: 'http://json-schema.org/draft-07/schema',
    description: 'Un esquema de activos digitales que representan una aptitud laboral.',
    properties: {
      id: {
        description: 'Id del examen de salud realizado al trabajador',
        type: 'integer',
      },
      fecha: {
        description: 'Fecha de realización del examen de salud en milisegundos UTC.',
        type: 'integer',
      },
      cliente: {
        description: 'Razón Social del cliente',
        type: 'string',
      },
      centro: {
        description: 'Dirección del centro de trabajo del trabajador al realizar el RM',
        type: 'string',
      },
      trabajador: {
        description: 'Trabajador al que se le ha realizado el examen de salud',
        properties: {
            nombre: {
                description: 'A number representing the hash index in a binary tree.',
                type: 'string',
              },
            apellidos: {
                description: 'A string representing the hash value in a binary tree.',
                type: 'string',
            },
            nifnie: {
                description: 'A string representing the hash value in a binary tree.',
                type: 'string',
            },
            puestos: {
                description: 'Una lista de los puestos del trabajador al realizar el examen de salud.',
                items: {
                    type: 'string',
                },
                type: 'array',
            },
        },
        type: 'object',
      },
      protocolos: {
        description: 'Una lista con los protocolos aplicados',
        items: {
            type: 'string',
        },
        type: 'array',
      },
      aptitud: {
        description: 'Aptitud laboral resultante del examen de salud',
        type: 'string',
      },
      medico: {
        description: 'Número de colegiado del médico que realiza el examen de salud',
        type: 'string',
      },
      observaciones: {
        description: 'Observaciones sobre el examen de salud para la aptitud laboral',
        type: 'string',
      },
    },
    title: 'Aptitud Laboral Asset',
    type: 'object',
  }