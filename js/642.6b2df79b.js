"use strict";(self["webpackChunklexar_cli"]=self["webpackChunklexar_cli"]||[]).push([[642],{5970:function(t,e,a){a.r(e),a.d(e,{default:function(){return tt}});var i=a(6252);const s={class:"product-layout container"},o={class:"sticky-parent"},n={style:{display:"flex","flex-direction":"column","align-items":"center"}};function r(t,e,a,r,l,c){const p=(0,i.up)("NavBar"),u=(0,i.up)("SwiperComponent"),d=(0,i.up)("SideBar"),g=(0,i.up)("ProductCard"),h=(0,i.up)("Pagination"),m=(0,i.up)("FooterBar");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(p,{"is-dark":l.isDark},null,8,["is-dark"]),(0,i.Wm)(u),(0,i._)("div",s,[(0,i._)("div",o,[(0,i.Wm)(d)]),(0,i._)("div",n,[(0,i.Wm)(g),(0,i.Wm)(h,{style:{"padding-top":"5px"}})])]),(0,i.Wm)(m)],64)}var l=a(7061),c=a(3216),p=a(7797);const u={class:"filler"},d=(0,i._)("img",{class:"img-fluid-nb",src:l,alt:""},null,-1),g=(0,i._)("img",{class:"img-fluid-nb",src:c,alt:""},null,-1),h=(0,i._)("img",{class:"img-fluid-nb",src:p,alt:""},null,-1);function m(t,e,a,s,o,n){const r=(0,i.up)("swiper-slide"),l=(0,i.up)("swiper");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(l,{style:{"max-height":"200px"},modules:o.modules,"slides-per-view":1,"space-between":0,navigation:"",autoplay:""},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[d])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[g])),_:1}),(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[h])),_:1})])),_:1},8,["modules"])])}var _=a(3181),v=a(1911),f=a(9963);const w={components:{Swiper:_.tq,SwiperSlide:_.o5},data(){return{modules:[v.W_,v.tl,v.pt],filler:""}},mounted(){const t=new ResizeObserver((t=>{t.forEach((t=>{this.filler=t.contentRect.height+"px"}))}));t.observe(document.querySelector("#nBar"))}},y=()=>{(0,f.sj)((t=>({"3775589c":t.filler})))},b=w.setup;w.setup=b?(t,e)=>(y(),b(t,e)):y;var k=w,C=a(3744);const x=(0,C.Z)(k,[["render",m]]);var D=x,$=a(3577);const P={key:0,"aria-label":"Page navigation example"},L={class:"pagination"},S=(0,i._)("span",{"aria-hidden":"true"},"«",-1),W=[S],Z=["onClick"],q=(0,i._)("span",{"aria-hidden":"true"},"»",-1),B=[q];function A(t,e,a,s,o,n){return o.isDiplay?((0,i.wg)(),(0,i.iD)("nav",P,[(0,i._)("ul",L,[(0,i._)("li",{class:(0,$.C_)(["page-item",o.pagination.has_pre?"enabled":"disabled"])},[(0,i._)("a",{class:"page-link",href:"","aria-label":"Previous",onClick:e[0]||(e[0]=(0,f.iM)((t=>n.pageTrans(o.pagination.current_page-1)),["prevent"]))},W)],2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.pagination.total_pages,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,$.C_)(["page-item",{active:t===o.pagination.current_page}]),key:t},[(0,i._)("a",{class:"page-link",href:"",onClick:(0,f.iM)((e=>n.pageTrans(t)),["prevent"])},(0,$.zw)(t),9,Z)],2)))),128)),(0,i._)("li",{class:(0,$.C_)(["page-item",o.pagination.has_next?"enabled":"disabled"])},[(0,i._)("a",{class:"page-link",href:"","aria-label":"Next",onClick:e[1]||(e[1]=(0,f.iM)((t=>n.pageTrans(o.pagination.current_page+1)),["prevent"]))},B)],2)])])):(0,i.kq)("",!0)}var T=a(4902),U={data(){return{pagination:{},isDiplay:!0}},created(){T.Z.on("pagination",(t=>{!1===t?this.isDiplay=!1:this.pagination=t})),this.$watch((()=>this.$route.params),((t,e)=>{console.log(this.$route.query.page),void 0!==this.$route.query.page?this.isDiplay=!0:this.isDiplay=!1}))},methods:{pageTrans(t){T.Z.emit("changePage",t)}}};const H=(0,C.Z)(U,[["render",A]]);var M=H;const z={class:"card-layout"},I={class:"card-head"},Y=["src"],R={class:"card-body"},E={class:"card-title"},F={class:"botton-group"},K=(0,i._)("button",{class:"learn-more"},"Learn More",-1),N=["onClick"];function j(t,e,a,s,o,n){const r=(0,i.up)("LoadingIt"),l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r,{active:o.isLoading},null,8,["active"]),(0,i._)("div",null,[(0,i._)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.displayList,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"card",key:e},[(0,i._)("div",I,[(0,i._)("img",{src:t.imageUrl,alt:""},null,8,Y)]),(0,i._)("div",R,[(0,i._)("h3",E,(0,$.zw)(t.title),1),(0,i._)("p",null,"Hot Price: $"+(0,$.zw)(t.price),1),(0,i._)("div",F,[(0,i.Wm)(l,{to:`/products/${t.id}`},{default:(0,i.w5)((()=>[K])),_:2},1032,["to"]),(0,i._)("button",{class:"add2cart",onClick:e=>n.add2CartSingle(t.id)},"Add Cart",8,N)])])])))),128))])])],64)}var G={data(){return{productList:"",searchResult:"",displayList:"",pagination_data:{},isLoading:!0}},created(){T.Z.on("changePage",(t=>{this.getProducts(t)})),T.Z.on("searching",(t=>{this.getProducts("All",t)})),this.$watch((()=>this.$route.params),((t,e)=>{void 0!==this.$route.query.category&&this.getProducts(this.$route.query.category),"1"===this.$route.query.page&&this.getProducts(parseInt(this.$route.query.page))}))},mounted(){this.getProducts(1)},beforeUnmount(){T.Z.off("searching")},methods:{getProducts(t,e){let a="";"All"===t&&(a="https://vue3-course-api.hexschool.io/v2/api/williamone/products/all"),"All"!==t&&"number"!==typeof t&&(a=`https://vue3-course-api.hexschool.io/v2/api/williamone/products?category=${t}`,this.$router.push({path:"/products",query:{category:t}})),"number"===typeof t&&(a=`https://vue3-course-api.hexschool.io/v2/api/williamone/products?page=${t}`),this.$http.get(a).then((a=>{this.productList=a.data.products,this.displayList=a.data.products,"number"===typeof t&&(this.pagination_data=a.data.pagination,T.Z.emit("pagination",a.data.pagination)),void 0!==e&&this.searchProduct(e),this.isLoading=!1})).catch((t=>{console.dir(t)}))},add2CartSingle(t){console.log(t),this.$http.get("https://vue3-course-api.hexschool.io/v2/api/williamone/cart").then((()=>{const e={product_id:t,qty:1};this.$http.post("https://vue3-course-api.hexschool.io/v2/api/williamone/cart",{data:e}).then((t=>{console.log(t),T.Z.emit("cartToggle"),this.$swal.fire({title:"Item added!",icon:"success",showCancelButton:!1,confirmButtonColor:"#128c9f",confirmButtonText:"Got it!"})})).catch((t=>{console.dir(t)}))}))},searchProduct(t){""===t&&this.getProducts(1);const e=t.split(" ");e.forEach((t=>{const e=this.productList.filter((e=>e.title.toUpperCase().includes(t.toUpperCase())||e.description.toUpperCase().includes(t.toUpperCase())));this.displayList=[...new Set(e)]})),T.Z.emit("pagination",!1)}}};const O=(0,C.Z)(G,[["render",j]]);var V=O,J=a(3151),Q={data(){return{isDark:!1,productList:"",pagination_bg:{}}},components:{SwiperComponent:D,ProductCard:V,SideBar:J.Z,Pagination:M},methods:{},mounted(){const t=document.body;t.setAttribute("overflow","auto","important"),t.removeAttribute("overflow")}};const X=(0,C.Z)(Q,[["render",r],["__scopeId","data-v-2d240aec"]]);var tt=X},7061:function(t,e,a){t.exports=a.p+"img/CFast_Desktop_2048x.42ead0b7.webp"},3216:function(t,e,a){t.exports=a.p+"img/MicroSD_Desktop_077568c1-23df-427b-b3dd-f38863d44908_2048x.7460e4b6.webp"},7797:function(t,e,a){t.exports=a.p+"img/SDV90_Desktop_2048x.4e9bfe7f.webp"}}]);
//# sourceMappingURL=642.6b2df79b.js.map