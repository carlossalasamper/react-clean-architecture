export default interface BaseFormProps {
  className?: string;
  onFormLoadingChange?: (isLoading: boolean) => void;
  onFormSubmitSuccess?: () => void;
}
