export interface GreetingEntry {
  language: string;
  text: string;
  transliteration?: string;
}

export interface GreetingTimezone {
  timezone: string;
  region: string;
  entries: GreetingEntry[];
}

/**
 * ─────────────────────────────────────────────────────────────────
 * GLOBAL BIRTHDAY TIMELINE
 * ─────────────────────────────────────────────────────────────────
 * Contains the mapped timezones across the world.
 * Add regions here to trigger the timeline button unlocks automatically
 * based on whether or not the timezone has bypassed April 1st.
 */
export const greetingsByTimezone: GreetingTimezone[] = [
  {
    timezone: "Pacific/Auckland",
    region: "New Zealand",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Māori",
        text: "Hari huritau, e taku aroha",
      },
    ],
  },
  {
    timezone: "Pacific/Honolulu",
    region: "Hawai‘i / Central Pacific",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Hawaiian",
        text: "Hauʻoli lā hānau, kuʻu aloha",
      },
    ],
  },
  {
    timezone: "Asia/Tokyo",
    region: "Japan",
    entries: [
      {
        language: "Japanese",
        text: "お誕生日おめでとう、私の愛しい人",
        transliteration: "Otanjoubi omedetou, watashi no itoshii hito",
      },
    ],
  },
  {
    timezone: "Asia/Seoul",
    region: "South Korea",
    entries: [
      {
        language: "Korean",
        text: "생일 축하해, 내 사랑",
        transliteration: "Saeng-il chukahae, nae sarang",
      },
    ],
  },
  {
    timezone: "Asia/Shanghai",
    region: "China",
    entries: [
      {
        language: "Mandarin Chinese (Simplified)",
        text: "生日快乐，我的爱",
        transliteration: "Shēngrì kuàilè, wǒ de ài",
      },
      {
        language: "Mongolian",
        text: "Төрсөн өдрийн мэнд, хайрт минь",
        transliteration: "Törsön öдрийн mend, khairt min",
      },
    ],
  },
  {
    timezone: "Asia/Taipei",
    region: "Taiwan",
    entries: [
      {
        language: "Mandarin Chinese (Traditional)",
        text: "生日快樂，我的愛",
        transliteration: "Shēngrì kuàilè, wǒ de ài",
      },
    ],
  },
  {
    timezone: "Asia/Manila",
    region: "Philippines",
    entries: [
      {
        language: "Filipino",
        text: "Maligayang kaarawan, mahal ko",
      },
    ],
  },
  {
    timezone: "Asia/Jakarta",
    region: "Indonesia / Western Maritime Southeast Asia",
    entries: [
      {
        language: "Indonesian",
        text: "Selamat ulang tahun, cintaku",
      },
      {
        language: "Malay",
        text: "Selamat hari lahir, cintaku",
      },
    ],
  },
  {
    timezone: "Asia/Bangkok",
    region: "Mainland Southeast Asia",
    entries: [
      {
        language: "Thai",
        text: "สุขสันต์วันเกิด ที่รัก",
        transliteration: "Suk san wan koet, thii rak",
      },
      {
        language: "Vietnamese",
        text: "Chúc mừng sinh nhật, tình yêu của tôi",
      },
      {
        language: "Khmer",
        text: "រីករាយថ្ងៃកំណើត សម្លាញ់ចិត្ត",
        transliteration: "Rikreay thngai kâmnaet, sâmlanh chet",
      },
      {
        language: "Lao",
        text: "ສຸກສັນວັນເກີດ, ທີ່ຮັກ",
        transliteration: "Suk san wan koet, thi hak",
      },
    ],
  },
  {
    timezone: "Asia/Yangon",
    region: "Myanmar",
    entries: [
      {
        language: "Burmese",
        text: "ပျော်ရွှင်ဖွယ် မွေးနေ့ပါ အချစ်ရေ",
        transliteration: "Pyaw shwin hpal mwe nei pa, achit yay",
      },
    ],
  },
  {
    timezone: "Asia/Dhaka",
    region: "Bangladesh",
    entries: [
      {
        language: "Bengali",
        text: "শুভ জন্মদিন, আমার ভালোবাসা",
        transliteration: "Shubho jonmodin, amar bhalobasha",
      },
    ],
  },
  {
    timezone: "Asia/Kathmandu",
    region: "Nepal",
    entries: [
      {
        language: "Nepali",
        text: "जन्मदिनको शुभकामना, मेरो माया",
        transliteration: "Janmadinko shubhakamana, mero maya",
      },
    ],
  },
  {
    timezone: "Asia/Kolkata",
    region: "India",
    entries: [
      {
        language: "Hindi",
        text: "जन्मदिन मुबारक हो, मेरे प्यार",
        transliteration: "Janmadin mubarak ho, mere pyaar",
      },
      {
        language: "Urdu",
        text: "سالگرہ مبارک، میری جان",
        transliteration: "Salgirah mubarak, meri jaan",
      },
      {
        language: "Punjabi",
        text: "ਜਨਮਦਿਨ ਮੁਬਾਰਕ, ਮੇਰੇ ਪਿਆਰ",
        transliteration: "Janamdin mubarak, mere pyaar",
      },
      {
        language: "Gujarati",
        text: "જન્મદિન મુબારક, મારા પ્રેમ",
        transliteration: "Janmadin mubarak, mara prem",
      },
      {
        language: "Marathi",
        text: "वाढदिवसाच्या शुभेच्छा, माझ्या प्रिये",
        transliteration: "Vaadhdivsachya shubhechha, majhya priye",
      },
      {
        language: "Tamil",
        text: "பிறந்தநாள் வாழ்த்துகள், என் அன்பே",
        transliteration: "Piranthanaal vaazhthukkal, en anbe",
      },
      {
        language: "Telugu",
        text: "పుట్టినరోజు శుభాకాంక్షలు, నా ప్రేమ",
        transliteration: "Puttinaroju shubhakaankshalu, naa prema",
      },
      {
        language: "Kannada",
        text: "ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯಗಳು, ನನ್ನ ಪ್ರೀತಿಯೇ",
        transliteration: "Huttuhabbada shubhashayagalu, nanna preetiye",
      },
      {
        language: "Malayalam",
        text: "ജന്മദിനാശംസകൾ, എന്റെ പ്രിയേ",
        transliteration: "Janmadinashamsakal, ente priye",
      },
    ],
  },
  {
    timezone: "Asia/Colombo",
    region: "Sri Lanka",
    entries: [
      {
        language: "Sinhala",
        text: "සුභ උපන්දිනයක්, මගේ ආදරේ",
        transliteration: "Suba upandinayak, mage aadare",
      },
      {
        language: "Tamil (Sri Lanka)",
        text: "பிறந்தநாள் வாழ்த்துகள், என் அன்பே",
        transliteration: "Piranthanaal vaazhthukkal, en anbe",
      },
    ],
  },
  {
    timezone: "Asia/Dubai",
    region: "Arabian Peninsula / Gulf",
    entries: [
      {
        language: "Arabic",
        text: "عيد ميلاد سعيد يا حبيبتي",
        transliteration: "Eid ميلاد saeid ya habibati",
      },
    ],
  },
  {
    timezone: "Asia/Tehran",
    region: "Iran",
    entries: [
      {
        language: "Persian",
        text: "تولدت مبارک، عشقم",
        transliteration: "Tavalodet mobarak, eshgham",
      },
    ],
  },
  {
    timezone: "Asia/Jerusalem",
    region: "Eastern Mediterranean",
    entries: [
      {
        language: "Hebrew",
        text: "יום הולדת שמח, אהובתי",
        transliteration: "Yom huledet sameach, ahuvati",
      },
      {
        language: "Turkish",
        text: "Doğum günün kutlu olsun, aşkım",
      },
      {
        language: "Greek",
        text: "Χρόνια πολλά, αγάπη μου",
        transliteration: "Chronia polla, agapi mou",
      },
    ],
  },
  {
    timezone: "Africa/Nairobi",
    region: "East Africa",
    entries: [
      {
        language: "Swahili",
        text: "Heri ya kuzaliwa, mpenzi wangu",
      },
      {
        language: "Amharic",
        text: "መልካም ልደት የኔ ፍቅር",
        transliteration: "Melkam lidet, yene fikir",
      },
    ],
  },
  {
    timezone: "Europe/Moscow",
    region: "Russia / Eastern Europe",
    entries: [
      {
        language: "Russian",
        text: "С днём рождения, любовь моя",
        transliteration: "S dnyom rozhdeniya, lyubov moya",
      },
      {
        language: "Ukrainian",
        text: "З днем народження, кохана моя",
        transliteration: "Z dnem narodzhennya, kokhana moya",
      },
    ],
  },
  {
    timezone: "Europe/Bucharest",
    region: "Balkans / Southeast Europe",
    entries: [
      {
        language: "Romanian",
        text: "La mulți ani, iubirea mea",
      },
      {
        language: "Bulgarian",
        text: "Честит рожден ден, любов моя",
        transliteration: "Chestit rozhden den, lyubov moya",
      },
      {
        language: "Serbian",
        text: "Срећан рођендан, љубави моја",
        transliteration: "Srećan rođendan, ljubavi moja",
      },
      {
        language: "Croatian",
        text: "Sretan rođendan, ljubavi moja",
      },
      {
        language: "Bosnian",
        text: "Sretan rođendan, ljubavi moja",
      },
      {
        language: "Slovenian",
        text: "Vse najboljše za rojstni dan, moja ljubezen",
      },
      {
        language: "Albanian",
        text: "Gëzuar ditëlindjen, dashuria ime",
      },
    ],
  },
  {
    timezone: "Europe/Berlin",
    region: "Central Europe",
    entries: [
      {
        language: "German",
        text: "Alles Gute zum Geburtstag, meine Liebe",
      },
      {
        language: "Polish",
        text: "Wszystkiego najlepszego z okazji urodzin, moja miłość",
      },
      {
        language: "Czech",
        text: "Všechno nejlepší k narozeninám, moje lásko",
      },
      {
        language: "Slovak",
        text: "Všetko najlepšie k narodeninám, moja láska",
      },
      {
        language: "Hungarian",
        text: "Boldog születésnapot, szerelmem",
      },
    ],
  },
  {
    timezone: "Europe/Paris",
    region: "Western Europe",
    entries: [
      {
        language: "French",
        text: "Joyeux anniversaire, mon amour",
      },
      {
        language: "Italian",
        text: "Buon compleanno, amore mio",
      },
      {
        language: "Dutch",
        text: "Fijne verjaardag, mijn lief",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
      {
        language: "Portuguese",
        text: "Feliz aniversário, meu amor",
      },
      {
        language: "Catalan",
        text: "Per molts anys, amor meu",
      },
      {
        language: "Basque",
        text: "Zorionak, nire maitea",
      },
      {
        language: "Galician",
        text: "Feliz aniversario, meu amor",
      },
    ],
  },
  {
    timezone: "Europe/London",
    region: "Britain / Ireland",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Irish",
        text: "Lá breithe shona duit, mo ghrá",
      },
      {
        language: "Welsh",
        text: "Pen-blwydd hapus, fy nghariad",
      },
      {
        language: "Scottish Gaelic",
        text: "Co-là breith sona dhut, mo ghràdh",
      },
    ],
  },
  {
    timezone: "Atlantic/Reykjavik",
    region: "Nordics / North Atlantic / Baltic",
    entries: [
      {
        language: "Icelandic",
        text: "Til hamingju með afmælið, ástin mín",
      },
      {
        language: "Danish",
        text: "Tillykke med fødselsdagen, min elskede",
      },
      {
        language: "Norwegian",
        text: "Gratulerer med dagen, min kjære",
      },
      {
        language: "Swedish",
        text: "Grattis på födelsedagen, min älskling",
      },
      {
        language: "Finnish",
        text: "Hyvää syntymäpäivää, rakkaani",
      },
      {
        language: "Estonian",
        text: "Palju õnne sünnipäevaks, mu arm",
      },
      {
        language: "Latvian",
        text: "Daudz laimes dzimšanas dienā, mana mīlestība",
      },
      {
        language: "Lithuanian",
        text: "Su gimtadieniu, mano meile",
      },
    ],
  },
  {
    timezone: "America/Sao_Paulo",
    region: "Brazil / South America",
    entries: [
      {
        language: "Portuguese (Brazil)",
        text: "Feliz aniversário, meu amor",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
    ],
  },
  {
    timezone: "America/Argentina/Buenos_Aires",
    region: "Southern Cone",
    entries: [
      {
        language: "Spanish (Argentina)",
        text: "Feliz cumpleaños, mi amor",
      },
      {
        language: "Portuguese",
        text: "Feliz aniversário, meu amor",
      },
    ],
  },
  {
    timezone: "America/New_York",
    region: "Eastern North America / Caribbean",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "French",
        text: "Joyeux anniversaire, mon amour",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
    ],
  },
  {
    timezone: "America/Chicago",
    region: "Central North America",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
    ],
  },
  {
    timezone: "America/Denver",
    region: "Mountain North America",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
    ],
  },
  {
    timezone: "America/Los_Angeles",
    region: "Pacific North America",
    entries: [
      {
        language: "English",
        text: "Happy Birthday, my love",
      },
      {
        language: "Spanish",
        text: "Feliz cumpleaños, mi amor",
      },
    ],
  },
];
