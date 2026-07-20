import './components/header.js';
import './components/hero.js';

window.addEventListener("unhandledrejection",function(e){if(window.location.pathname.includes("error.html"))return;e.preventDefault();var t=e.reason;if(t&&t.message&&t.message.includes("Failed to fetch")){window.location.href="/error.html?err=500"}});
