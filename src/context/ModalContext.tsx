"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  isOpen: boolean;
  serviceSelected?: string;
  careerSelected?: string;
  openModal: (service?: string, career?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceSelected, setServiceSelected] = useState<string | undefined>(
    undefined,
  );
  const [careerSelected, setCareerSelected] = useState<string | undefined>(
    undefined,
  );

  const openModal = (service?: string, career?: string) => {
    setServiceSelected(service);
    setCareerSelected(career);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setServiceSelected(undefined);
    setCareerSelected(undefined);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, serviceSelected, careerSelected, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
