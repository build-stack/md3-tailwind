import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx for better conditional class handling
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}