export const schemaAptitudLaboral = {
    $schema: 'http://json-schema.org/draft-07/schema',
    description: 'Un esquema de activos digitales que representan una aptitud laboral.',
    properties: {
      id: {
        description: 'Id del examen de salud realizado al trabajador',
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
                description: 'nombre del trabajador',
                type: 'string',
              },
            apellidos: {
                description: 'Apellidos del trabajador',
                type: 'string',
            },
            nif: {
                description: 'número de identificación del trabajador, nif, nie, dni',
                type: 'string',
            },
            puestos: {
                description: 'Una lista de los puestos del trabajador al realizar el exámen de salud.',
                items: {
                    type: 'string',
                },
                type: 'array',
            },
        },
        type: 'object',
      },
      fecha: {
        description: 'Fecha de realización del examen de salud en milisegundos UTC.',
        type: 'integer',
      },
      protocolos: {
        description: 'Una lista con los protocolos aplicados en el examen de salud',
        items: {
            type: 'string',
        },
        type: 'array',
      },
      aptitud: {
        description: 'Aptitud laboral resultante del examen de salud',
        properties: {
          valoracion: {
            description: 'valoración de la apitud',
            type: 'string',
          },
          observaciones: {
            description: 'observaciones a la valoración de la apitud',
            type: 'string',
          },
        },
        type: 'object',
      },
      medico: {
        description: 'Número de colegiado del médico que realiza el examen de salud',
        properties: {
          nombre: {
              description: 'nombre del médico',
              type: 'string',
          },
          apellidos: {
              description: 'Apellidos del médico',
              type: 'string',
          },
          numero: {
              description: 'número de colegiado del médico',
              type: 'string',
          },
        type: 'object',
      },
    },
    title: 'Aptitud Laboral Asset',
    type: 'object',
  }