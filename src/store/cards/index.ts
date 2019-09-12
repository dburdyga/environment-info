import {Module} from 'vuex';
import {SET_CARDS} from './mutation-types';
import {ICard} from '@/shared/interfaces/ICard';
import {FETCH_CARDS} from '@/store/cards/action-types';
import {CARDS} from '@/store/cards/getter-types';

interface ICardState {
  cards: ICard[];
}

const cardState: Module<ICardState, {}> = {
  state: {
    cards: []
  },
  actions: {
    [FETCH_CARDS]({commit}) {
      return fetch('environments.json')
        .then(res => res.json())
        .then(cards => commit('SET_CARDS', cards))
        .catch(err => console.log(err));
    }
  },
  mutations: {
    [SET_CARDS](state, cards: ICard[]) {
      state.cards = cards;
    }
  },
  getters: {
    [CARDS]: state => state.cards
  }
};

export default cardState;
