import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: () => import("../views/index/index"),
		name: "index",
		redirect: "home",
		children:[{
			path: "/home",
			component: () => import("../views/home/index"),
			name: "home",
			meta:{title: '福汇聚_首页'}
		},{
			path: "/product",
			component: () => import("../views/product/index"),
			name: "product",
			meta:{title: '福汇聚_产品中心'}
		},{
			path: "/case",
			component: () => import("../views/case/index"),
			name: "case",
			meta:{title: '福汇聚_案例中心'}
		},{
			path: "/service",
			component: () => import("../views/service/index"),
			name: "service",
			meta:{title: '福汇聚_服务支持'}
		},{
			path: "/about",
			component: () => import("../views/about/index"),
			name: "about",
			meta:{title: '福汇聚_关于我们'}
		}]
	},
];

const router = new VueRouter({
	linkActiveClass: 'active_navBar',
	mode: "hash",
	base: process.env.BASE_URL,
	routes
});

export default router;
