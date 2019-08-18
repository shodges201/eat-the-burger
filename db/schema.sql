USE kwvwjp0nwugcqoxp;

CREATE TABLE burgers(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT 0 
);