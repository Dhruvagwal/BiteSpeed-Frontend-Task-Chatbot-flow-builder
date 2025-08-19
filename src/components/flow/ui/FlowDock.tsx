import { Dock, DockIcon } from "@/components/magicui/dock";
import { Button } from "@/components/ui/button";
import { Plus, ZoomIn, ZoomOut } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function FlowDock({
  addNode,
  zoomIn,
  zoomOut,
  scale,
  setScale,
}: any) {
  return (
    <div className=" absolute bottom-0 flex justify-center items-center w-full p-2">
      <Dock
        iconSize={36}
        iconMagnification={60}
        iconDistance={120}
        direction="middle"
        className="border-t bg-white/80 backdrop-blur"
      >
        {/* Add Node */}
        <DockIcon className="">
          <Button variant="ghost" size="sm" onClick={addNode}>
            <Plus className="w-5 h-5" />
          </Button>
        </DockIcon>

        {/* Zoom Out */}
        <DockIcon>
          <Button variant="ghost" size="sm" onClick={zoomOut}>
            <ZoomOut className="w-5 h-5" />
          </Button>
        </DockIcon>

        {/* Zoom Slider */}
        <DockIcon className="flex !w-44 items-center">
          <Slider
            min={0.2}
            max={2}
            step={0.05}
            value={[scale]}
            onValueChange={(val) => {
              const newScale = val[0];
              setScale(newScale);
            }}
            className="w-24"
          />
        </DockIcon>

        {/* Zoom In */}
        <DockIcon>
          <Button variant="ghost" size="sm" onClick={zoomIn}>
            <ZoomIn className="w-5 h-5" />
          </Button>
        </DockIcon>
      </Dock>
    </div>
  );
}
