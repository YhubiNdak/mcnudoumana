export interface ActivityDay {
  day: string;
  groups: { title: string; details?: string[] }[];
}

export const activityColumns: ActivityDay[][] = [
  [
    { day: 'Mondays', groups: [{ title: 'Choir Rehearsals', details: ['Main Choir - 5pm', 'Youth Choir - 5pm'] }] },
    { day: 'Wednesdays', groups: [
      { title: 'Hour of Intervention (7am - 7:50am)', details: ['Topic: All round Victories'] },
      { title: 'Prayer & Fasting - 8am' },
      { title: 'Special Healing Service - 5pm', details: ['Topic: Victory over sickness', 'Choir Ministration: All Choir groups'] },
    ] },
    { day: 'Fridays', groups: [{ title: 'Bible Study - 5pm' }, { title: 'Choir Rehearsals', details: ['Redemption Choir - 5pm'] }] },
  ],
  [
    { day: 'Tuesdays', groups: [{ title: 'Scriptural Holiness Revival Time', details: ['AKBC Radio (90.5FM): 6:30am - 6:45am'] }, { title: 'Choir Rehearsals', details: ['Main Choir - 5pm'] }] },
    { day: 'Thursdays', groups: [{ title: 'Scriptural Holiness Revival Time', details: ['XL 106.9FM: 1pm - 1:15pm'] }, { title: 'Choir Rehearsals', details: ['Main Choir - 5pm'] }] },
    { day: 'Saturdays', groups: [{ title: 'Choir Rehearsals', details: ['Main Choir - 5pm', 'Youth Choir - 5pm'] }, { title: 'Band Rehearsals - 7pm' }] },
  ],
];
