#!/usr/bin/env node

var agenda = [
  {"title": 'Blue hall',
    data: [
      {key: 1, time: '9:30- 9:55', speaker: '',
          title: 'Registration'},
      {key: 2, time: '9:55- 10:00', speaker: 'Dmitry Kostyuk',
          title: 'Opening'},
      {key: 3, time: '10:00-10:40', speaker: 'Eugene Pilyankevich',
          title: 'Developing open-source security tooling: lessons to learn'},
      {key: 4, time: '10:40-11:20', speaker: 'Ihor Dvoretskyi',
          title: 'Kubernetes'}
    ]},
  {title: 'Coffee break',
    data: [
      {key: 5, time: '11:40- 12:05', speaker: 'Viktor Kompaneiets',
          title: 'Open source and StartUps'},
      {key: 6, time: '12:05- 12:30', speaker: 'Denis Dovgopoliy',
          title: 'Как слепить MVP продукта из говна и палок используя опенсорс решения или почему нельзя писать самому код ?'},
      {key: 7, time: '12:30- 13:00', speaker: 'Stanislav Ivaschenko',
          title: 'Jenkins'}
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
      {key: 10, time: '15:40- 16:20', speaker: 'Andy Shevchenko',
          title: 'Typical mistakes when submitting a new code to Linux kernel'},
      {key: 11, time: '16:20- 17:00', speaker: 'Andrzej Pietrasiewicz',
          title: 'Make your own USB gadget'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 12, time: '17:20- 18:00', speaker: 'Krzysztof Opasiak',
          title: 'USB attacks explained'},
      {key: 13, time: '18:00- 18:40', speaker: 'Pavel Emelyanov',
          title: 'Сервер, виртуальная машина, контейнер ... а что дальше?'},
      {key: 14, time: '18:40', speaker: 'Dmitry Kostyuk',
          title: 'Closing speech'},
    ]},

  {title: 'Red Hall',
    data: [
      {key: 21, time: '14:00- 14:40', speaker: 'Vadim Getmanshchuk',
          title: 'Controlling your global web cache'},
      {key: 22, time: '14:40- 15:20', speaker: 'Timofey Turenko',
          title: 'DB proxy server testing: run tests on tens of VMs with Jenkins, Vagrant and our tool MDBCI'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 23, time: '15:40- 16:10', speaker: 'Grigory Zlobin',
          title: 'Програмне забезпечення ІТ компанії та фахова підготовка студентів напрямку "Комп’ютерні науки"'},
      {key: 24, time: '16:10- 17:00', speaker: 'Maxim Boguk',
          title: 'Неклассические техники оптимизации запросов в PostgreSQL, или как научить слона танцевать рок-н-ролл?'},
    ]},
  {title: 'Coffee break',
    data: [
      {key: 25, time: '17:20- 18:00', speaker: 'Roman Savochenko',
          title: 'OpenSCADA'},
      {key: 26, time: '18:00- 18:40', speaker: 'Mykola Marzhan',
          title: 'Percona Monitoring and Management Architecture'},
    ]},
];

console.log(JSON.stringify(agenda));


