const locales = ['ru', 'en'];

const data = [
  {
    id: 'variables-and-conditions',
    locale: {
      ru: 'Переменные. Оператор условия',
    },
    content: [
      {
        id: 'square-root',
        locale: {
          ru: 'Корень из числа',
        },
      },
      {
        id: 'maximum-value',
        locale: {
          ru: 'Максимальное из трёх чисел',
        },
      },
      {
        id: 'conversion-from-seconds-to-hours',
        locale: {
          ru: 'Преобразование секунд в часы',
        },
      },
      {
        id: 'conversion-from-celcius-to-kalvin',
        locale: {
          ru: 'Преобразование из шкалы Цельсия в Кельвина',
        },
      },
    ],
  },
  {
    id: 'arrays-and-cycles',
    locale: {
      ru: 'Массивы. Циклы',
    },
    content: [
      {
        id: 'prime-numbers',
        locale: {
          ru: 'Простые числа',
        },
      },
      {
        id: 'squares-in-rectangle',
        locale: {
          ru: 'Квадратов в прямоугольнике',
        },
      },
      {
        id: 'digits-in-number',
        locale: {
          ru: 'Разряды произвольного числа',
        },
      },
      {
        id: 'sum-of-sequence',
        locale: {
          ru: 'Сумма последовательности',
        },
      },
    ],
  },
  {
    id: 'matricies-and-strings',
    locale: {
      ru: 'Матрицы. Строки',
    },
    content: [
      {
        id: 'count-of-three-digit-numbers',
        locale: {
          ru: 'Количество трёхзначных чисел',
        },
      },
      {
        id: 'min-and-max',
        locale: {
          ru: 'Минимальное и максимальное значение',
        },
      },
      {
        id: 'words-count-in-sentence',
        locale: {
          ru: 'Количество слов в строке',
        },
      },
      {
        id: 'string-sanitation',
        locale: {
          ru: 'Обработка строки',
        },
      },
    ],
  },
];

const content = {};

locales.forEach((lang: string) => {
  content[lang] = data.map((chapter) => {
    return {
      id: chapter.id,
      title: chapter.locale[lang],
      content: chapter.content.map((task) => {
        return {
          id: task.id,
          title: task.locale[lang],
        };
      }),
    };
  });
});

export default content;
