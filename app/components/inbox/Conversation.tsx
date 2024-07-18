"use client";
import { ConversationType } from "@/app/inbox/page";
import { useRouter } from "next/navigation";

interface ConversationProps {
  conversation: ConversationType;
  userId: string | null;
}

const Conversation = ({ userId, conversation }: ConversationProps) => {
  const router = useRouter();
  const otherUser = conversation.users.find((user) => user.id !== userId);

  return (
    <div className="px-6 py-4 cursor-pointer border border-gray-300 rounded-xl">
      <p className="mb-6 text-xl">{otherUser?.name}</p>
      <p
        onClick={() => router.push(`/inbox/${conversation.id}`)}
        className="text-airbnb-dark"
      >
        Go to conversation
      </p>
    </div>
  );
};

export default Conversation;
