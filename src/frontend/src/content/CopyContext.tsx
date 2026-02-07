import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AppCopy, defaultCopy } from './defaultCopy';
import { getInitialCopy, saveCopyToStorage, clearCopyFromStorage } from './storage';

interface CopyContextValue {
  copy: AppCopy;
  isEditMode: boolean;
  draftCopy: AppCopy;
  enterEditMode: () => void;
  exitEditMode: () => void;
  updateDraft: (updates: Partial<AppCopy>) => void;
  saveDraft: () => void;
  cancelDraft: () => void;
  resetToDefaults: () => void;
}

const CopyContext = createContext<CopyContextValue | undefined>(undefined);

export function CopyProvider({ children }: { children: ReactNode }) {
  const [copy, setCopy] = useState<AppCopy>(getInitialCopy());
  const [isEditMode, setIsEditMode] = useState(false);
  const [draftCopy, setDraftCopy] = useState<AppCopy>(copy);

  const enterEditMode = () => {
    setDraftCopy(copy);
    setIsEditMode(true);
  };

  const exitEditMode = () => {
    setIsEditMode(false);
  };

  const updateDraft = (updates: Partial<AppCopy>) => {
    setDraftCopy(prev => ({
      ...prev,
      ...updates,
      landing: { ...prev.landing, ...(updates.landing || {}) },
      coupon: { ...prev.coupon, ...(updates.coupon || {}) }
    }));
  };

  const saveDraft = () => {
    setCopy(draftCopy);
    saveCopyToStorage(draftCopy);
    setIsEditMode(false);
  };

  const cancelDraft = () => {
    setDraftCopy(copy);
    setIsEditMode(false);
  };

  const resetToDefaults = () => {
    setCopy(defaultCopy);
    setDraftCopy(defaultCopy);
    clearCopyFromStorage();
    setIsEditMode(false);
  };

  return (
    <CopyContext.Provider
      value={{
        copy,
        isEditMode,
        draftCopy,
        enterEditMode,
        exitEditMode,
        updateDraft,
        saveDraft,
        cancelDraft,
        resetToDefaults
      }}
    >
      {children}
    </CopyContext.Provider>
  );
}

export function useCopy() {
  const context = useContext(CopyContext);
  if (!context) {
    throw new Error('useCopy must be used within a CopyProvider');
  }
  return context;
}
