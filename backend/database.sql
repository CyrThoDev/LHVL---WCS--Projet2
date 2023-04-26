-- CREATE TABLE item (
--   id int(10)(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
--   title varchar(255) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- INSERT int(10)O item (title) VALUES ('Stuff'), ('Doodads');


CREATE TABLE superhero (
  id int primary key NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  slug varchar(255),
  image_sm varchar(255) NOT NULL,
  image_md varchar(255) NOT NULL, 
  gender varchar(10) NOT NULL, 
  race varchar(255) NOT NULL, 
  eyecolor varchar(100) NOT NULL, 
  fullName varchar(255) NOT NULL, 
  work varchar(255),
  intelligence int NOT NULL,
  strength int NOT NULL,
  speed int NOT NULL,
  durability int NOT NULL,
  power int NOT NULL,
  combat int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO superhero (name, slug, image_sm, image_md,gender, race, eyecolor,  fullName, work, intelligence, strength, speed, durability, power, combat)
  VALUE ("A-Bomb", "1-a-bomb","https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg", "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg", "Male","Human", "Yellow","Richard Milhouse Jones" ,"Musician, adventurer, author; formerly talk show host", 38, 100,17, 80, 24, 64); 