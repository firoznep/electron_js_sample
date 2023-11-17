const ver = document.getElementById("versions");

ver.innerHTML = `Electron version: ${versions.node()}, ${versions.plateform()}`;

const funcPing = async () => {
  let res = await window.versions.ping();
  console.log(res);
};

funcPing();
