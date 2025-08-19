import { ReactFlowProvider } from "reactflow";
import InnerFlow from "./InnerFlow";

export default function FlowCanvas() {
  return (
    <ReactFlowProvider>
      <InnerFlow />
    </ReactFlowProvider>
  );
}
