// Zustand store for user state (TODO: implement)
// import create from 'zustand';

// export const useUserStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
//   logout: () => set({ user: null }),
// }));

// Auth store placeholder
export const useAuthStore = () => ({
  user: null,
  isAuthenticated: false,
});
