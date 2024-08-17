import { Avatar, TextInput } from "flowbite-react";
import React from "react";
import { IoIosSend } from "react-icons/io";

const MessageContainer = () => {
  const isChat=true;
  return (
    <div className="h-full">
      {
        isChat?(
          <>
          <div className="bg-gray-500 p-2 text-left rounded-br-md rounded-tr-md mb-4">
        <h1 className="text-black">
          <span className="text-white">To: </span>Sam Edwards
        </h1>
      </div>
      <div className="h-[350px] overflow-y-scroll px-5">
        <div className="flex items-start justify-end gap-2.5 mb-4">
          <Avatar rounded />
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          </div>
        </div>
        <div className="flex items-start justify-end gap-2.5 mb-4">
          <Avatar rounded />
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          </div>
        </div>
        <div className="flex items-start justify-end gap-2.5 mb-4">
          <Avatar rounded />
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                11:46
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          </div>
        </div>
      </div>
      <TextInput className='w-[calc(100%-10px)] absolute bottom-3 ' id="msg" type="text" rightIcon={IoIosSend } placeholder="Type message" required />
          </>
        ):(
          <>
          <div className="h-full w-full flex flex-col items-center justify-center text-white">
            <h1 className="font-extrabold text-2xl">Welcome 👋 Ritik</h1>
            <p>Select a chat to start Messaging</p>
          </div>
          </>
        )
      }
      
    </div>
  );
};

export default MessageContainer;
