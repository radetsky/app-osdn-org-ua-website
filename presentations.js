#!/usr/bin/env node

var presentations =
            [
              {key: '1',
                speaker: 'Дмитрий Костюк',
                position: 'Бесменный ведущий',
                photo: {uri: 'https://radetsky.github.io/app-osdn-org-ua-website/images/speakers/Kostyuk.jpg'},
                name:  'Вступительное слово ведущего',
                description: '',
                slideshare: '',
              },
              {key: '2',
                speaker: 'Andy Shevchenko',
                position: 'Linux driver developer, Intel, Finland',
                photo: {uri: 'https://radetsky.github.io/app-osdn-org-ua-website/images/speakers/Shevchenko0.jpg'},
                name:  'Typical mistakes when submitting a new code to linux kernel',
                description: '',
                slideshare: '',

              },
              {key: '3',
                speaker: 'Andrzej Pietrasiewicz',
                position: 'Linux driver developer, Samsung, Poland',
                photo: {uri: 'https://radetsky.github.io/app-osdn-org-ua-website/images/speakers/Pietrasiewicz.jpg'},
                name: 'Make your own usb gadget',
                description: '',
                slideshare: '',
              },
              {key: '21',
                speaker: 'Alex Radetsky',
                position: 'Software developer, entrepreneur, PearlPBX',
                photo: {uri: 'https://radetsky.github.io/app-osdn-org-ua-website/images/speakers/Radetsky.png'},
                name: 'Как я всего за одни сутки слепил мобильное приложение для OSDN 2017 с помощью ReactNative ',
                description: '',
                slideshare: '',
              },
            ];

console.log(JSON.stringify(presentations));
