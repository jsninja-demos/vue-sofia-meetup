import Toastify from "toastify-js";

export default function sendAnalytics(event) {
  Toastify({
    text: event,
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    positionLeft: false, // `true` or `false`
    backgroundColor: "green",
    className: "info",
  }).showToast();
}
