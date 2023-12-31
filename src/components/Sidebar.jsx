import { Divider } from 'rsuite';
import CreateRoomBtnModal from '../dashboard/CreateRoomBtnModal';
import { DashboardToggle } from '../dashboard/DashboardToggle';
import ChatRoomList from './rooms/ChatRoomList';
import { useEffect, useRef, useState } from 'react';

export function Sidebar() {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);

  return (
    <div className="h-100 pt-2">
      <div ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <Divider style={{ margin: 0, padding: '30px 0' }}>
          Join conversation
        </Divider>
      </div>
      <ChatRoomList aboveElementHeight={height} />
    </div>
  );
}
