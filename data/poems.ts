export interface Poem {
  id: number;
  type: string;
  inspiration: string;
  text: string;
}

/**
 * ─────────────────────────────────────────────────────────────────
 * POETRY CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Add or modify poems here. Each poem will systematically be
 * assigned sequentially to gallery images. You can safely add up to
 * as many poems as you have images. Note: The 'type' and 'inspiration'
 * tags are completely custom meta-data, only 'text' gets printed.
 */
export const poems: Poem[] = [
  { id: 1, type: "real", inspiration: "Rumi", text: "The minute I heard my first love story,\nI started looking for you,\nnot knowing\nhow blind that was." },
  { id: 2, type: "real", inspiration: "Hafez", text: "I wish I could show you,\nwhen you are lonely or in darkness,\nthe astonishing light\nof your own being." },
  { id: 3, type: "real", inspiration: "Tagore", text: "I seem to have loved you\nin numberless forms,\nnumberless times,\nin life after life." },
  { id: 4, type: "real", inspiration: "Ghalib", text: "The heart remains restless,\neven in silence,\nwhen it has once learned\nyour name." },
  { id: 5, type: "real", inspiration: "Gibran", text: "Love knows not its own depth\nuntil the hour\nof separation." },

  { id: 6, type: "real", inspiration: "Rumi", text: "You are not a drop\nin the ocean.\nYou are the entire ocean\nin a drop." },
  { id: 7, type: "real", inspiration: "Hafez", text: "Even after all this time,\nthe sun never says to the earth,\n'You owe me.'\nLook what happens with a love like that." },
  { id: 8, type: "real", inspiration: "Tagore", text: "Let my love,\nlike sunlight,\nsurround you\nand yet give you freedom." },
  { id: 9, type: "real", inspiration: "Ghalib", text: "There are a thousand desires,\neach worth dying for,\nand still the heart\nasks for more." },
  { id: 10, type: "real", inspiration: "Gibran", text: "Love gives naught\nbut itself,\nand takes naught\nbut from itself." },

  { id: 11, type: "real", inspiration: "Rumi", text: "Wherever you are,\nand whatever you do,\nbe in love." },
  { id: 12, type: "original", inspiration: "Sufi", text: "I have gathered all my tomorrows\nand placed them\ngently in your hands." },
  { id: 13, type: "real", inspiration: "Tagore", text: "The same stream of life\nthat runs through my veins\nruns through the world\nand dances in rhythm." },
  { id: 14, type: "real", inspiration: "Ghalib", text: "Love is a fire\nthat cannot be contained,\nthough the lips remain still." },
  { id: 15, type: "real", inspiration: "Gibran", text: "Think not you can direct\nthe course of love,\nfor love,\nif it finds you worthy,\ndirects your course." },

  { id: 16, type: "real", inspiration: "Rumi", text: "In your light,\nI learn how to love.\nIn your beauty,\nhow to make poems." },
  { id: 17, type: "real", inspiration: "Hafez", text: "Stay close to anything\nthat makes you glad\nyou are alive." },
  { id: 18, type: "real", inspiration: "Tagore", text: "You are the sky\nand you are the nest as well." },
  { id: 19, type: "real", inspiration: "Ghalib", text: "When longing grows deep,\neven the night\nbegins to speak." },
  { id: 20, type: "real", inspiration: "Gibran", text: "When love beckons to you,\nfollow him,\nthough his ways\nare hard and steep." },

  { id: 21, type: "real", inspiration: "Rumi", text: "Close your eyes,\nfall in love,\nstay there." },
  { id: 22, type: "original", inspiration: "Persian", text: "Every time I look at you,\nthe world pauses\njust to admire\nits own creation." },
  { id: 23, type: "real", inspiration: "Tagore", text: "My heart,\nthe bird of the wilderness,\nhas found its sky\nin your eyes." },
  { id: 24, type: "original", inspiration: "Sufi", text: "To love you\nis the easiest breath\nI have ever taken." },
  { id: 25, type: "real", inspiration: "Gibran", text: "Let there be spaces\nin your togetherness,\nand let the winds of the heavens\ndance between you." },

  { id: 26, type: "real", inspiration: "Rumi", text: "I am yours.\nDo not give myself\nback to me." },
  { id: 27, type: "real", inspiration: "Hafez", text: "The heart has its own language.\nIt knows a hundred thousand ways\nto speak." },
  { id: 28, type: "real", inspiration: "Tagore", text: "I have spent my days\nin stringing and in unstringing\nmy instrument." },
  { id: 29, type: "real", inspiration: "Ghalib", text: "What can I say\nof the state of my heart?\nIt is yours,\nand that is enough." },
  { id: 30, type: "real", inspiration: "Gibran", text: "Love possesses not\nnor would it be possessed,\nfor love is sufficient\nunto love." },

  { id: 31, type: "real", inspiration: "Rumi", text: "The beauty you see in me\nis a reflection of you." },
  { id: 32, type: "real", inspiration: "Hafez", text: "Now is the time\nto know\nthat all that you do\nis sacred." },
  { id: 33, type: "real", inspiration: "Tagore", text: "I have found my endlessness\nin you." },
  { id: 34, type: "real", inspiration: "Ghalib", text: "There is no cure\nfor a heart like this,\nexcept the sight\nof the beloved." },
  { id: 35, type: "real", inspiration: "Gibran", text: "For even as love crowns you,\nso shall he crucify you." },

  { id: 36, type: "real", inspiration: "Rumi", text: "When the soul lies down\nin that grass,\nthe world is too full\nto talk about." },
  { id: 37, type: "real", inspiration: "Hafez", text: "I know the way you can get\nwhen you have not had a love drink:\nyour face hardens,\nyour sweet muscles cramp." },
  { id: 38, type: "real", inspiration: "Tagore", text: "The night kissed\nthe fading day\nwith a whisper:\nI am death,\nyour mother." },
  { id: 39, type: "real", inspiration: "Ghalib", text: "A glance was enough\nto make ruin\nfeel like grace." },
  { id: 40, type: "real", inspiration: "Gibran", text: "And think not\nyou can direct\nthe course of love." },

  { id: 41, type: "real", inspiration: "Rumi", text: "Your task is not to seek for love,\nbut merely to seek and find\nall the barriers within yourself\nthat you have built against it." },
  { id: 42, type: "real", inspiration: "Hafez", text: "This sky\nwhere we live\nis no place to lose your wings." },
  { id: 43, type: "real", inspiration: "Tagore", text: "Love is an endless mystery,\nfor it has nothing else\nto explain it." },
  { id: 44, type: "real", inspiration: "Ghalib", text: "The candle burned low,\nand still the night\nspoke only of you." },
  { id: 45, type: "real", inspiration: "Gibran", text: "Work is love made visible." },

  { id: 46, type: "real", inspiration: "Rumi", text: "Only from the heart\ncan you touch the sky." },
  { id: 47, type: "real", inspiration: "Hafez", text: "I have learned so much from God\nthat I can no longer\ncall myself\na Christian,\na Hindu,\na Muslim,\na Buddhist,\na Jew." },
  { id: 48, type: "real", inspiration: "Tagore", text: "You smiled and talked to me of nothing,\nand I felt that for this\nI had been waiting long." },
  { id: 49, type: "real", inspiration: "Ghalib", text: "What remains of me\nis what your memory\nwas kind enough\nto spare." },
  { id: 50, type: "real", inspiration: "Gibran", text: "Ever has it been\nthat love knows not its own depth\nuntil the hour\nof separation." },

  { id: 51, type: "original", inspiration: "Sufi", text: "You are the quiet place\nmy storms forget to reach,\nthe soft answer\nmy heart had been waiting for." },
  { id: 52, type: "original", inspiration: "Persian", text: "If love had a language,\nit would borrow your name\nand whisper it\nto the stars." },
  { id: 53, type: "original", inspiration: "Sufi", text: "In every lifetime,\nin every version of me,\nI think I would still\nfind my way to you." },
  { id: 54, type: "original", inspiration: "Persian", text: "The moon learned its glow\nfrom your silence,\nand I learned peace\nfrom your presence." },
  { id: 55, type: "original", inspiration: "Sufi", text: "You are not just loved,\nyou are where love begins,\nand where it decides\nto stay." },

  { id: 56, type: "original", inspiration: "Persian", text: "If I could fold time,\nI would place every hour\ncloser to you." },
  { id: 57, type: "original", inspiration: "Sufi", text: "There is a softness in you\nthat feels like home,\nand I never want\nto leave." },
  { id: 58, type: "original", inspiration: "Persian", text: "Even the stars pause,\njust to see how gently\nyou exist in my world." },
  { id: 59, type: "original", inspiration: "Sufi", text: "You are the reason\nordinary moments\nfeel sacred." },
  { id: 60, type: "original", inspiration: "Persian", text: "If love were a place,\nit would look like\nsitting beside you\nin silence." },

  { id: 61, type: "original", inspiration: "Sufi", text: "Your laughter\nis the kind of light\nthat does not ask permission\nto heal." },
  { id: 62, type: "original", inspiration: "Persian", text: "I did not know\nwhat peace meant,\nuntil your name\nrested in my chest." },
  { id: 63, type: "original", inspiration: "Sufi", text: "Even eternity\nwould feel short,\nif I could spend it\nwith you." },
  { id: 64, type: "original", inspiration: "Persian", text: "You are the gentle answer\nto every question\nmy heart never knew\nhow to ask." },
  { id: 65, type: "original", inspiration: "Sufi", text: "I do not need forever,\njust more moments\nwhere you are here." },

  { id: 66, type: "original", inspiration: "Persian", text: "In a world full of noise,\nyou are my favorite silence." },
  { id: 67, type: "original", inspiration: "Sufi", text: "You make even time\nslow down,\nas if it too\nwants to stay." },
  { id: 68, type: "original", inspiration: "Persian", text: "If I had only one prayer,\nit would be you,\nalways." },
  { id: 69, type: "original", inspiration: "Sufi", text: "There is something\nabout your presence\nthat feels like\nbeing understood." },
  { id: 70, type: "original", inspiration: "Persian", text: "You are not just\npart of my story,\nyou are the reason\nit feels beautiful." },

  { id: 71, type: "original", inspiration: "Sufi", text: "Even in crowded rooms,\nmy soul looks for you." },
  { id: 72, type: "original", inspiration: "Persian", text: "Your name\nfits perfectly\ninside my heartbeat." },
  { id: 73, type: "original", inspiration: "Sufi", text: "You arrived quietly,\nand everything changed." },
  { id: 74, type: "original", inspiration: "Persian", text: "You are the warmth\nI did not know\nI was missing." },
  { id: 75, type: "original", inspiration: "Sufi", text: "With you,\nI finally understand\nwhat calm feels like." },

  { id: 76, type: "original", inspiration: "Persian", text: "If love had a home,\nit would be\nwhere you are." },
  { id: 77, type: "original", inspiration: "Sufi", text: "You are my favorite\nkind of forever." },
  { id: 78, type: "original", inspiration: "Persian", text: "Everything soft\nin this world\nreminds me of you." },
  { id: 79, type: "original", inspiration: "Sufi", text: "Even the night\nfeels brighter\nwhen you are near." },
  { id: 80, type: "original", inspiration: "Persian", text: "I did not search for you,\nbut I am grateful\nI found you." },

  { id: 81, type: "original", inspiration: "Sufi", text: "You are the pause\nbetween my worries." },
  { id: 82, type: "original", inspiration: "Persian", text: "You feel like\nsomething I prayed for." },
  { id: 83, type: "original", inspiration: "Sufi", text: "Even silence\nis softer with you." },
  { id: 84, type: "original", inspiration: "Persian", text: "You are my calm\nin every storm." },
  { id: 85, type: "original", inspiration: "Sufi", text: "My world\nleans gently toward you." },

  { id: 86, type: "original", inspiration: "Persian", text: "You are where\nmy thoughts rest." },
  { id: 87, type: "original", inspiration: "Sufi", text: "You make time\nfeel kind." },
  { id: 88, type: "original", inspiration: "Persian", text: "You are the softness\nI choose every day." },
  { id: 89, type: "original", inspiration: "Sufi", text: "You are the reason\nI believe in quiet love." },
  { id: 90, type: "original", inspiration: "Persian", text: "And somehow,\nwith you,\neverything feels right." },

  { id: 91, type: "original", inspiration: "Sufi", text: "When morning opens,\nit carries a little of you\ninto my day." },
  { id: 92, type: "original", inspiration: "Persian", text: "Your presence turns\nsmall moments\ninto something gold." },
  { id: 93, type: "original", inspiration: "Sufi", text: "I would know you\nby the kindness\nin your silence alone." },
  { id: 94, type: "original", inspiration: "Persian", text: "The world softens\nwhen I imagine\nyour hand in mine." },
  { id: 95, type: "original", inspiration: "Sufi", text: "Some loves are loud.\nOurs feels like\na candle that never goes out." },

  { id: 96, type: "original", inspiration: "Persian", text: "You are the hush\nthat follows prayer,\nthe peace that stays behind." },
  { id: 97, type: "original", inspiration: "Sufi", text: "If my heart had a direction,\nit would turn to you\nlike flowers to light." },
  { id: 98, type: "original", inspiration: "Persian", text: "Every beautiful thing\nseems to be practicing\nhow to resemble you." },
  { id: 99, type: "original", inspiration: "Sufi", text: "Loving you feels less like falling\nand more like arriving." },
  { id: 100, type: "original", inspiration: "Persian", text: "Stay,\nso the hours may learn\nhow lovely time can be." }
];
