import { AppCopy, defaultCopy } from './defaultCopy';

const STORAGE_KEY = 'valentine-app-copy-v1';

export function loadCopyFromStorage(): AppCopy | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    // Validate structure
    if (parsed && typeof parsed === 'object' && parsed.landing && parsed.coupon) {
      return parsed as AppCopy;
    }
    return null;
  } catch (error) {
    console.error('Failed to load copy from storage:', error);
    return null;
  }
}

export function saveCopyToStorage(copy: AppCopy): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(copy));
  } catch (error) {
    console.error('Failed to save copy to storage:', error);
  }
}

export function clearCopyFromStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear copy from storage:', error);
  }
}

export function getInitialCopy(): AppCopy {
  return loadCopyFromStorage() || defaultCopy;
}
