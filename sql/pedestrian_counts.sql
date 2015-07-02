SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE `pedestrian_counts` (
  `sensor_id` int(2) DEFAULT NULL,
  `time_period` int(2) DEFAULT NULL,
  `counts` int(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `pedestrian_counts` (`sensor_id`, `time_period`, `counts`) VALUES
(1, 0, 805742),
(1, 1, 118526),
(1, 2, 79925),
(1, 3, 60761),
(1, 4, 39473),
(1, 5, 48313),
(1, 6, 113577),
(1, 7, 352316),
(1, 8, 888785),
(1, 9, 1235227),
(1, 10, 1965440),
(1, 11, 2903794),
(1, 12, 4566569),
(1, 13, 5107625),
(1, 14, 4343902),
(1, 15, 4181362),
(1, 16, 3985395),
(1, 17, 3821936),
(1, 18, 2734199),
(1, 19, 1645671),
(1, 20, 1131754),
(1, 21, 731787),
(1, 22, 520208),
(1, 23, 331837),
(2, 0, 1045235),
(2, 1, 181316),
(2, 2, 131726),
(2, 3, 106624),
(2, 4, 65557),
(2, 5, 66965),
(2, 6, 184262),
(2, 7, 524146),
(2, 8, 1286632),
(2, 9, 1851325),
(2, 10, 3009936),
(2, 11, 4446750),
(2, 12, 6892383),
(2, 13, 7831518),
(2, 14, 6504722),
(2, 15, 6279524),
(2, 16, 5900498),
(2, 17, 5237333),
(2, 18, 3183852),
(2, 19, 1801762),
(2, 20, 1272214),
(2, 21, 859955),
(2, 22, 636794),
(2, 23, 438397),
(3, 0, 1610909),
(3, 1, 472561),
(3, 2, 294425),
(3, 3, 210350),
(3, 4, 112338),
(3, 5, 145348),
(3, 6, 302614),
(3, 7, 621810),
(3, 8, 1333504),
(3, 9, 1597265),
(3, 10, 2147456),
(3, 11, 2959483),
(3, 12, 4764127),
(3, 13, 5321215),
(3, 14, 4955989),
(3, 15, 4927924),
(3, 16, 4927425),
(3, 17, 5188132),
(3, 18, 4898860),
(3, 19, 4181855),
(3, 20, 3719755),
(3, 21, 3104991),
(3, 22, 2323449),
(3, 23, 1598582),
(4, 0, 2071862),
(4, 1, 596862),
(4, 2, 408133),
(4, 3, 309206),
(4, 4, 197963),
(4, 5, 200110),
(4, 6, 356164),
(4, 7, 889784),
(4, 8, 1923902),
(4, 9, 2545427),
(4, 10, 3687810),
(4, 11, 4931967),
(4, 12, 6970186),
(4, 13, 7733886),
(4, 14, 7023283),
(4, 15, 6937680),
(4, 16, 6771139),
(4, 17, 6599321),
(4, 18, 5233577),
(4, 19, 3886689),
(4, 20, 3208569),
(4, 21, 2711163),
(4, 22, 2116732),
(4, 23, 1624533),
(5, 0, 1167587),
(5, 1, 294093),
(5, 2, 205872),
(5, 3, 155690),
(5, 4, 112061),
(5, 5, 181473),
(5, 6, 518025),
(5, 7, 1337203),
(5, 8, 2532962),
(5, 9, 1930544),
(5, 10, 2192447),
(5, 11, 2779866),
(5, 12, 3665801),
(5, 13, 3744142),
(5, 14, 3467022),
(5, 15, 3511240),
(5, 16, 3900159),
(5, 17, 4786423),
(5, 18, 3648797),
(5, 19, 2690271),
(5, 20, 2025927),
(5, 21, 1994099),
(5, 22, 1919913),
(5, 23, 1173147),
(6, 0, 1383829),
(6, 1, 302647),
(6, 2, 194400),
(6, 3, 136558),
(6, 4, 122151),
(6, 5, 233413),
(6, 6, 767604),
(6, 7, 2054940),
(6, 8, 4396958),
(6, 9, 2543703),
(6, 10, 2010364),
(6, 11, 2443416),
(6, 12, 3796900),
(6, 13, 3969032),
(6, 14, 3337268),
(6, 15, 3385052),
(6, 16, 4068105),
(6, 17, 5646546),
(6, 18, 3672532),
(6, 19, 2355360),
(6, 20, 1896905),
(6, 21, 1726271),
(6, 22, 1466412),
(6, 23, 1137109),
(7, 0, 118103),
(7, 1, 66001),
(7, 2, 48549),
(7, 3, 44374),
(7, 4, 40892),
(7, 5, 54846),
(7, 6, 146526),
(7, 7, 336253),
(7, 8, 525032),
(7, 9, 424735),
(7, 10, 504345),
(7, 11, 574374),
(7, 12, 818396),
(7, 13, 943528),
(7, 14, 757064),
(7, 15, 698766),
(7, 16, 816240),
(7, 17, 1062744),
(7, 18, 1133929),
(7, 19, 813244),
(7, 20, 408761),
(7, 21, 420282),
(7, 22, 700934),
(7, 23, 401451),
(8, 0, 91993),
(8, 1, 9537),
(8, 2, 5452),
(8, 3, 3834),
(8, 4, 5126),
(8, 5, 35118),
(8, 6, 167833),
(8, 7, 402101),
(8, 8, 640954),
(8, 9, 312641),
(8, 10, 251762),
(8, 11, 323835),
(8, 12, 771214),
(8, 13, 687038),
(8, 14, 372561),
(8, 15, 359842),
(8, 16, 488135),
(8, 17, 786638),
(8, 18, 510836),
(8, 19, 246421),
(8, 20, 139155),
(8, 21, 103703),
(8, 22, 90234),
(8, 23, 46429),
(9, 0, 323937),
(9, 1, 21006),
(9, 2, 12549),
(9, 3, 10143),
(9, 4, 9852),
(9, 5, 79313),
(9, 6, 604655),
(9, 7, 1744919),
(9, 8, 3513274),
(9, 9, 1658886),
(9, 10, 699105),
(9, 11, 683482),
(9, 12, 1600658),
(9, 13, 1430815),
(9, 14, 834902),
(9, 15, 1020950),
(9, 16, 2047870),
(9, 17, 3112620),
(9, 18, 1312076),
(9, 19, 464849),
(9, 20, 244172),
(9, 21, 170389),
(9, 22, 144229),
(9, 23, 97800),
(10, 0, 239928),
(10, 1, 32365),
(10, 2, 18729),
(10, 3, 19140),
(10, 4, 11119),
(10, 5, 38109),
(10, 6, 164287),
(10, 7, 516990),
(10, 8, 1036436),
(10, 9, 604736),
(10, 10, 370848),
(10, 11, 367086),
(10, 12, 707162),
(10, 13, 605431),
(10, 14, 398842),
(10, 15, 414872),
(10, 16, 716964),
(10, 17, 1107963),
(10, 18, 663616),
(10, 19, 360677),
(10, 20, 233097),
(10, 21, 200586),
(10, 22, 188115),
(10, 23, 114446),
(11, 0, 105377),
(11, 1, 17785),
(11, 2, 9681),
(11, 3, 6788),
(11, 4, 5942),
(11, 5, 10013),
(11, 6, 34992),
(11, 7, 87125),
(11, 8, 138312),
(11, 9, 161477),
(11, 10, 272877),
(11, 11, 357228),
(11, 12, 537317),
(11, 13, 559869),
(11, 14, 509219),
(11, 15, 481853),
(11, 16, 413439),
(11, 17, 408872),
(11, 18, 392484),
(11, 19, 377904),
(11, 20, 293635),
(11, 21, 240918),
(11, 22, 187518),
(11, 23, 99621),
(12, 0, 182853),
(12, 1, 37429),
(12, 2, 19479),
(12, 3, 15993),
(12, 4, 10257),
(12, 5, 18768),
(12, 6, 78034),
(12, 7, 211580),
(12, 8, 351939),
(12, 9, 320406),
(12, 10, 424584),
(12, 11, 509325),
(12, 12, 801385),
(12, 13, 837445),
(12, 14, 697699),
(12, 15, 665714),
(12, 16, 637937),
(12, 17, 713429),
(12, 18, 761521),
(12, 19, 710704),
(12, 20, 513084),
(12, 21, 434847),
(12, 22, 401347),
(12, 23, 202157),
(13, 0, 603299),
(13, 1, 35226),
(13, 2, 23113),
(13, 3, 18572),
(13, 4, 18704),
(13, 5, 156330),
(13, 6, 948433),
(13, 7, 3231474),
(13, 8, 7339240),
(13, 9, 3524626),
(13, 10, 1443820),
(13, 11, 1239701),
(13, 12, 1733397),
(13, 13, 1926364),
(13, 14, 1407905),
(13, 15, 1805187),
(13, 16, 3333635),
(13, 17, 5237024),
(13, 18, 2233033),
(13, 19, 772537),
(13, 20, 405767),
(13, 21, 256074),
(13, 22, 176895),
(13, 23, 123610),
(14, 0, 511571),
(14, 1, 126620),
(14, 2, 92629),
(14, 3, 69966),
(14, 4, 90065),
(14, 5, 124273),
(14, 6, 313427),
(14, 7, 719176),
(14, 8, 1455108),
(14, 9, 776199),
(14, 10, 718610),
(14, 11, 833605),
(14, 12, 1119177),
(14, 13, 1138331),
(14, 14, 1087656),
(14, 15, 1166020),
(14, 16, 1399645),
(14, 17, 2056958),
(14, 18, 1360887),
(14, 19, 867949),
(14, 20, 712478),
(14, 21, 676239),
(14, 22, 606419),
(14, 23, 517744),
(15, 0, 824897),
(15, 1, 194690),
(15, 2, 123698),
(15, 3, 81979),
(15, 4, 48621),
(15, 5, 55426),
(15, 6, 129355),
(15, 7, 408762),
(15, 8, 1006203),
(15, 9, 991793),
(15, 10, 1292187),
(15, 11, 1818845),
(15, 12, 2907191),
(15, 13, 3296660),
(15, 14, 3002631),
(15, 15, 3066185),
(15, 16, 3185731),
(15, 17, 3440390),
(15, 18, 2645474),
(15, 19, 2045488),
(15, 20, 1746481),
(15, 21, 1321127),
(15, 22, 926528),
(15, 23, 606332),
(16, 0, 656045),
(16, 1, 90381),
(16, 2, 64505),
(16, 3, 48201),
(16, 4, 32697),
(16, 5, 45537),
(16, 6, 150239),
(16, 7, 570129),
(16, 8, 1314020),
(16, 9, 1515135),
(16, 10, 2045702),
(16, 11, 2641641),
(16, 12, 4017066),
(16, 13, 4337111),
(16, 14, 3251618),
(16, 15, 2873296),
(16, 16, 2559794),
(16, 17, 2250924),
(16, 18, 1354195),
(16, 19, 813007),
(16, 20, 549566),
(16, 21, 431494),
(16, 22, 362163),
(16, 23, 260937),
(17, 0, 490426),
(17, 1, 71869),
(17, 2, 43839),
(17, 3, 31615),
(17, 4, 33107),
(17, 5, 101680),
(17, 6, 359832),
(17, 7, 1190771),
(17, 8, 2764747),
(17, 9, 1736001),
(17, 10, 1151366),
(17, 11, 1191060),
(17, 12, 2448358),
(17, 13, 2406388),
(17, 14, 1403174),
(17, 15, 1206214),
(17, 16, 1387832),
(17, 17, 2128275),
(17, 18, 1392366),
(17, 19, 788069),
(17, 20, 577242),
(17, 21, 408003),
(17, 22, 363914),
(17, 23, 258177),
(18, 0, 349339),
(18, 1, 37897),
(18, 2, 27065),
(18, 3, 18605),
(18, 4, 12100),
(18, 5, 54415),
(18, 6, 309955),
(18, 7, 1173717),
(18, 8, 2640199),
(18, 9, 1455097),
(18, 10, 846676),
(18, 11, 811883),
(18, 12, 1189681),
(18, 13, 1199978),
(18, 14, 911382),
(18, 15, 987291),
(18, 16, 1554516),
(18, 17, 2354113),
(18, 18, 1152435),
(18, 19, 482733),
(18, 20, 275131),
(18, 21, 210510),
(18, 22, 190185),
(18, 23, 135821),
(19, 0, 110879),
(19, 1, 73732),
(19, 2, 40658),
(19, 3, 24953),
(19, 4, 12787),
(19, 5, 11053),
(19, 6, 19808),
(19, 7, 44182),
(19, 8, 98982),
(19, 9, 120439),
(19, 10, 213892),
(19, 11, 350706),
(19, 12, 589841),
(19, 13, 620728),
(19, 14, 546739),
(19, 15, 511556),
(19, 16, 499726),
(19, 17, 569722),
(19, 18, 614793),
(19, 19, 592633),
(19, 20, 517988),
(19, 21, 402434),
(19, 22, 301093),
(19, 23, 178850),
(20, 0, 122902),
(20, 1, 78933),
(20, 2, 51679),
(20, 3, 34695),
(20, 4, 20330),
(20, 5, 10786),
(20, 6, 16231),
(20, 7, 34704),
(20, 8, 72220),
(20, 9, 95459),
(20, 10, 164015),
(20, 11, 257033),
(20, 12, 437723),
(20, 13, 417547),
(20, 14, 318435),
(20, 15, 279624),
(20, 16, 276250),
(20, 17, 357170),
(20, 18, 463329),
(20, 19, 505184),
(20, 20, 432428),
(20, 21, 346093),
(20, 22, 296498),
(20, 23, 195497),
(21, 0, 222201),
(21, 1, 177206),
(21, 2, 136820),
(21, 3, 113364),
(21, 4, 74521),
(21, 5, 48381),
(21, 6, 61724),
(21, 7, 85131),
(21, 8, 144732),
(21, 9, 164096),
(21, 10, 234092),
(21, 11, 348080),
(21, 12, 630050),
(21, 13, 633734),
(21, 14, 510710),
(21, 15, 504278),
(21, 16, 526354),
(21, 17, 600080),
(21, 18, 589989),
(21, 19, 555653),
(21, 20, 498879),
(21, 21, 431173),
(21, 22, 376464),
(21, 23, 288326),
(22, 0, 224805),
(22, 1, 105769),
(22, 2, 73752),
(22, 3, 55656),
(22, 4, 41302),
(22, 5, 87521),
(22, 6, 271043),
(22, 7, 672329),
(22, 8, 1154332),
(22, 9, 888220),
(22, 10, 995174),
(22, 11, 1197319),
(22, 12, 1580161),
(22, 13, 1649484),
(22, 14, 1570136),
(22, 15, 1633271),
(22, 16, 1802835),
(22, 17, 1975579),
(22, 18, 1507741),
(22, 19, 1111569),
(22, 20, 907960),
(22, 21, 763156),
(22, 22, 611199),
(22, 23, 422536),
(23, 0, 27576),
(23, 1, 15621),
(23, 2, 11488),
(23, 3, 8867),
(23, 4, 6904),
(23, 5, 19605),
(23, 6, 72494),
(23, 7, 219730),
(23, 8, 404017),
(23, 9, 249320),
(23, 10, 205244),
(23, 11, 208314),
(23, 12, 298094),
(23, 13, 280191),
(23, 14, 207307),
(23, 15, 210871),
(23, 16, 256270),
(23, 17, 301214),
(23, 18, 181366),
(23, 19, 114957),
(23, 20, 88630),
(23, 21, 79686),
(23, 22, 71207),
(23, 23, 49824),
(24, 0, 59249),
(24, 1, 22586),
(24, 2, 14615),
(24, 3, 11394),
(24, 4, 14906),
(24, 5, 82578),
(24, 6, 316479),
(24, 7, 846966),
(24, 8, 1341233),
(24, 9, 782057),
(24, 10, 625642),
(24, 11, 631430),
(24, 12, 891254),
(24, 13, 811456),
(24, 14, 686249),
(24, 15, 842614),
(24, 16, 1233643),
(24, 17, 1444402),
(24, 18, 811228),
(24, 19, 450587),
(24, 20, 290815),
(24, 21, 236978),
(24, 22, 196410),
(24, 23, 132262),
(25, 0, 59625),
(25, 1, 31388),
(25, 2, 13382),
(25, 3, 8851),
(25, 4, 8751),
(25, 5, 31584),
(25, 6, 109723),
(25, 7, 237857),
(25, 8, 359721),
(25, 9, 274832),
(25, 10, 302094),
(25, 11, 368010),
(25, 12, 504336),
(25, 13, 515255),
(25, 14, 506673),
(25, 15, 520416),
(25, 16, 555559),
(25, 17, 641443),
(25, 18, 437014),
(25, 19, 250039),
(25, 20, 186501),
(25, 21, 159867),
(25, 22, 145378),
(25, 23, 93763),
(26, 0, 72922),
(26, 1, 53763),
(26, 2, 36948),
(26, 3, 29157),
(26, 4, 22675),
(26, 5, 37061),
(26, 6, 78115),
(26, 7, 162332),
(26, 8, 296384),
(26, 9, 391991),
(26, 10, 523762),
(26, 11, 672536),
(26, 12, 946829),
(26, 13, 875093),
(26, 14, 665415),
(26, 15, 522400),
(26, 16, 399329),
(26, 17, 357496),
(26, 18, 311984),
(26, 19, 271627),
(26, 20, 235260),
(26, 21, 189051),
(26, 22, 140781),
(26, 23, 101315),
(27, 0, 17684),
(27, 1, 11349),
(27, 2, 7273),
(27, 3, 5074),
(27, 4, 4068),
(27, 5, 6870),
(27, 6, 19928),
(27, 7, 49726),
(27, 8, 93681),
(27, 9, 99917),
(27, 10, 128516),
(27, 11, 151621),
(27, 12, 185004),
(27, 13, 173914),
(27, 14, 145150),
(27, 15, 124163),
(27, 16, 98754),
(27, 17, 108824),
(27, 18, 96170),
(27, 19, 76526),
(27, 20, 69296),
(27, 21, 59044),
(27, 22, 43439),
(27, 23, 28249),
(28, 0, 73041),
(28, 1, 43029),
(28, 2, 30683),
(28, 3, 28104),
(28, 4, 31056),
(28, 5, 62194),
(28, 6, 165426),
(28, 7, 401803),
(28, 8, 694301),
(28, 9, 530182),
(28, 10, 592505),
(28, 11, 732238),
(28, 12, 918629),
(28, 13, 929093),
(28, 14, 860675),
(28, 15, 892107),
(28, 16, 966470),
(28, 17, 1095495),
(28, 18, 866214),
(28, 19, 645985),
(28, 20, 384982),
(28, 21, 435157),
(28, 22, 398973),
(28, 23, 159134),
(29, 0, 39343),
(29, 1, 23532),
(29, 2, 14650),
(29, 3, 8868),
(29, 4, 10892),
(29, 5, 32096),
(29, 6, 62771),
(29, 7, 150432),
(29, 8, 264215),
(29, 9, 201806),
(29, 10, 246461),
(29, 11, 320376),
(29, 12, 421522),
(29, 13, 463207),
(29, 14, 430859),
(29, 15, 439580),
(29, 16, 436208),
(29, 17, 543850),
(29, 18, 473858),
(29, 19, 337729),
(29, 20, 247352),
(29, 21, 201082),
(29, 22, 166023),
(29, 23, 98048),
(30, 0, 159340),
(30, 1, 118872),
(30, 2, 85042),
(30, 3, 65257),
(30, 4, 45912),
(30, 5, 31747),
(30, 6, 36744),
(30, 7, 75501),
(30, 8, 135028),
(30, 9, 148928),
(30, 10, 213369),
(30, 11, 302163),
(30, 12, 505690),
(30, 13, 492574),
(30, 14, 385609),
(30, 15, 365306),
(30, 16, 375583),
(30, 17, 418635),
(30, 18, 430669),
(30, 19, 414261),
(30, 20, 372409),
(30, 21, 323337),
(30, 22, 282746),
(30, 23, 220970),
(31, 0, 92714),
(31, 1, 43798),
(31, 2, 19445),
(31, 3, 9802),
(31, 4, 9972),
(31, 5, 6441),
(31, 6, 15758),
(31, 7, 46217),
(31, 8, 89258),
(31, 9, 94551),
(31, 10, 133243),
(31, 11, 164255),
(31, 12, 271375),
(31, 13, 302643),
(31, 14, 276062),
(31, 15, 286438),
(31, 16, 258830),
(31, 17, 293565),
(31, 18, 349545),
(31, 19, 423821),
(31, 20, 472201),
(31, 21, 443774),
(31, 22, 330500),
(31, 23, 195476),
(32, 0, 162604),
(32, 1, 93802),
(32, 2, 60185),
(32, 3, 39592),
(32, 4, 27062),
(32, 5, 30967),
(32, 6, 70521),
(32, 7, 204096),
(32, 8, 448433),
(32, 9, 391211),
(32, 10, 482097),
(32, 11, 643498),
(32, 12, 916700),
(32, 13, 1006483),
(32, 14, 937963),
(32, 15, 932530),
(32, 16, 978929),
(32, 17, 1180600),
(32, 18, 973713),
(32, 19, 761292),
(32, 20, 646770),
(32, 21, 583217),
(32, 22, 486450),
(32, 23, 308359),
(33, 0, 7143),
(33, 1, 2828),
(33, 2, 1460),
(33, 3, 1253),
(33, 4, 1894),
(33, 5, 6183),
(33, 6, 23033),
(33, 7, 63590),
(33, 8, 118035),
(33, 9, 77251),
(33, 10, 55022),
(33, 11, 57523),
(33, 12, 83218),
(33, 13, 78199),
(33, 14, 61576),
(33, 15, 64898),
(33, 16, 97896),
(33, 17, 114135),
(33, 18, 65609),
(33, 19, 37514),
(33, 20, 24121),
(33, 21, 21952),
(33, 22, 24120),
(33, 23, 14069),
(34, 0, 13650),
(34, 1, 6482),
(34, 2, 3533),
(34, 3, 2525),
(34, 4, 2708),
(34, 5, 7418),
(34, 6, 19175),
(34, 7, 38954),
(34, 8, 67369),
(34, 9, 55157),
(34, 10, 55511),
(34, 11, 62027),
(34, 12, 95116),
(34, 13, 90841),
(34, 14, 72101),
(34, 15, 68574),
(34, 16, 81023),
(34, 17, 101400),
(34, 18, 76902),
(34, 19, 56651),
(34, 20, 43396),
(34, 21, 39316),
(34, 22, 46162),
(34, 23, 28306),
(36, 0, 10733),
(36, 1, 7968),
(36, 2, 6194),
(36, 3, 5121),
(36, 4, 2017),
(36, 5, 1743),
(36, 6, 4805),
(36, 7, 15113),
(36, 8, 45295),
(36, 9, 34970),
(36, 10, 36107),
(36, 11, 34648),
(36, 12, 58630),
(36, 13, 60213),
(36, 14, 39300),
(36, 15, 37897),
(36, 16, 38627),
(36, 17, 54085),
(36, 18, 33580),
(36, 19, 23666),
(36, 20, 15954),
(36, 21, 15099),
(36, 22, 13437),
(36, 23, 13280),
(37, 0, 3820),
(37, 1, 1800),
(37, 2, 1095),
(37, 3, 713),
(37, 4, 515),
(37, 5, 783),
(37, 6, 1073),
(37, 7, 3883),
(37, 8, 11040),
(37, 9, 12622),
(37, 10, 14616),
(37, 11, 18181),
(37, 12, 32070),
(37, 13, 33482),
(37, 14, 26088),
(37, 15, 24802),
(37, 16, 22645),
(37, 17, 23373),
(37, 18, 28408),
(37, 19, 34662),
(37, 20, 36515),
(37, 21, 30952),
(37, 22, 20345),
(37, 23, 10437),
(38, 0, 127749),
(38, 1, 68789),
(38, 2, 48248),
(38, 3, 38622),
(38, 4, 33008),
(38, 5, 40135),
(38, 6, 67172),
(38, 7, 153071),
(38, 8, 299213),
(38, 9, 278528),
(38, 10, 326821),
(38, 11, 402803),
(38, 12, 497632),
(38, 13, 543121),
(38, 14, 518783),
(38, 15, 533353),
(38, 16, 556076),
(38, 17, 598945),
(38, 18, 507747),
(38, 19, 399223),
(38, 20, 332760),
(38, 21, 297901),
(38, 22, 268164),
(38, 23, 217282),
(39, 0, 8650),
(39, 1, 4468),
(39, 2, 3318),
(39, 3, 2475),
(39, 4, 2575),
(39, 5, 4931),
(39, 6, 16984),
(39, 7, 43661),
(39, 8, 91355),
(39, 9, 77693),
(39, 10, 64896),
(39, 11, 71106),
(39, 12, 150154),
(39, 13, 136039),
(39, 14, 69780),
(39, 15, 55607),
(39, 16, 61285),
(39, 17, 78100),
(39, 18, 62141),
(39, 19, 44474),
(39, 20, 30406),
(39, 21, 28574),
(39, 22, 24966),
(39, 23, 15583),
(40, 0, 6747),
(40, 1, 3766),
(40, 2, 2060),
(40, 3, 1265),
(40, 4, 1005),
(40, 5, 2332),
(40, 6, 4956),
(40, 7, 17176),
(40, 8, 51682),
(40, 9, 46742),
(40, 10, 50484),
(40, 11, 49031),
(40, 12, 83314),
(40, 13, 81148),
(40, 14, 51868),
(40, 15, 53680),
(40, 16, 48949),
(40, 17, 51911),
(40, 18, 40899),
(40, 19, 37212),
(40, 20, 25312),
(40, 21, 21222),
(40, 22, 27369),
(40, 23, 12937),
(42, 0, 779),
(42, 1, 509),
(42, 2, 247),
(42, 3, 203),
(42, 4, 183),
(42, 5, 329),
(42, 6, 625),
(42, 7, 1753),
(42, 8, 5667),
(42, 9, 7583),
(42, 10, 7225),
(42, 11, 8827),
(42, 12, 10956),
(42, 13, 11153),
(42, 14, 9118),
(42, 15, 9308),
(42, 16, 9283),
(42, 17, 11455),
(42, 18, 9224),
(42, 19, 5628),
(42, 20, 3825),
(42, 21, 2923),
(42, 22, 1832),
(42, 23, 1394),
(43, 0, 423),
(43, 1, 221),
(43, 2, 83),
(43, 3, 66),
(43, 4, 119),
(43, 5, 383),
(43, 6, 494),
(43, 7, 2124),
(43, 8, 6517),
(43, 9, 8477),
(43, 10, 7481),
(43, 11, 7838),
(43, 12, 9732),
(43, 13, 9599),
(43, 14, 8514),
(43, 15, 9588),
(43, 16, 10580),
(43, 17, 11692),
(43, 18, 8175),
(43, 19, 4981),
(43, 20, 3290),
(43, 21, 2755),
(43, 22, 1591),
(43, 23, 1023),
(44, 0, 377),
(44, 1, 200),
(44, 2, 77),
(44, 3, 43),
(44, 4, 93),
(44, 5, 324),
(44, 6, 347),
(44, 7, 1338),
(44, 8, 3266),
(44, 9, 3970),
(44, 10, 3528),
(44, 11, 3760),
(44, 12, 4255),
(44, 13, 4389),
(44, 14, 3854),
(44, 15, 4105),
(44, 16, 4231),
(44, 17, 5337),
(44, 18, 4023),
(44, 19, 2499),
(44, 20, 1649),
(44, 21, 1405),
(44, 22, 937),
(44, 23, 628);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
