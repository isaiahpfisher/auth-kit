import { auth } from "@/auth";

// THESE CAN BE USED IN SERVER COMPONENTS, SERVER ACTIONS, AND API ROUTES.

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};
