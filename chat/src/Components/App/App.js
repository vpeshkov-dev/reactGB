import { useState, useEffect } from 'react'

import MessageList from './MessageList'
import ChatInput from './ChatInput'

import styles from './app.module.scss'

function App() {
    const [messagesData, setMessagesData] = useState([])
    const [isShow, setIsShow] = useState(true)

    const getMessagesData = () => [
        {
            messageText: 'Cообщение #1',
            messageAuthor: 'Y',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Date.now(),
        },
        {
            messageText: 'Cообщение #2',
            messageAuthor: 'Y',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Date.now() + 1,
        },
        {
            messageText: 'Cообщение #3',
            messageAuthor: 'Y',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Date.now() + 2,
        },
    ]

    const addMessageData = (messageData) => {
        setMessagesData([...messagesData, messageData])
    }

    const sendMessageByBot = () => {
        const messegeByBot = {
            messageText: 'autotext',
            messageAuthor: 'R',
            messageDate: `${new Date().getDate()}.0${
                new Date().getMonth() + 1
            }  ${new Date().getHours()}:${new Date().getMinutes()}`,
            id: Date.now(),
        }

        setMessagesData([...messagesData, messegeByBot])
    }

    useEffect(() => {
        const oldMessagesData = getMessagesData()
        setMessagesData([...messagesData, ...oldMessagesData])
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
        <div>
            <button type="button" onClick={() => setIsShow(!isShow)}>
                {isShow ? 'Скрыть' : 'Показать'}
            </button>
            {isShow && (
                <div className={styles.app}>
                    <MessageList messagesData={messagesData} />
                    <ChatInput getMessageData={addMessageData} />
                </div>
            )}
        </div>
    )
}

export default App
