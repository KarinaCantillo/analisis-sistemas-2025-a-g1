// src/utils/image.helper.ts

export function obtenerImagen(producto: string): string {
    const nombre = producto.toLowerCase();
  
    if (nombre.includes("vasija")) return "/vasija.png";
    if (nombre.includes("caja de regalo")) return "/regalo.png";
    if (nombre.includes("vela")) return "/vela.png";
    if (nombre.includes("ruana")) return "/ruana.png";
    if (nombre.includes("cuadro") || nombre.includes("macramé")) return "/macrame.png";
    if (nombre.includes("collar")) return "/collar.png";
  
    return "/generico.png";
  }
  