import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { toast } from "sonner";

export default function SaveButton({ nodes, edges }: { nodes: any[]; edges: any[] }) {
  const onSave = () => {
    const noIncoming = nodes.filter((n) => !edges.find((e) => e.target === n.id));
    if (nodes.length > 1 && noIncoming.length > 1) {
      toast.error("More than one node has no incoming edge.");
      return;
    }
    toast.success("Flow saved!");
    console.log("Saved:", { nodes, edges });
  };

  return (
    <Button size="sm" onClick={onSave}>
      <Save className="w-4 h-4 mr-1" /> Save
    </Button>
  );
}
