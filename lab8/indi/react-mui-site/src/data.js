const data = [
  {
    "id": 1,
    "date": "01.09.2024",
    "workout": "Баскетбол",
    "time": 73,
    "calories": 241,
    "pulse": 126
  },
  {
    "id": 2,
    "date": "02.09.2024",
    "workout": "HIIT",
    "time": 82,
    "calories": 614,
    "pulse": 160
  },
  {
    "id": 3,
    "date": "03.09.2024",
    "workout": "Йога",
    "time": 81,
    "calories": 566,
    "pulse": 147
  },
  {
    "id": 4,
    "date": "04.09.2024",
    "workout": "Велоспорт",
    "time": 84,
    "calories": 342,
    "pulse": 128
  },
  {
    "id": 5,
    "date": "05.09.2024",
    "workout": "Плавание",
    "time": 32,
    "calories": 833,
    "pulse": 126
  },
  {
    "id": 6,
    "date": "06.09.2024",
    "workout": "HIIT",
    "time": 38,
    "calories": 517,
    "pulse": 116
  },
  {
    "id": 7,
    "date": "07.09.2024",
    "workout": "Силовая тренировка",
    "time": 62,
    "calories": 683,
    "pulse": 145
  },
  {
    "id": 8,
    "date": "08.09.2024",
    "workout": "Силовая тренировка",
    "time": 65,
    "calories": 644,
    "pulse": 130
  },
  {
    "id": 9,
    "date": "09.09.2024",
    "workout": "Пилатес",
    "time": 46,
    "calories": 765,
    "pulse": 140
  },
  {
    "id": 10,
    "date": "10.09.2024",
    "workout": "Футбол",
    "time": 86,
    "calories": 466,
    "pulse": 113
  },
  {
    "id": 11,
    "date": "11.09.2024",
    "workout": "HIIT",
    "time": 21,
    "calories": 295,
    "pulse": 156
  },
  {
    "id": 12,
    "date": "12.09.2024",
    "workout": "Баскетбол",
    "time": 20,
    "calories": 826,
    "pulse": 141
  },
  {
    "id": 13,
    "date": "13.09.2024",
    "workout": "Гребля",
    "time": 51,
    "calories": 533,
    "pulse": 155
  },
  {
    "id": 14,
    "date": "14.09.2024",
    "workout": "Силовая тренировка",
    "time": 44,
    "calories": 781,
    "pulse": 124
  },
  {
    "id": 15,
    "date": "15.09.2024",
    "workout": "Велоспорт",
    "time": 38,
    "calories": 756,
    "pulse": 138
  },
  {
    "id": 16,
    "date": "16.09.2024",
    "workout": "Силовая тренировка",
    "time": 30,
    "calories": 527,
    "pulse": 142
  },
  {
    "id": 17,
    "date": "17.09.2024",
    "workout": "Футбол",
    "time": 33,
    "calories": 508,
    "pulse": 145
  },
  {
    "id": 18,
    "date": "18.09.2024",
    "workout": "Йога",
    "time": 35,
    "calories": 760,
    "pulse": 131
  },
  {
    "id": 19,
    "date": "19.09.2024",
    "workout": "HIIT",
    "time": 46,
    "calories": 817,
    "pulse": 145
  },
  {
    "id": 20,
    "date": "20.09.2024",
    "workout": "Пилатес",
    "time": 56,
    "calories": 655,
    "pulse": 115
  },
  {
    "id": 21,
    "date": "21.09.2024",
    "workout": "Пилатес",
    "time": 69,
    "calories": 524,
    "pulse": 146
  },
  {
    "id": 22,
    "date": "22.09.2024",
    "workout": "Велоспорт",
    "time": 57,
    "calories": 388,
    "pulse": 122
  },
  {
    "id": 23,
    "date": "23.09.2024",
    "workout": "Плавание",
    "time": 24,
    "calories": 827,
    "pulse": 152
  },
  {
    "id": 24,
    "date": "24.09.2024",
    "workout": "Йога",
    "time": 80,
    "calories": 270,
    "pulse": 115
  },
  {
    "id": 25,
    "date": "25.09.2024",
    "workout": "Плавание",
    "time": 39,
    "calories": 239,
    "pulse": 115
  },
  {
    "id": 26,
    "date": "26.09.2024",
    "workout": "HIIT",
    "time": 70,
    "calories": 737,
    "pulse": 127
  },
  {
    "id": 27,
    "date": "27.09.2024",
    "workout": "HIIT",
    "time": 50,
    "calories": 420,
    "pulse": 153
  },
  {
    "id": 28,
    "date": "28.09.2024",
    "workout": "Пилатес",
    "time": 73,
    "calories": 793,
    "pulse": 127
  },
  {
    "id": 29,
    "date": "29.09.2024",
    "workout": "Футбол",
    "time": 83,
    "calories": 876,
    "pulse": 151
  },
  {
    "id": 30,
    "date": "30.09.2024",
    "workout": "Гребля",
    "time": 30,
    "calories": 532,
    "pulse": 149
  },
  {
    "id": 31,
    "date": "01.10.2024",
    "workout": "Силовая тренировка",
    "time": 82,
    "calories": 801,
    "pulse": 150
  },
  {
    "id": 32,
    "date": "02.10.2024",
    "workout": "Гребля",
    "time": 44,
    "calories": 448,
    "pulse": 111
  },
  {
    "id": 33,
    "date": "03.10.2024",
    "workout": "Йога",
    "time": 34,
    "calories": 425,
    "pulse": 133
  },
  {
    "id": 34,
    "date": "04.10.2024",
    "workout": "Плавание",
    "time": 62,
    "calories": 636,
    "pulse": 113
  },
  {
    "id": 35,
    "date": "05.10.2024",
    "workout": "Силовая тренировка",
    "time": 38,
    "calories": 424,
    "pulse": 112
  },
  {
    "id": 36,
    "date": "06.10.2024",
    "workout": "Пилатес",
    "time": 88,
    "calories": 816,
    "pulse": 153
  },
  {
    "id": 37,
    "date": "07.10.2024",
    "workout": "Силовая тренировка",
    "time": 23,
    "calories": 327,
    "pulse": 150
  },
  {
    "id": 38,
    "date": "08.10.2024",
    "workout": "Велоспорт",
    "time": 35,
    "calories": 600,
    "pulse": 115
  },
  {
    "id": 39,
    "date": "09.10.2024",
    "workout": "Гребля",
    "time": 34,
    "calories": 237,
    "pulse": 148
  },
  {
    "id": 40,
    "date": "10.10.2024",
    "workout": "Бег",
    "time": 44,
    "calories": 389,
    "pulse": 155
  },
  {
    "id": 41,
    "date": "11.10.2024",
    "workout": "Силовая тренировка",
    "time": 81,
    "calories": 415,
    "pulse": 156
  },
  {
    "id": 42,
    "date": "12.10.2024",
    "workout": "Бег",
    "time": 22,
    "calories": 757,
    "pulse": 137
  },
  {
    "id": 43,
    "date": "13.10.2024",
    "workout": "Пилатес",
    "time": 32,
    "calories": 466,
    "pulse": 114
  },
  {
    "id": 44,
    "date": "14.10.2024",
    "workout": "Велоспорт",
    "time": 29,
    "calories": 862,
    "pulse": 129
  },
  {
    "id": 45,
    "date": "15.10.2024",
    "workout": "Гребля",
    "time": 75,
    "calories": 384,
    "pulse": 113
  },
  {
    "id": 46,
    "date": "16.10.2024",
    "workout": "HIIT",
    "time": 79,
    "calories": 240,
    "pulse": 148
  },
  {
    "id": 47,
    "date": "17.10.2024",
    "workout": "Силовая тренировка",
    "time": 70,
    "calories": 404,
    "pulse": 126
  },
  {
    "id": 48,
    "date": "18.10.2024",
    "workout": "Гребля",
    "time": 80,
    "calories": 783,
    "pulse": 120
  },
  {
    "id": 49,
    "date": "19.10.2024",
    "workout": "Велоспорт",
    "time": 27,
    "calories": 892,
    "pulse": 120
  },
  {
    "id": 50,
    "date": "20.10.2024",
    "workout": "Плавание",
    "time": 63,
    "calories": 742,
    "pulse": 126
  },
  {
    "id": 51,
    "date": "21.10.2024",
    "workout": "Силовая тренировка",
    "time": 76,
    "calories": 881,
    "pulse": 121
  },
  {
    "id": 52,
    "date": "22.10.2024",
    "workout": "Бег",
    "time": 80,
    "calories": 897,
    "pulse": 136
  },
  {
    "id": 53,
    "date": "23.10.2024",
    "workout": "Пилатес",
    "time": 85,
    "calories": 518,
    "pulse": 151
  },
  {
    "id": 54,
    "date": "24.10.2024",
    "workout": "Гребля",
    "time": 69,
    "calories": 873,
    "pulse": 126
  },
  {
    "id": 55,
    "date": "25.10.2024",
    "workout": "Плавание",
    "time": 21,
    "calories": 668,
    "pulse": 157
  },
  {
    "id": 56,
    "date": "26.10.2024",
    "workout": "Силовая тренировка",
    "time": 62,
    "calories": 246,
    "pulse": 144
  },
  {
    "id": 57,
    "date": "27.10.2024",
    "workout": "Йога",
    "time": 37,
    "calories": 445,
    "pulse": 158
  },
  {
    "id": 58,
    "date": "28.10.2024",
    "workout": "Футбол",
    "time": 65,
    "calories": 824,
    "pulse": 128
  },
  {
    "id": 59,
    "date": "29.10.2024",
    "workout": "Гребля",
    "time": 36,
    "calories": 517,
    "pulse": 134
  },
  {
    "id": 60,
    "date": "30.10.2024",
    "workout": "Баскетбол",
    "time": 30,
    "calories": 201,
    "pulse": 148
  },
  {
    "id": 61,
    "date": "31.10.2024",
    "workout": "Велоспорт",
    "time": 62,
    "calories": 363,
    "pulse": 125
  },
  {
    "id": 62,
    "date": "01.11.2024",
    "workout": "Велоспорт",
    "time": 77,
    "calories": 587,
    "pulse": 155
  },
  {
    "id": 63,
    "date": "02.11.2024",
    "workout": "Пилатес",
    "time": 73,
    "calories": 232,
    "pulse": 135
  },
  {
    "id": 64,
    "date": "03.11.2024",
    "workout": "Пилатес",
    "time": 73,
    "calories": 878,
    "pulse": 155
  },
  {
    "id": 65,
    "date": "04.11.2024",
    "workout": "Бег",
    "time": 41,
    "calories": 656,
    "pulse": 114
  },
  {
    "id": 66,
    "date": "05.11.2024",
    "workout": "Йога",
    "time": 40,
    "calories": 657,
    "pulse": 143
  },
  {
    "id": 67,
    "date": "06.11.2024",
    "workout": "Футбол",
    "time": 20,
    "calories": 239,
    "pulse": 141
  },
  {
    "id": 68,
    "date": "07.11.2024",
    "workout": "Гребля",
    "time": 59,
    "calories": 678,
    "pulse": 113
  },
  {
    "id": 69,
    "date": "08.11.2024",
    "workout": "Баскетбол",
    "time": 44,
    "calories": 761,
    "pulse": 150
  },
  {
    "id": 70,
    "date": "09.11.2024",
    "workout": "Силовая тренировка",
    "time": 36,
    "calories": 215,
    "pulse": 135
  },
  {
    "id": 71,
    "date": "10.11.2024",
    "workout": "Баскетбол",
    "time": 60,
    "calories": 203,
    "pulse": 123
  },
  {
    "id": 72,
    "date": "11.11.2024",
    "workout": "Бег",
    "time": 20,
    "calories": 891,
    "pulse": 143
  },
  {
    "id": 73,
    "date": "12.11.2024",
    "workout": "Пилатес",
    "time": 32,
    "calories": 395,
    "pulse": 117
  },
  {
    "id": 74,
    "date": "13.11.2024",
    "workout": "Пилатес",
    "time": 45,
    "calories": 509,
    "pulse": 127
  },
  {
    "id": 75,
    "date": "14.11.2024",
    "workout": "Плавание",
    "time": 32,
    "calories": 687,
    "pulse": 135
  },
  {
    "id": 76,
    "date": "15.11.2024",
    "workout": "Силовая тренировка",
    "time": 22,
    "calories": 481,
    "pulse": 138
  },
  {
    "id": 77,
    "date": "16.11.2024",
    "workout": "Силовая тренировка",
    "time": 52,
    "calories": 336,
    "pulse": 151
  },
  {
    "id": 78,
    "date": "17.11.2024",
    "workout": "HIIT",
    "time": 64,
    "calories": 317,
    "pulse": 119
  },
  {
    "id": 79,
    "date": "18.11.2024",
    "workout": "Йога",
    "time": 22,
    "calories": 243,
    "pulse": 112
  },
  {
    "id": 80,
    "date": "19.11.2024",
    "workout": "Велоспорт",
    "time": 53,
    "calories": 771,
    "pulse": 130
  },
  {
    "id": 81,
    "date": "20.11.2024",
    "workout": "Гребля",
    "time": 25,
    "calories": 822,
    "pulse": 151
  },
  {
    "id": 82,
    "date": "21.11.2024",
    "workout": "Футбол",
    "time": 78,
    "calories": 855,
    "pulse": 137
  },
  {
    "id": 83,
    "date": "22.11.2024",
    "workout": "Гребля",
    "time": 88,
    "calories": 382,
    "pulse": 123
  },
  {
    "id": 84,
    "date": "23.11.2024",
    "workout": "Баскетбол",
    "time": 57,
    "calories": 209,
    "pulse": 118
  },
  {
    "id": 85,
    "date": "24.11.2024",
    "workout": "Плавание",
    "time": 54,
    "calories": 541,
    "pulse": 131
  },
  {
    "id": 86,
    "date": "25.11.2024",
    "workout": "Гребля",
    "time": 31,
    "calories": 546,
    "pulse": 159
  },
  {
    "id": 87,
    "date": "26.11.2024",
    "workout": "Пилатес",
    "time": 24,
    "calories": 242,
    "pulse": 127
  },
  {
    "id": 88,
    "date": "27.11.2024",
    "workout": "Плавание",
    "time": 39,
    "calories": 797,
    "pulse": 128
  },
  {
    "id": 89,
    "date": "28.11.2024",
    "workout": "Гребля",
    "time": 70,
    "calories": 761,
    "pulse": 118
  },
  {
    "id": 90,
    "date": "29.11.2024",
    "workout": "Йога",
    "time": 34,
    "calories": 689,
    "pulse": 156
  },
  {
    "id": 91,
    "date": "30.11.2024",
    "workout": "Велоспорт",
    "time": 26,
    "calories": 515,
    "pulse": 121
  },
  {
    "id": 92,
    "date": "01.12.2024",
    "workout": "HIIT",
    "time": 29,
    "calories": 509,
    "pulse": 135
  },
  {
    "id": 93,
    "date": "02.12.2024",
    "workout": "Гребля",
    "time": 58,
    "calories": 624,
    "pulse": 116
  },
  {
    "id": 94,
    "date": "03.12.2024",
    "workout": "Силовая тренировка",
    "time": 81,
    "calories": 685,
    "pulse": 131
  },
  {
    "id": 95,
    "date": "04.12.2024",
    "workout": "Гребля",
    "time": 35,
    "calories": 690,
    "pulse": 117
  },
  {
    "id": 96,
    "date": "05.12.2024",
    "workout": "Футбол",
    "time": 74,
    "calories": 238,
    "pulse": 129
  },
  {
    "id": 97,
    "date": "06.12.2024",
    "workout": "Гребля",
    "time": 39,
    "calories": 370,
    "pulse": 150
  },
  {
    "id": 98,
    "date": "07.12.2024",
    "workout": "Пилатес",
    "time": 68,
    "calories": 854,
    "pulse": 115
  },
  {
    "id": 99,
    "date": "08.12.2024",
    "workout": "Силовая тренировка",
    "time": 30,
    "calories": 402,
    "pulse": 157
  },
  {
    "id": 100,
    "date": "09.12.2024",
    "workout": "Велоспорт",
    "time": 27,
    "calories": 594,
    "pulse": 110
  }
];
export default data;