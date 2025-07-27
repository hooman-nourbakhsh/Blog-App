import { useFormStatus } from "react-dom";
import Button from "./Button";
import { SpinnerMini } from "./Spinner";

function SubmitButton({ children, calssName, ...rest }) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} {...rest} className={`flex items-center justify-center gap-x-4 py-4 w-full${calssName}`}>
      {children}
      {pending && <SpinnerMini />}
    </Button>
  );
}
export default SubmitButton;
