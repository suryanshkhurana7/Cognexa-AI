import React from "react";
import { useSelector } from "react-redux";

const MessageList = () => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  const { messages } = useSelector((state) => state.message);
  return (
    <div className="flex-1 overflow-y-autopx-6 py-6 space-y-5 [scro;;bar-width:none] [&::-webkit-scrollbar]:hidden">
      {messages.length == 0 || !selectedConversation ? (
        <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[20px] font-semibold text-slate-200 tracking-tight">
              CognexaAI
            </h1>
            <p className="text-[15px] font-semibold text-slate-400 tracking-tight">
              How can I help you?
            </p>
            <p className="text-[13px] text-slate-600 max-w-[260px] tracking-relaxed">
              Ask me anything - code, ideas, explainations, or just a quick
              question.
            </p>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MessageList;
