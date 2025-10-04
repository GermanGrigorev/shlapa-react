// A simple TypeScript class wrapper for localStorage

class LocalStorageWrapper {
  // Set an item in localStorage (automatically stringifies objects)
  setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get an item from localStorage, returns parsed object or null
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item === null) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  }

  // Remove an item
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all keys
  clear(): void {
    localStorage.clear();
  }

  // Check if a key exists
  hasKey(key: string): boolean {
    return localStorage.getItem(key) !== null;
  }
}

export const localStorageWrapper = new LocalStorageWrapper();
