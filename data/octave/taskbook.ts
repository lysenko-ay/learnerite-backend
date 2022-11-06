const locales = ['ru', 'en'];

const data = [
  {
    id: 'variables-and-conditions',
    locale: {
      ru: 'Переменные. Операторы условия',
    },
    content: [
      {
        id: 'square-root-of-value',
        locale: {
          ru: 'Корень из числа',
        },
      },
      {
        id: 'maximum-value-of-three',
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
      {
        id: 'distance-between-two-points',
        locale: {
          ru: 'Расстояние между двумя точками',
        },
      },
      {
        id: 'triangle-square',
        locale: {
          ru: 'Площадь треугольника',
        },
      },
      {
        id: 'date-validation',
        locale: {
          ru: 'Проверка правильности даты',
        },
      },
      {
        id: 'digits-of-number',
        locale: {
          ru: 'Разряды трёхзначного числа',
        },
      },
      {
        id: 'degree-between-clock-arrows',
        locale: {
          ru: 'Градус между стрелками часов',
        },
      },
      {
        id: 'square-equation',
        locale: {
          ru: 'Квадратное уравнение',
        },
      },
      {
        id: 'digit-in-sequence',
        locale: {
          ru: 'Число в последовательности',
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
        id: 'digits-of-number',
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
      {
        id: 'sum-of-digits-in-number',
        locale: {
          ru: 'Сумма цифр трёхзначного числа',
        },
      },
      {
        id: 'dichotomy',
        locale: {
          ru: 'Поиск корня методом дихотомии',
        },
      },
      {
        id: 'bubble-sort',
        locale: {
          ru: 'Сортировка массива методом пузырьков',
        },
      },
      {
        id: 'collecting-terms',
        locale: {
          ru: 'Приведение подобных',
        },
      },
      {
        id: 'lucky-tickets',
        locale: {
          ru: 'Счастливые билеты',
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
        id: 'min-and-max-values',
        locale: {
          ru: 'Минимальное и максимальное значения',
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
      {
        id: 'even-and-odd-numbers',
        locale: {
          ru: 'Чётные и нечётные числа',
        },
      },
      {
        id: 'max-value-above-secondary-diagonal',
        locale: {
          ru: 'Максимум над побочной диагональю',
        },
      },
      {
        id: 'max-between-mins',
        locale: {
          ru: 'Максимум среди минимумов',
        },
      },
      {
        id: 'string-to-number',
        locale: {
          ru: 'Перевод строки в число',
        },
      },
      {
        id: 'palindromes',
        locale: {
          ru: 'Палиндромы',
        },
      },
      {
        id: 'spiral-matrix-sort',
        locale: {
          ru: 'Спиральная сортировка матрицы',
        },
      },
      {
        id: 'matrix-determinant',
        locale: {
          ru: 'Определитель матрицы',
        },
      },
      {
        id: 'find-and-replace',
        locale: {
          ru: 'Найти и заменить',
        },
      },
    ],
  },
  {
    id: 'cell-arrays-and-structures',
    locale: {
      ru: 'Массивы ячеек. Структуры',
    },
    content: [
      {
        id: 'longest-vector',
        locale: {
          ru: 'Самый длинный вектор',
        },
      },
      {
        id: 'array-to-struct-by-rows',
        locale: {
          ru: 'Преобразование массива ячеек в структуру по строкам',
        },
      },
      {
        id: 'array-to-struct-by-columns',
        locale: {
          ru: 'Преобразование массива ячеек в структуру по столбцам',
        },
      },
      {
        id: 'struct-to-array-by-rows',
        locale: {
          ru: 'Преобразование структуры в массив ячеек по строкам',
        },
      },
      {
        id: 'struct-to-array-by-columns',
        locale: {
          ru: 'Преобразование структуры в массив ячеек по столбцам',
        },
      },
      {
        id: 'lexicographical-sorting',
        locale: {
          ru: 'Лексикографическая сортировка',
        },
      },
      {
        id: 'cell-array-output',
        locale: {
          ru: 'Вывод содержимого массива ячеек',
        },
      },
      {
        id: 'struct-output',
        locale: {
          ru: 'Вывод содержимого структуры',
        },
      },
    ],
  },
  {
    id: '2d-and-3d-plots',
    locale: {
      ru: '2D и 3D графики',
    },
    content: [
      {
        id: '2d-parametrical-equation',
        locale: {
          ru: '2D параметрическое уравнение',
        },
      },
      {
        id: '3d-parametrical-equation',
        locale: {
          ru: '3D параметрическое уравнение',
        },
      },
      {
        id: 'closest-points',
        locale: {
          ru: 'Ближайшие точки',
        },
      },
      {
        id: 'regular-octagon',
        locale: {
          ru: 'Правильный восьмиугольник',
        },
      },
      {
        id: 'average-filter',
        locale: {
          ru: 'Фильтр скользящего среднего',
        },
      },
      {
        id: 'median-filter',
        locale: {
          ru: 'Медианный фильтр',
        },
      },
      {
        id: 'circle-drawing',
        locale: {
          ru: 'Построение окружности',
        },
      },
      {
        id: 'circular-border',
        locale: {
          ru: 'Круглая рамка',
        },
      },
      {
        id: 'triangular-border',
        locale: {
          ru: 'Треугольная рамка',
        },
      },
      {
        id: 'collision-point',
        locale: {
          ru: 'Точка пересечения',
        },
      },
    ],
  },
  {
    id: 'user-functions',
    locale: {
      ru: 'Пользовательские функции',
    },
    content: [
      {
        id: 'array-sum',
        locale: {
          ru: 'Сумма элементов массива',
        },
      },
      {
        id: 'string-to-number',
        locale: {
          ru: 'Преобразование строки в число',
        },
      },
      {
        id: 'binary-search',
        locale: {
          ru: 'Бинарный поиск',
        },
      },
      {
        id: 'greatest-common-divisor',
        locale: {
          ru: 'Наибольший общий делитель',
        },
      },
      {
        id: 'sum-of-matrix-elements',
        locale: {
          ru: 'Сумма элементов матрицы',
        },
      },
      {
        id: 'matrix-sum-by-rows',
        locale: {
          ru: 'Сумма элементов матрицы по строкам',
        },
      },
      {
        id: 'cell-array-to-struct',
        locale: {
          ru: 'Преобразование массива ячеек в структуру',
        },
      },
      {
        id: 'struct-array-to-cell',
        locale: {
          ru: 'Преобразование структуры в массив ячеек',
        },
      },
      {
        id: 'find-and-replace-substring-in-string',
        locale: {
          ru: 'Найти и заменить подстроку в строке',
        },
      },
      {
        id: 'numerical-system-conversion',
        locale: {
          ru: 'Преобразование из одной системы счисления в другую',
        },
      },
      {
        id: 'array-sorting-by-sum-of-digits',
        locale: {
          ru: 'Сортировка массива по сумме цифр',
        },
      },
      {
        id: 'conways-game-of-life',
        locale: {
          ru: 'Игра "Жизнь"',
        },
      },
    ],
  },
  {
    id: 'files',
    locale: {
      ru: 'Файлы',
    },
    content: [
      {
        id: 'read-line-from-file',
        locale: {
          ru: 'Чтение строки из файла',
        },
      },
      {
        id: 'write-line-to-file',
        locale: {
          ru: 'Запись строки в файл',
        },
      },
      {
        id: 'save-data-to-mat-file',
        locale: {
          ru: 'Сохранение данных в mat-файл',
        },
      },
      {
        id: 'letters-count',
        locale: {
          ru: 'Количество букв',
        },
      },
      {
        id: 'is-sentence-ascending',
        locale: {
          ru: 'Возрастающая последовательность',
        },
      },
      {
        id: 'lowercase-to-uppercase',
        locale: {
          ru: 'Преобразование строчных букв в заглавные',
        },
      },
      {
        id: 'removal-of-negative-values',
        locale: {
          ru: 'Удаление отрицательных значений',
        },
      },
      {
        id: 'count-of-particular-word',
        locale: {
          ru: 'Количесво повторений слова',
        },
      },
      {
        id: 'find-and-replace-word',
        locale: {
          ru: 'Найти и заменить слово',
        },
      },
      {
        id: 'distance-between-points',
        locale: {
          ru: 'Расстояние между точками',
        },
      },
      {
        id: 'count-of-duplicate-words',
        locale: {
          ru: 'Количество повторяющихся слов',
        },
      },
      {
        id: 'matrix-parsing',
        locale: {
          ru: 'Чтение матрицы из файла',
        },
      },
      {
        id: 'xml-serialization',
        locale: {
          ru: 'XML-сериализация данных',
        },
      },
      {
        id: 'xml-deserialization',
        locale: {
          ru: 'XML-десериализация данных',
        },
      },
      {
        id: 'json-serialization',
        locale: {
          ru: 'JSON-сериализация данных',
        },
      },
      {
        id: 'json-deserialization',
        locale: {
          ru: 'JSON-десериализация данных',
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
