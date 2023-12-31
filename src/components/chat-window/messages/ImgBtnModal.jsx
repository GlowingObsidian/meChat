import { Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hook';

export default function ImgBtnModal({ src, fileName }) {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      <input
        type="image"
        src={src}
        alt="file"
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <img src={src} height="100%" width="100%" alt="file" />
          </>
        </Modal.Body>
        <Modal.Footer>
          <a href={src} target="_blank" rel="noreferrer">
            View original
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}
