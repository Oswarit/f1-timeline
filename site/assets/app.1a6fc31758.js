
const TRACK_REGISTRY = {
  "albert_park": {"sectorSplits": [0.3, 0.65], "name": "Albert Park Circuit", "country": "Австралия", "locality": "Мельбурн", "turns": 14, "lengthKm": 5.278, "firstGpYear": 1996, "drsZones": 4, "lapRecord": "1:19.813", "recordHolder": "Шарль Леклер", "recordTeam": "Ferrari", "recordYear": 2024, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:15.915, М. Ферстаппен (Red Bull, 2024 Q3)", "circuitType": "hybrid", "characteristics": ["ПАРКОВАЯ ТРАССА", "БЫСТРЫЕ ЭСКИ", "4 ЗОНЫ DRS", "ОЗЕРО АЛЬБЕРТ"], "seasons": [1996, 2018, 2019, 2022, 2023, 2024, 2025, 2026], "lat": -37.8497, "lon": 144.968, "elevation": {"baseMeters": 12, "deltaMeters": 6.5, "profile": [{"s": 0.0, "alt": 13.0, "turn": "T1", "slope": 0.2}, {"s": 0.15, "alt": 14.5, "turn": "T3", "slope": 0.4}, {"s": 0.35, "alt": 12.0, "turn": "T6", "slope": -0.3}, {"s": 0.55, "alt": 10.5, "turn": "T9", "slope": -0.5}, {"s": 0.75, "alt": 16.0, "turn": "T11", "slope": 0.6}, {"s": 0.9, "alt": 14.0, "turn": "T13", "slope": -0.4}, {"s": 1.0, "alt": 13.0, "turn": "T14", "slope": 0.0}]}},
  "americas": {"sectorSplits": [0.32, 0.67], "name": "Circuit of the Americas (COTA)", "country": "США", "locality": "Остин, Техас", "turns": 20, "lengthKm": 5.513, "firstGpYear": 2012, "drsZones": 2, "lapRecord": "1:36.169", "recordHolder": "Шарль Леклер", "recordTeam": "Ferrari", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:32.029, В. Боттас (Mercedes, 2019 Q3)", "circuitType": "permanent", "characteristics": ["КРУТОЙ ПОДЪЕМ В Т1 (+30М)", "ЗМЕЙКА ЭСОК", "МНОГОПЛАНОВАЯ ТРАЕКТОРИЯ", "ОБГОННЫЕ ЗОНЫ"], "seasons": [2012, 2018, 2019, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 30.1328, "lon": -97.6411, "elevation": {"baseMeters": 150, "deltaMeters": 40.9, "profile": [{"s": 0.0, "alt": 160.0, "turn": "Start", "slope": 3.5}, {"s": 0.05, "alt": 190.9, "turn": "T1 Apex", "slope": 11.2}, {"s": 0.15, "alt": 172.0, "turn": "T3-T5 Esses", "slope": -6.5}, {"s": 0.28, "alt": 150.0, "turn": "T11 Hairpin", "slope": -2.8}, {"s": 0.45, "alt": 155.0, "turn": "Back Straight", "slope": 0.8}, {"s": 0.65, "alt": 158.0, "turn": "T15 Stadium", "slope": 0.5}, {"s": 0.85, "alt": 163.0, "turn": "T19", "slope": 1.1}, {"s": 1.0, "alt": 160.0, "turn": "T20", "slope": -0.5}]}},
  "bahrain": {"sectorSplits": [0.32, 0.66], "name": "Bahrain International Circuit", "country": "Бахрейн", "locality": "Сахир", "turns": 15, "lengthKm": 5.412, "firstGpYear": 2004, "drsZones": 3, "lapRecord": "1:31.447", "recordHolder": "Педро де ла Роса", "recordTeam": "McLaren", "recordYear": 2005, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:27.264, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["НОЧНОЙ ЭТАП", "ВЫСОКИЙ ТАКТ ИЗНОСА ШИН", "ВЕТЕР И ПЕСОК ПУСТЫНИ", "ТОРМОЖЕНИЕ В Т10"], "seasons": [2004, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 26.0325, "lon": 50.5106, "elevation": {"baseMeters": 7, "deltaMeters": 17.5, "profile": [{"s": 0.0, "alt": 12.0, "turn": "T1", "slope": -1.2}, {"s": 0.2, "alt": 24.5, "turn": "T4", "slope": 2.8}, {"s": 0.4, "alt": 21.0, "turn": "T8", "slope": -1.0}, {"s": 0.55, "alt": 7.0, "turn": "T10", "slope": -4.2}, {"s": 0.75, "alt": 18.0, "turn": "T13", "slope": 1.9}, {"s": 1.0, "alt": 12.0, "turn": "T15", "slope": -0.8}]}},
  "baku": {"sectorSplits": [0.28, 0.64], "name": "Baku City Circuit", "country": "Азербайджан", "locality": "Баку", "turns": 20, "lengthKm": 6.003, "firstGpYear": 2016, "drsZones": 2, "lapRecord": "1:43.009", "recordHolder": "Шарль Леклер", "recordTeam": "Ferrari", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:40.203, Ш. Леклер (Ferrari, 2023 Q3)", "circuitType": "street", "characteristics": ["СВЕРХДЛИННАЯ ПРЯМАЯ 2.2 КМ", "УЗКИЙ УЧАСТОК У КРЕПОСТИ (7.6М)", "НИЖЕ УРОВНЯ МОРЯ", "СКОРОСТЬ 355+ КМ/Ч"], "seasons": [2016, 2018, 2019, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 40.3725, "lon": 49.8533, "elevation": {"baseMeters": -28, "deltaMeters": 14.0, "profile": [{"s": 0.0, "alt": -28.0, "turn": "T1", "slope": 0.1}, {"s": 0.3, "alt": -26.0, "turn": "T7", "slope": 0.5}, {"s": 0.45, "alt": -14.0, "turn": "T9 Castle", "slope": 6.8}, {"s": 0.6, "alt": -18.0, "turn": "T12", "slope": -2.5}, {"s": 0.8, "alt": -28.0, "turn": "T16", "slope": -1.8}, {"s": 1.0, "alt": -28.0, "turn": "T20", "slope": 0.0}]}},
  "catalunya": {"sectorSplits": [0.31, 0.67], "name": "Circuit de Barcelona-Catalunya", "country": "Испания", "locality": "Монмело, Барселона", "turns": 14, "lengthKm": 4.657, "firstGpYear": 1991, "drsZones": 2, "lapRecord": "1:16.330", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2023, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:11.383, Л. Норрис (McLaren, 2024 Q3)", "circuitType": "permanent", "characteristics": ["ЭТАЛОН АЭРОДИНАМИКИ", "ТЯЖЕЛЫЙ ИЗНОС ЛЕВОЙ ПЕРЕДНЕЙ ШИНЫ", "ЗАВЕРШАЮЩИЙ СКОРОСТНОЙ ВИРАЖ", "ЗАТЯЖНОЙ Т3"], "seasons": [1991, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 41.57, "lon": 2.2611, "elevation": {"baseMeters": 125, "deltaMeters": 30.0, "profile": [{"s": 0.0, "alt": 130.0, "turn": "T1", "slope": -1.5}, {"s": 0.18, "alt": 145.0, "turn": "T3 Renault", "slope": 3.8}, {"s": 0.35, "alt": 155.0, "turn": "T7 Crest", "slope": 4.2}, {"s": 0.55, "alt": 138.0, "turn": "T10 La Caixa", "slope": -3.5}, {"s": 0.75, "alt": 125.0, "turn": "T12", "slope": -2.0}, {"s": 1.0, "alt": 130.0, "turn": "T14", "slope": 1.0}]}},
  "hockenheimring": {"sectorSplits": [0.32, 0.68], "name": "Hockenheimring", "country": "Германия", "locality": "Хоккенхайм, Баден-Вюртемберг", "turns": 17, "lengthKm": 4.574, "firstGpYear": 1970, "drsZones": 3, "lapRecord": "1:13.780", "recordHolder": "Кими Райкконен", "recordTeam": "McLaren", "recordYear": 2004, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:11.212, С. Феттель (Ferrari, 2018 Q3)", "circuitType": "permanent", "characteristics": ["СТАДИОН МОТОДРОМ", "ПАРАБОЛИКА", "ШПИЛЬКА ОСТ-КУРВЕ", "ИСТОРИЧЕСКИЙ АВТОДРОМ"], "seasons": [1970, 2018, 2019], "lat": 49.3278, "lon": 8.5658, "elevation": {"baseMeters": 102, "deltaMeters": 8.0, "profile": [{"s": 0.0, "alt": 103.0, "turn": "T1", "slope": 0.2}, {"s": 0.3, "alt": 108.0, "turn": "Parabolica", "slope": 0.5}, {"s": 0.5, "alt": 102.0, "turn": "T6 Hairpin", "slope": -0.8}, {"s": 0.75, "alt": 105.0, "turn": "T12 Motodrom", "slope": 0.4}, {"s": 1.0, "alt": 103.0, "turn": "T17", "slope": -0.2}]}},
  "hungaroring": {"sectorSplits": [0.29, 0.65], "name": "Hungaroring", "country": "Венгрия", "locality": "Модьород, Будапешт", "turns": 14, "lengthKm": 4.381, "firstGpYear": 1986, "drsZones": 2, "lapRecord": "1:16.627", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:13.447, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["МОНАКО БЕЗ СТЕН", "ЕСТЕСТВЕННЫЙ АМФИТЕАТР", "МИНИМУМ ОБГОНОВ", "МАКСИМАЛЬНЫЙ ПРИЖИМ"], "seasons": [1986, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 47.5789, "lon": 19.2486, "elevation": {"baseMeters": 215, "deltaMeters": 34.0, "profile": [{"s": 0.0, "alt": 242.0, "turn": "T1", "slope": -4.5}, {"s": 0.15, "alt": 220.0, "turn": "T2", "slope": -3.2}, {"s": 0.35, "alt": 245.0, "turn": "T4 Mansell", "slope": 5.5}, {"s": 0.55, "alt": 249.0, "turn": "T7 Chicane", "slope": 1.2}, {"s": 0.75, "alt": 215.0, "turn": "T11", "slope": -4.8}, {"s": 1.0, "alt": 242.0, "turn": "T14", "slope": 3.9}]}},
  "imola": {"sectorSplits": [0.32, 0.68], "name": "Autodromo Enzo e Dino Ferrari (Imola)", "country": "Италия", "locality": "Имола, Эмилия-Романья", "turns": 19, "lengthKm": 4.909, "firstGpYear": 1980, "drsZones": 1, "lapRecord": "1:15.484", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:13.609, В. Боттас (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["СТАРЫЙ ФОРМАТ ГРАВИЯ", "ПИРАТЕЛЛА И АКВЕ МИНЕРАЛИ", "ПРОТИВ ЧАСОВОЙ СТРЕЛКИ", "ИСТОРИЧЕСКАЯ ТРАССА"], "seasons": [1980, 2020, 2021, 2022, 2024, 2025], "lat": 44.3439, "lon": 11.7167, "elevation": {"baseMeters": 45, "deltaMeters": 38.0, "profile": [{"s": 0.0, "alt": 48.0, "turn": "T1 Tamburello", "slope": 0.5}, {"s": 0.2, "alt": 58.0, "turn": "T7 Villeneuve", "slope": 2.5}, {"s": 0.35, "alt": 83.0, "turn": "T9 Piratella Crest", "slope": 6.8}, {"s": 0.5, "alt": 45.0, "turn": "T12 Acque Minerali", "slope": -8.5}, {"s": 0.7, "alt": 72.0, "turn": "T14 Variante Alta", "slope": 4.8}, {"s": 0.9, "alt": 46.0, "turn": "T18 Rivazza", "slope": -5.2}, {"s": 1.0, "alt": 48.0, "turn": "T19", "slope": 0.4}]}},
  "interlagos": {"sectorSplits": [0.28, 0.65], "name": "Autódromo José Carlos Pace (Interlagos)", "country": "Бразилия", "locality": "Сан-Паулу", "turns": 15, "lengthKm": 4.309, "firstGpYear": 1973, "drsZones": 2, "lapRecord": "1:10.540", "recordHolder": "Валттери Боттас", "recordTeam": "Mercedes", "recordYear": 2018, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:07.281, Л. Хэмилтон (Mercedes, 2018 Q3)", "circuitType": "permanent", "characteristics": ["ЭССЫ СЕННЫ", "ПРОТИВ ЧАСОВОЙ СТРЕЛКИ", "КРУТОЙ ПОДЪЕМ ЖУНСАО", "ВЫСОКАЯ ПЕРЕМЕНЧИВОСТЬ ПОГОДЫ"], "seasons": [1973, 2018, 2019, 2021, 2022, 2023, 2024, 2025, 2026], "lat": -23.7036, "lon": -46.6997, "elevation": {"baseMeters": 785, "deltaMeters": 43.0, "profile": [{"s": 0.0, "alt": 820.0, "turn": "T1 Senna S", "slope": -6.5}, {"s": 0.12, "alt": 795.0, "turn": "T3 Curva do Sol", "slope": -4.0}, {"s": 0.28, "alt": 785.0, "turn": "T4 Descida do Lago", "slope": -1.2}, {"s": 0.48, "alt": 802.0, "turn": "T6 Ferradura", "slope": 3.8}, {"s": 0.7, "alt": 790.0, "turn": "T10 Bico de Pato", "slope": -2.5}, {"s": 0.85, "alt": 796.0, "turn": "T12 Junção", "slope": 7.2}, {"s": 1.0, "alt": 828.0, "turn": "Subida dos Boxes", "slope": 5.5}]}},
  "istanbul": {"sectorSplits": [0.32, 0.68], "name": "Intercity Istanbul Park", "country": "Турция", "locality": "Тузла, Стамбул", "turns": 14, "lengthKm": 5.338, "firstGpYear": 2005, "drsZones": 2, "lapRecord": "1:24.770", "recordHolder": "Хуан Пабло Монтойя", "recordTeam": "McLaren", "recordYear": 2005, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:22.798, Л. Хэмилтон (Mercedes, 2021 Q3)", "circuitType": "permanent", "characteristics": ["ЛЕГЕНДАРНЫЙ 4-АПЕКСНЫЙ Т8", "ПЕРЕПАДЫ ВЫСОТ 45М", "СКОРОСТНОЙ РЕЛЬЕФ", "ПРОТИВ ЧАСОВОЙ СТРЕЛКИ"], "seasons": [2005, 2020, 2021], "lat": 40.9517, "lon": 29.405, "elevation": {"baseMeters": 130, "deltaMeters": 45.0, "profile": [{"s": 0.0, "alt": 155.0, "turn": "T1 Plunge", "slope": -7.2}, {"s": 0.25, "alt": 135.0, "turn": "T3 Uphill", "slope": 5.4}, {"s": 0.5, "alt": 175.0, "turn": "T8 Quad Apex", "slope": 3.2}, {"s": 0.75, "alt": 130.0, "turn": "T11 Hairpin", "slope": -6.5}, {"s": 1.0, "alt": 155.0, "turn": "T14", "slope": 4.1}]}},
  "jeddah": {"sectorSplits": [0.32, 0.68], "name": "Jeddah Corniche Circuit", "country": "Саудовская Аравия", "locality": "Джидда", "turns": 27, "lengthKm": 6.174, "firstGpYear": 2021, "drsZones": 3, "lapRecord": "1:30.734", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2021, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:27.472, М. Ферстаппен (Red Bull, 2024 Q3)", "circuitType": "street", "characteristics": ["САМАЯ БЫСТРАЯ ГОРОДСКАЯ ТРАССА (250+ КМ/Ч)", "БЭНКИНГ 12° В Т13", "27 СКОРОСТНЫХ ПОВОРОТОВ", "СЛЕПЫЕ ИЗГИБЫ"], "seasons": [2021, 2022, 2023, 2024, 2025, 2026], "lat": 21.6319, "lon": 39.1044, "elevation": {"baseMeters": 12, "deltaMeters": 5.5, "profile": [{"s": 0.0, "alt": 13.0, "turn": "T1", "slope": 0.1}, {"s": 0.25, "alt": 15.5, "turn": "T8", "slope": 0.4}, {"s": 0.45, "alt": 17.5, "turn": "T13 Banked", "slope": 0.8}, {"s": 0.7, "alt": 14.0, "turn": "T22", "slope": -0.5}, {"s": 1.0, "alt": 13.0, "turn": "T27", "slope": -0.2}]}},
  "losail": {"sectorSplits": [0.32, 0.66], "name": "Lusail International Circuit", "country": "Катар", "locality": "Лусаил, Доха", "turns": 16, "lengthKm": 5.419, "firstGpYear": 2021, "drsZones": 1, "lapRecord": "1:23.196", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2023, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:20.520, М. Ферстаппен (Red Bull, 2024 Q3)", "circuitType": "permanent", "characteristics": ["СВЕРХВЫСОКИЕ БОКОВЫЕ ПЕРЕГРУЗКИ", "СКОРОСТНАЯ ПЛАВНАЯ СВЯЗКА Т12-Т14", "НОЧНОЙ ЭТАП ПОД СОФИТАМИ", "ЛИМИТЫ СТИНТОВ ШИН"], "seasons": [2021, 2023, 2024, 2025, 2026], "lat": 25.49, "lon": 51.4542, "elevation": {"baseMeters": 14, "deltaMeters": 8.0, "profile": [{"s": 0.0, "alt": 15.0, "turn": "T1", "slope": -0.4}, {"s": 0.25, "alt": 21.0, "turn": "T4", "slope": 1.2}, {"s": 0.5, "alt": 14.0, "turn": "T9", "slope": -1.5}, {"s": 0.75, "alt": 22.0, "turn": "T13 Triple", "slope": 1.8}, {"s": 1.0, "alt": 15.0, "turn": "T16", "slope": -0.9}]}},
  "madring": {"sectorSplits": [0.32, 0.68], "name": "IFEMA Madrid Circuit", "country": "Испания", "locality": "Мадрид (IFEMA / Valdebebas)", "turns": 20, "lengthKm": 5.474, "firstGpYear": 2026, "drsZones": 2, "lapRecord": "н/д", "recordHolder": "н/д", "recordTeam": "н/д", "recordYear": null, "recordSession": "н/д", "lapRecordProvenance": "UNAVAILABLE", "allTimeRecord": "н/д", "allTimeRecordProvenance": "UNAVAILABLE", "circuitType": "hybrid", "characteristics": ["НОВЫЙ ЭТАП 2026 ГОДА", "ПРОЕЗД ЧЕРЕЗ ПАВИЛЬОНЫ ВЫСТАВКИ", "БЭНКИНГ НА ВАЛЬДЕБЕБАС", "ВЫСОКОСКОРОСТНОЙ ТОННЕЛЬ"], "seasons": [2026], "lat": 40.4653, "lon": -3.6153, "elevation": {"baseMeters": 660, "deltaMeters": 22.0, "profile": [{"s": 0.0, "alt": 665.0, "turn": "T1 IFEMA", "slope": 0.8}, {"s": 0.3, "alt": 682.0, "turn": "Valdebebas Crest", "slope": 3.4}, {"s": 0.6, "alt": 660.0, "turn": "Tunnel Plunge", "slope": -4.2}, {"s": 0.85, "alt": 670.0, "turn": "Stadium Curve", "slope": 1.5}, {"s": 1.0, "alt": 665.0, "turn": "T20", "slope": -0.6}]}},
  "marina_bay": {"sectorSplits": [0.32, 0.67], "name": "Marina Bay Street Circuit", "country": "Сингапур", "locality": "Марина-Бэй", "turns": 19, "lengthKm": 4.94, "firstGpYear": 2008, "drsZones": 4, "lapRecord": "1:34.486", "recordHolder": "Даниэль Риккардо", "recordTeam": "RB", "recordYear": 2024, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:29.525, Л. Норрис (McLaren, 2024 Q3)", "circuitType": "street", "characteristics": ["САМАЯ ФИЗИЧЕСКИ ТЯЖЕЛАЯ ГОНКА КАЛЕНДАРЯ", "ТРОПИЧЕСКАЯ ЖАРА И ВЛАЖНОСТЬ", "100% ВЕРОЯТНОСТЬ SAFETY CAR", "МОСТ АНДЕРСОНА"], "seasons": [2008, 2018, 2019, 2022, 2023, 2024, 2025, 2026], "lat": 1.2914, "lon": 103.864, "elevation": {"baseMeters": 15, "deltaMeters": 7.0, "profile": [{"s": 0.0, "alt": 16.0, "turn": "T1 Sheares", "slope": 0.2}, {"s": 0.25, "alt": 18.0, "turn": "T7 Memorial", "slope": 0.4}, {"s": 0.45, "alt": 22.0, "turn": "T11 Anderson Bridge", "slope": 1.5}, {"s": 0.7, "alt": 15.0, "turn": "T14 Raffles", "slope": -1.2}, {"s": 1.0, "alt": 16.0, "turn": "T19", "slope": 0.1}]}},
  "miami": {"sectorSplits": [0.3, 0.65], "name": "Miami International Autodrome", "country": "США", "locality": "Майами-Гарденс, Флорида", "turns": 19, "lengthKm": 5.412, "firstGpYear": 2022, "drsZones": 3, "lapRecord": "1:29.708", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2023, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:26.841, М. Ферстаппен (Red Bull, 2023 Q2)", "circuitType": "hybrid", "characteristics": ["ВОКРУГ СТАДИОНА HARD ROCK", "УЗКАЯ ШИКАНА ПОД ЭСТАКАДОЙ Т14-15", "ПРЯМАЯ 1.3 КМ", "ВЫСОКИЕ ТЕМПЕРАТУРЫ АСФАЛЬТА"], "seasons": [2022, 2023, 2024, 2025, 2026], "lat": 25.9581, "lon": -80.2389, "elevation": {"baseMeters": 4, "deltaMeters": 5.0, "profile": [{"s": 0.0, "alt": 5.0, "turn": "T1", "slope": 0.1}, {"s": 0.35, "alt": 7.0, "turn": "T8", "slope": 0.3}, {"s": 0.65, "alt": 9.0, "turn": "T14 Overpass Climb", "slope": 2.2}, {"s": 0.85, "alt": 4.0, "turn": "T17 Hairpin", "slope": -1.4}, {"s": 1.0, "alt": 5.0, "turn": "T19", "slope": 0.1}]}},
  "monaco": {"sectorSplits": [0.34, 0.68], "name": "Circuit de Monaco", "country": "Монако", "locality": "Монте-Карло / Ла-Кондамин", "turns": 19, "lengthKm": 3.337, "firstGpYear": 1950, "drsZones": 1, "lapRecord": "1:12.909", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2021, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:10.166, Л. Хэмилтон (Mercedes, 2019 Q3)", "circuitType": "street", "characteristics": ["ЖЕМЧУЖИНА ТРОЙНОЙ КОРОНЫ", "ПОДЪЕМ БО-РИВАЖ", "ШПИЛЬКА ФЭРМОНТ (САМЫЙ МЕДЛЕННЫЙ ПОВОРОТ F1 - 45 КМ/Ч)", "СКОРОСТНОЙ БАССЕЙН"], "seasons": [1950, 2018, 2019, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 43.7347, "lon": 7.4206, "elevation": {"baseMeters": 20, "deltaMeters": 42.0, "profile": [{"s": 0.0, "alt": 24.0, "turn": "Start", "slope": -1.5}, {"s": 0.06, "alt": 20.0, "turn": "T1 Sainte Dévote", "slope": 0.5}, {"s": 0.18, "alt": 55.0, "turn": "T2 Beau Rivage", "slope": 8.5}, {"s": 0.25, "alt": 62.0, "turn": "T4 Casino Square", "slope": 2.0}, {"s": 0.38, "alt": 40.0, "turn": "T5 Mirabeau Haute", "slope": -7.5}, {"s": 0.45, "alt": 28.0, "turn": "T6 Fairmont Hairpin", "slope": -8.2}, {"s": 0.55, "alt": 20.0, "turn": "T8 Portier", "slope": -4.0}, {"s": 0.68, "alt": 22.0, "turn": "T9 Tunnel Exit", "slope": 1.2}, {"s": 0.85, "alt": 21.0, "turn": "T13 Louis Chiron", "slope": 0.0}, {"s": 0.95, "alt": 23.0, "turn": "T17 Rascasse", "slope": 1.0}, {"s": 1.0, "alt": 24.0, "turn": "T19 Antony Noghès", "slope": 0.5}]}},
  "monza": {"sectorSplits": [0.29, 0.67], "name": "Autodromo Nazionale Monza", "country": "Италия", "locality": "Монца, Ломбардия", "turns": 11, "lengthKm": 5.793, "firstGpYear": 1950, "drsZones": 2, "lapRecord": "1:21.046", "recordHolder": "Рубенс Баррикелло", "recordTeam": "Ferrari", "recordYear": 2004, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:18.887, Л. Хэмилтон (Mercedes, 2020 Q3 - Средняя 264.36 км/ч)", "circuitType": "permanent", "characteristics": ["ХРАМ СКОРОСТИ", "ПАРАБОЛИКА АЛЬБОРЕТО", "ВАРИАНТЕ АСКАРИ", "МИНИМАЛЬНЫЙ ПРИЖИМ MONZA-SPEC"], "seasons": [1950, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 45.6156, "lon": 9.2811, "elevation": {"baseMeters": 185, "deltaMeters": 12.0, "profile": [{"s": 0.0, "alt": 186.0, "turn": "T1 Rettifilo", "slope": -0.8}, {"s": 0.25, "alt": 189.0, "turn": "Curva Grande", "slope": 0.5}, {"s": 0.4, "alt": 184.0, "turn": "Variante della Roggia", "slope": -1.2}, {"s": 0.55, "alt": 197.0, "turn": "Lesmo 1 & 2", "slope": 2.5}, {"s": 0.75, "alt": 187.0, "turn": "Variante Ascari", "slope": -1.8}, {"s": 1.0, "alt": 186.0, "turn": "Curva Parabolica", "slope": 0.0}]}},
  "mugello": {"sectorSplits": [0.32, 0.68], "name": "Autodromo Internazionale del Mugello", "country": "Италия", "locality": "Скарперия, Тоскана", "turns": 15, "lengthKm": 5.245, "firstGpYear": 2020, "drsZones": 1, "lapRecord": "1:18.833", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:15.144, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["СКОРОСТНЫЕ СВЯЗКИ АРРАББИАТА 1 И 2", "ТОСКАНСКИЙ РЕЛЬЕФ", "СВЕРХВЫСОКИЕ БОКОВЫЕ G-LOADS"], "seasons": [2020], "lat": 43.9975, "lon": 11.3719, "elevation": {"baseMeters": 280, "deltaMeters": 41.0, "profile": [{"s": 0.0, "alt": 288.0, "turn": "T1 San Donato", "slope": -4.2}, {"s": 0.25, "alt": 315.0, "turn": "T4 Materassi", "slope": 4.5}, {"s": 0.5, "alt": 321.0, "turn": "T8-T9 Arrabbiata", "slope": 5.8}, {"s": 0.75, "alt": 285.0, "turn": "T12 Correntaio", "slope": -6.2}, {"s": 1.0, "alt": 288.0, "turn": "T15 Bucine", "slope": 1.1}]}},
  "nurburgring": {"sectorSplits": [0.32, 0.68], "name": "Nürburgring (GP-Strecke)", "country": "Германия", "locality": "Нюрбург, Рейнланд-Пфальц", "turns": 15, "lengthKm": 5.148, "firstGpYear": 1951, "drsZones": 2, "lapRecord": "1:28.139", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:25.269, В. Боттас (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["ГОРЫ АЙФЕЛЬ", "ШИКАНА ФЕТТЕЛЯ", "РЕЗКАЯ СМЕНА ПОГОДЫ", "ИСТОРИЧЕСКИЙ АВТОДРОМ"], "seasons": [1951, 2020], "lat": 50.3356, "lon": 6.9475, "elevation": {"baseMeters": 610, "deltaMeters": 56.0, "profile": [{"s": 0.0, "alt": 625.0, "turn": "T1 Castrol S", "slope": -4.5}, {"s": 0.2, "alt": 612.0, "turn": "T4 Mercedes Arena", "slope": -2.1}, {"s": 0.4, "alt": 666.0, "turn": "T7 Dunlop Kehre", "slope": 7.2}, {"s": 0.65, "alt": 648.0, "turn": "T10 Schumacher S", "slope": -2.8}, {"s": 1.0, "alt": 625.0, "turn": "T15", "slope": -1.5}]}},
  "portimao": {"sectorSplits": [0.32, 0.68], "name": "Autódromo Internacional do Algarve (Portimão)", "country": "Португалия", "locality": "Портиман, Алгарве", "turns": 15, "lengthKm": 4.653, "firstGpYear": 2020, "drsZones": 2, "lapRecord": "1:18.750", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:16.466, В. Боттас (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["АМЕРИКАНСКИЕ ГОРКИ", "СЛЕПЫЕ ВЕРШИНЫ И СПУСКИ", "КРУТОЙ ПОВОРОТ ГАЛП", "АТЛАНТИЧЕСКИЙ ВЕТЕР"], "seasons": [2020, 2021], "lat": 37.227, "lon": -8.6267, "elevation": {"baseMeters": 110, "deltaMeters": 38.0, "profile": [{"s": 0.0, "alt": 132.0, "turn": "T1 Primeira", "slope": -6.8}, {"s": 0.25, "alt": 148.0, "turn": "T4 Blind Crest", "slope": 7.5}, {"s": 0.5, "alt": 112.0, "turn": "T8 Hairpin Dip", "slope": -8.2}, {"s": 0.75, "alt": 142.0, "turn": "T11 Crest", "slope": 6.5}, {"s": 1.0, "alt": 132.0, "turn": "T15 Galp", "slope": -3.0}]}},
  "red_bull_ring": {"sectorSplits": [0.27, 0.63], "name": "Red Bull Ring", "country": "Австрия", "locality": "Шпильберг, Штирия", "turns": 10, "lengthKm": 4.318, "firstGpYear": 1970, "drsZones": 3, "lapRecord": "1:05.619", "recordHolder": "Карлос Сайнс", "recordTeam": "McLaren", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:02.939, В. Боттас (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["САМЫЙ КОРОТКИЙ КРУГ ПО ВРЕМЕНИ (63-65 СЕК)", "КРУТОЙ ПОДЪЕМ В Т3", "3 ПОДРЯД ЗОНЫ DRS", "АЛЬПИЙСКИЙ РЕЛЬЕФ (+65М)"], "seasons": [1970, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 47.2197, "lon": 14.7647, "elevation": {"baseMeters": 678, "deltaMeters": 65.5, "profile": [{"s": 0.0, "alt": 680.0, "turn": "Start", "slope": 1.5}, {"s": 0.12, "alt": 705.0, "turn": "T1 Niki Lauda", "slope": 5.8}, {"s": 0.26, "alt": 743.5, "turn": "T3 Remus Summit", "slope": 9.2}, {"s": 0.42, "alt": 700.0, "turn": "T4 Schlossgold Plunge", "slope": -8.5}, {"s": 0.6, "alt": 690.0, "turn": "T6 Rauch", "slope": -3.2}, {"s": 0.82, "alt": 684.0, "turn": "T9 Jochen Rindt", "slope": -1.8}, {"s": 1.0, "alt": 680.0, "turn": "T10", "slope": -0.8}]}},
  "ricard": {"sectorSplits": [0.32, 0.68], "name": "Circuit Paul Ricard", "country": "Франция", "locality": "Ле-Кастелле, Прованс", "turns": 15, "lengthKm": 5.842, "firstGpYear": 1971, "drsZones": 2, "lapRecord": "1:32.740", "recordHolder": "Себастьян Феттель", "recordTeam": "Ferrari", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:28.319, Л. Хэмилтон (Mercedes, 2019 Q3)", "circuitType": "permanent", "characteristics": ["ПРЯМАЯ МИСТРАЛЬ 1.8 КМ", "СКОРОСТНОЙ ВИРАЖ СИНЬ (300+ КМ/Ч)", "СИНИЕ И КРАСНЫЕ ЗОНЫ БЕЗОПАСНОСТИ"], "seasons": [1971, 2018, 2019, 2021, 2022], "lat": 43.2506, "lon": 5.7917, "elevation": {"baseMeters": 415, "deltaMeters": 15.0, "profile": [{"s": 0.0, "alt": 420.0, "turn": "T1", "slope": 0.3}, {"s": 0.35, "alt": 430.0, "turn": "Mistral Straight", "slope": 0.6}, {"s": 0.55, "alt": 424.0, "turn": "Chicane", "slope": -0.5}, {"s": 0.7, "alt": 428.0, "turn": "Signes Curve", "slope": 0.2}, {"s": 1.0, "alt": 420.0, "turn": "T15", "slope": -0.4}]}},
  "rodriguez": {"sectorSplits": [0.31, 0.66], "name": "Autódromo Hermanos Rodríguez", "country": "Мексика", "locality": "Мехико", "turns": 17, "lengthKm": 4.304, "firstGpYear": 1963, "drsZones": 3, "lapRecord": "1:17.774", "recordHolder": "Валттери Боттас", "recordTeam": "Mercedes", "recordYear": 2021, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:14.758, М. Ферстаппен (Red Bull, 2019 Q3)", "circuitType": "permanent", "characteristics": ["ВЫСОТА 2285М НАД УРОВНЕМ МОРЯ", "РАЗРЕЖЕННЫЙ ВОЗДУХ (НА 20% МЕНЬШЕ КИСЛОРОДА)", "СТАДИОН ФОРО СОЛЬ", "МАКСИМАЛЬНАЯ СКОРОСТЬ 360 КМ/Ч"], "seasons": [1963, 2018, 2019, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 19.4042, "lon": -99.0907, "elevation": {"baseMeters": 2285, "deltaMeters": 6.0, "profile": [{"s": 0.0, "alt": 2286.0, "turn": "T1", "slope": 0.1}, {"s": 0.3, "alt": 2289.0, "turn": "T4 Esses", "slope": 0.3}, {"s": 0.65, "alt": 2287.0, "turn": "Lake Esses", "slope": -0.2}, {"s": 0.85, "alt": 2291.0, "turn": "Foro Sol Stadium", "slope": 0.4}, {"s": 1.0, "alt": 2286.0, "turn": "T17 Peraltada Exit", "slope": -0.3}]}},
  "sepang": {"sectorSplits": [0.32, 0.68], "name": "Sepang International Circuit", "country": "Малайзия", "locality": "Сепанг, Селангор", "turns": 15, "lengthKm": 5.543, "firstGpYear": 1999, "drsZones": 2, "lapRecord": "1:34.080", "recordHolder": "Себастьян Феттель", "recordTeam": "Ferrari", "recordYear": 2017, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:30.076, Л. Хэмилтон (Mercedes, 2017 Q3)", "circuitType": "permanent", "characteristics": ["ТРОПИЧЕСКИЕ ЛИВНИ", "ШИРОКИЕ ТРАЕКТОРИИ ТИЛЬКЕ", "ДВЕ ПАРАЛЛЕЛЬНЫЕ ПРЯМЫЕ", "ЗАТЯЖНЫЕ ВИРАЖИ Т5-Т6"], "seasons": [1999, 2017], "lat": 2.7608, "lon": 101.738, "elevation": {"baseMeters": 38, "deltaMeters": 18.0, "profile": [{"s": 0.0, "alt": 42.0, "turn": "T1", "slope": -1.8}, {"s": 0.25, "alt": 56.0, "turn": "T5 Uphill Sweep", "slope": 3.8}, {"s": 0.5, "alt": 39.0, "turn": "T9 Hairpin Dip", "slope": -4.2}, {"s": 0.75, "alt": 48.0, "turn": "T13", "slope": 2.1}, {"s": 1.0, "alt": 42.0, "turn": "T15 Final Hairpin", "slope": -1.2}]}},
  "shanghai": {"sectorSplits": [0.3, 0.68], "name": "Shanghai International Circuit", "country": "Китай", "locality": "Цзядин, Шанхай", "turns": 16, "lengthKm": 5.451, "firstGpYear": 2004, "drsZones": 2, "lapRecord": "1:32.238", "recordHolder": "Михаэль Шумахер", "recordTeam": "Ferrari", "recordYear": 2004, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:31.095, С. Феттель (Ferrari, 2018 Q3)", "circuitType": "permanent", "characteristics": ["ФОРМА ИЕРОГЛИФА «ШАН» (上)", "СПИРАЛЬНЫЙ ПОВОРОТ-УЛИТКА 270° Т1-Т3", "СВЕРХДЛИННАЯ ОБРАТНАЯ ПРЯМАЯ 1.2 КМ", "УНИКАЛЬНЫЙ Т13 С БЭНКИНГОМ"], "seasons": [2004, 2018, 2019, 2024, 2025, 2026], "lat": 31.3389, "lon": 121.22, "elevation": {"baseMeters": 10, "deltaMeters": 12.0, "profile": [{"s": 0.0, "alt": 14.0, "turn": "T1 Snail Entry", "slope": 0.8}, {"s": 0.15, "alt": 22.0, "turn": "T2-T3 Spiral Peak", "slope": 2.4}, {"s": 0.35, "alt": 11.0, "turn": "T6 Hairpin", "slope": -2.8}, {"s": 0.65, "alt": 18.0, "turn": "T11-T13 Banked", "slope": 1.5}, {"s": 0.88, "alt": 10.0, "turn": "T14 Hairpin Dip", "slope": -1.9}, {"s": 1.0, "alt": 14.0, "turn": "T16", "slope": 0.5}]}},
  "silverstone": {"sectorSplits": [0.28, 0.63], "name": "Silverstone Circuit", "country": "Великобритания", "locality": "Сильверстоун, Нортгемптоншир", "turns": 18, "lengthKm": 5.891, "firstGpYear": 1950, "drsZones": 2, "lapRecord": "1:27.097", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2020, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:24.303, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["РОДИНА ЧЕМПИОНАТА F1 (13 МАЯ 1950)", "СВЯЗКА МАГГОТС-БЕККЕТТС-ЧЭПЕЛ", "КОПС (290 КМ/Ч НА 8-Й ПЕРЕДАЧЕ)", "НЕПРЕДСКАЗУЕМЫЙ БРИТАНСКИЙ ВЕТЕР"], "seasons": [1950, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 52.0786, "lon": -1.0169, "elevation": {"baseMeters": 152, "deltaMeters": 11.5, "profile": [{"s": 0.0, "alt": 155.0, "turn": "T1 Abbey", "slope": -0.5}, {"s": 0.15, "alt": 153.0, "turn": "T3 Village", "slope": -0.8}, {"s": 0.35, "alt": 160.0, "turn": "T7 Brooklands", "slope": 1.4}, {"s": 0.52, "alt": 163.5, "turn": "T9 Copse Crest", "slope": 1.8}, {"s": 0.68, "alt": 156.0, "turn": "Maggotts/Becketts", "slope": -1.9}, {"s": 0.85, "alt": 154.0, "turn": "T15 Stowe", "slope": -0.4}, {"s": 1.0, "alt": 155.0, "turn": "T18 Club", "slope": 0.2}]}},
  "sochi": {"sectorSplits": [0.32, 0.68], "name": "Sochi Autodrom", "country": "Россия", "locality": "Сириус / Сочи", "turns": 18, "lengthKm": 5.848, "firstGpYear": 2014, "drsZones": 2, "lapRecord": "1:35.761", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:31.304, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["ОЛИМПИЙСКИЙ ПАРК", "ЗАТЯЖНОЙ ЛЕВЫЙ ВИРАЖ Т3 (ВОКРУГ МЕДАЛЬНОЙ ПЛОЩАДИ)", "МНОГОЧИСЛЕННЫЕ 90° ПОВОРОТЫ", "ГЛАДКИЙ АСФАЛЬТ"], "seasons": [2014, 2018, 2019, 2020, 2021], "lat": 43.4057, "lon": 39.9578, "elevation": {"baseMeters": 18, "deltaMeters": 4.0, "profile": [{"s": 0.0, "alt": 19.0, "turn": "T1", "slope": 0.1}, {"s": 0.2, "alt": 21.0, "turn": "T3 Omega", "slope": 0.3}, {"s": 0.55, "alt": 18.0, "turn": "T7", "slope": -0.2}, {"s": 0.8, "alt": 22.0, "turn": "T13", "slope": 0.4}, {"s": 1.0, "alt": 19.0, "turn": "T18", "slope": -0.2}]}},
  "spa": {"sectorSplits": [0.31, 0.66], "name": "Circuit de Spa-Francorchamps", "country": "Бельгия", "locality": "Спа-Франкоршам, Арденны", "turns": 19, "lengthKm": 7.004, "firstGpYear": 1950, "drsZones": 2, "lapRecord": "1:44.701", "recordHolder": "Серхио Перес", "recordTeam": "Red Bull Racing", "recordYear": 2024, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:41.252, Л. Хэмилтон (Mercedes, 2020 Q3)", "circuitType": "permanent", "characteristics": ["САМАЯ ДЛИННАЯ ТРАССА КАЛЕНДАРЯ (7.004 КМ)", "О РУЖ И РАДИЙОН (ПОДЪЕМ 17% / 35М)", "ПЕРЕПАД ВЫСОТ 102М", "МИКРОКЛИМАТ АРДЕННСКОГО ЛЕСА"], "seasons": [1950, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 50.4372, "lon": 5.9714, "elevation": {"baseMeters": 370, "deltaMeters": 102.2, "profile": [{"s": 0.0, "alt": 395.0, "turn": "Start / Finish", "slope": -2.1}, {"s": 0.05, "alt": 378.0, "turn": "T1 La Source Hairpin", "slope": -3.5}, {"s": 0.1, "alt": 388.0, "turn": "T2 Eau Rouge Dip", "slope": 6.8}, {"s": 0.14, "alt": 418.0, "turn": "T3-T4 Raidillon Summit", "slope": 16.5}, {"s": 0.28, "alt": 472.2, "turn": "T5-T6 Les Combes Crest", "slope": 5.2}, {"s": 0.38, "alt": 445.0, "turn": "T8 Malmedy / Rivage", "slope": -4.8}, {"s": 0.52, "alt": 410.0, "turn": "T11 Pouhon Downhill", "slope": -6.2}, {"s": 0.68, "alt": 385.0, "turn": "T14 Stavelot", "slope": -3.5}, {"s": 0.88, "alt": 370.0, "turn": "T16 Blanchimont Dip", "slope": -1.8}, {"s": 0.96, "alt": 388.0, "turn": "T18 Bus Stop Chicane", "slope": 4.5}, {"s": 1.0, "alt": 395.0, "turn": "Straight", "slope": 1.8}]}},
  "suzuka": {"sectorSplits": [0.33, 0.68], "name": "Suzuka International Racing Course", "country": "Япония", "locality": "Судзука, префектура Миэ", "turns": 18, "lengthKm": 5.807, "firstGpYear": 1987, "drsZones": 1, "lapRecord": "1:30.983", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:27.064, С. Феттель (Ferrari, 2019 Q3)", "circuitType": "permanent", "characteristics": ["ЕДИНСТВЕННАЯ ТРАССА F1 В ФОРМЕ ВОСЬМЕРКИ (МОСТ И ТОННЕЛЬ)", "СВЯЗКА ПЕРВОГО СЕКТОРА S-CURVES", "ЛЕГЕНДАРНЫЙ 130R (310 КМ/Ч)", "СПОН-КУРВ"], "seasons": [1987, 2018, 2019, 2022, 2023, 2024, 2025, 2026], "lat": 34.8431, "lon": 136.541, "elevation": {"baseMeters": 45, "deltaMeters": 40.4, "profile": [{"s": 0.0, "alt": 52.0, "turn": "T1 First Corner", "slope": -1.5}, {"s": 0.18, "alt": 78.0, "turn": "T3-T6 S-Curves", "slope": 6.8}, {"s": 0.3, "alt": 85.4, "turn": "T7 Dunlop Curve Crest", "slope": 4.2}, {"s": 0.45, "alt": 58.0, "turn": "T11 Hairpin", "slope": -7.5}, {"s": 0.6, "alt": 45.0, "turn": "Crossover Underpass", "slope": -3.2}, {"s": 0.72, "alt": 72.0, "turn": "T13 Spoon Curve", "slope": 5.8}, {"s": 0.84, "alt": 62.0, "turn": "130R High Speed", "slope": -2.4}, {"s": 0.92, "alt": 56.0, "turn": "Casio Triangle Chicane", "slope": -1.5}, {"s": 1.0, "alt": 52.0, "turn": "Main Straight", "slope": -0.8}]}},
  "vegas": {"sectorSplits": [0.32, 0.68], "name": "Las Vegas Strip Circuit", "country": "США", "locality": "Лас-Вегас, Невада", "turns": 17, "lengthKm": 6.201, "firstGpYear": 2023, "drsZones": 2, "lapRecord": "1:35.490", "recordHolder": "Оскар Пиастри", "recordTeam": "McLaren", "recordYear": 2023, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:32.726, Ш. Леклер (Ferrari, 2023 Q3)", "circuitType": "street", "characteristics": ["БУЛЬВАР СТРИП (ПРЯМАЯ 1.9 КМ, СКОРОСТЬ 350+ КМ/Ч)", "НОЧНОЙ ЭТАП ПРИ ТЕМПЕРАТУРЕ +10°C", "СФЕРА LAS VEGAS", "НИЗКИЙ УРОВЕНЬ ПРИЖИМА"], "seasons": [2023, 2024, 2025, 2026], "lat": 36.1147, "lon": -115.173, "elevation": {"baseMeters": 610, "deltaMeters": 8.0, "profile": [{"s": 0.0, "alt": 614.0, "turn": "T1 Harmon", "slope": 0.1}, {"s": 0.25, "alt": 618.0, "turn": "Sphere T5-T9", "slope": 0.5}, {"s": 0.55, "alt": 612.0, "turn": "The Strip Straight", "slope": -0.4}, {"s": 0.8, "alt": 610.0, "turn": "T14 Chicane", "slope": -0.3}, {"s": 1.0, "alt": 614.0, "turn": "T17", "slope": 0.3}]}},
  "villeneuve": {"sectorSplits": [0.3, 0.66], "name": "Circuit Gilles Villeneuve", "country": "Канада", "locality": "Монреаль, Квебек", "turns": 14, "lengthKm": 4.361, "firstGpYear": 1978, "drsZones": 2, "lapRecord": "1:13.078", "recordHolder": "Валттери Боттас", "recordTeam": "Mercedes", "recordYear": 2019, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:10.240, С. Феттель (Ferrari, 2019 Q3)", "circuitType": "hybrid", "characteristics": ["СТЕНА ЧЕМПИОНОВ (WALL OF CHAMPIONS)", "ОСТРОВ НОТР-ДАМ", "ЭКСТРЕМАЛЬНЫЕ ТОРМОЖЕНИЯ", "ШИКАНО-ПРЯМОЙ РИТМ"], "seasons": [1978, 2018, 2019, 2022, 2023, 2024, 2025, 2026], "lat": 45.5, "lon": -73.5228, "elevation": {"baseMeters": 14, "deltaMeters": 5.0, "profile": [{"s": 0.0, "alt": 15.0, "turn": "T1-T2 Senna", "slope": -0.2}, {"s": 0.25, "alt": 17.5, "turn": "T6-T7", "slope": 0.6}, {"s": 0.55, "alt": 19.0, "turn": "T10 Hairpin", "slope": 0.4}, {"s": 0.8, "alt": 14.0, "turn": "Droit du Casino", "slope": -0.8}, {"s": 1.0, "alt": 15.0, "turn": "Wall of Champions", "slope": 0.2}]}},
  "yas_marina": {"sectorSplits": [0.33, 0.68], "name": "Yas Marina Circuit", "country": "ОАЭ", "locality": "Абу-Даби, остров Яс", "turns": 16, "lengthKm": 5.281, "firstGpYear": 2009, "drsZones": 2, "lapRecord": "1:26.103", "recordHolder": "Макс Ферстаппен", "recordTeam": "Red Bull Racing", "recordYear": 2021, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:22.109, М. Ферстаппен (Red Bull, 2021 Q3)", "circuitType": "permanent", "characteristics": ["ФИНАЛ СЕЗОНА НА ЗАКАТЕ (ДЕНЬ-НОЧЬ)", "ОТЕЛЬ W ABU DHABI", "СКОРОСТНАЯ ШПИЛЬКА Т5 С БЭНКИНГОМ", "ВЫЕЗД С ПИТ-ЛЕЙН ЧЕРЕЗ ТОННЕЛЬ"], "seasons": [2009, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 24.4672, "lon": 54.6031, "elevation": {"baseMeters": 8, "deltaMeters": 9.0, "profile": [{"s": 0.0, "alt": 10.0, "turn": "T1", "slope": 0.2}, {"s": 0.25, "alt": 17.0, "turn": "T5 Banked Hairpin", "slope": 1.8}, {"s": 0.5, "alt": 9.0, "turn": "T6-T7 Chicanes", "slope": -1.5}, {"s": 0.75, "alt": 14.0, "turn": "T9 Hotel Marina", "slope": 0.8}, {"s": 1.0, "alt": 10.0, "turn": "T16 Final Turn", "slope": -0.6}]}},
  "zandvoort": {"sectorSplits": [0.31, 0.65], "name": "Circuit Zandvoort", "country": "Нидерланды", "locality": "Зандворт, Северная Голландия", "turns": 14, "lengthKm": 4.259, "firstGpYear": 1952, "drsZones": 2, "lapRecord": "1:11.097", "recordHolder": "Льюис Хэмилтон", "recordTeam": "Mercedes", "recordYear": 2021, "recordSession": "Гонка (Race Lap)", "allTimeRecord": "1:08.885, М. Ферстаппен (Red Bull, 2021 Q3)", "circuitType": "permanent", "characteristics": ["БЭНКИНГ 18° (БОЛЬШЕ ЧЕМ В ИНДИАНАПОЛИСЕ!)", "ПЕСЧАНЫЕ ДЮНЫ СЕВЕРНОГО МОРЯ", "ОЛДСКУЛЬНЫЙ ХАРАКТЕР БЕЗ ПРАВА НА ОШИБКУ", "ТАРЗАН-КУРВЕ"], "seasons": [1952, 2021, 2022, 2023, 2024, 2025, 2026], "lat": 52.3888, "lon": 4.5409, "elevation": {"baseMeters": 15, "deltaMeters": 15.0, "profile": [{"s": 0.0, "alt": 16.0, "turn": "T1 Tarzan", "slope": 0.2}, {"s": 0.18, "alt": 27.0, "turn": "T3 Hugenholtz Banked", "slope": 4.5}, {"s": 0.4, "alt": 30.0, "turn": "T7 Scheivlak Dunes", "slope": 3.2}, {"s": 0.65, "alt": 15.0, "turn": "T10 Arena Dip", "slope": -4.8}, {"s": 0.88, "alt": 22.0, "turn": "T14 Arie Luyendyk 18°", "slope": 2.1}, {"s": 1.0, "alt": 16.0, "turn": "Main Straight", "slope": -1.0}]}},
};

const TRACK_ALIASES = {
  "melbourne": "albert_park",
  "austin": "americas",
  "cota": "americas",
  "sakhir": "bahrain",
  "barcelona": "catalunya",
  "catalonia": "catalunya",
  "montmelo": "catalunya",
  "hockenheim": "hockenheimring",
  "budapest": "hungaroring",
  "mogyorod": "hungaroring",
  "interlagos": "interlagos",
  "sao_paulo": "interlagos",
  "saopaulo": "interlagos",
  "jose_carlos_pace": "interlagos",
  "istanbul_park": "istanbul",
  "losail": "losail",
  "lusail": "losail",
  "doha": "losail",
  "madrid": "madring",
  "ifema": "madring",
  "singapore": "marina_bay",
  "monte_carlo": "monaco",
  "montecarlo": "monaco",
  "monza": "monza",
  "spielberg": "red_bull_ring",
  "red-bull-ring": "red_bull_ring",
  "austria": "red_bull_ring",
  "oesterreichring": "red_bull_ring",
  "paul_ricard": "ricard",
  "le_castellet": "ricard",
  "castellet": "ricard",
  "mexico": "rodriguez",
  "mexico_city": "rodriguez",
  "hermanos_rodriguez": "rodriguez",
  "sepang": "sepang",
  "kuala_lumpur": "sepang",
  "shanghai": "shanghai",
  "silverstone": "silverstone",
  "sochi": "sochi",
  "spa_francorchamps": "spa",
  "francorchamps": "spa",
  "suzuka": "suzuka",
  "las_vegas": "vegas",
  "strip": "vegas",
  "montreal": "villeneuve",
  "gilles_villeneuve": "villeneuve",
  "abu_dhabi": "yas_marina",
  "abudhabi": "yas_marina",
  "zandvoort": "zandvoort"
};

const TRACK_REMOTE_IMAGES = {};

const CIRCUIT_TURNS = {
  "hockenheimring": [{"number": 1, "x": 0.171, "y": 0.787, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.098, "y": 0.629, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.03, "y": 0.486, "sector": 1, "name": "Turn 3", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.083, "y": 0.378, "sector": 1, "name": "Turn 4", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.133, "y": 0.321, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.263, "y": 0.187, "sector": 2, "name": "Turn 6", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.35, "y": 0.314, "sector": 2, "name": "Turn 7", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.517, "y": 0.383, "sector": 2, "name": "Turn 8", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.682, "y": 0.385, "sector": 2, "name": "Turn 9", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.859, "y": 0.319, "sector": 2, "name": "Turn 10", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.97, "y": 0.285, "sector": 2, "name": "Turn 11", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.742, "y": 0.453, "sector": 3, "name": "Turn 12", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.556, "y": 0.436, "sector": 3, "name": "Turn 13", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.555, "y": 0.588, "sector": 3, "name": "Turn 14", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.339, "y": 0.716, "sector": 3, "name": "Turn 15", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 16, "x": 0.184, "y": 0.577, "sector": 3, "name": "Turn 16", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 17, "x": 0.274, "y": 0.752, "sector": 3, "name": "Turn 17", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "istanbul": [{"number": 1, "x": 0.683, "y": 0.237, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.911, "y": 0.219, "sector": 1, "name": "Turn 2", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.825, "y": 0.064, "sector": 1, "name": "Turn 3", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.593, "y": 0.156, "sector": 1, "name": "Turn 4", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.518, "y": 0.262, "sector": 2, "name": "Turn 5", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.503, "y": 0.327, "sector": 2, "name": "Turn 6", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.447, "y": 0.553, "sector": 2, "name": "Turn 7", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.255, "y": 0.697, "sector": 2, "name": "Turn 8", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.07, "y": 0.842, "sector": 2, "name": "Turn 9", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.124, "y": 0.864, "sector": 3, "name": "Turn 10", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.536, "y": 0.693, "sector": 3, "name": "Turn 11", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.827, "y": 0.473, "sector": 3, "name": "Turn 12", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.909, "y": 0.389, "sector": 3, "name": "Turn 13", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.635, "y": 0.262, "sector": 3, "name": "Turn 14", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "mugello": [{"number": 1, "x": 0.496, "y": 0.514, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.29, "y": 0.437, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.06, "y": 0.335, "sector": 1, "name": "Turn 3", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.189, "y": 0.311, "sector": 1, "name": "Turn 4", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.216, "y": 0.27, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.404, "y": 0.309, "sector": 2, "name": "Turn 6", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.549, "y": 0.311, "sector": 2, "name": "Turn 7", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.608, "y": 0.343, "sector": 2, "name": "Turn 8", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.734, "y": 0.429, "sector": 2, "name": "Turn 9", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.905, "y": 0.577, "sector": 2, "name": "Turn 10", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.902, "y": 0.751, "sector": 3, "name": "Turn 11", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.637, "y": 0.664, "sector": 3, "name": "Turn 12", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.38, "y": 0.582, "sector": 3, "name": "Turn 13", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.528, "y": 0.595, "sector": 3, "name": "Turn 14", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.856, "y": 0.722, "sector": 3, "name": "Turn 15", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "nurburgring": [{"number": 1, "x": 0.848, "y": 0.061, "sector": 1, "name": "Turn 1", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.721, "y": 0.201, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.573, "y": 0.354, "sector": 1, "name": "Turn 3", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.454, "y": 0.438, "sector": 1, "name": "Turn 4", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.469, "y": 0.379, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.4, "y": 0.376, "sector": 2, "name": "Turn 6", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.39, "y": 0.529, "sector": 2, "name": "Turn 7", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.431, "y": 0.725, "sector": 2, "name": "Turn 8", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.283, "y": 0.843, "sector": 2, "name": "Turn 9", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.18, "y": 0.97, "sector": 2, "name": "Turn 10", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.293, "y": 0.783, "sector": 3, "name": "Turn 11", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.354, "y": 0.456, "sector": 3, "name": "Turn 12", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.25, "y": 0.367, "sector": 3, "name": "Turn 13", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.393, "y": 0.189, "sector": 3, "name": "Turn 14", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.676, "y": 0.096, "sector": 3, "name": "Turn 15", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "portimao": [{"number": 1, "x": 0.156, "y": 0.756, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.374, "y": 0.692, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.599, "y": 0.625, "sector": 1, "name": "Turn 3", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.867, "y": 0.546, "sector": 1, "name": "Turn 4", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.911, "y": 0.373, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.706, "y": 0.305, "sector": 2, "name": "Turn 6", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.796, "y": 0.424, "sector": 2, "name": "Turn 7", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.636, "y": 0.379, "sector": 2, "name": "Turn 8", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.583, "y": 0.244, "sector": 2, "name": "Turn 9", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.439, "y": 0.414, "sector": 2, "name": "Turn 10", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.176, "y": 0.474, "sector": 3, "name": "Turn 11", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.418, "y": 0.475, "sector": 3, "name": "Turn 12", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.58, "y": 0.495, "sector": 3, "name": "Turn 13", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.105, "y": 0.543, "sector": 3, "name": "Turn 14", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.139, "y": 0.755, "sector": 3, "name": "Turn 15", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "ricard": [{"number": 1, "x": 0.137, "y": 0.283, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.298, "y": 0.345, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.465, "y": 0.409, "sector": 1, "name": "Turn 3", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.61, "y": 0.429, "sector": 1, "name": "Turn 4", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.771, "y": 0.525, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.953, "y": 0.603, "sector": 2, "name": "Turn 6", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.969, "y": 0.758, "sector": 2, "name": "Turn 7", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.886, "y": 0.773, "sector": 2, "name": "Turn 8", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.922, "y": 0.636, "sector": 2, "name": "Turn 9", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.814, "y": 0.657, "sector": 2, "name": "Turn 10", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.693, "y": 0.672, "sector": 3, "name": "Turn 11", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.337, "y": 0.412, "sector": 3, "name": "Turn 12", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.234, "y": 0.39, "sector": 3, "name": "Turn 13", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.033, "y": 0.256, "sector": 3, "name": "Turn 14", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.126, "y": 0.276, "sector": 3, "name": "Turn 15", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
  "sochi": [{"number": 1, "x": 0.912, "y": 0.817, "sector": 1, "name": "Turn 1", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 2, "x": 0.744, "y": 0.764, "sector": 1, "name": "Turn 2", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 3, "x": 0.695, "y": 0.806, "sector": 1, "name": "Turn 3", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 4, "x": 0.604, "y": 0.749, "sector": 1, "name": "Turn 4", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 5, "x": 0.604, "y": 0.62, "sector": 1, "name": "Turn 5", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 6, "x": 0.615, "y": 0.445, "sector": 1, "name": "Turn 6", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 7, "x": 0.605, "y": 0.262, "sector": 2, "name": "Turn 7", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 8, "x": 0.535, "y": 0.138, "sector": 2, "name": "Turn 8", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 9, "x": 0.352, "y": 0.215, "sector": 2, "name": "Turn 9", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 10, "x": 0.272, "y": 0.069, "sector": 2, "name": "Turn 10", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 11, "x": 0.07, "y": 0.176, "sector": 2, "name": "Turn 11", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 12, "x": 0.248, "y": 0.35, "sector": 2, "name": "Turn 12", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 13, "x": 0.391, "y": 0.274, "sector": 3, "name": "Turn 13", "type": "chicane", "speedKph": null, "gear": null, "drs": false}, {"number": 14, "x": 0.465, "y": 0.35, "sector": 3, "name": "Turn 14", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 15, "x": 0.396, "y": 0.494, "sector": 3, "name": "Turn 15", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 16, "x": 0.576, "y": 0.804, "sector": 3, "name": "Turn 16", "type": "sweeper", "speedKph": null, "gear": null, "drs": false}, {"number": 17, "x": 0.908, "y": 0.933, "sector": 3, "name": "Turn 17", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}, {"number": 18, "x": 0.924, "y": 0.827, "sector": 3, "name": "Turn 18", "type": "hairpin", "speedKph": null, "gear": null, "drs": false}],
};

// Sector and DRS numbers for circuits with telemetry are measured (see applyTrackOutlines); nothing is typed in here for them.
const _RAW_CIRCUIT_SECTORS = {
};

const CCW_CIRCUITS = new Set([
  'imola', 'interlagos', 'istanbul', 'marina_bay', 'yas_marina', 'americas', 'baku', 'jeddah', 'vegas'
]);
const NIGHT_CIRCUITS = new Set([
  'bahrain', 'jeddah', 'marina_bay', 'losail', 'vegas', 'yas_marina'
]);
const CIRCUIT_REGIONS = {
  albert_park: 'ASIA_ME',
  bahrain: 'ASIA_ME',
  jeddah: 'ASIA_ME',
  suzuka: 'ASIA_ME',
  shanghai: 'ASIA_ME',
  baku: 'ASIA_ME',
  marina_bay: 'ASIA_ME',
  losail: 'ASIA_ME',
  yas_marina: 'ASIA_ME',
  sepang: 'ASIA_ME',
  miami: 'AMERICAS',
  villeneuve: 'AMERICAS',
  americas: 'AMERICAS',
  rodriguez: 'AMERICAS',
  interlagos: 'AMERICAS',
  vegas: 'AMERICAS',
  imola: 'EUROPE',
  monaco: 'EUROPE',
  catalunya: 'EUROPE',
  madring: 'EUROPE',
  red_bull_ring: 'EUROPE',
  silverstone: 'EUROPE',
  hungaroring: 'EUROPE',
  spa: 'EUROPE',
  zandvoort: 'EUROPE',
  monza: 'EUROPE',
  hockenheimring: 'EUROPE',
  nurburgring: 'EUROPE',
  mugello: 'EUROPE',
  portimao: 'EUROPE',
  ricard: 'EUROPE',
  sochi: 'EUROPE',
  istanbul: 'EUROPE'
};

function enrichCircuitSectorEntry(canon, base) {
  if (!base || typeof base !== 'object') return base;
  const isCcw = CCW_CIRCUITS.has(canon);
  const path = (typeof CIRCUIT_PATHS !== 'undefined' && CIRCUIT_PATHS[canon]) || '';
  const viewBox = (typeof CIRCUIT_VIEWBOXES !== 'undefined' && CIRCUIT_VIEWBOXES[canon]) || '0 0 500 500';
  return Object.assign(base, {
    id: canon,
    path,
    svgPath: path,
    viewBox,
    direction: isCcw ? 'ccw' : 'cw',
    clockwise: !isCcw,
    directionArrow: isCcw ? '↺' : '↻',
    directionLabel: isCcw ? 'против часовой' : 'по часовой',
    directionFull: isCcw ? 'Против часовой стрелки' : 'По часовой стрелке',
    region: CIRCUIT_REGIONS[canon] || 'EUROPE',
    isNight: NIGHT_CIRCUITS.has(canon)
  });
}

const CIRCUIT_SECTORS = new Proxy(_RAW_CIRCUIT_SECTORS, {
  get(target, prop) {
    if (typeof prop !== 'string' || prop === 'then' || prop === 'toJSON') return target[prop];
    const canon = (typeof TRACK_ALIASES !== 'undefined' && TRACK_ALIASES[prop]) || prop;
    if (prop in target) return enrichCircuitSectorEntry(canon, target[prop]);
    if (canon in target) return enrichCircuitSectorEntry(canon, target[canon]);
    const reg = (typeof TRACK_REGISTRY !== 'undefined' && TRACK_REGISTRY[canon]) || null;
    const turns = (typeof CIRCUIT_TURNS !== 'undefined' && CIRCUIT_TURNS[canon]) || [];
    let s1Count = 0, s2Count = 0, s3Count = 0;
    turns.forEach(t => {
      if (t.sector === 1) s1Count++;
      else if (t.sector === 2) s2Count++;
      else s3Count++;
    });
    const sp1 = Math.round(((reg?.sectorSplits?.[0]) || 0.32) * 1000);
    const sp2 = Math.round(((reg?.sectorSplits?.[1]) || 0.68) * 1000);
    const lenKm = Number(reg?.lengthKm) || 5.0;
    return enrichCircuitSectorEntry(canon, {
      lengthKm: lenKm,
      s1: { start: 0, end: sp1, turns: s1Count ? `T1–T${s1Count}` : 'T1–T4', lengthM: Math.round(lenKm * sp1) },
      s2: { start: sp1, end: sp2, turns: s2Count ? `T${s1Count + 1}–T${s1Count + s2Count}` : 'T5–T9', lengthM: Math.round(lenKm * (sp2 - sp1)) },
      s3: { start: sp2, end: 1000, turns: s3Count ? `T${s1Count + s2Count + 1}–T${turns.length}` : 'T10–T14', lengthM: Math.round(lenKm * (1000 - sp2)) },
      drs: []
    });
  }
});

// Hand-drawn maps remain only for circuits without OpenF1 telemetry (raced before 2023); the rest come from TRACK_OUTLINES.
const CIRCUIT_PATHS = {
  "hockenheimring": "M85.513 393.513c-6.893-14.714-33.04-71.193-51.075-109.999-6.537-14.063-14.607-29.287-18.795-37.212-.352-.666-1.23-3.384.76-8.29 3.973-9.788 11.35-25.16 19.927-40.95 5.13-9.447 8.433-12.803 10.53-15.124 21.878-24.204 53.435-59.758 75.586-84.163 4.854-5.344 8.97-7.235 15.78 2.4 2.728 3.862 3.027 10.972 3.027 20.074 0 8.13.462 13.698 9.08 20.073 35.813 26.497 93.827 56.47 146.54 55.668 59.069-.9 58.218-6.28 175.293-54.062 6.556-2.678 9.848-3.465 11.857-.803 2.016 2.674 1.029 5.119-1.767 7.492-17.657 14.986-24.342 20.924-25.36 21.583-9.606 6.226-38.151 25.975-73.476 50.6-6.59 4.598-13.684 7.095-21.981 5.967-21.69-2.943-41.367-5.886-77.433-10.439-5.267-.666-5.8-.26-6.557 5.62-.722 5.638-.866 13.45 2.524 26.767 2.523 9.9 8.826 12.044 10.343 19.804 2.157 11.065-10.684 24.903-17.21 29.484-32.983 23.129-62.043 43.52-78.637 55.098-10.29 7.178-26.986 10.438-38.968-4.416-11.679-14.481-40.228-50.316-47.291-58.615-2.61-3.071-10.768-4.926-16.015-1.875-5.316 3.092-7.196 11.41-5.55 17.4 2.508 9.105 5.425 18.331 7.441 23.149 2.017 4.817 5.165 9.691 11.854 12.586 7.438 3.211 14.251 6.018 18.788 12.975 4.54 6.962 7.695 11.78 10.722 17.135 3.026 5.351 1.26 13.782-4.29 18.066-5.547 4.28-15.134 10.968-21.44 15.12-2.706 1.778-15.974 6.467-24.207-11.113z",
  "istanbul": "M341.438 118.349c17.684 1.311 48.193 6.942 64.807 10.181 10.107 1.968 20.776.103 29.596-5.174l13.503-8.07c4.99-2.982 8.642-7.927 10.015-13.57l4.894-20.125c2.158-8.868-.507-18.394-6.95-24.862-7.363-7.391-19.755-17.506-36.972-23.722-3.798-1.373-8.064-1.289-11.867.23l-151.03 60.175a16.47 16.47 0 0 0-10.028 11.876 16.43 16.43 0 0 0 4.3 14.914l4.268 4.39a9.89 9.89 0 0 1 2.543 9.222l-31.593 132.754a46.1 46.1 0 0 1-19.127 27.623L41.474 406.418c-5.504 3.713-7.8 10.225-5.848 16.587 1.936 6.306 7.393 10.381 13.904 10.381.342 0 .686-.01 1.46-.069 3.917-.336 8.044-.898 12.367-1.681l.388.462-2.255 18.723a15.3 15.3 0 0 0 3.741 11.978c2.927 3.29 7.106 5.177 11.47 5.177 1.511 0 3.02-.226 4.486-.67l183.805-55.692a20.3 20.3 0 0 0 12.69-11.228 20.27 20.27 0 0 0-.264-16.96c-12.364-25.836-10.87-37.273-7.44-42.316 20.876-30.685 63.031-46.698 125.293-47.591a24.4 24.4 0 0 0 18.715-9.111 24.34 24.34 0 0 0 4.899-20.232c-1.97-9.573-4.302-19.082-5.915-25.375a2.63 2.63 0 0 1 .438-2.246c.28-.38.915-1.027 2.015-1.083l32.247-1.605a14.92 14.92 0 0 0 11.351-6.118 14.85 14.85 0 0 0 2.374-12.65l-3.423-12.833c-2.05-7.69-7.712-13.996-15.146-16.873L322.12 138.707a7.47 7.47 0 0 1-4.634-5.47c-.512-2.448.2-4.843 1.952-6.575 6.2-6.13 13.449-8.945 21.999-8.313z",
  "mugello": "M248.079 257.036c-10.605-3.29-21.237-6.524-31.705-10.21-16.016-5.642-31.605-12.414-47.365-18.72-14.799-5.921-29.487-12.126-44.31-17.963a236 236 0 0 0-25.21-8.32c-18.197-4.89-36.749-8.602-54.432-14.37-4.344-1.417-10.038-4.11-11.65-8.13-1.712-4.264-4.407-9.751-2.675-14.182 1.682-4.301 5.332-9.033 9.55-10.777 5.841-2.416 12.632-2.465 19.48-2.08 11.105.623 21.57 4.785 32.087 3.97 4.126-.32 8.303-4.417 10.504-7.941 3.784-6.056 5.435-14.047 9.168-20.232 2.506-4.152 6.51-7.614 10.886-9.265 3.645-1.375 11.128-.074 16.807 2.836 32.358 16.578 56.574 30.016 93.203 48.027 21.376 10.51 31.788-25.22 53.286-10.4 25.28 17.429 51.477 34.48 78.88 52.755 5.723 3.817 6.276 12.512 6.684 19.286 1.41 23.581 2.569 38.105 22.155 42.355 9.952 2.16 33.912 7.563 53.286 12.29 6.92 1.689 12.995 6.548 16.998 11.912 4.274 5.729 6.736 14.596 6.303 21.934-.713 12.075-4.963 24.374-8.786 36.304-2.034 6.348-4.603 13.098-8.786 17.774-3.71 4.148-13.418 8.154-19.29 7.941-31.052-1.126-60.204-2.428-90.338-3.781-3.557-.16-7.678-2.758-10.313-5.106-2.458-2.19-3.84-5.303-4.393-8.508-1.463-8.486-1.81-18.949-5.157-26.85-1.618-3.822-6.031-7.436-10.313-8.32-34.807-7.184-71.902-9.032-106.954-15.883-4.292-.839-8.506-3.886-11.078-7.185-3.03-3.887-4.583-9.418-4.583-14.181 0-4.44 3.2-10.467 6.493-13.425 3.583-3.219 7.901-5.073 12.988-5.294 6.5-.283 13.087 1.639 19.099 4.349 8.25 3.719 15.725 10.363 23.682 14.937 3.884 2.233 8.21 4.663 12.606 4.916 8.718.503 18.127-3.658 26.738-2.647 6.413.753 12.542 4.68 18.335 7.942 33.169 18.672 64.986 40.863 98.55 57.859 5.27 2.668 12.585 2.735 17.954 1.134 5.2-1.55 9.67-6.658 12.605-11.155 2.413-3.697 3.319-9.363 3.247-13.993-.055-3.564-1.755-7.41-3.629-10.4-2.71-4.321-5.524-8.208-9.931-10.966-6.67-4.175-14.513-6.99-22.155-9.454-52.583-16.95-105.718-32.408-158.521-48.783z",
  "nurburgring": "M421.599 23.223c6.001 9.505-1.685 16.211-4.647 19.24-33.8 34.564-135.317 139.719-141.545 145.693-7.253 6.958-9.775 9.28-12.19 10.903-6.377 4.286-22.413 15.19-29.633 19.568-3.818 2.317-8.722 2.423-7.502-4.94.43-2.6 1.306-6.67 2.438-12.3 1.033-5.125 6.995-13.25 9.66-17.082 6.846-9.846 3.375-28.669-16.504-28.824-13.403-.103-32.258 5.932-40.417 9.938-5.957 2.926-9.191 5.955-8.16 13.14 1.22 8.48 9.015 9.29 14.254 8.945 3.313-.217 8.566-.326 10.315-.372 3.47-.094 7.565 4.007 7.315 10.716-.25 6.71-5.424 40.255-7.064 49.575-1.578 8.968-2.138 13.675-3.157 16.958-4.595 14.816-13.157 40.712-18.004 55.163-3.283 9.785.375 21.154 9.847 25.626 8.187 3.866 17.419 8.212 22.693 10.903 5.008 2.556 6.8 6.171 6.658 10.158-.156 4.297-1.875 9.318-6.001 11.276-11.999 5.69-33.96 18.241-42.792 23.98-5.69 3.696-19.497 12.377-32.32 26.711-16.895 18.884-24.097 29.304-34.697 49.108-4.688 8.759-13.305 9.66-19.504 4.659-6.471-5.218-6.033-14.87 1.032-20.687 9.847-8.107 47.88-46.34 56.17-54.977 11.628-12.114 11.14-21.334 6.096-38.485-3.563-12.114-4.031-16.522.22-27.953s29.82-92.688 32.32-101.384c2.501-8.697 2.063-12.953-8.159-17.518-10.972-4.901-21.474-9.505-32.915-14.535-5.556-2.444-9.752-6.338-10.972-16.03-.807-6.413 1.823-11.988 6.97-17.516 7.753-8.325 12.128-13.047 16.88-19.507s42.885-52.685 46.385-56.908c3.5-4.224 12.114-10.863 22.006-13.542 12.378-3.355 112.776-30.812 116.778-31.806 4.001-.995 5.375-.995 3.626-7.58-1.371-5.16-1.25-5.715 3-8.2 4.251-2.485 11.959-6.8 20.38-9.318 12.743-3.811 26.786-7.063 37.973-9.728 2.312-.552 15.584-5.076 23.167 6.932z",
  "portimao": "M78.05 377.813c12.738-3.772 333.97-98.235 346.898-101.693 21.996-5.885 41.198-30.459 39.992-55.223-1.331-27.386-10.665-38.702-22.218-48.66-9.125-7.866-37.541-32.506-45.768-38.702-10.22-7.695-30.908-9.578-40.88 5.66-6.222 9.505-3.664 15.865 2.444 21.048 9.332 7.922 34.27 27.703 39.992 32.59 6.889 5.885 4.667 22.405-8.442 20.822-13.548-1.638-34.192-4.479-45.77-6.112-14.442-2.036-26.217-14.711-29.327-25.348-2.869-9.806-12.443-42.32-15.33-51.826-2.295-7.552-9.73-9.824-14.664-8.148-5.998 2.038-9.999 3.621-13.998 5.433-4 1.81-10 5.883-14.22 14.485-6.045 12.312-16.886 34.626-23.995 48.66-7.306 14.419-15.997 19.69-27.995 21.047-16.414 1.858-94.205 11.769-105.758 13.58-9.266 1.451-14.885 13.351-7.554 19.917 7.567 6.773 15.775 14.03 22.885 20.595 6.586 6.078 15.553 8.147 25.329 3.395 15.334-7.456 40.658-20.821 49.1-25.575 6.959-3.917 17.535-7.04 25.995-6.337 10.888.906 58.205 5.299 69.765 6.11 6.442.453 9.65 12.383-.223 15.164-10.442 2.942-169.455 49.128-180.93 52.581-13.035 3.924-22.515.453-28.292-9.958-3.724-6.712-10.22-18.86-14.07-25.197-4.184-6.885-13.23-5.683-15.109 2.415-1.926 8.297-7.85 31.986-10.22 41.944-2.319 9.738 1.209 14.739 5.61 20.71 10.72 14.54 17.052 23.14 21.052 28.856 2.126 3.037 6.027 10.631 15.7 7.767z",
  "ricard": "M68.421 141.745c45.794 17.522 130.788 49.83 210.182 79.992 1.537.584 3.06 1.196 4.603 1.749 6.654 2.383 6.39 2.025 8.454.27 3.347-2.85 5.678-4.792 8.863-7.469 2.019-1.696 4.532-2.468 7.202-1.268 3.147 1.414 4.014 4.227 6.507 8.454 1.045 1.774 2.107 3.715 4.016 5.073 8.725 6.2 10.386 7.327 15.79 11.413 7.957 6.02 13.62 8.008 18.504 9.864 60.184 22.86 105.928 40.24 110.008 41.85 13.572 5.356 22.435 17.19 22.435 36.355 0 19.162.047 42.275-.277 48.473-.83 15.922-17.347 26.571-30.744 20.29-15.926-7.468-12.922-17.548-5.124-29.45 7.478-11.413 9.576-13.794 16.203-23.53 7.478-10.992 3.599-22.826-2.216-25.082-5.69-2.206-7.859.757-17.172 5.495-9.14 4.65-21.188 7.186-36.699 4.65-10.308-1.686-22.968-10.952-28.668-18.6-9.556-12.822-30.329-5.636-30.188 6.623.067 5.925 0 8.313 0 13.104s-2.633 8.455-8.725 3.664c-6.095-4.791-154.412-119.913-161.059-125.267-2.084-1.679-4.376-2.198-6.99-2.343-4.977-.274-7.087-.11-10.224 3.634-1.42 1.694-8.548 11.89-18.122 6.385-5.47-3.144-15.256-8.97-18.719-12.275-6.978-6.66-8.14-8.412-12.28-11.605-9.14-7.046-19.11-15.078-31.298-20.432-12.186-5.355-22.019-10.286-34.898-18.457-3.892-2.468-4.155-4.51-3.324-10.71s-.138-10.285-3.6-13.385c-3.386-3.032-5.678-2.396-21.744-.987-4.297.377-4.49-2.453-3.324-5.918 1.662-4.932 3.79-10.74 5.262-14.936 2.078-5.918 7.074-6.207 11.633-5.918 8.865.563 18.834 12.259 22.989 21.277 3.79 8.211 3.64 15.533 12.744 19.017z",
  "sochi": "m455.768 408.717-82.252-26.313a18.2 18.2 0 0 0-5.538-.868c-7.918 0-14.861 5.058-17.276 12.588l-3.64 10.475-30.216-9.667c-4.302-1.376-9.84-7.292-14.122-15.074-2.061-3.74-.695-8.492 3.04-10.594l12.815-7.203c4.177-2.352 5.678-7.668 3.338-11.853a991 991 0 0 0-6.06-10.622c-16.352-28.38-19.754-34.286-10.743-96.297 11.265-77.441 1.614-128.208-32.262-169.749-5.47-6.721-16.024-8.082-23.093-2.955l-47.268 34.282a13.06 13.06 0 0 1-7.565 2.502l-17.514.203a5.15 5.15 0 0 1-4.61-2.88l-31.745-65.064c-2.195-4.5-7.153-7.21-12.164-6.628l-21.707 2.584A54.7 54.7 0 0 0 80.32 46.53c-12.2 9.382-29.252 22.926-41.223 34.17a12.9 12.9 0 0 0-4.093 9.173 12.9 12.9 0 0 0 3.686 9.355c14.757 15.163 55.935 55.517 72.958 72.165 4.932 4.82 13.376 4.996 18.502.385 8.882-7.986 25.214-22.332 34.78-28.669 3.22-2.132 11.897-7.09 22.984-7.09 13.883 0 26.39 7.53 37.174 22.376 19.923 27.438-.005 56.776-11.911 74.305l-.8 1.18a10.4 10.4 0 0 1-5.057 3.952l-1.416.523a12.27 12.27 0 0 0-7.331 7.416 12.25 12.25 0 0 0 1.018 10.38l78.54 132.062a91.56 91.56 0 0 0 50.85 40.428l118.92 38.042a8.3 8.3 0 0 0 2.532.4 8.24 8.24 0 0 0 8.152-6.876l6.229-36.627c1.103-6.47-2.787-12.86-9.045-14.863z"
};

const CIRCUIT_VIEWBOXES = {
  "albert_park": "-166.7 -3.6 831.8 508.3",
  "americas": "-125.7 19.6 752.2 459.7",
  "bahrain": "-27.2 80.9 553.5 338.2",
  "baku": "-168.6 -6.6 838.3 512.3",
  "catalunya": "-168.4 -6.0 840.5 513.6",
  "hockenheimring": "-41.5 72.5 583.4 356.6",
  "hungaroring": "-170.9 -4.3 840.1 513.4",
  "imola": "-5.4 94.6 509.9 311.6",
  "interlagos": "-163.6 -3.8 831.1 507.9",
  "istanbul": "-136.4 13.6 772.9 472.3",
  "jeddah": "17.0 107.6 466.0 284.8",
  "losail": "-29.8 77.9 562.4 343.7",
  "madring": "-12.2 89.7 524.5 320.5",
  "marina_bay": "-29.4 80.0 558.8 341.5",
  "miami": "17.0 107.3 466.6 285.2",
  "monaco": "-166.6 -3.9 832.7 508.9",
  "monza": "-166.9 -5.1 833.4 509.3",
  "mugello": "3.8 99.4 491.9 300.6",
  "nurburgring": "-167.8 -6.8 837.4 511.8",
  "portimao": "7.5 102.5 484.6 296.1",
  "red_bull_ring": "-5.8 94.4 509.7 311.5",
  "ricard": "-26.6 83.2 552.9 337.9",
  "rodriguez": "-94.8 39.2 688.8 420.9",
  "sepang": "-96.3 39.0 688.1 420.5",
  "shanghai": "-106.6 31.5 714.6 436.7",
  "silverstone": "-170.0 -3.9 840.3 513.5",
  "sochi": "-134.6 14.4 770.2 470.7",
  "spa": "-165.4 -3.5 830.7 507.6",
  "suzuka": "-5.3 94.7 508.9 311.0",
  "vegas": "1.7 98.1 495.4 302.7",
  "villeneuve": "-163.4 -3.6 832.3 508.6",
  "yas_marina": "-169.4 -9.3 838.9 512.6",
  "zandvoort": "-166.5 -5.3 832.5 508.7"
};

/* TRACK_OUTLINES:BEGIN */
const TRACK_OUTLINES = {"albert_park":{"source":{"api":"OpenF1 location + laps","session_key":11230,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":21,"lap_duration":78.518,"sector_times":[27.498,17.284,33.736],"driver":"George RUSSELL"},"lengthM":5248,"direction":"cw","sectors":[333,600],"elevation":{"deltaM":2.5,"profile":[1.0,0.3,0.6,0.8,1.0,1.3,1.4,0.8,1.3,1.2,1.1,1.1,1.6,2.0,1.8,1.4,1.4,1.7,1.5,2.0,1.7,1.7,1.6,1.5,1.7,1.6,1.8,2.0,2.3,2.0,2.2,1.9,0.9,1.0,1.2,1.2,0.8,1.0,1.2,1.5,1.0]},"viewBox":"-166.7 -3.6 831.8 508.3","fit":{"aligned":true,"rotationDeg":1.3,"shapeError":0.007},"path":"M213 366l-53 -53l-9 -11l-2 -7l3 -21l-2 -13l-6 -9l-31 -30l-24 -29l-26 -39l-3 -7l-1 -6l1 -5l3 -2l23 -3l5 -3l3 -4l2 -11l-3 -28l3 -13l9 -13l25 -16l38 -16l20 -11l5 0l7 3l11 7l36 11l13 8l7 9l6 11l4 14l4 25l-3 31l-19 50l-4 13l1 29l8 25l8 16l7 9l17 17l16 13l8 4l26 -1l9 2l27 22l23 22l11 18l7 17l14 47l4 23l-2 5l-4 2l-54 13l-7 -1l-9 -6l-5 -8l-13 -27l-4 -7l-4 -3l-7 1l-10 13l-9 6l-9 1l-9 -3l-10 -8l-73 -75z","drs":{"year":2025,"session_key":9689,"zones":[[107,183],[483,616],[670,768],[925,1052]]}},"americas":{"source":{"api":"OpenF1 location + laps","session_key":11392,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":14,"lap_duration":94.035,"sector_times":[25.31,37.297,31.428],"driver":"Kimi ANTONELLI"},"lengthM":5423,"direction":"ccw","sectors":[302,713],"elevation":{"deltaM":30.3,"profile":[3.6,3.6,15.2,29.9,27.9,14.9,11.7,13.5,11.6,11.6,14.1,14.4,19.4,24.8,20.8,12.1,14.3,15.1,9.5,8.1,11.8,8.8,9.4,8.2,6.5,7.0,9.2,9.6,7.5,7.6,7.8,8.1,10.0,11.1,6.6,4.8,2.0,0.5,2.4,3.8,3.6]},"viewBox":"-125.7 19.6 752.2 459.7","fit":{"aligned":true,"rotationDeg":337.4,"shapeError":0.007},"path":"M81 414l163 44l7 1l6 -2l2 -6l-4 -9l-21 -22l-6 -9l-3 -9l-1 -11l2 -12l4 -8l19 -24l7 -12l4 -9l2 -16l3 -12l11 -14l1 -11l-2 -20l3 -12l6 -9l7 -7l5 -2l8 -1l24 0l10 -3l7 -10l8 -21l6 -7l8 -3l8 2l8 3l7 -1l17 -10l12 -8l10 -11l7 -8l4 -10l25 -81l0 -10l-3 -5l-7 0l-8 5l-56 49l-40 31l-37 26l-43 27l-92 51l-3 5l0 4l2 4l8 5l22 9l8 5l4 3l3 7l0 5l-2 4l-6 4l-6 1l-12 -3l-14 -11l-13 -5l-8 0l-4 3l-3 4l1 5l3 4l28 16l4 4l7 10l4 8l1 8l0 7l-2 9l-8 10l-10 8l-13 4l-13 1l-14 -4l-11 -6l-18 -14l-10 -4l-12 -2l-8 3l-5 3l-39 41l-4 5l-2 6l0 3l2 4l7 4l38 9z","drs":{"year":2025,"session_key":9884,"zones":[[0,99],[537,665]]}},"bahrain":{"source":{"api":"OpenF1 location + laps","session_key":10010,"year":2025,"session":"Qualifying","driver_number":81,"lap_number":14,"lap_duration":89.841,"sector_times":[28.784,38.574,22.483],"driver":"Oscar PIASTRI"},"lengthM":5337,"direction":"cw","sectors":[330,737],"elevation":{"deltaM":16.6,"profile":[0.0,0.2,0.9,2.3,2.9,1.6,2.5,5.9,9.8,14.7,16.3,15.0,14.3,12.8,10.9,4.2,0.6,0.8,2.8,5.8,3.2,1.8,2.1,2.0,2.0,2.0,1.4,3.7,6.7,11.2,15.4,14.6,12.5,11.7,10.4,5.7,5.0,3.3,1.3,0.0,0.1]},"viewBox":"-27.2 80.9 553.5 338.2","fit":{"aligned":true,"rotationDeg":268.6,"shapeError":0.003},"path":"M287 391l-189 -4l-53 1l-8 -1l-6 -3l-2 -5l1 -4l14 -16l3 -9l-1 -9l-8 -26l0 -20l1 -12l27 -158l2 -6l5 -10l3 -3l4 -2l5 0l7 2l8 5l6 6l18 23l10 10l15 12l17 10l5 5l4 5l4 9l1 26l2 9l6 10l6 8l7 5l29 17l7 5l6 6l3 7l-1 3l-5 4l-6 2l-8 1l-13 -2l-64 -12l-17 -1l-10 1l-13 4l-5 3l-6 5l-5 7l-1 6l0 2l4 3l9 3l22 2l34 1l167 4l9 0l11 -3l7 -4l4 -6l3 -12l0 -5l-2 -7l-5 -10l-10 -11l-7 -4l-33 -14l-14 -10l-2 -3l-12 -19l-2 -10l0 -10l3 -14l16 -33l6 -9l5 -4l4 -1l7 -2l5 1l11 5l7 8l44 76l80 136l4 8l2 12l-3 7l-6 5l-10 6l-12 2l-14 0l-44 -3l-92 -1z","drs":{"year":2025,"session_key":10010,"zones":[[1,114],[186,257],[514,616]]}},"baku":{"source":{"api":"OpenF1 location + laps","session_key":11373,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":25,"lap_duration":102.526,"sector_times":[36.009,41.659,24.858],"driver":"George RUSSELL"},"lengthM":5971,"direction":"ccw","sectors":[335,672],"elevation":{"deltaM":26.8,"profile":[0.2,0.2,0.3,0.9,1.3,1.8,1.7,1.6,2.3,2.1,1.8,1.3,1.1,0.7,0.7,0.5,0.8,1.0,1.3,1.4,2.0,5.4,10.4,10.6,19.1,25.8,26.1,24.0,20.8,8.8,2.3,1.0,0.5,0.7,1.0,1.2,0.8,0.9,1.4,0.5,0.2]},"viewBox":"-168.6 -6.6 838.3 512.3","fit":{"aligned":true,"rotationDeg":341.8,"shapeError":0.007},"path":"M417 121l47 -41l3 -4l1 -5l-1 -4l-4 -5l-44 -49l-5 -3l-5 1l-67 54l-93 85l0 6l29 34l3 4l0 5l-3 4l-26 23l-24 26l-2 4l0 5l6 9l0 4l-53 76l-4 2l-5 -4l-26 -36l-8 0l-17 2l-4 -3l-3 -6l-3 -2l-13 6l-18 16l-41 43l-3 13l2 41l19 57l3 2l73 13l8 0l6 -3l2 -6l5 -30l4 -15l25 -49l2 -9l-2 -25l2 -7l43 -64l12 -13l114 -98l67 -56z","drs":{"year":2024,"session_key":9594,"zones":[[116,230],[901,1000]]}},"catalunya":{"source":{"api":"OpenF1 location + laps","session_key":11303,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":12,"lap_duration":74.679,"sector_times":[21.849,30.115,22.715],"driver":"George RUSSELL"},"lengthM":4610,"direction":"cw","sectors":[346,728],"elevation":{"deltaM":29.9,"profile":[8.4,8.5,8.3,6.6,2.4,0.9,0.3,2.6,7.6,12.0,14.8,16.6,18.6,20.3,21.3,20.8,18.8,16.0,12.7,8.0,3.0,3.7,5.8,10.5,18.3,25.0,24.0,22.6,20.8,19.5,20.7,23.2,27.1,28.9,29.9,28.0,21.1,13.6,11.0,9.3,8.4]},"viewBox":"-168.4 -6.0 840.5 513.6","fit":{"aligned":true,"rotationDeg":-0.5,"shapeError":0.005},"path":"M383 189l-57 92l-65 101l-31 53l-10 14l-9 9l-8 3l-7 0l-16 -6l-9 -3l-4 1l-13 5l-24 16l-15 6l-16 0l-17 -6l-11 -9l-5 -6l-5 -12l-2 -14l0 -11l4 -20l3 -12l7 -15l31 -49l18 -24l8 -6l11 -2l8 2l6 4l7 7l4 9l1 8l0 11l-5 14l-38 56l-4 13l1 6l3 5l10 3l16 -5l57 -29l12 -11l7 -8l18 -27l2 -10l-1 -10l-5 -9l-14 -11l-5 -5l-29 -59l-3 -10l-1 -9l1 -11l3 -10l9 -15l6 -4l73 -34l64 -35l32 -14l8 -6l3 -4l0 -6l-2 -9l-10 -9l-9 -2l-17 2l-12 5l-14 10l-8 3l-8 2l-7 -1l-6 -2l-7 -7l-1 -10l1 -9l8 -13l45 -36l7 -3l11 -1l9 1l17 7l39 25l9 7l6 8l6 14l0 17l-7 16l-53 84z","drs":{"year":2025,"session_key":9967,"zones":[[7,158],[644,723]]}},"hungaroring":{"source":{"api":"OpenF1 location + laps","session_key":11338,"year":2026,"session":"Qualifying","driver_number":1,"lap_number":15,"lap_duration":77.207,"sector_times":[27.364,27.621,22.222],"driver":"Lando NORRIS"},"lengthM":4325,"direction":"cw","sectors":[398,749],"elevation":{"deltaM":34.8,"profile":[34.6,34.6,32.9,28.7,26.8,25.5,22.9,21.4,19.9,16.4,10.9,4.8,0.2,1.1,12.4,13.4,14.1,16.6,21.9,24.2,24.6,25.2,25.6,26.4,27.2,28.8,30.5,32.6,32.9,29.6,27.5,26.1,24.8,25.4,26.7,29.7,33.1,34.3,34.6,34.8,34.6]},"viewBox":"-170.9 -4.3 840.1 513.4","fit":{"aligned":true,"rotationDeg":356.1,"shapeError":0.006},"path":"M219 422l-168 -117l-9 -10l-3 -5l0 -7l4 -5l10 -3l20 0l18 5l15 5l13 8l59 42l7 4l10 1l9 -4l4 -6l1 -11l-3 -10l-16 -27l-2 -10l1 -14l44 -95l26 -44l3 -11l-2 -16l-15 -39l-2 -9l1 -8l3 -6l6 -7l10 -3l15 1l16 9l32 29l16 18l2 7l-4 15l1 11l11 34l5 8l11 8l23 2l7 2l7 4l4 5l4 14l-5 38l2 18l5 15l14 17l8 14l3 11l-1 9l-2 8l-6 10l-49 57l-24 31l-10 7l-5 1l-9 -4l-30 -31l-13 -10l-12 -3l-6 1l-5 4l-3 5l0 5l2 7l2 3l40 28l7 10l2 9l-1 7l-4 8l-6 6l-13 3l-13 -3l-11 -6l-51 -39z","drs":{"year":2025,"session_key":9924,"zones":[[5,121],[165,239]]}},"imola":{"source":{"api":"OpenF1 location + laps","session_key":9983,"year":2025,"session":"Qualifying","driver_number":81,"lap_number":17,"lap_duration":74.67,"sector_times":[23.677,25.747,25.246],"driver":"Oscar PIASTRI"},"lengthM":4881,"direction":"ccw","sectors":[362,689],"elevation":{"deltaM":34.4,"profile":[0.8,1.4,2.2,3.4,4.1,4.1,4.0,4.4,5.0,5.5,5.9,6.8,7.9,11.0,13.2,15.8,19.3,24.4,32.9,33.8,28.2,17.1,11.9,14.6,20.9,25.3,28.8,30.9,31.8,31.1,29.6,27.8,23.5,15.2,4.3,2.2,1.1,0.5,0.0,0.3,0.9]},"viewBox":"-5.4 94.6 509.9 311.6","fit":{"aligned":true,"rotationDeg":0.9,"shapeError":0.014},"path":"M362 155l-55 2l-15 -3l-31 -8l-22 -2l-29 0l-33 4l-14 2l-22 6l-5 4l-3 8l-4 6l-22 13l-4 3l-5 8l-35 89l-1 7l3 22l-2 4l-23 19l-20 19l-4 6l0 6l2 3l3 2l6 1l48 -8l29 -3l20 0l40 5l7 -2l7 -6l3 -7l7 -23l-1 -13l-8 -39l-1 -9l1 -4l3 -7l4 -6l5 -5l5 -1l15 3l28 1l42 -1l34 -2l4 1l6 5l4 1l4 -1l41 -18l9 -6l11 -7l15 -14l33 -34l7 -5l27 -11l6 -4l2 -3l0 -4l-2 -9l-3 -6l-5 -6l-4 -2l-5 -1l-9 1l-34 15l-29 11l-6 2l-13 1l-16 0z","drs":{"year":2025,"session_key":9983,"zones":[[6,164]]}},"interlagos":{"source":{"api":"OpenF1 location + laps","session_key":11408,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":18,"lap_duration":86.745,"sector_times":[22.253,45.447,19.045],"driver":"George RUSSELL"},"lengthM":4231,"direction":"ccw","sectors":[288,736],"elevation":{"deltaM":43.2,"profile":[38.3,42.4,43.0,37.3,30.3,26.9,24.4,22.2,18.6,14.4,10.2,8.3,4.7,0.2,1.0,5.3,14.6,21.1,25.7,25.7,25.0,22.8,17.9,18.6,21.8,26.0,26.6,26.1,22.9,16.4,8.7,9.5,11.2,14.0,18.8,30.4,38.1,40.1,37.7,35.5,38.3]},"viewBox":"-163.6 -3.8 831.1 507.9","fit":{"aligned":false,"rotationDeg":43.8,"shapeError":0.006,"note":"old turn markers did not match the measured track"},"path":"M106 240l-55 101l-8 22l0 15l2 7l6 4l7 3l19 1l10 3l5 5l12 25l8 12l16 13l20 8l21 1l17 -3l12 -4l13 -7l117 -74l102 -61l10 -9l6 -7l3 -8l1 -9l-3 -10l-4 -8l-9 -12l-11 -12l-17 -11l-5 -2l-24 -5l-13 1l-126 25l-20 2l-7 -1l-17 -7l-8 -7l-5 -6l-4 -8l-3 -9l0 -10l4 -19l8 -15l8 -11l11 -12l6 -4l10 -2l6 3l3 4l9 23l8 7l9 3l8 -3l3 -3l6 -8l3 -11l2 -36l5 -22l8 -17l6 -5l6 -3l5 0l4 3l5 10l1 10l-3 31l4 13l12 17l11 8l17 7l20 0l58 -16l11 -5l4 -3l3 -3l3 -8l-1 -11l-10 -22l-12 -16l-13 -11l-23 -15l-20 -9l-21 -5l-14 -2l-20 1l-13 2l-19 6l-28 15l-51 35l-24 22l-26 29l-24 34l-32 56z","drs":{"year":2025,"session_key":9865,"zones":[[190,304],[885,1055]]}},"jeddah":{"source":{"api":"OpenF1 location + laps","session_key":10018,"year":2025,"session":"Qualifying","driver_number":1,"lap_number":18,"lap_duration":87.294,"sector_times":[31.507,27.756,28.031],"driver":"Max VERSTAPPEN"},"lengthM":6117,"direction":"ccw","sectors":[340,673],"elevation":{"deltaM":2.3,"profile":[0.6,0.5,0.4,0.6,0.7,0.4,0.3,0.5,1.9,0.7,1.4,2.0,0.5,0.2,0.0,0.8,1.1,1.2,0.6,0.2,1.1,0.7,0.5,0.9,1.2,1.4,0.2,0.3,0.2,0.1,0.7,0.1,0.3,0.1,0.1,0.2,0.2,0.5,0.8,0.8,0.6]},"viewBox":"17.0 107.6 466.0 284.8","fit":{"aligned":true,"rotationDeg":249.1,"shapeError":0.008},"path":"M370 186l-28 24l-31 24l-3 5l3 6l0 2l-1 2l-6 2l-13 3l-7 2l-40 21l-2 1l-3 13l-4 5l-3 3l-6 3l-4 1l-16 0l-7 3l-8 5l-2 3l-2 8l-5 4l-8 4l-10 2l-6 -2l-10 -7l-4 -1l-30 4l-17 4l-14 5l-29 13l-13 8l-4 4l-1 3l0 4l1 2l3 3l8 1l8 -2l6 -4l11 -13l4 -3l7 -4l10 -4l12 -1l16 0l15 -2l5 2l5 7l6 1l8 -1l15 -6l10 -6l22 -19l8 -5l16 -7l11 -7l5 -5l13 -15l9 -7l15 -8l29 -9l4 -3l4 -12l5 -5l8 -4l9 -2l7 0l24 2l10 -1l6 -1l10 -4l6 -4l21 -14l8 -7l8 -10l5 -10l5 -13l10 -33l-1 -4l-3 -3l-4 0l-3 1l-21 13l-39 26l-24 20z","drs":{"year":2025,"session_key":10018,"zones":[[593,677],[758,880],[947,1061]]}},"losail":{"source":{"api":"OpenF1 location + laps","session_key":9846,"year":2025,"session":"Qualifying","driver_number":81,"lap_number":17,"lap_duration":79.387,"sector_times":[29.209,26.919,23.259],"driver":"Oscar PIASTRI"},"lengthM":5394,"direction":"cw","sectors":[387,681],"elevation":{"deltaM":4.2,"profile":[2.1,1.6,1.2,0.6,0.8,0.8,0.6,0.3,0.8,0.8,0.4,0.0,0.0,0.4,1.3,1.5,1.4,1.9,2.1,2.2,2.0,1.6,1.5,1.3,1.3,1.4,1.9,2.3,2.6,2.3,1.9,3.2,3.7,3.3,2.6,2.4,3.4,3.8,4.2,2.8,2.0]},"viewBox":"-29.8 77.9 562.4 343.7","fit":{"aligned":true,"rotationDeg":298.8,"shapeError":0.008},"path":"M314 404l-86 0l-116 2l-12 0l-15 -3l-6 -2l-9 -15l0 -8l1 -4l5 -6l10 -7l41 -23l5 -5l2 -3l2 -5l0 -6l-3 -9l-6 -5l-40 -22l-9 -8l-5 -7l-9 -22l-27 -79l-1 -7l2 -9l6 -8l8 -6l19 -6l7 0l8 1l9 4l3 4l3 7l9 31l10 27l6 8l2 1l3 1l4 0l5 -5l3 -9l3 -23l4 -54l5 -16l7 -7l4 -2l10 -2l5 2l5 2l4 4l3 7l4 16l7 14l10 14l15 16l5 10l1 9l-1 7l-10 34l-2 9l1 4l4 6l5 4l3 1l8 0l8 -1l16 -6l15 -9l13 -11l6 -6l10 -13l8 -15l28 -67l8 -10l12 -6l11 -3l13 0l15 1l21 10l9 14l13 28l2 11l-4 9l-9 13l-20 22l-20 25l-6 11l-1 6l1 7l7 14l32 45l29 44l4 11l-1 6l-2 6l-4 5l-6 4l-4 1l-9 2l-127 0z","drs":{"year":2025,"session_key":9846,"zones":[[2,116]]}},"madring":{"source":{"api":"OpenF1 location + laps","session_key":11365,"year":2026,"session":"Qualifying","driver_number":1,"lap_number":18,"lap_duration":91.824,"sector_times":[28.226,32.797,30.801],"driver":"Lando NORRIS"},"lengthM":5342,"direction":"cw","sectors":[338,719],"elevation":{"deltaM":24.6,"profile":[1.5,1.5,1.6,1.4,0.5,0.6,2.9,6.5,8.9,12.5,13.5,14.4,14.3,20.5,24.6,22.2,17.3,11.9,10.4,11.5,6.9,14.0,9.1,10.4,8.3,7.7,7.0,6.2,4.0,2.3,1.6,2.2,1.6,1.7,1.6,1.6,1.6,1.6,1.6,1.5,1.5]},"viewBox":"-12.2 89.7 524.5 320.5","fit":{"aligned":true,"rotationDeg":90.4,"shapeError":0.005},"path":"M49 344l-15 -101l-1 -3l-2 -3l-4 -3l-6 -2l-3 -3l-2 -4l-1 -9l2 -10l2 -5l4 -6l9 -8l88 -54l12 -4l17 -6l15 -3l10 -1l15 1l11 2l23 9l3 0l7 -2l6 2l5 0l15 -5l22 -10l22 -5l11 -6l2 1l7 8l5 1l4 0l20 -9l19 -1l14 1l6 1l6 4l10 12l7 4l10 0l28 -10l9 0l8 3l6 5l5 7l1 6l1 7l-2 8l-3 6l-8 9l-7 4l-6 1l-7 0l-7 -1l-14 -5l-14 -10l-32 -27l-12 -6l-5 -2l-6 1l-4 2l-19 25l-8 5l-8 2l-27 1l-9 3l-4 2l-7 6l-5 6l-3 6l-2 9l0 27l5 12l1 5l-1 3l-6 4l-38 23l-4 4l-2 6l0 6l2 14l-1 7l-1 8l-4 6l-6 6l-9 4l-12 2l-43 6l-9 1l-5 2l-2 4l5 9l2 19l-1 6l-3 4l-15 5l-34 6l-15 1l-7 -2l-2 -1l-3 -4l-6 -40z","drs":null},"marina_bay":{"source":{"api":"OpenF1 location + laps","session_key":11384,"year":2026,"session":"Qualifying","driver_number":3,"lap_number":11,"lap_duration":91.373,"sector_times":[27.002,38.531,25.84],"driver":"Max VERSTAPPEN"},"lengthM":4856,"direction":"ccw","sectors":[332,700],"elevation":{"deltaM":5.3,"profile":[1.2,1.2,1.1,1.1,0.6,0.8,0.3,1.3,1.1,1.2,1.2,1.5,1.5,1.7,1.9,1.9,2.1,2.7,2.6,2.8,2.7,2.5,2.0,3.2,3.5,5.2,5.3,5.2,2.3,1.9,1.6,1.4,2.2,1.6,1.4,1.4,1.1,0.9,1.2,1.3,1.2]},"viewBox":"-29.4 80.0 558.8 341.5","fit":{"aligned":true,"rotationDeg":0,"shapeError":0.004},"path":"M480 249l-8 -51l-7 -55l-3 -13l-3 -5l-4 -2l-17 -5l-12 -10l-6 -2l-5 2l-3 4l-3 9l0 10l1 11l2 6l14 35l4 17l1 13l-1 8l-3 5l-5 4l-12 3l-15 1l-100 -8l-17 -3l-18 -7l-38 -22l-27 -19l-10 -4l-6 -1l-6 0l-2 1l-7 7l-9 14l-11 23l-4 5l-4 2l-4 -1l-3 -3l-18 -21l-6 -6l-7 -4l-9 -2l-3 1l-7 4l-8 11l-18 35l-34 57l-3 6l0 5l2 8l4 7l9 6l13 5l4 9l3 15l2 4l26 24l10 14l6 3l4 -2l3 -9l4 -31l15 -75l14 -39l3 -5l3 -2l5 0l7 3l39 34l16 9l7 2l14 2l128 8l4 1l3 2l5 14l6 8l7 3l13 2l55 2l9 0l9 -4l4 -4l6 -7l3 -8l3 -11l0 -15l-4 -26z","drs":{"year":2025,"session_key":9892,"zones":[[1,67],[221,339],[637,708],[754,854]]}},"miami":{"source":{"api":"OpenF1 location + laps","session_key":11276,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":14,"lap_duration":87.798,"sector_times":[29.743,33.431,24.624],"driver":"Kimi ANTONELLI"},"lengthM":5345,"direction":"ccw","sectors":[335,682],"elevation":{"deltaM":3.7,"profile":[1.3,1.2,0.9,0.6,0.7,0.8,2.0,1.4,0.7,1.7,1.1,0.6,0.5,0.8,0.8,1.2,1.0,0.8,1.5,0.4,0.5,0.8,0.8,0.7,0.5,3.5,2.4,2.1,0.1,0.6,0.7,0.8,0.8,0.9,1.0,0.8,0.8,1.2,1.5,0.7,1.3]},"viewBox":"17.0 107.3 466.6 285.2","fit":{"aligned":true,"rotationDeg":0.7,"shapeError":0.005},"path":"M219 195l44 28l31 18l6 4l4 5l-1 6l-11 13l-4 6l-2 18l-4 9l-5 5l-7 5l-9 4l-11 2l-9 0l-11 -2l-16 -7l-39 -26l-20 -10l-6 -1l-12 0l-20 10l-10 1l-8 -3l-17 -13l-11 -3l-8 0l-9 4l-6 3l-6 7l-3 8l-1 6l1 4l2 3l3 3l5 2l23 2l31 5l8 1l66 0l13 1l10 2l32 11l13 4l18 2l13 1l18 -2l15 -3l49 -15l33 -14l32 -16l9 -6l2 -3l2 -4l-1 -3l-2 -3l-8 -7l-4 -5l-1 -6l2 -5l3 -5l4 -1l5 -1l10 -1l7 -2l6 -5l4 -8l0 -5l-4 -3l-1 -2l5 -20l-1 -3l-5 -2l-10 -2l-227 -10l-75 -2l-36 -4l-8 0l-4 1l-4 2l-1 4l1 3l6 6l15 9l5 3l6 0l5 -1l30 -12l7 -1l10 0l9 0l14 5l6 2l14 9z","drs":{"year":2025,"session_key":10029,"zones":[[0,54],[420,561],[764,885]]}},"monaco":{"source":{"api":"OpenF1 location + laps","session_key":11295,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":27,"lap_duration":72.051,"sector_times":[18.934,33.989,19.128],"driver":"Kimi ANTONELLI"},"lengthM":3273,"direction":"cw","sectors":[318,740],"elevation":{"deltaM":42.0,"profile":[2.6,4.4,6.5,10.8,20.4,30.6,38.6,39.3,41.0,41.9,33.6,28.6,24.6,20.0,18.4,16.8,14.2,10.9,7.3,6.9,6.7,6.5,6.6,6.6,3.9,1.5,1.4,1.4,1.4,0.7,0.6,0.3,0.2,0.2,0.8,1.4,3.8,3.4,2.7,2.6,2.6]},"viewBox":"-166.6 -3.9 832.7 508.9","fit":{"aligned":true,"rotationDeg":1.7,"shapeError":0.005},"path":"M68 317l1 -32l5 -26l8 -26l6 -7l13 -3l34 -3l59 -13l23 -1l13 -4l30 -13l43 -6l15 -4l8 -7l7 -7l3 -7l1 -9l-1 -8l-4 -13l-17 -25l0 -4l1 -8l9 -14l19 -21l17 -23l14 -15l4 -2l8 3l3 3l6 23l5 9l5 7l5 2l3 -3l0 -5l-12 -15l-1 -5l1 -6l2 -3l14 -7l15 -2l8 8l1 8l-6 49l-7 26l-17 39l-14 17l-7 6l-54 26l-26 10l-30 7l-35 4l-4 3l-5 7l-3 2l-6 0l-13 -3l-91 7l-6 2l-7 4l-10 12l-5 11l-3 11l-2 21l0 6l3 10l5 5l4 10l6 21l2 33l-1 7l-6 6l0 14l6 17l11 18l26 19l1 7l-3 6l-7 3l-17 0l-10 -2l-3 -5l-4 -15l-13 -24l-11 -31l-9 -39l-3 -44z","drs":{"year":2025,"session_key":9975,"zones":[[911,1000]]}},"monza":{"source":{"api":"OpenF1 location + laps","session_key":11357,"year":2026,"session":"Qualifying","driver_number":10,"lap_number":17,"lap_duration":81.786,"sector_times":[26.817,27.706,27.263],"driver":"Pierre GASLY"},"lengthM":5759,"direction":"cw","sectors":[329,644],"elevation":{"deltaM":12.4,"profile":[2.8,3.8,4.7,5.8,6.6,7.3,7.7,8.0,8.4,9.2,9.3,9.7,10.9,12.2,12.3,12.0,11.8,11.2,10.7,9.5,9.0,8.9,8.6,8.2,8.2,8.3,4.1,5.5,6.4,5.8,5.2,4.5,3.4,2.5,1.0,0.3,0.0,0.3,1.2,2.0,2.8]},"viewBox":"-166.9 -5.1 833.4 509.3","fit":{"aligned":true,"rotationDeg":358.1,"shapeError":0.002},"path":"M125 379l10 -184l2 -7l7 -3l1 -3l-7 -29l0 -31l5 -22l6 -11l6 -8l14 -12l18 -9l24 -5l76 -8l4 -3l3 -5l5 -3l16 -5l38 -14l7 -1l7 2l4 3l6 10l5 48l-1 6l-5 5l-69 43l-91 83l-10 11l-3 23l-12 20l-2 7l-11 183l-3 15l-4 8l-8 5l-8 1l-6 -2l-10 -7l-9 -14l-4 -13l-2 -16l1 -58z","drs":{"year":2025,"session_key":9908,"zones":[[3,133],[528,659]]}},"red_bull_ring":{"source":{"api":"OpenF1 location + laps","session_key":11311,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":19,"lap_duration":66.113,"sector_times":[16.424,29.62,20.069],"driver":"George RUSSELL"},"lengthM":4291,"direction":"cw","sectors":[282,675],"elevation":{"deltaM":63.4,"profile":[0.1,0.3,5.8,14.1,17.6,18.9,18.2,20.3,23.2,30.3,52.1,59.2,62.7,63.4,61.8,58.1,53.2,48.6,41.3,36.8,33.1,30.1,28.5,29.9,31.9,31.0,25.7,18.6,13.6,12.4,13.8,15.4,20.4,23.3,22.0,17.4,12.1,5.0,2.8,1.2,0.1]},"viewBox":"-5.8 94.4 509.7 311.5","fit":{"aligned":false,"rotationDeg":21.0,"shapeError":0.003,"note":"old turn markers did not match the measured track"},"path":"M312 448l-165 -17l-12 -3l-7 -5l-4 -7l-1 -3l-3 -19l-22 -103l-4 -31l-8 -85l-5 -25l-2 -7l-15 -37l-21 -45l-3 -8l0 -4l3 -4l4 -3l4 0l19 4l20 6l30 13l36 20l59 37l34 19l28 14l55 23l4 3l5 4l3 5l1 5l-2 5l-4 7l-6 6l-13 7l-10 3l-8 2l-18 1l-15 -3l-7 -1l-22 -11l-47 -27l-12 -4l-10 -2l-9 0l-5 2l-6 3l-5 4l-7 11l-2 5l-2 12l-1 10l2 10l8 39l6 13l7 8l5 3l6 3l11 1l6 -1l7 -2l34 -13l17 -4l13 1l10 2l155 56l16 8l6 3l9 9l5 8l3 8l0 9l-3 39l-1 10l-3 9l-4 4l-5 5l-8 3l-7 1l-21 1l-96 -10z","drs":{"year":2025,"session_key":9951,"zones":[[126,298],[345,484],[946,1082]]}},"rodriguez":{"source":{"api":"OpenF1 location + laps","session_key":11400,"year":2026,"session":"Qualifying","driver_number":44,"lap_number":19,"lap_duration":76.514,"sector_times":[26.852,30.03,19.632],"driver":"Lewis HAMILTON"},"lengthM":4247,"direction":"cw","sectors":[449,794],"elevation":{"deltaM":2.8,"profile":[0.7,0.8,0.8,0.8,0.6,0.5,0.3,0.3,0.5,0.3,0.5,0.5,0.8,0.8,1.3,1.8,2.1,2.3,2.8,2.6,2.5,2.0,1.1,1.1,0.8,0.8,0.8,0.7,0.8,0.8,0.7,0.8,0.3,0.8,0.7,0.8,0.5,0.3,0.5,0.2,0.7]},"viewBox":"-94.8 39.2 688.8 420.9","fit":{"aligned":false,"rotationDeg":19.0,"shapeError":0.003,"note":"old turn markers did not match the measured track"},"path":"M121 56l113 60l207 101l13 9l4 7l1 9l-6 12l-1 5l1 3l5 8l2 6l-3 9l-10 14l-20 20l-81 67l-42 32l-3 4l-2 6l2 4l6 9l1 5l-3 4l-27 9l-4 0l-5 -1l-4 -5l-1 -6l2 -4l36 -66l4 -12l0 -9l-2 -5l-13 -19l-6 -22l-4 -7l-3 -5l-10 -7l-23 -10l-9 -7l-5 -12l-3 -20l-2 -6l-12 -16l-18 -16l-14 -11l-19 -11l-68 -33l-9 -5l-5 -8l-1 -8l2 -9l9 -23l1 -8l-3 -4l-4 -1l-10 3l-8 -1l-21 -11l-5 -6l0 -7l6 -10l8 -6l11 -4l8 0l15 2l12 4l20 10z","drs":{"year":2025,"session_key":9873,"zones":[[35,252],[342,452],[737,829]]}},"sepang":{"source":{"api":"OpenF1 location + laps","session_key":11730,"year":2026,"session":"Qualifying","driver_number":3,"lap_number":11,"lap_duration":95.13,"sector_times":[24.609,31.505,39.016],"driver":"Max VERSTAPPEN"},"lengthM":5501,"direction":"cw","sectors":[259,588],"elevation":{"deltaM":21.7,"profile":[13.3,13.3,15.2,15.1,14.8,13.4,11.4,5.5,0.8,1.7,8.5,13.7,17.0,18.1,14.0,15.5,16.4,17.0,16.5,15.6,14.5,12.3,11.5,15.3,19.7,21.7,20.0,16.7,10.8,11.6,13.3,14.4,13.5,13.4,13.4,13.5,15.3,15.1,13.8,13.4,13.3]},"viewBox":"-96.3 39.0 688.1 420.5","fit":{"aligned":true,"rotationDeg":321.1,"shapeError":0.007},"path":"M274 228l-166 159l-7 5l-7 2l-6 0l-6 -3l-4 -8l0 -8l7 -6l10 -4l7 -4l2 -4l0 -3l-3 -6l-7 -5l-16 -4l-10 -6l-10 -9l-8 -11l-12 -18l-8 -15l-2 -14l1 -13l3 -11l7 -15l37 -57l16 -29l22 -42l7 -9l3 -3l6 -1l9 2l11 8l24 24l24 20l20 11l18 3l9 -1l11 -3l10 -5l6 -6l8 -11l5 -13l1 -15l3 -9l4 -9l5 -5l9 -7l12 -6l17 -2l16 2l92 17l8 4l6 5l7 10l3 14l-1 10l-6 12l-17 19l-54 49l-32 31l-22 23l-7 11l0 7l5 3l9 1l25 -3l11 1l10 4l11 10l10 16l5 16l2 11l0 13l-2 5l-2 4l-7 5l-4 2l-10 2l-74 -4l-22 0l-9 2l-7 4l-9 7l-6 7l-14 30l-5 7l-7 8l-9 6l-19 9l-11 2l-14 -2l-9 -6l-5 -8l-1 -8l3 -8l6 -9l97 -110l66 -77l52 -56l9 -13l2 -6l0 -5l-5 -9l-8 -5l-7 1l-4 1l-12 11l-98 95z","drs":null},"shanghai":{"source":{"api":"OpenF1 location + laps","session_key":11241,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":14,"lap_duration":92.064,"sector_times":[24.013,27.664,40.387],"driver":"Kimi ANTONELLI"},"lengthM":5463,"direction":"cw","sectors":[262,549],"elevation":{"deltaM":7.1,"profile":[1.6,0.1,0.1,0.1,3.8,6.1,6.6,2.4,0.3,0.1,1.7,1.6,0.6,0.3,1.5,0.4,0.2,2.4,2.6,0.7,0.3,0.3,0.3,0.3,2.1,3.5,3.1,2.1,1.0,0.4,0.2,0.3,0.3,0.4,0.4,0.4,0.3,0.4,2.0,1.7,0.1]},"viewBox":"-106.6 31.5 714.6 436.7","fit":{"aligned":true,"rotationDeg":99.5,"shapeError":0.023},"path":"M139 278l-9 -191l4 -13l6 -8l12 -8l9 -2l9 1l10 4l7 6l2 7l0 11l-5 8l-3 1l-7 0l-14 -7l-7 1l-5 5l-1 5l3 8l8 7l7 4l10 2l9 -2l8 -4l85 -51l83 -13l4 1l3 3l0 4l-3 5l-11 10l-9 7l-15 8l-60 21l-10 5l-8 6l-10 15l-3 16l1 12l4 11l5 8l6 6l29 21l6 8l4 11l-1 10l-2 6l-7 10l-10 6l-31 10l-3 4l0 9l20 23l2 0l11 -2l150 -57l1 -1l2 -5l-12 -19l2 -8l6 -5l6 -4l6 -1l10 0l8 2l6 4l5 5l5 9l1 13l-2 13l-6 10l-10 11l-6 3l-410 175l-3 -2l0 -4l7 -10l10 -10l95 -47l1 -4l-6 -101z","drs":{"year":2025,"session_key":9994,"zones":[[720,853],[966,1086]]}},"silverstone":{"source":{"api":"OpenF1 location + laps","session_key":11322,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":18,"lap_duration":88.111,"sector_times":[28.348,35.521,24.242],"driver":"Kimi ANTONELLI"},"lengthM":5825,"direction":"cw","sectors":[311,729],"elevation":{"deltaM":11.3,"profile":[0.2,1.1,3.8,6.2,7.7,9.0,9.2,10.2,10.2,10.3,10.0,10.2,10.1,9.7,7.4,7.1,7.8,7.3,6.4,6.0,6.3,7.6,8.7,10.4,11.3,10.4,9.8,9.2,7.5,6.6,6.0,4.7,3.2,5.2,7.0,2.7,1.6,1.7,1.4,0.4,0.1]},"viewBox":"-170.0 -3.9 840.3 513.5","fit":{"aligned":false,"rotationDeg":35.1,"shapeError":0.003,"note":"old turn markers did not match the measured track"},"path":"M82 262l84 -29l12 -3l11 -1l18 6l29 23l14 6l15 1l34 -5l9 0l6 1l5 4l2 7l-8 22l1 6l3 5l6 0l7 -2l8 -6l9 -8l6 -10l4 -9l0 -18l-42 -163l-8 -11l-8 -5l-7 -1l-10 4l-13 14l-7 3l-8 0l-4 -2l-3 -5l0 -10l8 -11l12 -9l18 -9l17 -5l20 -1l15 2l14 4l90 48l7 6l11 21l1 12l-2 9l-10 27l-11 22l-26 42l-16 47l-23 22l-7 11l-5 28l-5 9l-8 5l-8 3l-27 0l-24 7l-124 69l-32 16l-16 6l-7 2l-13 0l-8 -4l-9 -9l-3 -6l-2 -12l2 -25l0 -21l-1 -23l-4 -25l-3 -6l-5 -3l-13 -1l-3 -1l-4 -5l-3 -6l0 -10l1 -8l8 -15l10 -8l23 -9z","drs":{"year":2025,"session_key":9943,"zones":[[222,318],[713,842]]}},"spa":{"source":{"api":"OpenF1 location + laps","session_key":11330,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":14,"lap_duration":104.361,"sector_times":[30.16,46.059,28.142],"driver":"Kimi ANTONELLI"},"lengthM":6952,"direction":"cw","sectors":[323,725],"elevation":{"deltaM":102.4,"profile":[48.3,52.1,56.8,54.9,47.0,34.9,24.2,38.6,54.3,67.6,77.3,88.5,97.4,101.5,101.9,96.8,87.7,80.6,72.1,61.0,49.0,32.7,19.1,10.0,9.1,10.6,10.9,8.8,4.4,0.6,3.5,11.6,16.1,23.5,28.2,30.6,38.0,41.6,43.2,45.5,48.4]},"viewBox":"-165.4 -3.5 830.7 507.6","fit":{"aligned":false,"rotationDeg":62,"shapeError":0.005,"note":"old turn markers did not match the measured track"},"path":"M409 113l38 -68l5 -4l3 0l2 2l2 4l1 40l-4 25l-25 74l-1 20l-2 8l-4 5l-21 21l-28 55l-10 14l-115 122l-9 8l-5 2l-17 -3l-5 1l-6 4l-12 12l-8 4l-8 0l-5 -2l-53 -26l-9 -7l-2 -6l1 -4l5 -6l7 -1l7 2l22 12l8 1l7 -3l28 -31l51 -46l4 -7l1 -8l-1 -8l-5 -11l-9 -12l-10 -5l-11 -3l-15 0l-61 11l-9 0l-6 -2l-8 -8l-2 -4l-1 -16l-4 -6l-4 -4l-13 -4l-39 0l-5 -2l-5 -4l-3 -9l0 -11l2 -15l4 -8l9 -9l9 -4l19 -4l17 2l22 5l20 7l45 27l17 7l26 3l34 -4l8 -2l11 -7l42 -48l35 -28l12 -5l8 8l5 -2l4 -5l19 -35z","drs":{"year":2025,"session_key":9935,"zones":[[1,42],[231,333]]}},"suzuka":{"source":{"api":"OpenF1 location + laps","session_key":11249,"year":2026,"session":"Qualifying","driver_number":12,"lap_number":11,"lap_duration":88.778,"sector_times":[31.855,39.439,17.484],"driver":"Kimi ANTONELLI"},"lengthM":5770,"direction":"cw","sectors":[377,813],"elevation":{"deltaM":40.2,"profile":[19.8,14.8,9.6,4.4,0.0,2.4,4.5,8.8,15.2,20.7,21.1,19.9,30.2,33.4,30.8,27.6,25.9,26.0,34.2,37.5,38.3,38.5,39.8,34.7,37.4,39.8,40.1,40.0,37.7,28.2,27.9,31.9,32.1,32.1,34.4,37.0,36.7,35.5,31.1,23.9,19.8]},"viewBox":"-5.3 94.7 508.9 311.0","fit":{"aligned":true,"rotationDeg":1.3,"shapeError":0.007},"path":"M386 221l96 119l3 6l1 5l0 4l-3 12l-3 4l-4 4l-4 1l-7 0l-7 -4l-3 -3l-13 -23l-9 -10l-6 -4l-15 -3l-4 -1l-5 -3l-4 -6l-6 -19l-4 -7l-4 -3l-6 -2l-14 -1l-6 -2l-6 -4l-4 -4l-3 -6l-1 -6l9 -23l0 -6l-2 -4l-4 -6l-7 -5l-14 -5l-12 -2l-13 0l-6 2l-8 3l-12 8l-16 21l-12 12l-4 1l-18 3l-11 -1l-5 -2l-3 -5l-11 -64l0 -6l3 -9l7 -14l0 -4l-3 -3l-3 -1l-4 2l-18 27l-5 7l-5 4l-5 3l-7 3l-15 2l-10 0l-19 -5l-15 -6l-13 -10l-6 -7l-5 -7l-11 -26l-7 -12l-4 -5l-3 -1l-6 -2l-11 1l-9 3l-4 4l-2 5l0 6l2 7l4 6l8 8l20 14l22 14l16 8l24 9l102 37l8 0l9 -3l17 -9l8 -6l31 -29l7 -5l7 -1l8 5l5 0l11 -8l7 -2l9 0l5 1l9 3l6 4l11 10l13 16z","drs":{"year":2025,"session_key":10002,"zones":[[9,106]]}},"vegas":{"source":{"api":"OpenF1 location + laps","session_key":9854,"year":2025,"session":"Qualifying","driver_number":4,"lap_number":24,"lap_duration":107.934,"sector_times":[30.43,36.842,40.662],"driver":"Lando NORRIS"},"lengthM":6144,"direction":"ccw","sectors":[270,545],"elevation":{"deltaM":16.2,"profile":[6.4,6.4,6.2,6.1,6.6,5.3,4.3,4.7,4.5,4.6,4.5,3.2,2.0,1.6,0.9,1.0,0.4,0.0,0.6,1.7,3.3,4.7,4.4,5.3,5.5,6.3,8.0,10.1,12.5,13.7,14.2,14.2,15.6,16.0,16.2,16.2,15.8,14.6,13.0,10.5,6.5]},"viewBox":"1.7 98.1 495.4 302.7","fit":{"aligned":true,"rotationDeg":270.9,"shapeError":0.004},"path":"M444 161l-38 -35l-3 -2l-6 0l-4 2l-3 3l-2 5l0 6l2 5l3 5l11 12l2 5l0 4l-1 6l-5 9l-6 5l-5 2l-8 2l-27 1l-149 3l-8 -2l-3 -4l0 -4l0 -33l-1 -8l-3 -6l-4 -8l-8 -8l-7 -5l-11 -3l-4 0l-5 2l-5 8l-3 2l-6 -1l-12 -6l-6 1l-3 1l-1 4l-1 66l-1 13l-3 9l-6 12l-9 8l-8 5l-27 12l-8 6l-5 7l-7 12l-4 13l-1 11l2 5l10 3l18 9l43 24l23 11l35 11l29 6l20 3l21 1l63 1l142 3l8 -1l4 -2l3 -2l2 -8l7 -9l2 -8l1 -136l-2 -20l-3 -11l-8 -12l-10 -9z","drs":{"year":2024,"session_key":9640,"zones":[[118,230],[694,816]]}},"villeneuve":{"source":{"api":"OpenF1 location + laps","session_key":11287,"year":2026,"session":"Qualifying","driver_number":63,"lap_number":23,"lap_duration":72.578,"sector_times":[20.6,22.902,29.076],"driver":"George RUSSELL"},"lengthM":4306,"direction":"cw","sectors":[247,569],"elevation":{"deltaM":5.2,"profile":[0.2,0.6,0.8,0.9,1.6,4.0,5.2,4.9,3.5,0.8,0.5,0.4,1.3,2.3,3.0,3.9,4.0,3.9,3.7,3.8,3.9,3.3,3.3,3.3,3.3,3.1,3.0,2.9,2.9,2.4,2.0,0.4,0.3,0.0,0.2,0.6,0.3,0.0,0.2,0.2,0.2]},"viewBox":"-163.4 -3.6 832.3 508.6","fit":{"aligned":true,"rotationDeg":1.3,"shapeError":0.008},"path":"M313 412l0 16l-3 32l3 7l11 9l0 5l-3 3l-3 1l-8 0l-19 -5l-16 -10l-19 -16l-8 -11l1 -11l-3 -8l-13 -17l-15 -13l-6 -8l-3 -13l1 -29l-2 -9l-4 -5l-14 -1l-7 -5l-5 -11l-3 -24l-1 -32l1 -25l4 -24l7 -28l4 -10l11 -5l8 -8l11 -41l3 -21l2 -28l-7 -46l2 -4l3 0l3 1l2 7l3 21l27 69l11 39l28 134l0 7l-5 11l0 9l21 95z","drs":{"year":2025,"session_key":9959,"zones":[[337,435],[691,873],[921,1000]]}},"yas_marina":{"source":{"api":"OpenF1 location + laps","session_key":9835,"year":2025,"session":"Qualifying","driver_number":1,"lap_number":17,"lap_duration":82.207,"sector_times":[16.858,35.71,29.639],"driver":"Max VERSTAPPEN"},"lengthM":5229,"direction":"ccw","sectors":[229,674],"elevation":{"deltaM":11.1,"profile":[0.1,0.2,0.2,1.1,1.3,5.7,10.6,10.6,5.2,2.9,3.8,3.4,1.4,2.6,2.8,2.8,2.5,0.6,0.7,1.2,2.6,3.3,2.1,1.3,1.3,1.1,1.2,0.7,1.8,1.2,0.8,0.8,0.7,1.1,0.9,0.9,1.2,2.1,1.9,1.8,0.2]},"viewBox":"-169.4 -9.3 838.9 512.6","fit":{"aligned":true,"rotationDeg":358.6,"shapeError":0.005},"path":"M218 283l92 -13l6 -3l3 -8l0 -10l-3 -19l-6 -20l-5 -8l-10 -8l-25 -8l-10 -11l-3 -8l-1 -11l6 -46l-2 -39l-6 -43l-5 -9l-7 -2l-7 5l-4 8l-15 49l-73 225l-2 10l0 8l3 4l11 -1l5 3l7 25l6 12l9 14l9 10l59 48l24 17l23 12l46 17l5 0l9 -3l4 -5l2 -9l-2 -9l-3 -6l-10 -8l-65 -7l-19 -10l-12 -12l-6 -17l0 -10l2 -7l4 -2l18 -3l4 -3l3 -5l0 -16l-4 -6l-4 -4l-7 -2l-6 1l-50 7l-13 -4l-5 -4l-15 -26l-3 -9l1 -12l1 -3l5 -2l41 -4z","drs":{"year":2025,"session_key":9835,"zones":[[331,480],[549,678]]}},"zandvoort":{"source":{"api":"OpenF1 location + laps","session_key":11349,"year":2026,"session":"Qualifying","driver_number":1,"lap_number":20,"lap_duration":71.163,"sector_times":[24.456,24.898,21.809],"driver":"Lando NORRIS"},"lengthM":4208,"direction":"cw","sectors":[348,690],"elevation":{"deltaM":9.0,"profile":[2.8,2.8,3.9,3.8,3.4,2.2,2.1,3.9,2.5,2.3,8.6,4.0,1.7,7.7,8.9,2.3,4.4,2.6,1.4,1.5,1.3,1.4,1.4,1.9,2.0,2.3,2.7,3.7,2.4,1.2,0.0,0.3,0.4,0.3,0.4,1.9,5.3,5.0,3.1,2.8,2.8]},"viewBox":"-166.5 -5.3 832.5 508.7","fit":{"aligned":false,"rotationDeg":64.2,"shapeError":0.009,"note":"old turn markers did not match the measured track"},"path":"M303 53l74 -4l59 -8l7 0l8 3l5 5l4 6l1 10l-4 7l-5 6l-6 3l-21 5l-42 2l-15 3l-14 5l-19 11l-10 3l-11 -1l-6 -4l-26 -22l-11 -6l-6 0l-10 4l-4 5l-2 6l1 9l7 11l36 37l15 21l10 21l12 40l11 27l10 13l9 8l35 24l16 16l17 29l16 36l5 14l1 13l-3 15l-4 10l-10 11l-11 8l-16 5l-15 0l-43 -5l-47 0l-12 -1l-12 -8l-9 -13l-10 -26l-2 -25l0 -9l5 -15l5 -7l6 -4l13 2l17 9l9 9l25 34l13 10l7 2l6 0l9 -5l4 -4l5 -8l1 -5l0 -12l-16 -47l-12 -22l-16 -24l-20 -24l-28 -29l-30 -29l-31 -27l-2 -7l3 -10l1 -8l-3 -8l-5 -5l-7 -4l-10 2l-16 9l-81 60l-13 6l-8 1l-12 -2l-11 -8l-11 -20l-10 -29l-2 -23l3 -22l6 -12l6 -8l12 -11l12 -6l11 -2l210 -16z","drs":{"year":2025,"session_key":9916,"zones":[[612,706],[842,1053]]}}};
/* TRACK_OUTLINES:END */
// Circuit geometry measured from OpenF1 telemetry (scripts/build_track_outlines.py): the fastest clean qualifying lap
// gives the outline, the direction, where sectors 1 and 2 end, the height difference and (2025 or earlier, the last
// seasons with DRS) where DRS was open. It replaces the hand-drawn maps and the typed-in sector and DRS numbers.
// Sector labels show the measured sector length; hand-placed turn markers are not drawn on measured maps.
function applyTrackOutlines() {
  for (const [id, o] of Object.entries(TRACK_OUTLINES)) {
    try {
      CIRCUIT_PATHS[id] = o.path;
      if (o.viewBox) CIRCUIT_VIEWBOXES[id] = o.viewBox;
      if (o.direction === 'ccw') CCW_CIRCUITS.add(id); else CCW_CIRCUITS.delete(id);
      const [s1, s2] = o.sectors;
      const reg = TRACK_REGISTRY[id] || null;
      const km = (reg && reg.lengthKm) || o.lengthM / 1000;
      const zones = ((o.drs && o.drs.zones) || []).map((z, k) => ({ id: k + 1, start: z[0], end: z[1], label: `DRS ${k + 1}`, det: '' }));
      // the old turn markers were placed by hand and do not sit on the measured line (at Monza T10 and T11 were swapped
      // around the lap): they are not shown on measured maps rather than pointing at the wrong place
      CIRCUIT_TURNS[id] = [];
      const km1 = v => `${(km * v / 1000).toLocaleString('ru-RU', { maximumFractionDigits: 1 })} км`;
      _RAW_CIRCUIT_SECTORS[id] = {
        lengthKm: km,
        s1: { start: 0, end: s1, turns: km1(s1), lengthM: Math.round(km * s1) },
        s2: { start: s1, end: s2, turns: km1(s2 - s1), lengthM: Math.round(km * (s2 - s1)) },
        s3: { start: s2, end: 1000, turns: km1(1000 - s2), lengthM: Math.round(km * (1000 - s2)) },
        drs: zones,
        drsYear: (o.drs && o.drs.year) || null,
        source: o.source,
        turnsShown: false
      };
      if (reg) {
        reg.sectorSplits = [s1 / 1000, s2 / 1000];
        reg.drsZones = zones.length;
        reg.elevation = {
          deltaMeters: o.elevation.deltaM,
          profile: o.elevation.profile.map((alt, k, arr) => ({ s: +(k / (arr.length - 1)).toFixed(3), alt })),
          relative: true,
          source: 'OpenF1'
        };
      }
    } catch (e) { console.warn('track outline', id, e); }
  }
}
applyTrackOutlines();

function generateCircuitThumbnail(circuitId) {
  const canon = TRACK_ALIASES[circuitId] || circuitId;
  const path = CIRCUIT_PATHS[canon];
  if (!path) {
    return generateTrackSchemaUnavailableSvg(canon);
  }
  const vb = CIRCUIT_VIEWBOXES[canon] || "0 0 500 500";
  const [vx, vy, vw, vh] = vb.split(" ").map(Number);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" width="100%" height="100%">
    <rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="#0c0e12" rx="16"/>
    <defs>
      <pattern id="grid_${canon}" width="25" height="25" patternUnits="userSpaceOnUse">
        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      </pattern>
      <filter id="glow_${canon}" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3.5" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="url(#grid_${canon})"/>
    <path d="${path}" fill="none" stroke="rgba(225,6,0,0.18)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="${path}" fill="none" stroke="#e10600" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow_${canon})"/>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function generateTrackVectorFallback(circuitId) {
  return generateCircuitThumbnail(circuitId);
}

function generateTrackSchemaUnavailableSvg(circuitId) {
  const code = String(circuitId || 'F1').slice(0, 4).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-160 0 820 500" width="100%" height="100%">
    <rect x="-160" y="0" width="820" height="500" fill="#0f1117" rx="16"/>
    <circle cx="250" cy="230" r="70" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" stroke-dasharray="6 6"/>
    <line x1="250" y1="140" x2="250" y2="320" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    <line x1="160" y1="230" x2="340" y2="230" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
    <circle cx="250" cy="230" r="8" fill="none" stroke="#8e8e93" stroke-width="2"/>
    <text x="250" y="360" fill="#f2f2f7" font-family="'Oxanium', sans-serif" font-size="20" font-weight="700" text-anchor="middle" letter-spacing="2">СХЕМА НЕДОСТУПНА</text>
    <text x="250" y="390" fill="#8e8e93" font-family="'Rajdhani', sans-serif" font-size="13" font-weight="600" text-anchor="middle" letter-spacing="1">${code}</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function renderTrackSchemaUnavailable(circuitId) {
  const code = String(circuitId || 'F1').slice(0, 4).toUpperCase();
  return `<div class="track-schema-unavailable" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;min-height:220px;background:#0f1117;border-radius:12px;color:#8e8e93;padding:20px;text-align:center;">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.6;margin-bottom:12px;">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
    <span style="font-family:'Oxanium',sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;color:#f2f2f7;">СХЕМА НЕДОСТУПНА</span>
    <span style="font-size:12px;color:#8e8e93;margin-top:4px;">Трек-вектор отсутствует в базе данных (${esc(code)})</span>
  </div>`;
}

function validateCircuitGeometry(canonId) {
  const path = CIRCUIT_PATHS[canonId];
  if (!path || typeof path !== 'string' || path.length < 30) return false;
  if (!/^[Mm]/.test(path.trim()) || !/[Zz]$/.test(path.trim())) return false;
  if (/120\s+180\s+C\s+120\s+120/i.test(path)) return false;
  return true;
}

function getCircuitAssetStatus(circuitId) {
  const canon = TRACK_ALIASES[circuitId] || circuitId;
  if (canon && validateCircuitGeometry(canon)) {
    return { status: 'AVAILABLE', label: 'СХЕМА ЕСТЬ', badgeClass: 'badge-available', color: '#30d158', verified: true };
  }
  if (canon && TRACK_REGISTRY[canon]) {
    return { status: 'UNAVAILABLE', label: 'СХЕМА НЕДОСТУПНА', badgeClass: 'badge-unavailable', color: '#8e8e93', verified: false };
  }
  return { status: 'UNAVAILABLE', label: 'СХЕМА НЕДОСТУПНА', badgeClass: 'badge-unavailable', color: '#8e8e93', verified: false };
}

function resolveTrackImage(circuitId) {
  const canon = TRACK_ALIASES[circuitId] || circuitId;
  if (canon && CIRCUIT_PATHS[canon]) {
    return generateCircuitThumbnail(canon);
  }
  return generateTrackSchemaUnavailableSvg(canon);
}

function trackImg(c, className) {
  const cid = String(c?.circuitId || c?.id || '').replace(/[^a-zA-Z0-9_-]/g, '');
  const cname = String(c?.circuitName || c?.name || cid).replace(/[&<>"']/g, '');
  const src = resolveTrackImage(cid);
  const cls = className ? ` ${String(className).replace(/[^a-zA-Z0-9_\-\s]/g, '')}` : '';
  return `<img src="${src}" alt="Схема трассы ${cname}" class="track-thumb track-img${cls}" width="180" height="110" loading="lazy" onerror="handleTrackImgError(this, '${cid}')" />`;
}

function handleTrackImgError(img, circuitId) {
  if (!img) return;
  img.onerror = null;
  img.src = generateTrackSchemaUnavailableSvg(circuitId);
}

function validateCircuitSystem(logToConsole = false) {
  const keys = Object.keys(TRACK_REGISTRY);
  const results = {
    total: keys.length,
    passed: 0,
    warned: 0,
    failed: 0,
    details: []
  };

  keys.forEach(id => {
    const entry = TRACK_REGISTRY[id];
    const issues = [];
    const warnings = [];

    if (!entry.name) issues.push('Missing circuit name');
    if (!entry.country) issues.push('Missing country');
    if (typeof entry.lat !== 'number' || entry.lat < -90 || entry.lat > 90) issues.push(`Invalid latitude: ${entry.lat}`);
    if (typeof entry.lon !== 'number' || entry.lon < -180 || entry.lon > 180) issues.push(`Invalid longitude: ${entry.lon}`);
    if (!entry.lapRecord) warnings.push('Missing verified lap record');
    if (!entry.recordHolder) warnings.push('Missing lap record holder');
    if (!entry.recordYear) warnings.push('Missing record year');
    if (!entry.elevation || !entry.elevation.profile || !entry.elevation.profile.length) warnings.push('Missing elevation profile');
    if (!CIRCUIT_PATHS[id]) warnings.push('No embedded SVG path');

    const turns = (CIRCUIT_TURNS && CIRCUIT_TURNS[id]) || [];
    // measured maps (TRACK_OUTLINES) intentionally carry no hand-placed turn markers
    if (!turns.length && !(typeof TRACK_OUTLINES !== 'undefined' && TRACK_OUTLINES[id])) warnings.push('No turn overlay metadata');

    const status = issues.length > 0 ? 'FAIL' : (warnings.length > 0 ? 'WARN' : 'PASS');
    if (status === 'PASS') results.passed++;
    else if (status === 'WARN') results.warned++;
    else results.failed++;

    results.details.push({ id, name: entry.name, status, issues, warnings });
  });

  results.status = results.failed === 0 ? 'PASS' : 'FAIL';

  if (logToConsole && typeof console !== 'undefined' && console.groupCollapsed) {
    console.groupCollapsed(`[CircuitSystem Audit] Deep Validation Report: ${results.status} (${results.passed} PASS, ${results.warned} WARN, ${results.failed} FAIL)`);
    console.table(results.details.map(d => ({ ID: d.id, Status: d.status, Issues: d.issues.join('; ') || 'None', Warnings: d.warnings.join('; ') || 'None' })));
    console.groupEnd();
  }

  return results;
}
if (typeof window !== 'undefined') {
  try { window.f1TrackValidation = validateCircuitSystem(false); } catch (e) {}
}
function classifyResultStatus(statusStr) {
  if (!statusStr) return 'UNKNOWN';
  const s = String(statusStr).trim();
  if (s === 'Finished') return 'FINISHED';
  if (/^\+\d+\s*Laps?$/i.test(s) || s.toLowerCase() === 'lapped') return 'LAPPED';
  if (/collision|accident|spun off|crash|damage/i.test(s)) return 'ACCIDENT';
  if (/disqualified/i.test(s)) return 'DISQUALIFIED';
  if (/did not start|dns/i.test(s)) return 'DNS';
  if (/withdrew|withdrawn/i.test(s)) return 'WITHDRAWN';
  if (/not classified|nc/i.test(s)) return 'NOT_CLASSIFIED';
  if (/engine|gearbox|brakes?|hydraulics?|suspension|electrical|mechanical|retired|power unit|overheating|puncture|wheel|radiator|exhaust|clutch|fuel|water|oil|driveshaft|throttle|steering/i.test(s)) {
    return 'RETIRED';
  }
  return 'UNKNOWN';
}

function isActualDnf(statusStr) {
  const cat = classifyResultStatus(statusStr);
  return cat === 'RETIRED' || cat === 'ACCIDENT';
}

function isRaceCompleted(r) {
  if (!r) return false;
  if (Array.isArray(r.Results) && r.Results.length > 0) return true;
  const rSeason = Number(r.season);
  if (rSeason && rSeason < CURRENT_SEASON) return true;
  const exact = raceTime(r);
  if (Number.isFinite(exact)) {
    return Date.now() > (exact + 2.5 * 3600 * 1000);
  }
  const dOnly = raceDate(r);
  if (Number.isFinite(dOnly)) {
    return Date.now() > (dOnly + 12 * 3600 * 1000);
  }
  return false;
}

function isRaceUpcoming(r) {
  return !isRaceCompleted(r);
}

function racePodiumHtml(results) {
  const top = (results || []).filter(r => ['1', '2', '3'].includes(String(r.position))).sort((a, b) => Number(a.position) - Number(b.position));
  if (top.length < 3) return '';
  const order = [top[1], top[0], top[2]];  // P2, P1, P3 as on a real podium
  return `<div class="podium" role="group" aria-label="Подиум гонки">${order.map(r => {
    const pos = Number(r.position);
    const tc = teamColor(r.Constructor?.name);
    const photo = (typeof Headshots !== 'undefined' && r.Driver?.code) ? Headshots.url(r.Driver.code, 2) : null;
    const gap = pos === 1 ? (r.Time?.time || '') : (r.Time?.time ? `+${String(r.Time.time).replace(/^\+/, '')}` : '');
    return `<div class="pod pod-${pos}" style="--tc:${tc}">
      ${photo ? `<img class="pod-ph" src="${esc(photo)}" alt="" width="56" height="56" referrerpolicy="no-referrer" onerror="this.remove()">` : ''}
      <b class="pod-num">${pos}</b>
      <span class="pod-name">${esc(r.Driver?.familyName || '')}</span>
      <small>${esc(r.Constructor?.name || '')}</small>
      ${gap ? `<small class="pod-gap">${esc(gap)}</small>` : ''}
    </div>`;
  }).join('')}</div>`;
}


class TyreStint {
  constructor({ driverId, stintNumber, compound, startLap, endLap, laps, pitDuration, isEstimated = false, isCurrent = false, source = 'JOLPICA' }) {
    this.driverId = driverId;
    this.stintNumber = Number(stintNumber);
    this.compound = compound || 'UNAVAILABLE';
    this.startLap = Number(startLap);
    this.endLap = Number(endLap);
    this.laps = Math.max(1, Number(laps) || (this.endLap - this.startLap + 1));
    this.pitDuration = (pitDuration !== undefined && pitDuration !== null && pitDuration !== '') ? String(pitDuration) : null;
    this.isEstimated = Boolean(isEstimated);
    this.isCurrent = Boolean(isCurrent);
    this.source = source;
  }

  getCompoundBadgeClass() {
    switch (String(this.compound || '').toUpperCase()) {
      case 'SOFT': return 'stint-compound-soft';
      case 'MEDIUM': return 'stint-compound-medium';
      case 'HARD': return 'stint-compound-hard';
      case 'INTERMEDIATE': return 'stint-compound-inter';
      case 'WET': return 'stint-compound-wet';
      default: return 'stint-compound-unavail';
    }
  }

  getCompoundShortLabel() {
    switch (String(this.compound || '').toUpperCase()) {
      case 'SOFT': return 'S';
      case 'MEDIUM': return 'M';
      case 'HARD': return 'H';
      case 'INTERMEDIATE': return 'I';
      case 'WET': return 'W';
      default: return 'Н/Д';
    }
  }
}


class PitStop {
  constructor({ driverId, stopNumber, lap, duration, time, isEstimated = false, source = 'JOLPICA' }) {
    this.driverId = driverId;
    this.stopNumber = Number(stopNumber);
    this.lap = Number(lap) || 0;
    this.duration = (duration !== undefined && duration !== null && duration !== '' && duration !== 'Н/Д') ? String(duration) : null;
    this.time = time || null;
    this.isEstimated = Boolean(isEstimated);
    this.source = source;
  }
}

const StrategyAdapters = {
  historical: (pitStops, results, totalLaps) => {
    const stopsByDriver = {};
    (pitStops || []).forEach(s => {
      const did = s.driverId;
      if (!stopsByDriver[did]) stopsByDriver[did] = [];
      stopsByDriver[did].push(new PitStop({
        driverId: did,
        stopNumber: Number(s.stop),
        lap: Number(s.lap),
        duration: s.duration ? String(s.duration) : null,
        time: s.time || null,
        source: 'JOLPICA'
      }));
    });

    const driverMap = {};
    (results || []).forEach(d => {
      const did = d.Driver.driverId;
      const dStops = (stopsByDriver[did] || []).sort((a, b) => a.lap - b.lap);
      const parsedLaps = parseInt(d.laps);
      const lapsCompleted = (!isNaN(parsedLaps) && parsedLaps > 0) ? parsedLaps : totalLaps;
      const stints = [];
      let prevLap = 0;

      dStops.forEach((ps, idx) => {
        const stopLap = ps.lap;
        const span = Math.max(1, stopLap - prevLap);
        stints.push(new TyreStint({
          driverId: did,
          stintNumber: idx + 1,
          compound: 'UNAVAILABLE',
          startLap: prevLap + 1,
          endLap: stopLap,
          laps: span,
          pitDuration: ps.duration,
          isEstimated: false,
          source: 'JOLPICA'
        }));
        prevLap = stopLap;
      });

      const finalSpan = Math.max(1, lapsCompleted - prevLap);
      stints.push(new TyreStint({
        driverId: did,
        stintNumber: stints.length + 1,
        compound: 'UNAVAILABLE',
        startLap: prevLap + 1,
        endLap: lapsCompleted,
        laps: finalSpan,
        pitDuration: null,
        isEstimated: false,
        source: 'JOLPICA'
      }));

      driverMap[did] = { stints, pitStops: dStops, totalLaps: lapsCompleted };
    });

    return driverMap;
  }
};


'use strict';

const IS_FILE_PROTOCOL = typeof window !== 'undefined' && window.location.protocol === 'file:';

const CONFIG = {
  api: (typeof window !== 'undefined' && window.F1_API_OVERRIDE) || 'https://api.jolpi.ca/ergast/f1',
  ttl: 15 * 60 * 1000,
  timeout: 4500,
  retries: 1,
  seasonStart: 2018,
  maxConcurrent: 6,
  retryDelayMs: 150
};

function recordRateTimestamp() {
  try {
    const now = Date.now();
    const raw = safeStorage.get('f1tl:rate:timestamps');
    let list = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(list)) list = [];
    list = list.filter(t => (now - t) < 3600000);
    list.push(now);
    safeStorage.set('f1tl:rate:timestamps', JSON.stringify(list));
  } catch {}
}

function getHourlyRequestCount() {
  try {
    const now = Date.now();
    const raw = safeStorage.get('f1tl:rate:timestamps');
    if (!raw) return 0;
    let list = JSON.parse(raw);
    if (!Array.isArray(list)) return 0;
    const valid = list.filter(t => (now - t) < 3600000);
    if (valid.length !== list.length) {
      safeStorage.set('f1tl:rate:timestamps', JSON.stringify(valid));
    }
    return valid.length;
  } catch {
    return 0;
  }
}

const _requestQueue = [];
let _activeRequestsCount = 0;

const _requestTimestamps = [];
const MAX_REQUESTS_PER_SECOND = 4;

function _processQueue() {
  const now = Date.now();
  while (_requestTimestamps.length > 0 && now - _requestTimestamps[0] >= 1000) {
    _requestTimestamps.shift();
  }

  while (_activeRequestsCount < CONFIG.maxConcurrent && _requestQueue.length > 0) {
    if (_requestTimestamps.length >= MAX_REQUESTS_PER_SECOND) {
      const waitMs = Math.max(25, 1000 - (now - _requestTimestamps[0]) + 10);
      setTimeout(_processQueue, waitMs);
      break;
    }
    const nextTask = _requestQueue.shift();
    _activeRequestsCount++;
    _requestTimestamps.push(Date.now());
    Promise.resolve()
      .then(() => nextTask())
      .finally(() => {
        _activeRequestsCount = Math.max(0, _activeRequestsCount - 1);
        _processQueue();
      });
  }
}

function queueRequest(fn, signal = null, priority = false) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) return reject(new Error('Aborted'));
    let onAbort = null;
    const cleanup = () => {
      if (signal && onAbort) {
        signal.removeEventListener('abort', onAbort);
        onAbort = null;
      }
    };
    const task = () => Promise.resolve()
      .then(() => fn())
      .then(
        res => { cleanup(); resolve(res); },
        err => { cleanup(); reject(err); }
      );

    if (signal) {
      onAbort = () => {
        const idx = _requestQueue.indexOf(task);
        if (idx !== -1) {
          _requestQueue.splice(idx, 1);
        }
        cleanup();
        reject(new Error('Aborted'));
      };
      signal.addEventListener('abort', onAbort, { once: true });
    }

    if (priority) {
      _requestQueue.unshift(task);
    } else {
      _requestQueue.push(task);
    }
    _processQueue();
  });
}

const CURRENT_SEASON = (() => {
  const now = new Date();
  return now.getUTCMonth() >= 2 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
})();

const TEAM_COLORS = {
  'Cadillac': '#c4a747',
  'Cadillac F1 Team': '#c4a747',
  'Alpine F1 Team': '#0093cc',
  'RB F1 Team': '#6692ff',
  'Red Bull': '#3671c6',
  'Red Bull Racing': '#3671c6',
  Ferrari: '#e80020',
  McLaren: '#ff8000',
  Mercedes: '#27f4d2',
  'Aston Martin': '#229971',
  Alpine: '#0093cc',
  Williams: '#64c4ff',
  'Racing Bulls': '#6692ff',
  RB: '#6692ff',
  Haas: '#b6babd',
  'Haas F1 Team': '#b6babd',
  Sauber: '#52e252',
  'Kick Sauber': '#52e252',
  Audi: '#777777',
  Renault: '#fff500',
  'AlphaTauri': '#5e8faa',
  'Racing Point': '#f596c8',
  'Alfa Romeo': '#900000',
  'Toro Rosso': '#469bff'
};

const state = {
  season: CURRENT_SEASON,
  tab: 'home',
  standings: null,
  calendar: null,
  history: null,
  trackHistory: new Map(),
  charts: {},
  inflight: new Map(),
  imageCache: { drivers: new Map(), tracks: new Map() },
  lastSync: null,
  seasons: {
    home: CURRENT_SEASON,
    standings: CURRENT_SEASON,
    calendar: CURRENT_SEASON,
    circuits: CURRENT_SEASON,
    drivers: CURRENT_SEASON,
    teams: CURRENT_SEASON,
    compare: CURRENT_SEASON,
    history: CURRENT_SEASON - 1
  },
  pageData: {}
};

const safeStorage = {
  _mem: new Map(),
  get(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const v = window.localStorage.getItem(key);
        if (v !== null) return v;
      }
    } catch {}
    return this._mem.get(key) || null;
  },
  has(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        if (window.localStorage.getItem(key) !== null) return true;
      }
    } catch {}
    return this._mem.has(key);
  },
  set(key, val) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, String(val));
        return;
      }
    } catch (e) {
      const isQuota = e && (
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        e.code === 22 || e.code === 1014 ||
        (e.message && e.message.toLowerCase().includes('quota'))
      );
      if (isQuota && typeof window !== 'undefined' && window.localStorage) {
        try {
          const items = [];
          for (let i = 0; i < window.localStorage.length; i++) {
            const k = window.localStorage.key(i);
            if (k && k.startsWith('f1tl:')) {
              let ts = 0;
              try {
                const parsed = JSON.parse(window.localStorage.getItem(k));
                ts = parsed?.ts || 0;
              } catch {}
              items.push({ key: k, ts });
            }
          }
          items.sort((a, b) => a.ts - b.ts);
          const toEvict = Math.max(1, Math.ceil(items.length * 0.35));
          for (let i = 0; i < toEvict && i < items.length; i++) {
            window.localStorage.removeItem(items[i].key);
          }
          window.localStorage.setItem(key, String(val));
          return;
        } catch {}
      }
    }
    this._mem.set(key, String(val));
  },
  remove(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {}
    this._mem.delete(key);
  },
  clear() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const keysToRemove = [];
        for (let i = 0; i < window.localStorage.length; i++) {
          const k = window.localStorage.key(i);
          if (k && k.startsWith('f1tl:')) keysToRemove.push(k);
        }
        for (const k of keysToRemove) {
          window.localStorage.removeItem(k);
        }
      }
    } catch {}
    for (const k of Array.from(this._mem.keys())) {
      if (k.startsWith('f1tl:')) this._mem.delete(k);
    }
  },
  key(i) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.key(i);
      }
    } catch {}
    return Array.from(this._mem.keys())[i] || null;
  },
  length() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.length;
      }
    } catch {}
    return this._mem.size;
  }
};

const f1IdbStore = {
  dbName: 'F1RuntimeDB',
  storeName: 'endpoints',
  _db: null,
  _dbPromise: null,
  async getDb() {
    if (this._db) return this._db;
    if (this._dbPromise) return this._dbPromise;
    if (typeof indexedDB === 'undefined') return null;
    this._dbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(this.dbName, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: 'path' });
          }
        };
        req.onsuccess = (e) => {
          this._db = e.target.result;
          this._db.onclose = () => { this._db = null; this._dbPromise = null; };
          this._db.onversionchange = () => { this._db?.close(); this._db = null; this._dbPromise = null; };
          resolve(this._db);
        };
        req.onerror = () => {
          this._dbPromise = null;
          resolve(null);
        };
        req.onblocked = () => {
          this._dbPromise = null;
          resolve(null);
        };
      } catch {
        this._dbPromise = null;
        resolve(null);
      }
    });
    return this._dbPromise;
  },
  async get(path) {
    if (!path) return null;
    const clean = String(path).replace(/^\/+/, '');
    const cleanNoQuery = clean.split('?')[0];
    try {
      const db = await this.getDb();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);
        const req1 = store.get(clean);
        req1.onsuccess = () => {
          if (req1.result) return resolve(req1.result);
          if (clean !== cleanNoQuery) {
            const req2 = store.get(cleanNoQuery);
            req2.onsuccess = () => resolve(req2.result || null);
            req2.onerror = () => resolve(null);
          } else {
            resolve(null);
          }
        };
        req1.onerror = () => resolve(null);
      });
    } catch {
      return null;
    }
  },
  async set(path, data, ts = Date.now()) {
    if (!path || !data) return false;
    const clean = String(path).replace(/^\/+/, '');
    const cleanNoQuery = clean.split('?')[0];
    try {
      if (typeof getEmbeddedSnapshot === 'function') {
        const snap = getEmbeddedSnapshot();
        if (snap && snap.endpoints) {
          snap.endpoints[clean] = data;
          snap.endpoints[cleanNoQuery] = data;
          if (typeof _snapshotLookupCache !== 'undefined') {
            _snapshotLookupCache.delete(clean);
            _snapshotLookupCache.delete(cleanNoQuery);
            _snapshotLookupCache.delete(path);
          }
        }
      }
    } catch {}
    try {
      const db = await this.getDb();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.put({ path: clean, data, ts });
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } catch {
      return false;
    }
  },
  async getAll() {
    try {
      const db = await this.getDb();
      if (!db) return [];
      return new Promise((resolve) => {
        const tx = db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      });
    } catch {
      return [];
    }
  },
  async keys() {
    try {
      const all = await this.getAll();
      return all.map(x => x.path);
    } catch {
      return [];
    }
  },
  async count() {
    try {
      const db = await this.getDb();
      if (!db) return 0;
      return new Promise((resolve) => {
        const tx = db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);
        const req = store.count();
        req.onsuccess = () => resolve(req.result || 0);
        req.onerror = () => resolve(0);
      });
    } catch {
      return 0;
    }
  },
  async clear() {
    try {
      const db = await this.getDb();
      if (!db) return;
      await new Promise((resolve) => {
        const tx = db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);
        store.clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => resolve();
      });
      if (typeof _embeddedSnapshot !== 'undefined') {
        _embeddedSnapshot = null;
      }
      if (typeof _snapshotLookupCache !== 'undefined') {
        _snapshotLookupCache.clear();
      }
    } catch {}
  }
};
f1IdbStore.isFresh = function(entry, customTtlMs = null) {
  if (!entry || typeof entry !== 'object') return false;
  const maxAge = Number(customTtlMs) || Number(entry.ttl) || (typeof getEndpointTTL === 'function' ? getEndpointTTL(entry.path || '') : 900000);
  return (Date.now() - Number(entry.ts || 0)) <= maxAge;
};
f1IdbStore.getWithTTL = async function(path, { allowStale = false, maxAgeMs = null } = {}) {
  const entry = await this.get(path);
  if (!entry) return null;
  if (this.isFresh(entry, maxAgeMs) || allowStale) return entry;
  return null;
};
f1IdbStore.evictExpired = async function() {
  try {
    const all = await this.getAll();
    const db = await this.getDb();
    if (!db || !all.length) return 0;
    let removed = 0;
    await new Promise((resolve) => {
      const tx = db.transaction(this.storeName, 'readwrite');
      const store = tx.objectStore(this.storeName);
      all.forEach(item => {
        if (item && item.path && !this.isFresh(item)) {
          store.delete(item.path);
          removed++;
        }
      });
      tx.oncomplete = () => resolve(removed);
      tx.onerror = () => resolve(removed);
    });
    return removed;
  } catch {
    return 0;
  }
};
const f1_idb_store = f1IdbStore;
if (typeof window !== 'undefined') {
  window.f1IdbStore = f1IdbStore;
  window.f1_idb_store = f1IdbStore;
  window.safeStorage = safeStorage;
}

async function syncIdbToSnapshot() {
  if (typeof f1IdbStore === 'undefined' || !f1IdbStore.getAll) return;
  try {
    const entries = await f1IdbStore.getAll();
    if (!Array.isArray(entries) || entries.length === 0) return;
    const snap = getEmbeddedSnapshot();
    if (snap && snap.endpoints) {
      for (const item of entries) {
        if (item && item.path && item.data) {
          const clean = String(item.path).replace(/^\/+/, '');
          const cleanNoQuery = clean.split('?')[0];
          snap.endpoints[clean] = item.data;
          snap.endpoints[cleanNoQuery] = item.data;
          if (typeof _snapshotLookupCache !== 'undefined') {
            _snapshotLookupCache.delete(clean);
            _snapshotLookupCache.delete(cleanNoQuery);
            _snapshotLookupCache.delete(item.path);
          }
        }
      }
    }
  } catch (e) {
    console.warn('syncIdbToSnapshot notice:', e);
  }
}
if (typeof window !== 'undefined') window.syncIdbToSnapshot = syncIdbToSnapshot;

window.f1Diagnostics = {
  network: {
    endpoint: CONFIG.api,
    status: 'IDLE',
    source: 'UNKNOWN',
    error: null,
    retry: 0,
    cache: 'none',
    inflight: () => Array.from(state.inflight.keys()),
    history: [],
    record(info) {
      this.endpoint = info.url || info.endpoint;
      this.status = info.status ? `HTTP ${info.status}` : (info.error ? 'ERROR' : 'ONLINE');
      this.source = info.source || 'network';
      this.error = info.error || null;
      this.retry = info.retry || 0;
      this.cache = info.cache || 'none';
      this.history.unshift({ ...info, time: Date.now() });
      if (this.history.length > 50) this.history.pop();
    }
  },
  cache: {
    size: () => {
      let count = 0, bytes = 0;
      try {
        for (let i = 0; i < safeStorage.length(); i++) {
          const k = safeStorage.key(i);
          if (k && k.startsWith('f1tl:')) {
            count++;
            bytes += (safeStorage.get(k) || '').length;
          }
        }
      } catch {}
      return { count, bytes };
    },
    inspect: key => {
      if (!key) return null;
      const cleanKey = String(key).replace(/^f1tl:[^:]*:/, '');
      return readCache(cleanKey, { allowStale: true });
    },
    clear: () => {
      try {
        const keys = [];
        for (let i = 0; i < safeStorage.length(); i++) {
          const k = safeStorage.key(i);
          if (k && k.startsWith('f1tl:')) keys.push(k);
        }
        keys.forEach(k => safeStorage.remove(k));
      } catch {}
    }
  },
  api: {
    status: () => ({ lastSync: state.lastSync, season: state.season, apiBase: CONFIG.api }),
    errors: [],
    recordError(err) {
      this.errors.unshift({ ...err, time: Date.now() });
      if (this.errors.length > 30) this.errors.pop();
    }
  },
  render: {
    tab: () => state.tab,
    season: () => state.season,
    charts: () => Object.keys(state.charts)
  },
  assets: {
    validate: () => (typeof validateCircuitSystem === 'function' ? validateCircuitSystem() : null)
  }
};

const pageSeason = page => Number(state.seasons[page] || state.season);
const setPageSeason = (page, season) => {
  const num = Number(season) || CURRENT_SEASON;
  state.seasons[page] = num;
  try {
    safeStorage.set('f1tl:season', String(num));
    safeStorage.set('f1tl:seasons', JSON.stringify(state.seasons));
  } catch {}
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const esc = v => String(v ?? '—').replace(/[&<>"']/g, c => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
}[c]));

const driverName = d => d ? `${d.givenName || ''} ${d.familyName || ''}`.trim() : '—';

const raceTime = r => {
  const iso = r?.date && r?.time ? `${r.date}T${r.time}` : null;
  const t = iso ? Date.parse(iso) : NaN;
  return Number.isFinite(t) ? t : NaN;
};

const raceDate = r => {
  if (!r?.date) return NaN;
  const [y, m, d] = r.date.split('-').map(Number);
  if (!y || !m || !d) return NaN;
  return Date.UTC(y, m - 1, d, 12, 0, 0); // Noon UTC avoids midnight timezone shift
};

const scheduleMoment = r => Number.isFinite(raceTime(r)) ? raceTime(r) : raceDate(r);

const fmtDate = t => Number.isFinite(t)
  ? new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(t))
  : 'Дата не указана';

const fmtSchedule = r => {
  const exact = raceTime(r);
  if (Number.isFinite(exact)) return fmtDate(exact);
  const dateOnly = raceDate(r);
  return Number.isFinite(dateOnly)
    ? new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(dateOnly))
    : 'Дата не указана';
};

const fmtNum = v => {
  if (v == null || v === '') return '—';
  const n = Number(v);
  if (Number.isNaN(n)) return '—';
  return n % 1 ? n.toFixed(1) : n.toLocaleString('ru-RU');
};

const isOfficialFastestLap = r => String(r?.FastestLap?.rank) === '1' || String(r?.FastestLap?.rank) === '1.0' || String(r?.fastestLap?.rank) === '1';

function findOfficialFastestLap(results) {
  if (!Array.isArray(results) || !results.length) return null;
  const official = results.find(isOfficialFastestLap) || results.find(r => r?.FastestLap?.rank == 1 || r?.fastestLap?.rank == 1);
  if (official) return official;

  let best = null;
  let bestSec = Infinity;
  for (const r of results) {
    const rawTime = r?.FastestLap?.Time?.time || r?.FastestLap?.time || r?.fastestLap?.time;
    if (rawTime) {
      const parts = String(rawTime).trim().split(':');
      let sec = NaN;
      if (parts.length === 2) {
        sec = parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
      } else if (parts.length === 1) {
        sec = parseFloat(parts[0]);
      }
      if (!isNaN(sec) && sec > 0 && sec < bestSec) {
        bestSec = sec;
        best = r;
      }
    }
  }
  return best || results.find(r => r?.FastestLap || r?.fastestLap) || null;
}

async function showShareableRaceReport(race, winner, results = [], pitStops = []) {
  if (!race) return;
  const raceSeason = Number(race.season || state.season);
  const winnerObj = winner || results[0] || null;
  const winnerName = winnerObj ? driverName(winnerObj.Driver) : (results.length ? '—' : 'Не загружено');
  const fastest = findOfficialFastestLap(results);
  const flText = fastest
    ? `${driverName(fastest.Driver)} (${fastest.FastestLap?.Time?.time || '—'})`
    : (raceSeason < 2004 ? 'Не регистрировался (до 2004 г.)' : (results.length ? '—' : 'Не загружено'));
  const pitCountText = pitStops.length
    ? `${pitStops.length}`
    : (raceSeason < 2011 ? 'Нет данных (до 2011 г.)' : (results.length ? '0' : 'Не загружено'));
  const medals = ['🥇', '🥈', '🥉'];
  const top3 = results.slice(0, 3).map((r, i) => `${medals[i] || `P${r.position}`} P${r.position}: ${driverName(r.Driver)} (${r.Constructor?.name || '—'}) — ${r.Time?.time || r.status || `${r.points} pts`}`).join('\n');
  const top5 = results.slice(0, 5).map(r => `  P${r.position}: ${driverName(r.Driver)} (${r.Constructor?.name || '—'}) - ${r.points} pts`).join('\n');
  const shareUrl = (typeof window !== 'undefined' && window.location?.href) ? window.location.href : './f1_timeline.html';
  const report = [
    `🏎️ F1 RACE REPORT: ${ruGP(race.raceName)} (${raceSeason || state.season})`,
    `Автодром: ${race.Circuit?.circuitName || '—'} · Дата: ${fmtSchedule(race)}`,
    `🏆 Победитель: ${winnerName} (${winnerObj?.Constructor?.name || '—'})`,
    `🏁 Подиум (Топ-3):`,
    top3 || '  (Результаты формируются)',
    `Лучший круг: ${flText}`,
    `🔧 Всего пит-стопов: ${pitCountText}`,
    `\n🏁 ТОП-5 ФИНИШЁРОВ:`,
    top5 || '  (Результаты формируются)',
    `🔗 ${shareUrl}`,
    `Сгенерировано в F1 Timeline 2.0`
  ].join('\n');

  const copyFallback = async () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(report);
        toast('Результаты гонки скопированы в буфер обмена');
        return true;
      } catch {}
    }
    toast('Результаты гонки подготовлены для шеринга');
    return false;
  };

  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: `${ruGP(race.raceName)} (${raceSeason}) — Результаты F1`,
        text: report,
        url: shareUrl
      });
      toast('Результаты гонки отправлены');
      return report;
    } catch (err) {
      if (err && err.name === 'AbortError') return report;
      await copyFallback();
      return report;
    }
  }

  await copyFallback();
  return report;
}
if (typeof window !== 'undefined') {
  window.showShareableRaceReport = showShareableRaceReport;
  window.shareRaceResults = showShareableRaceReport;
}

function teamColor(name) {
  if (!name) return '#64748b';
  const clean = String(name).trim();
  const lower = clean.toLowerCase();
  if (TEAM_COLORS[clean]) return TEAM_COLORS[clean];
  if (TEAM_COLORS[lower]) return TEAM_COLORS[lower];
  for (const [k, v] of Object.entries(TEAM_COLORS)) {
    if (lower.includes(k.toLowerCase())) return v;
  }
  if (typeof console !== 'undefined' && console.warn) {
    console.warn(`[TeamColor] Unknown constructor "${name}", using neutral fallback #64748b.`);
  }
  return '#64748b';
}

// Плашка состояния: на экране одно понятное слово, подробности в подсказке и в окне «Состояние источников».
// Сохранённые данные при доступном источнике считаются свежими, чтобы на разных вкладках не было разных слов.
function statusWords(type, text) {
  const t = String(text || '');
  const hm = ts => new Date(ts).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  const date = (t.match(/от (.+)$/) || [])[1];
  let jol = null;
  try { jol = Health.state?.jolpica || null; } catch {}
  if (type === 'updated') return /ОНЛАЙН/.test(t) ? ['В сети', 'Соединение восстановлено', 'updated'] : ['Свежие', `Данные получены из сети в ${hm(Date.now())}`, 'updated'];
  if (type === 'cached' && /АРХИВ/.test(t)) return ['Архив', 'Архивный сезон: данные встроены в сайт', 'cached'];
  if (type === 'cached') return jol?.ok ? ['Свежие', `Данные сохранены недавно, источник доступен (проверка в ${hm(jol.ts || Date.now())})`, 'updated'] : ['Из памяти', 'Показаны недавно сохранённые данные', 'cached'];
  if (type === 'snapshot') return ['Без сети', `Сеть недоступна: показан встроенный снимок${date ? ` от ${date}` : ''}`, 'snapshot'];
  if (type === 'offline' && /ЧАСТИЧ/.test(t)) return ['Частично', 'Часть данных не загрузилась, показано то, что есть', 'offline'];
  if (type === 'offline') return ['Без сети', /НЕТ ДАННЫХ|ОШИБКА/.test(t) ? 'Нет связи с сервером, данных нет' : t === 'OFFLINE' ? 'Устройство не в сети' : 'Сеть недоступна: показаны сохранённые данные', 'offline'];
  if (type === 'error') return ['Ошибка', 'Не удалось обновить данные', 'error'];
  return ['Загрузка', 'Проверяю свежие данные', ''];
}

function setStatus(type, text) {
  const el = $('#status');
  if (!el) return;
  const [word, detail, cls] = statusWords(type, text);
  el.className = `status ${cls}`;
  const t = $('#statusText');
  if (t) t.textContent = word;
  el.dataset.short = word;
  el.title = `${detail}. Нажмите, чтобы проверить источники`;
}

let _toastTimer = null;
function toast(msg) {
  const el = $('#toast');
  if (!el) return;
  if (_toastTimer) clearTimeout(_toastTimer);
  el.textContent = msg;
  el.hidden = false;
  _toastTimer = setTimeout(() => { el.hidden = true; }, 4200);
}

function cacheKey(path) { return `f1tl:v4:${path}`; }

function getEndpointTTL(path) {
  const p = String(path || '');
  const m = p.match(/^(\d{4})/);
  const season = m ? Number(m[1]) : null;

  if (season && season < CURRENT_SEASON) {
    return 30 * 24 * 60 * 60 * 1000;
  }

  if ((p.endsWith('.json') && !p.includes('/') && !p.includes('results') && !p.includes('standings')) || p.includes('races.json')) {
    return 6 * 60 * 60 * 1000;
  }

  let isRaceDay = false;
  try {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (state.calendar && Array.isArray(state.calendar)) {
      isRaceDay = state.calendar.some(r => r.date === todayStr);
    }
  } catch {}

  return isRaceDay ? (5 * 60 * 1000) : (15 * 60 * 1000);
}

function readCache(path, options = {}) {
  let allowStale = true;
  let maxAgeMs = getEndpointTTL(path);
  if (typeof options === 'boolean') {
    allowStale = options;
  } else if (typeof options === 'number') {
    maxAgeMs = options;
    allowStale = false;
  } else if (options && typeof options === 'object') {
    if (options.allowStale !== undefined) allowStale = Boolean(options.allowStale);
    if (options.maxAgeMs !== undefined) maxAgeMs = Number(options.maxAgeMs);
  }
  try {
    const raw = safeStorage.get(cacheKey(path));
    if (!raw) return null;
    const x = JSON.parse(raw);
    if (!x || typeof x !== 'object') return null;
    const age = Date.now() - (x.ts || 0);
    if (age < maxAgeMs) return x;
    if (allowStale) return x;
    return null;
  } catch {
    return null;
  }
}

let _embeddedSnapshot = null;
const _snapshotLookupCache = new Map();
const _raceDetailsMemCache = new Map();
function getEmbeddedSnapshot() {
  if (_embeddedSnapshot !== null) return _embeddedSnapshot;
  if (typeof window !== 'undefined' && window.__F1_CORE) { _embeddedSnapshot = window.__F1_CORE; return _embeddedSnapshot; }
  try {
    const el = document.getElementById('f1-snapshot');
    if (el && el.textContent) {
      const parsed = JSON.parse(el.textContent);
      _embeddedSnapshot = Array.isArray(parsed) ? parsed[0] : parsed;
    }
  } catch (e) {
    console.warn('Failed to parse embedded snapshot:', e);
  }
  return _embeddedSnapshot;
}

function readSnapshot(path) {
  if (!path) return null;
  if (_snapshotLookupCache.has(path)) return _snapshotLookupCache.get(path);
  const snap = getEmbeddedSnapshot();
  if (!snap || !snap.endpoints) return null;
  const clean = String(path).replace(/^\/+/, '');
  const cleanNoQuery = clean.split('?')[0];
  const data = snap.endpoints[clean] || snap.endpoints[cleanNoQuery];
  if (data) {
    const ts = snap._metadata?.generatedAt ? new Date(snap._metadata.generatedAt).getTime() : Date.now();
    const res = { data, source: 'snapshot', ts, status: 'SNAPSHOT' };
    _snapshotLookupCache.set(path, res);
    return res;
  }
  _snapshotLookupCache.set(path, null);
  return null;
}

// Site build (GitHub Pages): scripts/build_site.py sets window.__F1_SITE. The page then carries only the current season
// and the archive seasons arrive as separate files. In the single-file build SITE is null and nothing here runs.
const SITE = (typeof window !== 'undefined' && window.__F1_SITE) || null;
if (SITE) {
  try {
    const self = document.currentScript && document.currentScript.src;
    SITE.base = self && /\/assets\/[^/]+$/.test(self) ? new URL('../', self).pathname : new URL(SITE.root || './', location.href).pathname;
  } catch { SITE.base = '/'; }
}
const SnapshotStore = {
  loaded: new Set(),
  pending: new Map(),
  allDone: !SITE,
  _all: null,
  files() { return (SITE && SITE.seasons) || {}; },
  seasonOf(path) { const m = String(path || '').replace(/^\/+/, '').match(/^(\d{4})(?:[\/.]|$)/); return m ? m[1] : null; },
  needs(path) { const y = this.seasonOf(path); return Boolean(y && this.files()[y] && !this.loaded.has(y)); },
  load(year) {
    year = String(year);
    const file = this.files()[year];
    if (!file || this.loaded.has(year)) return Promise.resolve(false);
    if (this.pending.has(year)) return this.pending.get(year);
    const job = fetch(SITE.base + file)
      .then(r => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(eps => {
        const snap = getEmbeddedSnapshot();
        if (snap && snap.endpoints) for (const k in eps) if (!(k in snap.endpoints)) snap.endpoints[k] = eps[k];
        this.loaded.add(year);
        this.pending.delete(year);
        this.refresh();
        return true;
      })
      .catch(e => { this.pending.delete(year); console.warn('archive season', year, e); return false; });
    this.pending.set(year, job);
    return job;
  },
  ensure(path) { return this.needs(path) ? this.load(this.seasonOf(path)) : Promise.resolve(false); },
  whenAll() {
    if (this.allDone) return Promise.resolve(true);
    if (!this._all) {
      this._all = (async () => {
        const years = Object.keys(this.files()).sort().reverse();
        let ok = true;
        for (const y of years) ok = (await this.load(y) || this.loaded.has(y)) && ok;
        this.allDone = ok;
        if (!ok) this._all = null;      // a failed file is retried on the next request
        return ok;
      })();
    }
    return this._all;
  },
  // results computed from the snapshot before a season arrived are dropped so they are recomputed with it
  refresh() {
    _snapshotLookupCache.clear();
    try { _traitCache.clear(); _traitStats.clear(); } catch {}
    try {
      const fresh = buildDriverCareerProgression(getEmbeddedSnapshot());
      Object.keys(DRIVER_CAREER_PROGRESSION).forEach(k => delete DRIVER_CAREER_PROGRESSION[k]);
      Object.assign(DRIVER_CAREER_PROGRESSION, fresh);
    } catch {}
  }
};

// Site build: Chart.js is a separate file loaded after the first screen; a chart asked for earlier is drawn when it arrives.
// In the single-file build Chart.js is inlined, so waiting() is always false.
const ChartLib = {
  failed: false,
  _job: null,
  waiting() { return Boolean(SITE && SITE.chart && !window.Chart && !this.failed); },
  load() {
    if (!this.waiting()) return Promise.resolve();
    if (!this._job) {
      this._job = new Promise(resolve => {
        const el = document.createElement('script');
        el.src = SITE.base + SITE.chart;
        el.onload = () => resolve();
        el.onerror = () => { this.failed = true; resolve(); };
        document.head.appendChild(el);
      });
    }
    return this._job;
  },
  then(fn) { this.load().then(() => { try { fn(); } catch (e) { console.warn('chart', e); } }); }
};

function writeCache(path, data) {
  try {
    safeStorage.set(cacheKey(path), JSON.stringify({ ts: Date.now(), data }));
  } catch (e) {
    try {
      const items = [];
      for (let i = 0; i < safeStorage.length(); i++) {
        const k = safeStorage.key(i);
        if (k && k.startsWith('f1tl:')) {
          let ts = 0;
          try {
            const parsed = JSON.parse(safeStorage.get(k));
            ts = parsed?.ts || 0;
          } catch {}
          items.push({ key: k, ts });
        }
      }
      items.sort((a, b) => a.ts - b.ts);
      for (let i = 0; i < Math.ceil(items.length * 0.4); i++) {
        safeStorage.remove(items[i].key);
      }
      safeStorage.set(cacheKey(path), JSON.stringify({ ts: Date.now(), data }));
    } catch {}
  }
  try {
    if (typeof f1IdbStore !== 'undefined' && f1IdbStore.set) {
      f1IdbStore.set(path, data);
    }
  } catch {}
}

function withTimeout(fnOrPromise, ms = CONFIG.timeout) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(new Error('timeout')), ms);
  const promise = typeof fnOrPromise === 'function' ? fnOrPromise(ctrl.signal) : fnOrPromise;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      ctrl.signal.addEventListener('abort', () => reject(new Error('timeout')), { once: true });
    })
  ]).finally(() => clearTimeout(timer));
}

async function safeReadJson(res) {
  const text = await res.text();
  if (!text || !text.trim()) {
    throw new Error('Empty response body');
  }
  return JSON.parse(text);
}

function isLiveSeasonPath(path) {
  const p = String(path || '');
  if (p.startsWith('current')) return true;
  const m = p.match(/^(\d{4})/);
  return Boolean(m && Number(m[1]) >= CURRENT_SEASON);
}

async function request(path, { force = false, signal = null, timeout = CONFIG.timeout, retries = CONFIG.retries, priority = false } = {}) {
  const inflightKey = `${path}::force=${Boolean(force)}`;
  if (state.inflight.has(inflightKey)) return state.inflight.get(inflightKey);

  const endpointUrl = `${CONFIG.api}/${path}`;

  const task = (async () => {
    if (SnapshotStore.needs(path)) await SnapshotStore.ensure(path);
    const cached = readCache(path, { allowStale: false });
    if (cached && !force) {
      return { data: cached.data, source: 'cache', ts: cached.ts, status: 'CACHE' };
    }

    if (!force && (!isLiveSeasonPath(path) || (typeof navigator !== 'undefined' && navigator.onLine === false))) {
      const snap = readSnapshot(path);
      if (snap) return snap;
    }

    if (!force && typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
      try {
        const fromIdb = await f1IdbStore.get(path);
        if (fromIdb && fromIdb.data) {
          const ttl = getEndpointTTL(path);
          const age = Date.now() - (fromIdb.ts || 0);
          if (age < ttl || (typeof navigator !== 'undefined' && navigator.onLine === false)) {
            return { data: fromIdb.data, source: 'indexeddb', ts: fromIdb.ts, status: 'INDEXEDDB' };
          }
        }
      } catch {}
    }

    const hourlyCount = getHourlyRequestCount();
    if (hourlyCount >= 450 && !force) {
      toast('Приближение к лимиту Jolpica API (>450/час). Включен автономный режим.');
      const stale = readCache(path, { allowStale: true });
      if (stale) return { data: stale.data, source: 'stale', ts: stale.ts, status: 'STALE' };
      const snap = readSnapshot(path);
      if (snap) {
        setStatus('snapshot', `ВСТРОЕННЫЙ СНЭПШОТ (СЕТЬ НЕДОСТУПНА) от ${fmtDate(snap.ts)}`);
        return { data: snap.data, source: 'snapshot', ts: snap.ts, status: 'SNAPSHOT' };
      }
    }

    let lastErr = null;
    let retry429Count = 0;
    let normalRetryCount = 0;
    const max429Retries = 3;
    const maxNormalRetries = Math.max(0, retries);

    while (true) {
      if (signal?.aborted) throw new Error('Aborted');

      let attemptResult = null;
      try {
        attemptResult = await queueRequest(async () => {
          const ctrl = new AbortController();
          const onAbort = () => ctrl.abort(new Error('Aborted'));
          if (signal) signal.addEventListener('abort', onAbort, { once: true });
          const timer = setTimeout(() => ctrl.abort(new Error('TimeoutError')), timeout);

          try {
            recordRateTimestamp();
            const res = await fetch(endpointUrl, {
              signal: ctrl.signal,
              headers: { Accept: 'application/json' }
            });

            if (res.status === 429) {
              const retryAfterHeader = parseInt(res.headers.get('Retry-After'), 10);
              const waitSec = Math.min(30, Number.isFinite(retryAfterHeader) ? retryAfterHeader : (1.5 * (retry429Count + 1)));
              return { is429: true, waitSec };
            }

            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await safeReadJson(res);
            if (!data || typeof data !== 'object') throw new Error('Malformed JSON response');
            return { ok: true, data };
          } finally {
            clearTimeout(timer);
            if (signal) signal.removeEventListener('abort', onAbort);
          }
        }, signal, priority);
      } catch (err) {
        lastErr = err;
        const isAbort = err.name === 'AbortError' || err.message === 'Aborted';
        if (isAbort || (err.message && (err.message.includes('HTTP 404') || err.message.includes('HTTP 400')))) {
          break;
        }
        if (normalRetryCount < maxNormalRetries) {
          normalRetryCount++;
          const backoff = Math.min(1000, (CONFIG.retryDelayMs || 250) * Math.pow(2, normalRetryCount));
          await new Promise(r => setTimeout(r, backoff));
          continue;
        }
        break;
      }

      if (attemptResult?.is429) {
        if (retry429Count < max429Retries) {
          retry429Count++;
          toast(`Лимит запросов Jolpica (429). Ожидание ${attemptResult.waitSec} сек…`);
          await new Promise(r => setTimeout(r, attemptResult.waitSec * 1000));
          continue;
        }
        lastErr = new Error(`HTTP 429 Rate Limit (Retry-After: ${attemptResult.waitSec}s)`);
        break;
      }

      if (attemptResult?.ok) {
        writeCache(path, attemptResult.data);
        Health.mark('jolpica', true);
        state.lastSync = Date.now();
        return { data: attemptResult.data, source: 'network', ts: state.lastSync, status: 'NETWORK' };
      }
      break;
    }

    if (lastErr) Health.mark('jolpica', false, { error: lastErr.message });

    const stale = readCache(path, { allowStale: true });
    if (stale) {
      return { data: stale.data, source: 'stale', ts: stale.ts, status: 'STALE', error: lastErr };
    }

    if (typeof f1IdbStore !== 'undefined' && f1IdbStore.get) {
      try {
        const idbEntry = await f1IdbStore.get(path);
        if (idbEntry && idbEntry.data) {
          setStatus('snapshot', `INDEXEDDB (СЕТЬ НЕДОСТУПНА) от ${fmtDate(idbEntry.ts)}`);
          return { data: idbEntry.data, source: 'indexeddb', ts: idbEntry.ts, status: 'INDEXEDDB_FALLBACK', error: lastErr };
        }
      } catch {}
    }

    const snap = readSnapshot(path);
    if (snap) {
      setStatus('snapshot', `ВСТРОЕННЫЙ СНЭПШОТ (СЕТЬ НЕДОСТУПНА) от ${fmtDate(snap.ts)}`);
      return { data: snap.data, source: 'snapshot', ts: snap.ts, status: 'SNAPSHOT', error: lastErr };
    }

    throw lastErr || new Error('Data unavailable');
  })();

  state.inflight.set(inflightKey, task);
  try {
    return await task;
  } finally {
    state.inflight.delete(inflightKey);
  }
}

const OPENF1_API = 'https://api.openf1.org/v1';
const OPENF1_FIRST_SEASON = 2023;

let _openF1Chain = Promise.resolve();
function openF1Fetch(path) {
  const run = async () => {
    for (let attempt = 0; attempt < 3; attempt++) {
      const res = await withTimeout(signal => fetch(`${OPENF1_API}/${path}`, { signal, headers: { Accept: 'application/json' } }), 10000);
      if (res.status === 404) return [];
      if (res.status === 429 && attempt < 2) {
        const ra = parseFloat(res.headers?.get?.('Retry-After'));
        const waitMs = Number.isFinite(ra) && ra >= 0 ? Math.min(3000, ra * 1000) : (800 * (attempt + 1));
        await new Promise(r => setTimeout(r, waitMs));
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return safeReadJson(res);
    }
  };
  const task = _openF1Chain.then(run);
  _openF1Chain = task.catch(() => {}).then(() => new Promise(r => setTimeout(r, 380)));
  return task;
}

const _openF1MemCache = new Map();
const _openF1Inflight = new Map();
const _openF1SessionCache = new Map();
const _openF1StintsBySession = new Map();
const _openF1RcBySession = new Map();

async function openF1Get(path, slim = null, { fresh: bypass = false } = {}) {
  const key = `openf1/${path}`;
  if (!bypass) {
    const fresh = readCache(key, { allowStale: false });
    if (fresh) return fresh.data;
    const mem = _openF1MemCache.get(key);
    if (mem && (Date.now() - mem.ts < CONFIG.ttl)) return mem.data;
    if (_openF1Inflight.has(key)) return _openF1Inflight.get(key);
  }
  const task = (async () => {
    try {
      const data = await openF1Fetch(path);
      const list = Array.isArray(data) ? (slim ? data.map(slim) : data) : [];
      if (!bypass) {
        _openF1MemCache.set(key, { ts: Date.now(), data: list });
        writeCache(key, list);
      }
      Health.mark('openf1', true);
      return list;
    } catch (err) {
      Health.mark('openf1', false, { error: err.message });
      if (!bypass) {
        const stale = readCache(key, { allowStale: true }) || _openF1MemCache.get(key);
        if (stale) return stale.data;
      }
      throw err;
    } finally {
      if (!bypass) _openF1Inflight.delete(key);
    }
  })();
  if (!bypass) _openF1Inflight.set(key, task);
  return task;
}


function readRaces(data) { return data?.MRData?.RaceTable?.Races || []; }
function readDrivers(data) { return data?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || []; }
function readTeams(data) { return data?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || []; }

function apiSource(result) {
  if (!result) return;
  if (result.source === 'network') {
    setStatus('updated', 'ОБНОВЛЕНО');
    const el = $('#syncTime');
    if (el) el.textContent = `Синхронизация: ${fmtDate(result.ts)}`;
  } else if (result.source === 'stale') {
    setStatus('offline', 'OFFLINE · КЭШ');
    toast('Сеть недоступна. Отображены сохранённые данные.');
  } else if (result.source === 'cache') {
    setStatus('cached', 'КЭШ АКТУАЛЕН');
  } else if (result.source === 'snapshot' && result.error) {
    setStatus('snapshot', `ВСТРОЕННЫЙ СНЭПШОТ (СЕТЬ НЕДОСТУПНА) от ${fmtDate(result.ts)}`);
    toast('Сеть недоступна. Отображены данные встроенного снэпшота.');
  } else if (result.source === 'snapshot') {
    setStatus('cached', 'АРХИВ СЕЗОНА · ВСТРОЕННЫЕ ДАННЫЕ');
  }
}

function seasonOptions() {
  const years = [];
  for (let y = CURRENT_SEASON; y >= CONFIG.seasonStart; y--) years.push(y);
  return years;
}

function fillSeasons() {
  const opts = seasonOptions().map(y => `<option value="${y}">${y}</option>`).join('');
  ['standingsSeason', 'calendarSeason', 'driverSeason', 'teamSeason', 'compareSeason'].forEach(id => {
    const el = $('#' + id);
    if (el) {
      el.innerHTML = opts;
      el.value = pageSeason(id.replace('Season', '').replace('driver', 'drivers').replace('team', 'teams'));
    }
  });
  const hist = $('#historySeason');
  if (hist) {
    const years = [];
    for (let y = CURRENT_SEASON; y >= 1950; y--) years.push(y);
    hist.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('');
    hist.value = state.seasons.history;
  }
}

async function loadSeasonBundle(season = state.season, { force = false, signal = null } = {}) {
  const settled = await Promise.allSettled([
    request(`${season}/driverstandings.json`, { force, signal }),
    request(`${season}/constructorstandings.json`, { force, signal }),
    request(`${season}.json`, { force, signal })
  ]);

  const [sRes, cRes, rRes] = settled;
  const s = sRes.status === 'fulfilled' ? sRes.value : null;
  const c = cRes.status === 'fulfilled' ? cRes.value : null;
  const r = rRes.status === 'fulfilled' ? rRes.value : null;

  const driversArr = s ? readDrivers(s.data) : [];
  const teamsArr = c ? readTeams(c.data) : [];
  const racesArr = r ? readRaces(r.data) : [];

  driversArr.data = driversArr;
  driversArr.status = s ? (s.status || 'UPDATED') : 'ERROR';
  driversArr.source = s ? (s.source || 'network') : 'none';
  driversArr.timestamp = s ? s.ts : null;
  driversArr.error = sRes.status === 'rejected' ? sRes.reason?.message : (s?.error?.message || null);

  teamsArr.data = teamsArr;
  teamsArr.status = c ? (c.status || 'UPDATED') : 'ERROR';
  teamsArr.source = c ? (c.source || 'network') : 'none';
  teamsArr.timestamp = c ? c.ts : null;
  teamsArr.error = cRes.status === 'rejected' ? cRes.reason?.message : (c?.error?.message || null);

  racesArr.data = racesArr;
  racesArr.status = r ? (r.status || 'UPDATED') : 'ERROR';
  racesArr.source = r ? (r.source || 'network') : 'none';
  racesArr.timestamp = r ? r.ts : null;
  racesArr.error = rRes.status === 'rejected' ? rRes.reason?.message : (r?.error?.message || null);

  const fulfilled = [s, c, r].filter(Boolean);
  if (fulfilled.length > 0 && fulfilled.some(x => x.source === 'snapshot' && x.error)) {
    const snap = getEmbeddedSnapshot();
    const snapDate = snap?._metadata?.generatedAt ? fmtDate(new Date(snap._metadata.generatedAt).getTime()) : '2026-10-13';
    setStatus('snapshot', `ВСТРОЕННЫЙ СНЭПШОТ (СЕТЬ НЕДОСТУПНА) от ${snapDate}`);
    toast('Сеть недоступна. Отображены данные встроенного снэпшота.');
  } else if (fulfilled.length === 3 && fulfilled.every(x => x.source === 'network')) {
    setStatus('updated', 'ОБНОВЛЕНО');
    const el = $('#syncTime');
    if (el) el.textContent = `Синхронизация: ${fmtDate(Date.now())}`;
  } else if (fulfilled.length > 0 && fulfilled.some(x => x.source === 'stale')) {
    setStatus('offline', 'OFFLINE · КЭШ');
    toast('Сеть недоступна. Отображены сохранённые данные.');
  } else if (fulfilled.length > 0 && fulfilled.every(x => x.source === 'cache')) {
    setStatus('cached', 'КЭШ АКТУАЛЕН');
  } else if (fulfilled.length === 3 && fulfilled.every(x => x.source === 'snapshot')) {
    setStatus('cached', 'АРХИВ СЕЗОНА · ВСТРОЕННЫЕ ДАННЫЕ');
  } else if (fulfilled.length === 3 && fulfilled.every(x => ['cache', 'indexeddb', 'network'].includes(x.source))) {
    setStatus('cached', 'КЭШ АКТУАЛЕН');
  } else if (fulfilled.length > 0 && fulfilled.length < 3) {
    setStatus('offline', 'ЧАСТИЧНЫЕ ДАННЫЕ');
  } else if (fulfilled.length === 0) {
    setStatus('offline', 'OFFLINE · ОШИБКА');
  }

  return {
    season,
    drivers: driversArr,
    teams: teamsArr,
    races: racesArr
  };
}

const NavMotion = {
  indicator: null,
  container: null,
  observer: null,

  init() {
    this.container = $('#nav');
    if (!this.container) return;
    this.indicator = this.container.querySelector('.nav-indicator');
    this.update(false);

    if (window.ResizeObserver) {
      this.observer = new ResizeObserver(() => this.update(false));
      this.observer.observe(this.container);
    } else {
      window.addEventListener('resize', () => this.update(false), { passive: true });
    }
  },

  update(animated = true) {
    const active = this.container?.querySelector('[data-tab].active');
    if (!active || !this.indicator) return;

    const left = active.offsetLeft;
    const width = active.offsetWidth;

    if (!animated) {
      this.indicator.style.transition = 'none';
      this.indicator.style.transform = `translate3d(${left}px, 0, 0)`;
      this.indicator.style.width = `${width}px`;
      void this.indicator.offsetWidth;
      this.indicator.style.transition = '';
    } else {
      this.indicator.style.transform = `translate3d(${left}px, 0, 0)`;
      this.indicator.style.width = `${width}px`;
    }

    const navEl = this.container.closest('nav') || document.querySelector('header nav');
    if (navEl) {
      const targetLeft = active.offsetLeft - (navEl.clientWidth - active.offsetWidth) / 2;
      navEl.scrollLeft = Math.max(0, targetLeft);
    }
  }
};

function animateCountUp(el, endVal, { decimals = 0, duration = 600 } = {}) {
  if (!el) return;
  const end = Number(endVal);
  if (Number.isNaN(end)) { el.textContent = String(endVal); return; }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = decimals ? end.toFixed(decimals) : end.toLocaleString('ru-RU');
    return;
  }
  const startTime = performance.now();
  const step = now => {
    const progress = Math.min(1, (now - startTime) / duration);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = end * ease;
    el.textContent = decimals ? current.toFixed(decimals) : Math.round(current).toLocaleString('ru-RU');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = decimals ? end.toFixed(decimals) : end.toLocaleString('ru-RU');
  };
  requestAnimationFrame(step);
}

const Skeletons = {
  table(rows = 6, cols = 4) {
    let r = '';
    for (let i = 0; i < rows; i++) {
      r += `<tr>${Array(cols).fill('<td><div class="skeleton skeleton-text"></div></td>').join('')}</tr>`;
    }
    return `<div class="table-wrap"><table><thead><tr>${Array(cols).fill('<th><div class="skeleton skeleton-text" style="width:60px"></div></th>').join('')}</tr></thead><tbody>${r}</tbody></table></div>`;
  },
  cards(count = 6) {
    return `<div class="driver-grid">${Array(count).fill('<div class="skeleton-card"><div class="skeleton skeleton-title"></div><div class="skeleton skeleton-text"></div><div class="skeleton skeleton-text" style="width:80%"></div></div>').join('')}</div>`;
  }
};

const ImageObserver = {
  instance: null,
  get() {
    if (!this.instance && window.IntersectionObserver) {
      this.instance = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '160px' });
    }
    return this.instance;
  },
  observeAll() {
    const io = this.get();
    const imgs = $$('[data-wiki]:not([data-loaded])');
    if (!io) { imgs.forEach(loadImage); return; }
    imgs.forEach(i => io.observe(i));
  }
};

async function loadImage(el) {
  const url = el.dataset.wiki;
  if (!url || el.dataset.loaded) return;
  el.dataset.loaded = '1';
  try {
    const title = decodeURIComponent(url.split('/wiki/')[1] || '');
    const cache = state.imageCache.drivers.get(title);
    const data = cache || await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`).then(r => r.ok ? r.json() : null);
    if (data?.thumbnail?.source) {
      state.imageCache.drivers.set(title, data);
      const img = document.createElement('img');
      img.src = data.thumbnail.source;
      img.alt = `Фото ${el.parentElement?.querySelector('h3')?.textContent || 'пилота'}`;
      img.className = 'avatar';
      img.loading = 'lazy';
      el.replaceWith(img);
    }
  } catch {
    el.removeAttribute('data-wiki');
  }
}

function chartAnimation(ms = 900) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return { duration: 0 };
  return { duration: ms, easing: 'easeOutCubic', delay: ctx => (ctx.type === 'data' && ctx.mode === 'default' ? Math.min(ctx.dataIndex, 20) * 45 : 0) };
}

function drawChart(id, type, labels, datasets, opts = {}) {
  if (ChartLib.waiting()) return void ChartLib.then(() => drawChart(id, type, labels, datasets, opts));
  const canvas = $('#' + id);
  if (!canvas) return;
  if (!window.Chart) {
    const box = canvas.closest('.chart-box') || canvas.parentElement;
    if (box) {
      let tableHtml = '<div class="table-wrap" style="overflow-x:auto;"><table class="data-table"><thead><tr><th>Параметр</th>';
      (labels || []).forEach(l => { tableHtml += `<th>${esc(l)}</th>`; });
      tableHtml += '</tr></thead><tbody>';
      (datasets || []).forEach(ds => {
        tableHtml += `<tr><td><strong>${esc(ds.label || 'Показатель')}</strong></td>`;
        (ds.data || []).forEach(val => {
          tableHtml += `<td>${val !== null && val !== undefined ? esc(val) : '—'}</td>`;
        });
        tableHtml += '</tr>';
      });
      tableHtml += '</tbody></table></div>';
      box.innerHTML = tableHtml;
    }
    return;
  }
  if (state.charts[id]) state.charts[id].destroy();

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const tickColor = isLight ? '#566173' : '#8d98a7';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)';

  state.charts[id] = new Chart(canvas, {
    type,
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: chartAnimation(),
      plugins: {
        legend: {
          labels: { color: tickColor, font: { family: 'Inter', size: 12, weight: 600 } }
        }
      },
      scales: {
        x: { ticks: { color: tickColor, font: { family: 'Inter' } }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { color: tickColor, font: { family: 'Inter' } }, grid: { color: gridColor } }
      },
      ...opts
    }
  });
}

function updateChartsTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const tickColor = isLight ? '#566173' : '#8d98a7';
  const gridColor = isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)';
  const tooltipBg = isLight ? '#ffffff' : 'rgba(0, 0, 0, 0.8)';
  const scaleBorderColor = isLight ? '#d8e0ec' : 'rgba(255, 255, 255, 0.1)';

  if (window.Chart && Chart.defaults) {
    Chart.defaults.color = tickColor;
    if (Chart.defaults.borderColor) Chart.defaults.borderColor = gridColor;
  }

  Object.values(state.charts).forEach(c => {
    if (!c || typeof c.update !== 'function') return;
    if (!c.canvas || !c.ctx || !c.canvas.isConnected) return;
    if (c.options?.plugins?.legend?.labels) c.options.plugins.legend.labels.color = tickColor;
    if (c.options?.plugins?.tooltip) {
      c.options.plugins.tooltip.backgroundColor = tooltipBg;
      c.options.plugins.tooltip.titleColor = isLight ? '#111418' : '#ffffff';
      c.options.plugins.tooltip.bodyColor = isLight ? '#111418' : '#ffffff';
    }
    if (c.options?.scales?.x) {
      if (!c.options.scales.x.border) c.options.scales.x.border = {};
      c.options.scales.x.border.color = scaleBorderColor;
      if (c.options.scales.x.ticks) c.options.scales.x.ticks.color = tickColor;
    }
    if (c.options?.scales?.y) {
      if (!c.options.scales.y.border) c.options.scales.y.border = {};
      c.options.scales.y.border.color = scaleBorderColor;
      if (c.options.scales.y.ticks) c.options.scales.y.ticks.color = tickColor;
      if (c.options.scales.y.grid) c.options.scales.y.grid.color = gridColor;
    }
    try { c.update(); } catch(e) {}
  });
}

function renderDriverTable(list, limit = 22, season = state.season) {
  if (!list.length) return '<div class="empty"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:6px 0 0">Для выбранного сезона таблица пилотов недоступна.</p></div>';
  const leaderPtsRaw = Number(list[0]?.points);
  const leaderPoints = Number.isFinite(leaderPtsRaw) ? leaderPtsRaw : 0;

  const rows = list.slice(0, limit).map((x, idx) => {
    const pos = Number(x.position) || idx + 1;
    const badgeClass = pos === 1 ? 'p1' : pos === 2 ? 'p2' : pos === 3 ? 'p3' : '';
    const team = x.Constructors?.[0]?.name || '—';
    const color = teamColor(team);
    const pts = Number(x.points) || 0;
    const gap = idx === 0 ? 'Лидер' : `-${fmtNum(leaderPoints - pts)}`;

    return `<tr data-driver="${esc(x.Driver.driverId)}" data-season="${esc(season)}" tabindex="0" class="stagger-item${Favs.has('driver', x.Driver.driverId) ? ' fav-row' : ''}" style="--stagger-idx:${idx}">
      <td style="width:40px"><span class="pos-badge ${badgeClass}">${pos}</span></td>
      <td>
        <div class="team-cell">
          <span class="team-livery-bar" style="background:${color}"></span>
          <span class="cell-name"><b>${esc(driverName(x.Driver))}</b><small class="cell-sub">${esc(team)}</small><span class="pts-share" aria-hidden="true"><i style="width:${(leaderPoints ? Math.max(2, pts / leaderPoints * 100) : 0).toFixed(1)}%;background:${color}"></i></span></span>
        </div>
      </td>
      <td class="col-team">${esc(team)}</td>
      <td class="num"><b>${fmtNum(x.points)}</b></td>
      <td class="num gap-cell col-gap">${gap}</td>
      <td class="num col-wins">${fmtNum(x.wins)}</td>
    </tr>`;
  }).join('');

  return `<table>
    <thead>
      <tr>
        <th>#</th>
        <th>Пилот</th>
        <th class="col-team">Команда</th>
        <th class="num">Очки</th>
        <th class="num col-gap">Отрыв</th>
        <th class="num col-wins">Победы</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderTeamTable(list, season = state.season, limit = 12) {
  if (!list.length) return '<div class="empty"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:6px 0 0">Для выбранного сезона таблица конструкторов недоступна.</p></div>';
  const leaderPtsRaw = Number(list[0]?.points);
  const leaderPoints = Number.isFinite(leaderPtsRaw) ? leaderPtsRaw : 0;

  const rows = list.slice(0, limit).map((x, idx) => {
    const pos = Number(x.position) || idx + 1;
    const badgeClass = pos === 1 ? 'p1' : pos === 2 ? 'p2' : pos === 3 ? 'p3' : '';
    const color = teamColor(x.Constructor.name);
    const pts = Number(x.points) || 0;
    const gap = idx === 0 ? 'Лидер' : `-${fmtNum(leaderPoints - pts)}`;

    return `<tr data-team="${esc(x.Constructor.constructorId)}" data-season="${esc(season)}" tabindex="0" class="stagger-item${Favs.has('team', x.Constructor.constructorId) ? ' fav-row' : ''}" style="--stagger-idx:${idx}">
      <td style="width:40px"><span class="pos-badge ${badgeClass}">${pos}</span></td>
      <td>
        <div class="team-cell">
          <span class="team-livery-bar" style="background:${color}"></span>
          <b>${esc(x.Constructor.name)}</b>
        </div>
      </td>
      <td class="num"><b>${fmtNum(x.points)}</b></td>
      <td class="num gap-cell col-gap">${gap}</td>
      <td class="num col-wins">${fmtNum(x.wins)}</td>
    </tr>`;
  }).join('');

  return `<table>
    <thead>
      <tr>
        <th>#</th>
        <th>Конструктор</th>
        <th class="num">Очки</th>
        <th class="num col-gap">Отрыв</th>
        <th class="num col-wins">Победы</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderLastRace(races) {
  const currentSeason = Number(races[0]?.season) || Number(state.season) || CURRENT_SEASON;
  const done = races.filter(r => {
    const rSeason = Number(r.season || currentSeason);
    const hasKnownResults = Boolean(r.Results?.length || readSnapshot(`${rSeason}/${r.round}/results.json`));
    return (hasKnownResults || isRaceCompleted({ ...r, season: rSeason })) && Number.isFinite(scheduleMoment(r)) && scheduleMoment(r) <= Date.now();
  });
  const r = done.at(-1);
  if (!r) {
    if (!races?.length) {
      $('#lastRace').innerHTML = '<div class="empty"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:6px 0 0">В выбранном сезоне данные этапов недоступны.</p></div>';
    } else {
      $('#lastRace').innerHTML = '<div class="empty">В выбранном сезоне ещё нет завершённых этапов.</div>';
    }
    return;
  }
  $('#lastRace').innerHTML = `<div class="last-race-card">
    ${trackImg(r.Circuit, 'track-thumb')}
    <div class="last-race-info">
      <div class="eyebrow">Раунд ${esc(r.round)}</div>
      <h3 style="margin:2px 0 4px">${esc(ruGP(r.raceName))}</h3>
      <p class="subtle" style="margin:0 0 10px">${esc(r.Circuit?.circuitName)} · ${fmtSchedule(r)}</p>
      <button class="btn secondary" data-race="${esc(r.round)}" data-season="${esc(state.season)}" style="font-size:12px;padding:6px 12px">Открыть результаты</button>
    </div>
  </div><div class="last-podium" id="lastPodium"></div>`;
  $('#lastRace').classList.remove('empty');
  const rSeason = Number(r.season || currentSeason);
  (async () => {
    try {
      const path = `${rSeason}/${r.round}/results.json`;
      const res = readSnapshot(path) || await request(path);
      const results = readRaces(res.data)[0]?.Results || [];
      const box = $('#lastPodium');
      if (box?.isConnected) box.innerHTML = racePodiumHtml(results);
    } catch { /* the card stays without a podium */ }
  })();
}

function evaluateSessionMoment(sessionObj, fallbackName) {
  if (!sessionObj) return { name: fallbackName, time: 'Н/Д', badgeClass: 'scheduled', badgeLabel: 'ОЖИДАЕТСЯ' };
  const sDate = sessionObj.date;
  const sTime = sessionObj.time;
  let moment = NaN;
  if (sDate) {
    moment = Date.parse(sTime ? `${sDate}T${sTime.replace('Z', '')}Z` : `${sDate}T12:00:00Z`);
  }
  const now = Date.now();
  let badgeClass = 'scheduled';
  let badgeLabel = 'ОЖИДАЕТСЯ';

  if (Number.isFinite(moment)) {
    const twoHours = 2 * 60 * 60 * 1000;
    if (now >= moment && now <= moment + twoHours) {
      badgeClass = 'live';
      badgeLabel = 'В ЭФИРЕ';
    } else if (now > moment + twoHours) {
      badgeClass = 'completed';
      badgeLabel = 'ЗАВЕРШЕНО';
    }
  }

  return {
    name: fallbackName,
    time: sTime ? sTime.slice(0, 5) : 'Н/Д',
    badgeClass,
    badgeLabel
  };
}

function nextRace(races) {
  return races.find(r => Number.isFinite(scheduleMoment(r)) && scheduleMoment(r) > Date.now());
}

function renderNext(races) {
  const n = nextRace(races);
  if (window.countdownTimer) {
    clearInterval(window.countdownTimer);
    window.countdownTimer = null;
  }

  if (!n) {
    if (!races?.length) {
      $('#nextName').textContent = 'НЕТ ДАННЫХ';
      $('#nextMeta').textContent = 'Данные расписания календаря временно недоступны.';
      $('#nextState').textContent = 'НЕТ ДАННЫХ';
    } else {
      $('#nextName').textContent = 'Сезон завершён';
      $('#nextMeta').textContent = 'Все этапы календаря состоялись. Выберите архивный сезон.';
      $('#nextState').textContent = 'СЕЗОН ЗАВЕРШЁН';
    }
    $('#cdDays').textContent = '--';
    $('#cdHours').textContent = '--';
    $('#cdMins').textContent = '--';
    $('#cdSecs').textContent = '--';
    const noTrack = $('#nextTrack'); if (noTrack) noTrack.hidden = true;
    const noLeg = $('#heroSectorsLegend'); if (noLeg) noLeg.innerHTML = '';
    return;
  }

  const exact = raceTime(n);
  const trackBg = $('#nextTrack');
  if (trackBg) {
    const cid = String(n.Circuit?.circuitId || '').replace(/[^a-zA-Z0-9_-]/g, '');
    const known = Boolean(cid && CIRCUIT_PATHS[TRACK_ALIASES[cid] || cid]);
    const canon = TRACK_ALIASES[cid] || cid;
    if (known && trackBg.dataset.drawn !== canon) {
      trackBg.innerHTML = heroTrackSvg(canon);
      trackBg.dataset.drawn = canon;
      startTrackLap(trackBg);
      initTrackSectorHover(trackBg, canon);
      GhostLap.mount($('#heroLapHud'), trackBg, canon);
    }
    trackBg.hidden = !known;
    if (!known) {
      const leg = $('#heroSectorsLegend');
      if (leg) leg.innerHTML = '';
    }
  }
  const nextNameVal = ruGP(n.raceName);
  if ($('#nextName').textContent !== nextNameVal) $('#nextName').textContent = nextNameVal;
  const nextMetaVal = `${n.Circuit?.circuitName || 'Автодром F1'} · ${fmtSchedule(n)}`;
  if ($('#nextMeta').textContent !== nextMetaVal) $('#nextMeta').textContent = nextMetaVal;

  const isSprint = n.Sprint ? true : false;
  const sFP1 = evaluateSessionMoment(n.FirstPractice, 'FP1 (1-я тренировка)');
  const sFP2 = evaluateSessionMoment(n.SecondPractice || n.SprintQualifying, isSprint ? 'Sprint Qualifying' : 'FP2 (2-я тренировка)');
  const sFP3 = evaluateSessionMoment(n.ThirdPractice || n.Sprint, isSprint ? 'Sprint Race' : 'FP3 (3-я тренировка)');
  const sQual = evaluateSessionMoment(n.Qualifying, 'Квалификация Гран-при');
  const sRace = evaluateSessionMoment({ date: n.date, time: n.time }, 'Гонка');

  const allSessions = [sFP1, sFP2, sFP3, sQual, sRace];
  const activeSession = allSessions.find(s => s.badgeClass === 'live');
  const nextStateEl = $('#nextState');
  if (nextStateEl) {
    if (activeSession) {
      nextStateEl.textContent = `● LIVE: ${activeSession.name}`;
      nextStateEl.className = 'pill pill-live interactive';
    } else {
      nextStateEl.textContent = exact ? 'РАСПИСАНИЕ СЕССИЙ' : 'ДАТА ОПУБЛИКОВАНА';
      nextStateEl.className = 'pill interactive';
    }
    nextStateEl.setAttribute('role', 'button');
    nextStateEl.setAttribute('tabindex', '0');
    nextStateEl.setAttribute('aria-controls', 'weekendFold');
    nextStateEl.setAttribute('title', 'Показать / скрыть расписание уикенда');
    const foldEl = document.getElementById('weekendFold');
    nextStateEl.setAttribute('aria-expanded', foldEl?.open ? 'true' : 'false');

    if (!nextStateEl.dataset.bound) {
      nextStateEl.dataset.bound = '1';
      const toggleFold = () => {
        const f = document.getElementById('weekendFold');
        if (!f) return;
        f.open = !f.open;
        safeStorage.set('f1tl:foldOpen', f.open ? '1' : '0');
        nextStateEl.setAttribute('aria-expanded', f.open ? 'true' : 'false');
        if (f.open) {
          f.classList.remove('highlight-flash');
          void f.offsetWidth;
          f.classList.add('highlight-flash');
          f.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      };
      nextStateEl.addEventListener('click', toggleFold);
      nextStateEl.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          toggleFold();
        }
      });
      if (foldEl && !foldEl.dataset.boundSync) {
        foldEl.dataset.boundSync = '1';
        foldEl.addEventListener('toggle', () => {
          nextStateEl.setAttribute('aria-expanded', foldEl.open ? 'true' : 'false');
          safeStorage.set('f1tl:foldOpen', foldEl.open ? '1' : '0');
        });
      }
    }
  }
  WeekendWeather.load(n);

  const wContainer = document.getElementById('raceWeekendContainer');
  if (wContainer && n) {
    const rowClass = s => `session-row ${s.badgeClass === 'live' ? 'session-live' : (s.badgeClass === 'scheduled' ? 'session-upcoming' : '')}`;
    wContainer.innerHTML = `
      <div class="weekend-grid">
        <div class="weekend-day-card">
          <div class="weekend-day-title">Пятница · Сессии</div>
          <div class="${rowClass(sFP1)}"><span class="session-name">${esc(sFP1.name)}</span><span class="session-time">${esc(sFP1.time)}</span><span class="session-badge ${esc(sFP1.badgeClass)}">${esc(sFP1.badgeLabel)}</span></div>
          <div class="${rowClass(sFP2)}"><span class="session-name">${esc(sFP2.name)}</span><span class="session-time">${esc(sFP2.time)}</span><span class="session-badge ${esc(sFP2.badgeClass)}">${esc(sFP2.badgeLabel)}</span></div>
        </div>
        <div class="weekend-day-card">
          <div class="weekend-day-title">Суббота · ${isSprint ? 'Спринт и Квалификация' : 'Квалификация'}</div>
          <div class="${rowClass(sFP3)}"><span class="session-name">${esc(sFP3.name)}</span><span class="session-time">${esc(sFP3.time)}</span><span class="session-badge ${esc(sFP3.badgeClass)}">${esc(sFP3.badgeLabel)}</span></div>
          <div class="${rowClass(sQual)}"><span class="session-name">${esc(sQual.name)}</span><span class="session-time">${esc(sQual.time)}</span><span class="session-badge ${esc(sQual.badgeClass)}">${esc(sQual.badgeLabel)}</span></div>
        </div>
        <div class="weekend-day-card">
          <div class="weekend-day-title">Воскресенье · Гонка</div>
          <div class="${rowClass(sRace)}"><span class="session-name">${esc(sRace.name)}</span><span class="session-time">${esc(sRace.time)}</span><span class="session-badge ${esc(sRace.badgeClass)}">${esc(sRace.badgeLabel)}</span></div>
        </div>
      </div>
    `;
  }

  const fold = document.getElementById('weekendFold');
  if (fold) {
    const savedFold = safeStorage.get('f1tl:foldOpen');
    if (savedFold === '1' && !fold.open) fold.open = true;
    else if (savedFold === '0' && fold.open) fold.open = false;
    const hint = document.getElementById('weekendFoldHint');
    if (hint && hint.textContent !== ruGP(n.raceName)) hint.textContent = ruGP(n.raceName);
  }

  if (exact) {
    startCountdown(exact);
  } else {
    $('#cdDays').textContent = '--';
    $('#cdHours').textContent = '--';
    $('#cdMins').textContent = '--';
    $('#cdSecs').textContent = '--';
  }
}

function startCountdown(t) {
  if (window.countdownTimer) clearInterval(window.countdownTimer);
  const tick = () => {
    const diff = t - Date.now();
    if (diff <= 0) {
      $('#cdDays').textContent = '00';
      $('#cdHours').textContent = '00';
      $('#cdMins').textContent = '00';
      $('#cdSecs').textContent = '00';
      $('#nextState').textContent = 'СЕССИЯ НАЧАЛАСЬ';
      clearInterval(window.countdownTimer);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    const pad = n => String(n).padStart(2, '0');
    const put = (id, v) => {
      const el = $(id);
      if (!el || el.textContent === v) return;
      el.textContent = v;
      if (!Motion.reduced()) { el.classList.remove('tick'); void el.offsetWidth; el.classList.add('tick'); }
    };
    put('#cdDays', pad(days));
    put('#cdHours', pad(hours));
    put('#cdMins', pad(mins));
    put('#cdSecs', pad(secs));
  };
  tick();
  window.countdownTimer = setInterval(tick, 1000);
}

function resolveCanonicalCircuitId(circuit) {
  const raw = String(circuit?.circuitId || circuit?.id || '').trim().toLowerCase();
  return (typeof TRACK_ALIASES !== 'undefined' && TRACK_ALIASES[raw]) || raw;
}

function getCircuitRegion(race) {
  const canon = resolveCanonicalCircuitId(race?.Circuit);
  if (canon && CIRCUIT_REGIONS[canon]) return CIRCUIT_REGIONS[canon];
  const country = String(race?.Circuit?.Location?.country || '').toLowerCase();
  if (/usa|united states|canada|mexico|brazil|сша|канада|мексика|бразилия/.test(country)) return 'AMERICAS';
  if (/bahrain|saudi|qatar|uae|emirates|japan|china|singapore|azerbaijan|australia|malaysia|бахрейн|саудов|катар|оаэ|япония|китай|сингапур|азербайджан|австралия/.test(country)) return 'ASIA_ME';
  return 'EUROPE';
}

function isNightRace(race) {
  const canon = resolveCanonicalCircuitId(race?.Circuit);
  if (canon && NIGHT_CIRCUITS.has(canon)) return true;
  const rName = String(race?.raceName || '').toLowerCase();
  return /bahrain|saudi|singapore|qatar|las vegas|sakhir/.test(rName);
}

function calendarTrackContourHtml(circuit, roundNum = '') {
  const canon = resolveCanonicalCircuitId(circuit);
  const sec = (canon && CIRCUIT_SECTORS[canon]) || null;
  const path = sec?.path || (canon && CIRCUIT_PATHS[canon]) || '';
  const vb = sec?.viewBox || (canon && CIRCUIT_VIEWBOXES[canon]) || '0 0 500 500';
  const cname = String(circuit?.circuitName || circuit?.name || canon || 'Трасса').replace(/[&<>"']/g, '');
  const dir = sec?.direction || (CCW_CIRCUITS.has(canon) ? 'ccw' : 'cw');
  const dirArrow = dir === 'ccw' ? '↺' : '↻';
  const dirLabel = dir === 'ccw' ? 'против часовой' : 'по часовой';
  const dirFull = dir === 'ccw' ? 'Против часовой стрелки' : 'По часовой стрелке';

  if (!path) {
    return `<div class="track-thumb track-img cal-track-wrap cal-track-empty" data-circuit-id="${esc(canon)}" title="${esc(cname)}: Нет данных">
      <span class="subtle" style="font-size:12px;font-weight:700">Нет данных</span>
    </div>`;
  }

  return `<div class="track-thumb track-img cal-track-wrap" data-circuit-id="${esc(canon)}" data-direction="${dir}" title="${esc(cname)} · Направление: ${dirFull}">
    <svg class="cal-track-svg" viewBox="${esc(vb)}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Контур трассы ${esc(cname)} (${dirFull})">
      <path class="cal-track-glow" d="${path}"/>
      <path class="cal-track-base" d="${path}"/>
      <path class="cal-track-main" d="${path}"/>
    </svg>
    <div class="cal-track-dir" data-dir="${dir}" aria-label="Направление движения: ${dirFull}">
      <span>${dirArrow} ${dirLabel}</span>
    </div>
  </div>`;
}

let _activeCalendarFilter = 'ALL';

function applyCalendarFilter(filterKey = _activeCalendarFilter) {
  _activeCalendarFilter = filterKey || 'ALL';
  const filterBar = document.getElementById('calendarFilters');
  if (filterBar) {
    filterBar.querySelectorAll('.cal-filter-btn').forEach(btn => {
      const isAct = btn.dataset.calFilter === _activeCalendarFilter;
      btn.classList.toggle('active', isAct);
      btn.setAttribute('aria-pressed', isAct ? 'true' : 'false');
    });
  }
  const listEl = document.getElementById('calendarList');
  if (!listEl) return;
  const cards = listEl.querySelectorAll('.race-card');
  let visibleCount = 0;
  cards.forEach(card => {
    let match = true;
    if (_activeCalendarFilter === 'SPRINT') match = card.dataset.sprint === '1';
    else if (_activeCalendarFilter === 'NIGHT') match = card.dataset.night === '1';
    else if (_activeCalendarFilter === 'EUROPE') match = card.dataset.region === 'EUROPE';
    else if (_activeCalendarFilter === 'AMERICAS') match = card.dataset.region === 'AMERICAS';
    else if (_activeCalendarFilter === 'ASIA_ME') match = card.dataset.region === 'ASIA_ME';
    card.hidden = !match;
    card.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });
  let emptyFilterNote = listEl.querySelector('.cal-filter-empty');
  if (cards.length > 0 && visibleCount === 0) {
    if (!emptyFilterNote) {
      emptyFilterNote = document.createElement('div');
      emptyFilterNote.className = 'empty cal-filter-empty';
      emptyFilterNote.textContent = 'Нет этапов, соответствующих выбранному тактическому фильтру.';
      listEl.appendChild(emptyFilterNote);
    }
    emptyFilterNote.hidden = false;
  } else if (emptyFilterNote) {
    emptyFilterNote.hidden = true;
  }
}
if (typeof window !== 'undefined') window.applyCalendarFilter = applyCalendarFilter;

function bindCalendarFilterBar(races = []) {
  const filterBar = document.getElementById('calendarFilters');
  if (!filterBar) return;
  const totalCount = races.length || 24;
  const sprintCount = races.filter(r => Boolean(r.Sprint)).length;
  const allBtn = filterBar.querySelector('[data-cal-filter="ALL"]');
  if (allBtn) allBtn.textContent = `Все (${totalCount})`;
  const sprintBtn = filterBar.querySelector('[data-cal-filter="SPRINT"]');
  if (sprintBtn) sprintBtn.textContent = `Спринты (${sprintCount})`;

  if (!filterBar.dataset.bound) {
    filterBar.dataset.bound = '1';
    filterBar.addEventListener('click', e => {
      const btn = e.target.closest('.cal-filter-btn');
      if (!btn) return;
      applyCalendarFilter(btn.dataset.calFilter || 'ALL');
    });
  }
}

function renderCalendar(races) {
  const deferFn = typeof requestIdleCallback === 'function' ? cb => requestIdleCallback(cb, { timeout: 600 }) : cb => setTimeout(cb, 32);
  deferFn(() => {
    SeasonMap.render(races, Number(races[0]?.season) || Number(state.seasons?.calendar) || CURRENT_SEASON);
  });
  const now = Date.now();
  const currentCalSeason = Number(state.seasons?.calendar) || (races[0] ? Number(races[0].season) : CURRENT_SEASON);
  const nextIdx = races.findIndex(r => scheduleMoment(r) > now);
  const doneCount = races.filter(r => {
    const rSeason = Number(r.season || currentCalSeason);
    const hasKnownResults = Boolean(r.Results?.length || readSnapshot(`${rSeason}/${r.round}/results.json`));
    return (hasKnownResults || isRaceCompleted({ ...r, season: rSeason })) && scheduleMoment(r) <= now;
  }).length;
  const pct = races.length ? Math.round(doneCount / races.length * 100) : 0;
  PageMotif.stat('calendar', `${doneCount}/${races.length}`, 'этапов позади');

  $('#seasonProgress').innerHTML = `<div class="stat-grid" style="margin-bottom:18px">
    <div class="stat"><b>${doneCount} / ${races.length}</b><span>этапов завершено</span></div>
    <div class="stat"><b>${pct}%</b><span>прогресс сезона</span></div>
    <div class="stat"><b>${nextIdx >= 0 ? nextIdx + 1 : '—'}</b><span>следующий раунд</span></div>
  </div>`;

  bindCalendarFilterBar(races);

  $('#calendarList').innerHTML = races.length ? races.map((r, i) => {
    const t = scheduleMoment(r);
    const rSeason = Number(r.season || currentCalSeason);
    const hasKnownResults = Boolean(r.Results?.length || readSnapshot(`${rSeason}/${r.round}/results.json`));
    const past = (hasKnownResults || isRaceCompleted({ ...r, season: rSeason })) && Number.isFinite(t) && t <= now;
    const isNext = i === nextIdx;
    const isSprint = Boolean(r.Sprint);
    const isNight = isNightRace(r);
    const region = getCircuitRegion(r);
    const canon = resolveCanonicalCircuitId(r.Circuit);
    const dir = CCW_CIRCUITS.has(canon) ? 'ccw' : 'cw';
    const badge = (isNext
      ? '<span class="pill" style="color:var(--red2);border-color:var(--red)">СЛЕДУЮЩИЙ GP</span>'
      : past
        ? '<span class="pill" style="color:var(--green)">✓ Завершён</span>'
        : '<span class="pill">Предстоит</span>') +
      (isSprint ? ' <span class="pill sprint-pill" title="Уикенд со спринтом">Спринт</span>' : '') +
      (isNight ? ' <span class="pill night-pill" title="Ночная гонка">🌙 Ночная</span>' : '');

    return `<article class="race-card ${past ? 'done' : ''} ${isNext ? 'next' : ''} stagger-item" style="--stagger-idx:${i}" data-race="${esc(r.round)}" data-season="${esc(rSeason)}" data-sprint="${isSprint ? '1' : '0'}" data-night="${isNight ? '1' : '0'}" data-region="${region}" data-direction="${dir}" data-circuit-id="${esc(canon)}" tabindex="0">
      ${calendarTrackContourHtml(r.Circuit, r.round)}
      <div class="race-round">${esc(r.round)}</div>
      <div class="race-info">
        <h3>${esc(ruGP(r.raceName))}</h3>
        <p>${esc(r.Circuit?.circuitName || 'Трасса')} · ${esc(r.Circuit?.Location?.locality || '')}, ${esc(ruCountry(r.Circuit?.Location?.country || ''))}</p>
        <p style="color:var(--red2);font-weight:700">${fmtSchedule(r)}</p>
      </div>
      <div class="race-badge">${badge}</div>
    </article>`;
  }).join('') : '<div class="empty"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:6px 0 0">Календарь для выбранного сезона временно недоступен.</p></div>';

  if (_activeCalendarFilter !== 'ALL') {
    applyCalendarFilter(_activeCalendarFilter);
  }
  CalendarPast.apply(races.length && nextIdx > 0 ? $$('#calendarList .race-card.done').length : 0);
}

// Прошедшие этапы сезона свёрнуты под одну кнопку: открыв календарь, человек сразу видит ближайший этап.
// Выбор «показать» живёт до перезагрузки страницы.
const CalendarPast = {
  open: false,
  apply(n) {
    const list = $('#calendarList');
    if (!list) return;
    let btn = $('#calendarPastToggle');
    if (!n) { list.classList.remove('hide-past'); btn?.remove(); return; }
    if (!btn) {
      list.insertAdjacentHTML('beforebegin', '<button type="button" class="btn secondary cal-past-toggle" id="calendarPastToggle" aria-controls="calendarList"></button>');
      btn = $('#calendarPastToggle');
      btn.addEventListener('click', () => { this.open = !this.open; this.apply($$('#calendarList .race-card.done').length); });
    }
    list.classList.toggle('hide-past', !this.open);
    btn.setAttribute('aria-expanded', String(this.open));
    btn.textContent = `${this.open ? 'Скрыть' : 'Показать'} прошедшие · ${n}`;
  }
};

function renderDrivers(list, season = state.season) {
  const q = ($('#driverSearch')?.value || '').trim().toLowerCase();
  const filtered = list.filter(x => {
    const n = driverName(x.Driver).toLowerCase();
    const id = (x.Driver.driverId || '').toLowerCase();
    const num = String(x.Driver.permanentNumber || '');
    return !q || n.includes(q) || id.includes(q) || num === q;
  });

  const maxPoints = Number(list[0]?.points) || 1;

  $('#driverGrid').innerHTML = filtered.length ? filtered.map((x, idx) => {
    const d = x.Driver;
    const initials = `${(d.givenName || '?')[0]}${(d.familyName || '?')[0]}`;
    const tName = x.Constructors?.[0]?.name || '—';
    const color = teamColor(tName);
    const pts = Number(x.points) || 0;
    const pct = Math.min(100, Math.max(0, pts / maxPoints * 100));

    return `<article class="driver-card stagger-item${Favs.has('driver', d.driverId) ? ' fav-row' : ''}" style="--stagger-idx:${idx};--team:${color};--ta:${teamPalette(tName).a}" data-driver="${esc(d.driverId)}" data-season="${esc(season)}" tabindex="0">
      <span class="driver-bignum" aria-hidden="true">${esc(d.permanentNumber || '')}</span>
      <div class="driver-top">
        <div class="avatar" data-code="${esc(d.code || '')}" data-wiki="${esc(d.url || '')}">${esc(initials)}</div>
        <div>
          <h3>${esc(driverName(d))}</h3>
          <p>${flagOf(d.nationality) ? `<span class="dp-flag">${flagOf(d.nationality)}</span> ` : ''}${esc(ruNat(d.nationality) || 'FIA')} · <span class="driver-num">#${esc(d.permanentNumber || '—')}</span></p>
        </div>
        <div class="driver-points">
          <b>${fmtNum(x.points)}</b>
          <small class="subtle">P${esc(x.position)}</small>
        </div>
      </div>
      <div class="mini-stats">
        <span class="mini-team"><i style="background:${color}"></i>${esc(tName)}</span>
        ${Number(x.wins) ? `<span>Победы: <b>${fmtNum(x.wins)}</b></span>` : ''}
        ${Favs.button('driver', d.driverId)}
      </div>
      <div class="progress"><i style="width:${pct.toFixed(1)}%;background:${color}"></i></div>
    </article>`;
  }).join('') : '<div class="empty">Пилоты не найдены по заданному фильтру.</div>';

  paintHeadshots();
  ImageObserver.observeAll();
}

const TEAM_LOGO_SLUGS = {
  red_bull: 'redbullracing', haas: 'haasf1team', rb: 'racingbulls', aston_martin: 'astonmartin',
  sauber: 'kicksauber', alpine: 'alpine', audi: 'audi', cadillac: 'cadillac', ferrari: 'ferrari',
  mclaren: 'mclaren', mercedes: 'mercedes', williams: 'williams'
};
function teamLogoUrl(constructor, season) {
  let slug = TEAM_LOGO_SLUGS[constructor?.constructorId];
  if (!slug || !/^\d{4}$/.test(String(season))) return null;
  if (slug === 'kicksauber' && Number(season) >= 2026) slug = 'audi';
  return `https://media.formula1.com/image/upload/c_lfill,w_160/q_auto/v1740000001/common/f1/${season}/${slug}/${season}${slug}logowhite.webp`;
}
function teamMonogram(name) {
  const words = String(name || '').replace(/\bF1 Team\b/i, '').trim().split(/\s+/).filter(Boolean);
  return (words.length > 1 ? words[0][0] + words[1][0] : (words[0] || '?').slice(0, 2)).toUpperCase();
}
function teamLogoHtml(constructor, season) {
  const pal = teamPalette(constructor?.name);
  const url = teamLogoUrl(constructor, season);
  return `<span class="team-logo" style="--tp:${pal.p};--ts:${pal.s}" aria-hidden="true"><span class="team-mono">${esc(teamMonogram(constructor?.name))}</span>${url ? `<img src="${url}" alt="" width="160" height="160" loading="lazy" referrerpolicy="no-referrer" onload="this.parentNode.classList.add('has-img')" onerror="this.remove()">` : ''}</span>`;
}

const TeamLeaders = {
  KEY: 'f1tl:leaders2',
  TTL: 7 * 24 * 3600 * 1000,
  RETRY: 10 * 60 * 1000,  // a person whose photo lookup failed is asked again after 10 minutes, not after a week
  pending: new Map(),
  readAll() { try { return JSON.parse(safeStorage.get(this.KEY) || '{}') || {}; } catch { return {}; } },
  save(id, entry) {
    const all = this.readAll();
    all[id] = entry;
    try { safeStorage.set(this.KEY, JSON.stringify(all)); } catch {}
  },
  cached(id) {
    const hit = this.readAll()[id];
    if (!hit) return null;
    const ttl = hit.list?.some(x => x.title && !x.thumb) ? this.RETRY : this.TTL;
    return Date.now() - hit.ts < ttl ? hit : null;
  },
  parse(wikitext) {
    const src = String(wikitext || '');
    const m = /\n\s*\|\s*(?:team[ _])?principal(?:s|\(s\))?\s*=\s*/i.exec(src);
    if (!m) return [];
    let rest = src.slice(m.index + m[0].length)
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<ref[^>]*\/>/gi, '').replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, '');
    let body;
    if (/^\{\{/.test(rest)) {
      let depth = 0, i = 0;
      for (; i < rest.length; i++) {
        if (rest.startsWith('{{', i)) { depth++; i++; }
        else if (rest.startsWith('}}', i)) { depth--; i++; if (depth === 0) { i++; break; } }
      }
      body = rest.slice(0, i);
    } else {
      const end = rest.search(/\n\s*\|/);
      body = end < 0 ? rest.slice(0, 600) : rest.slice(0, end);
    }
    const text = body
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<ref[^>]*\/>/gi, '').replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, '')
      .replace(/\{\{\s*(?:plainlist|flatlist|unbulleted list|ubl)\s*\|/gi, '')
      .replace(/<\/?small>/gi, '')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/^\s*\*\s*/gm, '')
      .replace(/\}\}\s*$/, '');
    const out = [];
    text.split('\n').map(x => x.trim()).filter(Boolean).forEach(line => {
      const roleOnly = /^\(([^()]+)\)$/.exec(line);
      if (roleOnly) { if (out.length && !out[out.length - 1].role) out[out.length - 1].role = roleOnly[1].trim(); return; }
      const link = /\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/.exec(line);
      let name, title = null, rest2;
      if (link) {
        title = link[1].trim();
        name = (link[2] || link[1]).trim();
        rest2 = line.replace(link[0], '');
      } else {
        name = line.replace(/\s*\([^()]*\)\s*$/, '').trim();
        rest2 = line.slice(name.length);
      }
      name = name.replace(/\{\{[^}]*\}\}|<[^>]+>|'{2,3}/g, '').trim();
      if (!name || /^[\W\d_]+$/.test(name) || name.startsWith('{{')) return;
      const role = (/\(([^()]+)\)/.exec(rest2) || [])[1]?.trim() || '';
      if (!out.some(x => x.name === name)) out.push({ name, title, role });
    });
    return out;
  },
  roleRu(role) {
    const r = String(role || '').trim();
    if (!r) return '';
    let t = r.replace(/\bTeam Principal\b/gi, 'руководитель команды').replace(/\bChief Executive Officer\b|\bCEO\b/gi, 'CEO')
      .replace(/\bDeputy\b/gi, 'заместитель').replace(/\bChairman\b/gi, 'председатель').replace(/\bTeam Owner\b/gi, 'владелец команды')
      .replace(/\bRacing Director\b/gi, 'спортивный директор').replace(/\s*(?:&|and)\s*/gi, ' и ');
    t = t.replace(/заместитель\s+руководитель команды/i, 'заместитель руководителя');
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  pick(list, max = 3) {
    const isTp = x => /team principal/i.test(x.role) && !/deputy/i.test(x.role);
    const isCeo = x => /\bCEO\b|chief executive/i.test(x.role);
    const order = [...list.filter(isTp), ...list.filter(x => !isTp(x) && isCeo(x)), ...list.filter(x => !isTp(x) && !isCeo(x) && !/deputy|COO|racing director/i.test(x.role))];
    return order.slice(0, max);
  },
  async thumb(title) {
    if (!title) return null;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`);
        if (r.ok) return (await r.json())?.thumbnail?.source || null;
      } catch { /* try once more */ }
      await new Promise(res => setTimeout(res, 700));
    }
    return null;
  },
  load(id) {
    const hit = this.cached(id);
    if (hit) return Promise.resolve(hit);
    if (this.pending.has(id)) return this.pending.get(id);
    const task = (async () => {
      const info = (await request(`constructors/${id}.json`)).data?.MRData?.ConstructorTable?.Constructors?.[0];
      const page = decodeURIComponent((info?.url || '').split('/wiki/')[1] || '');
      if (!page) throw new Error('no wiki page');
      const w = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&prop=wikitext&section=0&redirects=1&origin=*&page=${encodeURIComponent(page)}`).then(r => (r.ok ? r.json() : null));
      if (!w?.parse) throw new Error('wikipedia unavailable');
      const people = this.pick(this.parse(w.parse.wikitext?.['*']), 3);
      for (const x of people) x.thumb = await this.thumb(x.title);
      const entry = { ts: Date.now(), page, list: people };
      this.save(id, entry);
      return entry;
    })();
    task.catch(() => this.pending.delete(id));
    this.pending.set(id, task);
    return task;
  },
  wikiHref(x) { return x.title ? `https://en.wikipedia.org/wiki/${encodeURIComponent(x.title.replace(/ /g, '_'))}` : ''; },
  photoHtml(x, cls, width = 500) {
    if (!x.thumb) return '';
    const big = width ? x.thumb.replace(/\/\d+px-/, `/${width}px-`) : '';
    const up = big ? ` data-b="${esc(big)}" onload="if(!this.dataset.u){this.dataset.u=1;var b=new Image();b.referrerPolicy='no-referrer';var t=this;b.onload=function(){t.src=b.src};b.src=this.dataset.b}"` : '';
    return `<img class="${cls}" src="${esc(x.thumb)}"${up} alt="" width="330" height="410" referrerpolicy="no-referrer" onerror="this.remove()">`;
  },
  chipHtml(x) {
    return `<div class="leader-chip${x.thumb ? ' has-photo' : ''}" title="По данным Википедии">${this.photoHtml(x, 'leader-bg', 0)}<span class="leader-tx"><b>${esc(x.name)}</b><small>${esc(this.roleRu(x.role) || 'Руководство')}</small></span></div>`;
  },
  portraitHtml(x) {
    const href = this.wikiHref(x);
    const ini = String(x.name || '?').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
    const pic = x.thumb ? this.photoHtml(x, 'lp-av', 0) : '';
    const inner = `<span class="lp-av-box" aria-hidden="true"><span class="lp-mono">${esc(ini)}</span>${pic}</span><span class="lp-tx"><b>${esc(x.name)}</b><small>${esc(this.roleRu(x.role) || 'Руководство')}</small></span>`;
    return href
      ? `<a class="lp-chip" ${'href'}="${href}" target="_blank" rel="noopener noreferrer" title="По данным Википедии · открыть страницу">${inner}</a>`
      : `<div class="lp-chip" title="По данным Википедии">${inner}</div>`;
  },
  heroHtml(list) { return (list || []).slice(0, 2).map(x => this.portraitHtml(x)).join(''); }
};

async function fillTeamLeaders(season) {
  if (Number(season) !== CURRENT_SEASON || navigator.webdriver) return;
  const boxes = [...$$('#teamGrid [data-leaders]')];
  const token = fillTeamLeaders._t = (fillTeamLeaders._t || 0) + 1;
  await mapLimit(boxes, 2, async box => {
    const id = box.dataset.leaders;
    try {
      const entry = await TeamLeaders.load(id);
      if (token !== fillTeamLeaders._t || !box.isConnected) return;
      box.innerHTML = entry.list.slice(0, 2).map(x => TeamLeaders.chipHtml(x)).join('');
    } catch { /* no network or no wiki data: the plate simply stays empty */ }
  });
}

const _roundDataCache = new Map();
function racesUpToToday(races) {
  const today = new Date().toISOString().slice(0, 10);
  return (races || []).filter(r => r?.date && r.date <= today);
}
function missingSnapshotRounds(season, races, kind) {
  return racesUpToToday(races).filter(r => !readSnapshot(`${season}/${r.round}/${kind}.json`)).length;
}
function loadSeasonRoundData(season, races, kind) {
  const key = `${season}:${kind}`;
  if (_roundDataCache.has(key)) return _roundDataCache.get(key);
  const task = (async () => {
    const list = racesUpToToday(races);
    const out = await mapLimit(list, 3, async race => {
      const path = `${season}/${race.round}/${kind}.json${kind === 'pitstops' ? '?limit=200' : ''}`;
      const res = readSnapshot(path) || await request(path);
      return { round: Number(race.round), raceName: race.raceName, date: race.date, race: readRaces(res.data)[0] || null };
    });
    return { rounds: out.filter(Boolean), failed: out.filter(x => !x).length, asked: list.length };
  })();
  task.catch(() => _roundDataCache.delete(key));
  _roundDataCache.set(key, task);
  return task;
}

function parseStopSeconds(v) {
  const txt = String(v ?? '').trim();
  if (!txt) return null;
  const parts = txt.split(':').map(Number);
  if (parts.length > 2 || parts.some(n => !Number.isFinite(n))) return null;
  const sec = parts.length === 2 ? parts[0] * 60 + parts[1] : parts[0];
  return sec > 0 ? sec : null;
}
const PIT_MAX_NORMAL_SEC = 60;  // longer "stops" are red-flag waits or repairs, not pit-crew work
function medianOf(list) {
  const a = list.slice().sort((x, y) => x - y);
  if (!a.length) return null;
  const m = a.length >> 1;
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
}

function computePitRanking(resultRounds, pitRounds) {
  const results = new Map((resultRounds || []).map(x => [x.round, x]));
  const teams = {};
  let unmapped = 0, roundsUsed = 0;
  (pitRounds || []).forEach(pr => {
    const stops = pr.race?.PitStops;
    const rr = results.get(pr.round)?.race;
    if (!stops?.length || !rr?.Results?.length) return;
    roundsUsed++;
    const who = {};
    rr.Results.forEach(x => { who[x.Driver.driverId] = x; });
    stops.forEach(st => {
      const car = who[st.driverId];
      if (!car) { unmapped++; return; }
      const cid = car.Constructor.constructorId;
      const tm = teams[cid] = teams[cid] || { id: cid, name: car.Constructor.name, times: [], excluded: 0, best: null };
      const sec = parseStopSeconds(st.duration);
      if (sec === null || sec > PIT_MAX_NORMAL_SEC) { tm.excluded++; return; }
      tm.times.push(sec);
      if (!tm.best || sec < tm.best.sec) tm.best = { sec, round: pr.round, raceName: pr.raceName, driver: driverName(car.Driver), lap: st.lap };
    });
  });
  const rows = Object.values(teams).filter(x => x.times.length).map(x => ({
    id: x.id, name: x.name, count: x.times.length, excluded: x.excluded, best: x.best,
    median: medianOf(x.times), avg: x.times.reduce((a, b) => a + b, 0) / x.times.length
  })).sort((a, b) => a.median - b.median);
  rows.forEach((x, i) => { x.rank = i + 1; });
  const bestStop = rows.map(x => ({ ...x.best, team: x.name })).sort((a, b) => a.sec - b.sec)[0] || null;
  return { rows, unmapped, roundsUsed, bestStop, excluded: rows.reduce((a, x) => a + x.excluded, 0) };
}

function pitRankingHtml(pr, highlightId = null) {
  if (!pr.rows.length) return '<div class="empty">Нет данных о пит-стопах этого сезона.</div>';
  const lead = pr.rows[0].median;
  return `<div class="table-wrap"><table class="career-table pit-table">
    <thead><tr><th class="num">#</th><th>Команда</th><th class="num">Медиана, с</th><th class="num col-gap">Среднее, с</th><th class="num">Лучший, с</th><th class="num col-wins">Стопов</th></tr></thead>
    <tbody>${pr.rows.map(x => `<tr data-team="${esc(x.id)}" data-season="${esc(pr.season || '')}" tabindex="0" class="${x.id === highlightId ? 'champ-row' : ''}">
      <td class="num">${x.rank}</td>
      <td><div class="team-cell"><span class="team-livery-bar" style="background:${teamColor(x.name)}"></span>${esc(x.name)}</div></td>
      <td class="num"><b>${x.median.toFixed(2)}</b>${x.rank > 1 ? `<small class="delta down">+${(x.median - lead).toFixed(2)}</small>` : ''}</td>
      <td class="num col-gap">${x.avg.toFixed(2)}</td>
      <td class="num" title="${esc(`${x.best.driver} · круг ${x.best.lap} · ${x.best.raceName || ''}`)}">${x.best.sec.toFixed(2)}</td>
      <td class="num col-wins">${x.count}</td>
    </tr>`).join('')}</tbody></table></div>
    ${pr.bestStop ? `<p class="pit-best"><b>Быстрейший пит-стоп сезона:</b> ${pr.bestStop.sec.toFixed(3)} с — ${esc(pr.bestStop.driver)} (${esc(pr.bestStop.team)}), ${esc(pr.bestStop.raceName || '')}, круг ${esc(pr.bestStop.lap)}.</p>` : ''}
    <p class="subtle pit-note">Порядок по медиане стоянки <button type="button" class="info-tip" aria-label="Как считаются пит-стопы" aria-expanded="false"><span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>Время — от въезда до выезда из пит-лейна, как его публикует Jolpica; у каждой трассы своя длина пит-лейна, но все команды ездят на одних и тех же трассах. Ранжируем по медиане: одна долгая стоянка её не искажает. Стоянки дольше ${PIT_MAX_NORMAL_SEC} с (красные флаги, ремонт, ${pr.excluded} шт.) в расчёт не входят. Учтено этапов: ${pr.roundsUsed}. Источник: Jolpica F1.</span></p>`;
}

async function buildPitRanking(season, races) {
  const [res, pit] = await Promise.all([loadSeasonRoundData(season, races, 'results'), loadSeasonRoundData(season, races, 'pitstops')]);
  const pr = computePitRanking(res.rounds.map(x => ({ ...x })), pit.rounds.map(x => ({ ...x })));
  pr.season = season;
  pr.failed = res.failed + pit.failed;
  return pr;
}

function pitFailNote(pr) {
  return pr.failed ? `<p class="subtle" style="font-size:12px;color:var(--amber, #ffb800)">Не удалось загрузить этапов: ${pr.failed}. Цифры могут быть неполными.</p>` : '';
}





const _teamHistoryCache = new Map();



async function renderTeamPitSection(season) {
  const box = $('#teamPitBox');
  if (!box) return;
  const token = ++renderTeamPitSection._t;
  const head = `<h3 class="dp-h" style="margin-top:28px">Пит-стопы команд · сезон ${season}</h3>`;
  if (Number(season) < 2012) { box.innerHTML = `${head}<div class="empty">Нет данных: пит-стопы публикуются с 2012 года.</div>`; return; }
  box.innerHTML = `${head}<div class="loading">Считаем пит-стопы сезона…</div>`;
  try {
    let races = Object.values(state.pageData).find(x => x?.season === Number(season) && x.b?.races?.length)?.b?.races;
    if (!races) races = readRaces((await request(`${season}.json`)).data);
    const missing = missingSnapshotRounds(season, races, 'pitstops') + missingSnapshotRounds(season, races, 'results');
    if (missing > 10 && !box.dataset.go) {
      box.innerHTML = `${head}<div class="empty">Для этого сезона данных во встроенном снимке нет, понадобится около ${missing} запросов к Jolpica.<br><button class="btn secondary sm" id="teamPitGo" style="margin-top:10px">Посчитать рейтинг</button></div>`;
      $('#teamPitGo')?.addEventListener('click', () => { box.dataset.go = '1'; renderTeamPitSection(season); });
      return;
    }
    const pr = await buildPitRanking(Number(season), races);
    if (token !== renderTeamPitSection._t || !box.isConnected) return;
    box.innerHTML = `${head}${pitFailNote(pr)}${pitRankingHtml(pr)}`;
  } catch {
    if (token === renderTeamPitSection._t && box.isConnected) box.innerHTML = `${head}<div class="empty">Не удалось загрузить пит-стопы: Jolpica не ответила.</div>`;
  }
}
renderTeamPitSection._t = 0;

function renderTeams(list, drivers = [], season = state.season) {
  const safeDrivers = Array.isArray(drivers) ? drivers : [];
  const safeList = Array.isArray(list) ? list : [];
  const grouped = safeList.map(x => {
    const id = x.Constructor?.constructorId;
    return {
      ...x,
      members: safeDrivers.filter(d => d.Constructors?.some(c => c.constructorId === id))
    };
  });

  $('#teamGrid').innerHTML = grouped.length ? grouped.map((x, idx) => {
    const color = teamColor(x.Constructor.name);
    return `<article class="team-card stagger-item${Favs.has('team', x.Constructor.constructorId) ? ' fav-row' : ''}" style="--stagger-idx:${idx};--team:${color}" data-team="${esc(x.Constructor.constructorId)}" data-season="${esc(season)}" tabindex="0">
      ${Favs.button('team', x.Constructor.constructorId)}
      <div class="team-head">
        ${teamLogoHtml(x.Constructor, season)}
        <div class="team-head-text">
          <div class="eyebrow">P${esc(x.position)} · ${esc(ruNat(x.Constructor.nationality) || 'F1')}</div>
          <h3>${esc(x.Constructor.name)}</h3>
        </div>
      </div>
      <div class="mini-stats">
        <span>Очки: <b>${fmtNum(x.points)}</b></span>
        ${Number(x.wins) ? `<span>Победы: <b>${fmtNum(x.wins)}</b></span>` : ''}
      </div>
      <p class="subtle" style="font-size:12px;margin:12px 0 0">
        ${x.members.map(d => `<b>${esc(driverName(d.Driver))}</b>${Number(d.points) ? ` (${fmtNum(d.points)})` : ''}`).join(' · ') || 'Состав не указан'}
      </p>
      ${Number(season) === CURRENT_SEASON ? `<div class="leaders" data-leaders="${esc(x.Constructor.constructorId)}">${(TeamLeaders.cached(x.Constructor.constructorId)?.list || []).slice(0, 2).map(l => TeamLeaders.chipHtml(l)).join('')}</div>` : ''}
    </article>`;
  }).join('') : '<div class="empty">Команды не найдены.</div>';
  if (grouped.length) { const pitBox = $('#teamPitBox'); if (pitBox) delete pitBox.dataset.go; fillTeamLeaders(season); renderTeamPitSection(season); }
  else if ($('#teamPitBox')) $('#teamPitBox').innerHTML = '';
}


function renderCircuitCatalog() {
  const q = ($('#circuitSearch')?.value || '').trim().toLowerCase();
  const season = Number($('#circuitSeasonFilter')?.value || 0);
  const country = $('#circuitCountryFilter')?.value || '';

  const entries = Object.entries(TRACK_REGISTRY).map(([id, x]) => ({ id, ...x })).filter(x => {
    const hay = `${x.name} ${x.locality} ${x.country} ${x.id}`.toLowerCase();
    return (!q || hay.includes(q)) &&
           (!season || (x.seasons || []).includes(season)) &&
           (!country || x.country === country);
  }).sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  $('#circuitCatalog').innerHTML = entries.length ? entries.map((x, idx) => {
    const assetStatus = getCircuitAssetStatus(x.id);
    const badgeHtml = assetStatus.status === 'AVAILABLE'
      ? ''
      : assetStatus.status === 'FALLBACK'
      ? `<span class="pill pill-circuit-badge badge-fallback" style="color:var(--amber)">⚠ ЗАПАСНАЯ СХЕМА</span>`
      : `<span class="pill pill-circuit-badge badge-unavailable" style="color:var(--text-dim)">✕ НЕТ СХЕМЫ</span>`;

    return `<article class="track-catalog-card stagger-item" style="--stagger-idx:${idx}" data-circuit="${esc(x.id)}" tabindex="0">
      ${trackImg({ circuitId: x.id, circuitName: x.name })}
      <div>
        <h3>${esc(x.name)}</h3>
        <p class="subtle">${esc(x.locality)}, ${esc(x.country)}</p>
      </div>
      <div class="track-catalog-meta">
        <span class="pill">${x.turns} ${ruPlural(x.turns, ['поворот', 'поворота', 'поворотов'])} · ${x.lengthKm} км</span>
        ${badgeHtml}
      </div>
    </article>`;
  }).join('') : '<div class="empty">Автодромы не найдены по заданным критериям.</div>';
}

let lastModalFocus = null;
let lockedScrollY = 0;

function pushModalHistoryEntry() {
  try {
    history.pushState({ overlay: 'modal' }, '');
    window._modalHistoryEntry = true;
  } catch {}
}

function openModal(title, body) {
  const modal = $('#modal');
  if (!modal) return;
  modal.classList.remove('dossier');
  if (!window._modalHistoryEntry) {
    if (window._modalBackPending) window._modalPushAfterBack = true;
    else pushModalHistoryEntry();
  }

  if (window._modalAbortController) {
    try { window._modalAbortController.abort(); } catch(e) {}
  }
  window._modalAbortController = new AbortController();

  if (window.modalCountdownTimer) {
    clearInterval(window.modalCountdownTimer);
    window.modalCountdownTimer = null;
  }

  if (window._driverModalTimer) {
    clearTimeout(window._driverModalTimer);
    window._driverModalTimer = null;
  }

  ['driverChart', 'constructorChart', 'driverProgressionChart'].forEach(cid => {
    if (state.charts[cid]) {
      try { state.charts[cid].destroy(); } catch(e) {}
      delete state.charts[cid];
    }
    const c = document.getElementById(cid);
    if (c && window.Chart && typeof Chart.getChart === 'function') {
      try { Chart.getChart(c)?.destroy(); } catch(e) {}
    }
  });

  if (!modal.classList.contains('open')) {
    lastModalFocus = document.activeElement;
    lockedScrollY = window.pageYOffset || document.documentElement.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.width = '100%';
    document.body.classList.add('modal-open');
  }

  $('#modalTitle').innerHTML = title;
  $('#modalBody').innerHTML = body;
  if (Deep.next && Date.now() - Deep.next.t < 6000) { Deep.mark(Deep.next.path); Deep.next = null; }
  const wasOpen = modal.classList.contains('open');
  modal.classList.add('open');
  if (!wasOpen) Motion.origin(modal);
  setTimeout(() => {
    $$('#modalBody .countup').forEach(el => {
      animateCountUp(el, el.dataset.val, 450);
    });
  }, 40);
  // с клавиатуры фокус на «×» (виден), после касания или клика — на само окно, без красного кольца на кнопке
  if (InputMode.keyboard) $('#modalClose').focus({ preventScroll: true });
  else { const box = $('#modalBox'); if (box) { box.setAttribute('tabindex', '-1'); box.focus({ preventScroll: true }); } }
  ImageObserver.observeAll();

  if (window._modalFocusTrapHandler) {
    document.removeEventListener('keydown', window._modalFocusTrapHandler);
  }
  window._modalFocusTrapHandler = function(e) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeModal();
      return;
    }
    if (e.key !== 'Tab') return;
    const all = Array.from(modal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'));
    const focusable = all.filter(el => el.offsetParent !== null || el.getClientRects().length > 0);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
      first.focus();
      e.preventDefault();
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === first) {
        last.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    }
  };
  document.addEventListener('keydown', window._modalFocusTrapHandler);
}

// Номер последнего открытого (или закрытого) окна: запоздалая перерисовка срабатывает, только если окно всё то же
const WinSeq = { n: 0, next() { return ++this.n; } };
function closeModal({ fromPopState = false } = {}) {
  WinSeq.next();
  const modal = $('#modal');
  if (!modal) return;
  Deep.next = null;
  if (Deep.RX.test(location.hash)) { syncHashWithTab(state.tab); Deep.sync(); }
  window._modalPushAfterBack = false;
  if (fromPopState) {
    window._modalHistoryEntry = false;
  } else if (window._modalHistoryEntry) {
    window._modalHistoryEntry = false;
    window._modalBackPending = true;
    try { history.back(); } catch {}
  }

  if (window._modalAbortController) {
    try { window._modalAbortController.abort(); } catch(e) {}
    window._modalAbortController = null;
  }

  if (window._modalFocusTrapHandler) {
    document.removeEventListener('keydown', window._modalFocusTrapHandler);
    window._modalFocusTrapHandler = null;
  }

  if (window.modalCountdownTimer) {
    clearInterval(window.modalCountdownTimer);
    window.modalCountdownTimer = null;
  }

  if (window._driverModalTimer) {
    clearTimeout(window._driverModalTimer);
    window._driverModalTimer = null;
  }

  const mb = $('#modalBody');
  ['driverChart', 'constructorChart', 'driverProgressionChart'].forEach(cid => {
    if (state.charts[cid]) {
      try {
        state.charts[cid].stop?.();
        state.charts[cid].destroy();
      } catch(e) {}
      state.charts[cid] = null;
      delete state.charts[cid];
    }
    const c = document.getElementById(cid);
    if (c && window.Chart && typeof Chart.getChart === 'function') {
      try {
        const inst = Chart.getChart(c);
        if (inst) {
          inst.stop?.();
          inst.destroy();
        }
      } catch(e) {}
    }
  });

  if (mb) {
    mb.querySelectorAll('canvas').forEach(c => {
      if (window.Chart && typeof Chart.getChart === 'function') {
        try {
          const inst = Chart.getChart(c);
          if (inst) {
            inst.stop?.();
            inst.destroy();
          }
        } catch(e) {}
      }
    });
  }

  modal.classList.remove('open', 'dossier');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.classList.remove('modal-open');
  window.scrollTo(0, lockedScrollY);

  if (mb) mb.innerHTML = '';
  const mt = $('#modalTitle');
  if (mt) mt.innerHTML = '';

  if (lastModalFocus && typeof lastModalFocus.focus === 'function') {
    try { lastModalFocus.focus(); } catch(e) {}
  }
  lastModalFocus = null;
}

async function showCircuit(...args) { const self = showCircuit; await LazyMod.load(); if (showCircuit === self) throw new Error("showCircuit: second script missing"); return showCircuit(...args); }





// Результаты одного пилота по этапам сезона: архивные сезоны из снимка, текущий из сети (сеть в приоритете).
// quick: если сеть отвечает дольше QUICK_MS, сразу отдаём снимок, а ответ сети передаём в onFresh(rounds) —
// окно перерисуется сетевыми данными, если они отличаются (так окно не висит пустым на медленной сети).
const QUICK_MS = 350;
async function loadDriverSeasonRounds(season, driverId, signal = null, { quick = false, onFresh = null } = {}) {
  const add = (map, rc, key, row) => {
    const entry = map.get(String(rc.round)) || { round: Number(rc.round), raceName: rc.raceName, date: rc.date };
    entry[key] = row;
    map.set(String(rc.round), entry);
  };
  const fromSnapshot = map => {
    const eps = getEmbeddedSnapshot()?.endpoints || {};
    Object.keys(eps).forEach(k => {
      const m = k.match(/^(\d{4})\/(\d+)\/(results|qualifying)\.json$/);
      if (!m || Number(m[1]) !== Number(season)) return;
      const key = m[3] === 'results' ? 'race' : 'qual';
      readRaces(eps[k]).forEach(rc => ((key === 'race' ? rc.Results : rc.QualifyingResults) || []).forEach(x => {
        if (x.Driver?.driverId === driverId) add(map, rc, key, x);
      }));
    });
    return map;
  };
  const fromNetwork = async map => {
    const [res, qual] = await Promise.allSettled([
      request(`${season}/drivers/${driverId}/results.json?limit=100`, { signal }),
      request(`${season}/drivers/${driverId}/qualifying.json?limit=100`, { signal })
    ]);
    if (res.status === 'fulfilled') readRaces(res.value.data).forEach(rc => (rc.Results || []).forEach(x => add(map, rc, 'race', x)));
    if (qual.status === 'fulfilled') readRaces(qual.value.data).forEach(rc => (rc.QualifyingResults || []).forEach(x => add(map, rc, 'qual', x)));
    return map;
  };
  if (!isLiveSeasonPath(String(season))) {
    const snap = fromSnapshot(new Map());
    return snap.size ? snap : fromNetwork(new Map());
  }
  const netDone = fromNetwork(new Map());
  if (quick) {
    const won = await Promise.race([netDone.then(() => true), new Promise(r => setTimeout(() => r(false), QUICK_MS))]);
    if (!won) {
      const snap = fromSnapshot(new Map());
      if (snap.size) {
        netDone.then(net => { if (net.size && onFresh) onFresh(net); }).catch(() => {});
        return snap;
      }
    }
  }
  const net = await netDone;
  return net.size ? net : fromSnapshot(new Map());
}

// Короткая подпись результатов по этапам: по ней видно, отличается ли ответ сети от того, что уже нарисовано



async function showDriver(...args) { const self = showDriver; await LazyMod.load(); if (showDriver === self) throw new Error("showDriver: second script missing"); return showDriver(...args); }

async function showTeam(...args) { const self = showTeam; await LazyMod.load(); if (showTeam === self) throw new Error("showTeam: second script missing"); return showTeam(...args); }

function renderWhyDidHeWin() {
  return '';
}



const HISTORICAL_STAGES = {
  1988: {
    12: {
      raceName: 'Italian Grand Prix',
      Circuit: { circuitId: 'monza', circuitName: 'Autodromo Nazionale Monza', Location: { locality: 'Monza', country: 'Italy' } },
      date: '1988-09-11',
      winner: {
        position: '1', points: '9', grid: '3', status: 'Finished',
        Driver: { driverId: 'berger', givenName: 'Gerhard', familyName: 'Berger', nationality: 'Austrian' },
        Constructor: { constructorId: 'ferrari', name: 'Ferrari' }
      }
    }
  },
  1994: {
    4: {
      raceName: 'Monaco Grand Prix',
      Circuit: { circuitId: 'monaco', circuitName: 'Circuit de Monaco', Location: { locality: 'Monte-Carlo', country: 'Monaco' } },
      date: '1994-05-15',
      winner: {
        position: '1', points: '10', grid: '1', status: 'Finished',
        Driver: { driverId: 'michael_schumacher', givenName: 'Michael', familyName: 'Schumacher', nationality: 'German' },
        Constructor: { constructorId: 'benetton', name: 'Benetton' }
      }
    }
  },
  2003: {
    1: {
      raceName: 'Australian Grand Prix',
      Circuit: { circuitId: 'albert_park', circuitName: 'Albert Park Grand Prix Circuit', Location: { locality: 'Melbourne', country: 'Australia' } },
      date: '2003-03-09',
      winner: {
        position: '1', points: '10', grid: '11', status: 'Finished',
        Driver: { driverId: 'coulthard', givenName: 'David', familyName: 'Coulthard', nationality: 'British' },
        Constructor: { constructorId: 'mclaren', name: 'McLaren' }
      }
    }
  },
  2004: {
    1: {
      raceName: 'Australian Grand Prix',
      Circuit: { circuitId: 'albert_park', circuitName: 'Albert Park Grand Prix Circuit', Location: { locality: 'Melbourne', country: 'Australia' } },
      date: '2004-03-07',
      winner: {
        position: '1', points: '10', grid: '1', status: 'Finished',
        Driver: { driverId: 'michael_schumacher', givenName: 'Michael', familyName: 'Schumacher', nationality: 'German' },
        Constructor: { constructorId: 'ferrari', name: 'Ferrari' }
      },
      fastest: {
        Driver: { driverId: 'michael_schumacher', givenName: 'Michael', familyName: 'Schumacher' },
        FastestLap: { lap: '29', Time: { time: '1:24.125' } }
      }
    }
  },
  2010: {
    1: {
      raceName: 'Bahrain Grand Prix',
      Circuit: { circuitId: 'bahrain', circuitName: 'Bahrain International Circuit', Location: { locality: 'Sakhir', country: 'Bahrain' } },
      date: '2010-03-14',
      winner: {
        position: '1', points: '25', grid: '3', status: 'Finished',
        Driver: { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' },
        Constructor: { constructorId: 'ferrari', name: 'Ferrari' }
      },
      fastest: {
        Driver: { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso' },
        FastestLap: { lap: '45', Time: { time: '1:58.287' } }
      }
    }
  },
  2011: {
    1: {
      raceName: 'Australian Grand Prix',
      Circuit: { circuitId: 'albert_park', circuitName: 'Albert Park Grand Prix Circuit', Location: { locality: 'Melbourne', country: 'Australia' } },
      date: '2011-03-27',
      winner: {
        position: '1', points: '25', grid: '1', status: 'Finished',
        Driver: { driverId: 'vettel', givenName: 'Sebastian', familyName: 'Vettel', nationality: 'German' },
        Constructor: { constructorId: 'red_bull', name: 'Red Bull' }
      },
      fastest: {
        Driver: { driverId: 'massa', givenName: 'Felipe', familyName: 'Massa' },
        FastestLap: { lap: '54', Time: { time: '1:28.947' } }
      }
    }
  },
  2014: {
    19: {
      raceName: 'Abu Dhabi Grand Prix',
      Circuit: { circuitId: 'yas_marina', circuitName: 'Yas Marina Circuit', Location: { locality: 'Abu Dhabi', country: 'UAE' } },
      date: '2014-11-23',
      winner: {
        position: '1', points: '50', grid: '2', status: 'Finished',
        Driver: { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' },
        Constructor: { constructorId: 'mercedes', name: 'Mercedes' }
      },
      fastest: {
        Driver: { driverId: 'ricciardo', givenName: 'Daniel', familyName: 'Ricciardo' },
        FastestLap: { lap: '50', Time: { time: '1:44.496' } }
      }
    }
  }
};

async function showRace(...args) { const self = showRace; await LazyMod.load(); if (showRace === self) throw new Error("showRace: second script missing"); return showRace(...args); }

async function loadHome({ force = false, signal = null } = {}) {
  let cb = readCache(`bundle:${state.season}`, { allowStale: true })?.data;
  if (!cb) {
    const snapS = readSnapshot(`${state.season}/driverstandings.json`);
    const snapC = readSnapshot(`${state.season}/constructorstandings.json`);
    const snapR = readSnapshot(`${state.season}.json`);
    if (snapS?.data && snapC?.data && snapR?.data) {
      cb = {
        season: state.season,
        drivers: readDrivers(snapS.data),
        teams: readTeams(snapC.data),
        races: readRaces(snapR.data)
      };
    }
  }
  if (cb && !state.standings) {
    state.standings = cb;
    state.calendar = cb.races;
    state.pageData.home = { season: state.season, b: cb };
    setHeroTitle(state.season);
    renderHeroSummary(cb);
    renderHeroFight(cb);
    if (cb.races?.length) {
      renderNext(cb.races);
      renderLastRace(cb.races);
    }
    if (cb.drivers?.length) $('#homeDrivers').innerHTML = renderDriverTable(cb.drivers, 5);
    if (cb.teams?.length) $('#homeTeams').innerHTML = renderTeamTable(cb.teams, state.season, 5);
    renderFavoriteCard();
    setTimeout(() => PosMoves.decorateAll(state.season), 0);
    setStatus('cached', 'КЭШ АКТУАЛЕН');
  }

  try {
    const b = await loadSeasonBundle(state.season, { force, signal });
    if (signal?.aborted) return;
    state.standings = b;
    state.calendar = b.races;
    state.pageData.home = { season: state.season, b };
    setHeroTitle(state.season);
    $('#homeDrivers').innerHTML = renderDriverTable(b.drivers, 5);
    $('#homeTeams').innerHTML = renderTeamTable(b.teams, state.season, 5);
    PosMoves.decorateAll(state.season);
    renderLastRace(b.races);
    renderNext(b.races);
    renderHeroSummary({ ...b, season: state.season });
    renderHeroFight({ ...b, season: state.season });
    renderFavoriteCard();
    Live.tick();
    Notify.tick();

    if (b.drivers?.length) {
      writeCache(`bundle:${state.season}`, b);
    }

    if ([b.drivers, b.teams, b.races].some(x => x?.source === 'snapshot' && x?.error)) {
      const snap = getEmbeddedSnapshot();
      const snapDate = snap?._metadata?.generatedAt ? fmtDate(new Date(snap._metadata.generatedAt).getTime()) : '2026-10-13';
      setStatus('snapshot', `ВСТРОЕННЫЙ СНЭПШОТ (СЕТЬ НЕДОСТУПНА) от ${snapDate}`);
      toast('Сеть недоступна. Отображены данные встроенного снэпшота.');
    } else if (b.drivers?.source === 'network') {
      setStatus('updated', 'ОБНОВЛЕНО');
      const el = $('#syncTime');
      if (el) el.textContent = `Синхронизировано: ${fmtDate(Date.now())}`;
    } else if (b.drivers?.source === 'stale') {
      setStatus('offline', 'OFFLINE · ИЗ КЭША');
    } else if (b.drivers?.source === 'cache') {
      setStatus('cached', 'КЭШ АКТУАЛЕН');
    } else if (b.drivers?.source === 'none' || b.drivers?.source === 'error' || !b.drivers?.length) {
      setStatus('offline', 'ОФЛАЙН / НЕТ ДАННЫХ');
    } else {
      setStatus('cached', 'КЭШ');
    }
  } catch (err) {
    console.warn('loadHome network sync error:', err);
    if (!state.standings) {
      $('#homeDrivers').innerHTML = '<div class="empty">НЕТ ДАННЫХ · Сетевые данные чемпионата временно недоступны.<br><button class="btn secondary" style="margin-top:8px" onclick="loadHome({ force: true })">Повторить попытку</button></div>';
      $('#homeTeams').innerHTML = '<div class="empty">НЕТ ДАННЫХ</div>';
      $('#lastRace').innerHTML = '<div class="empty">НЕТ ДАННЫХ</div>';
      $('#nextName').textContent = 'Связь с сервером прервана';
      $('#nextMeta').textContent = 'Отображение автономного режима';
      setStatus('offline', 'OFFLINE · НЕТ ДАННЫХ');
    } else {
      setStatus('offline', 'OFFLINE · ИЗ КЭША');
      toast('Сетевая синхронизация недоступна. Отображаются сохранённые данные.');
    }
  }
}

function heroTrackSvg(canon, id = 'heroTrackPath', car = true, align = 'xMaxYMid') {
  const d = CIRCUIT_PATHS[canon];
  const vb = CIRCUIT_VIEWBOXES[canon] || '0 0 500 500';
  const sec = (typeof CIRCUIT_SECTORS !== 'undefined' && CIRCUIT_SECTORS[canon]) || {
    s1: { start: 0, end: 320, turns: 'T1–T4' },
    s2: { start: 320, end: 680, turns: 'T5–T9' },
    s3: { start: 680, end: 1000, turns: 'T10–T14' },
    drs: []
  };

  const s1Len = Math.max(0, sec.s1.end - sec.s1.start);
  const s2Len = Math.max(0, sec.s2.end - sec.s2.start);
  const s3Len = Math.max(0, sec.s3.end - sec.s3.start);

  const drsPaths = (sec.drs || []).map(z => {
    const len = Math.max(0, z.end - z.start);
    return `<path class="t-drs" data-drs="${z.id}" role="button" tabindex="0" aria-label="Зона DRS ${esc(z.id)}" d="${d}" pathLength="1000" stroke-dasharray="${len} ${1000 - len}" stroke-dashoffset="-${z.start}"/>`;
  }).join('');

  return `<svg viewBox="${vb}" preserveAspectRatio="${align} meet" class="pitwall-track-svg" role="group" aria-label="Схема трассы с секторами S1, S2, S3 и DRS-зонами">
    <path id="${id}" class="t-glow" d="${d}" pathLength="1"/>
    <path class="t-base" d="${d}" pathLength="1"/>
    <g class="t-sectors-layer">
      <path id="${id}_s1" class="t-sector s1" data-sector="1" role="button" tabindex="0" aria-label="Сектор 1: ${esc(sec.s1.turns)}" d="${d}" pathLength="1000" stroke-dasharray="${s1Len} ${1000 - s1Len}" stroke-dashoffset="-${sec.s1.start}"/>
      <path id="${id}_s2" class="t-sector s2" data-sector="2" role="button" tabindex="0" aria-label="Сектор 2: ${esc(sec.s2.turns)}" d="${d}" pathLength="1000" stroke-dasharray="${s2Len} ${1000 - s2Len}" stroke-dashoffset="-${sec.s2.start}"/>
      <path id="${id}_s3" class="t-sector s3" data-sector="3" role="button" tabindex="0" aria-label="Сектор 3: ${esc(sec.s3.turns)}" d="${d}" pathLength="1000" stroke-dasharray="${s3Len} ${1000 - s3Len}" stroke-dashoffset="-${sec.s3.start}"/>
    </g>
    <g class="t-drs-layer">${drsPaths}</g>
    ${car ? `<circle class="t-car" r="7"><animateMotion dur="4s" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines=".45 .05 .2 1"><mpath href="#${id}"/></animateMotion></circle>` : ''}
  </svg>`;
}

function initTrackSectorHover(trackBg, canon) {
  const legend = $('#heroSectorsLegend');
  const sec = (typeof CIRCUIT_SECTORS !== 'undefined' && CIRCUIT_SECTORS[canon]) || null;
  if (!trackBg || !legend || !sec) { if (legend) legend.innerHTML = ''; return; }

  let pinned = null;
  const drsCount = (sec.drs || []).length;
  legend.innerHTML = `
    <button type="button" class="sec-pill s1" data-sec="s1" aria-label="S1: ${esc(sec.s1.turns)}, сектор 1"><span class="dot"></span>S1: ${esc(sec.s1.turns)}</button>
    <button type="button" class="sec-pill s2" data-sec="s2" aria-label="S2: ${esc(sec.s2.turns)}, сектор 2"><span class="dot"></span>S2: ${esc(sec.s2.turns)}</button>
    <button type="button" class="sec-pill s3" data-sec="s3" aria-label="S3: ${esc(sec.s3.turns)}, сектор 3"><span class="dot"></span>S3: ${esc(sec.s3.turns)}</button>
    ${drsCount > 0 ? `<button type="button" class="sec-pill drs" data-sec="drs" aria-label="DRS: ${drsCount} ${drsCount === 1 ? 'зона' : (drsCount < 5 ? 'зоны' : 'зон')}${sec.drsYear ? `, по данным ${sec.drsYear} года` : ''}" title="${sec.drsYear ? `Зоны DRS по телеметрии OpenF1 ${sec.drsYear} года. С 2026 года DRS не применяется.` : 'Зоны DRS'}"><span class="dot"></span>DRS: ${drsCount} ${drsCount === 1 ? 'зона' : (drsCount < 5 ? 'зоны' : 'зон')}</button>` : ''}
  `;

  const applyFocus = (s) => {
    trackBg.classList.remove('sector-focus-s1', 'sector-focus-s2', 'sector-focus-s3', 'sector-focus-drs');
    legend.querySelectorAll('.sec-pill').forEach(p => p.classList.remove('active'));
    trackBg.querySelectorAll('.t-sector, .t-drs').forEach(p => p.classList.remove('active'));
    if (s) {
      trackBg.classList.add('sector-focus-' + s);
      legend.querySelector(`.sec-pill[data-sec="${s}"]`)?.classList.add('active');
      if (s === 'drs') trackBg.querySelectorAll('.t-drs').forEach(p => p.classList.add('active'));
      else trackBg.querySelector(`.t-sector.${s}`)?.classList.add('active');
    }
  };

  const togglePin = (s) => {
    pinned = (pinned === s) ? null : s;
    applyFocus(pinned);
  };

  legend.querySelectorAll('.sec-pill').forEach(btn => {
    const s = btn.dataset.sec;
    btn.onmouseenter = btn.onfocus = () => { if (!pinned) applyFocus(s); };
    btn.onmouseleave = btn.onblur = () => { applyFocus(pinned); };
    btn.onclick = () => togglePin(s);
  });

  trackBg.querySelectorAll('.t-sector').forEach(el => {
    const s = 's' + el.dataset.sector;
    el.onmouseenter = el.onfocus = () => { if (!pinned) applyFocus(s); };
    el.onmouseleave = el.onblur = () => { applyFocus(pinned); };
    el.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        togglePin(s);
      }
    };
  });

  trackBg.querySelectorAll('.t-drs').forEach(el => {
    el.onmouseenter = el.onfocus = () => { if (!pinned) applyFocus('drs'); };
    el.onmouseleave = el.onblur = () => { applyFocus(pinned); };
    el.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        togglePin('drs');
      }
    };
  });
}

const Deep = {
  next: null,
  RX: /^#(driver|team|race)\//,
  mark(path) { try { history.replaceState(history.state, '', '#' + path); } catch {} this.sync(); },
  sync() {
    const on = this.RX.test(location.hash);
    $('#modalLink')?.toggleAttribute('hidden', !on);
    $('#modalShare')?.toggleAttribute('hidden', !on);
  },
  parse(hash = location.hash) {
    const m = hash.replace(/^#/, '').split('/');
    if (m[0] === 'driver' && m[1]) return { kind: 'driver', id: decodeURIComponent(m[1]), season: Number(m[2]) || CURRENT_SEASON };
    if (m[0] === 'team' && m[1]) return { kind: 'team', id: decodeURIComponent(m[1]), season: Number(m[2]) || CURRENT_SEASON };
    if (m[0] === 'race' && m[1] && m[2]) return { kind: 'race', season: Number(m[1]), round: m[2] };
    return null;
  },
  open(d) {
    if (!d) return;
    if (d.kind === 'driver') showDriver(d.id, d.season);
    else if (d.kind === 'team') showTeam(d.id, d.season);
    else showRace(d.round, d.season);
  },
  fromPath() {
    if (!SITE) return null;
    const m = location.pathname.slice(SITE.base.length).split('/');
    if ((m[0] === 'drivers' || m[0] === 'teams') && m[1]) return { kind: m[0] === 'drivers' ? 'driver' : 'team', id: decodeURIComponent(m[1]), season: CURRENT_SEASON };
    return null;
  },
  pretty() {
    const d = this.parse();
    if (!SITE || !d || d.kind === 'race' || Number(d.season) !== Number(CURRENT_SEASON)) return location.href;
    const list = (SITE.pages && SITE.pages[d.kind]) || [];
    return list.includes(d.id) ? location.origin + SITE.base + (d.kind === 'driver' ? 'drivers/' : 'teams/') + encodeURIComponent(d.id) + '/' : location.href;
  },
  async copy() {
    const url = this.pretty();
    try { await navigator.clipboard.writeText(url); toast('Ссылка скопирована'); }
    catch { toast('Ссылка скопирована: ' + url); }
  }
};
document.addEventListener('click', e => {
  if (e.target.closest('#modalLink')) { e.stopPropagation(); Deep.copy(); }
  else if (e.target.closest('#modalShare')) { e.stopPropagation(); ShareCard.save(); }
});
window.addEventListener('hashchange', () => {
  const d = Deep.parse();
  if (d && !$('#modal')?.classList.contains('open')) Deep.open(d);
});

const ShareCard = {
  W: 1080, H: 1350,
  rgba(hex, a) {
    const n = parseInt(String(hex).replace('#', '').padEnd(6, '0').slice(0, 6), 16);
    return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${a})`;
  },
  wrap(g, text, maxW) {
    const out = []; let line = '';
    String(text || '').split(/\s+/).forEach(w => {
      const t = line ? line + ' ' + w : w;
      if (g.measureText(t).width > maxW && line) { out.push(line); line = w; } else line = t;
    });
    if (line) out.push(line);
    return out;
  },
  collect() {
    const body = $('#modalBody');
    if (!body) return null;
    const title = $('#modalTitle h2')?.textContent.trim() || '';
    const sub = $('#modalTitle p')?.textContent.trim() || '';
    const dp = body.querySelector('.dp');
    const accent = (dp && getComputedStyle(dp).getPropertyValue('--tp').trim()) || getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || '#e10600';
    const stats = [...body.querySelectorAll('.stat-grid .stat')].slice(0, 6).map(x => [x.querySelector('b')?.textContent.trim() || '', x.querySelector('span')?.textContent.trim() || '']).filter(x => x[0]);
    const pods = [...body.querySelectorAll('.podium .pod')].map(x => ({
      pos: x.querySelector('.pod-num')?.textContent.trim(), name: x.querySelector('.pod-name')?.textContent.trim(),
      team: x.querySelector('small')?.textContent.trim(), gap: x.querySelector('.pod-gap')?.textContent.trim() || '',
      color: getComputedStyle(x).getPropertyValue('--tc').trim() || accent
    }));
    const svg = body.querySelector('#raceCircuitSvg');
    return { title, sub, accent, stats, pods, path: svg?.querySelector('path')?.getAttribute('d') || '', vb: svg?.getAttribute('viewBox') || '0 0 500 500', kind: pods.length ? 'race' : 'dossier' };
  },
  async draw() {
    const d = this.collect();
    if (!d) return null;
    try { await document.fonts?.ready; } catch {}
    const { W, H } = this;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    const FONT = '"Exo 2", system-ui, -apple-system, "Segoe UI", sans-serif';
    const bg = g.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, '#0b0d10'); bg.addColorStop(1, '#161a20');
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    const glow = g.createRadialGradient(0, 0, 0, 0, 0, 980);
    glow.addColorStop(0, this.rgba(d.accent, .5)); glow.addColorStop(1, this.rgba(d.accent, 0));
    g.fillStyle = glow; g.fillRect(0, 0, W, H);
    g.save(); g.globalAlpha = .06; g.strokeStyle = '#fff'; g.lineWidth = 2;
    for (let x = -H; x < W; x += 46) { g.beginPath(); g.moveTo(x, H); g.lineTo(x + H, 0); g.stroke(); }
    g.restore();
    g.fillStyle = d.accent; g.fillRect(0, 0, 14, H);
    g.textBaseline = 'alphabetic';
    g.fillStyle = d.accent; g.font = `800 28px ${FONT}`;
    g.fillText('F1 TIMELINE 2.0', 70, 96);
    g.fillStyle = '#fff'; g.font = `900 92px ${FONT}`;
    let y = 210;
    this.wrap(g, d.title, W - 140).slice(0, 3).forEach(l => { g.fillText(l, 70, y); y += 100; });
    g.fillStyle = '#aeb8c6'; g.font = `600 34px ${FONT}`;
    this.wrap(g, d.sub, W - 140).slice(0, 2).forEach(l => { g.fillText(l, 70, y); y += 46; });
    y += 40;
    if (d.path) {
      const [vx, vy, vw, vh] = d.vb.split(/\s+/).map(Number);
      const sc = Math.min(330 / vw, 330 / vh);
      g.save(); g.translate(W - 90 - vw * sc, 380); g.scale(sc, sc); g.translate(-vx, -vy);
      const p2 = new Path2D(d.path);
      g.lineJoin = 'round'; g.lineCap = 'round';
      g.strokeStyle = this.rgba(d.accent, .28); g.lineWidth = 16 / sc * 1.0; g.stroke(p2);
      g.strokeStyle = d.accent; g.lineWidth = 5 / sc * 1.0; g.stroke(p2);
      g.restore();
    }
    if (d.kind === 'race' && d.pods.length === 3) {
      const base = 960, slot = (W - 140 - 40) / 3, heights = { 1: 330, 2: 260, 3: 210 };
      d.pods.forEach((p, i) => {
        const h = heights[p.pos] || 200, x = 70 + i * (slot + 20), top = base - h;
        const gr = g.createLinearGradient(0, top, 0, base);
        gr.addColorStop(0, this.rgba(p.color, .55)); gr.addColorStop(1, this.rgba(p.color, .12));
        g.fillStyle = gr; g.fillRect(x, top, slot, h);
        g.fillStyle = p.color; g.fillRect(x, top, slot, 8);
        g.fillStyle = this.rgba('#ffffff', .22); g.font = `900 italic 150px ${FONT}`; g.textAlign = 'right'; g.fillText(p.pos, x + slot - 14, top + 140);
        g.textAlign = 'center'; g.fillStyle = '#fff'; g.font = `800 38px ${FONT}`; g.fillText(p.name || '', x + slot / 2, base - 86, slot - 20);
        g.fillStyle = '#aeb8c6'; g.font = `600 26px ${FONT}`; g.fillText(p.team || '', x + slot / 2, base - 48, slot - 20);
        g.fillStyle = '#fff'; g.font = `700 28px ${FONT}`; g.fillText(p.gap || '', x + slot / 2, base - 14, slot - 20);
        g.textAlign = 'left';
      });
      y = 1000;
    }
    const tiles = d.stats.slice(0, d.kind === 'race' ? 4 : 6);
    const cols = d.kind === 'race' ? 2 : 3, tw = (W - 140 - (cols - 1) * 24) / cols, th = d.kind === 'race' ? 100 : 168;
    let ty = d.kind === 'race' ? 1000 : Math.max(y, 560);
    tiles.forEach((t, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const x = 70 + col * (tw + 24), yy = ty + row * (th + 24);
      g.fillStyle = 'rgba(255,255,255,.06)'; g.strokeStyle = 'rgba(255,255,255,.12)'; g.lineWidth = 2;
      g.beginPath(); g.roundRect ? g.roundRect(x, yy, tw, th, 22) : g.rect(x, yy, tw, th); g.fill(); g.stroke();
      g.fillStyle = d.kind === 'race' ? '#fff' : '#fff'; g.font = `900 ${d.kind === 'race' ? 34 : 66}px ${FONT}`;
      g.fillText(t[0].slice(0, 22), x + 26, yy + (d.kind === 'race' ? 50 : 92), tw - 40);
      g.fillStyle = '#aeb8c6'; g.font = `600 ${d.kind === 'race' ? 22 : 25}px ${FONT}`;
      g.fillText(t[1].slice(0, 30), x + 26, yy + (d.kind === 'race' ? 86 : 134), tw - 40);
    });
    g.fillStyle = '#7f8a99'; g.font = `600 26px ${FONT}`;
    g.fillText(`Данные: Jolpica F1 · ${new Date().toLocaleDateString('ru-RU')}`, 70, H - 56);
    return c;
  },
  async save() {
    const c = await this.draw();
    if (!c) return;
    const blob = await new Promise(res => c.toBlob(res, 'image/png'));
    if (!blob) { toast('Не удалось собрать картинку'); return; }
    const name = ($('#modalTitle h2')?.textContent || 'f1').trim().replace(/[^\wА-Яа-яЁё]+/g, '-').toLowerCase() + '.png';
    const file = new File([blob], name, { type: 'image/png' });
    try {
      if (window.matchMedia('(pointer: coarse)').matches && navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], title: name }); return; }
    } catch { /* cancelled or unsupported: fall back to a download */ }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast('Картинка сохранена');
  }
};

const FreshData = {
  snapshotRound() {
    const eps = getEmbeddedSnapshot()?.endpoints || {};
    let max = 0;
    Object.keys(eps).forEach(k => { const m = k.match(new RegExp(`^${CURRENT_SEASON}/(\\d+)/results\\.json$`)); if (m) max = Math.max(max, Number(m[1])); });
    return max;
  },
  async check() {
    if (navigator.webdriver || !navigator.onLine) return;
    try {
      const res = await request(`${CURRENT_SEASON}/last/results.json`);
      const race = readRaces(res.data)[0];
      const live = Number(race?.round);
      if (!live || live <= this.snapshotRound()) return;
      if (safeStorage.get('f1tl:freshSeen') === `${CURRENT_SEASON}-${live}`) return;
      this.show(race, live);
    } catch { /* offline or API busy: no notice */ }
  },
  show(race, live) {
    if ($('#freshNotice')) return;
    const el = document.createElement('div');
    el.id = 'freshNotice'; el.setAttribute('role', 'status');
    el.innerHTML = `<span>Вышли новые результаты: этап ${esc(live)} · <b>${esc(ruGP(race.raceName))}</b>. Сайт уже показывает их из сети, а в вашем файле они пока не сохранены.</span>
      <span class="fn-actions"><button class="btn sm" id="fnExport" type="button">Сохранить в файл</button><button class="btn secondary sm" id="fnClose" type="button" aria-label="Скрыть">×</button></span>`;
    const anchor = $('#fileProtocolNotice') || document.querySelector('header');
    anchor.insertAdjacentElement('afterend', el);
    $('#fnExport').addEventListener('click', () => { $('#exportHtmlBtn')?.click(); });
    $('#fnClose').addEventListener('click', () => { safeStorage.set('f1tl:freshSeen', `${CURRENT_SEASON}-${live}`); el.remove(); });
  }
};

const Accent = {
  on() { return safeStorage.get('f1tl:accent') !== '0'; },
  apply() {
    const root = document.documentElement;
    const clear = () => ['--red', '--red2', '--red-glow', '--on-red'].forEach(k => root.style.removeProperty(k));
    const id = Favs.list('team')[0];
    if (!id || !this.on()) { clear(); return; }
    const name = state.standings?.teams?.find(t => t.Constructor.constructorId === id)?.Constructor?.name || id.replace(/_/g, ' ');
    const pal = teamPalette(name);
    const light = root.getAttribute('data-theme') === 'light';
    root.style.setProperty('--red', pal.p);
    root.style.setProperty('--red2', light ? `color-mix(in srgb, ${pal.p} 72%, #000)` : `color-mix(in srgb, ${pal.p} 78%, #fff)`);
    root.style.setProperty('--red-glow', `color-mix(in srgb, ${pal.p} 35%, transparent)`);
    root.style.setProperty('--on-red', pal.tc);
  }
};
document.addEventListener('change', e => {
  if (!e.target.matches?.('[data-accent-toggle]')) return;
  safeStorage.set('f1tl:accent', e.target.checked ? '1' : '0');
  Accent.apply();
});

const WORLD_LAND = {"eurasia":[[-9.5,37],[-9,43.5],[-1.8,43.4],[-1.2,46],[-4.5,48.4],[-1.5,48.7],[1.5,50.5],[4,51.5],[8,53.7],[8.5,57],[10.5,57.7],[10,54.5],[14,54],[20,54.5],[22,57],[24,59.4],[30,60],[23,60],[21.5,63],[25,65.5],[22,65.8],[17.5,62],[19,59.5],[16,56.5],[13,55.5],[11,59],[6,58.5],[5,61.5],[14,67.5],[20,70],[28,71],[33,69.3],[41,67],[44,68.5],[60,69],[68,72.5],[80,73.5],[95,76],[106,77.5],[113,74],[130,71],[140,72.5],[160,69.5],[170,70],[180,68.5],[180,65],[170,60],[163,59.5],[156,51],[156.5,57],[142,59],[137,54],[141,52],[140,47.5],[135,43],[130,42.5],[129.5,35],[126,34.5],[126.5,37.5],[124.5,40],[121.5,39],[119.5,37],[122.5,37],[120.5,32],[122,30],[120,26],[116,22.5],[110,21],[108,16],[109,12],[105,8.5],[103,10.5],[100.5,13],[99.5,8],[103.5,1.5],[100.5,3],[98,8],[98.5,16],[94,16],[92,21],[87,21.5],[80,15.5],[77.5,8],[73,17],[72.5,21],[68.5,23.5],[66.5,25],[57,25.5],[56.5,27],[51,28],[48.5,30],[50,26.5],[52,24],[56,26],[59,23],[55,17],[52,16],[43,13],[39,21],[35,28],[34.5,31],[36,36],[32,36.5],[27,37],[26,40],[29,41],[36,41.5],[41,41],[38,45],[34,45],[33.5,46],[30,45.5],[28.5,43],[28,41],[26,40.5],[24,40],[23,37],[21,38],[19.5,41.5],[16,43.5],[13.5,45.5],[12.5,44],[16,41.5],[18.5,40],[16,38],[15.5,40],[12,42],[10,44],[7,43.5],[3,43],[3,41.5],[0.5,40],[-0.5,38.5],[-2,36.8],[-5.5,36]],"namerica":[[-168,66],[-156,71.5],[-140,69.5],[-125,70],[-110,68],[-95,72],[-85,70],[-82,63],[-93,59],[-92,57],[-80,52],[-79,55],[-77,62],[-70,61],[-64,60],[-61,56],[-56,52],[-60,47],[-66,44],[-70,42],[-74,40],[-76,35],[-81,31],[-80,25.5],[-82,27],[-83,29.5],[-89,30],[-93,29.5],[-97,27],[-97.5,22],[-95,18.5],[-91,18.5],[-90,21],[-87,21],[-88,16],[-83.5,15],[-83,10],[-79.5,9.5],[-77.5,8],[-80,7.5],[-83,8.5],[-86,11],[-87.5,13],[-91.5,14],[-96,15.8],[-101,17.5],[-105.5,20],[-106,23],[-110,27],[-113,31],[-115,30],[-117,32.5],[-121,35],[-123.5,38.5],[-124.5,42],[-124,46.5],[-123,49],[-128,51],[-130,54.5],[-134,58],[-140,60],[-146,60.5],[-152,59],[-158,57],[-162,55.5],[-165,60],[-166,63]],"greenland":[[-73,78],[-60,82],[-30,83],[-20,80],[-20,72],[-23,69],[-40,65],[-44,60],[-50,62],[-54,67],[-58,75]],"samerica":[[-77.5,8],[-72,12],[-64,10.5],[-60,8],[-52,5],[-50,0],[-45,-1.5],[-35,-5],[-35,-9],[-39,-14],[-39,-18],[-41,-22],[-48,-26],[-48.5,-28.5],[-53,-34],[-57,-35],[-58,-38.5],[-62,-39],[-65,-41],[-65,-45],[-67.5,-46],[-66,-48],[-69,-51],[-68.5,-55],[-72,-53.5],[-75,-50],[-73.5,-42],[-73.5,-37],[-71.5,-30],[-70.5,-20],[-70,-18],[-76,-14],[-81,-6],[-80,-2],[-80,1],[-77.5,4]],"africa":[[-17,21],[-16,28],[-10,30],[-6,35.8],[10,37],[11,33],[20,31.5],[25,32],[32,31],[34.5,28],[38,21],[43,12.5],[51,12],[51,10.5],[41,-1],[39.5,-5],[40.5,-11],[35,-20],[35.5,-24],[32.5,-28.5],[28,-33],[20,-34.8],[18,-32],[14.5,-22.5],[12,-17],[13.5,-12],[12,-5],[9,-1],[9.5,4],[4,6.2],[-2,5],[-8,4.5],[-13,8],[-17,14.5]],"australia":[[114,-22],[122,-18],[130,-12],[136,-12],[136,-15],[141,-17],[142.5,-10.5],[146,-19],[153,-26],[153,-30],[150,-37.5],[146,-39],[140,-38],[135,-34.5],[131,-31.5],[124,-33.5],[115,-34.5],[114,-28]],"uk":[[-5.5,50],[1.5,51],[1.8,53],[-0.5,54.5],[-2,57.5],[-3,58.5],[-6,58],[-5,55],[-3,54],[-4.5,52]],"ireland":[[-10,52],[-6,52],[-6,55],[-8,55],[-10,54]],"japan":[[130,31],[132,34],[135,34.5],[140,35],[141,38.5],[141.5,41.5],[140.5,41],[139.8,38],[136.5,37],[133,35.5],[131,34.5]],"sumatra":[[95,5.5],[98,4],[104,-2],[106,-6],[101,-3.5]]};
const SeasonMap = {
  W: 1000, H: 500, LAT_TOP: 72, LAT_BOTTOM: -52,
  _rafId: null,
  xy(lat, lon) { return [(Number(lon) + 180) / 360 * this.W, (this.LAT_TOP - Number(lat)) / (this.LAT_TOP - this.LAT_BOTTOM) * this.H]; },
  stopAnimation() {
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }
  },
  animateFlightpath(box) {
    this.stopAnimation();
    if (!box) return;
    const arcs = Array.from(box.querySelectorAll('.sm-route.sm-arc'));
    if (!arcs.length) return;
    if (Motion.reduced()) {
      arcs.forEach(a => { a.style.strokeDashoffset = '0'; });
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const nextArc = box.querySelector('.sm-route.sm-arc.next');
    const step = (now) => {
      if (!box.isConnected) { this._rafId = null; return; }
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const ease = 1 - Math.pow(1 - t, 3);
      arcs.forEach(a => {
        if (a.classList.contains('done')) {
          a.style.strokeDashoffset = String(((1 - ease) * 100).toFixed(2));
        }
      });
      if (nextArc) {
        const pulseOffset = ((now / 18) % 24).toFixed(2);
        nextArc.style.strokeDashoffset = String(-pulseOffset);
      }
      if (t < 1) {
        this._rafId = requestAnimationFrame(step);
      } else {
        arcs.forEach(a => {
          if (a.classList.contains('done')) a.style.strokeDashoffset = '0';
        });
        this._rafId = null;
      }
    };
    this._rafId = requestAnimationFrame(step);
  },
  render(races, season) {
    const card = $('#seasonMapCard'), box = $('#seasonMap');
    if (!card || !box) return;
    const pts = (races || []).map(r => ({ r, lat: r.Circuit?.Location?.lat, lon: r.Circuit?.Location?.long })).filter(x => x.lat !== undefined && x.lon !== undefined && Number.isFinite(Number(x.lat)) && Number.isFinite(Number(x.lon)));
    if (!pts.length) { card.hidden = true; return; }
    card.hidden = false;
    const now = Date.now();
    const nextIdx = pts.findIndex(x => scheduleMoment(x.r) > now);
    const key = `${season}:${pts.length}:${nextIdx}`;
    if (box.dataset.key === key && box.querySelector('.sm-route.sm-arc')) return;
    box.dataset.key = key;
    const { W, H } = this;
    const grid = [];
    for (let lon = -150; lon <= 150; lon += 30) { const [x] = this.xy(0, lon); grid.push(`<line x1="${x}" y1="0" x2="${x}" y2="${H}"/><text x="${x + 3}" y="${H - 5}">${lon}°</text>`); }
    for (let lat = -40; lat <= 60; lat += 20) { const [, y] = this.xy(lat, 0); grid.push(`<line x1="0" y1="${y}" x2="${W}" y2="${y}"/><text x="4" y="${y - 3}">${lat}°</text>`); }
    const land = Object.values(WORLD_LAND).map(poly => `<polygon class="sm-land" points="${poly.map(([lon, lat]) => this.xy(Math.min(this.LAT_TOP + 8, lat), lon).map(v => v.toFixed(1)).join(',')).join(' ')}"/>`).join('');
    const xy = pts.map(p => this.xy(p.lat, p.lon));
    const activeLegIdx = nextIdx > 0 ? nextIdx : (nextIdx === 0 && pts.length > 1 ? 1 : -1);
    const routeArcs = [];
    for (let i = 1; i < xy.length; i++) {
      const [x1, y1] = xy[i - 1];
      const [x2, y2] = xy[i];
      const dx = x2 - x1;
      const dy = y2 - y1;
      const dist = Math.hypot(dx, dy);
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2;
      const lift = Math.min(68, Math.max(14, dist * 0.18));
      const cx = mx;
      const cy = Math.max(10, my - lift);
      let legState = 'done';
      if (activeLegIdx !== -1) {
        if (i === activeLegIdx) legState = 'next';
        else if (i > activeLegIdx || nextIdx === 0) legState = 'todo';
      }
      const dashAttrs = legState === 'done'
        ? 'pathLength="100" stroke-dasharray="100" stroke-dashoffset="0"'
        : legState === 'next'
          ? 'pathLength="100" stroke-dasharray="8 4" stroke-dashoffset="0"'
          : 'stroke-dasharray="5 5"';
      routeArcs.push(
        `<path class="sm-route sm-arc ${legState}" data-leg="${i}" data-from="${esc(pts[i - 1].r.round)}" data-to="${esc(pts[i].r.round)}" data-state="${legState}" d="M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" ${dashAttrs}/>`
      );
    }
    const route = `<g class="sm-flightpath" role="group" aria-label="Логистический маршрут паддока">${routeArcs.join('')}</g>`;
    const pins = pts.map((p, i) => {
      const [x, y] = xy[i];
      const cls = i === nextIdx ? 'next' : scheduleMoment(p.r) <= now ? 'done' : 'todo';
      return `<g class="sm-pin ${cls}" style="--i:${i}" tabindex="0" role="group" data-race="${esc(p.r.round)}" data-season="${esc(season)}" data-name="${esc(ruGP(p.r.raceName))}" data-place="${esc((p.r.Circuit?.Location?.locality || '') + ', ' + ruCountry(p.r.Circuit?.Location?.country || ''))}" aria-label="${esc(p.r.raceName)}, этап ${esc(p.r.round)}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)})"><g class="pin-in" style="--i:${i}">
        ${cls === 'next' ? '<circle class="ring" r="11"/>' : ''}<circle class="dot" r="6"/></g><circle class="pin-hit" r="64" fill="rgba(0,0,0,0.001)" stroke="none"/></g>`;
    }).join('');
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="Карта этапов сезона ${esc(season)}"><g class="sm-grid">${grid.join('')}</g><g class="sm-lands">${land}</g>${route}${pins}</svg>
      <div class="sm-legend"><span><i style="background:var(--green,#30d158)"></i>пройденный маршрут</span><span><i style="background:var(--red2)"></i>текущий перелёт паддока</span><span><i style="border:1.5px dashed var(--muted)"></i>предстоящая логистика</span></div>`;
    $('#seasonMapCaption').textContent = `${pts.length} ${ruPlural(pts.length, ['этап', 'этапа', 'этапов'])}`;
    box.classList.remove('draw');
    if (!Motion.reduced()) { void box.offsetWidth; box.classList.add('draw'); }
    this.animateFlightpath(box);
    if (!box.dataset.bound) {
      box.dataset.bound = '1';
      const tip = document.createElement('div'); tip.className = 'sm-tip'; tip.hidden = true; box.appendChild(tip);
      const show = pin => {
        const r = pin.getBoundingClientRect(), b = box.getBoundingClientRect();
        tip.innerHTML = `<b>${esc(pin.dataset.name)}</b><small>Этап ${esc(pin.dataset.race)} · ${esc(pin.dataset.place)}</small>`;
        tip.style.left = `${r.left - b.left + r.width / 2}px`; tip.style.top = `${r.top - b.top}px`; tip.hidden = false;
      };
      box.addEventListener('pointerover', e => { const pin = e.target.closest('.sm-pin'); if (pin) show(pin); });
      box.addEventListener('pointerout', e => { if (e.target.closest('.sm-pin')) tip.hidden = true; });
      box.addEventListener('focusin', e => { const pin = e.target.closest('.sm-pin'); if (pin) show(pin); });
      box.addEventListener('focusout', () => { tip.hidden = true; });
      box.addEventListener('click', e => { const pin = e.target.closest('.sm-pin'); if (pin) showRace(pin.dataset.race, Number(pin.dataset.season)); });
      box.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.closest?.('.sm-pin')) { e.preventDefault(); const pin = e.target.closest('.sm-pin'); showRace(pin.dataset.race, Number(pin.dataset.season)); } });
    }
  }
};

const WeekendWeather = {
  group(code) {
    if (code === 0) return 'sun';
    if (code <= 2) return 'partly';
    if (code === 3) return 'cloud';
    if (code === 45 || code === 48) return 'fog';
    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
    if (code >= 95) return 'storm';
    return 'cloud';
  },
  LABEL: { sun: 'ясно', partly: 'переменная облачность', cloud: 'пасмурно', fog: 'туман', rain: 'дождь', snow: 'снег', storm: 'гроза' },
  icon(group) {
    const sun = '<circle class="sun-core" cx="13" cy="13" r="5"/><g class="rays">' + [0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="13" y1="3" x2="13" y2="6" transform="rotate(${a} 13 13)"/>`).join('') + '</g>';
    const cloud = '<path class="cloud" d="M7 19.5a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6-1.2A4.6 4.6 0 0 1 18 19.5z"/>';
    const body = {
      sun,
      partly: '<g transform="translate(-3 -4) scale(.8)">' + sun + '</g>' + cloud.replace('d="', 'transform="translate(2 1)" d="'),
      cloud,
      fog: cloud + '<line class="drop" x1="6" y1="22" x2="20" y2="22"/><line class="drop" x1="9" y1="24.5" x2="17" y2="24.5"/>',
      rain: cloud + '<line class="drop" x1="9" y1="21" x2="8" y2="24"/><line class="drop" x1="13" y1="21" x2="12" y2="24"/><line class="drop" x1="17" y1="21" x2="16" y2="24"/>',
      snow: cloud + '<line class="flake" x1="9" y1="21.5" x2="9" y2="24.5"/><line class="flake" x1="13" y1="21.5" x2="13" y2="24.5"/><line class="flake" x1="17" y1="21.5" x2="17" y2="24.5"/>',
      storm: cloud + '<path class="bolt" d="M13.5 17 10 22.5h3l-1 4 4.5-6h-3z"/>'
    }[group] || cloud;
    return `<svg class="wx wx-play" viewBox="0 0 26 26" aria-hidden="true">${body}</svg>`;
  },
  paint(el, d) {
    if (!el) return;
    const i = 0;
    const code = d?.daily?.weather_code?.[i];
    const tmax = d?.daily?.temperature_2m_max?.[i], tmin = d?.daily?.temperature_2m_min?.[i];
    if (code === undefined || code === null || tmax === undefined) { el.hidden = true; return; }
    const g = this.group(Number(code));
    const rain = d.daily.precipitation_probability_max?.[i];
    const wind = d.daily.wind_speed_10m_max?.[i];
    const parts = [`${Math.round(tmax)}° / ${Math.round(tmin)}°`];
    if (rain !== undefined && rain !== null) parts.push(`дождь ${Math.round(rain)}%`);
    if (wind !== undefined && wind !== null) parts.push(`ветер ${Math.round(wind)} км/ч`);
    el.innerHTML = `${this.icon(g)}<span>${esc(this.LABEL[g])}<small> · ${esc(parts.join(' · '))}</small></span>`;
    el.title = 'Прогноз на день гонки · Open-Meteo';
    el.hidden = false;
  },
  async load(race) {
    const el = $('#nextWeather');
    if (!el || !race?.date) { if (el) el.hidden = true; return; }
    const loc = race.Circuit?.Location;
    const days = (Date.parse(race.date) - Date.now()) / 86400000;
    if (!loc || !Number.isFinite(Number(loc.lat)) || days > 15 || days < -1 || navigator.webdriver) { el.hidden = true; return; }
    const key = `f1tl:wx:${race.date}:${loc.lat},${loc.long}`;
    let data = null;
    try { const c = JSON.parse(safeStorage.get(key) || 'null'); if (c && Date.now() - c.ts < 30 * 60 * 1000) data = c.data; } catch {}
    if (!data) {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.long}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&start_date=${race.date}&end_date=${race.date}&timezone=auto`;
        const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 5000);
        const res = await fetch(url, { signal: ctrl.signal }); clearTimeout(t);
        if (res.ok) { data = await res.json(); try { safeStorage.set(key, JSON.stringify({ ts: Date.now(), data })); } catch {} }
      } catch { /* no forecast: the chip stays hidden */ }
    }
    if (el.isConnected) this.paint(el, data);
  }
};


const PosHistory = {
  async load(season, onProgress) {
    const cur = (await request(`${season}/driverstandings.json`)).data?.MRData?.StandingsTable?.StandingsLists?.[0];
    const last = Number(cur?.round);
    if (!(last >= 2)) return null;
    const rounds = Array.from({ length: last }, (_, i) => i + 1);
    let done = 0;
    const lists = await mapLimit(rounds, 3, async r => {
      const l = (await request(`${season}/${r}/driverstandings.json`)).data?.MRData?.StandingsTable?.StandingsLists?.[0];
      done++; onProgress?.(done, last);
      return l;
    });
    return { last, lists, finalRows: cur.DriverStandings || [] };
  },
  async show(season) {
    const box = $('#posHistoryBox');
    if (!box) return;
    box.innerHTML = '<div class="loading">Загружаем зачёт после каждого этапа… <span id="posHistoryN"></span></div>';
    try {
      const data = await this.load(season, (d, t) => { const el = $('#posHistoryN'); if (el) el.textContent = `${d} из ${t}`; });
      if (!data) { box.innerHTML = '<div class="empty">Для динамики нужно хотя бы два завершённых этапа.</div>'; return; }
      if (Number($('#standingsSeason')?.value) !== season) return;
      const failed = data.lists.filter(x => !x).length;
      const top = data.finalRows.slice(0, 8);
      const labels = data.lists.map((_, i) => String(i + 1));
      const seenColor = new Set();
      const datasets = top.map(row => {
        const id = row.Driver.driverId;
        const color = teamColor(row.Constructors?.[0]?.name);
        const second = seenColor.has(color);   // the second driver of a team is drawn dashed
        seenColor.add(color);
        return {
          label: row.Driver.familyName, borderDash: second ? [7, 4] : [], borderColor: color, backgroundColor: color, borderWidth: 2.4, pointRadius: 3, pointHoverRadius: 6, tension: .25, spanGaps: true,
          data: data.lists.map(l => { const r = l?.DriverStandings?.find(x => x.Driver.driverId === id); return r ? Number(r.position) : null; })
        };
      });
      box.innerHTML = `<div style="height:340px;position:relative"><canvas id="posHistoryChart"></canvas></div>${failed ? `<p class="subtle" style="font-size:12px;color:var(--amber,#ffb800)">Не удалось загрузить этапов: ${failed}.</p>` : ''}<p class="subtle" style="font-size:12px;margin:8px 0 0">Место в личном зачёте после каждого этапа, восемь лучших пилотов сезона. Подписи справа — финальное место; пунктир — второй пилот той же команды. Источник: Jolpica F1.</p>`;
      if (!PosHistory._registered && window.Chart?.register) { PosHistory._registered = true; Chart.register({
        id: 'endLabels',
        afterDatasetsDraw(chart) {
          if (!chart.options.plugins?.endLabels?.enabled) return;
          const g = chart.ctx; g.save(); g.font = '700 11px Inter, system-ui, sans-serif'; g.textBaseline = 'middle';
          chart.data.datasets.forEach((ds, i) => {
            const meta = chart.getDatasetMeta(i); const pts = meta.data.filter((pt, k) => ds.data[k] !== null);
            const pt = pts[pts.length - 1]; if (!pt) return;
            g.fillStyle = ds.borderColor; g.fillText(ds.label, pt.x + 8, pt.y);
          });
          g.restore();
        }
      }); }
      $('#posHistoryChart')?.setAttribute('role', 'img');
      $('#posHistoryChart')?.setAttribute('aria-label', `График мест в зачёте после каждого этапа: ${datasets.map(d => `${d.label} ${d.data.filter(Boolean).slice(-1)[0]}-е место`).join(', ')}`);
      drawChart('posHistoryChart', 'line', labels, datasets, {
        layout: { padding: { right: 78 } },
        scales: {
          x: { title: { display: true, text: 'Этап', color: '#8d98a7' }, ticks: { color: '#8d98a7' }, grid: { display: false } },
          y: { reverse: true, min: 1, max: Math.max(8, ...datasets.flatMap(d => d.data.filter(Boolean))) + 0.5, ticks: { stepSize: 1, color: '#8d98a7', callback: v => Number.isInteger(v) ? v : '' }, grid: { color: 'rgba(255,255,255,.08)' } }
        },
        plugins: { legend: { display: false }, endLabels: { enabled: true }, tooltip: { callbacks: { label: c => `${c.dataset.label}: ${c.parsed.y}-е место` } } }
      });
    } catch {
      box.innerHTML = '<div class="empty">Не удалось загрузить зачёт по этапам: Jolpica не ответила.</div>';
    }
  }
};
document.addEventListener('click', e => { if (e.target.closest('#posHistoryGo')) { e.stopPropagation(); PosHistory.show(Number($('#standingsSeason')?.value) || CURRENT_SEASON); } });

const Replay = {
  timer: null, nodes: [], i: 0, paused: false,
  lapOf(n) { return Number((n.firstElementChild?.textContent.match(/Круг\s+(\d+)/) || [])[1]); },
  ui() { return { btn: $('#tlPlay'), bar: $('#tlBar'), lap: $('#tlLap'), list: $('#timelineList') }; },
  stop(showAll = true) {
    clearTimeout(this.timer);
    this.timer = null;
    const { list } = this.ui();
    if (showAll) list?.querySelectorAll('.rp-hide').forEach(n => n.classList.remove('rp-hide'));
  },
  label(state) {
    const { btn } = this.ui();
    if (!btn) return;
    btn.textContent = state === 'play' ? '⏸ Пауза' : state === 'pause' ? '▶ Продолжить' : state === 'done' ? '↺ Смотреть заново' : '▶ Воспроизвести гонку';
    btn.setAttribute('aria-pressed', String(state === 'play'));
  },
  toggle() {
    if (this.timer) { clearTimeout(this.timer); this.timer = null; this.paused = true; this.label('pause'); return; }
    if (this.paused && this.nodes.some(n => n.isConnected)) { this.paused = false; this.label('play'); this.tick(); return; }
    this.start();
  },
  start() {
    const { list, bar, lap } = this.ui();
    this.stop(false);
    this.nodes = [...(list?.querySelectorAll('.timeline-node') || [])];
    if (!this.nodes.length) return;
    this.nodes.forEach(n => { n.classList.remove('rp-in'); n.classList.add('rp-hide'); });
    this.i = 0;
    this.paused = false;
    if (bar) bar.style.width = '0%';
    if (lap) lap.textContent = 'Старт';
    this.label('play');
    this.timer = setTimeout(() => this.tick(), 350);
  },
  tick() {
    this.timer = null;
    const { bar, lap, list } = this.ui();
    if (!list) { this.stop(false); return; }
    if (!this.nodes[this.i] || !this.nodes[this.i].isConnected) {
      const fresh = [...list.querySelectorAll('.timeline-node')];
      if (!fresh.length) { this.stop(false); this.label('idle'); return; }
      this.nodes = fresh;
      fresh.forEach((x, k) => { if (k >= this.i) x.classList.add('rp-hide'); });
      this.label('play');
    }
    const n = this.nodes[this.i];
    if (!n) { this.label('done'); return; }
    n.classList.remove('rp-hide');
    n.classList.add('rp-in');
    const lapNo = this.lapOf(n);
    if (lap) lap.textContent = Number.isFinite(lapNo) ? `Круг ${lapNo}` : 'Старт';
    this.i++;
    if (bar) bar.style.width = `${(this.i / this.nodes.length * 100).toFixed(1)}%`;
    try { n.scrollIntoView({ block: 'nearest', behavior: Motion.reduced() ? 'auto' : 'smooth' }); } catch {}
    if (this.i >= this.nodes.length) { if (lap) lap.textContent = 'Финиш'; this.label('done'); this.paused = false; return; }
    const dt = Math.min(420, Math.max(40, 22000 / this.nodes.length));
    this.timer = setTimeout(() => this.tick(), dt);
  }
};
document.addEventListener('click', e => { if (e.target.closest('#tlPlay')) { e.stopPropagation(); Replay.toggle(); } });

const NAT_RU = { Dutch: 'Нидерланды', British: 'Великобритания', Monegasque: 'Монако', Australian: 'Австралия', Spanish: 'Испания', Mexican: 'Мексика', German: 'Германия', Thai: 'Таиланд', Finnish: 'Финляндия', Canadian: 'Канада', Japanese: 'Япония', French: 'Франция', Danish: 'Дания', Chinese: 'Китай', Italian: 'Италия', American: 'США', 'New Zealander': 'Новая Зеландия', Brazilian: 'Бразилия', Argentine: 'Аргентина', Argentinian: 'Аргентина', Austrian: 'Австрия', Swiss: 'Швейцария', Belgian: 'Бельгия', Swedish: 'Швеция', Russian: 'Россия', Polish: 'Польша', Hungarian: 'Венгрия', Indian: 'Индия', Venezuelan: 'Венесуэла', Colombian: 'Колумбия', Portuguese: 'Португалия', Irish: 'Ирландия', Czech: 'Чехия', Indonesian: 'Индонезия', Malaysian: 'Малайзия', Estonian: 'Эстония', Liechtensteiner: 'Лихтенштейн', Rhodesian: 'Родезия', 'South African': 'ЮАР', Uruguayan: 'Уругвай', Chilean: 'Чили', Turkish: 'Турция', Cadillac: 'США' };
const ruNat = n => NAT_RU[n] || n;

const GP_RU = {
  'Australian': ['Австралия', 'Австралии'], 'Chinese': ['Китай', 'Китая'], 'Japanese': ['Япония', 'Японии'], 'Bahrain': ['Бахрейн', 'Бахрейна'],
  'Saudi Arabian': ['Саудовская Аравия', 'Саудовской Аравии'], 'Miami': ['Майами', 'Майами'], 'Emilia Romagna': ['Эмилия-Романья', 'Эмилии-Романьи'],
  'Monaco': ['Монако', 'Монако'], 'Canadian': ['Канада', 'Канады'], 'Spanish': ['Испания', 'Испании'], 'Barcelona': ['Барселона', 'Барселоны'],
  'Austrian': ['Австрия', 'Австрии'], 'British': ['Великобритания', 'Великобритании'], 'Hungarian': ['Венгрия', 'Венгрии'], 'Belgian': ['Бельгия', 'Бельгии'],
  'Dutch': ['Нидерланды', 'Нидерландов'], 'Italian': ['Италия', 'Италии'], 'Azerbaijan': ['Азербайджан', 'Азербайджана'], 'Singapore': ['Сингапур', 'Сингапура'],
  'United States': ['США', 'США'], 'Mexico City': ['Мехико', 'Мехико'], 'Mexican': ['Мексика', 'Мексики'], 'São Paulo': ['Сан-Паулу', 'Сан-Паулу'], 'Sao Paulo': ['Сан-Паулу', 'Сан-Паулу'],
  'Brazilian': ['Бразилия', 'Бразилии'], 'Las Vegas': ['Лас-Вегас', 'Лас-Вегаса'], 'Qatar': ['Катар', 'Катара'], 'Abu Dhabi': ['Абу-Даби', 'Абу-Даби'],
  'Portuguese': ['Португалия', 'Португалии'], 'French': ['Франция', 'Франции'], 'German': ['Германия', 'Германии'], 'Russian': ['Россия', 'России'],
  'Turkish': ['Турция', 'Турции'], 'Malaysian': ['Малайзия', 'Малайзии'], 'Korean': ['Корея', 'Кореи'], 'Indian': ['Индия', 'Индии'], 'Styrian': ['Штирия', 'Штирии'],
  'Eifel': ['Айфель', 'Айфеля'], 'Tuscan': ['Тоскана', 'Тосканы'], 'Sakhir': ['Сахир', 'Сахира'], 'Madrid': ['Мадрид', 'Мадрида'], 'Argentine': ['Аргентина', 'Аргентины']
};
const COUNTRY_RU = { Australia: 'Австралия', China: 'Китай', Japan: 'Япония', Bahrain: 'Бахрейн', 'Saudi Arabia': 'Саудовская Аравия', USA: 'США', 'United States': 'США', Canada: 'Канада', Monaco: 'Монако', Spain: 'Испания', Austria: 'Австрия', UK: 'Великобритания', 'United Kingdom': 'Великобритания', Belgium: 'Бельгия', Hungary: 'Венгрия', Netherlands: 'Нидерланды', Italy: 'Италия', Azerbaijan: 'Азербайджан', Singapore: 'Сингапур', Mexico: 'Мексика', Brazil: 'Бразилия', Qatar: 'Катар', UAE: 'ОАЭ', 'United Arab Emirates': 'ОАЭ', Portugal: 'Португалия', France: 'Франция', Germany: 'Германия', Russia: 'Россия', Turkey: 'Турция', Malaysia: 'Малайзия', Korea: 'Корея', 'South Korea': 'Южная Корея', India: 'Индия', Argentina: 'Аргентина' };
function ruCountry(c) { return COUNTRY_RU[c] || c; }
function ruGP(name, short = false) {
  const m = /^(.+?) Grand Prix(?: in (.+))?$/.exec(String(name || ''));
  if (!m || !GP_RU[m[1]]) return name;
  const [nom, gen] = GP_RU[m[1]];
  if (short) {
    if (name === 'Bahrain Grand Prix in Malaysia') return 'Малайзия (Сепанг)';
    return m[2] ? `${nom} (${ruCountry(m[2])})` : nom;
  }
  return `Гран-при ${gen}${m[2] ? ` в ${ruCountry(m[2]) === m[2] ? m[2] : ruCountry(m[2]).replace(/я$/, 'и')}` : ''}`;
}

const PosMoves = {
  cache: new Map(),
  files: { driver: 'driverstandings.json', team: 'constructorstandings.json' },
  async load(season, kind) {
    const key = `${season}:${kind}`;
    if (this.cache.has(key)) return this.cache.get(key);
    const task = (async () => {
      const file = this.files[kind];
      const cur = (await request(`${season}/${file}`)).data?.MRData?.StandingsTable?.StandingsLists?.[0];
      const round = Number(cur?.round);
      if (!cur || !(round >= 2)) return null;
      const prev = (await request(`${season}/${round - 1}/${file}`)).data?.MRData?.StandingsTable?.StandingsLists?.[0];
      if (!prev) return null;
      const rows = l => (kind === 'driver' ? l.DriverStandings : l.ConstructorStandings) || [];
      const idOf = x => (kind === 'driver' ? x.Driver.driverId : x.Constructor.constructorId);
      const toMap = l => new Map(rows(l).map(x => [idOf(x), Number(x.position)]));
      return { round, cur: toMap(cur), prev: toMap(prev) };
    })();
    task.catch(() => this.cache.delete(key));
    this.cache.set(key, task);
    return task;
  },
  mark(root, kind, data) {
    if (!root || !data) return;
    const attr = kind === 'driver' ? 'data-driver' : 'data-team';
    root.querySelectorAll(`tr[${attr}]`).forEach(tr => {
      const id = tr.getAttribute(attr);
      const now = data.cur.get(id), was = data.prev.get(id);
      const cell = tr.querySelector('td');
      if (!cell || !now || !was || cell.querySelector('.pos-move')) return;
      const d = was - now;
      if (!d) return;
      const el = document.createElement('small');
      el.className = `pos-move ${d > 0 ? 'up' : 'down'}`;
      el.textContent = `${d > 0 ? '▲' : '▼'}${Math.abs(d)}`;
      el.title = `После этапа ${data.round}: было ${was}-е место`;
      cell.appendChild(el);
    });
  },
  async decorateAll(season) {
    const targets = [['#homeDrivers', 'driver'], ['#driversTable', 'driver'], ['#historyTable', 'driver'], ['#homeTeams', 'team'], ['#constructorsTable', 'team'], ['#historyTeams', 'team']];
    for (const kind of ['driver', 'team']) {
      let data = null;
      try { data = await this.load(season, kind); } catch { data = null; }
      targets.filter(t => t[1] === kind).forEach(([sel]) => this.mark(document.querySelector(sel), kind, data));
    }
  }
};

const PageMotif = {
  host(tab) { return document.querySelector(`#${tab} .page-head`); },
  set(tab, html, cls) {
    const h = this.host(tab);
    if (!h) return null;
    h.classList.add('has-motif');
    let m = h.querySelector(':scope > .motif');
    if (!m) { m = document.createElement('div'); m.setAttribute('aria-hidden', 'true'); h.appendChild(m); }
    m.className = 'motif ' + cls;
    m.innerHTML = html;
    return m;
  },
  stat(tab, big, caption) {
    if (big === null || big === undefined || big === '') return;
    this.set(tab, `<span class="ghost-year">${esc(big)}</span>${caption ? `<small>${esc(caption)}</small>` : ''}`, 'motif-year');
  },
  circuits() {
    const races = state.calendar || [];
    const known = r => { const c = r?.Circuit?.circuitId; return Boolean(c && CIRCUIT_PATHS[TRACK_ALIASES[c] || c]); };
    const pick = [nextRace(races), ...races.slice().reverse()].find(known);
    if (!pick) return;
    const cid = pick.Circuit.circuitId, canon = TRACK_ALIASES[cid] || cid;
    const h = this.host('circuits');
    if (h?.querySelector(':scope > .motif')?.dataset.circuit === canon) return;
    const decorativeSvg = heroTrackSvg(canon, 'motifTrackPath', false).replace(/\srole="button"\stabindex="0"/g, '');
    const m = this.set('circuits', decorativeSvg + `<small>${esc(pick.Circuit.circuitName || '')}</small>`, 'motif-track');
    if (m) { m.dataset.circuit = canon; if (!Motion.reduced()) { m.classList.remove('draw'); void m.offsetWidth; m.classList.add('draw'); } }
  },
  compare(sa, sb, colA, colB) {
    const code = d => String(d?.Driver?.code || d?.Driver?.familyName || '').slice(0, 3).toUpperCase();
    this.set('compare', `<span class="vs"><b style="--c:${colA}">${esc(code(sa))}</b><i>VS</i><b style="--c:${colB}">${esc(code(sb))}</b></span>`, 'motif-vs');
  },
  history(season, champ) {
    const who = champ ? `${season < CURRENT_SEASON ? '🏆 ' : ''}${esc(driverName(champ.Driver))}` : '';
    this.set('history', `<span class="ghost-year">${esc(season)}</span>${who ? `<small>${who}</small>` : ''}`, 'motif-year');
  }
};
// Ghost lap: a dot drives the measured outline at the pace of the real lap it was measured on. Each sector takes
// its real share of the lap time (OpenF1 sector times of the fastest qualifying lap); inside a sector the speed is
// even, because only the sector time is known. The replay is faster than life and says by how much.
const GhostLap = {
  SPEED: 8,
  autoDone: false,
  data(canon) {
    const o = typeof TRACK_OUTLINES !== 'undefined' ? TRACK_OUTLINES[canon] : null;
    const src = o && o.source;
    const t = src && src.sector_times;
    if (!Array.isArray(t) || t.length !== 3 || !t.every(v => Number(v) > 0) || !Array.isArray(o.sectors)) return null;
    return { times: t.map(Number), total: t.reduce((a, v) => a + Number(v), 0), bounds: [0, o.sectors[0] / 1000, o.sectors[1] / 1000, 1], driver: src.driver || null, year: src.year };
  },
  // OpenF1 writes the family name in capitals ("Lando NORRIS"): shown as a name ("Lando Norris")
  who(name) { return String(name || '').split(' ').map(w => w.length > 1 && w === w.toUpperCase() ? w[0] + w.slice(1).toLowerCase() : w).join(' '); },
  fmt(t) { const m = Math.floor(t / 60); return `${m}:${(t - m * 60).toFixed(3).padStart(6, '0')}`; },
  // where on the lap (0..1 of its length) the car is t seconds after the start
  at(d, t) {
    let from = 0;
    for (let k = 0; k < 3; k++) {
      if (t <= from + d.times[k] || k === 2) return { f: d.bounds[k] + (d.bounds[k + 1] - d.bounds[k]) * Math.min(1, Math.max(0, (t - from) / d.times[k])), sector: k + 1 };
      from += d.times[k];
    }
  },
  mount(hud, box, canon) {
    if (!hud || !box) return;
    this.stop(box);
    const d = this.data(canon);
    box._ghost = d ? { hud, canon } : null;
    if (!d) { hud.innerHTML = ''; return; }
    hud.innerHTML = `<button type="button" class="lap-btn" aria-label="Показать лучший круг квалификации на схеме">▶ Круг</button>
      <span class="lap-time">${this.fmt(d.total)}</span><span class="lap-splits"></span>
      <span class="lap-cap">Лучший круг квалификации ${esc(d.year)}${d.driver ? ' · ' + esc(this.who(d.driver)) : ''} · телеметрия OpenF1</span>`;
    hud.querySelector('.lap-btn').onclick = () => (box._ghostRun ? this.stop(box, true) : this.run(box));
  },
  stop(box, reset = false) {
    const run = box._ghostRun;
    if (run) { cancelAnimationFrame(run.raf); box._ghostRun = null; }
    box.querySelector('.t-ghost')?.remove();
    box.classList.remove('sector-focus-s1', 'sector-focus-s2', 'sector-focus-s3');
    const g = box._ghost;
    if (!g || !g.hud.isConnected) return;
    const btn = g.hud.querySelector('.lap-btn');
    if (btn) btn.textContent = '▶ Круг';
    if (reset) { const d = this.data(g.canon); if (d) { g.hud.querySelector('.lap-time').textContent = this.fmt(d.total); g.hud.querySelector('.lap-splits').textContent = ''; } }
  },
  run(box) {
    const g = box._ghost;
    const d = g && this.data(g.canon);
    const path = box.querySelector('path.t-base, path.track-base-path');
    const svg = path?.ownerSVGElement;
    if (!d || !path || !svg || typeof path.getTotalLength !== 'function') return;
    this.stop(box);
    const len = path.getTotalLength();
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('class', 't-ghost');
    dot.setAttribute('r', '8');
    svg.appendChild(dot);
    const timeEl = g.hud.querySelector('.lap-time'), splitsEl = g.hud.querySelector('.lap-splits');
    g.hud.querySelector('.lap-btn').textContent = '■ Стоп';
    splitsEl.textContent = '';
    const t0 = performance.now();
    let shown = 0;
    const frame = now => {
      if (!box.isConnected || !dot.isConnected) { box._ghostRun = null; return; }
      const t = Math.min(d.total, (now - t0) / 1000 * this.SPEED);
      const pos = this.at(d, t);
      const pt = path.getPointAtLength(pos.f * len);
      dot.setAttribute('cx', pt.x.toFixed(1));
      dot.setAttribute('cy', pt.y.toFixed(1));
      box.classList.toggle('sector-focus-s1', pos.sector === 1);
      box.classList.toggle('sector-focus-s2', pos.sector === 2);
      box.classList.toggle('sector-focus-s3', pos.sector === 3);
      timeEl.textContent = this.fmt(t);
      const passed = t >= d.total ? 3 : pos.sector - 1;
      if (passed !== shown) {
        shown = passed;
        splitsEl.innerHTML = d.times.slice(0, passed).map((v, k) => `<b class="s${k + 1}">S${k + 1} ${v.toFixed(3)}</b>`).join('') + (passed === 3 ? `<i>показ ускорен ×${this.SPEED}</i>` : '');
      }
      if (t < d.total) { box._ghostRun.raf = requestAnimationFrame(frame); return; }
      box._ghostRun = null;
      setTimeout(() => { if (!box._ghostRun) { dot.remove(); box.classList.remove('sector-focus-s1', 'sector-focus-s2', 'sector-focus-s3'); const b = g.hud.querySelector('.lap-btn'); if (b) b.textContent = '▶ Круг'; } }, 1200);
    };
    box._ghostRun = { raf: requestAnimationFrame(frame) };
  },
  // the first time the map is shown the lap plays by itself, once
  auto(box) {
    if (this.autoDone || !box._ghost || navigator.webdriver) return false;
    this.autoDone = true;
    this.run(box);
    return true;
  }
};

function startTrackLap(box) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;  // static outline, no motion
  box.classList.remove('draw');
  void box.offsetWidth;  // restart the CSS animation
  box.classList.add('draw');
  const car = box.querySelector('.t-car');
  const anim = car?.querySelector('animateMotion');
  if (!anim || typeof anim.beginElement !== 'function') return;
  setTimeout(() => {
    if (!box.isConnected || !car.isConnected) return;
    if (GhostLap.auto(box)) return;      // the real lap replaces the decorative run where it is known
    car.classList.add('on');
    try { anim.beginElement(); } catch {}
    setTimeout(() => car.classList.remove('on'), 4200);
  }, 2300);
}
function animateCount(el, to, prefix = '', ms = 1300) {
  if (!el) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !Number.isFinite(to)) { el.textContent = prefix + fmtNum(to); return; }
  const t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / ms);
    el.textContent = prefix + fmtNum(Math.round(to * (1 - Math.pow(1 - k, 3))));
    if (k < 1 && el.isConnected) requestAnimationFrame(step);
    else if (el.isConnected) el.textContent = prefix + fmtNum(to);
  };
  requestAnimationFrame(step);
}

function setHeroTitle(season) {
  const h = $('#heroTitle');
  if (!h) return;
  const nextHtml = `<span class="sr-only">Формула‑1: </span>Сезон ${esc(season)}`;
  if (h.innerHTML !== nextHtml) h.innerHTML = nextHtml;
}

function renderHeroSummary(b) {
  const el = $('#heroCopy');
  if (!el || !b?.drivers?.length) return;
  try { ChampionHall.render(b); } catch (e) { console.warn('champion hall', e); }
  const races = b.races || [];
  const done = races.filter(r => isRaceCompleted({ ...r, season: r.season || b.season })).length;
  const [p1, p2] = b.drivers;
  const gap = p2 ? Number(p1.points) - Number(p2.points) : 0;
  const left = races.length - done;
  const maxLeft = left * 25 + races.slice(done).filter(r => r.Sprint).length * 8;
  const champion = done === races.length && races.length > 0;
  const team = b.teams?.[0];
  const gapBox = $('#heroGap');
  if (gapBox) {
    const nextGapHtml = !champion && p2 && Number.isFinite(gap)
      ? `<b data-val="${gap}">+${fmtNum(gap)}</b><span>очк. отрыв лидера<small>${esc(p1.Driver.familyName)} над ${esc(p2.Driver.familyName)}</small></span>`
      : '';
    if (gapBox.dataset.shown !== String(gap) || gapBox.innerHTML !== nextGapHtml) {
      gapBox.innerHTML = nextGapHtml;
      if (gapBox.firstElementChild && gapBox.dataset.shown !== String(gap)) {
        gapBox.dataset.shown = String(gap);
        animateCount(gapBox.querySelector('b'), gap, '+');
      }
    }
  }
  const nextCopy = champion
    ? `Чемпион мира ${b.season}: <b>${esc(driverName(p1.Driver))}</b> (${fmtNum(p1.points)} очк.). Кубок конструкторов: <b>${esc(team?.Constructor?.name || 'нет данных')}</b>.`
    : `Позади <b>${done}</b> из ${races.length} ${ruPlural(races.length, ['этапа', 'этапов', 'этапов'])}${left ? `, в розыгрыше ещё до ${maxLeft} ${ruPlural(maxLeft, ['очка', 'очков', 'очков'])}` : ''}${team ? ` · Кубок конструкторов: <b>${esc(team.Constructor?.name || '')}</b>` : ''}`;
  const norm = str => String(str || '').replace(/\s+/g, ' ').trim();
  if (norm(el.innerHTML) !== norm(nextCopy)) {
    el.innerHTML = nextCopy;
  }
}

// Title fight: points scored in races by the first three of the standings, round after round. Read from the race
// results the page already holds; sprint points are not in those results, and the caption says so.
function renderHeroFight(b) {
  renderTitleFight($('#heroFight'), b);
  // new round results reach the home chart first; the Standings panel for the same season is redrawn with them
  if ($('#standingsFight .hf-legend') && Number($('#standingsSeason')?.value) === Number(b?.season)) renderStandingsFight(b.season, state.standings?.season === Number(b.season) ? state.standings.drivers : b.drivers);
}



// Wall of champions: pointing at (or focusing) a year shows the champion's photo, the lead image of his English Wikipedia
// article. The article is found by name and kept only when Wikipedia describes it as a racing driver; otherwise no photo.
const ChampThumb = {
  cache: new Map(),
  async photo(drv) {
    const title = `${drv.givenName} ${drv.familyName}`.replace(/ /g, '_');
    if (this.cache.has(title)) return this.cache.get(title);
    const job = fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`).then(r => (r.ok ? r.json() : null))
      .then(j => (j && j.type === 'standard' && /racing driver|formula one/i.test(j.description || j.extract || '') && j.thumbnail?.source ? j.thumbnail.source : null))
      .catch(() => null);
    this.cache.set(title, job);
    return job;
  },
  bind(box, list) {
    if (!box || navigator.onLine === false) return;
    let tip = document.getElementById('champThumb');
    if (!tip) { tip = document.createElement('div'); tip.id = 'champThumb'; tip.className = 'champ-thumb'; tip.hidden = true; tip.setAttribute('aria-hidden', 'true'); document.body.appendChild(tip); }
    const bySeason = {};
    list.forEach(x => { bySeason[x.season] = x; });
    const show = async btn => {
      const x = bySeason[btn.dataset.historySeason];
      if (!x) return;
      btn._want = true;
      const src = await this.photo(x.driver);
      if (!src || !btn._want || !btn.isConnected) return;
      const r = btn.getBoundingClientRect();
      tip.innerHTML = `<img src="${esc(src)}" alt="" referrerpolicy="no-referrer"><span>${esc(x.season)} · ${esc(x.driver.givenName)} ${esc(x.driver.familyName)}</span>`;
      tip.style.left = `${Math.min(window.innerWidth - 180, Math.max(8, r.left + r.width / 2 - 86))}px`;
      tip.style.top = `${Math.max(8, r.top - 214)}px`;
      tip.hidden = false;
    };
    const hide = btn => { btn._want = false; tip.hidden = true; };
    box.querySelectorAll('[data-history-season]').forEach(btn => {
      btn.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') show(btn); });
      btn.addEventListener('pointerleave', () => hide(btn));
      btn.addEventListener('focus', () => show(btn));
      btn.addEventListener('blur', () => hide(btn));
    });
    window.addEventListener('scroll', () => { tip.hidden = true; }, { passive: true });
  }
};


// "More" sheet on the phone: the page under it does not scroll, Esc and a swipe down close it
const MoreSheet = {
  el() { return $('#moreSheet'); },
  set(open) {
    const el = this.el(); if (!el) return;
    el.classList.toggle('open', open);
    document.body.classList.toggle('sheet-open', open);
    $('#bottomMore')?.setAttribute('aria-expanded', String(open));
    const box = el.querySelector('.more-sheet-box'); if (box) box.style.transform = '';
  },
  toggle() { this.set(!this.el()?.classList.contains('open')); },
  close() { this.set(false); },
  init() {
    const el = this.el(), box = el?.querySelector('.more-sheet-box');
    if (!el || !box || el._init) return;
    el._init = true;
    $('#bottomMore')?.setAttribute('aria-expanded', 'false');
    $('#bottomMore')?.setAttribute('aria-controls', 'moreSheet');
    el.addEventListener('click', e => { if (e.target === el) this.close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && el.classList.contains('open')) this.close(); });
    let y0 = null, dy = 0;
    box.addEventListener('touchstart', e => { y0 = e.touches[0].clientY; dy = 0; }, { passive: true });
    box.addEventListener('touchmove', e => { if (y0 === null) return; dy = Math.max(0, e.touches[0].clientY - y0); box.style.transform = dy ? `translateY(${dy}px)` : ''; }, { passive: true });
    box.addEventListener('touchend', () => { if (y0 === null) return; y0 = null; if (dy > 60) this.close(); else box.style.transform = ''; });
  }
};


// Site only: the code of the windows and of the secondary tabs lives in a second file (scripts/build_site.py moves it,
// leaving small stubs in its place). It is fetched once the first screen is up, or at the first call of a stub.
// In the single file SITE is null and all the code is here, so nothing below runs.
const LazyMod = {
  _job: null,
  load() {
    if (!SITE?.lazy) return Promise.resolve(false);
    if (!this._job) {
      this._job = new Promise((ok, fail) => {
        const el = document.createElement('script');
        el.src = SITE.base + SITE.lazy;
        el.onload = () => ok(true);
        el.onerror = () => { this._job = null; el.remove(); fail(new Error('Не удалось загрузить часть сайта: проверьте сеть')); };
        document.head.appendChild(el);
      });
    }
    return this._job;
  },
  warm() {
    if (!SITE?.lazy) return;
    const go = () => this.load().catch(() => {});
    if ('requestIdleCallback' in window) requestIdleCallback(go, { timeout: 4000 }); else setTimeout(go, 1500);
  }
};


// Длинные вкладки: кнопка «Наверх» после двух экранов прокрутки; повторное нажатие на открытую вкладку внизу тоже ведёт наверх
const ToTop = {
  init() {
    if (this._init) return;
    this._init = true;
    const b = document.createElement('button');
    b.type = 'button'; b.id = 'toTop'; b.className = 'to-top'; b.hidden = true;
    b.setAttribute('aria-label', 'Наверх');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(b);
    b.addEventListener('click', () => this.go());
    let tick = false;
    window.addEventListener('scroll', () => {
      if (tick) return; tick = true;
      requestAnimationFrame(() => { tick = false; b.hidden = scrollY < innerHeight * 2 || document.body.classList.contains('modal-open'); });
    }, { passive: true });
    $('#bottomNav')?.addEventListener('click', e => {
      const a = e.target.closest('a[data-tab]');
      if (a && a.dataset.tab === state.tab && !(e.metaKey || e.ctrlKey || e.shiftKey) && scrollY > 0) this.go();
    }, true);
  },
  go() { window.scrollTo({ top: 0, behavior: Motion.reduced() ? 'auto' : 'smooth' }); }
};

// Один раз на телефоне: подсказка, что вкладки листаются свайпом вбок
const SwipeHint = {
  KEY: 'f1tl:swipeHint',
  init() {
    if (navigator.webdriver || !window.matchMedia?.('(pointer: coarse)').matches || safeStorage.get(this.KEY)) return;
    setTimeout(() => {
      if (document.body.classList.contains('modal-open')) return;
      toast('Подсказка: вкладки листаются свайпом влево и вправо');
      safeStorage.set(this.KEY, '1');
    }, 6000);
  }
};

// Окно гонки: выбранная вкладка окна прокручивается к середине полосы вкладок (их больше, чем влезает на телефоне)
document.addEventListener('click', e => {
  const t = e.target.closest?.('.modal-tab');
  if (t && t.parentElement?.scrollWidth > t.parentElement?.clientWidth) t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
});

// Чем пользуется человек прямо сейчас: клавиатурой или касанием/мышью (от этого зависит, куда ставить фокус)
const InputMode = {
  keyboard: false,
  init() {
    document.addEventListener('keydown', e => { if (!e.metaKey && !e.ctrlKey && !e.altKey) this.keyboard = true; }, true);
    document.addEventListener('pointerdown', () => { this.keyboard = false; }, true);
  }
};

// Кнопка «i»: пояснения «как считается» и «откуда данные» не висят на экране, а открываются по нажатию.
// Монитор: блок рядом с кнопкой; телефон: шторка снизу. Закрывается Esc, крестиком и нажатием мимо.
// Текст берётся из соседнего <span class="info-tip-body" hidden> (разметка сайта, тексты API в ней уже через esc)
// или из атрибута data-tip (простой текст).
const InfoTip = {
  pop: null,
  btn: null,
  body(btn) {
    const next = btn.nextElementSibling;
    if (next?.classList.contains('info-tip-body')) return next.innerHTML;
    return esc(btn.dataset.tip || '');
  },
  make() {
    if (this.pop) return this.pop;
    const p = document.createElement('div');
    p.id = 'infoTipPop';
    p.className = 'info-pop';
    p.setAttribute('role', 'dialog');
    p.tabIndex = -1;
    // верхний слой браузера (popover): блок не обрезают окна и прокручиваемые контейнеры
    if ('popover' in HTMLElement.prototype) p.popover = 'manual'; else p.hidden = true;
    document.body.appendChild(p);
    return (this.pop = p);
  },
  isOpen() { return !!this.btn; },
  open(btn) {
    if (this.btn === btn) { this.close(true); return; }
    this.close();
    const p = this.make();
    const sheet = !!window.matchMedia?.('(pointer: coarse)').matches || innerWidth < 560;
    const title = btn.getAttribute('aria-label') || 'Пояснение';
    p.classList.toggle('as-sheet', sheet);
    p.setAttribute('aria-label', title);
    p.innerHTML = `<div class="info-pop-head"><b>${esc(title)}</b><button type="button" class="info-pop-close" aria-label="Закрыть">×</button></div><div class="info-pop-body">${this.body(btn)}</div>`;
    // внутри окна подсказка остаётся частью окна: так её видят экранные дикторы и ловушка фокуса
    const host = btn.closest('#modal') || document.body;
    if (p.parentElement !== host) host.appendChild(p);
    p.style.left = p.style.top = p.style.width = '';
    if (p.popover) p.showPopover(); else p.hidden = false;
    if (!sheet) this.place(btn, p);
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-controls', 'infoTipPop');
    this.btn = btn;
    p.focus({ preventScroll: true });
  },
  place(btn, p) {
    const r = btn.getBoundingClientRect(), w = Math.min(360, innerWidth - 24);
    p.style.width = `${w}px`;
    p.style.left = `${Math.max(12, Math.min(r.left + r.width / 2 - w / 2, innerWidth - w - 12))}px`;
    const h = p.offsetHeight, below = r.bottom + 8;
    p.style.top = `${below + h > innerHeight - 12 && r.top - 8 - h > 12 ? r.top - 8 - h : below}px`;
  },
  close(returnFocus) {
    const p = this.pop, b = this.btn;
    if (!p || !b) return;
    if (p.popover) { try { p.hidePopover(); } catch {} } else p.hidden = true;
    b.setAttribute('aria-expanded', 'false');
    this.btn = null;
    if (returnFocus) b.focus({ preventScroll: true });
  },
  init() {
    if (this._init) return;
    this._init = true;
    // перехват на этапе погружения: нажатие на «i» внутри карточки не открывает саму карточку
    document.addEventListener('click', e => {
      const b = e.target.closest?.('.info-tip');
      if (b) { e.preventDefault(); e.stopPropagation(); this.open(b); return; }
      if (!this.btn) return;
      if (e.target.closest?.('.info-pop-close')) { this.close(true); return; }
      if (!this.pop.contains(e.target)) this.close();
    }, true);
    // Esc закрывает только подсказку, а не окно под ней
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.btn) { e.preventDefault(); e.stopImmediatePropagation(); this.close(true); }
    }, true);
    // при прокрутке и смене размера блок едет за кнопкой; закрывается, только когда кнопка ушла с экрана
    const follow = e => {
      if (!this.btn || this.pop.classList.contains('as-sheet') || (e?.target && (e.target === this.pop || this.pop.contains?.(e.target)))) return;
      const r = this.btn.getBoundingClientRect();
      if (!this.btn.isConnected || r.bottom < 0 || r.top > innerHeight) this.close();
      else this.place(this.btn, this.pop);
    };
    window.addEventListener('resize', follow);
    document.addEventListener('scroll', follow, { passive: true, capture: true });
  }
};

// Site only: the calendar of the current season as a subscription (calendar.ics is rebuilt with the site, from Jolpica)
const CalendarSub = {
  init() {
    const a = $('#calendarSub'), hint = $('#calendarSubHint');
    if (!a || !SITE || !/^https?:$/.test(location.protocol)) return;
    const https = new URL(SITE.base + 'calendar.ics', location.origin).href;
    a.href = https.replace(/^https?:/, 'webcal:');
    a.hidden = false;
    // как подписаться — под «i» рядом с кнопкой, а не абзацем под списком этапов
    if (!a.nextElementSibling?.classList.contains('info-tip')) {
      a.insertAdjacentHTML('afterend', `<button type="button" class="info-tip" aria-label="Как подписаться на календарь" aria-expanded="false"><span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>На iPhone и Mac кнопка откроет «Календарь». В Google Календаре: «Другие календари» → «Добавить по URL» → <code>${esc(https)}</code>. Расписание обновляется вместе с сайтом.</span>`);
    }
    if (hint) hint.hidden = true;
  }
};

// Installed app open in the background: new race results are checked every 30 minutes, and a badge appears on the app
// icon when a new round is out; it goes as soon as the app is in front again. No push, no server: nothing runs when closed.
const AppBadge = {
  seen: 0,
  init() {
    if (!('setAppBadge' in navigator) || !window.matchMedia?.('(display-mode: standalone)').matches || navigator.webdriver) return;
    const check = async () => {
      if (!document.hidden || !navigator.onLine) return;
      try {
        const res = await request(`${CURRENT_SEASON}/last/results.json`, { force: true });
        const round = Number(readRaces(res.data)[0]?.round) || 0;
        if (!this.seen) this.seen = round;
        else if (round > this.seen) navigator.setAppBadge(round - this.seen).catch(() => {});
      } catch {}
    };
    request(`${CURRENT_SEASON}/last/results.json`).then(r => { this.seen = Number(readRaces(r.data)[0]?.round) || 0; }).catch(() => {});
    setInterval(check, 30 * 60 * 1000);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) { navigator.clearAppBadge?.().catch(() => {}); request(`${CURRENT_SEASON}/last/results.json`).then(r => { this.seen = Number(readRaces(r.data)[0]?.round) || this.seen; }).catch(() => {}); }
    });
  }
};

// Phone: a horizontal swipe on the page goes to the neighbouring tab (TAB_ORDER). Not over tables, charts, maps, scrollable
// rows or form fields, and not while a window or the search is open; a mostly vertical move is a scroll, never a swipe.
const TabSwipe = {
  init() {
    if (!window.matchMedia?.('(pointer: coarse)').matches) return;
    const main = $('#main');
    if (!main) return;
    let x0 = null, y0 = 0, t0 = 0;
    const blocked = el => el.closest?.('table, .table-wrap, canvas, svg, input, select, textarea, .hero-track, .champ-grid, .race-list, .modal, [data-no-swipe]')
      || [...(function* (e) { for (; e && e !== main; e = e.parentElement) yield e; })(el)].some(e => e.scrollWidth > e.clientWidth + 4 && /(auto|scroll)/.test(getComputedStyle(e).overflowX));
    main.addEventListener('touchstart', e => {
      if (e.touches.length !== 1 || document.body.classList.contains('modal-open') || document.body.classList.contains('sheet-open') || blocked(e.target)) { x0 = null; return; }
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; t0 = Date.now();
    }, { passive: true });
    main.addEventListener('touchend', e => {
      if (x0 === null) return;
      const t = e.changedTouches[0], dx = t.clientX - x0, dy = t.clientY - y0;
      x0 = null;
      if (Math.abs(dx) < 70 || Math.abs(dx) < Math.abs(dy) * 2 || Date.now() - t0 > 600) return;
      const i = TAB_ORDER.indexOf(state.tab), next = TAB_ORDER[i + (dx < 0 ? 1 : -1)];
      if (next) switchTab(next);
    }, { passive: true });
  }
};

// ==== Champion hall ====
// The champion of a season, read from the data only: the title is settled when every round is run, or when the leader is
// ahead by more than the points still to be won (25 a race, 8 a sprint: the same rule as renderHeroSummary). No name or
// year is written here. Photos: on the site, the files made by scripts/build_champion_photos.py (free licences, with
// authors); in the single file, the lead image of the driver's Wikipedia article. No photo: a duotone in the team colour.
const ChampionHall = {
  // the dossier of the reigning champion gets the hall photos behind its header
  decorateDossier() {
    const bg = document.querySelector('#modal .dp-hall');
    const c = this.current();
    if (bg && c) this.paintBg(bg, c, teamColor(c.row.Constructors?.[0]?.name));
  },
  decide(b) {
    const races = b?.races || [], drivers = b?.drivers || [];
    if (drivers.length < 2 || !races.length) return null;
    const done = races.filter(r => isRaceCompleted({ ...r, season: r.season || b.season })).length;
    const left = races.slice(done);
    const maxLeft = left.length * 25 + left.filter(r => r.Sprint).length * 8;
    const [p1, p2] = drivers;
    const gap = Number(p1.points) - Number(p2.points);
    const final = done === races.length;
    if (!Number.isFinite(gap) || (!final && !(gap > maxLeft))) return null;
    return { season: Number(b.season), final, row: p1, gap, done, total: races.length };
  },
  // podiums and poles only when every finished round is known; otherwise they are left out rather than undercounted
  extras(c) {
    const eps = getEmbeddedSnapshot()?.endpoints || {};
    const id = c.row.Driver.driverId;
    let podiums = 0, poles = 0, races = 0, quals = 0;
    for (let r = 1; r <= c.done; r++) {
      const res = TitleFightLive.got[`${c.season}/${r}`] || readRaces(eps[`${c.season}/${r}/results.json`])[0]?.Results;
      if (res?.length) { races++; const p = Number(res.find(x => x.Driver?.driverId === id)?.position); if (p >= 1 && p <= 3) podiums++; }
      const q = readRaces(eps[`${c.season}/${r}/qualifying.json`])[0]?.QualifyingResults;
      if (q?.length) { quals++; if (q.find(x => x.Driver?.driverId === id)?.position === '1') poles++; }
    }
    return { podiums: races === c.done ? podiums : null, poles: quals === c.done ? poles : null };
  },
  photos(season) {
    const set = SITE?.champions?.[season];
    if (!set?.photos?.length) return [];
    return set.photos.map(p => ({ src: `${SITE.base}${set.dir}${p.file}-1600.webp`, small: `${SITE.base}${set.dir}${p.file}-800.webp`, credit: `${p.author} · ${p.licence}`, link: p.source }));
  },
  async wikiPhoto(d) {
    if (!d?.url || navigator.onLine === false) return null;
    try {
      const title = decodeURIComponent(d.url.split('/wiki/')[1] || '');
      const data = state.imageCache.drivers.get(title) || await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`).then(r => (r.ok ? r.json() : null));
      if (!data?.thumbnail?.source) return null;
      state.imageCache.drivers.set(title, data);
      return { src: data.originalimage?.source || data.thumbnail.source, small: data.thumbnail.source, credit: 'Википедия', link: `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}` };
    } catch { return null; }
  },
  // the photo layer: duotone in the team colour, faded to the panel at the edges, slow cross-fade (one still frame under reduced motion)
  async paintBg(bg, c, col) {
    if (!bg) return;
    bg.style.setProperty('--hall-c', col);
    let list = this.photos(c.season);
    if (!list.length) { const w = await this.wikiPhoto(c.row.Driver); if (w) list = [w]; }
    if (!bg.isConnected) return;
    const credit = bg.parentElement?.querySelector('.hall-credit');
    if (credit) {
      const uniq = [...new Map(list.map(p => [p.credit, p])).values()];
      const links = uniq.map(p => `<a href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${esc(p.credit)}</a>`);
      // свои фото с Wikimedia Commons: авторы и лицензии одним нажатием; запасное фото Википедии — одна ссылка
      credit.innerHTML = !list.length ? ''
        : uniq.some(p => p.credit !== 'Википедия')
          ? `<button type="button" class="info-tip info-tip-text" aria-label="Фото: авторы и лицензии" aria-expanded="false">Фото: Wikimedia Commons <span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>${links.join('<br>')}</span>`
          : `Фото: ${links.join(', ')}`;
    }
    const sig = list.map(p => p.src).join('|') || 'none';
    if (bg.dataset.sig === sig) return;
    bg.dataset.sig = sig;
    clearInterval(bg._t);
    bg.innerHTML = list.map((p, i) => `<img data-src="${esc(p.src)}" data-srcset="${esc(p.small)} 800w, ${esc(p.src)} 1600w" sizes="(max-width: 860px) 100vw, 70vw" alt="" decoding="async"${i ? '' : ' class="on"'}>`).join('') + '<i class="hall-tint"></i>';
    const wake = img => { if (img && !img.src && img.dataset.src) { img.srcset = img.dataset.srcset; img.src = img.dataset.src; } };
    const first = () => wake(bg.querySelector('img'));
    const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(first, { timeout: 3000 }) : setTimeout(first, 800));
    if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle, { once: true });
    bg.classList.toggle('has-photo', list.length > 0);
    if (list.length > 1 && !Motion.reduced()) {
      let k = 0;
      bg._t = setInterval(() => {
        if (!bg.isConnected) return clearInterval(bg._t);
        const imgs = bg.querySelectorAll('img');
        wake(imgs[(k + 2) % imgs.length]);
        imgs[k]?.classList.remove('on'); k = (k + 1) % imgs.length; wake(imgs[k]); imgs[k]?.classList.add('on');
      }, 9000);
    }
  },
  statsHtml(c) {
    const x = this.extras(c);
    const items = [[fmtNum(c.row.points), 'очков'], [fmtNum(c.row.wins), ruPlural(Number(c.row.wins), ['победа', 'победы', 'побед'])]];
    if (x.podiums !== null) items.push([fmtNum(x.podiums), ruPlural(x.podiums, ['подиум', 'подиума', 'подиумов'])]);
    if (x.poles !== null) items.push([fmtNum(x.poles), ruPlural(x.poles, ['поул', 'поула', 'поулов'])]);
    return `<div class="hall-stats">${items.map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div>`;
  },
  label(c) { return `Чемпион мира ${c.season}${c.final ? '' : ' · решено математически'}`; },
  render(b) {
    const box = $('#championHall'), card = $('#seasonCard');
    if (!box || !card) return;
    const c = this.decide(b);
    card.classList.toggle('is-champion', Boolean(c));
    if (!c) { if (!box.hidden) { box.hidden = true; box.innerHTML = ''; } return; }
    const d = c.row.Driver, team = c.row.Constructors?.[0]?.name || '';
    const col = teamColor(team);
    const sig = `${c.season}:${c.final}:${c.row.points}:${c.row.wins}:${c.gap}:${c.done}`;
    if (box.dataset.sig !== sig) {
      box.dataset.sig = sig;
      box.style.setProperty('--hall-c', col);
      box.innerHTML = `<div class="eyebrow hall-eyebrow">${esc(this.label(c))}</div>
        <div class="hall-name"><span>${esc(d.givenName)}</span><b>${esc(d.familyName)}</b></div>
        <div class="hall-team">${esc(team)}${d.permanentNumber ? ` · <span class="hall-num">${esc(d.permanentNumber)}</span>` : ''}</div>
        ${this.statsHtml(c)}
        <div class="hall-foot"><button type="button" class="btn secondary" data-hall-driver="${esc(d.driverId)}">Личное дело чемпиона</button><small class="hall-credit"></small></div>`;
      box.querySelector('[data-hall-driver]').onclick = () => showDriver(d.driverId, c.season);
      box.hidden = false;
    }
    this.paintBg($('#hallBg'), c, col);
    this.plaque(c, col);
  },
  // History tab: one line on top, with the same photo layer
  plaque(c, col) {
    const el = $('#historyHall');
    if (!el) return;
    const d = c.row.Driver;
    const sig = `${c.season}:${c.final}:${c.row.points}`;
    if (el.dataset.sig === sig) return;
    el.dataset.sig = sig;
    el.style.setProperty('--hall-c', col);
    el.innerHTML = `<div class="hall-bg" aria-hidden="true"></div><div class="plaque-body"><div class="eyebrow">${esc(this.label(c))}</div>
      <div class="hall-name small"><span>${esc(d.givenName)}</span><b>${esc(d.familyName)}</b></div>
      <div class="hall-team">${esc(c.row.Constructors?.[0]?.name || '')} · ${fmtNum(c.row.points)} ${ruPlural(c.row.points, ['очко', 'очка', 'очков'])} · ${fmtNum(c.row.wins)} ${ruPlural(Number(c.row.wins), ['победа', 'победы', 'побед'])}</div><small class="hall-credit"></small></div>`;
    el.hidden = false;
    this.paintBg(el.querySelector('.hall-bg'), c, col);
  },
  // the settled title of the season on screen (state), or null
  current() {
    const st = state.standings;
    if (!st?.drivers?.length) return null;
    return this.decide({ season: st.season || state.season, drivers: st.drivers, races: st.races || state.calendar || [] });
  },
  // titles of a driver: champions.json, plus the current season when the data has settled it
  allTitles(driverId) {
    const years = this.titlesOf(driverId);
    const c = this.current();
    if (c && c.row.Driver.driverId === driverId && !years.includes(c.season)) years.push(c.season);
    return years.sort((a, b) => a - b);
  },
  // titles of a driver, from champions.json: [2008, 2014, ...]
  titlesOf(driverId) {
    const list = getEmbeddedSnapshot()?.endpoints?.['champions.json']?.drivers || [];
    return list.filter(x => x.driver?.driverId === driverId).map(x => Number(x.season)).sort((a, b) => a - b);
  }
};

// race results of finished rounds that the snapshot does not hold yet, fetched once per round: { 'season/round': Results[] }
const TitleFightLive = { got: {}, pending: new Set() };

function renderTitleFight(box, b, { n = 3, H = 120, interactive = false } = {}) {
  if (!box) return;
  const top = (b?.drivers || []).slice(0, n);
  const eps = getEmbeddedSnapshot()?.endpoints || {};
  const rx = new RegExp(`^${Number(b?.season)}/(\\d+)/results\\.json$`);
  const fromSnap = Object.keys(eps).map(k => (k.match(rx) || [])[1]).filter(Boolean).map(Number);
  const fromLive = Object.keys(TitleFightLive.got).filter(k => k.startsWith(`${Number(b?.season)}/`)).map(k => Number(k.split('/')[1]));
  const rounds = [...new Set([...fromSnap, ...fromLive])].sort((x, y) => x - y)
    .map(r => ({ r, res: TitleFightLive.got[`${Number(b.season)}/${r}`] || readRaces(eps[`${b.season}/${r}/results.json`])[0]?.Results || [] })).filter(x => x.res.length);
  if (top.length < 2 || rounds.length < 2) {
    const html = `<div class="hf-head"><span class="eyebrow">Борьба за титул</span></div><p class="hf-none">Нет данных по этапам${b?.season ? ` сезона ${esc(b.season)}` : ''}: результаты гонок по этапам встроены с 2016 года.</p>`;
    if (box.innerHTML !== html) { box.innerHTML = html; box.dataset.sig = ''; }
    return;
  }
  const series = top.map(d => {
    let sum = 0;
    const pts = rounds.map(x => (sum += Number(x.res.find(q => q.Driver?.driverId === d.Driver.driverId)?.points) || 0));
    return { name: d.Driver.familyName, col: teamColor(d.Constructors?.[0]?.name), pts, total: sum };
  });
  series.forEach((x, i) => { x.mate = series.slice(0, i).some(y => y.col === x.col); });      // a teammate has the same colour: dashed line
  const W = 600, max = Math.max(1, ...series.map(x => x.total));
  const X = i => (i / (rounds.length - 1) * W).toFixed(1);
  const Y = v => (H - 4 - v / max * (H - 10)).toFixed(1);
  const races = b?.races || state.calendar || [];
  const done = races.filter(r => isRaceCompleted({ ...r, season: r.season || b?.season || state.season })).length;
  const lastRound = rounds[rounds.length - 1]?.r;
  // finished rounds missing from the chart: ask Jolpica for them (live season only) and redraw when they arrive
  if (done > rounds.length && Number(b?.season) === Number(CURRENT_SEASON) && navigator.onLine !== false) {
    const have = new Set(rounds.map(x => x.r));
    const missing = [];
    for (let r = 1; r <= done; r++) if (!have.has(r) && !TitleFightLive.pending.has(`${b.season}/${r}`)) missing.push(r);
    missing.forEach(r => {
      const key = `${Number(b.season)}/${r}`;
      TitleFightLive.pending.add(key);
      request(`${b.season}/${r}/results.json`).then(res => {
        const list = readRaces(res?.data)[0]?.Results || [];
        if (!list.length) return;
        TitleFightLive.got[key] = list;
        if (box.isConnected) { box.dataset.sig = ''; renderTitleFight(box, b, { n, H, interactive }); }
      }).catch(() => {});
    });
  }
  const note = (done > rounds.length && lastRound)
    ? `очки за гонки, без спринтов · этапы 1–${lastRound}, результаты ${done}-го этапа ещё загружаются`
    : 'очки за гонки по этапам, без спринтов';
  const sig = `${b?.season}:${n}:${rounds.length}:${done}:${series.map(x => `${x.name}=${x.total}`).join(',')}`;
  if (box.dataset.sig === sig) return;
  box.dataset.sig = sig;
  const label = `Очки за гонки после ${rounds.length} ${ruPlural(rounds.length, ['этапа', 'этапов', 'этапов'])}: ` + series.map(x => `${x.name} ${fmtNum(x.total)}`).join(', ');
  const legendItem = (x, i) => interactive
    ? `<button type="button" class="hf-key${x.mate ? ' hf-mate' : ''}" data-i="${i}" style="--c:${x.col}" aria-pressed="false"><i></i>${esc(x.name)} <b>${fmtNum(x.total)}</b></button>`
    : `<span${x.mate ? ' class="hf-mate"' : ''} style="--c:${x.col}"><i></i>${esc(x.name)} <b>${fmtNum(x.total)}</b></span>`;
  box.innerHTML = `<div class="hf-head"><span class="eyebrow">Борьба за титул${interactive ? ` · ${esc(b.season)}` : ''}</span><span class="hf-note">${note}</span></div>
    <svg class="hf-chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${esc(label)}" style="height:${H}px">
      ${[0.25, 0.5, 0.75].map(k => `<line class="hf-grid" x1="0" x2="${W}" y1="${(H * k).toFixed(1)}" y2="${(H * k).toFixed(1)}"/>`).join('')}
      ${series.map((x, i) => ({ x, i })).reverse().map(({ x, i }) => `<path data-i="${i}" class="${i === 0 ? 'hf-lead' : ''}${x.mate ? ' hf-mate' : ''}" style="stroke:${x.col}" d="M${x.pts.map((v, k) => `${X(k)} ${Y(v)}`).join('L')}"/>`).join('')}
    </svg>
    <div class="hf-axis"><span>этап ${rounds[0].r}</span>${interactive ? `<span>максимум ${fmtNum(max)} очк.</span>` : ''}<span>этап ${rounds[rounds.length - 1].r}</span></div>
    <div class="hf-legend">${series.map(legendItem).join('')}</div>`;
  if (!interactive) return;
  // one line at a time: pointing at a name (or focusing it) brings its line forward and dims the rest; a click keeps it
  let pinned = null;
  const focus = i => {
    box.classList.toggle('hf-focus', i !== null);
    box.querySelectorAll('.hf-chart path').forEach(p => p.classList.toggle('on', i !== null && p.dataset.i === String(i)));
    box.querySelectorAll('.hf-key').forEach(k => { k.classList.toggle('on', i !== null && k.dataset.i === String(i)); k.setAttribute('aria-pressed', String(pinned !== null && k.dataset.i === String(pinned))); });
  };
  box.querySelectorAll('.hf-key').forEach(k => {
    const i = Number(k.dataset.i);
    k.addEventListener('pointerenter', () => focus(i));
    k.addEventListener('pointerleave', () => focus(pinned));
    k.addEventListener('focus', () => focus(i));
    k.addEventListener('blur', () => focus(pinned));
    k.addEventListener('click', () => { pinned = pinned === i ? null : i; focus(pinned); });
  });
  box.querySelectorAll('.hf-chart path').forEach(p => {
    p.addEventListener('pointerenter', () => focus(Number(p.dataset.i)));
    p.addEventListener('pointerleave', () => focus(pinned));
  });
}

// Standings: the same chart, larger, for the selected season (top five). On the site an archive season arrives as its
// own file first; until then the chart says there is nothing to draw rather than guessing.
function renderStandingsFight(season, drivers) {
  const box = $('#standingsFight');
  if (!box || !drivers?.length) return;
  const draw = () => {
    if (Number($('#standingsSeason')?.value) !== Number(season)) return;
    renderTitleFight(box, { season, drivers, races: Number(season) === Number(state.season) ? (state.calendar || []) : [] }, { n: 5, H: 220, interactive: true });
  };
  draw();
  SnapshotStore.ensure(`${season}/1/results.json`).then(loaded => { if (loaded) { box.dataset.sig = ''; draw(); } });
}

function loadStandings(opts) { return loadStandingsPage(opts); }
function loadCalendar(opts) { return loadCalendarPage(opts); }

async function loadStandingsPage({ signal = null } = {}) {
  const season = Number($('#standingsSeason').value);
  setPageSeason('standings', season);

  const fastDrivers = (state.standings?.season === season ? state.standings.drivers : null) ||
                      readDrivers(readSnapshot(`${season}/driverstandings.json`)?.data);
  const fastTeams = (state.standings?.season === season ? state.standings.teams : null) ||
                    readTeams(readSnapshot(`${season}/constructorstandings.json`)?.data);
  if (fastDrivers?.length && fastTeams?.length) {
    $('#standingsCaption').textContent = `${season}`;
    $('#driversTable').innerHTML = renderDriverTable(fastDrivers, 24, season);
    renderStandingsFight(season, fastDrivers);
    PageMotif.stat('standings', fastDrivers[0]?.points, `Лидер: ${driverName(fastDrivers[0]?.Driver)}`);
    $('#constructorsTable').innerHTML = renderTeamTable(fastTeams, season);
    PosMoves.decorateAll(season);
  } else {
    $('#driversTable').innerHTML = Skeletons.table(8, 6);
    $('#constructorsTable').innerHTML = Skeletons.table(6, 5);
  }
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#standingsSeason').value) !== season) return;
    $('#standingsCaption').textContent = `${season}`;
    state.pageData.standings = { season, b };
    $('#driversTable').innerHTML = renderDriverTable(b.drivers, 24, season);
    renderStandingsFight(season, b.drivers);
    PageMotif.stat('standings', b.drivers[0]?.points, `Лидер: ${driverName(b.drivers[0]?.Driver)}`);
    $('#constructorsTable').innerHTML = renderTeamTable(b.teams, season);
    if (!navigator.webdriver && navigator.onLine && !$('#posHistoryChart')) setTimeout(() => { if (state.tab === 'standings' && Number($('#standingsSeason')?.value) === season && !$('#posHistoryChart')) PosHistory.show(season); }, 900);
    PosMoves.decorateAll(season);
    ImageObserver.observeAll?.();
  } catch {
    $('#driversTable').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить зачёт пилотов.</p><button class="btn secondary" style="margin-top:8px" onclick="loadStandingsPage()">Повторить попытку</button></div>';
    $('#constructorsTable').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить зачёт команд.</p></div>';
  }
}

async function loadCalendarPage({ signal = null } = {}) {
  const season = Number($('#calendarSeason')?.value) || state.seasons?.calendar || CURRENT_SEASON;
  setPageSeason('calendar', season);
  const snapData = readSnapshot(`${season}.json`)?.data || readSnapshot("2026.json")?.data || readSnapshot("2025.json")?.data || readSnapshot("2024.json")?.data;
  const initialRaces = (snapData ? readRaces(snapData) : []) || (state.calendar && Number(state.calendar[0]?.season) === season ? state.calendar : []);
  if (initialRaces.length) { renderCalendar(initialRaces); } else { $("#calendarList").innerHTML = Skeletons.cards(6); }
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#calendarSeason').value) !== season) return;
    state.pageData.calendar = { season, b };
    renderCalendar(b.races);
  } catch {
    if (signal?.aborted) return;
    $('#calendarList').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить календарь этапов.</p><button class="btn secondary" style="margin-top:8px" onclick="loadCalendarPage()">Повторить попытку</button></div>';
  }
}

async function loadCircuitsPage(...args) { const self = loadCircuitsPage; await LazyMod.load(); if (loadCircuitsPage === self) throw new Error("loadCircuitsPage: second script missing"); return loadCircuitsPage(...args); }

async function loadDriversPage({ signal = null } = {}) {
  const season = Number($('#driverSeason').value);
  setPageSeason('drivers', season);
  { const n = state.standings?.drivers?.length || readDrivers(readSnapshot(`${season}/driverstandings.json`)?.data).length; if (n) PageMotif.stat('drivers', n, `${ruPlural(n, ['пилот', 'пилота', 'пилотов'])} в сезоне ${season}`); }

  const fastDrivers = (state.standings?.season === season ? state.standings.drivers : null) ||
                      readDrivers(readSnapshot(`${season}/driverstandings.json`)?.data);
  if (fastDrivers?.length) {
    renderDrivers(fastDrivers, season);
  } else {
    $('#driverGrid').innerHTML = Skeletons.cards(8);
  }
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#driverSeason').value) !== season) return;
    state.driverPage = b.drivers;
    state.pageData.drivers = { season, b };
    renderDrivers(b.drivers, season);
  } catch {
    if (signal?.aborted) return;
    if (!$('#driverGrid .driver-card')) {
      $('#driverGrid').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить пилотов сезона.</p><button class="btn secondary" style="margin-top:8px" onclick="loadDriversPage()">Повторить попытку</button></div>';
    }
  }
}

async function loadTeamsPage({ signal = null } = {}) {
  const season = Number($('#teamSeason').value);
  setPageSeason('teams', season);
  { const n = state.standings?.teams?.length || readTeams(readSnapshot(`${season}/constructorstandings.json`)?.data).length; if (n) PageMotif.stat('teams', n, `${ruPlural(n, ['команда', 'команды', 'команд'])} в сезоне ${season}`); }

  const fastTeams = (state.standings?.season === season ? state.standings.teams : null) ||
                    readTeams(readSnapshot(`${season}/constructorstandings.json`)?.data);
  const fastDrivers = (state.standings?.season === season ? state.standings.drivers : null) ||
                      readDrivers(readSnapshot(`${season}/driverstandings.json`)?.data);
  if (fastTeams?.length) {
    renderTeams(fastTeams, fastDrivers || [], season);
  } else {
    $('#teamGrid').innerHTML = Skeletons.cards(6);
  }
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#teamSeason').value) !== season) return;
    state.pageData.teams = { season, b };
    renderTeams(b.teams, b.drivers, season);
  } catch {
    if (signal?.aborted) return;
    if (!$('#teamGrid .team-card')) {
      $('#teamGrid').innerHTML = '<div class="error-box"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:8px 0 0">Не удалось загрузить команды сезона.</p><button class="btn secondary" style="margin-top:8px" onclick="loadTeamsPage()">Повторить попытку</button></div>';
    }
  }
}

async function loadHistory(...args) { const self = loadHistory; await LazyMod.load(); if (loadHistory === self) throw new Error("loadHistory: second script missing"); return loadHistory(...args); }

let _currentTabAbortController = null;
let _currentVt = null;

async function switchTab(tab, { fromPopState = false } = {}) {
  const prevTab = state.tab;
  const dir = TAB_ORDER.indexOf(tab) - TAB_ORDER.indexOf(prevTab);
  document.documentElement.style.setProperty('--tab-dx', dir === 0 || !prevTab ? '0px' : (dir > 0 ? '18px' : '-18px'));
  requestAnimationFrame(() => Motion.panelRows(tab));
  setTimeout(() => Motion.reveal(tab), 700);
  setTimeout(() => Motion.reveal(tab), 2200);
  state.tab = tab;
  setTimeout(() => ProvBar.render(tab), 0);
  state._tabGeneration = (state._tabGeneration || 0) + 1;
  const gen = state._tabGeneration;

  if (_currentTabAbortController) {
    try { _currentTabAbortController.abort(); } catch {}
  }
  _currentTabAbortController = new AbortController();
  const tabSignal = _currentTabAbortController.signal;

  // the old screen fades out while the new one comes in (View Transitions); without the API the panels just swap.
  // The tab itself (state, menu, address) changes at once; the transition only animates the panels.
  const swapPanels = () => $$('.panel').forEach(p => p.classList.toggle('active', p.id === state.tab));
  const root = document.documentElement;
  if (!fromPopState && prevTab && prevTab !== tab && document.startViewTransition && document.body.dataset.booted && !Motion.reduced() && (!navigator.webdriver || window.__f1ForceVT)) {
    try {
      root.classList.add('vt-run');
      const vt = document.startViewTransition(swapPanels);
      vt.ready?.catch(() => {});
      vt.updateCallbackDone?.catch(() => {});
      _currentVt = vt;
      vt.finished.catch(() => {}).finally(() => { if (_currentVt === vt) { _currentVt = null; root.classList.toggle('vt-run', false); } swapPanels(); });
    } catch { _currentVt = null; root.classList.toggle('vt-run', false); swapPanels(); }
  } else swapPanels();

  if (gen === state._tabGeneration) {
    $$('#nav :is(button,a)').forEach(b => { b.classList.toggle('active', b.dataset.tab === tab); if (b.dataset.tab === tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    $$('#bottomNav a[data-tab]').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
    const secondaryTabs = ['circuits', 'teams', 'compare', 'my', 'history'];
    const isSecondary = secondaryTabs.includes(tab);
    const tabNames = { home: 'Обзор', standings: 'Турнир', calendar: 'Календарь', circuits: 'Трассы', drivers: 'Пилоты', teams: 'Команды', compare: 'Сравнение', my: 'Моё', history: 'История' };
    const bottomMoreBtn = $('#bottomMore');
    if (bottomMoreBtn) {
      bottomMoreBtn.classList.toggle('active', isSecondary);
      const subLabel = isSecondary ? (tabNames[tab] || 'Ещё') : 'Ещё';
      const textNode = Array.from(bottomMoreBtn.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.textContent = subLabel;
      else bottomMoreBtn.append(document.createTextNode(subLabel));
    }
    if (!fromPopState) syncHashWithTab(tab);
    document.title = `${tabNames[tab] || 'Обзор'} · F1 Timeline 2.0`;
    const pageH1 = $('#pageH1');
    if (pageH1) {
      pageH1.hidden = tab === 'home';
      pageH1.textContent = tab === 'home' ? '' : `${tabNames[tab] || ''} · F1 Timeline`;
    }
    const heroH1 = $('#heroTitle');
    if (heroH1) heroH1.hidden = tab !== 'home';
  }
  const tabDesc = {
    home: 'Формула‑1: отрыв лидера, обратный отсчёт до гонки, прогноз погоды и расписание сессий.',
    standings: 'Личный и командный зачёты Формулы‑1, гонка за очками и динамика мест по этапам.',
    calendar: 'Календарь сезона Формулы‑1 с картой этапов и временем сессий в вашем часовом поясе.',
    circuits: 'Каталог автодромов Формулы‑1: схемы, рекорды круга, история Гран-при и телеметрия.',
    drivers: 'Пилоты Формулы‑1 сезона: личные дела, радар профиля, карьера и результаты этапов.',
    teams: 'Команды Формулы‑1: логотипы, руководство, личные дела, пит-стопы и история.',
    compare: 'Сравнение двух пилотов Формулы‑1: очки, квалификации, финиши и дуэли по этапам.',
    my: 'Избранные пилоты и команды, просмотренные гонки и личная статистика.',
    history: 'Все чемпионы мира Формулы‑1 с 1950 года и итоговые таблицы любого сезона.'
  };
  document.querySelector('meta[name="description"]')?.setAttribute('content', tabDesc[tab] || tabDesc.home);
  window.scrollTo(0, 0);
  NavMotion.update(true);

  if (tab === 'home') await loadHome({ signal: tabSignal });
  else if (tab === 'standings') await loadStandingsPage({ signal: tabSignal });
  else if (tab === 'calendar') await loadCalendarPage({ signal: tabSignal });
  else if (tab === 'circuits') await loadCircuitsPage();
  else if (tab === 'drivers') await loadDriversPage({ signal: tabSignal });
  else if (tab === 'teams') await loadTeamsPage({ signal: tabSignal });
  else if (tab === 'compare') await loadComparePage({ signal: tabSignal });
  else if (tab === 'my') await loadMyPage();
  else if (tab === 'history') await loadHistory({ signal: tabSignal });

  if (state._tabGeneration !== gen || state.tab !== tab) return;
}

let _lastRefreshClick = 0;
async function refreshAll() {
  const now = Date.now();
  const diff = now - _lastRefreshClick;
  if (_lastRefreshClick > 0 && diff < 30000) {
    const remaining = Math.ceil((30000 - diff) / 1000);
    toast(`Обновление ограничено: подождите ${remaining} сек. перед повторной попыткой.`);
    return;
  }
  _lastRefreshClick = now;
  setStatus('', 'СИНХРОНИЗАЦИЯ');
  try {
    await loadHome({ force: true });

    if (state.tab === 'standings') {
      const s = Number($('#standingsSeason').value) || state.season;
      const b = await loadSeasonBundle(s, { force: true });
      state.standings = b;
      renderStandings(b);
    } else if (state.tab === 'calendar') {
      const s = Number($('#calendarSeason').value) || state.season;
      const b = await loadSeasonBundle(s, { force: true });
      state.calendar = b.races;
      renderCalendar(b.races);
    } else if (state.tab === 'drivers') {
      const s = Number($('#driverSeason').value) || state.season;
      const b = await loadSeasonBundle(s, { force: true });
      state.driverPage = b.drivers;
      renderDrivers(b.drivers, s);
    } else if (state.tab === 'teams') {
      const s = Number($('#teamSeason').value) || state.season;
      const b = await loadSeasonBundle(s, { force: true });
      renderTeams(b.teams || b.constructors, b.drivers || [], s);
    } else if (state.tab === 'circuits') {
      await loadCircuitsPage();
    } else if (state.tab === 'history') {
      await loadHistory();
    }

    setStatus('updated', 'СЕТЬ (LIVE)');
    toast('Данные успешно обновлены из официального источника');
  } catch (err) {
    console.error('refreshAll error:', err);
    setStatus('error', 'ОШИБКА ОБНОВЛЕНИЯ');
    toast('Не удалось обновить данные. Проверьте сеть.');
  }
}

async function exportUpdatedHtmlFile() {
  try {
    toast('Формирование обновлённого HTML файла…');

    const idbEntries = (typeof f1IdbStore !== 'undefined' && f1IdbStore.getAll)
      ? await f1IdbStore.getAll()
      : [];

    const currentSnap = getEmbeddedSnapshot() || {};
    const endpointsMap = Object.assign({}, currentSnap.endpoints || {});

    let newEntriesCount = 0;
    for (const item of idbEntries) {
      if (item && item.path && item.data) {
        const clean = String(item.path).replace(/^\/+/, '');
        endpointsMap[clean] = item.data;
        newEntriesCount++;
      }
    }

    const seasonsSet = new Set(currentSnap._metadata?.seasons || [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]);
    for (const key of Object.keys(endpointsMap)) {
      const match = key.match(/^(\d{4})/);
      if (match) seasonsSet.add(Number(match[1]));
    }
    const seasons = Array.from(seasonsSet).sort((a, b) => a - b);

    const mergedSnapshot = [{
      _metadata: {
        generatedAt: new Date().toISOString(),
        version: '2.2-embedded-full',
        seasons,
        source: 'Jolpica F1 API + Ergast Database Archive + Embedded Snapshot + Local IndexedDB Sync',
        totalEndpoints: Object.keys(endpointsMap).length
      },
      endpoints: endpointsMap
    }];

    const serializedSnapshot = JSON.stringify(mergedSnapshot);
    const safeSnapshotJson = serializedSnapshot.replace(/</g, '\\u003c');

    let fullHtml = '';
    try {
      if (typeof window !== 'undefined' && window.location && window.location.href) {
        const resp = await fetch(window.location.href);
        if (resp.ok) {
          const rawHtml = await resp.text();
          const snapTagRegex = new RegExp('<' + 'script\\s+type="application/json"\\s+id="f1-snapshot">[\\s\\S]*?<\\/' + 'script>', 'i');
          if (snapTagRegex.test(rawHtml)) {
            fullHtml = rawHtml.replace(
              snapTagRegex,
              () => '<' + 'script type="application/json" id="f1-snapshot">\n' + safeSnapshotJson + '\n<' + '/script>'
            );
          }
        }
      }
    } catch (fetchErr) {
      console.warn('Fetch template fallback to DOM outerHTML:', fetchErr);
    }

    if (!fullHtml) {
      const docClone = document.documentElement.cloneNode(true);
      docClone.querySelectorAll('.modal').forEach(m => { m.style.display = 'none'; });
      const toastEl = docClone.querySelector('#toast');
      if (toastEl) {
        toastEl.hidden = true;
        toastEl.textContent = '';
      }

      const snapEl = docClone.querySelector('#f1-snapshot');
      if (snapEl) {
        snapEl.textContent = '\n' + safeSnapshotJson + '\n';
      }

      fullHtml = `<!DOCTYPE html>\n` + docClone.outerHTML;
    }

    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    const dateStr = new Date().toISOString().slice(0, 10);
    a.download = `f1_timeline_synced_${dateStr}.html`;
    document.body.appendChild(a);
    a.click();

    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    }, 2000);

    toast(`Экспорт завершён: ${Object.keys(endpointsMap).length} эндпоинтов встроено (+${newEntriesCount} из IndexedDB)`);
    return true;
  } catch (err) {
    console.error('exportUpdatedHtmlFile failed:', err);
    toast('Ошибка при экспорте HTML файла. Подробности в консоли.');
    return false;
  }
}

function initExportModal() {
  const exportBtn = $('#exportHtmlBtn') || $('#exportBtn');
  const exportModal = $('#exportModal');
  const closeBtn = $('#exportModalClose');
  const cancelBtn = $('#exportModalCancelBtn');
  const downloadBtn = $('#exportModalDownloadBtn');

  if (!exportModal) return;

  async function openModal() {
    exportModal.style.display = 'block';
    const snap = getEmbeddedSnapshot();
    const snapCount = snap?.endpoints ? Object.keys(snap.endpoints).length : 0;
    let idbCount = 0;
    if (typeof f1IdbStore !== 'undefined' && f1IdbStore.count) {
      idbCount = await f1IdbStore.count();
    }
    const statEmbedded = $('#exportStatEmbedded');
    if (statEmbedded) statEmbedded.textContent = `${snapCount} эндпоинтов`;
    const statIdb = $('#exportStatIdb');
    if (statIdb) statIdb.textContent = `${idbCount} записей`;
    const statTotal = $('#exportStatTotal');
    if (statTotal) statTotal.textContent = `${snapCount + idbCount} эндпоинтов (оценочно)`;
  }

  function closeModal() {
    exportModal.style.display = 'none';
  }

  exportBtn?.addEventListener('click', openModal);
  closeBtn?.addEventListener('click', closeModal);
  cancelBtn?.addEventListener('click', closeModal);
  exportModal.addEventListener('click', (e) => {
    if (e.target.id === 'exportModal') closeModal();
  });

  downloadBtn?.addEventListener('click', async () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = 'Экспортирую…';
    try {
      await exportUpdatedHtmlFile();
      closeModal();
    } finally {
      downloadBtn.disabled = false;
      downloadBtn.textContent = 'Скачать обновлённый HTML';
    }
  });
}

function initEvents() {
  $('#nav')?.addEventListener('click', e => {
    const btn = e.target.closest('a[data-tab], button[data-tab]');
    if (!btn) return;
    if (btn.tagName === 'A') { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; e.preventDefault(); }   // plain click: no page jump, the tab is switched in place; Ctrl/Cmd-click opens the tab address in a new window
    switchTab(btn.dataset.tab);
  });

  $$('[data-go]').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.go)));

  $('#refreshBtn')?.addEventListener('click', refreshAll);
  initExportModal();
  $('#themeBtn')?.addEventListener('click', () => {
    if (!Motion.reduced()) { document.documentElement.classList.add('theme-fade'); setTimeout(() => document.documentElement.classList.remove('theme-fade'), 500); }
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? '' : 'light';
    document.documentElement.setAttribute('data-theme', current);
    safeStorage.set('f1theme', current || 'dark');
    safeStorage.set('f1tl:theme', current || 'dark');
    setTimeout(() => Accent.apply(), 0);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', current === 'light' ? '#f4f6f9' : '#08090b');
    updateChartsTheme();
  });
  const savedTheme = safeStorage.get('f1theme') || safeStorage.get('f1tl:theme');
  const sysLight = window.matchMedia && !navigator.webdriver ? window.matchMedia('(prefers-color-scheme: light)') : null;
  const applyTheme = light => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : '');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f4f6f9' : '#08090b');
  };
  if (savedTheme === 'light' || (!savedTheme && sysLight?.matches)) applyTheme(true);
  // no choice of their own: the page follows the system setting when it changes
  sysLight?.addEventListener?.('change', e => { if (!safeStorage.get('f1theme') && !safeStorage.get('f1tl:theme')) { applyTheme(e.matches); setTimeout(() => Accent.apply(), 0); updateChartsTheme(); } });
  try {
    const savedSeasons = JSON.parse(safeStorage.get('f1tl:seasons') || 'null');
    if (savedSeasons && typeof savedSeasons === 'object') {
      Object.keys(savedSeasons).forEach(k => {
        const v = Number(savedSeasons[k]);
        if (v >= 1950 && v <= CURRENT_SEASON) state.seasons[k] = v;
      });
    }
  } catch {}

  $('#standingsSeason')?.addEventListener('change', loadStandingsPage);
  $('#calendarSeason')?.addEventListener('change', loadCalendarPage);

  $('#circuitSearch')?.addEventListener('input', renderCircuitCatalog);
  $('#circuitSeasonFilter')?.addEventListener('change', renderCircuitCatalog);
  $('#circuitCountryFilter')?.addEventListener('change', renderCircuitCatalog);

  $('#driverSearch')?.addEventListener('input', () => renderDrivers(state.driverPage || [], pageSeason('drivers')));
  $('#driverSeason')?.addEventListener('change', loadDriversPage);

  $('#teamSeason')?.addEventListener('change', loadTeamsPage);

  $('#historySeason')?.addEventListener('change', loadHistory);

  $('#compareSeason')?.addEventListener('change', loadComparePage);
  $('#compareA')?.addEventListener('change', renderComparison);
  $('#compareB')?.addEventListener('change', renderComparison);
  $('#mySeason')?.addEventListener('change', loadMyPage);
  $('#compareSwap')?.addEventListener('click', () => {
    const a = $('#compareA').value;
    $('#compareA').value = $('#compareB').value;
    $('#compareB').value = a;
    renderComparison();
  });
  $('#calendarIcs')?.addEventListener('click', exportCalendarIcs);
  InputMode.init();
  ToTop.init();
  SwipeHint.init();
  InfoTip.init();
  CalendarSub.init();
  AppBadge.init();
  TabSwipe.init();

  $('#modalClose')?.addEventListener('click', closeModal);
  $('#modal')?.addEventListener('click', e => {
    if (e.target.id === 'modal') closeModal();
  });

  document.addEventListener('click', e => {
    const fav = e.target.closest('.fav-btn');
    if (fav) {
      e.stopPropagation();
      const on = Favs.toggle(fav.dataset.fav, fav.dataset.id);
      toast(on ? 'Добавлено в избранное' : 'Убрано из избранного');
      return;
    }
    const watch = e.target.closest('[data-watch]');
    if (watch) {
      e.stopPropagation();
      const on = Watch.toggle(watch.dataset.watch);
      toast(on ? 'Гонка отмечена как просмотренная' : 'Отметка снята');
      return;
    }
    const c = e.target.closest('[data-circuit]');
    const t = e.target.closest('[data-team]');
    const d = e.target.closest('[data-driver]');
    const r = e.target.closest('[data-race]');

    if (c) {
      showCircuit(c.dataset.circuit);
    } else if (r) {
      showRace(r.dataset.race, Number(r.dataset.season) || state.season);
    } else if (d) {
      showDriver(d.dataset.driver, Number(d.dataset.season) || state.season);
    } else if (t) {
      showTeam(t.dataset.team, Number(t.dataset.season) || state.season);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.target.matches('input, select, textarea')) return;

    const modalOpen = $('#modal')?.classList.contains('open');
    if (e.key === 'Escape' && modalOpen) {
      closeModal();
      return;
    }
    if (modalOpen) return; // Prevent tab switching when dialog is open

    const tabMap = {
      '1': 'home',
      '2': 'standings',
      '3': 'calendar',
      '4': 'circuits',
      '5': 'drivers',
      '6': 'teams',
      '7': 'compare',
      '8': 'my',
      '9': 'history'
    };

    if (tabMap[e.key]) switchTab(tabMap[e.key]);
    if (e.key.toLowerCase() === 't') $('#themeBtn')?.click();

    const target = e.target.closest?.('[role="button"], [data-race], [data-driver], [data-team], [data-circuit]');
    if (target && !e.target.closest('.fav-btn') && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      if (typeof target.click === 'function') target.click();
    }
  });

  window.addEventListener('offline', () => setStatus('offline', 'OFFLINE'));
  window.addEventListener('online', () => {
    setStatus('updated', 'ОНЛАЙН');
    refreshAll();
  });
}

function initFileProtocolNotice() {
  if (!IS_FILE_PROTOCOL) return;
  const banner = document.getElementById('fileProtocolNotice');
  if (!banner) return;
  banner.style.display = 'flex';
  const closeBtn = banner.querySelector('.banner-close-btn');
  if (closeBtn) {
    closeBtn.onclick = () => {
      banner.style.display = 'none';
    };
  }
}





const DRIVER_CANONICAL_MAP = {
  'max_verstappen': 'verstappen',
  'verstappen': 'verstappen',
  'arvid_lindblad': 'lindblad',
  'lindblad': 'lindblad',
  'kevin_magnussen': 'magnussen',
  'magnussen': 'magnussen',
  'kimi_antonelli': 'antonelli',
  'andrea_kimi_antonelli': 'antonelli',
  'carlos_sainz': 'sainz',
  'sainz': 'sainz',
  'charles_leclerc': 'leclerc',
  'leclerc': 'leclerc',
  'lewis_hamilton': 'hamilton',
  'hamilton': 'hamilton',
  'george_russell': 'russell',
  'russell': 'russell',
  'lando_norris': 'norris',
  'norris': 'norris',
  'oscar_piastri': 'piastri',
  'piastri': 'piastri',
  'fernando_alonso': 'alonso',
  'alonso': 'alonso',
  'lance_stroll': 'stroll',
  'stroll': 'stroll',
  'esteban_ocon': 'ocon',
  'ocon': 'ocon',
  'pierre_gasly': 'gasly',
  'gasly': 'gasly',
  'alexander_albon': 'albon',
  'albon': 'albon',
  'yuki_tsunoda': 'tsunoda',
  'tsunoda': 'tsunoda',
  'nico_hulkenberg': 'hulkenberg',
  'hulkenberg': 'hulkenberg',
  'liam_lawson': 'lawson',
  'lawson': 'lawson',
  'franco_colapinto': 'colapinto',
  'colapinto': 'colapinto',
  'oliver_bearman': 'bearman',
  'bearman': 'bearman',
  'isack_hadjar': 'hadjar',
  'hadjar': 'hadjar',
  'gabriel_bortoleto': 'bortoleto',
  'bortoleto': 'bortoleto',
  'jack_doohan': 'doohan',
  'doohan': 'doohan',
  'valtteri_bottas': 'bottas',
  'bottas': 'bottas',
  'guanyu_zhou': 'zhou',
  'zhou': 'zhou',
  'logan_sargeant': 'sargeant',
  'sargeant': 'sargeant',
  'daniel_ricciardo': 'ricciardo',
  'ricciardo': 'ricciardo',
  'sergio_perez': 'perez',
  'perez': 'perez',
  'romain_grosjean': 'grosjean',
  'grosjean': 'grosjean',
  'nicholas_latifi': 'latifi',
  'latifi': 'latifi',
  'daniil_kvyat': 'kvyat',
  'kvyat': 'kvyat',
  'mick_schumacher': 'mick_schumacher',
  'nyck_de_vries': 'de_vries',
  'de_vries': 'de_vries',
  'robert_kubica': 'kubica',
  'kubica': 'kubica',
  'nikita_mazepin': 'mazepin',
  'mazepin': 'mazepin',
  'kimi_raikkonen': 'raikkonen',
  'raikkonen': 'raikkonen',
  'sebastian_vettel': 'vettel',
  'vettel': 'vettel',
  'antonio_giovinazzi': 'giovinazzi',
  'giovinazzi': 'giovinazzi',
  'marcus_ericsson': 'ericsson',
  'ericsson': 'ericsson',
  'sergey_sirotkin': 'sirotkin',
  'sirotkin': 'sirotkin',
  'stoffel_vandoorne': 'vandoorne',
  'vandoorne': 'vandoorne'
};

function normalizeDriverId(id) {
  if (!id) return '';
  const clean = String(id).trim().toLowerCase();
  return DRIVER_CANONICAL_MAP[clean] || clean;
}

function buildDriverCareerProgression(snapshot) {
  const seasons = [];
  for (let y = CONFIG.seasonStart; y <= CURRENT_SEASON; y++) seasons.push(y);
  const careerMap = {};

  seasons.forEach(season => {
    const key = `${season}/driverstandings.json`;
    const payload = snapshot?.endpoints?.[key] || readCache(key, { allowStale: true })?.data;
    const standings = readDrivers(payload);
    standings.forEach(d => {
      const rawId = d.Driver?.driverId || '';
      const canonId = normalizeDriverId(rawId);
      if (!canonId) return;

      if (!careerMap[canonId]) careerMap[canonId] = {};
      careerMap[canonId][season] = {
        season,
        pos: Number(d.position) || null,
        pts: parseFloat(d.points) || 0,
        wins: Number(d.wins) || 0,
        team: d.Constructors?.[0]?.name || ''
      };
    });
  });

  const progression = {};
  Object.entries(careerMap).forEach(([driverId, seasonMap]) => {
    const activeYears = Object.keys(seasonMap).map(Number).sort((a, b) => a - b);
    if (!activeYears.length) return;
    const firstYear = activeYears[0];
    const lastYear = activeYears[activeYears.length - 1];

    const history = [];
    for (let y = firstYear; y <= lastYear; y++) {
      if (seasonMap[y]) {
        history.push(seasonMap[y]);
      } else {
        history.push({
          season: y,
          pos: null,
          pts: null,
          wins: null,
          team: 'Sabbatical',
          note: 'NO F1 SEASON'
        });
      }
    }

    progression[driverId] = history;
    if (driverId === 'verstappen') progression['max_verstappen'] = history;
    if (driverId === 'lindblad') progression['arvid_lindblad'] = history;
    if (driverId === 'magnussen') progression['kevin_magnussen'] = history;
    if (driverId === 'antonelli') progression['kimi_antonelli'] = history;
    if (driverId === 'antonelli') progression['andrea_kimi_antonelli'] = history;
  });

  if (typeof DRIVER_CANONICAL_MAP !== 'undefined') {
    Object.entries(DRIVER_CANONICAL_MAP).forEach(([alias, canon]) => {
      if (progression[canon] && !progression[alias]) {
        progression[alias] = progression[canon];
      } else if (progression[alias] && !progression[canon]) {
        progression[canon] = progression[alias];
      }
    });
  }

  return progression;
}

const DRIVER_CAREER_PROGRESSION = buildDriverCareerProgression(getEmbeddedSnapshot());


function prewarmSnapshotBundles() {
  try {
    getEmbeddedSnapshot();
    [2024, 2025, 2023].forEach(y => {
      if (!readCache(`bundle:${y}`, { allowStale: true })?.data) {
        const sS = readSnapshot(`${y}/driverstandings.json`);
        const sC = readSnapshot(`${y}/constructorstandings.json`);
        const sR = readSnapshot(`${y}.json`);
        if (sS?.data && sC?.data && sR?.data) {
          writeCache(`bundle:${y}`, {
            season: y,
            drivers: readDrivers(sS.data),
            teams: readTeams(sC.data),
            races: readRaces(sR.data)
          });
        }
      }
    });
  } catch(e) {}
}







function formatSecondsToLapTime(sec) {
  const n = Number(sec);
  if (!Number.isFinite(n) || n <= 0) return '—';
  const mins = Math.floor(n / 60);
  const rem = (n - mins * 60).toFixed(3).padStart(6, '0');
  return mins > 0 ? `${mins}:${rem}` : `${rem}с`;
}

function calcMedianLapTime(values = []) {
  const clean = (values || []).map(Number).filter(v => Number.isFinite(v) && v > 20 && v < 300).sort((a, b) => a - b);
  if (!clean.length) return null;
  const mid = Math.floor(clean.length / 2);
  return clean.length % 2 !== 0 ? clean[mid] : (clean[mid - 1] + clean[mid]) / 2;
}

function hexToRgba(hex, alpha = 0.2) {
  const s = String(hex || '').trim();
  if (s.startsWith('rgba(')) {
    return s.replace(/[\d.]+\)$/, `${alpha})`);
  }
  if (s.startsWith('rgb(')) {
    return s.replace(/^rgb\(/, 'rgba(').replace(/\)$/, `, ${alpha})`);
  }
  const clean = s.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean.padEnd(6, '8').slice(0, 6);
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return `rgba(136, 136, 136, ${alpha})`;
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}


function computeTeammateStintDelta(results = [], adaptedStrategy = null, season = null, openF1Stints = null, lapsModel = null) {
  const yr = Number(season) || Number(lapsModel?.season) || CURRENT_SEASON;
  const series = lapsModel?.series || [];
  const hasLapTimes = series.some(s => Array.isArray(s.lapDurations) && s.lapDurations.some(v => Number.isFinite(v) && v > 0));
  if (!hasLapTimes) {
    return { status: 'NO_DATA', season: yr, teams: [] };
  }

  const scLaps = new Set();
  (lapsModel?.raceControlZones || []).forEach(z => {
    for (let l = z.startLap; l <= z.endLap; l++) scLaps.add(l);
  });

  const seriesByDriverId = {};
  const seriesByNumber = {};
  series.forEach(s => {
    if (s.driverId) seriesByDriverId[s.driverId] = s;
    if (s.number) seriesByNumber[Number(s.number)] = s;
  });

  const byTeam = {};
  (results || []).forEach(r => {
    const tName = r.Constructor?.name || 'Команда';
    const tId = r.Constructor?.constructorId || tName;
    if (!byTeam[tId]) byTeam[tId] = { id: tId, name: tName, color: teamColor(tName), drivers: [] };
    byTeam[tId].drivers.push(r);
  });

  const teamsOut = [];
  Object.values(byTeam).forEach(team => {
    if (team.drivers.length < 2) return;
    const [dA, dB] = team.drivers;
    const sA = seriesByDriverId[dA.Driver?.driverId] || seriesByNumber[Number(dA.number)];
    const sB = seriesByDriverId[dB.Driver?.driverId] || seriesByNumber[Number(dB.number)];
    if (!sA || !sB) return;

    const rawStintsMap = (openF1Stints && typeof openF1Stints === 'object') ? openF1Stints : (lapsModel?.stintsMap && typeof lapsModel.stintsMap === 'object' ? lapsModel.stintsMap : null);
    const resolveDriverStints = (drvRes, drvSeries) => {
      const did = drvRes.Driver?.driverId;
      if (adaptedStrategy?.[did]?.stints?.length) return adaptedStrategy[did].stints;
      if (Array.isArray(drvSeries.stints) && drvSeries.stints.length) return drvSeries.stints;
      const num = Number(drvRes.number || drvSeries.number);
      const rawList = rawStintsMap ? (rawStintsMap[num] || rawStintsMap[String(num)] || rawStintsMap[did]) : null;
      if (Array.isArray(rawList) && rawList.length) {
        const maxLap = Math.max(1, (drvSeries.data?.length || 1) - 1);
        return rawList.map((st, idx) => ({
          stintNumber: Number(st.stintNumber || st.stint_number) || (idx + 1),
          startLap: Number(st.startLap || st.lap_start) || 1,
          endLap: Number(st.endLap || st.lap_end) || maxLap,
          compound: (st.compound && st.compound !== 'UNKNOWN' ? String(st.compound).toUpperCase() : 'UNAVAILABLE')
        }));
      }
      return [{ stintNumber: 1, startLap: 1, endLap: Math.max(1, (drvSeries.data?.length || 1) - 1), compound: 'UNAVAILABLE' }];
    };
    const stintsA = resolveDriverStints(dA, sA);
    const stintsB = resolveDriverStints(dB, sB);
    const maxStints = Math.max(stintsA.length, stintsB.length);
    const stintComparisons = [];

    const calcDriverStintMedian = (drvSeries, stint) => {
      if (!stint || !drvSeries?.lapDurations) return null;
      const pitSet = new Set(drvSeries.pitOutLaps || []);
      (drvSeries.pitEvents || []).forEach(p => { pitSet.add(p.lap); pitSet.add(p.lap + 1); });
      const clean = [];
      for (let lap = stint.startLap; lap <= stint.endLap; lap++) {
        if (lap === 1 && stint.endLap - stint.startLap >= 3) continue;
        if (scLaps.has(lap) || pitSet.has(lap)) continue;
        const dur = drvSeries.lapDurations[lap];
        if (Number.isFinite(dur) && dur > 20) clean.push(dur);
      }
      return {
        median: calcMedianLapTime(clean),
        lapsCount: clean.length,
        compound: stint.compound || 'UNAVAILABLE'
      };
    };

    for (let idx = 0; idx < maxStints; idx++) {
      const mA = calcDriverStintMedian(sA, stintsA[idx]);
      const mB = calcDriverStintMedian(sB, stintsB[idx]);
      if (!mA?.median && !mB?.median) continue;
      const delta = (mA?.median && mB?.median) ? (mA.median - mB.median) : null;
      stintComparisons.push({
        stintNumber: idx + 1,
        compoundA: mA?.compound || 'UNAVAILABLE',
        compoundB: mB?.compound || 'UNAVAILABLE',
        medianA: mA?.median || null,
        medianB: mB?.median || null,
        delta,
        faster: delta !== null ? (delta < 0 ? sA.acronym || driverName(dA.Driver) : delta > 0 ? sB.acronym || driverName(dB.Driver) : 'Равно') : null
      });
    }

    if (stintComparisons.length) {
      teamsOut.push({
        teamId: team.id,
        teamName: team.name,
        color: team.color,
        driverA: { id: dA.Driver?.driverId, code: sA.acronym || dA.Driver?.code || dA.Driver?.familyName, name: driverName(dA.Driver) },
        driverB: { id: dB.Driver?.driverId, code: sB.acronym || dB.Driver?.code || dB.Driver?.familyName, name: driverName(dB.Driver) },
        stints: stintComparisons
      });
    }
  });

  if (!teamsOut.length) {
    return { status: 'NO_DATA', season: yr, teams: [] };
  }
  return { status: 'OK', season: yr, teams: teamsOut };
}
if (typeof window !== 'undefined') window.computeTeammateStintDelta = computeTeammateStintDelta;

function renderTeammateStintDeltaHtml(results = [], adaptedStrategy = null, season = null, openF1Stints = null, lapsModel = null) {
  const deltaModel = computeTeammateStintDelta(results, adaptedStrategy, season, openF1Stints, lapsModel);
  if (deltaModel.status !== 'OK' || !deltaModel.teams.length) {
    return `
      <div class="teammate-stint-section" id="teammateStintDelta" data-status="NO_DATA">
        <div class="section-header-compact">
          <h3 class="h4">⏱️ Сравнение темпа напарников по стинтам (Teammate Stint Delta)</h3>
          <span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span>
        </div>
        <div class="note-nodata">Нет данных по кругам <button type="button" class="info-tip" aria-label="Почему нет данных" aria-expanded="false"><span aria-hidden="true">i</span></button><span class="info-tip-body" hidden>Покруговые времена для расчёта медианного гоночного темпа напарников (без кругов SC/VSC и выезда из боксов) отсутствуют в протоколах данного этапа.</span></div>
      </div>`;
  }

  return `
    <div class="teammate-stint-section" id="teammateStintDelta" data-status="OK">
      <div class="section-header-compact">
        <h3 class="h4">⏱️ Сравнение темпа напарников по стинтам (Teammate Stint Delta)</h3>
        <span class="subtle" style="font-size:12px">Медианный темп на комплекте шин · без кругов SC/VSC и пит-выездов</span>
      </div>
      <div class="teammate-stint-grid">
        ${deltaModel.teams.map(t => `
          <div class="tm-stint-card" style="--tm-color:${t.color}">
            <div class="tm-stint-head">
              <span>${esc(t.teamName)}</span>
              <span class="subtle" style="font-size:12px">${esc(t.driverA.code)} vs ${esc(t.driverB.code)}</span>
            </div>
            ${t.stints.map(st => {
              const tA = st.medianA ? formatSecondsToLapTime(st.medianA) : 'Нет данных';
              const tB = st.medianB ? formatSecondsToLapTime(st.medianB) : 'Нет данных';
              const dStr = st.delta !== null
                ? `${st.faster}: &minus;${Math.abs(st.delta).toFixed(3)}с`
                : 'Н/Д';
              return `
                <div class="tm-stint-row">
                  <b>Stint ${st.stintNumber}</b>
                  <span>${esc(t.driverA.code)}: <b>${tA}</b> · ${esc(t.driverB.code)}: <b>${tB}</b></span>
                  <span class="tm-stint-delta-badge">${dStr}</span>
                </div>`;
            }).join('')}
          </div>
        `).join('')}
      </div>
    </div>`;
}
if (typeof window !== 'undefined') window.renderTeammateStintDeltaHtml = renderTeammateStintDeltaHtml;

async function loadLapPositions(...args) { const self = loadLapPositions; await LazyMod.load(); if (loadLapPositions === self) throw new Error("loadLapPositions: second script missing"); return loadLapPositions(...args); }
if (typeof window !== 'undefined') window.loadLapPositions = loadLapPositions;

function renderPositionsChart(containerId, model) {
  if (ChartLib.waiting()) return void ChartLib.then(() => renderPositionsChart(containerId, model));
  const box = document.getElementById(containerId);
  if (!box) return;
  if (state.charts['positionsChart']) {
    try { state.charts['positionsChart'].stop?.(); state.charts['positionsChart'].destroy(); } catch {}
    delete state.charts['positionsChart'];
  }
  const oldCanvas = document.getElementById('positionsChart');
  if (oldCanvas && window.Chart && typeof Chart.getChart === 'function') {
    try { Chart.getChart(oldCanvas)?.destroy(); } catch {}
  }

  if (!model || !Array.isArray(model.series) || !model.series.length) {
    box.innerHTML = '<div class="empty" data-status="NO_DATA"><span class="prov-badge prov-unavail">НЕТ ДАННЫХ</span><p style="margin:6px 0 0">Покруговые позиции публикуются OpenF1 (с 2023 г.) и в протоколах Jolpica (laps.json).</p></div>';
    return;
  }

  const rcZones = Array.isArray(model.raceControlZones) ? model.raceControlZones : [];
  const rcBadgesHtml = rcZones.length
    ? rcZones.map(z => `<span class="lap-rc-pill ${z.type.toLowerCase()}" data-rc-band="${esc(z.type)}">🚩 ${esc(z.label)}: кр. ${z.startLap}–${z.endLap}</span>`).join('')
    : '<span class="subtle" style="font-size:12px">Периодов SC / VSC / Red Flag не зафиксировано</span>';

  const seenTeams = {};
  box.innerHTML = `
    <div class="section-header-compact" style="margin-bottom:6px">
      <h3 class="h4" style="margin:0">📈 Динамика позиций по кругам (Lap-by-Lap Position Chart)</h3>
      <span class="subtle" style="font-size:12px">Источник: ${esc(model.source || 'OpenF1 / Jolpica')}</span>
    </div>
    <p class="subtle" style="font-size:12px;margin:0 0 8px">Позиция каждого пилота от старта (0) до финиша (1..${model.totalLaps || (Math.max(...model.series.map(s => s.data.length)) - 1)} кр.). Наведите или нажмите на пилота, чтобы подсветить его траекторию.</p>
    <div class="lap-rc-bar" id="lapRcLegend" aria-label="Периоды дирекции гонки и пит-стопы">
      ${rcBadgesHtml}
      <span class="lap-rc-pill" title="Метки пит-стопов на графике">🛞 Пит-стопы (S / M / H / I / W)</span>
    </div>
    <div class="chart-box tall"><canvas id="positionsChart" role="img" aria-label="Позиции пилотов по кругам"></canvas></div>
    <div class="pos-legend" id="positionsLegend" role="group" aria-label="Выбор пилота на графике кругов">
      ${model.series.map((s, i) => `<button type="button" class="pos-chip" data-idx="${i}" data-driver="${esc(s.driverId || s.acronym || s.name)}" style="--chip:${s.colour}">${esc(s.acronym || s.name)}</button>`).join('')}
    </div>`;

  const maxDataLen = Math.max(...model.series.map(s => (s.data || []).length));
  const labels = Array.from({ length: maxDataLen }, (_, i) => i);

  let activeDriverIdx = null;
  let pinnedDriverIdx = null;

  const datasets = model.series.map((s, idx) => {
    const second = seenTeams[s.team] = (seenTeams[s.team] || 0) + 1;
    const pitLapSet = new Set((s.pitEvents || []).map(p => Number(p.lap)));
    return {
      label: s.acronym || s.name,
      fullName: s.name || s.acronym,
      driverId: s.driverId || s.acronym,
      baseColor: s.colour || '#e10600',
      dimColor: hexToRgba(s.colour || '#e10600', 0.2),
      data: s.data,
      lapTimes: s.lapTimes || [],
      gaps: s.gaps || [],
      pitEvents: s.pitEvents || [],
      borderColor: s.colour || '#e10600',
      backgroundColor: s.colour || '#e10600',
      borderDash: second > 1 ? [5, 4] : [],
      borderWidth: 2.2,
      pointRadius: ctx => pitLapSet.has(ctx.dataIndex) ? 5 : 0,
      pointHoverRadius: 6,
      tension: 0.22,
      spanGaps: true
    };
  });

  const rcAndPitOverlayPlugin = {
    id: 'rcAndPitOverlay',
    beforeDatasetsDraw(chart) {
      if (!rcZones.length) return;
      const { ctx, chartArea, scales: { x } } = chart;
      if (!chartArea || !x) return;
      ctx.save();
      rcZones.forEach(z => {
        const x1 = x.getPixelForValue(Math.max(0, z.startLap - 0.4));
        const x2 = x.getPixelForValue(z.endLap + 0.4);
        const left = Math.max(chartArea.left, Math.min(x1, x2));
        const right = Math.min(chartArea.right, Math.max(x1, x2, left + 6));
        ctx.fillStyle = z.type === 'RED'
          ? 'rgba(255, 69, 58, 0.20)'
          : z.type === 'VSC'
            ? 'rgba(255, 159, 10, 0.16)'
            : 'rgba(255, 214, 10, 0.16)';
        ctx.fillRect(left, chartArea.top, right - left, chartArea.bottom - chartArea.top);
        ctx.fillStyle = z.type === 'RED' ? '#ff453a' : z.type === 'VSC' ? '#ff9f0a' : '#ffd60a';
        ctx.font = '700 9px "Oxanium", sans-serif';
        ctx.fillText(z.type, left + 3, chartArea.top + 11);
      });
      ctx.restore();
    },
    afterDatasetsDraw(chart) {
      const { ctx, scales: { x, y } } = chart;
      if (!x || !y) return;
      const compoundColors = {
        SOFT: '#e10600', S: '#e10600',
        MEDIUM: '#ffd000', M: '#ffd000',
        HARD: '#f0f0f0', H: '#f0f0f0',
        INTERMEDIATE: '#27c281', I: '#27c281',
        WET: '#1b66e0', W: '#1b66e0'
      };
      ctx.save();
      chart.data.datasets.forEach((ds, dsIdx) => {
        if (!Array.isArray(ds.pitEvents) || !ds.pitEvents.length) return;
        const isDimmed = activeDriverIdx !== null && activeDriverIdx !== dsIdx;
        ctx.globalAlpha = isDimmed ? 0.2 : 1.0;
        ds.pitEvents.forEach(pe => {
          const lap = Number(pe.lap);
          const pos = ds.data?.[lap];
          if (!Number.isFinite(lap) || !Number.isFinite(pos)) return;
          const px = x.getPixelForValue(lap);
          const py = y.getPixelForValue(pos);
          if (!Number.isFinite(px) || !Number.isFinite(py)) return;
          const compKey = String(pe.compound || 'M').toUpperCase();
          const cCol = compoundColors[compKey] || '#ffd000';
          const shortL = compKey[0] || 'P';
          ctx.beginPath();
          ctx.arc(px, py, 5.5, 0, Math.PI * 2);
          ctx.fillStyle = '#0b0d10';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = cCol;
          ctx.stroke();
          ctx.fillStyle = '#ffffff';
          ctx.font = '800 7px "Inter", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(shortL, px, py + 0.5);
        });
      });
      ctx.restore();
    }
  };

  const canvasEl = document.getElementById('positionsChart');
  const chart = new Chart(canvasEl, {
    type: 'line',
    data: { labels, datasets },
    plugins: [rcAndPitOverlayPlugin],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: chartAnimation(),
      interaction: { mode: 'nearest', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: items => {
              const lap = Number(items[0]?.label || 0);
              return lap === 0 ? 'Старт (решётка)' : `Круг ${lap}`;
            },
            label: item => {
              const ds = item.dataset;
              const lap = item.dataIndex;
              const pos = item.raw;
              const gap = ds.gaps?.[lap] || (pos === 1 ? 'Лидер' : '—');
              const lTime = ds.lapTimes?.[lap] || '—';
              const pit = (ds.pitEvents || []).find(p => Number(p.lap) === lap);
              const pitNote = pit ? ` · Пит-стоп (${pit.compound || 'Pit'}${pit.duration ? ', ' + pit.duration + 'с' : ''})` : '';
              return ` ${ds.label} (${ds.fullName}): P${pos} · Отрыв: ${gap} · Круг: ${lTime}${pitNote}`;
            }
          }
        }
      },
      scales: {
        y: {
          reverse: true,
          min: 1,
          max: Math.max(20, model.series.length),
          ticks: { stepSize: 1, callback: v => `P${v}` },
          grid: { color: 'rgba(128,128,128,0.12)' }
        },
        x: {
          title: { display: true, text: 'Круг' },
          ticks: { maxTicksLimit: 15 },
          grid: { display: false }
        }
      }
    }
  });
  state.charts['positionsChart'] = chart;

  const applyHighlight = (idx) => {
    activeDriverIdx = idx;
    chart.data.datasets.forEach((ds, i) => {
      if (idx === null) {
        ds.borderWidth = 2.2;
        ds.borderColor = ds.baseColor;
        ds.backgroundColor = ds.baseColor;
      } else if (idx === i) {
        ds.borderWidth = 4;
        ds.borderColor = ds.baseColor;
        ds.backgroundColor = ds.baseColor;
      } else {
        ds.borderWidth = 1.5;
        ds.borderColor = ds.dimColor;
        ds.backgroundColor = ds.dimColor;
      }
    });
    box.querySelectorAll('#positionsLegend .pos-chip').forEach((c, i) => {
      c.classList.toggle('active', idx === i);
      c.classList.toggle('dimmed', idx !== null && idx !== i);
      c.setAttribute('aria-pressed', idx === i ? 'true' : 'false');
    });
    chart.update('none');
  };

  box.querySelectorAll('#positionsLegend .pos-chip').forEach(chip => {
    const idx = Number(chip.dataset.idx);
    chip.addEventListener('mouseenter', () => {
      if (pinnedDriverIdx === null) applyHighlight(idx);
    });
    chip.addEventListener('mouseleave', () => {
      if (pinnedDriverIdx === null) applyHighlight(null);
    });
    chip.addEventListener('click', () => {
      pinnedDriverIdx = pinnedDriverIdx === idx ? null : idx;
      applyHighlight(pinnedDriverIdx);
    });
  });
}
if (typeof window !== 'undefined') window.renderPositionsChart = renderPositionsChart;








async function loadComparePage({ signal = null } = {}) {
  const season = Number($('#compareSeason')?.value) || CURRENT_SEASON;
  setPageSeason('compare', season);
  try {
    const b = await loadSeasonBundle(season, { signal });
    if (signal?.aborted || Number($('#compareSeason').value) !== season) return;
    state.pageData.compare = { season, b };
    const opts = b.drivers.map(d => `<option value="${esc(d.Driver.driverId)}">${esc(driverName(d.Driver))} · ${esc(d.Constructors?.[0]?.name || '—')}</option>`).join('');
    ['compareA', 'compareB'].forEach((id, i) => {
      const el = $('#' + id);
      const prev = el.value;
      el.innerHTML = opts;
      el.value = b.drivers.some(d => d.Driver.driverId === prev) ? prev : (b.drivers[i]?.Driver.driverId || '');
    });
    await renderComparison();
  } catch {
    if (!signal?.aborted) $('#compareResult').innerHTML = '<div class="error-box">Не удалось загрузить пилотов сезона. Проверьте сеть.</div>';
  }
}

async function renderComparison(...args) { const self = renderComparison; await LazyMod.load(); if (renderComparison === self) throw new Error("renderComparison: second script missing"); return renderComparison(...args); }


function buildSeasonIcs(races) {
  const sessions = [
    ['FirstPractice', '1-я тренировка', 60],
    ['SecondPractice', '2-я тренировка', 60],
    ['ThirdPractice', '3-я тренировка', 60],
    ['SprintQualifying', 'Спринт-квалификация', 45],
    ['SprintShootout', 'Спринт-квалификация', 45],
    ['Sprint', 'Спринт', 60],
    ['Qualifying', 'Квалификация', 60]
  ];
  const stamp = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const escIcs = v => String(v || '').replace(/[\\,;]/g, m => '\\' + m).replace(/\n/g, '\\n');
  const events = [];
  const add = (race, key, title, start, minutes) => {
    if (!Number.isFinite(start.getTime())) return;
    const end = new Date(start.getTime() + minutes * 60000);
    events.push([
      'BEGIN:VEVENT',
      `UID:f1-${race.season}-${race.round}-${key}@f1-timeline`,
      `DTSTAMP:${stamp(new Date())}`,
      `DTSTART:${stamp(start)}`,
      `DTEND:${stamp(end)}`,
      `SUMMARY:${escIcs(`F1 · ${race.raceName} · ${title}`)}`,
      `LOCATION:${escIcs(`${race.Circuit?.circuitName || ''}, ${race.Circuit?.Location?.locality || ''}, ${race.Circuit?.Location?.country || ''}`)}`,
      'END:VEVENT'
    ].join('\r\n'));
  };
  races.forEach(race => {
    sessions.forEach(([key, title, minutes]) => {
      const s = race[key];
      if (s?.date && s?.time) add(race, key, title, new Date(`${s.date}T${s.time}`), minutes);
    });
    if (race.date && race.time) add(race, 'Race', 'Гонка', new Date(`${race.date}T${race.time}`), 120);
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//F1 Timeline//RU', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:Формула-1', ...events, 'END:VCALENDAR'].join('\r\n');
}

async function exportCalendarIcs() {
  const season = Number($('#calendarSeason')?.value) || CURRENT_SEASON;
  try {
    const res = await request(`${season}.json`);
    const races = readRaces(res.data);
    if (!races.length) throw new Error('empty');
    const blob = new Blob([buildSeasonIcs(races)], { type: 'text/calendar;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `f1-${season}.ics`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`Календарь ${season} сохранён: откройте файл, чтобы добавить сессии`);
  } catch {
    toast('Не удалось собрать календарь сезона');
  }
}

// Where the numbers on each tab come from. The text is static on purpose (it names the services the tab really calls);
// the dot and the date come from the last service check and from the embedded snapshot, never invented.
const ProvBar = {
  LINES: {
    home: 'Отрыв лидера, последняя и следующая гонка: <b>Jolpica F1</b>. Погода на уикенд: <b>Open-Meteo</b> (прогноз только на 15 дней вперёд). Живой режим сессии: <b>OpenF1</b>.',
    standings: 'Личный и командный зачёты, динамика мест по этапам: <b>Jolpica F1</b>. Пересчёт идёт по результатам этапов.',
    calendar: 'Календарь и результаты этапов: <b>Jolpica F1</b>. Прогноз погоды: <b>Open-Meteo</b>. Время сессий показано в вашем часовом поясе.',
    circuits: 'Результаты и история Гран-при: <b>Jolpica F1</b>. Контуры трасс, направление, границы секторов, перепад высот и зоны DRS измерены по телеметрии <b>OpenF1</b> на лучшем круге квалификации (зоны DRS по данным 2025 года: с 2026 года DRS не применяется). Рекорды круга и описания трасс записаны в сайт как справочные данные. Для старых трасс без телеметрии показана нарисованная схема с разметкой поворотов.',
    drivers: 'Результаты, очки и карьера: <b>Jolpica F1</b>. Фото пилотов: <b>OpenF1</b> и <b>Wikipedia</b>. Радар профиля считается из результатов этапов.',
    teams: 'Результаты и пит-стопы: <b>Jolpica F1</b>. Руководство команд: <b>Wikipedia</b> (инфобокс). Логотипы: <b>formula1.com</b>. Нет поля в источнике: «Нет данных».',
    compare: 'Очки, квалификации и финиши двух пилотов: <b>Jolpica F1</b>. Сравнение считается из результатов этапов, оценок и прогнозов нет.',
    my: 'Избранное и отметки просмотренных гонок хранятся <b>только в этом браузере</b>. Результаты этапов: <b>Jolpica F1</b>.',
    history: 'Чемпионы мира и итоговые таблицы с 1950 года: <b>Jolpica F1</b> (архив Ergast). Для старых сезонов часть полей в источнике отсутствует: тогда «Нет данных».'
  },
  freshness() {
    let snap = '';
    try {
      const g = getEmbeddedSnapshot()?._metadata?.generatedAt;
      if (g) snap = fmtDate(new Date(g).getTime());
    } catch {}
    const j = Health.state?.jolpica;
    const time = j?.ts ? new Date(j.ts).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : '';
    if (!j) return { level: 'unknown', short: 'проверка сети…', text: `Проверка сети… Встроенный снимок${snap ? ` от ${snap}` : ''}.` };
    if (!j.ok) return { level: 'down', short: `источник недоступен, данные из снимка${snap ? ` от ${snap}` : ''}`, text: `Jolpica недоступна (проверка в ${time}): показаны данные из встроенного снимка${snap ? ` от ${snap}` : ''}, они могли устареть.` };
    return { level: Health.level('jolpica'), short: `проверено в ${time}`, text: `Источник доступен (проверка в ${time}). Встроенный снимок${snap ? ` от ${snap}` : ''} нужен для работы без сети.` };
  },
  render(tab) {
    try {
      const panel = document.getElementById(tab);
      const line = this.LINES[tab];
      if (!panel || !line) return;
      let bar = panel.querySelector(':scope > .prov-bar');
      if (!bar) {
        bar = document.createElement('p');
        bar.className = 'prov-bar';
        bar.setAttribute('role', 'note');
        panel.appendChild(bar);
      }
      const f = this.freshness();
      // названия сервисов берутся из того же текста (выделены <b>), чтобы короткая строка не расходилась с полной
      const src = [...new Set([...line.matchAll(/<b>([^<]+)<\/b>/g)].map(m => m[1]).filter(x => /^[A-Z]/.test(x) || x.includes('.')))];
      const sum = `<b>Источники:</b> ${esc(src.join(', '))} · ${esc(f.short)}`, full = `${line} ${esc(f.text)}`;
      // строка уже есть: меняем только текст, кнопка «i» остаётся той же (открытая подсказка и фокус не теряются)
      if (bar.querySelector('.info-tip')) {
        bar.querySelector('.pv-dot')?.setAttribute('data-level', f.level);
        bar.querySelector('.pv-sum').innerHTML = sum;
        bar.querySelector('.info-tip-body').innerHTML = full;
        return;
      }
      bar.innerHTML = `<span class="pv-dot" data-level="${f.level}" aria-hidden="true"></span><span class="pv-sum">${sum}</span>`
        + `<button type="button" class="info-tip" aria-label="Откуда данные" aria-expanded="false"><span aria-hidden="true">i</span></button>`
        + `<span class="info-tip-body" hidden>${full}</span>`;
    } catch {}
  }
};

const PWA = {
  reg: null,
  asked: false,
  init() {
    if (!SITE) return;
    try {
      // ссылка встаёт в общий ряд ссылок подвала (без точки-разделителя: на телефоне ряд переносится)
      const foot = document.querySelector('footer .footer-links') || document.querySelector('footer div > div');
      if (foot && !foot.querySelector('.offline-dl')) foot.insertAdjacentHTML('beforeend', `<a class="offline-dl" href="${SITE.base}f1_timeline.html" download>Скачать офлайн-версию (один файл)</a>`);
    } catch {}
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(SITE.base + 'sw.js', { scope: SITE.base }).then(reg => {
        this.reg = reg;
        if (reg.waiting && navigator.serviceWorker.controller) this.offerUpdate();
        reg.addEventListener('updatefound', () => {
          const fresh = reg.installing;
          if (fresh) fresh.addEventListener('statechange', () => { if (fresh.state === 'installed' && navigator.serviceWorker.controller) this.offerUpdate(); });
        });
        document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') reg.update().catch(() => {}); });
      }).catch(e => console.warn('service worker', e));
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (this.asked) { this.asked = false; location.reload(); } });
    }
    setTimeout(() => this.iosHint(), 4000);
  },
  bar(id, html) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.className = 'pwa-bar';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.innerHTML = html;
    return el;
  },
  offerUpdate() {
    const el = this.bar('pwaUpdate', '<span>Доступна новая версия сайта.</span><button class="btn sm" type="button" data-act="go">Обновить</button><button class="btn secondary sm" type="button" data-act="x" aria-label="Скрыть">Позже</button>');
    el.onclick = e => {
      const act = e.target.closest('[data-act]')?.dataset.act;
      if (act === 'go') { this.asked = true; (this.reg && this.reg.waiting) ? this.reg.waiting.postMessage('skipWaiting') : location.reload(); }
      if (act) el.remove();
    };
  },
  isStandalone() { return Boolean(navigator.standalone) || matchMedia('(display-mode: standalone)').matches; },
  iosHint() {
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (!ios || this.isStandalone() || safeStorage.get('f1:pwaHint')) return;
    const el = this.bar('pwaHint', '<span><b>Как приложение на iPhone:</b> в Safari нажмите «Поделиться», затем «На экран „Домой“». Сайт будет открываться с иконки и работать без сети.</span><button class="btn sm" type="button" data-act="x">Понятно</button>');
    el.onclick = e => { if (e.target.closest('[data-act]')) { safeStorage.set('f1:pwaHint', '1'); el.remove(); } };
  }
};

const TAB_ORDER = ['home', 'standings', 'calendar', 'circuits', 'drivers', 'teams', 'compare', 'my', 'history'];

function syncHashWithTab(tab) {
  if (SITE) {
    const path = SITE.base + (tab === 'home' ? '' : tab + '/');
    const keepHash = Deep.RX.test(location.hash) ? location.hash : '';
    if (location.pathname !== path || (location.hash && !keepHash)) {
      const overlay = document.getElementById('modal')?.classList.contains('open') || document.getElementById('searchDialog')?.classList.contains('open');
      try { if (overlay || !document.body?.dataset.booted) history.replaceState(history.state, '', path + location.search + keepHash); else history.pushState({ tab }, '', path); } catch {}
    }
    return;
  }
  const hash = tab === 'home' ? '' : `#${tab}`;
  if (location.hash !== hash) {
    // a tab opened by the user is a real history step (Back returns to the previous tab); while a window or search is open the entry is only replaced so their own history logic stays intact
    const overlay = document.getElementById('modal')?.classList.contains('open') || document.getElementById('searchDialog')?.classList.contains('open');
    const url = hash || location.pathname + location.search;
    try { if (overlay || !document.body?.dataset.booted) history.replaceState(history.state, '', url); else history.pushState({ tab }, '', url); } catch {}
  }
}

function tabFromHash() {
  const tab = location.hash.replace('#', '');
  if (TAB_ORDER.includes(tab)) return tab;
  if (SITE) {
    const seg = location.pathname.slice(SITE.base.length).split('/')[0];
    if (TAB_ORDER.includes(seg)) return seg;
  }
  return null;
}

function buildSearchIndex() {
  const items = [];
  const seen = new Set();
  const push = item => {
    if (seen.has(item.key)) return;
    seen.add(item.key);
    items.push(item);
  };
  (state.standings?.drivers || []).forEach(d => push({
    key: `d:${d.Driver.driverId}`, kind: 'Пилот', title: driverName(d.Driver),
    sub: `${d.Constructors?.[0]?.name || ''} · P${d.position} · ${fmtNum(d.points)} очк.`,
    open: () => showDriver(d.Driver.driverId, state.season)
  }));
  (state.standings?.teams || []).forEach(t => push({
    key: `t:${t.Constructor.constructorId}`, kind: 'Команда', title: t.Constructor.name,
    sub: `P${t.position} · ${fmtNum(t.points)} очк.`,
    open: () => showTeam(t.Constructor.constructorId, state.season)
  }));
  (state.calendar || []).forEach(r => push({
    key: `r:${r.round}`, kind: 'Гран-при', title: r.raceName,
    sub: `Раунд ${r.round} · ${r.Circuit?.Location?.locality || ''} · ${fmtSchedule(r)}`,
    open: () => showRace(r.round, Number(r.season) || state.season)
  }));
  Object.entries(TRACK_REGISTRY).forEach(([id, t]) => push({
    key: `c:${id}`, kind: 'Трасса', title: t.name, sub: `${t.locality || ''}, ${t.country || ''}`,
    open: () => showCircuit(id)
  }));
  TAB_ORDER.forEach(tab => {
    const btn = $(`#nav :is(button,a)[data-tab="${tab}"]`);
    if (btn) push({ key: `p:${tab}`, kind: 'Раздел', title: btn.textContent.replace(/\[\d\]/, '').trim(), sub: 'Перейти в раздел', open: () => switchTab(tab) });
  });
  return items;
}

function openSearch() {
  const dlg = $('#searchDialog');
  if (!dlg || dlg.classList.contains('open')) return;
  dlg.classList.add('open');
  dlg.setAttribute('aria-hidden', 'false');
  const input = $('#searchInput');
  input.value = '';
  state._searchIndex = buildSearchIndex();
  renderSearchResults('');
  input.focus();
  history.pushState({ overlay: 'search' }, '');
}

function closeSearch(fromPopState = false) {
  const dlg = $('#searchDialog');
  if (!dlg?.classList.contains('open')) return;
  dlg.classList.remove('open');
  dlg.setAttribute('aria-hidden', 'true');
  if (!fromPopState && history.state?.overlay === 'search') history.back();
}

function renderSearchResults(q) {
  const box = $('#searchResults');
  const norm = v => String(v || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const query = norm(q).trim();
  const list = (state._searchIndex || []).filter(x => !query || norm(`${x.title} ${x.sub}`).includes(query)).slice(0, 30);
  state._searchActive = 0;
  box.innerHTML = list.length ? list.map((x, i) => `
    <button class="search-item ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <span class="search-kind">${esc(x.kind)}</span>
      <span class="search-text"><b>${esc(x.title)}</b><small>${esc(x.sub)}</small></span>
    </button>`).join('') : '<div class="empty">Ничего не найдено</div>';
  state._searchList = list;
  box.querySelectorAll('.search-item').forEach(btn => btn.addEventListener('click', () => pickSearchResult(Number(btn.dataset.idx))));
}

function pickSearchResult(idx) {
  const item = state._searchList?.[idx];
  if (!item) return;
  closeSearch();
  setTimeout(() => item.open(), 60);
}

function initNavigation() {
  $('#searchBtn')?.addEventListener('click', openSearch);
  $('#searchDialog')?.addEventListener('click', e => { if (e.target.id === 'searchDialog') closeSearch(); });
  $('#searchInput')?.addEventListener('input', e => renderSearchResults(e.target.value));
  $('#searchInput')?.addEventListener('keydown', e => {
    const items = $$('#searchResults .search-item');
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      state._searchActive = Math.max(0, Math.min(items.length - 1, (state._searchActive || 0) + (e.key === 'ArrowDown' ? 1 : -1)));
      items.forEach((it, i) => it.classList.toggle('active', i === state._searchActive));
      items[state._searchActive]?.scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      pickSearchResult(state._searchActive || 0);
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });
  document.addEventListener('keydown', e => {
    const typing = e.target.matches?.('input, select, textarea');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
      e.preventDefault();
      openSearch();
    }
  });

  $('#bottomNav')?.addEventListener('click', e => {
    const btn = e.target.closest('a[data-tab], button');
    if (!btn) return;
    if (btn.tagName === 'A') { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; e.preventDefault(); }
    if (btn.dataset.tab) switchTab(btn.dataset.tab);
    else if (btn.id === 'bottomMore') MoreSheet.toggle();
    else if (btn.id === 'bottomSearch') openSearch();
  });
  $('#moreSheet')?.addEventListener('click', e => {
    const btn = e.target.closest('a[data-tab], button[data-tab]');
    if (btn && btn.tagName === 'A') { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; e.preventDefault(); }
    if (btn) switchTab(btn.dataset.tab);
    MoreSheet.close();
  });
  MoreSheet.init();

  window.addEventListener('popstate', () => {
    if (window._modalBackPending) {
      window._modalBackPending = false;
      if (window._modalPushAfterBack) {
        window._modalPushAfterBack = false;
        if ($('#modal')?.classList.contains('open')) pushModalHistoryEntry();
      }
      return;
    }
    if ($('#searchDialog')?.classList.contains('open')) closeSearch(true);
    if ($('#modal')?.classList.contains('open')) closeModal({ fromPopState: true });
    const tab = tabFromHash() || 'home';
    if (tab !== state.tab) switchTab(tab, { fromPopState: true });
  });
}

const Health = {
  services: {
    jolpica: { label: 'Jolpica F1', what: 'результаты, зачёты, календарь', probe: 'https://api.jolpi.ca/ergast/f1/seasons.json?limit=1' },
    openf1: { label: 'OpenF1', what: 'шины, позиции, телеметрия, флаги', probe: 'https://api.openf1.org/v1/sessions?session_key=latest' },
    meteo: { label: 'Open-Meteo', what: 'прогноз погоды', probe: 'https://api.open-meteo.com/v1/forecast?latitude=0&longitude=0&current=temperature_2m' }
  },
  state: {},
  mark(name, ok, info = {}) {
    if (!ok && /HTTP 4\d\d/.test(String(info.error || '')) && !/429/.test(String(info.error))) ok = true;
    this.state[name] = { ok, ts: Date.now(), ms: info.ms ?? this.state[name]?.ms ?? null, error: ok ? null : String(info.error || 'нет ответа') };
    this.paint();
  },
  async check(name) {
    const svc = this.services[name];
    const t0 = performance.now();
    if (name === 'openf1') {
      try {
        await openF1Get('sessions?session_key=latest', null, { fresh: true });
        this.mark('openf1', true, { ms: Math.round(performance.now() - t0) });
      } catch { /* openF1Get already recorded the failure */ }
      return;
    }
    try {
      const res = await withTimeout(signal => fetch(svc.probe, { signal, cache: 'no-store' }), 8000);
      this.mark(name, res.ok || res.status < 500 && res.status !== 429, { ms: Math.round(performance.now() - t0), error: res.ok ? null : `HTTP ${res.status}` });
    } catch (err) {
      this.mark(name, false, { error: err.message === 'timeout' ? 'таймаут 8 с' : 'нет соединения' });
    }
  },
  async checkAll() {
    const fresh = n => this.state[n]?.ts && Date.now() - this.state[n].ts < 5 * 60 * 1000 && this.state[n].ok;
    await Promise.all(Object.keys(this.services).filter(n => n !== 'openf1' || !fresh(n)).map(n => this.check(n)));
    this.render();
  },
  level(name) {
    const s = this.state[name];
    if (!s) return 'unknown';
    if (!s.ok) return 'down';
    return s.ms && s.ms > 2500 ? 'slow' : 'ok';
  },
  paint() {
    $$('#healthDots i').forEach(i => { i.dataset.level = this.level(i.dataset.svc); });
    try { ProvBar.render(state.tab || 'home'); } catch {}
  },
  render() {
    const box = $('#healthPop');
    if (!box) return;
    const rows = Object.entries(this.services).map(([name, svc]) => {
      const s = this.state[name];
      const lv = this.level(name);
      const text = !s ? 'ещё не проверялся'
        : s.ok ? `работает${s.ms ? ` · ответ ${s.ms} мс` : ''} · ${new Date(s.ts).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`
        : `недоступен: ${esc(s.error)}`;
      return `<div class="health-row"><i class="health-dot" data-level="${lv}"></i><div><b>${svc.label}</b><small>${svc.what}</small></div><span class="health-text" data-level="${lv}">${text}</span></div>`;
    }).join('');
    const down = Object.keys(this.services).filter(n => this.level(n) === 'down');
    const snap = getEmbeddedSnapshot()?._metadata?.generatedAt;
    box.innerHTML = `
      <div class="health-head">Состояние источников данных</div>
      ${rows}
      <p class="health-note">${down.length
        ? `Недоступно: ${down.map(n => this.services[n].label).join(', ')}. Сайт показывает сохранённые данные: кэш браузера или встроенный снимок${snap ? ` от ${fmtDate(Date.parse(snap))}` : ''}.`
        : 'Все источники отвечают. Данные запрашиваются при каждом открытии сайта.'}</p>
      <button class="btn secondary sm" id="healthRecheck">Проверить сейчас</button>`;
    $('#healthRecheck')?.addEventListener('click', async e => {
      e.stopPropagation();
      e.target.disabled = true;
      e.target.textContent = 'Проверяем…';
      await this.checkAll();
    });
  },
  toggle(force) {
    const box = $('#healthPop');
    if (!box) return;
    const open = force ?? !box.classList.contains('open');
    box.classList.toggle('open', open);
    if (open) {
      this.render();
      if (!Object.keys(this.state).length) this.checkAll();
    }
  },
  init() {
    $('#status')?.addEventListener('click', e => { e.stopPropagation(); this.toggle(); });
    document.addEventListener('click', e => { if (!e.target.closest('#healthPop, #status')) this.toggle(false); });
    const run = () => this.checkAll();
    if (navigator.webdriver) return;  // automated browsers: probes only on demand
    if (typeof requestIdleCallback !== 'undefined') requestIdleCallback(run, { timeout: 4000 }); else setTimeout(run, 2500);
    setInterval(run, 10 * 60 * 1000);
    window.addEventListener('online', run);
  }
};

const Favs = {
  key: 'f1tl:favs',
  read() {
    let f = {};
    try { f = JSON.parse(safeStorage.get(this.key) || '{}') || {}; } catch {}
    ['driver', 'team'].forEach(k => {
      const v = f[k];
      f[k] = Array.isArray(v) ? v.filter(Boolean) : (v ? [v] : []);
    });
    return f;
  },
  list(kind) { return this.read()[kind] || []; },
  has(kind, id) { return Boolean(id) && this.list(kind).includes(id); },
  toggle(kind, id) {
    const f = this.read();
    const list = f[kind] || [];
    const on = !list.includes(id);
    f[kind] = on ? [...list, id] : list.filter(x => x !== id);
    try { safeStorage.set(this.key, JSON.stringify(f)); } catch {}
    document.documentElement.classList.toggle('has-favs', Boolean(f.driver.length || f.team.length));
    this.apply();
    Accent.apply();
    if (on && !Motion.reduced()) $$(`.fav-btn[data-fav="${kind}"]`).filter(b => b.dataset.id === id).forEach(b => { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); setTimeout(() => b.classList.remove('pop'), 600); });
    return on;
  },
  glyph(kind, id) { return this.has(kind, id) ? '★' : '☆'; },
  button(kind, id, large = false) {
    const on = this.has(kind, id);
    return `<button type="button" class="fav-btn${large ? ' lg' : ''}${on ? ' on' : ''}" data-fav="${kind}" data-id="${esc(id)}" aria-pressed="${on}" title="${on ? 'Убрать из избранного' : 'Добавить в избранное'}" aria-label="${on ? 'Убрать из избранного' : 'Добавить в избранное'}">${on ? '★' : '☆'}</button>`;
  },
  apply() {
    $$('.fav-btn').forEach(b => {
      const on = this.has(b.dataset.fav, b.dataset.id);
      b.classList.toggle('on', on);
      b.textContent = on ? '★' : '☆';
      b.setAttribute('aria-pressed', String(on));
      b.title = on ? 'Убрать из избранного' : 'Добавить в избранное';
      b.setAttribute('aria-label', b.title);
    });
    $$('[data-driver]:not(.fav-btn)').forEach(el => el.classList.toggle('fav-row', this.has('driver', el.dataset.driver)));
    $$('[data-team]:not(.fav-btn)').forEach(el => el.classList.toggle('fav-row', this.has('team', el.dataset.team)));
    renderFavoriteCard();
  }
};

try {
  const fold0 = document.getElementById('weekendFold');
  const races0 = readRaces(readSnapshot(`${CURRENT_SEASON}.json`)?.data);
  const n0 = nextRace(races0);
  const t0 = n0 ? (raceTime(n0) || scheduleMoment(n0)) : NaN;
  if (fold0 && Number.isFinite(t0)) fold0.open = t0 - Date.now() < 7 * 24 * 3600 * 1000;
  else if (safeStorage.get('f1tl:foldOpen') === '1') fold0.open = true;
} catch { try { if (safeStorage.get('f1tl:foldOpen') === '1') document.getElementById('weekendFold').open = true; } catch {} }
try { const f0 = Favs.read(); document.documentElement.classList.toggle('has-favs', Boolean(f0.driver.length || f0.team.length)); } catch {}

// адреса картинок, которые уже показаны: при перерисовке окна фото сразу видно, без нового проявления
const LoadedImgs = new Set();
const Motion = {
  last: null,
  reduced() { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; },
  init() {
    document.addEventListener('load', e => { const t = e.target; if (t && t.tagName === 'IMG') { t.classList.add('loaded'); LoadedImgs.add(t.getAttribute('src')); } }, true);
    document.addEventListener('pointerdown', e => {
      const card = e.target.closest?.('.driver-card, .team-card, .race-card, .track-catalog-card, .champ-chip, .stage-card');
      this.last = { x: e.clientX, y: e.clientY, t: Date.now(), rect: card ? card.getBoundingClientRect() : null };
    }, true);
    if (this.reduced()) return;
    const main = document.querySelector('main');
    if (main && 'MutationObserver' in window) {
      new MutationObserver(muts => {
        for (const m of muts) {
          m.addedNodes.forEach(n => {
            if (n.nodeType !== 1) return;
            const wraps = n.matches?.('.table-wrap') ? [n] : [...(n.querySelectorAll?.('.table-wrap') || [])];
            wraps.forEach(w => {
              if (w.classList.contains('live-table') || w.closest('.live-table') || !w.querySelector('tbody tr')) return;
              const host = w.parentElement;
              const panel = w.closest('.panel');
              if (!host || host.dataset.rowsSeen || (panel && !panel.classList.contains('active'))) return;
              this.animateRows(w, host);
            });
          });
        }
      }).observe(main, { childList: true, subtree: true });
    }
    this.pending = new Set();
    let queued = false;
    const check = () => {
      queued = false;
      const vh = window.innerHeight * 0.94;
      this.pending.forEach(el => {
        if (!el.isConnected) { this.pending.delete(el); return; }
        if (el.getBoundingClientRect().top < vh) { el.classList.add('rv-in'); this.pending.delete(el); setTimeout(() => el.classList.remove('rv', 'rv-in'), 700); }
      });
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(check); } };
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue, { passive: true });
    this.queue = queue;
    document.addEventListener('change', e => {
      if (!e.target.matches?.('select[id$="Season"]')) return;
      e.target.closest('.panel')?.querySelectorAll('[data-rows-seen]').forEach(h => delete h.dataset.rowsSeen);
    });
    setTimeout(() => this.reveal('home'), 1200);
    setTimeout(() => this.reveal('home'), 3000);
  },
  animateRows(w, host) {
    host.dataset.rowsSeen = '1';
    w.classList.add('rows-animate');
    setTimeout(() => w.classList.remove('rows-animate'), 900);
  },
  panelRows(panelId) {
    if (this.reduced()) return;
    document.getElementById(panelId)?.querySelectorAll('.table-wrap').forEach(w => {
      if (w.classList.contains('live-table') || w.closest('.live-table') || !w.querySelector('tbody tr')) return;
      const host = w.parentElement;
      if (host && !host.dataset.rowsSeen) this.animateRows(w, host);
    });
  },
  reveal(panelId) {
    if (this.reduced() || !this.pending) return;
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const vh = window.innerHeight;
    panel.querySelectorAll(':scope > .card, :scope > .weekend-fold, :scope > .grid > .card, :scope > .grid > section').forEach(el => {
      if (el.classList.contains('rv') || el.classList.contains('rv-done') || el.hidden) return;
      if (el.getBoundingClientRect().top > vh) { el.classList.add('rv'); this.pending.add(el); }
    });
    this.queue();
  },
  origin(modal) {
    const box = document.getElementById('modalBox');
    if (!box) return;
    const m = this.last;
    if (m && Date.now() - m.t < 1500) {
      const r = box.getBoundingClientRect();
      const ox = Math.min(100, Math.max(0, (m.x - r.left) / Math.max(1, r.width) * 100));
      const oy = Math.min(100, Math.max(0, (m.y - r.top) / Math.max(1, r.height) * 100));
      box.style.setProperty('--mo-x', ox.toFixed(1) + '%');
      box.style.setProperty('--mo-y', oy.toFixed(1) + '%');
      // desktop: the window grows out of the card that was pressed (card -> window); the phone keeps its bottom sheet
      const c = m.rect;
      if (c && window.innerWidth > 768 && !this.reduced() && box.animate && (!navigator.webdriver || window.__f1ForceVT)) {
        const sx = Math.max(.15, c.width / Math.max(1, r.width)), sy = Math.max(.08, c.height / Math.max(1, r.height));
        const dx = c.left + c.width / 2 - (r.left + r.width / 2), dy = c.top + c.height / 2 - (r.top + r.height / 2);
        box.style.animation = 'none';
        const a = box.animate([
          { transform: `translate(${dx.toFixed(0)}px, ${dy.toFixed(0)}px) scale(${sx.toFixed(3)}, ${sy.toFixed(3)})`, opacity: .35 },
          { transform: 'none', opacity: 1 }
        ], { duration: 340, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
        a.onfinish = a.oncancel = () => { box.style.animation = ''; };
        box.dataset.morph = '1';
      }
    } else {
      box.style.removeProperty('--mo-x');
      box.style.removeProperty('--mo-y');
    }
  }
};
Motion.init();

setTimeout(() => { try { Accent.apply(); } catch {} }, 0);

async function renderFavoriteCard() {
  for (const box of $$('#favCard, #myFavCard')) await renderFavInto(box);
}

async function renderFavInto(box) {
  if (!box) return;
  const f = Favs.read();
  const b = state.standings;
  const drivers = f.driver.map(id => b?.drivers?.find(d => d.Driver.driverId === id)).filter(Boolean);
  const teams = f.team.map(id => b?.teams?.find(t => t.Constructor.constructorId === id)).filter(Boolean);
  if (!drivers.length && !teams.length) {
    box.innerHTML = `<div class="fav-empty"><p><b>Ваши пилоты и команды</b> <span class="subtle">их очки и последний результат</span></p>
      <button class="btn secondary sm" data-go="drivers">☆ Выбрать пилотов</button></div>`;
    box.querySelector('[data-go]')?.addEventListener('click', () => switchTab('drivers'));
    return;
  }
  const parts = [];
  drivers.forEach(driver => {
    const color = teamColor(driver.Constructors?.[0]?.name);
    parts.push(`<div class="fav-item" style="--team:${color}" data-driver="${esc(driver.Driver.driverId)}" data-season="${state.season}" role="button" tabindex="0">
      <div class="fav-main"><b>${esc(driverName(driver.Driver))}</b><small>${esc(driver.Constructors?.[0]?.name || '')}</small></div>
      <div class="fav-nums"><span><b>P${esc(driver.position)}</b><small>место</small></span><span><b>${fmtNum(driver.points)}</b><small>очков</small></span><span><b>${fmtNum(driver.wins)}</b><small>побед</small></span></div>
      <div class="fav-last"><small class="subtle">Результат последней гонки…</small></div>
    </div>`);
  });
  teams.forEach(team => {
    const color = teamColor(team.Constructor.name);
    parts.push(`<div class="fav-item" style="--team:${color}" data-team="${esc(team.Constructor.constructorId)}" data-season="${state.season}" role="button" tabindex="0">
      <div class="fav-main"><b>${esc(team.Constructor.name)}</b><small>Кубок конструкторов</small></div>
      <div class="fav-nums"><span><b>P${esc(team.position)}</b><small>место</small></span><span><b>${fmtNum(team.points)}</b><small>очков</small></span><span><b>${fmtNum(team.wins)}</b><small>побед</small></span></div>
    </div>`);
  });
  box.innerHTML = `<h2>Моё избранное</h2><div class="fav-grid">${parts.join('')}</div>${teams.length ? `<label class="accent-toggle"><input type="checkbox" data-accent-toggle ${Accent.on() ? 'checked' : ''}> Цвета моей команды на всём сайте</label>` : ''}`;
  for (const driver of drivers) {
    try {
      const rounds = await loadDriverSeasonRounds(state.season, driver.Driver.driverId);
      const last = [...rounds.values()].filter(x => x.race).sort((a, c) => c.round - a.round)[0];
      const el = [...box.querySelectorAll('.fav-item[data-driver]')].find(x => x.dataset.driver === driver.Driver.driverId)?.querySelector('.fav-last');
      if (el?.isConnected) {
        el.innerHTML = last
          ? `<small class="subtle">${esc(last.raceName)}</small><b>${isActualDnf(last.race.status) ? 'Сход' : `P${esc(last.race.position)}`}</b><small class="subtle">старт P${esc(last.race.grid || '—')} · +${esc(last.race.points || 0)} очк.</small>`
          : '<small class="subtle">В этом сезоне гонок ещё не было</small>';
      }
    } catch {}
  }
}

const SESSION_DEFS = [
  ['FirstPractice', '1-я тренировка', 60],
  ['SecondPractice', '2-я тренировка', 60],
  ['ThirdPractice', '3-я тренировка', 60],
  ['SprintQualifying', 'Спринт-квалификация', 60],
  ['SprintShootout', 'Спринт-квалификация', 60],
  ['Sprint', 'Спринт', 60],
  ['Qualifying', 'Квалификация', 70]
];

function weekendSessions(races) {
  const out = [];
  (races || []).forEach(race => {
    SESSION_DEFS.forEach(([key, label, mins]) => {
      const s = race[key];
      if (s?.date && s?.time) {
        const start = Date.parse(`${s.date}T${s.time}`);
        if (Number.isFinite(start)) out.push({ race, key, label, start, end: start + mins * 60000, kind: key === 'Sprint' ? 'race' : key.includes('Qualifying') || key === 'SprintShootout' ? 'quali' : 'practice' });
      }
    });
    if (race.date && race.time) {
      const start = Date.parse(`${race.date}T${race.time}`);
      if (Number.isFinite(start)) out.push({ race, key: 'Race', label: 'Гонка', start, end: start + 150 * 60000, kind: 'race' });
    }
  });
  return out.sort((a, b) => a.start - b.start);
}

const Live = {
  timer: null,
  current: null,
  forced: false,
  busy: false,

  find(now = Date.now()) {
    return weekendSessions(state.calendar).find(s => now >= s.start - 10 * 60000 && now <= s.end + 20 * 60000) || null;
  },

  init() {
    this.forced = new URLSearchParams(location.search).get('live') === 'latest';
    this.tick();
    setInterval(() => this.tick(), 30000);
  },

  tick() {
    const session = this.forced ? { race: state.calendar?.find(r => isRaceCompleted({ ...r, season: state.season })) || {}, key: 'Race', label: 'Последняя сессия (режим просмотра)', kind: 'race', start: 0, end: 0, preview: true } : this.find();
    this.current = session;
    const card = $('#liveCard');
    if (!card) return;
    if (!session) {
      card.hidden = true;
      $('#liveBadge') && ($('#liveBadge').hidden = true);
      clearInterval(this.timer);
      this.timer = null;
      return;
    }
    card.hidden = false;
    const badge = $('#liveBadge');
    if (badge) badge.hidden = session.preview;
    if (!this.timer) {
      this.refresh();
      this.timer = setInterval(() => this.refresh(), 60000);
    }
  },

  async fetchData(session) {
    const meta = (await openF1Get('sessions?session_key=latest', null, { fresh: true }))[0];
    if (!meta) throw new Error('OpenF1 не вернул сессию');
    const metaStart = Date.parse(meta.date_start);
    const matches = session.preview || Math.abs(metaStart - session.start) < 4 * 3600 * 1000;
    if (!matches) return { meta, waiting: true };
    const key = meta.session_key;
    const sinceMs = session.preview ? Date.parse(meta.date_end) - 6 * 60000 : Date.now() - 5 * 60000;
    const since = new Date(sinceMs).toISOString();
    if (this.store?.key !== key) this.store = { key, pos: {}, int: {} };
    const store = this.store;
    const isRace = /race|sprint/i.test(meta.session_name) && !/qualifying|shootout/i.test(meta.session_name);
    const drivers = await openF1Get(`drivers?session_key=${key}`, d => ({ driver_number: d.driver_number, name_acronym: d.name_acronym, broadcast_name: d.broadcast_name, team_name: d.team_name, team_colour: d.team_colour }));
    const rc = await openF1Get(`race_control?session_key=${key}`, null, { fresh: true });
    const weather = await openF1Get(`weather?session_key=${key}&date>=${since}`, null, { fresh: true });
    const stints = await openF1Get(`stints?session_key=${key}`, null, { fresh: true });
    const laps = await openF1Get(`laps?session_key=${key}${isRace ? `&date_start>=${since}` : ''}`, l => ({ driver_number: l.driver_number, lap_number: l.lap_number, lap_duration: l.lap_duration }), { fresh: true });
    const positions = isRace ? await openF1Get(`position?session_key=${key}&date>=${store.posSince || meta.date_start}`, p => ({ driver_number: p.driver_number, date: p.date, position: p.position }), { fresh: true }) : [];
    const intervals = isRace ? await openF1Get(`intervals?session_key=${key}&date>=${store.intSince || new Date(sinceMs).toISOString()}`, i => ({ driver_number: i.driver_number, date: i.date, interval: i.interval, gap_to_leader: i.gap_to_leader }), { fresh: true }) : [];
    const merge = (rows, map, sinceKey) => {
      rows.forEach(r => { if (!map[r.driver_number] || r.date >= map[r.driver_number].date) map[r.driver_number] = r; if (!store[sinceKey] || r.date > store[sinceKey]) store[sinceKey] = r.date; });
      return Object.values(map);
    };
    return { meta, key, isRace, drivers, rc, weather, stints, laps, positions: merge(positions, store.pos, 'posSince'), intervals: merge(intervals, store.int, 'intSince') };
  },

  model(data) {
    const byNum = {};
    data.drivers.forEach(d => { byNum[d.driver_number] = d; });
    const latest = (rows, field) => {
      const m = {};
      rows.forEach(r => { if (!m[r.driver_number] || r.date > m[r.driver_number].date) m[r.driver_number] = r; });
      return m;
    };
    const lastPos = latest(data.positions);
    const lastInt = latest(data.intervals);
    const curLap = Math.max(0, ...data.laps.map(l => l.lap_number || 0));
    const lastStint = {};
    data.stints.forEach(s => { if (!lastStint[s.driver_number] || s.stint_number > lastStint[s.driver_number].stint_number) lastStint[s.driver_number] = s; });
    let rows;
    if (data.isRace) {
      rows = Object.values(lastPos).sort((a, b) => a.position - b.position).map(p => ({
        pos: p.position, num: p.driver_number, interval: lastInt[p.driver_number]?.interval, gap: lastInt[p.driver_number]?.gap_to_leader
      }));
    } else {
      const best = {};
      data.laps.forEach(l => { if (l.lap_duration && (!best[l.driver_number] || l.lap_duration < best[l.driver_number])) best[l.driver_number] = l.lap_duration; });
      const sorted = Object.entries(best).sort((a, b) => a[1] - b[1]);
      rows = sorted.map(([num, t], i) => ({ pos: i + 1, num: Number(num), best: t, gapBest: t - sorted[0][1] }));
    }
    rows.forEach(r => {
      const d = byNum[r.num] || {};
      r.acronym = d.name_acronym || `#${r.num}`;
      r.name = d.broadcast_name || r.acronym;
      r.colour = d.team_colour ? `#${d.team_colour}` : '#888';
      const st = lastStint[r.num];
      if (st) {
        r.compound = st.compound;
        r.age = Number(st.tyre_age_at_start || 0) + Math.max(0, (curLap || st.lap_end || st.lap_start) - st.lap_start);
      }
    });
    const flags = data.rc.filter(m => m.category !== 'Drs' && m.category !== 'SessionStatus' && m.flag !== 'BLUE' && m.flag !== 'CLEAR' && m.flag !== 'GREEN')
      .slice(-5).reverse();
    const status = data.rc.filter(m => m.category === 'SessionStatus').slice(-1)[0]?.message;
    const w = data.weather.slice(-1)[0];
    return { rows, curLap, flags, status, weather: w, isRace: data.isRace };
  },

  render(session, data) {
    const card = $('#liveCard');
    if (!card) return;
    if (data.waiting) {
      card.classList.add('quiet');
      card.innerHTML = this.head(session, 'ожидаем данные OpenF1') + '<p class="subtle" style="margin:0">Сессия начнётся или данные ещё не опубликованы. Страница обновляется раз в минуту.</p>';
      return;
    }
    card.classList.remove('quiet');
    const m = this.model(data);
    const favs = Favs.list('driver');
    const favNums = new Set(data.drivers.filter(d => d.name_acronym && state.standings?.drivers?.some(s => favs.includes(s.Driver.driverId) && s.Driver.code === d.name_acronym)).map(d => d.driver_number));
    const comp = { SOFT: 'S', MEDIUM: 'M', HARD: 'H', INTERMEDIATE: 'I', WET: 'W' };
    const fmtLap = t => `${Math.floor(t / 60)}:${(t % 60).toFixed(3).padStart(6, '0')}`;
    const fmtGap = v => v === null || v === undefined ? '—' : typeof v === 'number' ? `+${v.toFixed(1)}` : String(v);
    const table = m.rows.length ? `<div class="table-wrap live-table"><table>
      <thead><tr><th>#</th><th>Пилот</th>${m.isRace ? '<th class="num">До лидера</th><th class="num col-gap">Интервал</th>' : '<th class="num">Лучший круг</th><th class="num col-gap">Отрыв</th>'}<th class="num">Шины</th></tr></thead>
      <tbody>${m.rows.slice(0, 12).map(r => `<tr class="${favNums.has(r.num) ? 'fav-row' : ''}">
        <td><span class="pos-badge ${r.pos <= 3 ? 'p' + r.pos : ''}">${r.pos}</span></td>
        <td><div class="team-cell"><span class="team-livery-bar" style="background:${r.colour}"></span><b>${esc(r.acronym)}</b></div></td>
        ${m.isRace
          ? `<td class="num">${r.pos === 1 ? 'Лидер' : fmtGap(r.gap)}</td><td class="num gap-cell col-gap">${r.pos === 1 ? '' : fmtGap(r.interval)}</td>`
          : `<td class="num">${fmtLap(r.best)}</td><td class="num gap-cell col-gap">${r.gapBest ? '+' + r.gapBest.toFixed(3) : ''}</td>`}
        <td class="num">${r.compound ? `<span class="tyre-chip stint-compound-${r.compound === 'INTERMEDIATE' ? 'inter' : String(r.compound).toLowerCase()}">${comp[r.compound] || '?'}${Number.isFinite(r.age) ? ` · ${r.age}` : ''}</span>` : '—'}</td>
      </tr>`).join('')}</tbody></table></div>`
      : '<p class="subtle" style="margin:0">Данных о позициях пока нет.</p>';
    const flags = m.flags.length ? `<ul class="live-flags">${m.flags.map(f => `<li><small>${new Date(f.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}${f.lap_number ? ` · круг ${f.lap_number}` : ''}</small> ${esc(f.message)}</li>`).join('')}</ul>` : '<p class="subtle" style="margin:0">Событий дирекции гонки нет.</p>';
    const w = m.weather;
    card.innerHTML = this.head(session, m.status ? m.status : '', m.isRace && m.curLap ? `круг ${m.curLap}` : '') + `
      <div class="live-grid">
        <div>${table}</div>
        <div>
          <h3 class="h4">Дирекция гонки</h3>${flags}
          ${w ? `<h3 class="h4">Трасса</h3><div class="live-weather"><span><b>${Number(w.track_temperature).toFixed(0)}°</b><small>асфальт</small></span><span><b>${Number(w.air_temperature).toFixed(0)}°</b><small>воздух</small></span><span><b>${w.rainfall ? 'дождь' : 'сухо'}</b><small>осадки</small></span><span><b>${Number(w.wind_speed).toFixed(0)}</b><small>ветер м/с</small></span></div>` : ''}
        </div>
      </div>
      <p class="live-foot">Обновлено ${new Date().toLocaleTimeString('ru-RU')} · источник OpenF1 · автообновление раз в минуту</p>`;
  },

  head(session, extra, extra2 = '') {
    const title = session.preview ? session.label : `${ruGP(session.race.raceName || '')} · ${session.label}`;
    return `<div class="live-head">
      <span class="live-pill${session.preview ? ' preview' : ''}"><i></i>${session.preview ? 'ПРОСМОТР' : 'LIVE'}</span>
      <h2>${esc(title)}</h2>
      <span class="live-extra">${esc([extra2, extra].filter(Boolean).join(' · '))}</span>
    </div>`;
  },

  async refresh() {
    if (this.busy || !this.current) return;
    this.busy = true;
    const session = this.current;
    try {
      const data = await this.fetchData(session);
      this.render(session, data);
    } catch (err) {
      const card = $('#liveCard');
      if (card?.isConnected) {
        const gated = /HTTP 40[13]/.test(err.message);
        card.classList.add('quiet');
        card.innerHTML = this.head(session, 'нет связи с OpenF1') + `<p class="subtle" style="margin:0">${gated
          ? 'OpenF1 сейчас не отдаёт данные без авторизации: у сервиса бывает платный доступ к прямому эфиру. Результаты появятся на сайте после сессии.'
          : 'Не удалось загрузить данные сессии. Повторим через минуту.'}</p>`;
      }
      Health.mark('openf1', false, { error: err.message });
    } finally {
      this.busy = false;
    }
  }
};

const Notify = {
  key: 'f1tl:notify',
  doneKey: 'f1tl:notified',
  enabled() { return safeStorage.get(this.key) === '1'; },
  done() { try { return JSON.parse(safeStorage.get(this.doneKey) || '[]'); } catch { return []; } },
  markDone(id) {
    const list = this.done().slice(-60);
    list.push(id);
    try { safeStorage.set(this.doneKey, JSON.stringify(list)); } catch {}
  },
  paintButton() {
    const b = $('#notifyBtn');
    if (!b) return;
    const on = this.enabled();
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', String(on));
    b.title = on ? 'Уведомления включены (работают, пока сайт открыт)' : 'Включить уведомления о сессиях и итогах гонок';
  },
  async toggle() {
    if (this.enabled()) {
      safeStorage.set(this.key, '0');
      this.paintButton();
      toast('Уведомления выключены');
      return;
    }
    safeStorage.set(this.key, '1');
    this.paintButton();
    let perm = 'unsupported';
    if ('Notification' in window) {
      try { perm = Notification.permission === 'default' ? await Notification.requestPermission() : Notification.permission; } catch { perm = 'denied'; }
    }
    toast(perm === 'granted'
      ? 'Уведомления включены: за 30 минут до сессий и сразу после финиша гонки. Работают, пока вкладка открыта.'
      : 'Системные уведомления недоступны в этом браузере — напоминания будут появляться внутри страницы, пока сайт открыт.');
    this.tick();
  },
  send(title, body) {
    toast(`${title}${body ? ' — ' + body : ''}`);
    if ('Notification' in window && Notification.permission === 'granted') {
      try { new Notification(title, { body, tag: title }); } catch {}
    }
  },
  async tick() {
    if (!this.enabled() || !state.calendar?.length) return;
    const now = Date.now();
    const done = this.done();
    weekendSessions(state.calendar).forEach(s => {
      const id = `${s.race.season}-${s.race.round}-${s.key}-pre`;
      const left = s.start - now;
      if (left > 0 && left <= 31 * 60000 && !done.includes(id)) {
        this.markDone(id);
        const when = new Date(s.start).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
        this.send(`${s.race.raceName}: ${s.label.toLowerCase()} в ${when}`, `старт через ${Math.max(1, Math.round(left / 60000))} мин`);
      }
    });
    const race = state.calendar.find(r => {
      const t = scheduleMoment(r);
      return Number.isFinite(t) && now > t + 2 * 3600000 && now < t + 16 * 3600000;
    });
    if (race) {
      const id = `${race.season}-${race.round}-post`;
      if (!done.includes(id) && !this._postBusy) {
        this._postBusy = true;
        try {
          const res = await request(`${race.season}/${race.round}/results.json`, { force: true });
          const r = readRaces(res.data)[0]?.Results || [];
          if (r.length) {
            this.markDone(id);
            const fl = findOfficialFastestLap(r);
            const favIds = Favs.list('driver');
            const mine = r.filter(x => favIds.includes(x.Driver.driverId));
            this.send(`${race.raceName}: итоги`,
              `1. ${driverName(r[0].Driver)} · 2. ${driverName(r[1]?.Driver)} · 3. ${driverName(r[2]?.Driver)}` +
              (fl ? ` · быстрый круг: ${driverName(fl.Driver)}` : '') +
              mine.map(x => ` · ${driverName(x.Driver)}: ${isActualDnf(x.status) ? 'сход' : 'P' + x.position}`).join(''));
            loadHome({ force: true }).catch(() => {});
          }
        } catch {}
        this._postBusy = false;
      }
    }
  },
  init() {
    $('#notifyBtn')?.addEventListener('click', () => this.toggle());
    this.paintButton();
    setTimeout(() => this.tick(), 4000);
    setInterval(() => this.tick(), 60000);
  }
};

function initExtras() {
  if (!navigator.webdriver) {
    // список фото уже есть (из памяти или из страницы): рисуем сразу; нет — просим у OpenF1, не дожидаясь простоя
    if (Headshots.map) Headshots.load(); else setTimeout(() => Headshots.load(), 300);
  }
  Health.init();
  Notify.init();
  Live.init();
  renderFavoriteCard();
}

const Headshots = {
  map: null,
  ts: 0,
  pending: null,
  url(code, size = 4) {
    const base = this.map?.[String(code || '').toUpperCase()];
    return base ? base.replace('/1col/', `/${size}col/`) : null;
  },
  // без сети: свежий из двух списков — сохранённый в браузере или вписанный в страницу при сборке сайта (SITE.headshots)
  prime() {
    let saved = null;
    try { saved = JSON.parse(safeStorage.get('f1tl:headshots') || 'null'); } catch {}
    const baked = SITE?.headshots;
    const best = [saved, baked].filter(x => x?.map && Object.keys(x.map).length).sort((x, y) => (y.ts || 0) - (x.ts || 0))[0];
    if (best && !this.map) { this.map = { ...best.map }; this.ts = Number(best.ts) || 0; }
    return Boolean(this.map);
  },
  load() {
    if (!this.pending) {
      const had = this.prime();
      if (had) paintHeadshots();
      if (had && Date.now() - this.ts < 24 * 3600 * 1000) {
        this.pending = Promise.resolve(this.map);
        return this.pending;
      }
      // списка нет или ему больше суток: старый показываем сразу, новый берём у OpenF1 в фоне
      const net = openF1Get('drivers?session_key=latest', d => ({ name_acronym: d.name_acronym, headshot_url: d.headshot_url }), { fresh: true })
        .then(rows => {
          const fresh = {};
          rows.forEach(r => { if (r.name_acronym && r.headshot_url) fresh[r.name_acronym] = r.headshot_url; });
          if (!Object.keys(fresh).length) return this.map || {};
          this.map = { ...(this.map || {}), ...fresh };
          this.ts = Date.now();
          try { safeStorage.set('f1tl:headshots', JSON.stringify({ ts: this.ts, map: this.map })); } catch {}
          paintHeadshots();
          return this.map;
        })
        .catch(() => { if (!had) this.pending = null; return this.map || {}; });  // a rate limit must not disable photos for the whole session
      this.pending = had ? Promise.resolve(this.map) : net;
    }
    return this.pending;
  },
  ready(ms = 1500) {
    return Promise.race([this.load(), new Promise(r => setTimeout(() => r(this.map || {}), ms))]);
  }
};
// список фото известен до первой отрисовки списков: портреты сразу на месте, без ожидания OpenF1
try { Headshots.prime(); } catch {}


function paintHeadshots() {
  if (!Headshots.map) return;
  $$('.avatar[data-code]').forEach(el => {
    if (el.dataset.photo) return;
    const url = Headshots.url(el.dataset.code, 2);
    if (!url) return;
    el.dataset.photo = '1';
    el.removeAttribute('data-wiki');
    el.classList.add('has-photo');
    el.innerHTML = `<img src="${url}" alt="" width="64" height="64" referrerpolicy="no-referrer" onerror="this.remove();this.parentNode&&this.parentNode.classList.remove('has-photo')">`;
  });
}

const TEAM_PALETTES = {
  mercedes: { p: '#27f4d2', s: '#06332e', a: '#c8d0d4' },
  ferrari: { p: '#e80020', s: '#3d0009', a: '#fff200' },
  'red bull': { p: '#3671c6', s: '#0b1c38', a: '#ffc906' },
  mclaren: { p: '#ff8000', s: '#3d1d00', a: '#47c7fc' },
  'racing bulls': { p: '#6692ff', s: '#111b3d', a: '#e6edff' },
  'rb f1': { p: '#6692ff', s: '#111b3d', a: '#e6edff' },
  alphatauri: { p: '#5e8faa', s: '#101f29', a: '#e7eef2' },
  'toro rosso': { p: '#469bff', s: '#0c2340', a: '#e10600' },
  alpine: { p: '#0093cc', s: '#012a3d', a: '#ff87bc' },
  renault: { p: '#ffd800', s: '#3a3000', a: '#111111' },
  haas: { p: '#b6babd', s: '#1c1e20', a: '#e10600' },
  audi: { p: '#c9ccd1', s: '#1c1e23', a: '#e4002b' },
  williams: { p: '#64c4ff', s: '#0a2140', a: '#1868db' },
  'aston martin': { p: '#229971', s: '#06281e', a: '#cedc00' },
  'racing point': { p: '#f596c8', s: '#3d1a2f', a: '#ffffff' },
  cadillac: { p: '#c4a747', s: '#1d1808', a: '#ffffff' },
  sauber: { p: '#52e252', s: '#082b08', a: '#ffffff' },
  'alfa romeo': { p: '#c8102e', s: '#3a0610', a: '#ffffff' }
};

function readableOn(hex) {
  const n = parseInt(String(hex).replace('#', ''), 16);
  const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum > 0.58 ? '#0b0d10' : '#ffffff';
}

function teamPalette(name) {
  const lower = String(name || '').toLowerCase();
  const hit = Object.entries(TEAM_PALETTES).find(([k]) => lower.includes(k));
  const base = hit ? hit[1] : { p: teamColor(name), s: '#14171c', a: '#c4cfdb' };
  return { ...base, tc: readableOn(base.p) };
}

const NATION_FLAGS = {
  Dutch: '🇳🇱', British: '🇬🇧', Monegasque: '🇲🇨', Australian: '🇦🇺', Spanish: '🇪🇸', Mexican: '🇲🇽', German: '🇩🇪', Thai: '🇹🇭',
  Finnish: '🇫🇮', Canadian: '🇨🇦', Japanese: '🇯🇵', French: '🇫🇷', Danish: '🇩🇰', Chinese: '🇨🇳', Italian: '🇮🇹', American: '🇺🇸',
  'New Zealander': '🇳🇿', Brazilian: '🇧🇷', Argentine: '🇦🇷', Argentinian: '🇦🇷', Austrian: '🇦🇹', Swiss: '🇨🇭', Belgian: '🇧🇪', Swedish: '🇸🇪',
  Russian: '🇷🇺', Polish: '🇵🇱', Indonesian: '🇮🇩', Venezuelan: '🇻🇪', Colombian: '🇨🇴', Portuguese: '🇵🇹', Hungarian: '🇭🇺', Irish: '🇮🇪',
  'South African': '🇿🇦', Uruguayan: '🇺🇾', Chilean: '🇨🇱', Malaysian: '🇲🇾', Czech: '🇨🇿', Estonian: '🇪🇪', Emirati: '🇦🇪', Indian: '🇮🇳'
};
const flagOf = nat => NATION_FLAGS[nat] || '';

// Форма слова после числа: 1 этап, 2 этапа, 5 этапов. Дробное число (12,5) — как «2–4»: «12,5 очка»
function ruPlural(n, [one, few, many]) {
  n = Math.abs(Number(n) || 0);
  if (!Number.isInteger(n)) return few;
  const m10 = n % 10, m100 = n % 100;
  return m10 === 1 && m100 !== 11 ? one : m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20) ? few : many;
}


async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      try { out[i] = await fn(items[i], i); } catch { out[i] = null; }
    }
  }));
  return out;
}

const _traitCache = new Map();
const _traitStats = new Map();

const _careerCache = new Map();


// Значки сильных сторон пилота (линии 24×24, цвет берут от текста)
const TRAIT_ICONS = {
  poles: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3"/>',
  wins: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  fastest: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  gain: '<path d="M7 17 17 7M9 7h8v8"/>',
  points: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  reliab: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>'
};



const Watch = {
  key: 'f1tl:watched',
  read() { try { return JSON.parse(safeStorage.get(this.key) || '{}') || {}; } catch { return {}; } },
  has(id) { return Boolean(this.read()[id]); },
  toggle(id) {
    const w = this.read();
    if (w[id]) delete w[id]; else w[id] = Date.now();
    try { safeStorage.set(this.key, JSON.stringify(w)); } catch {}
    this.paint();
    if (w[id] && !Motion.reduced()) $$(`[data-watch="${id}"]`).forEach(b => { b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); setTimeout(() => b.classList.remove('pop'), 500); });
    if (state.tab === 'my') loadMyPage();
    return Boolean(w[id]);
  },
  button(season, round) {
    const id = `${season}-${round}`;
    const on = this.has(id);
    return `<button type="button" class="btn secondary sm watch-btn${on ? ' on' : ''}" data-watch="${id}" aria-pressed="${on}">${on ? '✓ Смотрел(а)' : 'Я смотрел(а) эту гонку'}</button>`;
  },
  paint() {
    $$('[data-watch]').forEach(b => {
      const on = this.has(b.dataset.watch);
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
      if (b.classList.contains('watch-btn')) b.textContent = on ? '✓ Смотрел(а)' : 'Я смотрел(а) эту гонку';
    });
  }
};

async function loadMyPage(...args) { const self = loadMyPage; await LazyMod.load(); if (loadMyPage === self) throw new Error("loadMyPage: second script missing"); return loadMyPage(...args); }

const TL_LABELS = { OVERTAKE: 'ОБГОН', PENALTY: 'ШТРАФ', INVESTIGATION: 'РАЗБОР', STEWARD: 'СТЮАРДЫ', DELETED: 'КРУГ УДАЛЁН' };
const tlLabel = type => TL_LABELS[type] || String(type).replace('_', ' ');

function stewardEvents(messages, driversByNum = {}) {
  const out = [];
  messages.forEach(m => {
    const text = String(m.message || '');
    const up = text.toUpperCase();
    let type = null, title = '';
    const car = (up.match(/CARS? (\d+) \(([A-Z]{3})\)/) || [])[2];
    if (/TIME PENALTY|DRIVE.?THROUGH|STOP.?GO/.test(up) && /PENALTY|DRIVE|STOP/.test(up) && up.includes('FIA STEWARDS')) { type = 'PENALTY'; title = `Штраф${car ? ': ' + car : ''}`; }
    else if (up.includes('UNDER INVESTIGATION')) { type = 'INVESTIGATION'; title = `Инцидент разбирается${car ? ': ' + car : ''}`; }
    else if (/NO FURTHER (ACTION|INVESTIGATION)/.test(up)) { type = 'STEWARD'; title = 'Без наказания'; }
    else if (/DELETED/.test(up) && /TRACK LIMITS/.test(up)) { type = 'DELETED'; title = `Время аннулировано${car ? ': ' + car : ''} · трек-лимиты`; }
    if (!type) return;
    const lap = Number.isFinite(Number(m.lap_number)) && m.lap_number !== null ? Number(m.lap_number) : Number((up.match(/ LAP (\d+)/) || [])[1]) || null;
    out.push({
      lap,
      type,
      badge: type === 'PENALTY' ? 't-badge-pen' : type === 'INVESTIGATION' ? 't-badge-inv' : 't-badge-steward',
      title,
      desc: text.replace(/\s*\(\d{1,2}:\d{2}:\d{2}\)\s*$/, '').replace(/ \d{1,2}:\d{2}:\d{2}$/, ''),
      turn: null, progress: null, locationStatus: 'UNAVAILABLE'
    });
  });
  return out;
}


(async () => {
  initEvents();
  initNavigation();
  initExtras();
  if (!window.f1TrackValidation && typeof validateCircuitSystem === 'function') {
    try { window.f1TrackValidation = validateCircuitSystem(false); } catch (e) {}
  }
  initFileProtocolNotice();
  PWA.init();
  NavMotion.init();
  fillSeasons();
  const startTab = tabFromHash();
  const startDeep = Deep.parse() || Deep.fromPath();
  if (startDeep) { try { history.replaceState(null, '', SITE ? SITE.base + (startTab && startTab !== 'home' ? startTab + '/' : '') : location.pathname + location.search); } catch {} }   // Back must lead to a clean address
  if (startTab && startTab !== 'home') switchTab(startTab);
  document.body.dataset.booted = '1';
  try { LazyMod.warm(); } catch {}
  // pointing at a secondary tab or a card fetches the code of the windows ahead of the click (fast connections only)
  if (SITE?.lazy && !navigator.connection?.saveData) document.addEventListener('pointerover', e => { if (e.target.closest?.('[data-tab], .driver-card, .team-card, .race-card, .track-catalog-card')) LazyMod.load().catch(() => {}); }, { passive: true, once: true });
  await loadHome();
  if (SITE) { ChartLib.load(); SnapshotStore.whenAll(); }
  if (startDeep) Deep.open(startDeep);
  const runIdle = typeof requestIdleCallback !== 'undefined' ? cb => requestIdleCallback(cb, { timeout: 1500 }) : cb => setTimeout(cb, 120);
  runIdle(async () => {
    try { await syncIdbToSnapshot(); } catch {}
    try { window.f1TrackValidation = typeof validateCircuitSystem === 'function' ? validateCircuitSystem(false) : null; } catch {}
    prewarmSnapshotBundles();
  });
  setTimeout(() => FreshData.check(), 2500);
})();
