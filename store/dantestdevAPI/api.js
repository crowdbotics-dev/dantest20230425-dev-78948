import axios from "axios"
const dantestdevAPI = axios.create({
  baseURL: "https://dantest20230425-dev-78948-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_gatos_list(payload) {
  return dantestdevAPI.get(`/api/v1/gatos/`)
}
function api_v1_gatos_create(payload) {
  return dantestdevAPI.post(`/api/v1/gatos/`, payload.data)
}
function api_v1_login_create(payload) {
  return dantestdevAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return dantestdevAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return dantestdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return dantestdevAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return dantestdevAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return dantestdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_personas_list(payload) {
  return dantestdevAPI.get(`/api/v1/personas/`)
}
function api_v1_personas_create(payload) {
  return dantestdevAPI.post(`/api/v1/personas/`, payload.data)
}
function rest_auth_login_create(payload) {
  return dantestdevAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return dantestdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return dantestdevAPI.post(`/rest-auth/logout/`)
}
function api_v1_gatos_retrieve(payload) {
  return dantestdevAPI.get(`/api/v1/gatos/${payload.id}/`)
}
function api_v1_gatos_update(payload) {
  return dantestdevAPI.put(`/api/v1/gatos/${payload.id}/`, payload.data)
}
function api_v1_gatos_partial_update(payload) {
  return dantestdevAPI.patch(`/api/v1/gatos/${payload.id}/`, payload.data)
}
function api_v1_gatos_destroy(payload) {
  return dantestdevAPI.delete(`/api/v1/gatos/${payload.id}/`)
}
function api_v1_personas_retrieve(payload) {
  return dantestdevAPI.get(`/api/v1/personas/${payload.id}/`)
}
function api_v1_personas_update(payload) {
  return dantestdevAPI.put(`/api/v1/personas/${payload.id}/`, payload.data)
}
function api_v1_personas_partial_update(payload) {
  return dantestdevAPI.patch(`/api/v1/personas/${payload.id}/`, payload.data)
}
function api_v1_personas_destroy(payload) {
  return dantestdevAPI.delete(`/api/v1/personas/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return dantestdevAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return dantestdevAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return dantestdevAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return dantestdevAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return dantestdevAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_gatos_list,
  api_v1_gatos_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_personas_list,
  api_v1_personas_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_gatos_retrieve,
  api_v1_gatos_update,
  api_v1_gatos_partial_update,
  api_v1_gatos_destroy,
  api_v1_personas_retrieve,
  api_v1_personas_update,
  api_v1_personas_partial_update,
  api_v1_personas_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
