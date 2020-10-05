USE homeapp;

INSERT INTO master
    (Name, ContainedBy, IsContainer, Level, AdditionalJson)
SELECT *
FROM (SELECT '家' AS Name, 0 AS ContainedBy, 1 AS IsContainer, 0 AS Level, NULL AS AdditionalJson) AS temp
WHERE NOT EXISTS (
          SELECT id
          FROM master
          WHERE id = 1
      );