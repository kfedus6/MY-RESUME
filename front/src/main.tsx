import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { setupStore } from './store/store'
import { Provider } from 'react-redux'
import './index.css'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
