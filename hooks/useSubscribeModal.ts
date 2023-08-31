import { create } from "zustand";

interface useSubscribeModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useAuthModal = create<useSubscribeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSubscribeModal;