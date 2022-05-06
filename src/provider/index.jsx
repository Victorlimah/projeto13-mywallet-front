import { UserProvider } from "./userContext";

export default function AppProvider({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
