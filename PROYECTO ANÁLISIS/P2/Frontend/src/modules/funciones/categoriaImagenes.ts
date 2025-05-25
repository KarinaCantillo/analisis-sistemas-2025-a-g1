// src/utils/categoryImageMap.ts

const imageMap: Record<string, string> = {
    "Joyería Artesanal": "/joyeria.png",
    "Decoración": "/decoracion.png",
    "Ropa Tradicional": "/vestimenta.png",
    "Hogar y bienestar": "/bienestar.png",
    "Regalos personalizados": "/regalos.png",
    "Cultura y tradición": "/cultura.png",
  };
  
  export function getImageForCategory(name: string): string {
    return imageMap[name] ?? "/placeholder.png";
  }
  