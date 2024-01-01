import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login"
    >
      <div className="flex w-full items-center justify-center">
        <ExclamationTriangleIcon className="size-8 text-destructive" />
      </div>
    </CardWrapper>
  );
};
