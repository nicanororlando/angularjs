module.exports = (grunt) => {
  // Proyect configuration
  grunt.initConfig({
    // Para depurar el codigo
    jshint: {
      all: ["scripts.js"],
    },
    // Para unir archivos, el destino es "unidos.js".
    concat: {
      dist: {
        // Es importante q esten escritos en secuencia correcta.
        src: ["scripts.js", "script1.js", "script2.js"],
        dest: "unidos.js",
      },
    },
    // Para minimizar o reducir el archivo js.
    uglify: {
      dist: {
        src: "unidos.js",
        dest: "build/unidos.min.js",
      },
    },
    shell: {
      multiple: {
        command: [
          "del unidos.js", // Borramos el archivo unidos.js
          "mkdir deploy", // Creamos nuevo directorio "deploy".
          "move build\\unidos.min.js deploy\\unidos.min.js", // Movemos el archivo de build a deploy.
        ].join("&&"), // Para indicarle que se ejecuten varios comandos shell.
      },
    },
  });
  // Indicamos la tarea npm que tiene que ser cargada.
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-shell");

  // Indicamos "jshint" como la tarea a ejecutar cuando grunt se ejecuta en default.
  grunt.registerTask("default", ["jshint", "concat", "uglify", "shell"]);
};
