import { Handle, Position, type NodeProps } from "reactflow";
import { MessageSquare } from "lucide-react";

export type TextNodeData = {
  label: string;
  description?: string;
  color?: string;
  imageUrl?: string;
};

export default function TextNode({ data, selected }: NodeProps<TextNodeData>) {
  return (
    <div
      className={`
        relative rounded-md border bg-white w-32 text-[7px] shadow-sm
        transition-all duration-200
        ${
          selected ? "border-primary ring-2 ring-primary/50" : "border-gray-200"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-1 px-1.5 py-1 border-b bg-primary/10 rounded-t-md">
        <MessageSquare className="w-2 h-2 text-primary" />
        <span className="font-medium truncate">{data.label || "Message"}</span>
      </div>

      {/* Body */}
      <div className="flex items-center gap-1.5 px-1.5 py-1">
        {Boolean(data.imageUrl) && (
          <img
            src={data.imageUrl}
            alt=""
            className="w-5 h-5 rounded object-cover border flex-shrink-0"
          />
        )}
        <div className="text-gray-600 text-[9px] leading-tight truncate">
          {Boolean(data.description) ? data.description : "New Message"}
        </div>
      </div>

      {/* Handles */}
      <Handle
        type="target"
        position={Position.Left}
        className="w-2 h-2 bg-primary"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-2 h-2 bg-primary"
      />
    </div>
  );
}
