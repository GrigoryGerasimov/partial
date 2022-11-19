import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store/store.js'
import App from './app/App.jsx'
import { FormProvider } from './app/hooks/useForm.jsx'
import { MockapiServiceProvider } from './app/hooks/useMockapiService.jsx'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<MockapiServiceProvider>
				<FormProvider>
					<React.StrictMode>
						<App />
					</React.StrictMode>
				</FormProvider>
			</MockapiServiceProvider>
		</Provider>
	</BrowserRouter>,
)
