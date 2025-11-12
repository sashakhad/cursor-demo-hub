/**
 * Persona Storage Utility
 * Handles saving and loading AI search criteria personas in localStorage
 * Copyright Anysphere Inc.
 */

export interface SavedPersona {
  id: string;
  name: string;
  criteria: string[];
  createdAt: string;
}

const STORAGE_KEY = 'saved-personas';

/**
 * Generate a unique ID for a persona
 */
function generateId(): string {
  return `persona-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Save a new persona to localStorage
 */
export function savePersona(name: string, criteria: string[]): SavedPersona {
  const personas = loadPersonas();
  
  const newPersona: SavedPersona = {
    id: generateId(),
    name: name.trim(),
    criteria: [...criteria],
    createdAt: new Date().toISOString(),
  };
  
  personas.push(newPersona);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(personas));
  } catch (error) {
    console.error('Failed to save persona to localStorage:', error);
    throw new Error('Failed to save persona. Storage may be full.');
  }
  
  return newPersona;
}

/**
 * Load all saved personas from localStorage
 */
export function loadPersonas(): SavedPersona[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const personas = JSON.parse(stored);
    return Array.isArray(personas) ? personas : [];
  } catch (error) {
    console.error('Failed to load personas from localStorage:', error);
    return [];
  }
}

/**
 * Delete a persona by ID
 */
export function deletePersona(id: string): void {
  const personas = loadPersonas();
  const filtered = personas.filter(p => p.id !== id);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Failed to delete persona from localStorage:', error);
    throw new Error('Failed to delete persona.');
  }
}

/**
 * Get a single persona by ID
 */
export function getPersonaById(id: string): SavedPersona | null {
  const personas = loadPersonas();
  return personas.find(p => p.id === id) || null;
}

