export default interface BaseDialogProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
}
