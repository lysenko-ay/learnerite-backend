Дан массив ячеек `structs`, в котором записано несколько структур. Написать программу, которая преобразует такой массив структур в массив ячеек `result`, в котором первый столбец будет содержать названия полей структуры, а последующие столбцы будут содержать значения этих структур.

Пример массива структур:
```
structs = {
    struct('name', 'Ivan', 'age', 19, 'gender', 'male'), 
    struct('name', 'Alex', 'age', 20, 'gender', 'female')
}
```
Пример массива ячеек:
```
result = {
    {'name', 'Ivan', 'Alex'}, 
    {'age', 19, 20}, 
    {'gender', 'male', 'female'}
}
```
