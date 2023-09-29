import { Button, Drawer, Icon } from 'rsuite';
import { useModalState } from '../misc/custom-hook';
import { Dashboard } from '.';

export function DashboardToggle() {
  const { isOpen, close, open } = useModalState();

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
        <Dashboard />
      </Drawer>
    </>
  );
}
