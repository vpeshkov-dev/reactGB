// import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { format } from 'date-fns'
import MessageList from './MessageList'
import ChatList from './Chat-list/ChatList'

import styles from './chat.module.scss'

function Chat() {
    // const [chatData, setChatData] = useState({})
    // const [activeRoom, setActiveRoom] = useState('John')

    // const getData = () => ({
    //     Jonh: {
    //         id: '1',
    //         messages: [
    //             {
    //                 messageText: 'Cообщение #1',
    //                 messageAuthor: 'Y',
    //                 id: Date.now(),
    //                 messageDate: format(
    //                     new Date(2021, 0, 1, 20, 10, 14),
    //                     'dd.MM HH:mm:ss'
    //                 ),
    //             },
    //             {
    //                 messageText: 'Cообщение #2',
    //                 messageAuthor: 'Y',
    //                 messageDate: format(
    //                     new Date(2021, 2, 23, 20, 13, 34),
    //                     'dd.MM HH:mm:ss'
    //                 ),
    //                 id: Date.now() + 1,
    //             },
    //             {
    //                 messageText: 'Cообщение #3',
    //                 messageAuthor: 'Y',
    //                 id: Date.now() + 2,
    //                 messageDate: format(
    //                     new Date(2022, 0, 1, 20, 10, 14),
    //                     'dd.MM HH:mm:ss'
    //                 ),
    //             },
    //         ],
    //     },

    //     Kate: {
    //         id: '2',
    //         messages: [],
    //     },
    //     Alex: {
    //         id: '3',
    //         messages: [],
    //     },
    // })

    // const getActiveRoom = (name) => setActiveRoom(name)

    // const addMessage = (message) => {
    //     const messages = [...chatData[activeRoom].messages, message]
    //     const obj = { ...chatData }
    //     obj[activeRoom].messages = messages
    //     setChatData(obj)
    // }

    // useEffect(() => {
    //     let timeOut = null
    //     if (chatData[activeRoom]) {
    //         const { messages } = chatData[activeRoom]

    //         if (messages[messages.length - 1].messageAuthor === 'Y') {
    //             timeOut = setTimeout(() => {
    //                 const botMessage = {
    //                     messageText: 'bot',
    //                     messageAuthor: 'R',
    //                     id: Date.now() + 2,
    //                     messageDate: format(
    //                         new Date(2022, 0, 1, 20, 10, 14),
    //                         'dd.MM HH:mm:ss'
    //                     ),
    //                 }
    //                 addMessage(botMessage)
    //             }, 1500)
    //         }
    //     }
    //     return () => {
    //         clearTimeout(timeOut)
    //     }
    // }, [chatData])

    // useEffect(() => {
    //     setChatData(getData())
    // }, [])

    return (
        <div className={styles.app}>
            <ChatList />
            <div className={styles.app__right}>
                <Routes>
                    <Route path="/" element={<div>Выберите чат</div>} />
                    <Route path=":roomID" element={<MessageList />} />
                    <Route path="*" element={<div>Чат не найден</div>} />
                </Routes>
            </div>
        </div>
    )
}

export default Chat
