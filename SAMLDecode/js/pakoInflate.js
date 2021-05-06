function inflate(str) {
  var junk = pako.inflateRaw(str);
  return new TextDecoder("utf-8").decode(junk);
}
function decodeButton(inputString, output64, output64inflated) {
  var b64d = atob(decodeURIComponent(inputString));
  if (outputb64) outputb64.value = b64d;
  if (outputb64deflated) outputb64ddeflated.value = inflate(b64d);
}
function decodeButtonHelp() {
  decodeButton(
    document.getElementById("input").value,
    document.getElementById("outputb64"),
    document.getElementById("outputb64deflated")
  );
}
function toggleClass(el, className) {
  if (el.classList.includes("className")) {
    el.classList.remove("className");
  }
}
function toggleHide(el) {
  toggleClass(el, "hide");
}

function addShowHideEventListener(e) {
  //find adjacent <a> and <textarea> elements and toggle their 'hide' class
  const elms = [e, e.nextElementSibling()];
  if (e.classList.includes("hider")) {
    elms.push(e.nextElementSibling().nextElementSibling());
  } else {
    elms.push(e.previousElementSibling());
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
