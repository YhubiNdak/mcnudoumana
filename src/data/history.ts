export interface HistorySection {
  numeral: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  list?: string[];
  milestones?: { year: string; text: string }[];
}

export const historySections: HistorySection[] = [
  {
    numeral: 'I', title: 'The Church Foundation (1956)', subtitle: 'A Private Fellowship Born on Easter Sunday',
    paragraphs: ['While Methodism reached Nigeria in 1842, it took nearly half a century to move from the coastal areas into the heart of Uyo. The spirit of the 1st-century Christians stirred in the heart of Late Bro. Sunday Udosen, who offered his living room for the very first service.', 'On Easter Sunday, April 1, 1956, five pioneers met to birth what would become Methodist Church, Uyo:'],
    list: ['Bro. Sunday Udosen', 'Inyang Udosen', 'Barrister James Udofia', 'Mrs. Eyoawan Udosen', 'Madam Nkoyo Okon Inuk'],
    milestones: [{ year: 'The first service', text: 'was attended by Rev. James Stringfellow, and Bro. J. E. Isok was mandated as a Lay Preacher to sustain the work.' }],
  },
  {
    numeral: 'II', title: 'The Church on the Move (1958 – 1973)', subtitle: 'Growth Amidst Transition',
    paragraphs: ['As the congregation grew to about 20 worshippers, the living room could no longer contain the fire of the Gospel. This began a season of “tabernacling” across Uyo:'],
    milestones: [{ year: '1958', text: 'Moved to the Ernesto Printing Press building at No. 4 Nwaniba Road.' }, { year: '1960', text: 'The first communion service was celebrated on Maundy Thursday by Rev. Mkposong.' }, { year: '1963', text: 'Moved to “Eka Hall” (Co-operative Credit Society Office) along Oron Road.' }, { year: '1968', text: 'During the Nigerian Civil War, Biafran soldiers took over Eka Hall, forcing the congregation to find refuge elsewhere.' }],
  },
  {
    numeral: 'III', title: 'Establishing a Permanent Home (1972)', subtitle: 'The Sacrifice at Udo Umana Street',
    paragraphs: ['In 1972, the search for a permanent site led the leaders to a plot of land along Udo Umana Street. Through an appeal letter and the immense generosity of donors—most notably Late Chief J. U. Eka and Late Bro. Sunday Udosen—the sum of £800 (eight hundred pounds) was raised to purchase the piece of land that serves as our current home.'],
  },
  {
    numeral: 'IV', title: 'The Era of the New Building (1990 – 2000)', subtitle: 'From Foundation to Dedication',
    paragraphs: ['The vision for a modern sanctuary took flight in the early 90s.'],
    milestones: [{ year: 'August 1990', text: 'The foundation stone was laid by His Eminence Sunday Mbang, Prelate of Methodist Church Nigeria.' }, { year: '1992 – 1995', text: 'Under stewards and technical advisers including Bro. (Engr.) Michael E. Udo, the structure rose from lintel to roofing.' }, { year: 'March 14, 1999', text: "The first service was held in the new sanctuary during the Men's Fellowship fund-raising service; approximately N1 million was raised to complete the work." }],
  },
  {
    numeral: 'V', title: 'Spiritual Vitality & Evangelical Movement', subtitle: 'Methodist Evangelical Movement (MEM)',
    paragraphs: ["The church’s history is not just one of bricks and mortar, but of spiritual fire. In 1990, the Methodist Evangelical Movement (MEM) was launched at Udo Umana, led by Bro. Isaac Sam. Through city-wide crusades like “REDEMPTION '96” and the revival of midweek prayer meetings, the church became a center of evangelism east of the Niger."],
  },
  {
    numeral: 'VI', title: 'Conclusion: A Great Oak from a Tiny Seed', subtitle: 'Udo Umana Today',
    paragraphs: ['What began with five people in a living room has blossomed into a spiritual powerhouse.'],
    milestones: [{ year: '1993', text: 'Attained Uyo Group Headquarters status.' }, { year: '1994', text: 'Inaugurated as Circuit Headquarters.' }, { year: '1999', text: 'An average congregation of 1,200 worshippers gathered every Sunday.' }, { year: 'Today', text: 'Methodist Church Nigeria, 67 Udo Umana, stands as a testament to the fact that God can take a small beginning and, through the faithfulness of his people, transform a city.' }],
  },
];
