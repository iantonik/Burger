CREATE DATABASE burgers_db;
USE burgers_db;

CREATE Table burgers(
   id int NOT NULL AUTO_INCREMENT,
   burger_name VARCHAR(255) NOT NULL,
   devoured BOOLEAN DEFAULT false NOT NULL,
   PRIMARY KEY (id)
)