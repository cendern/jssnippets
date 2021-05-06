function inflate(str) {
  var junk = pako.inflateRaw(str);
  return new TextDecoder("utf-8").decode(junk);
}
function uriDecodeAndb64d(inputString) {
  var b64d = atob(decodeURIComponent(inputString));
}
function decodeButton(inputString, output64, output64inflated) {
  var b64d = uriDecodeAndb64d(inputString);
  if (outputb64) outputb64.value = b64d;
  if (outputb64deflated) outputb64deflated.value = inflate(b64d);
}
function decodeButtonHelp() {
  decodeButton(
    document.getElementById("input").value,
    document.getElementById("outputb64"),
    document.getElementById("outputb64deflated")
  );
}
function toggleClass(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}
function toggleHide(el) {
  toggleClass(el, "hide");
}

function addShowHideEventListener(ev) {
  //find adjacent <a> and <textarea> elements and toggle their 'hide' class
  var e = ev.target;
  const elms = [e, e.parentElement.nextElementSibling];
  if (e.classList.contains("hider")) {
    elms.push(e.nextElementSibling);
  } else {
    elms.push(e.previousElementSibling);
  }
  elms.forEach(toggleHide);
}

function addShowHideEventListenerEach(el) {
  el.addEventListener("click", addShowHideEventListener);
}

function runOnLoad() {
  document.querySelector("#btn").addEventListener("click", decodeButtonHelp);
  document
    .querySelectorAll("a.hider, a.shower")
    .forEach(addShowHideEventListenerEach);
}
