import CreateRoomBtnModal from '../dashboard/CreateRoomBtnModal';
import { DashboardToggle } from '../dashboard/DashboardToggle';

export function Sidebar() {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToggle />
        <CreateRoomBtnModal />
      </div>
      bottom
    </div>
  );
}
