import Vue from 'vue';
export default {
	bind: function(el){
		// console.log(this.el);
		// // console.log(1,el.querySelectorAll('img'));
	 //    el.onclick = function(){
	 //    	// console.log(1);
	 //    }
	},
	inserted: (el, binding, vnode, oldVnode) => {
		const imgs = el.querySelectorAll('img');
		const list = [];

		for (let i = 0; i < imgs.length; i++) {
		    list.push({
		        src : imgs[i].src,
		        w : imgs[i].naturalWidth,
		        h : imgs[i].naturalHeight
		    })
		}
		// console.log(Vue.$preview);

		for (let i = 0; i < imgs.length; i++) {
			imgs[i].classList.add('preview-img')
			imgs[i].onclick = function(){
		    	Vue.$preview.open(i, list);
		    }
		}

	},
	// update: (el, binding, vnode, oldVnode) => {
	// 	console.log(3,el.querySelectorAll('img'));
	// },
	// componentUpdated: (el, binding, vnode, oldVnode) => {
	// 	console.log(4,el.querySelectorAll('img'));
	// },
	// unbind: (el, binding, vnode, oldVnode) => {
	// 	console.log(5,el.querySelectorAll('img'));
	// },

}
