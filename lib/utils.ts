import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Item = {
  id: number
  name: string
  itemCode: string
  htsCode: string | null
  categoryId: number | null
  category: {
    id: number
    name: string
  } | null
  specifications: {
    id: number
    itemId: number | null
    specifications: string[] | null
  }[]
}

