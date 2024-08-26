var profesori = [
	"",
	"Име Презиме",
	"Мирјана Арсић",
	"Наталија Остојић",
	"Славица Комненић",
	"Бошко Павловић",
	"Биљана Павловић",
	"Сања Берић",
	"Горан Стојићевић",
	"Ана Јеликић",
	"Александра Јовановић",
	"Немања Јаковљевић",
	"Владимир Лазић",
	"Зоран Протић",
	"Милена Радичевић Милићевић",
	"Нада Рајковић",
	"Зора Станковић",
	"Нада Филиповић",
	"Маријана Бајић",
	"Наташа Ђурић",
	"Душан Ковачевић",
	"Ивана Фирауновић",
	"Милена Бошковић",
	"Марта Милетић",
	"Владимир Нинковић",
	"Лидија Перишић",
	"Синиша Савић",
	"Игор Вујић",
	"Душан Јовановић",
	"Марија Јовановић",
	"Тања Милутиновић",
	"Душан Нешковић",
	"Зорица Бегуш",
	"Горан Ђурић",
	"Зоран Јовановић",
	"Виолета Костадиновић",
	"Мирјана Ћорилић",
	"Младен Аврамовић",
	"Јелена Тошић",
	"Катарина Шобић",
	"Мирослава Сарић",
	"Катарина Филиповић",
	"Taтјана Гајић",
	"Марина Вуковић Пантелић",
	"Ивана Исаиловић",
	"Љиљана Димитрић",
	"Катарина Бугарчић",
	"Станка Ел Рабади",
	"Мирјана Илић",
	"Татјана Илић",
	"Милица Нинковић",
	"Јелена Кнежевић",
	"Снежана Корнарос",
	"Марија Солдатовић",
	"Снежана Вуковић",
	"Јасмина Ђокић Јовановић",
	"Маја Катанић",
	"Мирко Нагл",
	"Момир Ђорђић",
	"Милан Симић",
	"Стефан  Бечко",
	"Милена Спасојевић",
	"Верољуб Илић",
	"Маријана Чавић",
	"Светлана Вукашиновић Гуцонић",
	"Драгица Марковић",
	"Мирјана Станчетић",
	"Радмила Вучић",
	"Дејан Јовић",
	"Соња Ћалић Теодоровић",
	"Оља Савић",
	"Александар Вечериновић",
];

var predmeti = [
	"",
	"Предмет",
	"биологија",
	"биологија",
	"биологија",
	"веронаука",
	"географија",
	"географија",
	"географија",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"енглески",
	"информатика",
	"информатика",
	"информ/мат",
	"информ/мат",
	"информатика",
	"информатика",
	"информатика",
	"информатика",
	"информатика",
	"историја",
	"историја",
	"историја",
	"италијански",
	"ликовно",
	"математика",
	"математика",
	"математика",
	"математика",
	"математика",
	"музичко",
	"немачки",
	"немачки",
	"немачки",
	"психологија",
	"руски",
	"социологија",
	"српски",
	"српски",
	"српски",
	"српски",
	"српски",
	"српски",
	"српски",
	"српски",
	"српски",
	"устав и грађ.",
	"физика",
	"физика",
	"физика",
	"физика",
	"физичко",
	"физичко",
	"физичко",
	"физичко",
	"филозофија",
	"филозофија",
	"фран/лат",
	"фран/лат",
	"фран/лат",
	"хемија",
	"хемија",
	"хемија",
	"хемија",
	"ликовно,изборни",
];

var casovi = {
	"4/2": [
		[2, 3, ""],
		[2, 46, ""],
		[3, 52, ""],
		[3, 53, ""],
		[5, 38, ""],
		[13, 7, ""],
		[13, 22, ""],
		[13, 36, ""],
		[13, 48, ""],
		[13, 65, ""],
		[18, 61, ""],
		[20, 8, ""],
		[20, 9, ""],
		[20, 50, ""],
		[23, 61, ""],
		[29, 35, ""],
		[29, 49, ""],
		[29, 66, ""],
		[31, 17, ""],
		[31, 59, ""],
		[37, 5, ""],
		[40, 22, ""],
		[40, 51, ""],
		[41, 10, ""],
		[41, 11, ""],
		[42, 37, ""],
		[42, 65, ""],
		[43, 6, ""],
		[43, 18, ""],
		[43, 32, ""],
		[43, 45, ""],
		[43, 60, ""],
		[44, 4, ""],
		[44, 20, ""],
		[44, 21, ""],
		[44, 31, ""],
		[44, 63, ""],
		[48, 50, ""],
		[53, 38, ""],
		[57, 34, ""],
		[57, 48, ""],
		[58, 33, ""],
		[58, 62, ""],
		[62, 19, ""],
		[62, 47, ""],
		[62, 64, ""],
		[64, 37, ""],
		[64, 65, ""],
	],
	"4/3": [
		[2, 3, ""],
		[2, 46, ""],
		[3, 20, ""],
		[3, 64, ""],
		[4, 38, ""],
		[4, 39, ""],
		[5, 22, ""],
		[16, 21, ""],
		[16, 22, ""],
		[16, 49, ""],
		[18, 37, ""],
		[23, 37, ""],
		[29, 6, ""],
		[29, 36, ""],
		[33, 7, ""],
		[33, 34, ""],
		[33, 62, ""],
		[33, 63, ""],
		[40, 21, ""],
		[40, 48, ""],
		[41, 10, ""],
		[41, 11, ""],
		[43, 19, ""],
		[43, 32, ""],
		[43, 60, ""],
		[43, 61, ""],
		[48, 8, ""],
		[48, 9, ""],
		[48, 23, ""],
		[53, 51, ""],
		[57, 35, ""],
		[57, 47, ""],
		[57, 66, ""],
		[58, 4, ""],
		[58, 31, ""],
		[62, 5, ""],
		[62, 33, ""],
		[62, 65, ""],
		[66, 24, ""],
		[67, 18, ""],
		[67, 59, ""],
	],
	"2/7": [
		[2, 4, ""],
		[2, 51, ""],
		[5, 10, ""],
		[6, 33, ""],
		[6, 62, ""],
		[17, 8, ""],
		[17, 9, ""],
		[17, 17, ""],
		[17, 18, ""],
		[17, 19, ""],
		[17, 20, ""],
		[17, 37, ""],
		[17, 45, ""],
		[17, 46, ""],
		[17, 65, ""],
		[17, 66, ""],
		[22, 17, ""],
		[22, 18, ""],
		[22, 19, ""],
		[22, 20, ""],
		[28, 5, ""],
		[28, 35, ""],
		[31, 61, ""],
		[34, 47, ""],
		[34, 48, ""],
		[37, 52, ""],
		[39, 22, ""],
		[39, 36, ""],
		[39, 64, ""],
		[46, 7, ""],
		[46, 31, ""],
		[46, 32, ""],
		[47, 8, ""],
		[47, 9, ""],
		[47, 45, ""],
		[47, 46, ""],
		[53, 10, ""],
		[55, 3, ""],
		[55, 34, ""],
		[61, 21, ""],
		[61, 50, ""],
		[64, 22, ""],
		[64, 36, ""],
		[64, 64, ""],
		[65, 6, ""],
		[65, 63, ""],
		[67, 49, ""],
	],
	"2/3": [
		[2, 5, ""],
		[2, 65, ""],
		[5, 66, ""],
		[6, 23, ""],
		[6, 24, ""],
		[6, 60, ""],
		[11, 11, ""],
		[11, 36, ""],
		[11, 64, ""],
		[15, 21, ""],
		[18, 7, ""],
		[18, 8, ""],
		[23, 7, ""],
		[23, 8, ""],
		[28, 9, ""],
		[28, 34, ""],
		[31, 20, ""],
		[35, 6, ""],
		[35, 22, ""],
		[35, 45, ""],
		[35, 46, ""],
		[37, 33, ""],
		[39, 38, ""],
		[39, 63, ""],
		[41, 3, ""],
		[41, 61, ""],
		[44, 17, ""],
		[44, 47, ""],
		[44, 48, ""],
		[44, 62, ""],
		[53, 10, ""],
		[56, 4, ""],
		[56, 49, ""],
		[60, 53, ""],
		[61, 18, ""],
		[61, 37, ""],
		[64, 36, ""],
		[64, 64, ""],
		[66, 21, ""],
		[66, 35, ""],
		[66, 51, ""],
		[66, 52, ""],
		[67, 19, ""],
		[67, 32, ""],
		[67, 50, ""],
	],
	"2/2": [
		[2, 6, ""],
		[2, 47, ""],
		[5, 64, ""],
		[6, 31, ""],
		[6, 61, ""],
		[13, 20, ""],
		[13, 37, ""],
		[13, 51, ""],
		[18, 17, ""],
		[18, 18, ""],
		[23, 17, ""],
		[23, 18, ""],
		[28, 4, ""],
		[28, 32, ""],
		[31, 38, ""],
		[34, 21, ""],
		[34, 22, ""],
		[34, 46, ""],
		[37, 3, ""],
		[37, 53, ""],
		[39, 20, ""],
		[39, 50, ""],
		[41, 7, ""],
		[41, 63, ""],
		[46, 8, ""],
		[46, 33, ""],
		[46, 34, ""],
		[46, 59, ""],
		[46, 60, ""],
		[53, 10, ""],
		[56, 9, ""],
		[56, 48, ""],
		[60, 52, ""],
		[61, 19, ""],
		[61, 35, ""],
		[66, 23, ""],
		[66, 36, ""],
		[66, 49, ""],
		[66, 65, ""],
		[67, 5, ""],
		[67, 62, ""],
	],
	"2/1": [
		[2, 21, ""],
		[2, 48, ""],
		[5, 52, ""],
		[6, 17, ""],
		[6, 32, ""],
		[11, 11, ""],
		[13, 8, ""],
		[13, 23, ""],
		[13, 49, ""],
		[18, 59, ""],
		[18, 60, ""],
		[23, 59, ""],
		[23, 60, ""],
		[28, 3, ""],
		[28, 46, ""],
		[31, 18, ""],
		[31, 63, "\u0438"],
		[34, 19, ""],
		[34, 20, ""],
		[34, 45, ""],
		[37, 24, ""],
		[37, 34, ""],
		[39, 10, ""],
		[39, 37, ""],
		[41, 4, ""],
		[41, 64, ""],
		[46, 9, ""],
		[46, 35, ""],
		[46, 61, ""],
		[46, 62, ""],
		[56, 5, ""],
		[56, 47, ""],
		[60, 51, ""],
		[61, 7, ""],
		[61, 36, ""],
		[66, 22, ""],
		[66, 23, ""],
		[66, 50, ""],
		[66, 65, ""],
		[67, 6, ""],
		[67, 33, ""],
	],
	"2/4": [
		[2, 22, ""],
		[2, 23, "\u0432"],
		[2, 50, ""],
		[5, 37, ""],
		[6, 18, ""],
		[6, 59, ""],
		[9, 21, ""],
		[9, 49, ""],
		[18, 19, ""],
		[18, 20, ""],
		[23, 19, ""],
		[23, 20, ""],
		[28, 6, ""],
		[28, 48, ""],
		[31, 64, ""],
		[36, 7, ""],
		[36, 8, ""],
		[36, 35, ""],
		[36, 61, ""],
		[36, 62, ""],
		[37, 64, ""],
		[39, 21, ""],
		[39, 52, ""],
		[41, 5, ""],
		[41, 60, ""],
		[42, 51, ""],
		[52, 33, ""],
		[52, 34, ""],
		[52, 63, ""],
		[53, 37, ""],
		[55, 4, ""],
		[55, 22, ""],
		[55, 23, ""],
		[55, 32, ""],
		[55, 47, ""],
		[56, 10, ""],
		[60, 66, ""],
		[61, 9, ""],
		[61, 65, ""],
		[66, 21, ""],
		[66, 52, ""],
		[67, 3, ""],
		[67, 35, ""],
		[67, 45, ""],
		[67, 46, ""],
	],
	"2/5": [
		[2, 24, ""],
		[2, 49, ""],
		[5, 10, ""],
		[6, 21, ""],
		[6, 63, ""],
		[9, 9, ""],
		[9, 50, ""],
		[9, 65, ""],
		[18, 35, ""],
		[18, 36, ""],
		[22, 35, ""],
		[22, 36, ""],
		[28, 7, ""],
		[28, 37, ""],
		[31, 19, ""],
		[35, 4, ""],
		[35, 5, ""],
		[35, 47, ""],
		[35, 48, ""],
		[37, 62, ""],
		[39, 23, ""],
		[39, 65, ""],
		[44, 3, ""],
		[44, 6, ""],
		[44, 32, ""],
		[44, 33, ""],
		[44, 45, ""],
		[44, 46, ""],
		[44, 60, ""],
		[44, 64, ""],
		[53, 10, ""],
		[55, 20, ""],
		[55, 61, ""],
		[61, 8, ""],
		[61, 51, ""],
		[66, 23, ""],
		[66, 65, ""],
		[67, 34, ""],
		[71, 22, ""],
		[71, 38, ""],
		[71, 45, ""],
		[71, 46, ""],
	],
	"3/2": [
		[2, 41, ""],
		[2, 67, ""],
		[5, 9, ""],
		[6, 15, ""],
		[6, 58, ""],
		[9, 10, ""],
		[9, 24, ""],
		[9, 37, ""],
		[9, 40, ""],
		[9, 66, ""],
		[12, 38, ""],
		[12, 66, ""],
		[18, 55, ""],
		[23, 55, ""],
		[27, 12, ""],
		[27, 42, ""],
		[27, 70, ""],
		[31, 30, ""],
		[36, 26, ""],
		[36, 27, ""],
		[36, 54, ""],
		[36, 65, ""],
		[37, 51, ""],
		[38, 25, ""],
		[38, 53, ""],
		[42, 38, ""],
		[42, 66, ""],
		[46, 11, ""],
		[46, 28, ""],
		[46, 29, ""],
		[46, 56, ""],
		[46, 57, ""],
		[53, 39, ""],
		[57, 13, ""],
		[57, 67, ""],
		[59, 14, ""],
		[59, 69, ""],
		[63, 40, ""],
		[63, 68, ""],
		[64, 10, ""],
		[64, 24, ""],
		[64, 52, ""],
		[65, 38, ""],
		[65, 66, ""],
		[68, 71, ""],
		[68, 72, ""],
		[71, 23, ""],
		[71, 64, ""],
	],
	"1/4": [
		[2, 42, ""],
		[2, 66, ""],
		[5, 24, ""],
		[6, 65, ""],
		[7, 15, ""],
		[7, 29, ""],
		[7, 57, ""],
		[11, 37, ""],
		[12, 39, ""],
		[12, 67, ""],
		[18, 10, ""],
		[18, 11, ""],
		[26, 10, ""],
		[26, 11, ""],
		[29, 28, ""],
		[29, 70, ""],
		[31, 14, ""],
		[35, 23, ""],
		[35, 40, ""],
		[35, 41, ""],
		[35, 69, ""],
		[37, 25, ""],
		[38, 9, ""],
		[38, 55, ""],
		[48, 12, ""],
		[48, 26, ""],
		[48, 52, ""],
		[48, 53, ""],
		[53, 56, ""],
		[54, 30, ""],
		[54, 43, ""],
		[58, 27, ""],
		[58, 54, ""],
		[60, 16, ""],
		[65, 9, ""],
		[65, 51, ""],
		[66, 13, ""],
		[66, 67, ""],
		[68, 38, ""],
		[68, 58, ""],
		[71, 44, ""],
	],
	"3/7": [
		[2, 43, ""],
		[2, 68, ""],
		[5, 9, ""],
		[10, 12, ""],
		[10, 13, ""],
		[10, 15, ""],
		[10, 26, ""],
		[10, 27, ""],
		[10, 38, ""],
		[10, 39, ""],
		[10, 55, ""],
		[10, 56, ""],
		[10, 57, ""],
		[10, 65, ""],
		[10, 66, ""],
		[23, 56, ""],
		[23, 57, ""],
		[27, 15, ""],
		[27, 54, ""],
		[31, 37, ""],
		[34, 40, ""],
		[34, 41, ""],
		[37, 37, ""],
		[40, 10, ""],
		[40, 24, ""],
		[40, 52, ""],
		[41, 29, ""],
		[41, 51, ""],
		[42, 10, ""],
		[42, 24, ""],
		[42, 52, ""],
		[49, 11, ""],
		[49, 12, ""],
		[49, 42, ""],
		[49, 70, ""],
		[50, 13, ""],
		[50, 14, ""],
		[50, 38, ""],
		[50, 39, ""],
		[53, 9, ""],
		[53, 25, ""],
		[60, 23, ""],
		[60, 67, ""],
		[63, 44, ""],
		[63, 69, ""],
		[64, 10, ""],
		[64, 24, ""],
		[64, 52, ""],
		[65, 28, ""],
		[65, 53, ""],
	],
	"4/4": [
		[3, 8, ""],
		[3, 18, ""],
		[3, 38, ""],
		[3, 47, ""],
		[5, 7, ""],
		[6, 66, ""],
		[10, 37, ""],
		[15, 22, ""],
		[15, 49, ""],
		[15, 63, ""],
		[18, 62, ""],
		[21, 21, ""],
		[21, 35, ""],
		[21, 36, ""],
		[21, 48, ""],
		[23, 62, ""],
		[29, 5, ""],
		[29, 51, ""],
		[41, 10, ""],
		[41, 11, ""],
		[42, 37, ""],
		[42, 65, ""],
		[43, 33, ""],
		[43, 52, ""],
		[43, 53, ""],
		[43, 59, ""],
		[49, 19, ""],
		[49, 20, ""],
		[49, 45, ""],
		[49, 46, ""],
		[52, 3, ""],
		[53, 38, ""],
		[57, 23, ""],
		[57, 32, ""],
		[57, 49, ""],
		[60, 24, ""],
		[60, 64, ""],
		[62, 6, ""],
		[62, 34, ""],
		[62, 61, ""],
		[64, 9, ""],
		[64, 50, ""],
		[65, 37, ""],
		[65, 50, ""],
		[67, 4, ""],
		[67, 60, ""],
	],
	"1/2": [
		[3, 10, ""],
		[3, 66, ""],
		[5, 65, ""],
		[8, 14, ""],
		[8, 54, ""],
		[15, 11, ""],
		[15, 39, ""],
		[23, 41, ""],
		[23, 42, ""],
		[26, 41, ""],
		[26, 42, ""],
		[29, 29, ""],
		[29, 67, ""],
		[31, 58, ""],
		[34, 12, ""],
		[34, 13, ""],
		[34, 38, ""],
		[34, 70, ""],
		[37, 23, ""],
		[39, 24, ""],
		[39, 53, ""],
		[42, 72, ""],
		[45, 16, ""],
		[45, 27, ""],
		[45, 52, ""],
		[45, 68, ""],
		[45, 69, ""],
		[53, 40, ""],
		[54, 26, ""],
		[54, 71, ""],
		[58, 28, ""],
		[58, 55, ""],
		[60, 25, ""],
		[64, 11, ""],
		[64, 39, ""],
		[65, 9, ""],
		[65, 51, ""],
		[66, 15, ""],
		[66, 37, ""],
		[69, 56, ""],
		[69, 57, ""],
		[71, 43, ""],
	],
	"3/5": [
		[3, 12, ""],
		[3, 40, ""],
		[3, 44, ""],
		[3, 50, ""],
		[3, 51, ""],
		[5, 55, ""],
		[7, 28, ""],
		[7, 54, ""],
		[9, 38, ""],
		[9, 52, ""],
		[23, 9, ""],
		[26, 9, ""],
		[27, 14, ""],
		[27, 57, ""],
		[35, 24, ""],
		[35, 25, ""],
		[35, 42, ""],
		[35, 43, ""],
		[35, 67, ""],
		[35, 68, ""],
		[40, 38, ""],
		[40, 66, ""],
		[42, 38, ""],
		[42, 66, ""],
		[51, 26, ""],
		[51, 27, ""],
		[51, 56, ""],
		[53, 55, ""],
		[54, 11, ""],
		[54, 40, ""],
		[54, 53, ""],
		[59, 13, ""],
		[59, 39, ""],
		[62, 23, ""],
		[62, 37, ""],
		[64, 10, ""],
		[64, 52, ""],
		[65, 38, ""],
		[65, 66, ""],
		[68, 15, ""],
		[68, 16, ""],
		[68, 41, ""],
		[68, 70, ""],
		[71, 69, ""],
		[71, 71, ""],
	],
	"1/1": [
		[3, 13, ""],
		[3, 42, ""],
		[5, 40, ""],
		[6, 65, ""],
		[8, 16, ""],
		[8, 57, ""],
		[17, 38, ""],
		[17, 67, ""],
		[19, 27, ""],
		[19, 28, ""],
		[20, 10, ""],
		[20, 29, ""],
		[20, 52, ""],
		[20, 53, ""],
		[26, 27, ""],
		[26, 28, ""],
		[29, 30, ""],
		[29, 68, ""],
		[31, 39, ""],
		[37, 66, ""],
		[39, 9, ""],
		[39, 51, ""],
		[42, 70, ""],
		[42, 71, ""],
		[48, 11, ""],
		[48, 24, ""],
		[48, 25, ""],
		[48, 54, ""],
		[53, 40, ""],
		[54, 12, ""],
		[54, 41, ""],
		[58, 26, ""],
		[58, 56, ""],
		[60, 15, ""],
		[65, 9, ""],
		[65, 51, ""],
		[66, 14, ""],
		[66, 68, ""],
		[69, 55, ""],
		[69, 58, ""],
		[71, 43, ""],
	],
	"1/5": [
		[3, 14, ""],
		[3, 39, ""],
		[5, 24, ""],
		[8, 15, ""],
		[8, 55, ""],
		[15, 12, ""],
		[15, 37, ""],
		[15, 67, "\u00a0"],
		[18, 56, ""],
		[18, 57, ""],
		[20, 11, ""],
		[20, 25, ""],
		[20, 26, ""],
		[20, 40, ""],
		[26, 56, ""],
		[26, 57, ""],
		[29, 38, ""],
		[29, 69, ""],
		[31, 13, ""],
		[37, 68, ""],
		[38, 12, ""],
		[38, 23, ""],
		[38, 37, ""],
		[51, 28, ""],
		[51, 29, ""],
		[51, 41, "\u0432"],
		[51, 42, ""],
		[51, 43, ""],
		[51, 53, ""],
		[51, 54, ""],
		[53, 24, ""],
		[54, 27, ""],
		[54, 66, ""],
		[61, 10, ""],
		[61, 52, ""],
		[65, 9, ""],
		[65, 51, ""],
		[70, 30, ""],
		[70, 58, ""],
		[71, 41, ""],
		[71, 42, ""],
		[71, 65, ""],
		[71, 70, ""],
	],
	"3/4": [
		[3, 15, ""],
		[3, 43, ""],
		[3, 65, ""],
		[5, 53, ""],
		[7, 26, ""],
		[7, 55, ""],
		[12, 38, ""],
		[12, 66, ""],
		[15, 10, ""],
		[15, 24, ""],
		[15, 52, ""],
		[15, 66, ""],
		[20, 27, ""],
		[20, 28, ""],
		[20, 54, ""],
		[20, 69, ""],
		[20, 70, ""],
		[23, 39, ""],
		[26, 39, ""],
		[27, 13, ""],
		[27, 29, ""],
		[27, 30, ""],
		[27, 58, ""],
		[38, 38, ""],
		[38, 66, ""],
		[42, 38, ""],
		[42, 66, ""],
		[49, 14, ""],
		[49, 41, ""],
		[49, 67, ""],
		[49, 68, ""],
		[53, 23, ""],
		[57, 12, ""],
		[57, 25, ""],
		[57, 52, ""],
		[59, 11, ""],
		[59, 44, ""],
		[63, 42, ""],
		[63, 71, ""],
		[64, 10, ""],
		[64, 24, ""],
		[64, 52, ""],
		[65, 38, ""],
		[65, 66, ""],
		[68, 12, ""],
		[68, 40, ""],
		[68, 56, ""],
		[68, 57, ""],
	],
	"4/6": [
		[3, 17, ""],
		[3, 46, ""],
		[3, 63, ""],
		[5, 51, ""],
		[13, 21, ""],
		[13, 64, ""],
		[19, 33, ""],
		[19, 34, ""],
		[19, 45, ""],
		[19, 47, ""],
		[19, 48, ""],
		[21, 22, ""],
		[21, 23, ""],
		[21, 33, ""],
		[21, 34, ""],
		[21, 47, ""],
		[21, 49, ""],
		[24, 8, ""],
		[24, 22, ""],
		[24, 23, ""],
		[24, 48, ""],
		[24, 49, ""],
		[32, 7, ""],
		[32, 19, ""],
		[32, 20, ""],
		[32, 50, ""],
		[32, 60, ""],
		[43, 31, ""],
		[43, 62, ""],
		[52, 4, ""],
		[52, 5, ""],
		[52, 37, ""],
		[52, 65, ""],
		[53, 51, ""],
		[55, 6, ""],
		[55, 18, ""],
		[55, 35, ""],
		[55, 59, ""],
		[58, 32, ""],
		[58, 61, ""],
		[62, 3, ""],
		[62, 36, ""],
	],
	"4/5": [
		[3, 19, ""],
		[3, 48, ""],
		[3, 62, ""],
		[5, 21, ""],
		[10, 37, ""],
		[13, 9, ""],
		[13, 50, ""],
		[22, 63, ""],
		[22, 64, ""],
		[25, 63, ""],
		[25, 64, ""],
		[27, 22, ""],
		[27, 23, ""],
		[32, 8, ""],
		[32, 17, ""],
		[32, 18, ""],
		[32, 49, ""],
		[32, 51, ""],
		[32, 59, ""],
		[32, 66, ""],
		[32, 67, ""],
		[40, 37, ""],
		[40, 65, ""],
		[42, 9, ""],
		[42, 37, ""],
		[42, 50, ""],
		[42, 65, ""],
		[43, 35, ""],
		[43, 46, ""],
		[52, 6, ""],
		[52, 36, ""],
		[52, 47, ""],
		[53, 38, ""],
		[55, 7, ""],
		[55, 19, ""],
		[55, 33, ""],
		[55, 48, ""],
		[55, 60, ""],
		[58, 5, ""],
		[58, 34, ""],
		[62, 4, ""],
		[62, 45, ""],
		[64, 37, ""],
		[64, 65, ""],
		[67, 20, ""],
		[67, 61, ""],
	],
	"3/3": [
		[4, 13, ""],
		[4, 55, ""],
		[5, 25, ""],
		[6, 16, ""],
		[6, 57, ""],
		[12, 38, ""],
		[12, 66, ""],
		[14, 24, ""],
		[14, 38, ""],
		[14, 52, ""],
		[14, 65, ""],
		[18, 58, ""],
		[26, 58, ""],
		[26, 66, ""],
		[27, 41, ""],
		[27, 56, ""],
		[27, 71, ""],
		[27, 72, ""],
		[32, 11, ""],
		[32, 12, ""],
		[32, 39, ""],
		[32, 53, ""],
		[32, 54, ""],
		[38, 38, ""],
		[38, 66, ""],
		[42, 10, ""],
		[42, 24, ""],
		[42, 38, ""],
		[42, 52, ""],
		[42, 66, ""],
		[50, 27, ""],
		[50, 28, ""],
		[50, 68, ""],
		[50, 69, ""],
		[53, 23, ""],
		[57, 14, ""],
		[57, 26, ""],
		[57, 65, ""],
		[59, 15, ""],
		[59, 40, ""],
		[63, 43, ""],
		[63, 70, ""],
		[65, 38, ""],
		[65, 66, ""],
		[68, 14, ""],
		[68, 29, ""],
		[68, 30, ""],
		[68, 42, ""],
		[71, 50, ""],
		[71, 51, ""],
	],
	"3/6": [
		[4, 14, ""],
		[4, 30, ""],
		[4, 58, ""],
		[5, 55, ""],
		[13, 38, ""],
		[13, 66, ""],
		[20, 41, ""],
		[20, 42, ""],
		[21, 12, ""],
		[21, 13, ""],
		[21, 24, "\u00a0"],
		[21, 25, ""],
		[21, 37, ""],
		[21, 51, ""],
		[21, 67, ""],
		[21, 68, ""],
		[22, 12, ""],
		[22, 13, ""],
		[22, 53, ""],
		[22, 54, ""],
		[24, 11, ""],
		[24, 25, ""],
		[24, 26, ""],
		[25, 24, ""],
		[25, 26, ""],
		[25, 53, ""],
		[25, 54, ""],
		[25, 67, ""],
		[25, 68, ""],
		[31, 16, ""],
		[33, 10, ""],
		[33, 27, ""],
		[33, 28, ""],
		[33, 56, ""],
		[33, 57, ""],
		[49, 15, ""],
		[49, 39, ""],
		[49, 40, ""],
		[53, 9, ""],
		[53, 55, ""],
		[54, 29, ""],
		[54, 52, ""],
		[54, 69, ""],
		[59, 43, ""],
		[59, 70, ""],
	],
	"3/1": [
		[4, 15, ""],
		[4, 57, ""],
		[5, 23, ""],
		[7, 27, ""],
		[7, 56, ""],
		[9, 11, ""],
		[9, 25, ""],
		[9, 39, ""],
		[9, 53, ""],
		[9, 67, ""],
		[12, 38, ""],
		[12, 66, ""],
		[23, 40, ""],
		[26, 40, ""],
		[27, 16, ""],
		[27, 44, ""],
		[27, 55, ""],
		[31, 29, ""],
		[34, 42, ""],
		[34, 43, ""],
		[34, 69, ""],
		[37, 65, ""],
		[38, 26, ""],
		[38, 54, ""],
		[42, 10, ""],
		[42, 24, ""],
		[42, 38, ""],
		[42, 52, ""],
		[42, 66, ""],
		[45, 13, ""],
		[45, 14, ""],
		[45, 28, ""],
		[45, 51, ""],
		[45, 70, ""],
		[53, 23, ""],
		[57, 15, ""],
		[57, 68, ""],
		[59, 12, ""],
		[59, 41, ""],
		[59, 71, ""],
		[63, 39, ""],
		[63, 72, ""],
		[65, 38, ""],
		[65, 66, ""],
		[68, 36, ""],
		[68, 37, ""],
		[71, 8, ""],
		[71, 9, ""],
	],
	"1/3": [
		[4, 28, ""],
		[4, 37, ""],
		[4, 56, ""],
		[5, 12, ""],
		[6, 65, ""],
		[7, 14, ""],
		[7, 53, ""],
		[11, 65, ""],
		[17, 11, ""],
		[17, 39, ""],
		[19, 29, ""],
		[19, 30, ""],
		[26, 29, ""],
		[26, 30, ""],
		[29, 27, ""],
		[29, 52, ""],
		[31, 15, ""],
		[33, 26, ""],
		[33, 38, ""],
		[33, 54, ""],
		[33, 55, ""],
		[37, 67, ""],
		[38, 51, ""],
		[38, 68, ""],
		[47, 10, ""],
		[47, 40, ""],
		[47, 41, ""],
		[47, 71, ""],
		[53, 24, ""],
		[54, 13, ""],
		[54, 42, ""],
		[58, 25, ""],
		[58, 57, ""],
		[60, 70, ""],
		[64, 11, ""],
		[64, 39, ""],
		[65, 9, ""],
		[65, 51, ""],
		[66, 16, ""],
		[66, 66, ""],
		[68, 43, ""],
		[68, 69, ""],
		[71, 44, ""],
	],
	"4/1": [
		[5, 22, ""],
		[7, 10, ""],
		[7, 11, ""],
		[10, 37, ""],
		[15, 9, ""],
		[15, 23, ""],
		[15, 36, ""],
		[15, 50, ""],
		[15, 65, ""],
		[18, 21, ""],
		[23, 21, ""],
		[27, 24, ""],
		[27, 25, ""],
		[29, 7, ""],
		[29, 34, ""],
		[29, 48, ""],
		[31, 62, ""],
		[36, 31, ""],
		[36, 32, ""],
		[36, 64, ""],
		[37, 4, ""],
		[40, 8, ""],
		[40, 36, ""],
		[42, 37, ""],
		[42, 65, ""],
		[43, 3, ""],
		[43, 17, ""],
		[43, 47, ""],
		[44, 5, ""],
		[44, 18, ""],
		[44, 19, ""],
		[44, 35, ""],
		[44, 49, ""],
		[44, 61, ""],
		[53, 38, ""],
		[57, 33, ""],
		[57, 50, ""],
		[58, 6, ""],
		[58, 60, ""],
		[62, 20, ""],
		[62, 46, ""],
		[62, 63, ""],
		[64, 9, ""],
		[64, 23, ""],
		[64, 37, ""],
		[64, 50, ""],
		[64, 65, ""],
	],
	"2/6": [
		[5, 37, ""],
		[6, 20, ""],
		[6, 34, ""],
		[9, 23, ""],
		[9, 48, ""],
		[19, 31, ""],
		[19, 32, ""],
		[19, 65, ""],
		[19, 66, ""],
		[24, 9, ""],
		[24, 10, ""],
		[24, 24, ""],
		[24, 31, ""],
		[24, 32, ""],
		[24, 50, ""],
		[24, 51, ""],
		[24, 65, ""],
		[24, 66, ""],
		[26, 7, ""],
		[26, 63, ""],
		[28, 33, ""],
		[28, 45, ""],
		[33, 8, ""],
		[33, 35, ""],
		[33, 36, ""],
		[33, 60, ""],
		[33, 61, ""],
		[41, 6, ""],
		[41, 52, ""],
		[52, 18, ""],
		[52, 19, ""],
		[52, 64, ""],
		[53, 10, ""],
		[55, 5, ""],
		[55, 46, ""],
		[55, 62, ""],
		[61, 22, ""],
		[61, 49, ""],
		[67, 21, ""],
		[67, 47, ""],
	],
	"4/7": [
		[5, 51, ""],
		[14, 5, ""],
		[14, 6, ""],
		[14, 22, ""],
		[14, 35, ""],
		[14, 36, ""],
		[14, 37, ""],
		[14, 49, ""],
		[14, 51, ""],
		[14, 61, ""],
		[14, 62, ""],
		[14, 63, ""],
		[19, 62, ""],
		[19, 63, ""],
		[28, 31, ""],
		[28, 47, ""],
		[31, 60, ""],
		[36, 33, ""],
		[36, 34, ""],
		[37, 32, ""],
		[40, 9, ""],
		[40, 23, ""],
		[40, 50, ""],
		[42, 9, ""],
		[42, 23, ""],
		[42, 50, ""],
		[43, 4, ""],
		[43, 48, ""],
		[47, 19, ""],
		[47, 20, ""],
		[49, 17, ""],
		[49, 18, ""],
		[50, 5, ""],
		[50, 6, ""],
		[50, 36, ""],
		[50, 37, ""],
		[52, 21, ""],
		[52, 45, ""],
		[52, 46, ""],
		[53, 52, ""],
		[58, 3, ""],
		[58, 59, ""],
		[62, 7, ""],
		[62, 22, ""],
		[62, 35, ""],
		[64, 9, ""],
		[64, 23, ""],
		[64, 50, ""],
		[65, 8, ""],
		[65, 64, ""],
	],
	"1/6": [
		[5, 54, ""],
		[8, 13, ""],
		[8, 58, ""],
		[13, 11, ""],
		[13, 39, ""],
		[13, 67, ""],
		[22, 14, ""],
		[22, 15, ""],
		[22, 38, ""],
		[22, 51, ""],
		[22, 52, ""],
		[25, 14, ""],
		[25, 15, ""],
		[25, 23, ""],
		[25, 42, ""],
		[25, 43, ""],
		[25, 51, ""],
		[25, 52, ""],
		[25, 66, ""],
		[26, 12, ""],
		[26, 65, ""],
		[28, 30, ""],
		[28, 69, ""],
		[36, 10, ""],
		[36, 24, ""],
		[36, 25, ""],
		[36, 55, ""],
		[36, 56, ""],
		[37, 27, ""],
		[45, 26, ""],
		[45, 40, ""],
		[45, 41, ""],
		[45, 71, ""],
		[53, 54, ""],
		[54, 28, ""],
		[54, 70, ""],
		[61, 53, ""],
		[61, 68, ""],
		[70, 29, ""],
		[70, 57, ""],
	],
	"1/7": [
		[5, 54, ""],
		[8, 12, ""],
		[8, 56, ""],
		[16, 13, ""],
		[16, 14, ""],
		[16, 15, ""],
		[16, 16, ""],
		[16, 23, ""],
		[16, 42, ""],
		[16, 43, ""],
		[16, 51, ""],
		[16, 69, ""],
		[16, 70, ""],
		[19, 13, ""],
		[19, 14, ""],
		[19, 15, ""],
		[19, 16, ""],
		[28, 29, ""],
		[28, 71, ""],
		[31, 57, ""],
		[32, 10, ""],
		[32, 40, ""],
		[32, 41, ""],
		[37, 26, ""],
		[38, 11, ""],
		[38, 39, ""],
		[38, 67, ""],
		[45, 24, ""],
		[45, 25, ""],
		[45, 53, ""],
		[47, 38, ""],
		[47, 42, ""],
		[47, 43, ""],
		[47, 69, ""],
		[47, 70, ""],
		[53, 54, ""],
		[54, 9, ""],
		[54, 68, ""],
		[61, 38, ""],
		[61, 66, ""],
		[64, 11, ""],
		[64, 39, ""],
		[64, 67, ""],
		[65, 27, ""],
		[65, 52, ""],
		[70, 28, ""],
		[70, 55, ""],
	],
};

var raspored = {
	0: {},
	1: {
		1: [["филозофија", "Верољуб Илић", ""]],
		2: [["биологија", "Наталија Остојић", ""]],
		3: [["социологија", "Марина Вуковић Пантелић", ""]],
		4: [["одељенска", "Наташа Ђурић", ""]],
		5: [["физика", "Јасмина Ђокић Јовановић", ""]],
	},
	2: {
		1: [["српски", "Снежана Корнарос", ""]],
		2: [["физика", "Јасмина Ђокић Јовановић", ""]],
		3: [["физичко", "Момир Ђорђић", ""]],
		4: [["биологија", "Наталија Остојић", ""]],
		5: [["математика", "Зорица Бегуш", ""]],
	},
	3: {
		1: [["српски", "Снежана Корнарос", ""]],
		2: [["математика", "Зорица Бегуш", ""]],
		3: [
			["веб програмирање", "Наташа Ђурић", ""],
			["парадигме", "Ивана Фирауновић", ""],
		],
		4: [
			["веб програмирање", "Наташа Ђурић", ""],
			["парадигме", "Ивана Фирауновић", ""],
		],
		5: [["физичко", "Момир Ђорђић", ""]],
	},
	4: {
		1: [["физика", "Јасмина Ђокић Јовановић", ""]],
		2: [["математика", "Зорица Бегуш", ""]],
		3: [
			["веб програмирање", "Наташа Ђурић", ""],
			["парадигме", "Ивана Фирауновић", ""],
		],
		4: [
			["веб програмирање", "Наташа Ђурић", ""],
			["парадигме", "Владимир Нинковић", ""],
		],
		5: [["социологија", "Марина Вуковић Пантелић", ""]],
	},
	5: {
		1: [["математика", "Зорица Бегуш", ""]],
		2: [["енглески", "Зоран Протић", ""]],
		3: [["физика", "Јасмина Ђокић Јовановић", ""]],
		4: [
			["парадигме", "Ивана Фирауновић", ""],
			["базе података", "Владимир Нинковић", ""],
		],
		5: [["биологија", "Наталија Остојић", ""]],
	},
	6: {
		1: [["базе података", "Владимир Нинковић", ""]],
		2: [
			["парадигме", "Ивана Фирауновић", ""],
			["базе података", "Владимир Нинковић", ""],
		],
		3: [["филозофија", "Верољуб Илић", ""]],
		4: [["математика", "Зорица Бегуш", ""]],
		5: [["енглески", "Зоран Протић", ""]],
	},
	7: {
		2: [
			["парадигме", "Ивана Фирауновић", ""],
			["базе података", "Владимир Нинковић", ""],
		],
		3: [["српски", "Снежана Корнарос", ""]],
		4: [
			["веронаука", "Бошко Павловић", ""],
			["грађанско", "Марија Солдатовић", ""],
		],
		5: [["српски", "Снежана Корнарос", ""]],
	},
	8: {},
	9: {},
	10: {},
	11: {},
	12: {},
	13: {},
	14: {},
};

const table = document.getElementById("table");

function generatePredmeti() {
	const key = "4/6";

	const value = casovi[key];

	value.forEach((cas) => {
		const i = cas[0];
		const j = cas[1];
		const mod = cas[2];
		const dan = Math.floor((j - 2) / 14 - 0.01) + 1;
		var brojCasa = ((j - 3) % 14) + 1;

		let profesor = profesori[i];
		let predmet = predmeti[i];
		if (mod == "и") {
			predmet = "изборни";
		} else if (mod != "") {
			predmet = predmet + " (" + mod + ")";
		}
		if (dan in raspored[brojCasa]) {
			raspored[brojCasa][dan].push([predmet, profesor, ""]);
		} else {
			raspored[brojCasa][dan] = [[predmet, profesor, ""]];
		}
	});
}

//generatePredmeti();

const checkbox = document.getElementById("checkbox-1");
const infoContainers = document.getElementsByName("info-container");
const captureButton = document.getElementById("capture-button");
const rootHeader = document.getElementById("root-header");

captureButton.onclick = () => {
	capture();
};

function resetTable() {
	const table = document.getElementById("table");
	table.innerHTML = "";
}

checkbox.onclick = () => {
	//generatePredmeti();

	generateTable();
};

function showInfo(i, j, index, value) {
	const imeProfesora = document.createElement("input");
	imeProfesora.type = "text";
	imeProfesora.value = value[1];
	imeProfesora.className = "profesor-input";
	imeProfesora.onchange = () => {
		raspored[i][j][index][1] = imeProfesora.value;
		generateTable();
	};

	const imePredmeta = document.createElement("input");
	imePredmeta.type = "text";
	imePredmeta.value = value[0];
	imePredmeta.className = "predmet-input";
	imePredmeta.onchange = () => {
		raspored[i][j][index][0] = imePredmeta.value;
		generateTable();
	};

	const radioContainer = document.createElement("div");

	const radioObe = document.createElement("input");
	radioObe.type = "radio";
	radioObe.id = "radio-obe-grupe" + index;
	radioObe.name = "grupa-picker" + index;
	radioObe.checked = raspored[i][j][index][2] == "";
	radioObe.onclick = () => {
		raspored[i][j][index][2] = "";
		generateTable();
	};
	radioContainer.appendChild(radioObe);
	radioContainer.className = "radio-container";

	const radioLabel = document.createElement("label");
	radioLabel.innerHTML = "Obe grupe";
	radioLabel.htmlFor = "radio-obe-grupe" + index;
	radioContainer.appendChild(radioLabel);

	const radioPrva = document.createElement("input");
	radioPrva.type = "radio";
	radioPrva.id = "radio-prva-grupa" + index;
	radioPrva.name = "grupa-picker" + index;
	radioPrva.checked = raspored[i][j][index][2] == "A";
	radioPrva.onclick = () => {
		raspored[i][j][index][2] = "A";
		generateTable();
	};
	radioContainer.appendChild(radioPrva);

	const radioLabel2 = document.createElement("label");
	radioLabel2.innerHTML = "A";
	radioLabel2.htmlFor = "radio-prva-grupa" + index;
	radioContainer.appendChild(radioLabel2);

	const radioDruga = document.createElement("input");
	radioDruga.type = "radio";
	radioDruga.id = "radio-druga-grupa" + index;
	radioDruga.name = "grupa-picker" + index;
	radioDruga.checked = raspored[i][j][index][2] == "B";
	radioDruga.onclick = () => {
		raspored[i][j][index][2] = "B";
		generateTable();
	};
	radioContainer.appendChild(radioDruga);

	const radioLabel3 = document.createElement("label");
	radioLabel3.innerHTML = "B";
	radioLabel3.htmlFor = "radio-druga-grupa" + index;
	radioContainer.appendChild(radioLabel3);

	const infoContainer = infoContainers[index];

	infoContainer.innerHTML = "";
	infoContainer.style.display = "flex";
	infoContainer.appendChild(imePredmeta);
	infoContainer.appendChild(imeProfesora);
	infoContainer.appendChild(radioContainer);
}

import html2canvas from "html2canvas";

function capture() {
	html2canvas(document.querySelector("#capture"), {
		scale: 2,
	}).then((canvas) => {
		const link = document.createElement("a");
		link.href = canvas.toDataURL("image/png");
		link.download = "raspored-casova.png";
		link.click();
	});
}

var filterValue = "";

function generateTable() {
	document.getElementById("radio-obe-grupe").onclick = () => {
		console.log("obe");
		filterValue = "";
		rootHeader.style.color = "white";
		rootHeader.style.backgroundColor = "#d3d3d3";
		rootHeader.innerHTML = "Obe grupe";
		generateTable();
	};
	document.getElementById("radio-prva-grupa").onclick = () => {
		console.log("prva");
		filterValue = "A";
		rootHeader.style.color = "white";
		rootHeader.style.backgroundColor = "#003fff";
		rootHeader.innerHTML = "Група A";
		generateTable();
	};
	document.getElementById("radio-druga-grupa").onclick = () => {
		console.log("druga");
		rootHeader.style.color = "white";
		rootHeader.style.backgroundColor = "#ff4343";
		filterValue = "B";

		rootHeader.innerHTML = "Група B";
		generateTable();
	};

	resetTable();

	for (let i = 0; i <= 14; i++) {
		const row = document.createElement("tr");
		const numberCell = row.insertCell();
		const brojCasa = i <= 7 ? i : i - 7;
		numberCell.innerHTML = brojCasa;
		var exists = false;
		for (let j = 1; j <= 5; j++) {
			const cell = row.insertCell();
			if (raspored[i][j] !== undefined) {
				cell.addEventListener("click", () => {
					infoContainers.forEach((infoContainer) => {
						infoContainer.innerHTML = "";
						infoContainer.style.display = "none";
					});
				});
				raspored[i][j].forEach((value, index) => {
					if (value[2] != "") {
						if (filterValue != "" && filterValue != value[2]) {
							return;
						}
					}
					cell.innerHTML += value[0];
					if (checkbox.checked) {
						cell.innerHTML += " - " + value[1] + "<br>";
					} else {
						cell.innerHTML += "<br>";
					}
					cell.addEventListener("click", () => {
						showInfo(i, j, index, value);
					});

					cell.onmouseover = () => {
						cell.style.backgroundColor = "#ff0000";
						if (i % 2 == 0) {
							cell.style.backgroundColor = "#e6e6e6";
						} else {
							cell.style.backgroundColor = "#e6dab7";
						}
					};
					cell.onmouseout = () => {
						if (i % 2 == 0) {
							cell.style.backgroundColor = "#ffffff";
						} else {
							cell.style.backgroundColor = "#fff2cb";
						}
					};
				});
				exists = true;
			}
			if (exists) {
				table.appendChild(row);
			}
		}
	}

	//capture();
}

generateTable();