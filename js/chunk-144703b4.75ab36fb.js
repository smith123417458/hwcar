(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144703b4"],{"0052":function(t,a,i){var e=i("7c1b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=i("499e").default;r("a01514d8",e,!0,{sourceMap:!1,shadowMode:!1})},"7c1b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".not-allowed[data-v-0d517040]{cursor:default}.bar[data-v-0d517040]{text-decoration:line-through}.buybox[data-v-0d517040]{position:fixed;top:64px;right:30px;height:150px;width:230px;background-size:cover;background-position:50%;opacity:0}.badge[data-v-0d517040]{font-size:125%}",""]),t.exports=a},"8a20":function(t,a,i){"use strict";var e=i("0052"),r=i.n(e);r.a},9588:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container mt-5"},[i("br"),i("nav",{attrs:{"aria-label":"breadcrumb"}},[i("ol",{staticClass:"breadcrumb bg-light"},[i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{attrs:{to:"/product"}},[t._v("產品列表")])],1),i("li",{staticClass:"breadcrumb-item"},[i("router-link",{staticClass:"text-primary",attrs:{to:{path:"/product",query:{category:t.product.category}}}},[t._v(t._s(t.product.category))])],1),i("li",{staticClass:"breadcrumb-item active"},[t._v(" "+t._s(t.product.title)+" ")])])]),i("div",{staticClass:"row mb-5"},[i("div",{staticClass:"col-lg-6"},[i("zoom-on-hover",{attrs:{"img-normal":t.product.imageUrl,scale:1.5}})],1),i("div",{staticClass:"col-lg-6 d-flex flex-column"},[i("h2",[t._v(t._s(t.product.title))]),t.product.price?t._e():i("div",{staticClass:"h5 mt-4 mb-3"},[t._v("NT"+t._s(t._f("currency")(t.product.origin_price)))]),t.product.price?i("div",{staticClass:"h6 text-secondary mt-4 bar"},[t._v("原價 NT"+t._s(t._f("currency")(t.product.origin_price))+"/天")]):t._e(),t.product.price?i("p",{staticClass:"h4 text-right text-danger"},[t._v("特價 NT "+t._s(t._f("currency")(t.product.price))+"/天")]):t._e(),i("p",{staticClass:"border-bottom mb-5"}),i("p",{staticClass:"mb-5 font-weight-bold h4",staticStyle:{"line-height":"1.5"}},[t._v(t._s(t.product.description))]),i("p",{staticClass:"mb-5  h6",staticStyle:{"line-height":"1.0"},domProps:{innerHTML:t._s(t.product.content)}}),i("div",{staticClass:"row justify-content-between"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control my-3",attrs:{name:""},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.qty=a.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("請選擇天數")]),t._l(10,(function(a){return i("option",{key:a,domProps:{value:a}},[t._v("租 "+t._s(a)+" "+t._s(t.product.unit))])}))],2),i("router-link",{staticClass:"badge badge-warning float-right",attrs:{to:"/coupongame"}},[t._v(" 折價卷適用 ")]),i("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(a){return t.addToCart(t.product.id,a)}}},[t._v(" 加入購物車 ")]),i("a",{staticClass:"btn btn-link p-0",class:{"d-none":t.isFavorite},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addFavorite(t.product)}}},[i("i",{staticClass:"fas fa-heart"}),t._v(" 收藏商品 ")]),i("a",{staticClass:"btn btn-link p-0",class:{"d-none":!t.isFavorite},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeFavorite(t.product,!1)}}},[i("i",{staticClass:"fas fa-heart-broken"}),t._v(" 取消收藏 ")]),t.currentcar?i("div",{staticClass:"buybox",style:{backgroundImage:"url("+t.product.imageUrl+")"}}):t._e(),i("img",{staticClass:"img-fluid mt-5",attrs:{src:"https://i.imgur.com/v8goziO.jpg",width:"600px"}}),i("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur doloribus, laudantium hic perferendis necessitatibus dolorem ipsam ")]),i("img",{staticClass:"img-fluid",attrs:{src:"https://i.imgur.com/bLfekvQ.jpg",width:"600px"}}),i("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rem sed vitae facilis modi maxime veniam similique eveniet. ")])],1)])])])},r=[],o=(i("99af"),i("4160"),i("159b"),i("5530")),s=i("2f62"),c=i("cffa"),n={data:function(){return{product:{},qty:1,currentcar:null,isFavorite:!1}},computed:Object(o["a"])({},Object(s["c"])("favoriteModules",["favorites"])),methods:{getProduct:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("asdfg1","/product/").concat(this.$route.params.productId);axios.get(a).then((function(a){t.product=a.data.product})),t.favorites.forEach((function(a){t.product.id===a.id&&(t.isFavorite=!0)}))},addFavorite:function(t){this.$store.dispatch("favoriteModules/addToFavorite",t),this.isFavorite=!0},removeFavorite:function(t,a){this.$store.dispatch("favoriteModules/removeFavorite",{favoriteItem:t,delall:a}),this.isFavorite=!1},addToCart:function(t,a){var i=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("asdfg1","/cart"),r={product_id:t,qty:i.qty};this.currentcar=t,this.$nextTick((function(){c["a"].from(".buybox",.8,{left:$(a.target).offset().left,top:$(a.target).offset().top,opacity:1})})),axios.post(e,{data:r}).then((function(){i.$store.dispatch("getCarts")}))}},created:function(){this.productId=this.$route.params.productId,this.getProduct()},watch:{$route:function(){this.productId=this.$route.params.productId,this.getProduct()}}},u=n,d=(i("8a20"),i("2877")),l=Object(d["a"])(u,e,r,!1,null,"0d517040",null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-144703b4.75ab36fb.js.map