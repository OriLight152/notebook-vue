import{j as l,t as i,y as u,x as _,h as a,u as t,i as d,E as p,z as m,n as g,o,J as f,K as k,L as h,M as v}from"./vendor.346517bc.js";import{u as w,r as b}from"./common.891604f9.js";const x={key:0,class:"absolute w-full h-full flex items-center justify-center z-40 bg-white/40 dark:bg-black/40 select-none back"},y=["src"],M=l({__name:"App",setup(V){const n=w(),{networkLoading:r,isDarkMode:e}=i(n);return u(e,()=>{localStorage.setItem("darkMode",String(e.value))}),_(()=>{(localStorage.getItem("darkMode")||"false")=="true"&&(e.value=!0)}),(C,S)=>{const c=f("RouterView");return o(),a("div",{class:g(["relative w-[100vw] h-[100vh]",t(e)?"dark":""])},[t(r)?(o(),a("div",x,[d("img",{class:"w-20 h-20",src:t(e)?"/assets/loading_white.svg":"/assets/loading_black.svg"},null,8,y)])):p("",!0),m(c)],2)}}});const s=k(M);s.use(h());s.use(b);s.use(v);s.mount("#app");