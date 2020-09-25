create schema if not exists homeapp;

use homeapp;

drop table if exists master;

create table master
(
    Id             SMALLINT UNSIGNED auto_increment,
    Name           VARCHAR(32)   not null,
    ContainedBy    TINYINT(1)    not null,
    IsContainer    TINYINT(1)    not null,
    Level          TINYINT       not null,
    AdditionalJson VARCHAR(1024) null,
    constraint master
        primary key (id)
)
    comment 'Master table for HomeApp MVP';


