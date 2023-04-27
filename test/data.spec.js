import { filterCharacterName, extractApellidos, extractSpecies } from '../src/data.js';

const characters = [
  {
    "name": "Harry Potter",
    "birth": "31 July, 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Half-blood",
    "gender": "Male",
    "house": "Gryffindor",
  },
  {
    "name": "Rubeus Hagrid",
    "birth": "6 December 1928",
    "death": null,
    "species": "Half-Human/Half-Giant",
    "ancestry": "Part-Human (Half-giant)",
    "gender": "Male",
    "house": "Gryffindor"
  },
  {
    "name": "Hermione Granger",
    "birth": "19 September, 1979",
    "death": null,
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "house": "Gryffindor"
  },
  {
    "name": "Luna Lovegood",
    "birth": "13 February, 1981",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood or Half-blood",
    "gender": "Female",
    "house": "Ravenclaw"
  },
  {
    "name": "Draco Malfoy",
    "birth": "5 June, 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Male",
    "house": "Slytherin"
  },
  {
    "name": "Lily J. Potter",
    "birth": "30 January, 1960",
    "death": "31 October, 1981 (aged 21)",
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "house": "Gryffindor",
  }
];

const charactersApellidos = [
  "Granger",
  "Hagrid",
  "Lovegood",
  "Malfoy",
  "Potter"
];

const charactersFilter = [
  {
    "name": "Harry Potter",
    "birth": "31 July, 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Half-blood",
    "gender": "Male",
    "house": "Gryffindor",
  },
  {
    "name": "Lily J. Potter",
    "birth": "30 January, 1960",
    "death": "31 October, 1981 (aged 21)",
    "species": "Human",
    "ancestry": "Muggle-born",
    "gender": "Female",
    "house": "Gryffindor",
  },
];

const charactersSpecies = [
  "Half-Human/Half-Giant", "Human"

];
// const spells = [
//   {
//     "name": "Accio",
//     "other_name": "Summoning Charm",
//     "pronunciation": "Various, including: AK-ee-oh or AK-see-oh , AK-see-oh , AS-see-oh (US), and AT-chee-oh (Anglo-Catholic pronunciation)",
//     "spell_type": "Charm",
//     "description": "Summons an object towards the caster. It is able to summon objects in direct line of sight of the caster, as well as things out of view, by calling the object aloud after the incantation (unless the spell is casted nonverbally). This spell needs thought behind it, and the object must be clear in the casters mind before trying to summon it. The caster doesn't necessarily need to know the location of the target if they say the name of the object to be summoned, such as when Hermione Granger summoned some books from Dumbledore's office simply by saying \"Accio Horcrux books!\" while in Gryffindor Tower.",
//     "etymology": "The Latin word accio means \"I call\" or \"I summon\".",
//   },
//   {
//     "name": "Amato Animo Animato Animagus",
//     "other_name": "Animagus Spell",
//     "pronunciation": "ah-MAH-toh ah-NEE-moh ah-nee-MAH-toh an-a-MAY-jus",
//     "spell_type": "Transfiguration",
//     "description": "Spell used as part of the process of becoming an Animagus. The incantation has to be recited at sunrise and sundown, every day before the consumption of the Animagus Potion. The incantation is also recited just prior to the consumption of the potion, which has to take place just after a lightning storm starts. The incantation is recited while placing the wand's tip over one's heart.",
//     "etymology": null,
//   },
//   {
//     "name": "Avada Kedavra",
//     "other_name": "Killing Curse",
//     "pronunciation": "ah-VAH-dah keh-DAV-rah",
//     "spell_type": "Curse",
//     "description": "",
//     "etymology": null,
//   },
//   {
//     "name": "Serpensortia",
//     "other_name": "Snake Summons Spell",
//     "pronunciation": "ser-pen-SOR-shah, SER-pehn-SOR-tee-ah",
//     "spell_type": "Conjuration",
//     "description": "Conjures a serpent from the caster's wand.",
//     "mention": "Used by Draco Malfoy while duelling Harry Potter in 1992.",
//     "etymology": "Latin serpens meaning \"a snake\" and Latin ortis meaning \"source\".",
//   }
// ];

// const potions = [
//   {
//     "name": "Amortentia",
//     "description": "The world's strongest Love Potion; does not create real love, just powerful obsession."
//   },
//   {
//     "name": "Veritaserum",
//     "description": "Forces the taker to tell the truth."
//   },
//   {
//     "name": "Polyjuice Potion",
//     "description": "Temporarily transforms the drinker into another person. The drinker will take on the appearance of the person whose hair, fingernails, etc., are added to the potion. Not to be used for transforming into an animal. Seen/Mentioned: In 1992 used by Harry and Ron to enter Slytherin common Room; Severus Snape thought Harry was stealing his ingredients to make a polyjuice potion; Used multiple times in 1997 and 1998."
//   },
//   {
//     "name": "Laugh-inducing Potion",
//     "description": "A potion that makes the taker laugh uncontrollably."
//   },

// ]

describe('Filtra a los personajes por su apellido', () => {
  it('filtro Potter', () => {
    expect(filterCharacterName(characters, 'Potter')).toEqual(charactersFilter);
  });
});

describe('Extrae apellidos', () => {
  it('is a function', () => {
    expect(typeof extractApellidos).toBe('function');
  });
  it('devuelve un array con los apellidos sin repetir', () => {
    const result = extractApellidos(characters);
    expect(result).toEqual(charactersApellidos);
  });
});

describe('Extrae especies', () => {
  it('is a function', () => {
    expect(typeof extractSpecies).toBe('function');
  });
  it('devuelve un array con especies sin repetir', () => {
    const result = extractSpecies(characters);
    expect(result).toEqual(charactersSpecies);
  });
});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
