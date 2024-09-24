import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Fetching profile
export const fetchProfile = createAsyncThunk("gitUsers", async (profileId) => {
  try {
    const value = JSON.parse(localStorage.getItem("token"));
    const headers = { Authorization: `Bearer ${value.token}` };
    const response = await axios.get(
      `https://lazeez-restaurant-backend.onrender.com/profile/${profileId}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data : "Something went wrong"
    );
  }
});

// Edit profile
export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ profileId, phoneNumber, email }, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      const headers = { Authorization: `Bearer ${token}` };

      const response = await axios.post(
        `https://lazeez-restaurant-backend.onrender.com/edit-profile/${profileId}`,
        { phoneNumber, email },
        { headers }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Something went wrong"
      );
    }
  }
);



const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: [], // Holds profile information
    loading: false, // To track loading state
    error: null, // To hold error messages
    status: "idle", // For tracking the status of editProfile
    user: {}, // Holds user details for editProfile
    address: [], // Holds address details
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Profile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileData = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch profile data";
        state.loading = false;
      })

      // Edit Profile
      .addCase(editProfile.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error when starting to edit
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = { ...state.user, ...action.payload }; // Update user with new data
        state.profileData = { ...state.profileData, ...action.payload }; // Optionally update profileData as well
      })
      .addCase(editProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to edit profile";
      })
  },
});

export default profileSlice.reducer;
