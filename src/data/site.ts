export const site = {
  name: 'Methodist Church Nigeria',
  branch: '67 Udo Umana Street, Uyo',
  phoneDisplay: '+234 706 558 1586',
  phoneHref: 'tel:+2347065581586',
  address: 'MCN 67 Udo Umana Street, Uyo',
  facebook: 'https://www.facebook.com/wesley.dmedia',
  youtube: 'https://www.youtube.com/@mcn67udoumana',
  logo: 'https://framerusercontent.com/images/orBhSL0iK4TRaiDEetxjPOhlFY.png?width=243&height=240',
} as const;

const image = (name: string) => `https://framerusercontent.com/images/${name}`;

export const images = {
  homeHero: image('0vLq8c4Il9n9tj2q4lYy1LYymyE.png?width=2880&height=1920'),
  historyCard: image('hAqkWHUWL9ar8uOeFSevJ3r7tU.jpg?width=2048&height=1157'),
  fellowshipCard: image('lY13B9p33y9E8XEABWyy4WOVY8.jpg?width=2316&height=3088'),
  activitiesCard: image('AUHy76T6zDhMHEZ6LsSsOUbK3zA.jpg?width=2048&height=1536'),
  aboutHero: image('l7JgwWzbyFZ4DopXs7kwDc9drx4.png?width=2880&height=744'),
  activitiesHero: image('HM9fqGFrPOhrBXAijX8MLBFvSoI.png?width=2880&height=744'),
  fellowshipsHero: image('lUqR6NwQFXbduonodvNwJrwkAMI.png?width=2880&height=744'),
} as const;

export const upcomingEvents = [
  {
    src: image('y4GdozmNGwzxyTy3FxwLOsfQBI.png?width=2804&height=2264'),
    width: 1280,
    height: 853,
    title: 'Bible Study',
    alt: 'Bible Study at Methodist Church Nigeria, 67 Udo Umana Street, every Friday from 5 PM to 6 PM.',
  },
  {
    src: image('Rd9b6VgMpkhtdCsKNyhhHAkltmY.png?width=4552&height=2264'),
    width: 4552,
    height: 2264,
    title: 'Weekly Activities',
    alt: 'Weekly activities schedule for Methodist Church Nigeria, including Wednesday, Friday Bible Study, and Sunday worship.',
  },
] as const;

export const eventImages = [
  image('f965wNBrKZ8zsWahpix4u9IV6g.png?width=1888&height=1632'),
  image('qYxIzE6sGy7KD7yyhZd2ji3jA.jpg?width=1536&height=2048'),
  image('Qt1mWMIArqesv9PwDmTLn5014vM.jpg?width=2048&height=1536'),
  image('bJnVcsAIgvMT5TEXT6ihpSolxA.png?width=1888&height=1632'),
  image('DPNBzgUKtTqBu1MuJsKScUgPrjE.jpeg?width=960&height=540'),
  image('Mv8uoQP9P3P9GgvYoPMQiixatA.jpg?width=4032&height=3024'),
  image('fatzQhEwIQXNKKN6VZwoipNcVc.jpeg?width=960&height=540'),
] as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Fellowships', href: '/fellowships' },
  { label: 'Activities', href: '/activities' },
] as const;
