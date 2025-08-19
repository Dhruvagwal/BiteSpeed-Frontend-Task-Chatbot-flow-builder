import { useState } from "react";
import ReactFlow, { Background, BackgroundVariant, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

import { useFlowNodes } from "@/hooks/useFlowNodes";
import { useZoom } from "@/hooks/useZoom";

import SaveButton from "./ui/SaveButton";
import FlowDock from "./ui/FlowDock";
import NodeDrawer from "./ui/NodeDrawer";

import TextNode from "../nodes/TextNode";

const nodeTypes = { text: TextNode };

export default function InnerFlow() {
  const {
    nodes,
    edges,
    setNodes,
    onNodesChange,
    onEdgesChange,
    onConnect,
    addNode,
  } = useFlowNodes();

  const { zoomIn, zoomOut, scale, setScale, rf } = useZoom();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  const handleNodeDoubleClick = (_: any, node: any) => {
    setSelectedNode(node);
    setDrawerOpen(true);
  };

  return (
    <div className="h-screen w-screen relative">
      {/* Save button */}
      <div className="absolute z-1 top-4 right-4">
        <SaveButton nodes={nodes} edges={edges} />
      </div>

      {/* Flow Canvas */}
      <div className="flex-1  absolute top-0 left-0 w-screen h-screen">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDoubleClick={handleNodeDoubleClick}
          nodeTypes={nodeTypes}
          zoomOnScroll={false} // disable wheel zoom
          zoomOnPinch={false} // disable touch pinch zoom
          panOnScroll={true} // keep panning with trackpad/mouse
          fitView
        >
          <Background variant={BackgroundVariant.Lines} gap={24} size={1} />
        </ReactFlow>
        <MiniMap nodeColor={() => "#0ea5e9"} zoomable pannable />
      </div>

      {/* Dock */}
      <FlowDock
        addNode={addNode}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        scale={scale}
        setScale={setScale}
        rf={rf}
      />

      {/* Drawer */}
      <NodeDrawer
        open={drawerOpen}
        setOpen={setDrawerOpen}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        setNodes={setNodes}
      />
    </div>
  );
}
