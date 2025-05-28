const data = [
   {
     "id": 1,
     "date": "01.09.2024",
     "workout": "Велоспорт",
     "time": 84,
     "calories": 845,
     "pulse": 146
   },
   {
     "id": 2,
     "date": "02.09.2024",
     "workout": "Силовая тренировка",
     "time": 83,
     "calories": 860,
     "pulse": 146
   },
   {
     "id": 3,
     "date": "03.09.2024",
     "workout": "HIIT",
     "time": 51,
     "calories": 560,
     "pulse": 115
   },
   {
     "id": 4,
     "date": "04.09.2024",
     "workout": "Бег",
     "time": 27,
     "calories": 270,
     "pulse": 154
   },
   {
     "id": 5,
     "date": "05.09.2024",
     "workout": "Бег",
     "time": 55,
     "calories": 550,
     "pulse": 132
   },
   {
     "id": 6,
     "date": "06.09.2024",
     "workout": "Бег",
     "time": 34,
     "calories": 305,
     "pulse": 122
   },
   {
     "id": 7,
     "date": "07.09.2024",
     "workout": "Пилатес",
     "time": 32,
     "calories": 280,
     "pulse": 142
   },
   {
     "id": 8,
     "date": "08.09.2024",
     "workout": "Гребля",
     "time": 70,
     "calories": 750,
     "pulse": 158
   },
   {
     "id": 9,
     "date": "09.09.2024",
     "workout": "Силовая тренировка",
     "time": 73,
     "calories": 710,
     "pulse": 139
   },
   {
     "id": 10,
     "date": "10.09.2024",
     "workout": "Пилатес",
     "time": 30,
     "calories": 305,
     "pulse": 149
   },
   {
     "id": 11,
     "date": "11.09.2024",
     "workout": "Силовая тренировка",
     "time": 29,
     "calories": 280,
     "pulse": 131
   },
   {
     "id": 12,
     "date": "12.09.2024",
     "workout": "Бег",
     "time": 79,
     "calories": 750,
     "pulse": 116
   },
   {
     "id": 13,
     "date": "13.09.2024",
     "workout": "Гребля",
     "time": 50,
     "calories": 535,
     "pulse": 145
   },
   {
     "id": 14,
     "date": "14.09.2024",
     "workout": "Баскетбол",
     "time": 66,
     "calories": 670,
     "pulse": 152
   },
   {
     "id": 15,
     "date": "15.09.2024",
     "workout": "HIIT",
     "time": 50,
     "calories": 515,
     "pulse": 139
   },
   {
     "id": 16,
     "date": "16.09.2024",
     "workout": "Баскетбол",
     "time": 32,
     "calories": 325,
     "pulse": 123
   },
   {
     "id": 17,
     "date": "17.09.2024",
     "workout": "Силовая тренировка",
     "time": 30,
     "calories": 345,
     "pulse": 110
   },
   {
     "id": 18,
     "date": "18.09.2024",
     "workout": "Гребля",
     "time": 60,
     "calories": 620,
     "pulse": 120
   },
   {
     "id": 19,
     "date": "19.09.2024",
     "workout": "Бег",
     "time": 66,
     "calories": 610,
     "pulse": 131
   },
   {
     "id": 20,
     "date": "20.09.2024",
     "workout": "Бег",
     "time": 54,
     "calories": 575,
     "pulse": 119
   },
   {
     "id": 21,
     "date": "21.09.2024",
     "workout": "Силовая тренировка",
     "time": 56,
     "calories": 520,
     "pulse": 125
   },
   {
     "id": 22,
     "date": "22.09.2024",
     "workout": "HIIT",
     "time": 64,
     "calories": 670,
     "pulse": 118
   },
   {
     "id": 23,
     "date": "23.09.2024",
     "workout": "Бег",
     "time": 63,
     "calories": 645,
     "pulse": 115
   },
   {
     "id": 24,
     "date": "24.09.2024",
     "workout": "Футбол",
     "time": 72,
     "calories": 740,
     "pulse": 155
   },
   {
     "id": 25,
     "date": "25.09.2024",
     "workout": "Силовая тренировка",
     "time": 74,
     "calories": 690,
     "pulse": 116
   },
   {
     "id": 26,
     "date": "26.09.2024",
     "workout": "Пилатес",
     "time": 42,
     "calories": 455,
     "pulse": 140
   },
   {
     "id": 27,
     "date": "27.09.2024",
     "workout": "HIIT",
     "time": 54,
     "calories": 540,
     "pulse": 127
   },
   {
     "id": 28,
     "date": "28.09.2024",
     "workout": "HIIT",
     "time": 21,
     "calories": 210,
     "pulse": 147
   },
   {
     "id": 29,
     "date": "29.09.2024",
     "workout": "Йога",
     "time": 31,
     "calories": 240,
     "pulse": 126
   },
   {
     "id": 30,
     "date": "30.09.2024",
     "workout": "Гребля",
     "time": 42,
     "calories": 450,
     "pulse": 138
   },
   {
     "id": 31,
     "date": "01.10.2024",
     "workout": "Бег",
     "time": 45,
     "calories": 485,
     "pulse": 118
   },
   {
     "id": 32,
     "date": "02.10.2024",
     "workout": "Футбол",
     "time": 58,
     "calories": 560,
     "pulse": 154
   },
   {
     "id": 33,
     "date": "03.10.2024",
     "workout": "Гребля",
     "time": 33,
     "calories": 285,
     "pulse": 116
   },
   {
     "id": 34,
     "date": "04.10.2024",
     "workout": "Силовая тренировка",
     "time": 58,
     "calories": 555,
     "pulse": 140
   },
   {
     "id": 35,
     "date": "05.10.2024",
     "workout": "Гребля",
     "time": 70,
     "calories": 685,
     "pulse": 156
   },
   {
     "id": 36,
     "date": "06.10.2024",
     "workout": "Футбол",
     "time": 71,
     "calories": 690,
     "pulse": 111
   },
   {
     "id": 37,
     "date": "07.10.2024",
     "workout": "Футбол",
     "time": 38,
     "calories": 365,
     "pulse": 128
   },
   {
     "id": 38,
     "date": "08.10.2024",
     "workout": "Велоспорт",
     "time": 67,
     "calories": 660,
     "pulse": 128
   },
   {
     "id": 39,
     "date": "09.10.2024",
     "workout": "Гребля",
     "time": 54,
     "calories": 520,
     "pulse": 136
   },
   {
     "id": 40,
     "date": "10.10.2024",
     "workout": "Бег",
     "time": 78,
     "calories": 795,
     "pulse": 112
   },
   {
     "id": 41,
     "date": "11.10.2024",
     "workout": "Футбол",
     "time": 37,
     "calories": 400,
     "pulse": 135
   },
   {
     "id": 42,
     "date": "12.10.2024",
     "workout": "Гребля",
     "time": 69,
     "calories": 690,
     "pulse": 150
   },
   {
     "id": 43,
     "date": "13.10.2024",
     "workout": "Пилатес",
     "time": 35,
     "calories": 300,
     "pulse": 125
   },
   {
     "id": 44,
     "date": "14.10.2024",
     "workout": "Бег",
     "time": 41,
     "calories": 385,
     "pulse": 122
   },
   {
     "id": 45,
     "date": "15.10.2024",
     "workout": "Баскетбол",
     "time": 45,
     "calories": 485,
     "pulse": 137
   },
   {
     "id": 46,
     "date": "16.10.2024",
     "workout": "Футбол",
     "time": 71,
     "calories": 690,
     "pulse": 135
   },
   {
     "id": 47,
     "date": "17.10.2024",
     "workout": "Велоспорт",
     "time": 90,
     "calories": 895,
     "pulse": 113
   },
   {
     "id": 48,
     "date": "18.10.2024",
     "workout": "Футбол",
     "time": 65,
     "calories": 615,
     "pulse": 126
   },
   {
     "id": 49,
     "date": "19.10.2024",
     "workout": "Велоспорт",
     "time": 88,
     "calories": 875,
     "pulse": 136
   },
   {
     "id": 50,
     "date": "20.10.2024",
     "workout": "Велоспорт",
     "time": 25,
     "calories": 240,
     "pulse": 128
   },
   {
     "id": 51,
     "date": "21.10.2024",
     "workout": "Футбол",
     "time": 46,
     "calories": 435,
     "pulse": 116
   },
   {
     "id": 52,
     "date": "22.10.2024",
     "workout": "Футбол",
     "time": 74,
     "calories": 760,
     "pulse": 146
   },
   {
     "id": 53,
     "date": "23.10.2024",
     "workout": "Футбол",
     "time": 83,
     "calories": 820,
     "pulse": 128
   },
   {
     "id": 54,
     "date": "24.10.2024",
     "workout": "Футбол",
     "time": 70,
     "calories": 745,
     "pulse": 149
   },
   {
     "id": 55,
     "date": "25.10.2024",
     "workout": "Бег",
     "time": 90,
     "calories": 945,
     "pulse": 140
   },
   {
     "id": 56,
     "date": "26.10.2024",
     "workout": "Бег",
     "time": 76,
     "calories": 760,
     "pulse": 140
   },
   {
     "id": 57,
     "date": "27.10.2024",
     "workout": "Йога",
     "time": 89,
     "calories": 860,
     "pulse": 135
   },
   {
     "id": 58,
     "date": "28.10.2024",
     "workout": "Пилатес",
     "time": 29,
     "calories": 310,
     "pulse": 139
   },
   {
     "id": 59,
     "date": "29.10.2024",
     "workout": "Велоспорт",
     "time": 59,
     "calories": 570,
     "pulse": 158
   },
   {
     "id": 60,
     "date": "30.10.2024",
     "workout": "Футбол",
     "time": 21,
     "calories": 220,
     "pulse": 149
   },
   {
     "id": 61,
     "date": "31.10.2024",
     "workout": "Силовая тренировка",
     "time": 48,
     "calories": 460,
     "pulse": 136
   },
   {
     "id": 62,
     "date": "01.11.2024",
     "workout": "HIIT",
     "time": 87,
     "calories": 840,
     "pulse": 122
   },
   {
     "id": 63,
     "date": "02.11.2024",
     "workout": "Пилатес",
     "time": 82,
     "calories": 850,
     "pulse": 156
   },
   {
     "id": 64,
     "date": "03.11.2024",
     "workout": "Футбол",
     "time": 43,
     "calories": 425,
     "pulse": 116
   },
   {
      "id": 65,
      "date": "04.11.2024",
      "workout": "Пилатес",
      "time": 73,
      "calories": 778,
      "pulse": 152
    },
    {
      "id": 66,
      "date": "05.11.2024",
      "workout": "Бег",
      "time": 41,
      "calories": 417,
      "pulse": 114
    },
    {
      "id": 67,
      "date": "06.11.2024",
      "workout": "Йога",
      "time": 40,
      "calories": 407,
      "pulse": 143
    },
    {
      "id": 68,
      "date": "07.11.2024",
      "workout": "Футбол",
      "time": 20,
      "calories": 154,
      "pulse": 141
    },
    {
      "id": 69,
      "date": "08.11.2024",
      "workout": "Гребля",
      "time": 59,
      "calories": 599,
      "pulse": 113
    },
    {
      "id": 70,
      "date": "09.11.2024",
      "workout": "Баскетбол",
      "time": 44,
      "calories": 460,
      "pulse": 150
    },
    {
      "id": 71,
      "date": "10.11.2024",
      "workout": "Силовая тренировка",
      "time": 36,
      "calories": 311,
      "pulse": 135
    },
    {
      "id": 72,
      "date": "11.11.2024",
      "workout": "Баскетбол",
      "time": 60,
      "calories": 550,
      "pulse": 123
    },
    {
      "id": 73,
      "date": "12.11.2024",
      "workout": "Бег",
      "time": 20,
      "calories": 236,
      "pulse": 143
    },
    {
      "id": 74,
      "date": "13.11.2024",
      "workout": "Пилатес",
      "time": 32,
      "calories": 294,
      "pulse": 117
    },
    {
      "id": 75,
      "date": "14.11.2024",
      "workout": "Пилатес",
      "time": 45,
      "calories": 438,
      "pulse": 127
    },
    {
      "id": 76,
      "date": "15.11.2024",
      "workout": "Плавание",
      "time": 32,
      "calories": 330,
      "pulse": 135
    },
    {
      "id": 77,
      "date": "16.11.2024",
      "workout": "Силовая тренировка",
      "time": 22,
      "calories": 205,
      "pulse": 138
    },
    {
      "id": 78,
      "date": "17.11.2024",
      "workout": "Силовая тренировка",
      "time": 52,
      "calories": 487,
      "pulse": 151
    },
    {
      "id": 79,
      "date": "18.11.2024",
      "workout": "HIIT",
      "time": 64,
      "calories": 604,
      "pulse": 119
    },
    {
      "id": 80,
      "date": "19.11.2024",
      "workout": "Йога",
      "time": 22,
      "calories": 175,
      "pulse": 112
    },
    {
      "id": 81,
      "date": "20.11.2024",
      "workout": "Велоспорт",
      "time": 53,
      "calories": 551,
      "pulse": 130
    },
    {
      "id": 82,
      "date": "21.11.2024",
      "workout": "Гребля",
      "time": 25,
      "calories": 295,
      "pulse": 154
    },
    {
      "id": 83,
      "date": "22.11.2024",
      "workout": "Пилатес",
      "time": 83,
      "calories": 871,
      "pulse": 151
    },
    {
      "id": 84,
      "date": "23.11.2024",
      "workout": "Футбол",
      "time": 75,
      "calories": 747,
      "pulse": 144
    },
    {
      "id": 85,
      "date": "24.11.2024",
      "workout": "Плавание",
      "time": 46,
      "calories": 458,
      "pulse": 147
    },
    {
      "id": 86,
      "date": "25.11.2024",
      "workout": "Йога",
      "time": 21,
      "calories": 177,
      "pulse": 119
    },
    {
      "id": 87,
      "date": "26.11.2024",
      "workout": "Йога",
      "time": 62,
      "calories": 613,
      "pulse": 160
    },
    {
      "id": 88,
      "date": "27.11.2024",
      "workout": "Гребля",
      "time": 31,
      "calories": 303,
      "pulse": 159
    },
    {
      "id": 89,
      "date": "28.11.2024",
      "workout": "Пилатес",
      "time": 24,
      "calories": 195,
      "pulse": 127
    },
    {
      "id": 90,
      "date": "29.11.2024",
      "workout": "Плавание",
      "time": 39,
      "calories": 414,
      "pulse": 128
    },
    {
      "id": 91,
      "date": "30.11.2024",
      "workout": "Гребля",
      "time": 70,
      "calories": 720,
      "pulse": 118
    },
    {
      "id": 92,
      "date": "01.12.2024",
      "workout": "Йога",
      "time": 34,
      "calories": 351,
      "pulse": 156
    },
    {
      "id": 93,
      "date": "02.12.2024",
      "workout": "Велоспорт",
      "time": 26,
      "calories": 249,
      "pulse": 121
    },
    {
      "id": 94,
      "date": "03.12.2024",
      "workout": "HIIT",
      "time": 29,
      "calories": 278,
      "pulse": 135
    },
    {
      "id": 95,
      "date": "04.12.2024",
      "workout": "Гребля",
      "time": 58,
      "calories": 583,
      "pulse": 116
    },
    {
      "id": 96,
      "date": "05.12.2024",
      "workout": "Силовая тренировка",
      "time": 81,
      "calories": 820,
      "pulse": 131
    },
    {
      "id": 97,
      "date": "06.12.2024",
      "workout": "Гребля",
      "time": 35,
      "calories": 361,
      "pulse": 117
    },
    {
      "id": 98,
      "date": "07.12.2024",
      "workout": "Футбол",
      "time": 74,
      "calories": 694,
      "pulse": 129
    },
    {
      "id": 99,
      "date": "08.12.2024",
      "workout": "Гребля",
      "time": 39,
      "calories": 361,
      "pulse": 150
    },
    {
      "id": 100,
      "date": "09.12.2024",
      "workout": "Пилатес",
      "time": 68,
      "calories": 711,
      "pulse": 115
    }
  ];
  
  export default data;
  