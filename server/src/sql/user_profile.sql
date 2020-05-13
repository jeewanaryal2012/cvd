use test;

CREATE TABLE IF NOT EXISTS users_entity (
  userId int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  firstName varchar(80) NOT NULL,
  lastName varchar(80) NOT NULL,
  email varchar(80) NOT NULL,
  phone varchar(80) NOT NULL,
  password varchar(80) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS membership_entity (
  membershipId int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId int(11) NOT NULL,
  paidAmount VARCHAR(100),
  paidTimestamp VARCHAR(100),
  isMember VARCHAR(10),
  CONSTRAINT fk_users_membership FOREIGN KEY (userId) REFERENCES users_entity(userId) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS account_entity (
  accountId int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  userId int(11) NOT NULL,
  headline varchar(80) NOT NULL,
  description varchar(80) NOT NULL,
  regionStates varchar(80) NOT NULL,
  regionCities varchar(80) NOT NULL,
  imageProfile varchar(200) NOT NULL,
  imageSlider varchar(200) NOT NULL,
  contactEmail varchar(100) NOT NULL,
  contactPhone varchar(100) NOT NULL,
  contactWebsite varchar(100) NOT NULL,
  CONSTRAINT fk_users_account FOREIGN KEY (userId) REFERENCES users_entity(userId) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

INSERT INTO
	users_entity (userId, firstName, lastName, email, phone, password)
VALUES
	(1, 'Jeewan', 'Aryal', 'jeewan@gmail.com', '972-251-3155', 'pass'),
	(2, 'James', 'Brown', 'james@gmail.com', '972-251-3155', 'pass'),
	(3, 'Rose', 'Doe', 'rose@gmail.com', '972-251-3155', 'pass'),
	(4, 'Mike', 'Dan', 'mike@gmail.com', '972-251-3155', 'pass'),
	(5, 'Tim', 'Bern', 'tim@gmail.com', '972-251-3155', 'pass'),
	(6, 'Jessy', 'Tupil', 'jessy@gmail.com', '972-251-3155', 'pass'),
	(7, 'Rita', 'Han', 'rita@gmail.com', '972-251-3155', 'pass'),
	(8, 'Ryan', 'Aryal', 'ryan@gmail.com', '972-251-3155', 'pass')
;

INSERT INTO
	membership_entity (membershipId, userId, paidAmount, paidTimestamp, isMember)
VALUES
	(1, 1, '$100', '1111', 'yes'),
	(2, 2, '$200', '2222', 'yes'),
	(3, 3, '$300', '3333', 'yes'),
	(4, 4, '$400', '4444', 'yes'),
	(5, 5, '$500', '5555', 'yes'),
	(6, 6, '$600', '6666', 'yes'),
	(7, 7, '$700', '7777', 'yes'),
	(8, 8, '$800', '8888', 'yes')
;

INSERT INTO
	account_entity (accountId, userId, headline, description, regionStates, regionCities, imageProfile, imageSlider, contactEmail, contactPhone, contactWebsite)
VALUES
	(1, 1, 'headline', 'jeewan', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(2, 2, 'headline', 'James', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(3, 3, 'headline', 'Rose', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(4, 4, 'headline', 'Mike', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(5, 5, 'headline', 'Tim', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(6, 6, 'headline', 'Jessy', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(7, 7, 'headline', 'Rita', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com'),
	(8, 8, 'headline', 'Ryan', 'Texas', 'Iving,Dallas', 'image profile url', 'image slider urls', 'jeewan@gmail.com', '972', 'www.jeewanaryal.com')
;












