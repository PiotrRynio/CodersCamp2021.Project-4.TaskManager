import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { useModal } from './useModal';

export const ModalExample = () => {
  const { isModalVisible, toggleModalVisibility } = useModal();

  return (
    <>
      <Button htmlType="button" type="primary" color="primary" handleClick={toggleModalVisibility}>
        Open Example Modal
      </Button>
      <Modal
        title="Modal Example"
        isVisible={isModalVisible}
        onSubmit={toggleModalVisibility}
        onCancel={toggleModalVisibility}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
