(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13227647"],{"03d7":function(t,a,s){var e=s("24fb");a=e(!1),a.push([t.i,".ul-enter-active,.ul-leave-active{-webkit-transition:all .5s;transition:all .5s}.ul-enter,.ul-leave-to{height:0}",""]),t.exports=a},"0c7c":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("DashNavbar"),s("div",{staticClass:"container-fluid mt-8"},[s("div",{staticClass:"row"},[s("DashSidebar"),s("main",{staticClass:"col-md-9 px-3 ml-0 ml-md-5",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},i=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-nowrap p-2 shadow"},[s("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("後台管理系統")]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])])])},r=[],l={name:"Navbar",methods:{signout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),a=this;this.$http.post(t).then((function(t){t.data.success&&a.$router.push("/")}))}}},o=l,c=s("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null),d=u.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"allsideBar"},[s("div",{staticClass:"sidebarAdmin bigSizeUse"},[s("span",[t._v("管理列表")]),s("ul",{staticClass:"sidebar_ul"},[s("li",{staticClass:"sidebar_li"},[s("router-link",{attrs:{to:"/admin/products"}},[t._v(" 產品列表 ")])],1),s("li",{staticClass:"sidebar_li"},[s("router-link",{attrs:{to:"/admin/coupons"}},[t._v(" 優惠券列表 ")])],1),s("li",{staticClass:"sidebar_li"},[s("router-link",{attrs:{to:"/admin/orders"}},[t._v(" 訂單列表 ")])],1)])])])},p=[],b={name:"Sidebar",data:function(){return{show:!0}}},h=b,f=(s("de73"),Object(c["a"])(h,v,p,!1,null,null,null)),m=f.exports,_={components:{DashNavbar:d,DashSidebar:m}},w=_,C=Object(c["a"])(w,e,i,!1,null,null,null);a["default"]=C.exports},7580:function(t,a,s){var e=s("03d7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=s("499e").default;i("2b530cc4",e,!0,{sourceMap:!1,shadowMode:!1})},de73:function(t,a,s){"use strict";var e=s("7580"),i=s.n(e);i.a}}]);
//# sourceMappingURL=chunk-13227647.f78e090d.js.map