import { StyledModal } from './Modal.styles';

export interface ModalProps {
  title?: string;
  isVisible: boolean;
  onCancel: () => void;
  onSubmit: (e: React.SyntheticEvent) => void;
  submitButtonLabel?: string;
  cancelButtonLabel?: string;
  children: React.ReactNode;
}

export const Modal = ({
  title,
  isVisible,
  onCancel,
  onSubmit,
  submitButtonLabel,
  cancelButtonLabel,
  children,
}: ModalProps) => {
  return (
    <>
      <StyledModal
        title={title}
        visible={isVisible}
        okText={submitButtonLabel ?? 'submit'}
        cancelText={cancelButtonLabel ?? 'cancel'}
        onOk={(e) => onSubmit(e)}
        onCancel={() => onCancel()}
      >
        {children}
      </StyledModal>
    </>
  );
};
