CREATE SCHEMA IF NOT EXISTS homeapp;
ALTER SCHEMA homeapp CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

USE homeapp;

DROP TABLE IF EXISTS master;

CREATE TABLE master
(
    Id             SMALLINT UNSIGNED AUTO_INCREMENT,
    Name           VARCHAR(32) CHARACTER SET utf8mb4   DEFAULT ''   NOT NULL,
    ContainedBy    TINYINT(1) UNSIGNED                              NOT NULL,
    IsContainer    TINYINT(1)                                       NOT NULL,
    Level          TINYINT UNSIGNED                                 NOT NULL,
    AdditionalJson VARCHAR(1024) CHARACTER SET utf8mb4 DEFAULT NULL NULL,
    CONSTRAINT master
        PRIMARY KEY (id)
) ENGINE = InnoDB
    COMMENT 'Master table for HomeApp MVP';


