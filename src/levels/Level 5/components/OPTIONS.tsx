export const OPTIONS = () => ({
  Option1: `if (isTurnedOn) {
  setIsTurnedOn(false);
  setLightColor("black");
  setButtonText("encender");
} else {
  setIsTurnedOn(true);
  setLightColor("green");
  setButtonText("apagar");
}`,
  Option2: `if (!isTurnedOn) {
  setIsTurnedOn(true);
  setLightColor("green");
  setButtonText("apagar");
} else {
  setIsTurnedOn(false);
  setLightColor("black");
  setButtonText("encender");
}`,
  Option3: `if (isTurnedOn) {
  setIsTurnedOn(false);
  setLightColor("black");
  setButtonText("encender");
  return;
}
setIsTurnedOn(true);
setLightColor("green");
setButtonText("apagar");`,
  Option4: `if (!isTurnedOn) {
  setIsTurnedOn(true);
  setLightColor("green");
  setButtonText("apagar");
  return;
}
setIsTurnedOn(false);
setLightColor("black");
setButtonText("encender");`,
})
