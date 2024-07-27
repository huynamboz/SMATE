import { $Fetch, ofetch } from "ofetch";

export const $http: $Fetch = ofetch.create({
  baseURL: 'https://jdxhzgcz-3000.asse.devtunnels.ms/api',
  retry: 1,
});