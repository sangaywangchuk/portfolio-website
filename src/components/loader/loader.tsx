import SyncLoader from 'react-spinners/SyncLoader';

export default function Loader() {
  return (
    <div
      className={`flex min-h-[calc(100vh-73px)] flex-1 items-center justify-center`}
    >
      <SyncLoader color="#005FE3" />
    </div>
  );
}
