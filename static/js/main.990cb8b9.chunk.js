(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{14:function(e,a,t){e.exports=t(38)},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(12),l=t.n(r),m=t(2),o=t(13),s=t.n(o),i=(t(36),t(37),function(e){var a=e.name,t=e.image,c=e.symbol,r=e.price,l=e.volume,m=e.priceChange,o=e.marketcap;return n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",{className:"coin-row"},n.a.createElement("td",null,n.a.createElement("img",{src:t,alt:"crypto"})),n.a.createElement("td",null,n.a.createElement("h1",null,a)),n.a.createElement("td",{className:"coin-symbol"},c),n.a.createElement("td",null,"$",r),n.a.createElement("td",null,"$",l.toLocaleString()),n.a.createElement("td",null,m<0?n.a.createElement("p",{className:"coin-percent red"},m,"%"):n.a.createElement("p",{className:"coin-percent green"},m,"%")),n.a.createElement("td",null,"$",o.toLocaleString()))))});var p=function(){var e=Object(c.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)(""),o=Object(m.a)(l,2),p=o[0],u=o[1];Object(c.useEffect)((function(){s.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){r(e.data)}))}),[]);var E=t.filter((function(e){return e.name.toLowerCase().includes(p.toLocaleLowerCase())}));return n.a.createElement("div",{className:"coin-app"},n.a.createElement("img",{className:"coin-photo",src:"./coinlogo1.png"}),n.a.createElement("div",{className:"coin-search"},n.a.createElement("h1",{className:"coin-text"},"Crypto Currency Tracker"),n.a.createElement("form",{className:"coin-box"},n.a.createElement("input",{type:"text",placeholder:"Type the company name here...",className:"coin-input",onChange:function(e){u(e.target.value)}}))),n.a.createElement("div",{className:"coin-table"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{className:"company-icon"},"Company Icon"),n.a.createElement("th",{className:"company-name"},"Company Name"),n.a.createElement("th",{className:"symbol"},"Symbol"),n.a.createElement("th",{className:"current-price"},"Current Price"),n.a.createElement("th",{className:"total-volume"},"Total Volume"),n.a.createElement("th",{className:"price"},"Price Percentage Change"),n.a.createElement("th",{className:"market-cap"},"Market Cap"))))),E.map((function(e){return n.a.createElement(i,{key:e.id,name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:{(typeof(e).price_change_percentage_24h=='number') ? e.price_change_percentage_24h.toFixed(2) : e.price_change_percentage_24h},volume:e.total_volume})})))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.990cb8b9.chunk.js.map
