import { Alert, Button, Drawer, Icon } from 'rsuite';
import { useMediaQuery, useModalState } from '../../../misc/custom-hook';
import { EditableInput } from '../../EditableInput';
import { useCurrentRoom } from '../../../context/current-room.context';
import { memo } from 'react';
import { database } from '../../../misc/firebase';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditRoomBtnDrawer() {
  const { isOpen, open, close } = useModalState();

  const { chatId } = useParams();

  const isMobile = useMediaQuery(`(max-width:992px)`);

  const name = useCurrentRoom(v => v.name);
  const description = useCurrentRoom(v => v.description);

  const updateData = (key, value) => {
    database
      .ref(`rooms/${chatId}`)
      .child(key)
      .set(value)
      .then(() => {
        Alert.success('Updated successfully.', 4000);
      })
      .catch(err => {
        Alert.error(err.message, 4000);
      });
  };

  const onNameSave = newName => {
    updateData('name', newName);
  };

  const onDescriptionSave = newDesc => {
    updateData('description', newDesc);
  };

  return (
    <>
      <Button className="br-circle" size="sm" color="red" onClick={open}>
        <Icon icon="gear" />
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="right">
        <Drawer.Header>
          <Drawer.Title>Edit Room</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <EditableInput
            initialValue={name}
            onSave={onNameSave}
            label={<h6 className="mb-2"></h6>}
            emptyMsg="Name cannot be empty."
          />
          <EditableInput
            componentClass="textarea"
            rows={5}
            initialValue={description}
            onSave={onDescriptionSave}
            emptyMsg="Descriptiom cannot be empty."
            wrapperClassName="mt-3"
          />
        </Drawer.Body>
        <Drawer.Footer>
          <Button block onClick={close}>
            Close
          </Button>
        </Drawer.Footer>
      </Drawer>
    </>
  );
}

export default memo(EditRoomBtnDrawer);
