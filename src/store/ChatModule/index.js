import firebase from '@/plugins/firebase';

const ChatModule = {
  namespaced: true,
  state: {
    chats: [],
    ref: firebase.database().ref('messages'),
  },
  mutations: {
    setChats(state, chats) {
      state.chats = chats;
    },
  },
  actions: {
    sendMessage({ state, rootGetters }, messageObj) {
      const { message, type } = messageObj;
      const { name } = rootGetters.getUser;
      if (message) {
        state.ref.push({
          username: name,
          message,
          type,
          timestamp: Date.now(),
        });
      }
    },
    loadUserChats({ state, commit }) {
      let chats = [];
      state.ref.on('value', (snapshot) => {
        const chatsData = snapshot.val();
        console.log('chatsData', chatsData);
        const chatsDataList = Object.entries(chatsData);
        chats = chatsDataList && chatsDataList.map(([key, data], index) => ({
          id: index,
          key,
          ...data,
        }));
        commit('setChats', chats);
      });
    },
  },
  getters: {
    getChats(state) {
      return state.chats;
    },
  },
};


export default ChatModule;
