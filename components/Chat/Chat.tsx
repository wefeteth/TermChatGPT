import { Message } from "@/types";
import { FC } from "react";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (message: Message) => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend }) => {
  return (
    <div className="h-screen flex flex-col rounded-lg px-2 
    sm:p-4  bg-black">
      {messages.map((message, index) => (
        <div
          key={index}
          className="my-1 sm:my-1.5"
        >
          <ChatMessage message={message} />
        </div>
      ))}

      {loading && (
        <div className="my-1 sm:my-1.5">
          <ChatLoader />
        </div>
      )}

      <div className="mt-4 sm:mt-8 bottom-[56px] left-0 w-full">
        <ChatInput onSend={onSend} />
      </div>

      <div>




      </div>
    </div>
  );
};
