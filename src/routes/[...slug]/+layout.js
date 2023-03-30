import Feature from "../../components/Feature.svelte";
import Grid from "../../components/Grid.svelte";
import Page from "../../components/Page.svelte";
import Teaser from "../../components/Teaser.svelte";
import Hero from "../../components/Hero.svelte";
import Header from "../../components/Header.svelte";

import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "u2fPkA4eCxmoae9rZlsqVgtt",
    use: [apiPlugin],
    components: {
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
      hero: Hero,
      header: Header
    },
  });
  let storyblokApi = await useStoryblokApi();
  const dataConfig = await storyblokApi.get('cdn/stories/config', {
    version: 'draft',
    resolve_links: 'url'
  });

  return {
    storyblokApi: storyblokApi,
    header: dataConfig.data.story

  };
}
