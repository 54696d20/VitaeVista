import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const hideLayout = ["/","/signup", "/login"].includes(router.pathname); // Hide on signup & login

  return (
    <div className={`flex min-h-screen ${hideLayout ? "bg-gray-100" : ""}`}>
      {!hideLayout && <Sidebar />}
      <div className="flex flex-col flex-1">
        {!hideLayout && <TopBar />}
        <main className="p-6 w-full">{children}</main>
      </div>
    </div>
  );
}
