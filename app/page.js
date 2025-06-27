import TopBar from './components/TopBar';
import SideBarHome from './components/SideBarHome';
import MapWrapper from './components/MapWrapper';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen w-screen bg-white">
        <TopBar />
        <div className="relative flex h-screen">
            <SideBarHome/>
            <div className="absolute z-0 inset-0 flex-1 bg-red-100">
              <MapWrapper />
            </div>
          </div>
      </div>
     </main>
  );
}
