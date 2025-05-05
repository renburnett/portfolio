import React, { createContext, useContext, useState, ReactNode } from "react";
import { Modal, ModalHeader, ModalContent, ModalActions, Button } from "semantic-ui-react";

export type ModalSize = 'mini' | 'tiny' | 'small' | 'large' | 'fullscreen';

type GlobalState = {
  modalOpen: boolean;
  openModal: (
    open: boolean,
    title?: string,
    message?: string,
    onCancel?: () => void,
    onConfirm?: () => void,
    size?: ModalSize,
    confirmationOnly?: boolean
  ) => void;
};

const GlobalContext = createContext<GlobalState | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [modalState, setModalState] = useState<{
    open: boolean;
    size: ModalSize;
    title: string;
    message: string;
    confirmationOnly?: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
  }>({
    open: false,
    size: 'mini',
    title: '',
    message: '',
    confirmationOnly: false
  });

  /**
  * Opens or closes the global modal with optional settings.
  * @param open - whether to show (true) or hide (false) the modal
  * @param title - optional modal title
  * @param message - optional modal message content
  * @param onCancel - optional callback executed when the user clicks cancel
  * @param onConfirm - optional callback executed when the user clicks confirm
  * @param size - optional modal size ('mini' | 'tiny' | 'small' | 'large' | 'fullscreen')
  * @param confirmationOnly - optional flag to hide the cancel button when true
  */
  const openModal = (
    open: boolean,
    title: string = '',
    message: string = '',
    onConfirm?: () => void,
    onCancel?: () => void,
    size: ModalSize = 'mini',
    confirmationOnly: boolean = false
  ) => {
    setModalState({ open, size, title, message, confirmationOnly, onConfirm, onCancel });
  };

  const handleCancel = () => {
    modalState.onCancel?.();
    setModalState(prev => ({ ...prev, open: false }));
  };

  const handleConfirm = () => {
    modalState.onConfirm?.();
    setModalState(prev => ({ ...prev, open: false }));
  };

  return (
    <GlobalContext.Provider value={{ modalOpen: modalState.open, openModal }}>
      {children}
      <Modal
        open={modalState.open}
        size={modalState.size}
        onClose={handleCancel}
      >
        <ModalHeader>{modalState.title}</ModalHeader>
        <ModalContent>
          <p>{modalState.message}</p>
        </ModalContent>
        <ModalActions>
          {!modalState.confirmationOnly && (
            <Button negative onClick={handleCancel}>
              No
            </Button>
          )}
          <Button positive onClick={handleConfirm}>
            Yes
          </Button>
        </ModalActions>
      </Modal>
    </GlobalContext.Provider>
  );
};

export const useGlobal = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within the `<GlobalProvider />`');
  }
  return context;
};
