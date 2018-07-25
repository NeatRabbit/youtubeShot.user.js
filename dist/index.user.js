// ==UserScript==
// @name         youtube Shot
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  screenshot youtube
// @author       https://github.com/NeatRabbit/youtubeShot.user.js
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
!function(){var i=function(e){if(-1<location.pathname.indexOf("embed")&&"click"!==e.type)document.getElementById("player").addEventListener("click",i);else if("click"===e.type&&document.getElementById("player").removeEventListener("click",i),document.querySelector("video.html5-main-video")&&!document.querySelector(".nss-button")){var t=document.createElement("button");t.classList.add("ytp-button"),t.classList.add("nss-button"),t.style.lineHeight="36px",t.style.textAlign="center",t.style.verticalAlign="top",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="vertical-align:middle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="#fff"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/></svg>',t.onclick=function(){var e=document.querySelector("video");e.pause();var t=window.open(""),i=t.document.createElement("img"),n=t.document.createElement("canvas"),o=n.getContext("2d");n.style.position="absolute",n.style.width=e.videoWidth+"px",n.style.height=e.videoHeight+"px",n.width=e.videoWidth,n.height=e.videoHeight,o.drawImage(e,0,0,e.videoWidth,e.videoHeight),n.msToBlob?i.src=URL.createObjectURL(n.msToBlob()):i.src=n.toDataURL("image/png"),t.document.body.appendChild(i)},document.querySelector(".ytp-right-controls").appendChild(t)}};document.addEventListener("yt-navigate-finish",i),document.addEventListener("DOMContentLoaded",i)}();