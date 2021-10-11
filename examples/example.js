const FortniteApi = require("../src/index").default;

const Fortnite = new FortniteApi('ar');

Fortnite.getAllBanners().then((Banners) => {
  let number = 1;
  Banners.data.forEach((banner) => {
    setTimeout(() => {
      alert(
        `${number++}- ${banner.name} (${banner.id}), ${banner.description} `
      );
    }, 10000);
  });
});

Fortnite.BattleRoyalStats({
  name: "User Name",
  accountType: "epic",
}).then((S) => {
  let stats = S.data.stats;
  console.log(
    `Wins:
 All:
  Solo: ${stats.all.solo.wins}
  Duo: ${stats.all.duo.wins}
  Squad: ${stats.all.squad.wins}
  Trio: ${stats.all.trio.wins}
  ltm: ${stats.all.ltm.wins}
 KeyBoard And Mouse:
  Solo: ${stats.keyboardMouse.solo.wins}
  Duo: ${stats.keyboardMouse.duo.wins}
  Squad: ${stats.keyboardMouse.squad.wins}
  Trio: ${stats.keyboardMouse.trio.wins}
  ltm: ${stats.keyboardMouse.ltm.wins}
 GamePad:
  Solo: ${stats.gamepad.solo.wins}
  Duo: ${stats.gamepad.duo.wins}
  Squad: ${stats.gamepad.squad.wins}
  Trio: ${stats.gamepad.trio.wins}
  ltm: ${stats.gamepad.ltm.wins}
 Touch (Mobile):
  Solo: ${stats.touch.solo.wins}
  Duo: ${stats.touch.duo.wins}
  Squad: ${stats.touch.squad.wins}
  Trio: ${stats.touch.trio.wins}
  ltm: ${stats.touch.ltm.wins}`
  );
});

