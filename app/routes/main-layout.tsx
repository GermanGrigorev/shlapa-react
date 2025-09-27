import { Outlet } from "react-router";

export default function MainLayout({ children }: { children: any }) {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex gap-2">
          <a
            href="/"
            className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200"
          >
            To WordList
          </a>
          <a
            href="/play"
            className="cursor-pointer border border-amber-200 p-2 rounded-2xl hover:text-amber-200"
          >
            Play!
          </a>
        </div>
        <Outlet />
      </div>
    </main>
  );
}
