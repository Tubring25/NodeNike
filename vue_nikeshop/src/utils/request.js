import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:6741';

axios.interceptors.request.use((private,config) => {
  if(private) {
    // if (store.getters.token) {
    //   config.headers['n-token'] = getToken();
    // }
  }
	return config;
});

axios.interceptors.response.use( response=>{
	const res = response.data
	if (res.code != 1) {
		Message({
			message: res.data || "Error",
			type: 'error'
		})
		if(res.code ==3) {
			MessageBox.confirm(res.data, '重新登录', {
				confirmButtonText: '确定',
				type: 'warning'
			}).then(() => {
				store.dispatch('user/logout')
				window.location.replace('/login')
			})
		}
		return res
	} else {
		return res
	}
})

export default axios;