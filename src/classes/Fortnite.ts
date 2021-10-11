import axios from "axios";

import Fortnitemap from "../interfaces/Fortnitemap";
import FortnitePlaylists from "../interfaces/FortnitePlaylists";
import FortnitePlaylistID from "../interfaces/FortnitePlaylistID";
import FortniteBanners from "../interfaces/Fortnitebanners";
import FortniteBannersColors from "../interfaces/FortniteBannerscolors";
import BattleRoyalStats from "../interfaces/BattleRoyalStats";
import Aes from '../interfaces/Aes';
import news from '../interfaces/news';

class Fortnite {
  public lang: string;
  private query: string;
  constructor(lang: string = "en") {
    this.lang = lang;
    this.query = `?lang=${lang}`;
  }
  private baseUrl: string = "https://fortnite-api.com/v";
  async getLatestMap(): Promise<Fortnitemap> {
    let url = `${this.baseUrl}1/map${this.query}`;
    let response = await axios.get(url);
    let data: Fortnitemap = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          images: {
            blank: data.images.blank,
            pois: data.images.pois,
          },
          pois: data.pois,
        });
      }
    });
  }
  async getAllPlaylists(): Promise<FortnitePlaylists> {
    let url = `${this.baseUrl}1/playlists${this.query}`;
    let response = await axios.get(url);
    let data: FortnitePlaylists = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async getPlaylistById(id: string): Promise<FortnitePlaylistID> {
    if (!id) throw new Error("Playlist ID is Required");

    let url = `${this.baseUrl}1/playlists/${id}${this.query}`;
    let response = await axios.get(url);
    let data: FortnitePlaylistID = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async getAllBanners(): Promise<FortniteBanners> {
    let url = `${this.baseUrl}1/banners${this.query}`;
    let response = await axios.get(url);
    let data: FortniteBanners = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async getAllBannersColors(): Promise<FortniteBannersColors> {
    let url = `${this.baseUrl}1/banners/colors`;
    let response = await axios.get(url);
    let data: FortniteBannersColors = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async BattleRoyalStats(name:string,accountType:string = "epic"): Promise<BattleRoyalStats> {
    if (!name) throw new Error("You Need To Provide AccountName");
    if (typeof name !== "string" || typeof accountType !== "string") {
      throw new Error("Name,AccountType Must Be A String");
    }
    if (!accountType) accountType = "epic";
    let url = `${this.baseUrl}2/stats/br/v2`;
    let response = await axios.get(url);
    let data: BattleRoyalStats = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      } else if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async UserBattleRoyalStats(id: string): Promise<BattleRoyalStats> {
    if (!id) throw new Error("Id Account Required");
    let url = `${this.baseUrl}2/stats/br/v2/${id}`;
    let response = await axios.get(url);
    let data: BattleRoyalStats = response.data;
    return new Promise((resolve, reject) => {
      if (response.status !== 200) {
        return reject(new Error(String(response.status)));
      }
      if (response.status === 200) {
        return resolve({
          data: data.data,
        });
      }
    });
  }
  async FortniteAes():Promise<Aes> {
    let url = `${this.baseUrl}2/aes`;
    let response = await axios.get(url);
    let data: Aes = response.data;
    return new Promise((resolve, reject) => {
      if(response.status !== 200) {
        return reject(new Error(`${response.status}`))
      }else if(response.status === 200) {
        return resolve({
          data:data.data
        })
      }
    })
    
  }
  async getBattleRoyalNews():Promise<news> {
    let url = `${this.baseUrl}2/news/br?${this.query}`;
    let response = await axios.get(url);
    let data: news = response.data;
    return new Promise((resolve, reject) => {
      if(response.status !== 200) {
        return reject(new Error(`${response.status}`))
      }else if(response.status === 200) {
        return resolve({
          data: data.data
        })
      }
    })
  }
  async getCurrentSaveWorldNews():Promise<news> {
    let url = `${this.baseUrl}2/news/stw${this.query}`;
    let response = await axios.get(url);
    let data: news = response.data;
    return new Promise((resolve, reject) => {
      if(response.status !== 200) {
        return reject(new Error(`${response.status}`))
      }else if(response.status === 200) {
        return resolve({
          data: data.data
        })
      }
    })
  }
  async getCreativeNews():Promise<news> {
    let url = `${this.baseUrl}2/news/creative${this.query}`;
    let response = await axios.get(url);
    let data:news = response.data;
    return new Promise((resolve, reject) => {
      if(response.status !== 200) {
        return reject(new Error(`${response.status}`))
      }else if(response.status === 200) {
        return resolve({
          data: data.data
        })
      }
    })
    
  }
}

export default Fortnite