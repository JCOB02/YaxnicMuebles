import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
        .normalize("NFD") // separa los acentos
        .replace(/[\u0300-\u036f]/g, "") // los elimina
        .toLowerCase()
        .replace(/\s+/g, "-");
}
