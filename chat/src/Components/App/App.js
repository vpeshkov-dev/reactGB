import { Routes, Route } from 'react-router-dom'
import ChatPage from '../../pages/chatPage/ChatPage'
import Header from './header'

import styles from './container.module.scss'

function App() {
    return (
        <div className={styles.container}>
            <Header />
            <Routes>
                <Route path="/" element={<div>Main</div>} />
                <Route path="*" element={<div>404</div>} />
                <Route path="chat/*" element={<ChatPage />} />
            </Routes>
        </div>
    )
}

export default App
