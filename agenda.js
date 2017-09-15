#!/usr/bin/env node

var agenda = [
  {"title": 'Blue hall',
    data: [
      {key: 1, time: '9:00- 10:00', speaker: '',
          title: 'Registration'},
      {key: 2, time: '10:00- 10:40', speaker: 'Ihor Dvoretskyi',
          title: 'Driving Open Source Software Products'},
      {key: 3, time: '10:40- 11:20', speaker: 'Stanislav Ivaschenko',
          title: 'Kubernetes is up and running. What\'s next? '},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 5, time: '11:40- 12:10', speaker: 'Pavel Suikov',
          title: 'Где я? The art of navigating by the GPS.'},
      {key: 6, time: '12:10- 12:30', speaker: 'Denis Dovgopoliy',
          title: 'Как слепить MVP продукта из говна и палок используя опенсорс решения или почему нельзя писать самому код ?'},
      {key: 7, time: '12:30- 13:00', speaker: 'Eugene Pilyankevich',
          title: 'Developing open-source security tooling: lessons to learn'}
    ]},
  {title: 'Lunch',
    data: [
      {key: 8, time: '14:00- 14:40', speaker: 'Viktor Turskyi',
          title: 'Language Independent Validation Rules 2.0'},
      {key: 9, time: '14:40- 15:20', speaker: 'Vladimir Melnik',
          title: 'Построение неубиваемого кластера управления Apache CloudStack'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 10, time: '15:40- 16:20', speaker: 'Vadim Getmanshchuk',
          title: 'Controlling your global web cache'},
      {key: 11, time: '16:20- 17:00', speaker: 'Ignat Korchagin',
          title: 'Reclaim back keys for your kingdom: an open-source vaultless password manager'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 12, time: '17:20- 18:00', speaker: 'Oleksii Kirichenko',
          title: 'How to build an openstack commercial cloud in less than 6 months'},
      {key: 13, time: '18:00- 18:40', speaker: 'Mykyta Biliavskyi',
          title: 'Enlightenment foundation libraries'},
      {key: 14, time: '18:40', speaker: 'Dmitry Kostyuk',
          title: 'Closing speech'},
    ]},

  {title: 'White Hall',
    data: [
      {key: 21, time: '14:00- 14:20', speaker: 'Roman Savochenko',
          title: 'OpenSCADA - Відкрита SCADA система у перспективах релізу 0.9LTS'},
      {key: 22, time: '14:20- 15:20', speaker: 'Maxim Boguk',
          title: 'Неклассические техники оптимизации запросов в PostgreSQL, или как научить слона танцевать рок-н-ролл?'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 23, time: '15:40- 16:20', speaker: 'Timofey Turenko',
          title: 'DB proxy server testing: run tests on ten of VMS with Jenkins, Vagrant and our tool MDBCI'},
      {key: 24, time: '16:20- 17:00', speaker: 'Mykola Marzhan',
          title: 'Percona Monitoring and Management Architecture'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 25, time: '17:20- 18:00', speaker: 'Evgeniy Fedirets',
          title: 'Openorienteering mapper: Довгий шлях до 1.0'},
      {key: 26, time: '18:00- 18:40', speaker: '',
          title: ''},
    ]},
];

console.log(JSON.stringify(agenda));
