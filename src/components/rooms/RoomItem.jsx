import TimeAgo from 'timeago-react';

export default function RoomItem() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-disappear">Room name</h3>
        <TimeAgo datetime={new Date()} className="font-normal text-black-45" />
      </div>
      <div className="d-flex align-items-center text-black-70">
        <span>No messages yet.</span>
      </div>
    </div>
  );
}
