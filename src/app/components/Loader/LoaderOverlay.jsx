import Loader from "./Loader";

function LoaderOverlay({ show = false }) {
  if (!show) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"></div>
      <div className="flex justify-center items-center fixed z-[100] inset-0">
        <Loader />
      </div>
    </>
  );
}

export default LoaderOverlay;