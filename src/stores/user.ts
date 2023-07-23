import { defineStore } from 'pinia'

export interface UserStoreInterface {
  id: number,
  email: string,
  username: string,
  firstname: string,
  lastname: string,
  token: string,
  role: {
    id: number,
    role: string,
  }
  created_at: Date,
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as UserStoreInterface,
  }),
  getters: {
    accessToken(state) {
      return state.user;
    }
  },
  actions: {
    setUser(this: any, user: UserStoreInterface) {      
      this.user = user;
      
      sessionStorage.setItem('user', JSON.stringify(this.user));
      return this.user;
    },
    removeUser() {      
      this.user = {} as UserStoreInterface;

      sessionStorage.setItem('user', JSON.stringify({} as UserStoreInterface));
      return this.user;
    },
    initData() {
      // Check if there is data stored in sessionStorage
      const user = JSON.parse(sessionStorage.getItem('user') as string);

      if (user) {
        // Parse the stored data and set it as the state value

        this.user = user;
      }
    },    
  },
  
})
