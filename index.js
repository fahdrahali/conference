const speakers = [
  {
    id: 1,
    fullName: 'Bilal Cinarli',
    img: 'url(./assets/images/Bilal-Cinarli.jpg)',
    job: 'Fast',
    description: 'Bilal is an Engineering Manager for Fast (https://fast.co) and Google Developer Expert on Web Technologies. He focuses on developer experience, frontend architecture, performance, optimization and code scalability.',
  },
  {
    id: 2,
    fullName: 'Hans-Christian Otto',
    img: 'url(./assets/images/Hans-Christian.jpg)',
    job: 'Suora GmbH',
    description: 'After several years of being employed as a Director of Software Development, Christian co-founded Suora GmbH, a company that supports customers in designing, building, and modernizing web applications. From frontend technologies to complex server side architectures',
  },
  {
    id: 3,
    fullName: 'Dwane Hemmings',
    img: 'url(./assets/images/Dwane-Hemmings.jpg)',
    job: 'Vonage',
    description: 'Dwane is a long-time hobby coder turned professional. Maker of random projects. ',
  },
  {
    id: 4,
    fullName: 'Roy Derks',
    img: 'url(./assets/images/Roy-Derks.jpg)',
    job: 'developer at StepZen',
    description: 'Roy Derks is a developer, author and public speaker from the Netherlands. He’s providing services to help tech companies scale from ideation to MVP or from startup to scaleup, by training and inspiring developers worldwide. Currently he is working with StepZen on a mission to make GraphQL adoption easy and scalable.',
  },
  {
    id: 5,
    fullName: 'Gil Fink',
    img: 'url(./assets/images/Gil-Fink.jpg)',
    job: 'sparXys',
    description: 'Gil Fink is a web development expert, Web Technologies GDE, Microsoft Development Technologies MVP and sparXys CEO. He is currently consulting for various enterprises and companies, where he helps to develop web based solutions.',
  },
  {
    id: 6,
    fullName: 'Christian Liebel',
    img: 'url(./assets/images/Christian-Liebel.jpg)',
    job: 'Thinktecture AG',
    description: 'Christian Liebel is a cross-platform development enthusiast thrilled by the opportunities offered by modern web technologies: Christian helps enterprises and independent software vendors to develop modern, cross-platform business applications based on Angular',
  },
];

function createFeaturedSpeakersSection() {
  const section = document.createElement('section');
  section.className = 'speakers';
  const main = document.querySelector('.main');
  main.appendChild(section);
}

createFeaturedSpeakersSection();

const speakersSection = document.querySelector('.speakers');

function createTitleFeaturedSpeakers() {
  const title = document.createElement('h1');
  const span = document.createElement('span');

  title.textContent = 'Featured Speakers';
  span.textContent = '___';

  speakersSection.appendChild(title);
  speakersSection.appendChild(span);
}

function createCardSpeaker() {
  const speakerContainer = document.createElement('div');
  speakerContainer.className = 'speakers-container';
  speakers.map((speaker) => {
    const speakerDiv = document.createElement('div');
    if (speaker.id < 3) {
      speakerDiv.className = 'speaker';
    } else {
      speakerDiv.className = 'speaker is-inactive';
    }
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img';
    const blackWhiteDiv = document.createElement('div');
    const imgSpeakerDiv = document.createElement('div');
    blackWhiteDiv.className = 'black-white-img';
    imgSpeakerDiv.className = 'speaker-img';
    imgSpeakerDiv.style.backgroundImage = speaker.img;

    imgDiv.appendChild(blackWhiteDiv);
    imgDiv.appendChild(imgSpeakerDiv);

    const contentSpeakerDiv = document.createElement('div');
    contentSpeakerDiv.className = 'content-speaker';

    const h2Title = document.createElement('h2');
    h2Title.textContent = speaker.fullName;
    const h3Title = document.createElement('h3');
    h3Title.textContent = speaker.job;
    const span = document.createElement('span');
    const p = document.createElement('p');
    p.textContent = speaker.description;

    contentSpeakerDiv.appendChild(h2Title);
    contentSpeakerDiv.appendChild(h3Title);
    contentSpeakerDiv.appendChild(span);
    contentSpeakerDiv.appendChild(p);

    speakerDiv.appendChild(imgDiv);
    speakerDiv.appendChild(contentSpeakerDiv);

    speakerContainer.appendChild(speakerDiv);
    return 1;
  });
  speakersSection.appendChild(speakerContainer);
}

function createButtonMore() {
  if (window.matchMedia('(max-width: 768px)')) {
    const button = document.createElement('button');
    button.className = 'btn-more';
    button.textContent = 'MORE';
    speakersSection.appendChild(button);
  }
}

function showMoreSpeakers() {
  const btnMore = document.querySelector('.btn-more');
  btnMore.addEventListener('click', () => {
    document.querySelectorAll('.speaker').forEach((speaker) => {
      speaker.className = 'speaker is-active';
      btnMore.className = 'is-inactive';
    });
  });
}

createTitleFeaturedSpeakers();
createCardSpeaker();
createButtonMore();
showMoreSpeakers();
