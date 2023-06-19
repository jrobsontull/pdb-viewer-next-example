import PDBViewer from '@/components/three/PDBViewer';

export default function Viewer() {
  return (
    <div className="w-full h-full">
      <h1>Viewer Page</h1>
      <div className="w-full h-full flex justify-center items-center">
        <PDBViewer />
      </div>
    </div>
  );
}
