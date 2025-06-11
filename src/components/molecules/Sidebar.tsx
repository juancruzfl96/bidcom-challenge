'use client';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-100/30 backdrop-blur-sm z-30 transition-opacity duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white p-6 z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <p className="mt-10">Gracias por revisar mi challenge</p>
      </div>
    </>
  );
};

export default Sidebar;
