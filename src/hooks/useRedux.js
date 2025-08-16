import { useDispatch, useSelector } from 'react-redux';

// Custom hooks for type safety and convenience
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

// Specific selector hooks for common use cases
export const useTestimonials = () => useAppSelector(state => state.data.testimonials);
export const useCaseStudies = () => useAppSelector(state => state.data.caseStudies);
export const useProjects = () => useAppSelector(state => state.data.projects);
export const useServices = () => useAppSelector(state => state.data.services);
export const useTeamMembers = () => useAppSelector(state => state.data.teamMembers);
export const useGalleryImages = () => useAppSelector(state => state.data.galleryImages);

export const useMobileMenu = () => useAppSelector(state => state.ui.mobileMenuOpen);
export const useActiveNavItem = () => useAppSelector(state => state.ui.activeNavItem);
export const useActiveTestimonial = () => useAppSelector(state => state.ui.activeTestimonial);
export const useActiveCaseStudy = () => useAppSelector(state => state.ui.activeCaseStudy);
export const useActiveProject = () => useAppSelector(state => state.ui.activeProject);
export const useModal = () => useAppSelector(state => ({ 
  isOpen: state.ui.modalOpen, 
  content: state.ui.modalContent 
}));
export const usePageLoading = () => useAppSelector(state => state.ui.pageLoading);
export const useScrollState = () => useAppSelector(state => ({
  direction: state.ui.scrollDirection,
  headerVisible: state.ui.headerVisible
}));
export const useDarkMode = () => useAppSelector(state => state.ui.darkMode);

