-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: periodictabledb
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `achievements`
--

DROP TABLE IF EXISTS `achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achievements` (
  `achievement_id` int NOT NULL AUTO_INCREMENT,
  `achievement_name` varchar(255) NOT NULL,
  `short_description` text,
  `internal_name` varchar(50) DEFAULT NULL,
  `level_id` int DEFAULT NULL,
  `display_order` int DEFAULT NULL,
  PRIMARY KEY (`achievement_id`),
  UNIQUE KEY `internal_name` (`internal_name`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `achievements_ibfk_1` FOREIGN KEY (`level_id`) REFERENCES `game_levels` (`level_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achievements`
--

LOCK TABLES `achievements` WRITE;
/*!40000 ALTER TABLE `achievements` DISABLE KEYS */;
INSERT INTO `achievements` VALUES (1,'What\'s a keyboard?','Only Drag Tiles, no naming','keyboard',1,5),(2,'The Sprinter','Complete the Periodic Table in under 5 minutes','sprinter',1,2),(3,'Author\'s Bane','Beat the game creator\'s time','bane',1,3),(4,'Elemental Symphony','Name all the elements in their rightful order','symphony',1,4),(5,'Master','Complete the level','extreme',2,6),(6,'Swift Master','Complete the level under 10 Minutes','swift',2,7),(7,'Dev\'s Downfall','Beat the game creator\'s time','downfall',2,8),(8,'The Elementalist','Complete the Periodic Table','elementalist',1,1),(9,'Sizzling Success','Complete the s-block','sblocker',3,10),(10,'Swift Sizzler','Beat the author','sblockerauth',3,11),(11,'Perfect Placer','Complete the p-block','pblocker',4,12),(12,'Pinnacle Pace','Beat the author','pblockerauth',4,13),(13,'Dazzling Arrangement','Complete the d-block','dblocker',5,14),(14,'Dynamo Dash','Beat the author','dblockerauth',5,15),(15,'Flawless Formation','Complete the f-block','fblocker',6,16),(16,'Fleet-footed Fusionist','Beat the author','fblockerauth',6,17),(17,'Alphabetic Alchemist','Arrange elements Alphabetically','alchemist',7,18),(18,'Alphabet Ace','Complete under 10 minutes','ace',7,19),(19,'Swift Sorter','Complete under 5 minutes','sorter',7,20),(20,'Speed Sovereign','Beat the author','arrangeauth',7,21),(21,'The Student','Complete the guided mode','guided',8,22),(22,'The Teacher','Beat the author\'s time','guidedauth',8,23),(23,'Showoff','Don\'t Refresh the Tiles','perfect',2,9),(24,'Mr. Perfect','Beat the Extreme Mode','deathmode',9,24),(25,'Symbolic Master','Successfully complete the level','symbolcomplete',10,25),(26,'The Prodigy','Complete the level without any mistakes','symbolprodigy',10,26),(27,'The Chemist','Complete the level within 6 minutes','symbolchemist',10,27),(28,'Lightning McQueen','Beat the author\'s time for 4 minutes','symbolauth',10,28),(29,'Master Namer','Name the Entire Periodic Table','namecomplete',11,29),(30,'No Help Required','Do not use hints','namehint',11,30),(31,'First Attempt','Do not make any mistakes','namemistake',11,31),(32,'Better Than Me','Beat the Author\'s Time','nameauth',11,32),(33,'Master Placer','Complete the Entire Periodic Table','dragcomplete',12,33),(34,'Born Knowledgeable','No Wrong Placements','dragmistakes',12,34),(35,'Born Perfect','No Wrong Placements and no Discarding Tiles','dragperfect',12,35),(36,'The Flash','Beat the Author\'s Time','dragauth',12,36);
/*!40000 ALTER TABLE `achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classiccounter`
--

DROP TABLE IF EXISTS `classiccounter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classiccounter` (
  `id` varchar(10) NOT NULL,
  `value` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classiccounter`
--

LOCK TABLES `classiccounter` WRITE;
/*!40000 ALTER TABLE `classiccounter` DISABLE KEYS */;
INSERT INTO `classiccounter` VALUES ('counter','976'),('version','2');
/*!40000 ALTER TABLE `classiccounter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementdatatable`
--

DROP TABLE IF EXISTS `elementdatatable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementdatatable` (
  `an` int DEFAULT NULL,
  `elementName` varchar(255) DEFAULT NULL,
  `symbol` varchar(255) DEFAULT NULL,
  `elementRow` int DEFAULT NULL,
  `elementColumn` varchar(255) DEFAULT NULL,
  `hDisplace` varchar(255) DEFAULT NULL,
  `vDisplace` varchar(255) DEFAULT NULL,
  `latinName` varchar(255) DEFAULT NULL,
  `hasLatin` varchar(255) DEFAULT NULL,
  `realRow` int DEFAULT NULL,
  `realColumn` int DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `radioactivity` varchar(255) DEFAULT NULL,
  `am` varchar(255) DEFAULT NULL,
  `stableIsotopes` varchar(255) DEFAULT NULL,
  `discovery` varchar(255) DEFAULT NULL,
  `electronConfiguration` varchar(255) DEFAULT NULL,
  `meltingPoint` varchar(255) DEFAULT NULL,
  `boilingPoint` varchar(255) DEFAULT NULL,
  `elementBlock` varchar(255) DEFAULT NULL,
  `period` varchar(255) DEFAULT NULL,
  `elementSource` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  UNIQUE KEY `idx_elementdatatable_an` (`an`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementdatatable`
--

LOCK TABLES `elementdatatable` WRITE;
/*!40000 ALTER TABLE `elementdatatable` DISABLE KEYS */;
INSERT INTO `elementdatatable` VALUES (1,'Hydrogen','H',1,'1','FALSE','FALSE','Hydrogenium','1',1,1,'Nonmetal','Gas','Not-Radioactive','1.008','1 2','1766',' 1s1','-259.2','-252.9','s','1',' Water + Hydrocarbons','#2a4165'),(2,'Helium','He',1,'18','TRUE','FALSE','Helium','0',1,18,'Noble Gas','Gas','Not-Radioactive','4.003','3 4','1868',' 1s2','-272.2','-268.9','s','1',' Natural Gas Fields','#623842'),(3,'Lithium','Li',2,'1','FALSE','FALSE','Lithium','0',2,1,'Alkali Metal','Solid','Not-Radioactive','6.941','6 7','1817',' [He] 2s1','180.5','1342','s','2',' Pegmatites + Brines','#244d57'),(4,'Beryllium','Be',2,'2','FALSE','FALSE','Beryllium','0',2,2,'Alkaline Earth Metal','Solid','Not-Radioactive','9.012','9','1798',' [He] 2s2','1287','2469','s','2',' Beryl + Bertrandite','#622e39'),(5,'Boron','B',2,'13','TRUE','FALSE','Borum','1',2,13,'Metalloid','Solid','Not-Radioactive','10.81','10 11','1808',' [He] 2s2 2p1','2075','3926','p','2',' Borax + Kernite + Colemanite','#523e1b'),(6,'Carbon','C',2,'14','TRUE','FALSE','Carboneum','1',2,14,'Nonmetal','Solid','Not-Radioactive','12.011','12 13','Ancient',' [He] 2s2 2p2','Sublimes','3915','p','2',' Organic Compounds + Minerals','#2a4165'),(7,'Nitrogen','N',2,'15','TRUE','FALSE','Nitrogenium','1',2,15,'Nonmetal','Gas','Not-Radioactive','14.007','14 15','1772',' [He] 2s2 2p3','-210','-195.8','p','2',' Atmosphere + Nitrates','#2a4165'),(8,'Oxygen','O',2,'16','TRUE','FALSE','Oxygenium','1',2,16,'Nonmetal','Gas','Not-Radioactive','15.999','16 17 18','1774',' [He] 2s2 2p4','-218.8','-183','p','2',' Atmosphere + Water','#2a4165'),(9,'Fluorine','F',2,'17','TRUE','FALSE','Fluorum','1',2,17,'Halogen','Gas','Not-Radioactive','18.998','19','1670',' [He] 2s2 2p5','-219.6','-188.1','p','2',' Fluorite + Cryolite','#2a4165'),(10,'Neon','Ne',2,'18','TRUE','FALSE','Neon','0',2,18,'Noble Gas','Gas','Not-Radioactive','20.179','20 21 22','1898',' [He] 2s2 2p6','-248.6','-246.1','p','2',' Atmosphere + Neon Gas','#623842'),(11,'Sodium','Na',3,'1','FALSE','FALSE','Natrium','1',3,1,'Alkali Metal','Solid','Not-Radioactive','22.99','23','1807',' [Ne] 3s1','97.8','883','s','3',' Halite (Rock Salt) + Brines','#244d57'),(12,'Magnesium','Mg',3,'2','FALSE','FALSE','Magnesium','0',3,2,'Alkaline Earth Metal','Solid','Not-Radioactive','24.305','24 25 26','1808',' [Ne] 3s2','650','1090','s','3',' Dolomite + Magnesite + Sea Water','#622e39'),(13,'Aluminum','Al',3,'13','TRUE','FALSE','Aluminium','1',3,13,'Post-Transition Metal','Solid','Not-Radioactive','26.982','27','Ancient',' [Ne] 3s2 3p1','660.3','2467','p','3',' Bauxite','#2f4d47'),(14,'Silicon','Si',3,'14','TRUE','FALSE','Silicium','1',3,14,'Metalloid','Solid','Not-Radioactive','28.086','28 29 30','1823',' [Ne] 3s2 3p2','1414','3265','p','3',' Silica Minerals + Quartz','#523e1b'),(15,'Phosphorus','P',3,'15','TRUE','FALSE','Phosphorus','0',3,15,'Nonmetal','Solid','Not-Radioactive','30.974','31','1669',' [Ne] 3s2 3p3','44.1','280.5','p','3',' Apatite + Phosphate Rock','#2a4165'),(16,'Sulfur','S',3,'16','TRUE','FALSE','Sulphur','0',3,16,'Nonmetal','Solid','Not-Radioactive','32.06','32 33 34 36','Ancient',' [Ne] 3s2 3p4','112.8','444.7','p','3',' Sulfide Ores + Elemental Sulfur','#2a4165'),(17,'Chlorine','Cl',3,'17','TRUE','FALSE','Chlorum','1',3,17,'Halogen','Gas','Not-Radioactive','35.453','35 37','1774',' [Ne] 3s2 3p5','-101.5','-34.04','p','3',' Halite (Rock Salt) + Brines','#2a4165'),(18,'Argon','Ar',3,'18','TRUE','FALSE','Argon','0',3,18,'Noble Gas','Gas','Not-Radioactive','39.098','36 38 40','1894',' [Ne] 3s2 3p6','-189.4','-185.8','p','3',' Atmosphere + Air Separation','#623842'),(19,'Potassium','K',4,'1','FALSE','FALSE','Kalium','1',4,1,'Alkali Metal','Solid','Not-Radioactive','39.948','39 41','1807',' [Ar] 4s1','63.4','774','s','4',' Potash Ores + Minerals','#244d57'),(20,'Calcium','Ca',4,'2','FALSE','FALSE','Calcium','0',4,2,'Alkaline Earth Metal','Solid','Not-Radioactive','40.08','40 42 43 44 46','Ancient',' [Ar] 4s2','839','1484','s','4',' Limestone + Gypsum','#622e39'),(21,'Scandium','Sc',4,'3','FALSE','FALSE','Scandium','0',10,3,'Transition Metal','Solid','Not-Radioactive','44.956','45','1879',' [Ar] 3d1 4s2','1541','2836','d','4',' Minerals + Residues','#433c65'),(22,'Titanium','Ti',4,'4','TRUE','FALSE','Titanium','0',10,4,'Transition Metal','Solid','Not-Radioactive','47.9','46 47 48 49 50','1791',' [Ar] 3d2 4s2','1668','3287','d','4',' Ilmenite + Rutile','#433c65'),(23,'Vanadium','V',4,'5','TRUE','FALSE','Vanadium','0',10,5,'Transition Metal','Solid','Not-Radioactive','50.942','51','1801',' [Ar] 3d3 4s2','1910','3407','d','4',' Vanadinite + Magnetite','#433c65'),(24,'Chromium','Cr',4,'6','TRUE','FALSE','Chromium','0',10,6,'Transition Metal','Solid','Not-Radioactive','51.996','50 52 53 54','1797',' [Ar] 3d5 4s1','1857','2671','d','4',' Chromite','#433c65'),(25,'Manganese','Mn',4,'7','TRUE','FALSE','Manganum','1',10,7,'Transition Metal','Solid','Not-Radioactive','54.938','55','1774',' [Ar] 3d5 4s2','1244','1962','d','4',' Pyrolusite + Rhodochrosite','#433c65'),(26,'Iron','Fe',4,'8','TRUE','FALSE','Ferrum','1',10,8,'Transition Metal','Solid','Not-Radioactive','55.847','54 56 57 58','Ancient',' [Ar] 3d6 4s2','1538','2861','d','4',' Hematite + Magnetite','#433c65'),(27,'Cobalt','Co',4,'9','TRUE','FALSE','Cobaltum','1',10,9,'Transition Metal','Solid','Not-Radioactive','58.7','59','Ancient',' [Ar] 3d7 4s2','1495','2927','d','4',' Cobaltite + Smaltite','#433c65'),(28,'Nickel','Ni',4,'10','TRUE','FALSE','Niccolum','1',10,10,'Transition Metal','Solid','Not-Radioactive','58.933','58 60 61 62 64','1751',' [Ar] 3d8 4s2','1455','2913','d','4',' Pentlandite + Nickel Laterites','#433c65'),(29,'Copper','Cu',4,'11','TRUE','FALSE','Cuprum','1',10,11,'Transition Metal','Solid','Not-Radioactive','63.546','63 65','Ancient',' [Ar] 3d10 4s1','1084.6','2562','d','4',' Chalcopyrite + Bornite','#433c65'),(30,'Zinc','Zn',4,'12','TRUE','FALSE','Zincum','1',10,12,'Transition Metal','Solid','Not-Radioactive','65.38','64 66 67 68 70','Ancient',' [Ar] 3d10 4s2','419.5','907','d','4',' Sphalerite + Smithsonite','#433c65'),(31,'Gallium','Ga',4,'13','TRUE','FALSE','Gallium','0',4,13,'Post-Transition Metal','Solid','Not-Radioactive','69.72','69 71','1875',' [Ar] 3d10 4s2 4p1','29.8','2204','p','4',' Bauxite + Zinc Ores','#2f4d47'),(32,'Germanium','Ge',4,'14','TRUE','FALSE','Germanium','0',4,14,'Metalloid','Solid','Not-Radioactive','72.59','70 72 73 74','1886',' [Ar] 3d10 4s2 4p2','938.3','2830','p','4',' Sphalerite + Germanite','#523e1b'),(33,'Arsenic','As',4,'15','TRUE','FALSE','Arsenicum','1',4,15,'Metalloid','Solid','Not-Radioactive','74.922','75','Ancient',' [Ar] 3d10 4s2 4p3','817','614','p','4',' Minerals + Ores','#523e1b'),(34,'Selenium','Se',4,'16','TRUE','FALSE','Selenium','0',4,16,'Nonmetal','Solid','Not-Radioactive','78.96','74 76 77 78 80','1817',' [Ar] 3d10 4s2 4p4','221','685','p','4',' Anode Sludges + Sulfide Ores','#2a4165'),(35,'Bromine','Br',4,'17','TRUE','FALSE','Bromum','1',4,17,'Halogen','Liquid','Not-Radioactive','79.904','79 81','1826',' [Ar] 3d10 4s2 4p5','-7.2','58.8','p','4',' Brines + Sea Water','#2a4165'),(36,'Krypton','Kr',4,'18','TRUE','FALSE','Krypton','0',4,18,'Noble Gas','Gas','Not-Radioactive','83.8','78 80 82 83 84 86','1898',' [Ar] 3d10 4s2 4p6','-157.4','-153.4','p','4',' Air Separation + Gas Wells','#623842'),(37,'Rubidium','Rb',5,'1','FALSE','FALSE','Rubidium','0',5,1,'Alkali Metal','Solid','Not-Radioactive','85.468','85','1861',' [Kr] 5s1','38.9','688','s','5',' Lepidolite + Pollucite','#244d57'),(38,'Strontium','Sr',5,'2','FALSE','FALSE','Strontium','0',5,2,'Alkaline Earth Metal','Solid','Not-Radioactive','87.62','84 86 87 88','1790',' [Kr] 5s2','769','1382','s','5',' Celestite + Strontianite','#622e39'),(39,'Yttrium','Y',5,'3','FALSE','FALSE','Yttrium','0',11,3,'Transition Metal','Solid','Not-Radioactive','88.906','89','1794',' [Kr] 4d1 5s2','1522','3338','d','5',' Monazite + Xenotime','#433c65'),(40,'Zirconium','Zr',5,'4','TRUE','FALSE','Zirconium','0',11,4,'Transition Metal','Solid','Not-Radioactive','91.22','90 91 92 94','1789',' [Kr] 4d2 5s2','1852','4682','d','5',' Zircon + Baddeleyite','#433c65'),(41,'Niobium','Nb',5,'5','TRUE','FALSE','Niobium','0',11,5,'Transition Metal','Solid','Not-Radioactive','92.906','93','1801',' [Kr] 4d4 5s1','2477','4744','d','5',' Pyrochlore + Columbite','#433c65'),(42,'Molybdenum','Mo',5,'6','TRUE','FALSE','Molybdaenum','1',11,6,'Transition Metal','Solid','Not-Radioactive','95.94','92 94 95 96 97 98','1778',' [Kr] 4d5 5s1','2623','4912','d','5',' Molybdenite + Wulfenite','#433c65'),(43,'Technetium','Tc',5,'7','TRUE','FALSE','Technetium','0',11,7,'Transition Metal','Solid','Radioactive','98','0','1937',' [Kr] 4d5 5s2','2157','4265','d','5',' Artificially Produced','#433c65'),(44,'Ruthenium','Ru',5,'8','TRUE','FALSE','Ruthenium','0',11,8,'Transition Metal','Solid','Not-Radioactive','101.07','96 98 99 100 101 102 104','1844',' [Kr] 4d7 5s1','2334','3900','d','5',' Platinum Ores','#433c65'),(45,'Rhodium','Rh',5,'9','TRUE','FALSE','Rhodium','0',11,9,'Transition Metal','Solid','Not-Radioactive','102.906','103','1803',' [Kr] 4d8 5s1','1964','3727','d','5',' Platinum Ores','#433c65'),(46,'Palladium','Pd',5,'10','TRUE','FALSE','Palladium','0',11,10,'Transition Metal','Solid','Not-Radioactive','106.4','102 104 105 106 108 110','1803',' [Kr] 4d10','1552.2','3825','d','5',' Platinum Ores','#433c65'),(47,'Silver','Ag',5,'11','TRUE','FALSE','Argentum','1',11,11,'Transition Metal','Solid','Not-Radioactive','107.868','107 109','Ancient',' [Kr] 4d10 5s1','961.8','1640','d','5',' Silver Ores + Natural Deposits','#433c65'),(48,'Cadmium','Cd',5,'12','TRUE','FALSE','Cadmium','0',11,12,'Transition Metal','Solid','Not-Radioactive','112.41','106 108 110 111 112 114','1817',' [Kr] 4d10 5s2','320.9','767','d','5',' Sphalerite + Greenockite','#433c65'),(49,'Indium','In',5,'13','TRUE','FALSE','Indium','0',5,13,'Post-Transition Metal','Solid','Not-Radioactive','114.82','113','1863',' [Kr] 4d10 5s2 5p1','156.6','2072','p','5',' Sphalerite + Indium-Bearing Ores','#2f4d47'),(50,'Tin','Sn',5,'14','TRUE','FALSE','Stannum','1',5,14,'Post-Transition Metal','Solid','Not-Radioactive','118.69','112 114 115 116 117 118 119 120 122 124','Ancient',' [Kr] 4d10 5s2 5p2','231.9','2602','p','5',' Cassiterite + Stannite','#2f4d47'),(51,'Antimony','Sb',5,'15','TRUE','FALSE','Stibium','1',5,15,'Metalloid','Solid','Not-Radioactive','121.75','121 123','Ancient',' [Kr] 4d10 5s2 5p3','630.6','1587','p','5',' Stibnite + Antimony Ores','#523e1b'),(52,'Tellurium','Te',5,'16','TRUE','FALSE','Tellurium','0',5,16,'Metalloid','Solid','Not-Radioactive','126.905','120 122 124 125 126','1782',' [Kr] 4d10 5s2 5p4','449.5','988','p','5',' Sylvanite + Calaverite','#523e1b'),(53,'Iodine','I',5,'17','TRUE','FALSE','Iodium','1',5,17,'Halogen','Solid','Not-Radioactive','127.6','127','1811',' [Kr] 4d10 5s2 5p5','113.7','184.3','p','5',' Caliche Ore + Sea Water','#2a4165'),(54,'Xenon','Xe',5,'18','TRUE','FALSE','Xenon','0',5,18,'Noble Gas','Gas','Not-Radioactive','131.3','124 126 128 129 130 131 132 134 136','1898',' [Kr] 4d10 5s2 5p6','-111.9','-108.1','p','5',' Air Separation + Gas Wells','#623842'),(55,'Cesium','Cs',6,'1','FALSE','FALSE','Caesium','1',6,1,'Alkali Metal','Solid','Not-Radioactive','132.905','133','1860',' [Xe] 6s1','28.4','671','s','6',' Pollucite + Leucite','#244d57'),(56,'Barium','Ba',6,'2','FALSE','FALSE','Barium','0',6,2,'Alkaline Earth Metal','Solid','Not-Radioactive','137.33','130 132 134 135 136 137 138','1772',' [Xe] 6s2','725','1640','s','6',' Baryte + Witherite','#622e39'),(57,'Lanthanum','La',6,'3','FALSE','FALSE','Lanthanum','0',12,3,'Lanthanide','Solid','Not-Radioactive','138.906','139','1839',' [Xe] 5d1 6s2','920','3737','f','6',' Monazite + Bastnäsite','#004a77'),(58,'Cerium','Ce',8,'4','TRUE','TRUE','Cerium','0',8,19,'Lanthanide','Solid','Not-Radioactive','140.12','1369 138 140 142','1803',' [Xe] 4f1 5d1 6s2','795','3503','f','6',' Monazite + Bastnäsite','#004a77'),(59,'Praseodymium','Pr',8,'5','TRUE','TRUE','Praseodymium','0',8,20,'Lanthanide','Solid','Not-Radioactive','140.908','141','1885',' [Xe] 4f3 6s2','935','3290','f','6',' Monazite + Bastnäsite','#004a77'),(60,'Neodymium','Nd',8,'6','TRUE','TRUE','Neodymium','0',8,21,'Lanthanide','Solid','Not-Radioactive','144.24','142 143 145 146 148','1885',' [Xe] 4f4 6s2','1024','3347','f','6',' Monazite + Bastnäsite','#004a77'),(61,'Promethium','Pm',8,'7','TRUE','TRUE','Promethium','0',8,22,'Lanthanide','Solid','Radioactive','145','0','1945',' [Xe] 4f5 6s2','1042','3000','f','6',' Artificially Produced','#004a77'),(62,'Samarium','Sm',8,'8','TRUE','TRUE','Samarium','0',8,23,'Lanthanide','Solid','Not-Radioactive','150.4','144 149 150 152 154','1879',' [Xe] 4f6 6s2','1072','2067','f','6',' Monazite + Bastnäsite','#004a77'),(63,'Europium','Eu',8,'9','TRUE','TRUE','Europium','0',8,24,'Lanthanide','Solid','Not-Radioactive','151.96','151 153','1901',' [Xe] 4f7 6s2','822','1527','f','6',' Monazite + Bastnäsite','#004a77'),(64,'Gadolinium','Gd',8,'10','TRUE','TRUE','Gadolinium','0',8,25,'Lanthanide','Solid','Not-Radioactive','157.25','154 155 156 157 158 160','1880',' [Xe] 4f7 5d1 6s2','1313','3273','f','6',' Monazite + Bastnäsite','#004a77'),(65,'Terbium','Tb',8,'11','TRUE','TRUE','Terbium','0',8,26,'Lanthanide','Solid','Not-Radioactive','158.925','159','1843',' [Xe] 4f9 6s2','1356','3123','f','6',' Monazite + Bastnäsite','#004a77'),(66,'Dysprosium','Dy',8,'12','TRUE','TRUE','Dysprosium','0',8,27,'Lanthanide','Solid','Not-Radioactive','162.5','156 158 160 161 162 163 164','1886',' [Xe] 4f10 6s2','1412','2567','f','6',' Monazite + Bastnäsite','#004a77'),(67,'Holmium','Ho',8,'13','TRUE','TRUE','Holmium','0',8,28,'Lanthanide','Solid','Not-Radioactive','164.93','165','1878',' [Xe] 4f11 6s2','1470','2600','f','6',' Monazite + Bastnäsite','#004a77'),(68,'Erbium','Er',8,'14','TRUE','TRUE','Erbium','0',8,29,'Lanthanide','Solid','Not-Radioactive','167.26','162 164 166 167 168 170','1842',' [Xe] 4f12 6s2','1522','2868','f','6',' Monazite + Bastnäsite','#004a77'),(69,'Thulium','Tm',8,'15','TRUE','TRUE','Thulium','0',8,30,'Lanthanide','Solid','Not-Radioactive','168.934','169','1879',' [Xe] 4f13 6s2','1545','1950','f','6',' Monazite + Bastnäsite','#004a77'),(70,'Ytterbium','Yb',8,'16','TRUE','TRUE','Ytterbium','0',8,31,'Lanthanide','Solid','Not-Radioactive','173.04','168 170 171 172 173 174 176','1878',' [Xe] 4f14 6s2','824','1196','f','6',' Monazite + Bastnäsite','#004a77'),(71,'Lutetium','Lu',8,'17','TRUE','TRUE','Lutetium','0',8,32,'Lanthanide','Solid','Not-Radioactive','174.967','175','1907',' [Xe] 4f14 5d1 6s2','1663','3668','f','6',' Monazite + Bastnäsite','#004a77'),(72,'Hafnium','Hf',6,'4','TRUE','FALSE','Hafnium','0',12,4,'Transition Metal','Solid','Not-Radioactive','178.49','176 177 178 179 180','1923',' [Xe] 4f14 5d2 6s2','2233','5400','d','6',' Zircon + Baddeleyite','#433c65'),(73,'Tantalum','Ta',6,'5','TRUE','FALSE','Tantalum','0',12,5,'Transition Metal','Solid','Not-Radioactive','180.948','181','1802',' [Xe] 4f14 5d3 6s2','3017','5425','d','6',' Tantalite + Columbite','#433c65'),(74,'Tungsten','W',6,'6','TRUE','FALSE','Wolframium','1',12,6,'Transition Metal','Solid','Not-Radioactive','183.85','180 182 183 184 186','1783',' [Xe] 4f14 5d4 6s2','3422','5555','d','6',' Wolframite + Scheelite','#433c65'),(75,'Rhenium','Re',6,'7','TRUE','FALSE','Rhenium','0',12,7,'Transition Metal','Solid','Not-Radioactive','186.207','185','1925',' [Xe] 4f14 5d5 6s2','3180','5597','d','6',' Molybdenite + Platinum Ores','#433c65'),(76,'Osmium','Os',6,'8','TRUE','FALSE','Osmium','0',12,8,'Transition Metal','Solid','Not-Radioactive','190.2','184 187 188 189 190 192','1803',' [Xe] 4f14 5d6 6s2','3033','5012','d','6',' Platinum Ores + Osmiridium','#433c65'),(77,'Iridium','Ir',6,'9','TRUE','FALSE','Iridium','0',12,9,'Transition Metal','Solid','Not-Radioactive','192.22','191 193','1803',' [Xe] 4f14 5d7 6s2','2452','4788','d','6',' Platinum Ores + Iridosmine','#433c65'),(78,'Platinum','Pt',6,'10','TRUE','FALSE','Platinum','0',12,10,'Transition Metal','Solid','Not-Radioactive','195.09','192 194 195 196 198','Ancient',' [Xe] 4f14 5d9 6s1','1772','3827','d','6',' Platinum Ores','#433c65'),(79,'Gold','Au',6,'11','TRUE','FALSE','Aurum','1',12,11,'Transition Metal','Solid','Not-Radioactive','196.967','197','Ancient',' [Xe] 4f14 5d10 6s1','1064','2970','d','6',' Gold Ores + Natural Deposits','#433c65'),(80,'Mercury','Hg',6,'12','TRUE','FALSE','Hydrargyrum','1',12,12,'Transition Metal','Liquid','Not-Radioactive','200.59','196 198 199 200 201 202 204','Ancient',' [Xe] 4f14 5d10 6s2','-38.83','-38.83','d','6',' Cinnabar + Mercury Ores','#433c65'),(81,'Thallium','Tl',6,'13','TRUE','FALSE','Thallium','0',6,13,'Post-Transition Metal','Solid','Not-Radioactive','204.37','203 205','1861',' [Xe] 4f14 5d10 6s2 6p1','303.5','1457','p','6',' Lorandite + Crookesite','#2f4d47'),(82,'Lead','Pb',6,'14','TRUE','FALSE','Plumbum','1',6,14,'Post-Transition Metal','Solid','Not-Radioactive','207.2','204 206 207 208','Ancient',' [Xe] 4f14 5d10 6s2 6p2','327.5','1740','p','6',' Galena + Cerussite','#2f4d47'),(83,'Bismuth','Bi',6,'15','TRUE','FALSE','Bismuthum','1',6,15,'Post-Transition Metal','Solid','Not-Radioactive','208.98','0','Ancient',' [Xe] 4f14 5d10 6s2 6p3','271.3','1560','p','6',' Bismuthinite + Bismite','#2f4d47'),(84,'Polonium','Po',6,'16','TRUE','FALSE','Polonium','0',6,16,'Post-Transition Metal','Solid','Radioactive','209','0','1898',' [Xe] 4f14 5d10 6s2 6p4','254','962','p','6',' Uraninite + Autunite','#2f4d47'),(85,'Astatine','At',6,'17','TRUE','FALSE','Astatine','0',6,17,'Halogen','Solid','Radioactive','210','0','1940',' [Xe] 4f14 5d10 6s2 6p5','302','337','p','6',' Artificially Produced','#2f4d47'),(86,'Radon','Rn',6,'18','TRUE','FALSE','Radon','0',6,18,'Noble Gas','Gas','Radioactive','222','0','1900',' [Xe] 4f14 5d10 6s2 6p6','-71','-61.8','p','6',' Decay of Uranium and Thorium','#623842'),(87,'Francium','Fr',7,'1','FALSE','FALSE','Francium','0',7,1,'Alkali Metal','Solid','Radioactive','223','0','1939',' [Rn] 7s1','27','677','s','7',' Artificially Produced','#244d57'),(88,'Radium','Ra',7,'2','FALSE','FALSE','Radium','0',7,2,'Alkaline Earth Metal','Solid','Radioactive','226.025','0','1898',' [Rn] 7s2','700','1737','s','7',' Uranium and Thorium Decay','#622e39'),(89,'Actinium','Ac',7,'3','FALSE','FALSE','Actinium','0',13,3,'Actinide','Solid','Radioactive','227.028','0','1899',' [Rn] 6d1 7s2','1050','3178','f','7',' Uranium and Thorium Decay','#613b28'),(90,'Thorium','Th',9,'4','TRUE','TRUE','Thorium','0',9,19,'Actinide','Solid','Radioactive','231.036','232','1828',' [Rn] 6d2 7s2','1749','4852','f','7',' Monazite + Thorite','#613b28'),(91,'Protactinium','Pa',9,'5','TRUE','TRUE','Protactinium','0',9,20,'Actinide','Solid','Radioactive','232.038','0','1913',' [Rn] 5f2 6d1 7s2','1550','4000','f','7',' Uraninite + Autunite','#613b28'),(92,'Uranium','U',9,'6','TRUE','TRUE','Uranium','0',9,21,'Actinide','Solid','Radioactive','237.048','0','1789',' [Rn] 5f3 6d1 7s2','1135','4131','f','7',' Uraninite + Pitchblende','#613b28'),(93,'Neptunium','Np',9,'7','TRUE','TRUE','Neptunium','0',9,22,'Actinide','Solid','Radioactive','238.029','0','1940',' [Rn] 5f4 6d1 7s2','640','3680','f','7',' Artificially Produced','#613b28'),(94,'Plutonium','Pu',9,'8','TRUE','TRUE','Plutonium','0',9,23,'Actinide','Solid','Radioactive','242','0','1940',' [Rn] 5f6 7s2','640','3327','f','7',' Artificially Produced','#613b28'),(95,'Americium','Am',9,'9','TRUE','TRUE','Americium','0',9,24,'Actinide','Solid','Radioactive','243','0','1944',' [Rn] 5f7 7s2','994','2610','f','7',' Artificially Produced','#613b28'),(96,'Curium','Cm',9,'10','TRUE','TRUE','Curium','0',9,25,'Actinide','Solid','Radioactive','247','0','1944',' [Rn] 5f7 6d1 7s2','1340','3110','f','7',' Artificially Produced','#613b28'),(97,'Berkelium','Bk',9,'11','TRUE','TRUE','Berkelium','0',9,26,'Actinide','Solid','Radioactive','247','0','1949',' [Rn] 5f9 7s2','986','2470','f','7',' Artificially Produced','#613b28'),(98,'Californium','Cf',9,'12','TRUE','TRUE','Californium','0',9,27,'Actinide','Solid','Radioactive','250','0','1950',' [Rn] 5f10 7s2','900','1475','f','7',' Artificially Produced','#613b28'),(99,'Einsteinium','Es',9,'13','TRUE','TRUE','Einsteinium','0',9,28,'Actinide','Solid','Radioactive','251','0','1952',' [Rn] 5f11 7s2','-','-','f','7',' Artificially Produced','#613b28'),(100,'Fermium','Fm',9,'14','TRUE','TRUE','Fermium','0',9,29,'Actinide','Solid','Radioactive','252','0','1952',' [Rn] 5f12 7s2','-','-','f','7',' Artificially Produced','#613b28'),(101,'Mendelevium','Md',9,'15','TRUE','TRUE','Mendelevium','0',9,30,'Actinide','Solid','Radioactive','255','0','1955',' [Rn] 5f13 7s2','-','-','f','7',' Artificially Produced','#613b28'),(102,'Nobelium','No',9,'16','TRUE','TRUE','Nobelium','0',9,31,'Actinide','Solid','Radioactive','256','0','1957',' [Rn] 5f14 7s2','-','-','f','7',' Artificially Produced','#613b28'),(103,'Lawrencium','Lr',9,'17','TRUE','TRUE','Lawrencium','0',9,32,'Actinide','Solid','Radioactive','257','0','1961',' [Rn] 5f14 6d1 7s2','-','-','d','7',' Artificially Produced','#613b28'),(104,'Rutherfordium','Rf',7,'4','TRUE','FALSE','Rutherfordium','0',13,4,'Transition Metal','Solid','Radioactive','258','0','1964',' [Rn] 5f14 6d2 7s2','-','-','d','7',' Artificially Produced','#433c65'),(105,'Dubnium','Db',7,'5','TRUE','FALSE','Dubnium','0',13,5,'Transition Metal','Solid','Radioactive','260','0','1967',' [Rn] 5f14 6d3 7s2','-','-','d','7',' Artificially Produced','#433c65'),(106,'Seaborgium','Sg',7,'6','TRUE','FALSE','Seaborgium','0',13,6,'Transition Metal','Solid','Radioactive','261','0','1974',' [Rn] 5f14 6d4 7s2','-','-','d','7',' Artificially Produced','#433c65'),(107,'Bohrium','Bh',7,'7','TRUE','FALSE','Bohrium','0',13,7,'Transition Metal','Solid','Radioactive','262','0','1981',' [Rn] 5f14 6d5 7s2','-','-','d','7',' Artificially Produced','#433c65'),(108,'Hassium','Hs',7,'8','TRUE','FALSE','Hassium','0',13,8,'Transition Metal','Solid','Radioactive','262','0','1984',' [Rn] 5f14 6d6 7s2','-','-','d','7',' Artificially Produced','#433c65'),(109,'Meitnerium','Mt',7,'9','TRUE','FALSE','Meitnerium','0',13,9,'Unknown Properties','Solid','Radioactive','263','0','1982',' [Rn] 5f14 6d7 7s2','-','-','d','7',' Artificially Produced','#46474c'),(110,'Darmstadtium','Ds',7,'10','TRUE','FALSE','Darmstadtium','0',13,10,'Unknown Properties','Solid','Radioactive','269','0','1994',' [Rn] 5f14 6d9 7s1','-','-','d','7',' Artificially Produced','#46474c'),(111,'Roentgenium','Rg',7,'11','TRUE','FALSE','Roentgenium','0',13,11,'Unknown Properties','Solid','Radioactive','272','0','1994',' [Rn] 5f14 6d10 7s1','-','-','d','7',' Artificially Produced','#46474c'),(112,'Copernicium','Cn',7,'12','TRUE','FALSE','Copernicium','0',13,12,'Unknown Properties','Solid','Radioactive','277','0','1996',' [Rn] 5f14 6d10 7s2','-','-','d','7',' Artificially Produced','#46474c'),(113,'Nihonium','Nh',7,'13','TRUE','FALSE','Nihonium','0',7,13,'Unknown Properties','Solid','Radioactive','286','0','2004',' [Rn] 5f14 6d10 7s2 7p1','-','-','p','7',' Artificially Produced','#46474c'),(114,'Flerovium','Fl',7,'14','TRUE','FALSE','Flerovium','0',7,14,'Unknown Properties','Solid','Radioactive','289','0','1998',' [Rn] 5f14 6d10 7s2 7p2','-','-','p','7',' Artificially Produced','#46474c'),(115,'Moscovium','Mc',7,'15','TRUE','FALSE','Moscovium','0',7,15,'Unknown Properties','Solid','Radioactive','290','0','2003',' [Rn] 5f14 6d10 7s2 7p3','-','-','p','7',' Artificially Produced','#46474c'),(116,'Livermorium','Lv',7,'16','TRUE','FALSE','Livermorium','0',7,16,'Unknown Properties','Solid','Radioactive','293','0','2000',' [Rn] 5f14 6d10 7s2 7p4','-','-','p','7',' Artificially Produced','#46474c'),(117,'Tennessine','Ts',7,'17','TRUE','FALSE','Tennessine','0',7,17,'Unknown Properties','Unknown','Radioactive','294','0','2010',' [Rn] 5f14 6d10 7s2 7p5','-','-','p','7',' Artificially Produced','#46474c'),(118,'Oganesson','Og',7,'18','TRUE','FALSE','Oganesson','0',7,18,'Unknown Properties','Unknown','Radioactive','294','0','2002',' [Rn] 5f14 6d10 7s2 7p6','-','-','p','7',' Artificially Produced','#46474c');
/*!40000 ALTER TABLE `elementdatatable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_levels`
--

DROP TABLE IF EXISTS `game_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game_levels` (
  `level_id` int NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) NOT NULL,
  `production_ready` tinyint(1) DEFAULT '0',
  `short_description` varchar(255) DEFAULT NULL,
  `internal_name` varchar(50) DEFAULT NULL,
  `display_order` int DEFAULT NULL,
  PRIMARY KEY (`level_id`),
  UNIQUE KEY `internal_name` (`internal_name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_levels`
--

LOCK TABLES `game_levels` WRITE;
/*!40000 ALTER TABLE `game_levels` DISABLE KEYS */;
INSERT INTO `game_levels` VALUES (1,'Classic Mode: Type Name or Place Element',1,'Name all Elements of the Periodic Table','classic',1),(2,'Beginner Placement',2,'Drag all Elements onto the Periodic Table','beginner',5),(3,'S-Block Shuffle',2,'Practice the s-block elements','sblock',6),(4,'P-Block Placement',2,'Practice the p-block elements','pblock',7),(5,'D-Block Dexterity',2,'Practice the d-block elements','dblock',8),(6,'F-Block Frenzy',2,'Practice the f-block elements','fblock',9),(7,'Alphabet Alchemist',2,'Arrange all Elements in the Alphabetical Order','arrange',10),(8,'Periodic Odyssey',2,'Learn the Periodic Table in a Guide Mode','guided',11),(9,'Extreme Minefields',2,'Drag all Elements onto the Periodic Table - No Mistakes Allowed','extreme',12),(10,'Name the Symbol',1,'Type in the Name of the given symbols','namesymbols',2),(11,'Name the Element',1,'Name the Element','nameelements',3),(12,'Place the Element',1,'Drag to Place the Element in its proper place','placeelements',4);
/*!40000 ALTER TABLE `game_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `high_scores`
--

DROP TABLE IF EXISTS `high_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `high_scores` (
  `user_id` varchar(255) NOT NULL,
  `level_id` int NOT NULL,
  `score` int DEFAULT NULL,
  PRIMARY KEY (`user_id`,`level_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `high_scores_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `high_scores_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `game_levels` (`level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `high_scores`
--

LOCK TABLES `high_scores` WRITE;
/*!40000 ALTER TABLE `high_scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `high_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manual_auth_users`
--

DROP TABLE IF EXISTS `manual_auth_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manual_auth_users` (
  `user_id` varchar(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  CONSTRAINT `manual_auth_users_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manual_auth_users`
--

LOCK TABLES `manual_auth_users` WRITE;
/*!40000 ALTER TABLE `manual_auth_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `manual_auth_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_achievements`
--

DROP TABLE IF EXISTS `user_achievements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_achievements` (
  `user_id` varchar(255) NOT NULL,
  `achievement_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`achievement_id`),
  KEY `achievement_id` (`achievement_id`),
  CONSTRAINT `user_achievements_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `user_achievements_ibfk_2` FOREIGN KEY (`achievement_id`) REFERENCES `achievements` (`achievement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_achievements`
--

LOCK TABLES `user_achievements` WRITE;
/*!40000 ALTER TABLE `user_achievements` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_achievements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `display_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('115015098870343752152','beinganonoymous911@gmail.com','Nice Bhaalu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-13 17:32:32
