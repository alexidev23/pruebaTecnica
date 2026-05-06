interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HistoryDrawer({ isOpen, onClose }: HistoryDrawerProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-muted/70 backdrop-blur-sm z-40 "
          onClick={onClose}
        ></div>
      )}

      {/* Drawer content */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-card z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        este es el contenido
      </div>
    </>
  );
}
