import { useCallback } from "react";
import { addEdge, useEdgesState, useNodesState, type Node, type Edge, type Connection } from "reactflow";
export function useFlowNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const addNode = () => {
    const position = { x: 200, y: 100 };
    const newNode: Node = {
      id: Date.now().toString(),
      type: "text",
      position,
      data: { label: "New message", description: "", color: "#C7F2E3", imageUrl: "" },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => {
      if (edges.some((e) => e.source === params.source)) return;
      setEdges((eds) => addEdge(params, eds));
    },
    [edges]
  );

  return { nodes, edges, setNodes, setEdges, onNodesChange, onEdgesChange, onConnect, addNode };
}
