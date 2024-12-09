// import React, { useState, useEffect } from "react";
// import { io } from "socket.io-client";
// // import { io } from "socket.io-client";

// // Connect to Socket.io server
// const socket = io("http://localhost:5000");

// export default function ChatRoom() {
//     const [message, setMessage] = useState("");
//     const [name, setName] = useState(""); 
//     const [chat, setChat] = useState([]);

//     const sendMessage = (e) => {
//         e.preventDefault();
//         if (message.trim().length > 0) {
//             const node = {
//                 user: localStorage.getItem("name"),
//                 msg: message,
//                 time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
//             };
//             socket.emit("chat-message", node);
//             setChat([...chat, node]);
//             setMessage("");
//         }
//     };

//     useEffect(() => {
//         if (!localStorage.getItem("name")) {
//             const promptValue = prompt("Enter your username:");
//             localStorage.setItem("name", promptValue);
//             setName(promptValue);
//         } else {
//             setName(localStorage.getItem("name"));
//         }

//         socket.on("broadcast", (msg) => {
//             setChat((prevChat) => [...prevChat, msg]);
//         });

//         socket.on("previous-messages", (messages) => {
//             setChat(messages);
//         });

//         return () => {
//             socket.off("broadcast");
//             socket.off("previous-messages");
//         };
//     }, []);

//     return (
//         <div className="flex h-[90vh] justify-center">
//             <div className="flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-white shadow-lg">
//                 <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6">
//                     Talk with Stranger <span className="text-sm ml-4">Hi {name}</span>
//                 </div>
//                 <div id="msgArea" className="overflow-y-scroll flex-grow p-4">
//                     <div className="msg-area pb-3">
//                         {chat.map((node, index) => (
//                             <div
//                                 className={`flex ${
//                                     node.user === name ? "justify-end" : "justify-start"
//                                 } items-center mb-2`}
//                                 key={index}
//                             >
//                                 <div
//                                     className={`sender rounded-full w-10 h-10 text-white mx-1 text-center py-2 ${
//                                         node.user === name ? "bg-pink-600" : "bg-blue-600"
//                                     }`}
//                                 >
//                                     {node.user.charAt(0).toUpperCase()}
//                                 </div>
//                                 <div
//                                     className={`msg ${
//                                         node.user === name ? "msg-out bg-pink-200" : "msg-in bg-blue-200"
//                                     } p-2 rounded-lg`}
//                                 >
//                                     {node.msg}
//                                     <div className="text-xs text-right">{node.time}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="footer px-2 py-2 bg-gray-200">
//                     <form onSubmit={sendMessage} className="flex">
//                         <input
//                             type="text"
//                             name="message"
//                             placeholder="Type your message here"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             className="w-full h-10 px-4 rounded-l-sm"
//                         />
//                         <button
//                             type="submit"
//                             className="w-auto px-4 bg-pink-600 text-white rounded-r-sm"
//                         >
//                             Send
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React, { useState, useEffect } from "react";
// import "../../Styles/chatroom.css"

// export default function ChatRoom() {
//     const [message, setMessage] = useState("");
//     const [name, setName] = useState("");
//     const [chat, setChat] = useState([]);

//     const channel = new BroadcastChannel("chat");

//     const sendMessage = (e) => {
//         e.preventDefault();
//         if (message.trim().length > 0) {
//             const node = {
//                 user: name,
//                 msg: message,
//                 time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//             };
           
//             channel.postMessage(node);
           
//             setChat([...chat, node]);
//             setMessage("");
//         }
//     };

//     useEffect(() => {
//         if (!localStorage.getItem("name")) {
//             const promptValue = prompt("Enter your username:");
//             localStorage.setItem("name", promptValue);
//             setName(promptValue);
//         } else {
//             setName(localStorage.getItem("name"));
//         }

        
//         channel.onmessage = (event) => {
//             setChat((prevChat) => [...prevChat, event.data]);
//         };

//         return () => {
//             channel.close(); 
//         };
//     }, []);

//     return (
//         <div className="flex h-[90vh] justify-center">
//             <div className="flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-white shadow-lg">
//                 <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6">
//                     Talk with Stranger <span className="text-sm ml-4">Hi {name}</span>
//                 </div>
//                 <div id="msgArea" className="overflow-y-scroll flex-grow p-4">
//                     <div className="msg-area pb-3">
//                         {chat.map((node, index) => (
//                             <div
//                                 className={`flex ${
//                                     node.user === name ? "justify-end" : "justify-start"
//                                 } items-center mb-2`}
//                                 key={index}
//                             >
//                                 <div
//                                     className={`sender rounded-full w-10 h-10 text-white mx-1 text-center py-2 ${
//                                         node.user === name ? "bg-pink-600" : "bg-blue-600"
//                                     }`}
//                                 >
//                                     {node.user.charAt(0).toUpperCase()}
//                                 </div>
//                                 <div
//                                     className={`msg ${
//                                         node.user === name ? "msg-out bg-pink-200" : "msg-in bg-blue-200"
//                                     } p-2 rounded-lg`}
//                                 >
//                                     {node.msg}
//                                     <div className="text-xs text-right">{node.time}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="footer px-2 py-2 bg-gray-200">
//                     <form onSubmit={sendMessage} className="flex">
//                         <input
//                             type="text"
//                             name="message"
//                             placeholder="Type your message here"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             className="w-full h-10 px-4 rounded-l-sm"
//                         />
//                         <button
//                             type="submit"
//                             className="w-auto px-4 bg-pink-600 text-white rounded-r-sm"
//                         >
//                             Send
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import "../../Styles/chatroom.css";
import { Link } from "react-router-dom";

export default function ChatRoom() {
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [chat, setChat] = useState([]);

    const channel = new BroadcastChannel("chat");

    const sendMessage = (e) => {
        e.preventDefault();
        if (message.trim().length > 0) {
            const node = {
                user: name,
                msg: message,
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            };

            channel.postMessage(node);

            setChat([...chat, node]);
            setMessage("");
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("name")) {
            const promptValue = prompt("Enter your username:");
            localStorage.setItem("name", promptValue);
            setName(promptValue);
        } else {
            setName(localStorage.getItem("name"));
        }

        channel.onmessage = (event) => {
            setChat((prevChat) => [...prevChat, event.data]);
        };

        return () => {
            channel.close();
        };
    }, []);

    const handleVideoCall = () => {
        alert("Video call initiated!");
        // You can add logic here to initiate a video call
    };

    return (
        <div className="flex h-[90vh] justify-center">
            <div className="flex flex-col justify-between container w-full md:w-[60%] h-[90vh] bg-white shadow-lg">
                <div className="text-3xl font-bold header h-8 bg-pink-600 text-white flex justify-center items-center p-6 relative">
                    Talk with Stranger
                    <span className="text-sm ml-4">Hi {name}</span>
                    {/* Video call button */}
                   <Link to="/video">
                   <button
                        
                        className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
                        style={{marginLeft:"1100px", marginTop:"20px", width:"50px"}}
                    >
                        <i class="bi bi-camera-video-fill"></i>
                    </button></Link>
                </div>
                <div id="msgArea" className="overflow-y-scroll flex-grow p-4">
                    <div className="msg-area pb-3">
                        {chat.map((node, index) => (
                            <div
                                className={`flex ${
                                    node.user === name ? "justify-end" : "justify-start"
                                } items-center mb-2`}
                                key={index}
                            >
                                <div
                                    className={`sender rounded-full w-10 h-10 text-white mx-1 text-center py-2 ${
                                        node.user === name ? "bg-pink-600" : "bg-blue-600"
                                    }`}
                                >
                                    {node.user.charAt(0).toUpperCase()}
                                </div>
                                <div
                                    className={`msg ${
                                        node.user === name ? "msg-out bg-pink-200" : "msg-in bg-blue-200"
                                    } p-2 rounded-lg`}
                                >
                                    {node.msg}
                                    <div className="text-xs text-right">{node.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer px-2 py-2 bg-gray-200">
                    <form onSubmit={sendMessage} className="flex">
                        <input
                            type="text"
                            name="message"
                            placeholder="Type your message here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-10 px-4 rounded-l-sm"
                        />
                        <button
                            type="submit"
                            className="w-auto px-4 bg-pink-600 text-white rounded-r-sm"
                            style={{marginLeft:"20px"}}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
