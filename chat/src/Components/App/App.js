import { useState, useEffect } from 'react'
import { format } from 'date-fns'

import MessageList from './MessageList'
import ChatInput from './ChatInput'
import ChatList from './Chat-list/ChatList'

import styles from './app.module.scss'

function App() {
    const [messagesData, setMessagesData] = useState([])
    const [chatsData, setChatsData] = useState([])

    const getMessagesData = () => [
        {
            messageText: 'Cообщение #1',
            messageAuthor: 'Y',
            id: Date.now(),
            messageDate: format(
                new Date(2021, 0, 1, 20, 10, 14),
                'dd.MM HH:mm:ss'
            ),
        },
        {
            messageText: 'Cообщение #2',
            messageAuthor: 'Y',
            messageDate: format(
                new Date(2021, 2, 23, 20, 13, 34),
                'dd.MM HH:mm:ss'
            ),
            id: Date.now() + 1,
        },
        {
            messageText: 'Cообщение #3',
            messageAuthor: 'Y',
            id: Date.now() + 2,
            messageDate: format(
                new Date(2022, 0, 1, 20, 10, 14),
                'dd.MM HH:mm:ss'
            ),
        },
    ]

    const getChatsData = () => [
        {
            chat: 'Chat #1',
            id: 1,
        },
        {
            chat: 'Chat #2',
            id: 2,
        },
        {
            chat: 'Chat #3',
            id: 3,
        },
    ]

    const addMessageData = (messageData) => {
        setMessagesData([...messagesData, messageData])
    }

    const sendMessageByBot = () => {
        const messegeByBot = {
            messageText: 'autotext',
            messageAuthor: 'R',
            messageDate: format(new Date(), 'dd.MM HH:mm:ss'),
            id: Date.now(),
        }

        setMessagesData([...messagesData, messegeByBot])
    }

    useEffect(() => {
        const oldMessagesData = getMessagesData()
        setMessagesData([...messagesData, ...oldMessagesData])
        const oldChats = getChatsData()
        setChatsData([...chatsData, ...oldChats])
    }, [])

    useEffect(() => {
        let sendMessageTimeOut = null
        if (messagesData.length) {
            const { messageAuthor } = messagesData[messagesData.length - 1]
            if (messageAuthor !== 'R') {
                sendMessageTimeOut = setTimeout(sendMessageByBot, 1500)
            }
        }

        return () => {
            clearTimeout(sendMessageTimeOut)
        }
    }, [messagesData])

    return (
        <div className={styles.app}>
            <ChatList chatsData={chatsData} />
            <div className={styles.app__right}>
                <MessageList messagesData={messagesData} />
                <ChatInput getMessageData={addMessageData} />
            </div>
        </div>
    )
}

export default App
