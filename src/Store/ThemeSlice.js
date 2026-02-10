import { createSlice } from "@reduxjs/toolkit";

// Get saved theme from localStorage or default to 'light'
const savedTheme = localStorage.getItem('theme') || 'light';

// Apply theme to document on initial load
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
} else {
  document.documentElement.classList.remove('dark-theme');
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: savedTheme, // 'light' or 'dark'
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      
      // Update localStorage
      localStorage.setItem('theme', state.mode);
      
      // Update document class
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    },
    setTheme(state, action) {
      state.mode = action.payload;
      
      // Update localStorage
      localStorage.setItem('theme', state.mode);
      
      // Update document class
      if (state.mode === 'dark') {
        document.documentElement.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark-theme');
      }
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice;
