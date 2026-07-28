/* ==========================================================================
   CONFIGURACIÓN DE USUARIOS — Máquina del Tiempo Gramatical
   ==========================================================================
   Aquí se define quién puede entrar a la app y con qué contraseña.

   CÓMO AGREGAR / EDITAR / QUITAR UN ALUMNO:
   - Cada alumno es una línea:  { user: "usuario", pass: "contraseña", name: "Nombre a mostrar" }
   - "user" no debe repetirse y funciona mejor sin espacios ni acentos.
   - Puedes cambiar "pass" y "name" libremente.
   - Para agregar un alumno nuevo, copia una línea y pégala antes de la
     línea "];", cambiando los tres valores.
   - Para eliminar a alguien, borra su línea completa.

   Este archivo es el ÚNICO lugar donde se guardan usuarios y contraseñas.
   No requiere servidor ni base de datos: es una lista simple pensada para
   controlar el acceso de un grupo de clase, no para proteger información
   sensible (cualquiera con acceso al código puede leer esta lista).
   ========================================================================== */

const USERS = [
  { user: "profesor_01", pass: "profe2026", name: "Profesor Jair" },
  { user: "profesor_02", pass: "TAS2026", name: "Profesor Valset" },
  { user: "alumno02", pass: "dct79", name: "Alumno 02" },
  { user: "alumno03", pass: "cka37", name: "Alumno 03" },
  { user: "alumno04", pass: "gpo93", name: "Alumno 04" },
  { user: "alumno05", pass: "skl45", name: "Alumno 05" },
  { user: "alumno06", pass: "vau99", name: "Alumno 06" },
  { user: "alumno07", pass: "khf53", name: "Alumno 07" },
  { user: "alumno08", pass: "cjj54", name: "Alumno 08" },
  { user: "alumno09", pass: "pus78", name: "Alumno 09" },
  { user: "alumno10", pass: "dxc47", name: "Alumno 10" },
  { user: "alumno11", pass: "vqw83", name: "Alumno 11" },
  { user: "alumno12", pass: "ebr47", name: "Alumno 12" },
  { user: "alumno13", pass: "zww58", name: "Alumno 13" },
  { user: "alumno14", pass: "hqj57", name: "Alumno 14" },
  { user: "alumno15", pass: "jrs97", name: "Alumno 15" },
  { user: "alumno16", pass: "qpe41", name: "Alumno 16" },
  { user: "alumno17", pass: "ejz91", name: "Alumno 17" },
  { user: "alumno18", pass: "rfi17", name: "Alumno 18" },
  { user: "alumno19", pass: "fai44", name: "Alumno 19" },
  { user: "alumno20", pass: "bxo50", name: "Alumno 20" },
  { user: "alumno21", pass: "fmx92", name: "Alumno 21" },
  { user: "alumno22", pass: "lgg81", name: "Alumno 22" },
  { user: "alumno23", pass: "otl84", name: "Alumno 23" },
  { user: "alumno24", pass: "kfz75", name: "Alumno 24" },
  { user: "alumno25", pass: "mtw29", name: "Alumno 25" },
  { user: "alumno26", pass: "quk18", name: "Alumno 26" },
  { user: "alumno27", pass: "kpm42", name: "Alumno 27" },
  { user: "alumno28", pass: "zwa24", name: "Alumno 28" },
  { user: "alumno29", pass: "rng92", name: "Alumno 29" },
  { user: "alumno30", pass: "ihe10", name: "Alumno 30" },
];
