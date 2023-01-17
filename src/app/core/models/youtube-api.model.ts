export interface IYoutubeApi {
  apiKey: string;
  rootUrl: string;
  pathForSearch: string;
  pathForVideo: string;
}

export const youtubeApi: IYoutubeApi = {
  apiKey: 'AIzaSyBT6vaOsaA3kc6WtpqEvJ5K_q9P6au_lJs',
  rootUrl: 'https://www.googleapis.com',
  pathForSearch: '/youtube/v3/search?',
  pathForVideo: '/youtube/v3/videos?',
};
