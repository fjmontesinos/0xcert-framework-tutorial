export const schemaTituloAcademico = {
  $schema: 'http://json-schema.org/draft-07/schema',
  description: 'Un esquema de activos digitales que representan titulos académicos',
  properties: {
    id: {
      description: 'Id del título emitido por el centro al alumno',
      type: 'integer',
    },
    centro: {
      description: 'Centro que emite el título',
      type: 'string',
    },
    titulo: {
      description: 'Título emitido',
      type: 'string',
    },
    alumno: {
      description: 'Alumno al que se le emite el título académico',
      properties: {
        nombre: {
          description: 'Nombre del alumno',
          type: 'string',
        },
        apellidos: {
          description: 'Apellidos del alumno',
          type: 'string',
        },
        numero: {
          description: 'Número de identificación del alumno, nif, nie, dni',
          type: 'string',
        },
        nacimiento: {
          description: 'Información referente al nacimiento del alumno',
          properties: {
            fecha: {
              description: 'Fecha de nacimiento en milisegundos',
              type: 'integer',
            },
            localidad: {
              description: 'Localidad de nacimiento',
              type: 'string',
            },
            provincia: {
              description: 'Provincia de nacimiento',
              type: 'string',
            },
            pais: {
              description: 'País de nacimiento',
              type: 'string',
            },
          },
          type: 'object',
        },
      },
      type: 'object',
    },
    nota: {
      description: 'Nota alcanzada por el alumno en la tituación',
      typte: 'string',
    },
    fecha: {
      description: 'Fecha en la que el alumno alcanza la titulación en milisegundos UTC.',
      type: 'integer',
    },
    lugar: {
      description: 'Lugar desde el que se emite el certificado del título',
      type: 'string',
    },
    asignaturas: {
        description: 'Asignaturas que componen cada curso',
        items: {
            curso: {
                description: 'Curso al que pertenece la asignatura',
                type: 'integer',
            },
            nombre: {
                description: 'Nombre de la asignatura',
                type: 'string',
            },
            horas: {
                description: 'Número de horas de la asignatura',
                type: 'string',
            },
            nota: {
                description: 'Nota de la asignatura',
                type: 'string',
            },
            fecha: {
                description: 'Fecha en alcanzar la nota sobre la asignatura en milisegundos UTC',
                type: 'integer',
            },
        },
        type: 'array'
    }
  },
  title: 'Títulos Académicos Asset',
  required: ['id', 'centro', 'titulo', 'alumno', 'nota', 'fecha', 'lugar'],
  type: 'object',
};

/**
 *
 * Ejemplo
 * {
	id: 1,
    centro: 'UNIR',
    titulo: 'Experto Universitario en desarrollo Blockchain',
    alumno: {
     	nombre: 'Javier',
        apellidos: 'Montesinos Morcillo',
        numero: '52357721S',
        nacimiento: {
        	fecha: 81558000000,
            localidad: 'Badajoz',
            provincia: 'Badajoz',
            pais: 'España',
        },
    },
    nota: '10',
    fecha: 1584313200000,
    lugar: 'Logroño',
    asignaturas: [
      {
      	curso: 1,
        nombre: 'Criptografía',
        horas: '35',
        nota: '8,5',
        fecha: 1584313200000,
      },
      {
      	curso: 1,
        nombre: 'Redes Blockchain',
        horas: '40',
        nota: '9,5',
        fecha: 1584313200000,
      }
    ],

}

schemaId: 2338110315974518e8d0553037efec92a44e3854ef7a6ffa5ccd18b999d3bbc6
 */
