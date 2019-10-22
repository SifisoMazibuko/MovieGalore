export interface IMovie {
    id: number;
    title: string;
    image: string;
    releaseYear?: string;
    genre: string[];
    rating?: number;
    director?: string;
    actors?: string[];
    description: string;
    runtime?: number;
}

export const movies: IMovie[] = [
  {
    id: 1,
    title: 'How to Train Your Dragon',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/2e92274a-ea2b-4104-b700-3a01cd7c99ec_15.jpg',
    genre: ['Animation', 'Adventure', 'Family'],
    // tslint:disable-next-line: max-line-length
    description: 'As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father',
    releaseYear: '2010'

  },
  {
    id: 2,
    title: 'Kill Bill: Vol. 1',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg',
    genre: ['Action', 'Crime'],
    // tslint:disable-next-line: max-line-length
    description: 'An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle – but The Bride lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.',
    releaseYear: '2003'
  },
  {
    id: 3,
    title: 'Drag Me to Hell',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg',
    genre: ['Horror', 'Thriller'],
    releaseYear: '2009',
    // tslint:disable-next-line: max-line-length
    description: 'After denying a woman the extension she needs to keep her home, loan officer Christine Brown sees her once-promising life take a startling turn for the worse. Christine is convinced shes been cursed by a Gypsy, but her boyfriend is skeptical. Her only hope seems to lie in a psychic who claims he can help her lift the curse and keep her soul from being dragged straight to hell.'
  },
  {
    id: 4,
    title: 'Tangled',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/7e5d4fec-2f54-4edf-b815-3d58ce2ca188_8.jpg',
    genre: ['Action', 'Drama', 'Sci-Fi'],
    releaseYear: '2010',
    // tslint:disable-next-line: max-line-length
    description: 'When the kingdoms most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, hes taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynns curious captor, whos looking for her ticket out of the tower where shes been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.\n'
  },
  {
    id: 5,
    title: 'The Amazing Spider-Man 2',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg',
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    releaseYear: '2014',
    // tslint:disable-next-line: max-line-length
    description: 'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.\n'
  },
  {
    id: 6,
    title: 'The Last Samurai',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/3552b586-2580-4d95-b244-103d520d1cda_6.jpg',
    genre: ['Action', 'Drama', 'History'],
    releaseYear: '2003',
    // tslint:disable-next-line: max-line-length
    description: 'Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurais way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.'
  },
  {
    id: 7,
    title: 'the Machinist',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg',
    genre: ['Drama', 'Thriller'],
    releaseYear: '2004',
    // tslint:disable-next-line: max-line-length
    description: 'The Machinist is the story of Trevor Reznik, a lathe-operator who is dying of insomnia. In a machine shop, occupational hazards are bad enough under normal circumstances; yet for Trevor the risks are compounded by fatigue. Trevor has lost the ability to sleep. This is no ordinary insomnia...'
  },
  {
    id: 8,
    title: 'Transformers: Age of Extinction',
    image: 'https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg',
    genre: ['Actiopn', 'Sci-fi', 'Adventure'],
    releaseYear: '',
    // tslint:disable-next-line: max-line-length
    description: 'As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.'
  },
];
