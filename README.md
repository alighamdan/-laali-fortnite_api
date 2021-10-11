# Unofficial Fortnite_Api (Npm) 

Simple Package Can Help You To Use https://fortnite-api.com/

examples:

```js
const Fortnite = require('@laali/fortniteapi').default;
// U Can Use For ES7 import Fortnite from 'fortnite_api';
const fort = new Fortnite("language"); // Supported Language: ar / de / en / es / es-419 / fr / it / ja / ko / pl / pt-BR / ru / tr / zh-CN / zh-Hant
fort.getLatestMap().then(function (map) {
    console.log(`Map With Places: ${map.images.pois}`);
});

fort.getCreativeNews().then(function (creativeNews) {
    console.log(`Last News For Creative: ${creativeNews.data}`)
})
```

# If You Need Some Support: 
## my Tag: ラリ・クロンシ#7705


All Fortnite Class Methods Return With Promises!

Properties:
```js
fort.lang // Give You The Selected Language In Constructor
```

Methods:

```js
fort.getLatestMap() // Get the latest Fortnite map

fort.getAllPlaylists() // Get all playlists From Fortnite API 

fort.getPlaylistById("id") // Get Playlist By ID

fort.getAllBanners() // Get all Fortnite Banners

fort.getAllBannersColors() // Get all Fortnite Banners colors

fort.BattleRoyalStats("accountName","AccountType") // Get All Battle Royal Stats 

fort.UserBattleRoyalStats('ID') // Get User BattleRoyal Stats By User ID

fort.FortniteAes() // Get Fortnite Aes

fort.getBattleRoyalNews() // Get Fortnite Battle Royal News

fort.getCurrentSaveWorldNews() // Get Fortnite Current World News

fort.getCreativeNews() // Get Fortnite Creative News
```


❤️ Support Server:

<a href="https://discord.gg/developer-support">
<img src="https://cdn.discordapp.com/attachments/889779980723179521/897160795111178310/Developer_Support_You_Have_Been_Invited.jpg"/>
</a>