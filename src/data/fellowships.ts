export interface Fellowship {
  slug: string;
  name: string;
  summary: string;
  points: string[];
  cardImage: string;
  detailImage?: string;
  cta?: { label: string; href: string };
}

const base = 'https://framerusercontent.com/images/';
const asset = (name: string) => `${base}${name}?width=4032&height=3024`;

export const fellowships: Fellowship[] = [
  { slug: 'men-s-fellowship', name: "Men's Fellowship", summary: 'Dedicated to building strong spiritual leaders for the home, the church, and the city.', points: ['Fostering spiritual growth and biblical manhood.', 'Driving kingdom-building projects and church infrastructure.', 'Mentoring the next generation of young men.'], cardImage: asset('kNZwJHjzaRfukbTwUg5r8VKOw.jpg'), detailImage: asset('iD0ZRf5jKCqNKGotngKAwXD8lEg.jpg') },
  { slug: 'women-fellowship', name: "Women's Fellowship", summary: 'The spiritual heartbeat of the church, focused on prayer, welfare, and maternal guidance.', points: ['Intercessory prayer and spiritual warfare for the church.', 'Organizing welfare and support systems for families.', 'Teaching biblical principles for marriage and home-building.'], cardImage: asset('3ynr9Si1Zwq7GtQrgV69xxd4dc.jpg') },
  { slug: 'youth-fellowship', name: 'Youth Fellowship', summary: 'Empowering the next generation to take the whole Gospel to the whole world with passion and energy.', points: ['Engaging in vibrant, Spirit-led worship and Bible study.', 'Leading grassroots evangelism and community outreach.', 'Cultivating future leaders for the church and society.'], cardImage: asset('pdqW7KRiElckeTejxbkNmi2Q7Q.jpg'), detailImage: asset('PIE6IcR5ehqJ3ZZe68Ggn9Y6W8.jpg'), cta: { label: 'FOLLOW OUR PAGE', href: 'https://web.facebook.com/profile.php?id=100064657246973' } },
  { slug: 'youngmen-fellowship', name: 'Young Men’s Fellowship', summary: 'Bridging the gap between youth and mature adulthood with purpose and responsibility.', points: ['Career and personal development rooted in faith.', 'Peer accountability and spiritual discipleship.', 'Transitioning into active church leadership roles.'], cardImage: asset('20zkdB5o8PIVLXu6eGJUZxIXIVk.jpg') },
  { slug: 'girls-ladies-fellowship', name: 'Girls & Ladies / Daughters of Wesley Fellowship', summary: 'A sisterhood dedicated to purity, purpose, and spiritual elegance following the Wesleyan tradition.', points: ['Instilling deep biblical values and moral uprightness.', 'Providing mentorship for personal and spiritual grace.', 'Fostering a strong, supportive network of young Christian women.'], cardImage: asset('hjigVXrCetF9PoaDsTedZZG40.jpg') },
  { slug: 'children-ministry', name: 'Children’s Ministry', summary: 'Nurturing the youngest hearts to know, love, and follow Christ from their earliest days.', points: ['Age-appropriate biblical teachings and interactive lessons.', 'Building a foundation of faith through songs and scripture memorization.', 'Providing a safe, joyful environment for spiritual discovery.'], cardImage: asset('o2zZof0SMzrK8iTYaKrnfR8Mw.jpg'), detailImage: asset('0698tjYJyKMmd54RNwW8XF8PMM.jpg') },
  { slug: 'boys-girls-brigade', name: 'Boys & Girls Brigade', summary: 'Uniformed paramilitary organizations utilizing Christian discipline to build resilient youth.', points: ['Instilling strict moral discipline, respect, and leadership skills.', 'Combining physical training with deep spiritual education.', 'Serving the church through ceremonial duties and community aid.'], cardImage: asset('uDdcxsM17HGIXgo2rliLbauQ4.jpg') },
];
