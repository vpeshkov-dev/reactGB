import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ChatPage from '../../pages/chatPage/ChatPage'
import ProfilePage from '../../pages/profilePage'
import Header from './header'
import store from '../../store/create-store'

import styles from './container.module.scss'

function App() {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <Header />
                <Routes>
                    <Route path="/" element={<div>Main</div>} />
                    <Route path="*" element={<div>404</div>} />
                    <Route path="chat/*" element={<ChatPage />} />
                    <Route path="profile/*" element={<ProfilePage />} />
                </Routes>
            </div>
        </Provider>
    )
}

export default App
