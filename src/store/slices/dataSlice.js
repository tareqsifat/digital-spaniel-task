import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockData } from '../../data/mockData';

// Simulate API calls with delays
export const fetchTestimonials = createAsyncThunk(
  'data/fetchTestimonials',
  async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockData.testimonials;
  }
);

export const fetchCaseStudies = createAsyncThunk(
  'data/fetchCaseStudies',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockData.caseStudies;
  }
);

export const fetchProjects = createAsyncThunk(
  'data/fetchProjects',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockData.projects;
  }
);

export const fetchServices = createAsyncThunk(
  'data/fetchServices',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockData.services;
  }
);

export const fetchTeamMembers = createAsyncThunk(
  'data/fetchTeamMembers',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return mockData.teamMembers;
  }
);

export const fetchGalleryImages = createAsyncThunk(
  'data/fetchGalleryImages',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockData.galleryImages;
  }
);

const initialState = {
  testimonials: {
    data: [],
    loading: false,
    error: null,
  },
  caseStudies: {
    data: [],
    loading: false,
    error: null,
  },
  projects: {
    data: [],
    loading: false,
    error: null,
  },
  services: {
    data: [],
    loading: false,
    error: null,
  },
  teamMembers: {
    data: [],
    loading: false,
    error: null,
  },
  galleryImages: {
    data: [],
    loading: false,
    error: null,
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearError: (state, action) => {
      const { dataType } = action.payload;
      if (state[dataType]) {
        state[dataType].error = null;
      }
    },
  },
  extraReducers: (builder) => {
    // Testimonials
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.testimonials.loading = true;
        state.testimonials.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.testimonials.loading = false;
        state.testimonials.data = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.testimonials.loading = false;
        state.testimonials.error = action.error.message;
      });

    // Case Studies
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.caseStudies.loading = true;
        state.caseStudies.error = null;
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.caseStudies.loading = false;
        state.caseStudies.data = action.payload;
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.caseStudies.loading = false;
        state.caseStudies.error = action.error.message;
      });

    // Projects
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.projects.loading = true;
        state.projects.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.projects.loading = false;
        state.projects.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.projects.loading = false;
        state.projects.error = action.error.message;
      });

    // Services
    builder
      .addCase(fetchServices.pending, (state) => {
        state.services.loading = true;
        state.services.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.services.loading = false;
        state.services.data = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.services.loading = false;
        state.services.error = action.error.message;
      });

    // Team Members
    builder
      .addCase(fetchTeamMembers.pending, (state) => {
        state.teamMembers.loading = true;
        state.teamMembers.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action) => {
        state.teamMembers.loading = false;
        state.teamMembers.data = action.payload;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.teamMembers.loading = false;
        state.teamMembers.error = action.error.message;
      });

    // Gallery Images
    builder
      .addCase(fetchGalleryImages.pending, (state) => {
        state.galleryImages.loading = true;
        state.galleryImages.error = null;
      })
      .addCase(fetchGalleryImages.fulfilled, (state, action) => {
        state.galleryImages.loading = false;
        state.galleryImages.data = action.payload;
      })
      .addCase(fetchGalleryImages.rejected, (state, action) => {
        state.galleryImages.loading = false;
        state.galleryImages.error = action.error.message;
      });
  },
});

export const { clearError } = dataSlice.actions;
export default dataSlice.reducer;

