import axios from 'axios';
// import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

axios.defaults.baseURL = 'http://localhost:6741'

axios.interceptors.request.use((config) => {
	if (store.getters.token) {
		config.headers['x-token'] = getToken();
	}
	return config;
});

export default axios;