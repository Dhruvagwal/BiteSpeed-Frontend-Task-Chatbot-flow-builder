import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { TextNodeData } from "@/components/nodes/TextNode";

export default function NodeDrawer({ open, setOpen, selectedNode, setSelectedNode, setNodes }: any) {
  const updateNodeData = (field: keyof TextNodeData, value: string) => {
    if (!selectedNode) return;
    setNodes((nds: any) =>
      nds.map((n: any) =>
        n.id === selectedNode.id ? { ...n, data: { ...n.data, [field]: value } } : n
      )
    );
    setSelectedNode({ ...selectedNode, data: { ...selectedNode.data, [field]: value } });
  };

  return (
    <Drawer  open={open} onOpenChange={setOpen}>
      <DrawerContent className="w-[30vw] mx-auto rounded-t-2xl shadow-lg">
        <DrawerHeader className="pb-2 border-b">
          <DrawerTitle className="text-lg font-semibold">Edit Node</DrawerTitle>
          <DrawerDescription className="text-sm text-muted-foreground">
            Customize your message block
          </DrawerDescription>
        </DrawerHeader>

        {selectedNode && (
          <div className="space-y-5 px-6 py-4">
            {/* Label */}
            <div className="space-y-1">
              <Label>Message</Label>
              <Input
                value={selectedNode.data.label}
                onChange={(e) => updateNodeData("label", e.target.value)}
                placeholder="Message text"
              />
            </div>

            {/* Description */}
            <div className="space-y-1">
              <Label>Description</Label>
              <Input
                value={selectedNode.data.description || ""}
                onChange={(e) => updateNodeData("description", e.target.value)}
                placeholder="Description"
              />
            </div>

            {/* Color */}
            <div className="space-y-1">
              <Label>Header Color</Label>
              <div className="flex items-center gap-3">
                <Input
                  type="color"
                  className="w-12 h-10 p-1 cursor-pointer rounded-md border"
                  value={selectedNode.data.color || "#C7F2E3"}
                  onChange={(e) => updateNodeData("color", e.target.value)}
                />
                <span className="text-sm text-muted-foreground">
                  Pick a color
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="space-y-1">
              <Label>Image URL</Label>
              <Input
                value={selectedNode.data.imageUrl || ""}
                onChange={(e) => updateNodeData("imageUrl", e.target.value)}
                placeholder="https://example.com/image.png"
              />
            </div>
          </div>
        )}

        <DrawerFooter className="border-t">
          <Button className="w-full" onClick={() => setOpen(false)}>
            Done
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
