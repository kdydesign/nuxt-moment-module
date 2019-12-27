const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = Axios.create(axiosOptions)
  axios.CancelToken = Axios.CancelToken
  axios.isCancel = Axios.isCancel

  // Extend axios proto
  extendAxiosInstance(axios)

  // Setup interceptors
  <% if (options.debug) { %>setupDebugInterceptor(axios) <% } %>
  <% if (options.credentials) { %>setupCredentialsInterceptor(axios)<% } %>
  <% if (options.progress) { %>setupProgress(axios) <% } %>
  <% if (options.retry) { %>axiosRetry(axios, <%= serialize(options.retry) %>)<% } %>

  return axios
}

export default (ctx, inject) {

	const moment = createAxiosInstance(axiosOptions)

	ctx.$moment = moment
	inject('moment', moment)
}