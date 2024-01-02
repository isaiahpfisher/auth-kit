import { useSession } from "next-auth/react";

// THIS CAN BE USED IN CLIENT COMPONENTS. IT DOES NOT CALL THE DB OR WASTE A READ.

export const useCurrentRole = () => {
  const session = useSession();
  return session.data?.user?.role;
};
