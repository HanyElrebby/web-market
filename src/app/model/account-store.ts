import {State, Store} from '@ngrx/store';

export const accountStore: State<any> =  {
  state: {
    logon: false,
    userIdentity: null,
    authenticated: false,
    ribbonOnProfiles: '',
    activeProfiles: '',
  },
  getters: {
    logon: state => state.logon,
    account: state => state.userIdentity,
    authenticated: state => state.authenticated,
    activeProfiles: state => state.activeProfiles,
    ribbonOnProfiles: state => state.ribbonOnProfiles,
  },
  mutations: {
    authenticate(state: any): void{
      state.logon = true;
    },
    authenticated(state: any, identity: any): void{
      state.userIdentity = identity;
      state.authenticated = true;
      state.logon = false;
    },
    logout(state: any): void{
      state.userIdentity = null;
      state.authenticated = false;
      state.logon = false;
    },
    setActiveProfiles(state: any, profile: any): void{
      state.activeProfiles = profile;
    },
    setRibbonOnProfiles(state: any, ribbon: any): void{
      state.ribbonOnProfiles = ribbon;
    },
  },
};
