// ==UserScript==
// @name         youtube Shot
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  screenshot youtube
// @author       https://github.com/NeatRabbit/youtubeShot.user.js
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==
!function(){var e=function(){if(console.log(document.querySelector("video.html5-main-video")),document.querySelector("video.html5-main-video")){var e=document.createElement("button");e.classList.add("ytp-button"),e.style.lineHeight="36px",e.style.textAlign="center",e.style.verticalAlign="top",e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="vertical-align:middle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" fill="#fff"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#fff"/><path d="M0 0h24v24H0z" fill="none"/></svg>',e.onclick=function(){var e=document.querySelector("video");e.pause();var t=window.open(""),i=t.document.createElement("img"),o=t.document.createElement("canvas"),n=o.getContext("2d");o.style.position="absolute",o.style.width=e.videoWidth+"px",o.style.height=e.videoHeight+"px",o.width=e.videoWidth,o.height=e.videoHeight,n.drawImage(e,0,0,e.videoWidth,e.videoHeight),o.msToBlob?i.src=URL.createObjectURL(o.msToBlob()):i.src=o.toDataURL("image/png"),t.document.body.appendChild(i)},document.querySelector(".ytp-right-controls").appendChild(e)}};document.addEventListener("yt-navigate-finish",e),document.addEventListener("DOMContentLoaded",e)}();