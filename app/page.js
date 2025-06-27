import TopBar from './components/TopBar';
import SideBarHome from './components/SideBarHome';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen w-screen bg-white">
        <TopBar />
        <div className="relative flex h-screen">
            <SideBarHome/>
            <div className="absolute inset-0 flex-1 bg-blue-100">
                //
            </div>
          </div>
      </div>
    </main>
  );
}
