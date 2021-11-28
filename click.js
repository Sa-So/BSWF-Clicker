function click_button() {
  btn = document.querySelector(
    "#__layout > div > div:nth-child(1) > div > div.Tournament__cheerContainer > div > div:nth-child(1) > div.Cheer__button.Cheer__button--left > div > button.BaseButton.roundButton.roundButton--blue"
  );
  btn2 = document.querySelector(
    "#__layout > div > div:nth-child(1) > div > div.Tournament__cheerContainer > div > div:nth-child(2) > div.Cheer__button.Cheer__button--right > div > button.BaseButton.roundButton.roundButton--red"
  );
  if (btn != null) {
    console.log("clicking ..");
    btn.click();
  } else {
    if (btn2 != null) {
      console.log("clicking red btn");
      btn2.click();
    } else {
      console.log("not found");
    }
  }
  return setTimeout(click_button, 10000);
}
click_button();
