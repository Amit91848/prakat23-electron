const storagePrefix = 'prakat23_';

const storage = {
  getToken: () => {
    // return JSON.parse(
    return window.localStorage.getItem(`${storagePrefix}token`) as string;
    // );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  getUser: () => {
    // return JSON.parse(
    return window.localStorage.getItem(`${storagePrefix}user`) as string;
    // );
  },
  setUser: (userId: string) => {
    window.localStorage.setItem(`${storagePrefix}user`, userId);
  },
  remove: (item: string) => {
    window.localStorage.removeItem(`${storagePrefix}${item}`);
  },
};

export default storage;
