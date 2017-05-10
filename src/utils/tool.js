"use strict"

import store from '../vuex/store';

// toast提示信息
export const toast = str => {
	store.dispatch('showToast', true);
	store.dispatch('toastMsg',str);
	setTimeout(() => {
		store.dispatch('showToast', false); 
	},1500);
}