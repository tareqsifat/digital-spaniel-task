import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Navigation state
  mobileMenuOpen: false,
  activeNavItem: 'home',
  
  // Slider states
  activeTestimonial: 0,
  activeCaseStudy: 0,
  activeProject: 0,
  
  // Modal states
  modalOpen: false,
  modalContent: null,
  
  // Loading states
  pageLoading: false,
  
  // Scroll state
  scrollDirection: 'up',
  headerVisible: true,
  
  // Theme
  darkMode: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Navigation actions
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setActiveNavItem: (state, action) => {
      state.activeNavItem = action.payload;
    },
    
    // Slider actions
    setActiveTestimonial: (state, action) => {
      state.activeTestimonial = action.payload;
    },
    setActiveCaseStudy: (state, action) => {
      state.activeCaseStudy = action.payload;
    },
    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
    
    // Modal actions
    openModal: (state, action) => {
      state.modalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
      state.modalContent = null;
    },
    
    // Loading actions
    setPageLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
    
    // Scroll actions
    setScrollDirection: (state, action) => {
      state.scrollDirection = action.payload;
    },
    setHeaderVisible: (state, action) => {
      state.headerVisible = action.payload;
    },
    
    // Theme actions
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveNavItem,
  setActiveTestimonial,
  setActiveCaseStudy,
  setActiveProject,
  openModal,
  closeModal,
  setPageLoading,
  setScrollDirection,
  setHeaderVisible,
  toggleDarkMode,
  setDarkMode,
} = uiSlice.actions;

export default uiSlice.reducer;

