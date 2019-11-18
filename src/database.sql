 CREATE DATABASE todo_list;

 USE todo_list;

 CREATE TABLE user (username VARCHAR(20), firstName VARCHAR(30), lastName VARCHAR(30), PRIMARY KEY (username));

 CREATE TABLE task (id VARCHAR(36), text VARCHAR(100), status VARCHAR(1), date DATE, username VARCHAR(20), PRIMARY KEY(id), FOREIGN KEY (username) REFERENCES user(username));

 INSERT INTO user(username, firstName, lastName) VALUES ('katiep','Katie','Postle');

 INSERT INTO user(username, firstName, lastName) VALUES ('heleng','Helen','Gardner');

INSERT INTO user(username, firstName, lastName) VALUES ('jheggs','James','Heggs');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Walk the cat','D','2019-10-16','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Brush the fish','C','2019-10-12','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Hoover the grass','N','2019-10-15','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Cut the Carpet','N','2019-10-13','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Smell the roses','C','2019-10-15','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Learn HTML','N','2019-10-17','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Drink wine','C','2019-10-16','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Eat food','C','2019-10-12','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Climb Everest','N','2019-10-16','katiep');

INSERT INTO task(id, text, status, date, username) VALUES (uuid(), 'Eat an elephant','D','2019-10-12','katiep');
