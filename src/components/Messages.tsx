import React, { useEffect, useState } from "react";
import jsonData from "../db.json";
// import jsonData from './db-test.json';

interface Person {
  name?: string;
  type?: string; // "personal_chat",
  id: number;
  messages?: [any];
}

interface Messages {
  date: string;
}

interface Message {
  id: number;
  type: string; // "message",
  date: string; // "2022-10-09T19:32:23",
  from: string;
  from_id: number;
  text: string;
}

function Messages({ date }: Messages) {
  const [desiredDate, setDesiredDate] = useState(date); // Date to filter messages

  useEffect(() => {
    setDesiredDate(date || Date.now().toLocaleString());
  }, [date]);

  const filteredMessages = jsonData.chats.list.flatMap((person: any) => {
    const messagesOnDesiredDate = person.messages.filter((message: any) =>
      message.date.startsWith(desiredDate)
    );

    return messagesOnDesiredDate
      .filter((message: any) => message.text !== "")
      .flatMap((message: any, index: number) => {
        if (Array.isArray(message.text)) {
          return message.text.map((item: Message) => {
            return item;
          });
        } else {
          return message;
        }
      });
  });

  return (
    <ul>
      {filteredMessages.map((message: any) => (
        <li
          className={`w-fill rounded border-solid border-2 border-sky-500 m-10 p-2 flex flex-col w-fit justify-self-end`}
          key={message.id}
        >
          <div
            className={`w-fit  ${
              message.from == "Yaryna Hapanovych"
                ? "bg-green-300"
                : "bg-red-400"
            }`}
          >
            {message.from}
          </div>
          <div className="text-left ml-auto">{message.text}</div>
        </li>
      ))}
    </ul>
  );
}

export default Messages;
