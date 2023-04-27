import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_gatos_list = createAsyncThunk(
  "gatos/api_v1_gatos_list",
  async payload => {
    const response = await apiService.api_v1_gatos_list(payload)
    return response.data
  }
)
export const api_v1_gatos_create = createAsyncThunk(
  "gatos/api_v1_gatos_create",
  async payload => {
    const response = await apiService.api_v1_gatos_create(payload)
    return response.data
  }
)
export const api_v1_gatos_retrieve = createAsyncThunk(
  "gatos/api_v1_gatos_retrieve",
  async payload => {
    const response = await apiService.api_v1_gatos_retrieve(payload)
    return response.data
  }
)
export const api_v1_gatos_update = createAsyncThunk(
  "gatos/api_v1_gatos_update",
  async payload => {
    const response = await apiService.api_v1_gatos_update(payload)
    return response.data
  }
)
export const api_v1_gatos_partial_update = createAsyncThunk(
  "gatos/api_v1_gatos_partial_update",
  async payload => {
    const response = await apiService.api_v1_gatos_partial_update(payload)
    return response.data
  }
)
export const api_v1_gatos_destroy = createAsyncThunk(
  "gatos/api_v1_gatos_destroy",
  async payload => {
    const response = await apiService.api_v1_gatos_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gatosSlice = createSlice({
  name: "gatos",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_gatos_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gatos_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gatos_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_gatos_list,
  api_v1_gatos_create,
  api_v1_gatos_retrieve,
  api_v1_gatos_update,
  api_v1_gatos_partial_update,
  api_v1_gatos_destroy,
  slice: gatosSlice
}
