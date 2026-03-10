import type { RecommendationGridItem } from '@/components/sections';

/** Recommendation winter – 7 cards: 2+2+2 then 1 full-width */
export const recommendationWinter: RecommendationGridItem[] = [
  {
    id: 'winter-holidays',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/experiences/winter/meta%20page%20image%20all%20season/49575_32001800.jpeg',
    imageAlt: 'Skiing in the snow-covered Alps',
    label: 'Winter holidays',
    href: '/experiences/winter-holidays',
  },
  {
    id: 'museums',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/03/09/07/04/49/winterthur-oskar-reinhart-museum.jpg',
    imageAlt: 'Art museum interior with paintings',
    label: 'Museums',
    href: '/experiences/museums',
  },
  {
    id: 'winter-excursions',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/12/05/14/45/31/sils-in-the-engadine-lake-sils.jpg',
    imageAlt: 'Frozen lake and snow-covered mountains',
    label: 'Winter: Excursions & destinations',
    href: '/experiences/winter-excursions',
  },
  {
    id: 'mountain-excursions',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/experiences/adventure%20rides/mountain%20railways/meta%20page%20image%20winter/36551_32001800.jpeg',
    imageAlt: 'Snow-laden pines and mountains',
    label: 'Mountain excursions',
    href: '/experiences/mountain-excursions',
  },
  {
    id: 'panoramic-trains',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/resources/places/b/a/basel/images%20winter/26800_32001800.jpeg',
    imageAlt: 'Red train on stone viaduct in winter',
    label: 'Premium panoramic trains',
    href: '/experiences/panoramic-trains',
  },
  {
    id: 'city-tips',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/teasers/grid%20teaser/summer/grid%20teaser%20brauchtum%20und%20tradition%20sommer/image%20all%20season/55928_16001200.jpeg',
    imageAlt: 'Historic city by the river at dusk',
    label: 'City: tips for holidays and outings',
    href: '/experiences/city-tips',
  },
 
];

/** Recommendation summer – 6 cards: 1 large, 2+2, then 1 full-width */
export const recommendationSummer: RecommendationGridItem[] = [
  {
    id: 'grand-train-tour',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/stage%20header/image%20all%20season/38624_32001800.jpeg',
    imageAlt: 'Scenic train through green hills and mountains',
    label: 'Grand Train Tour of Switzerland',
    href: '/experiences/grand-train-tour',
    colSpan2: true,
  },
  {
    id: 'summer-vacation-tips',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/celum%20connect/2022/03/08/13/58/41/rorschach-panorama-with-sunset-on-lake-constance.jpg',
    imageAlt: 'Hillside with flowers overlooking lake and town',
    label: 'Summer: Vacation and Excursion Tips',
    href: '/experiences/summer-tips',
  },
  {
    id: 'excursions',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/experiences/summer%20and%20autumn/excursions/meta%20page%20image/39055_800600.jpeg',
    imageAlt: 'Stone bridge over clear mountain stream',
    label: 'Excursions',
    href: '/experiences/excursions',
  },
  {
    id: 'nature',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_640,h_640/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/stage%20header/image%20all%20season/44941_32001800.jpeg',
    imageAlt: 'Serene lake reflecting mountains at dusk',
    label: 'Nature',
    href: '/experiences/nature',
  },
  {
    id: 'grand-tour-switzerland',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/teasers/grid%20teaser/summer/grid%20teaser%20grand%20tour%20of%20switzerland/image%20all%20season/58925_16001200.jpeg',
    imageAlt: 'Winding mountain road with hairpin turn',
    label: 'Grand Tour of Switzerland',
    href: '/experiences/grand-tour',
  },
  {
    id: 'family-excursions',
    imageSrc: 'https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_1280,h_600/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/global/teasers/grid%20teaser/family/grid%20teaser%20family%20experiences%20summer/image%20all%20season/63422_16001200.jpeg',
    imageAlt: 'Family in park or natural setting',
    label: 'Family excursions',
    href: '/experiences/family',
    colSpan2: true,
  },
];
