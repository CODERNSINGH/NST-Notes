Nice — let’s learn this end-to-end using the **CollegeDB** schema I gave you earlier. I’ll explain concepts, show **exact SQL code**, point out common gotchas, and give **generator scripts + 50+ practice queries** so you can drill everything. I’ll assume **MySQL 8+ / MariaDB** syntax for examples and call out differences where relevant.
## Important Topics 
* `Coalesce`
# 1) Quick conceptual map

* **Data**: raw facts (names, dates, numbers).
* **DBMS / RDBMS**: software that stores/retrieves structured data (MySQL, PostgreSQL).
* **Data model**: how you represent data (entities, attributes, relationships).
* **Schema**: concrete table/column definitions.
* **Entity**: a real-world thing (Student) with attributes (name, dob).
* **Relationship**: how entities relate (Student enrolls Course).
* **Normalization**: organizing schema to reduce redundancy (1NF, 2NF, 3NF).
* **ACID**: transaction guarantees (Atomicity, Consistency, Isolation, Durability).

---

# 2) Schema & ER (textual)

Entities & primary keys:

* `Departments(dept_id PK)`,
* `Instructors(instructor_id PK)`,
* `Courses(course_id PK)`,
* `Students(student_id PK)`,
* `Enrollments(enroll_id PK)` — linking Students ↔ Courses (many-to-many),
* `Payments(payment_id PK)` — payments by Students.

Relationships:

* Dept 1 — \* Many Instructors, Courses, Students (FK `dept_id`).
* Course \* — \* Student via Enrollments.
* Instructor teaches Course via `instructor_id` FK on Courses.

---

# 3) Data types (common)

* Integer types: `INT`, `BIGINT`
* Decimal/float: `DECIMAL(p,s)`, `FLOAT`
* Strings: `VARCHAR(n)`, `CHAR(n)`, `TEXT`
* Date/time: `DATE`, `DATETIME`, `TIMESTAMP`, `TIME`
* Boolean: `BOOLEAN` / `TINYINT(1)`
* Enumerated: `ENUM('a','b')` (MySQL)
* Binary: `BLOB`

> Use `DECIMAL` for money, `DATE` for birthdays.

---

# 4) Constraints & Keys (with SQL)

```sql
-- Primary key + NOT NULL implied
CREATE TABLE Example (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE,          -- Unique constraint
  dept_id INT,
  salary DECIMAL(10,2) DEFAULT 30000, -- Default
  CHECK (salary >= 0)                 -- Check constraint
);

-- Foreign key
ALTER TABLE Example ADD FOREIGN KEY (dept_id) REFERENCES Departments(dept_id);
```

* PK: uniquely identifies row.
* FK: enforces referential integrity.
* UNIQUE: unique values.
* NOT NULL: no nulls allowed.
* CHECK: enforce condition (MySQL supports since 8.0, but earlier versions ignore it).

---

# 5) DDL (create/alter/drop). Using CollegeDB (full create from earlier)

(If you already ran it, skip the CREATE DATABASE lines.)

```sql
-- Create DB + use it
CREATE DATABASE IF NOT EXISTS CollegeDB;
USE CollegeDB;

-- Departments
CREATE TABLE IF NOT EXISTS Departments (
  dept_id INT PRIMARY KEY AUTO_INCREMENT,
  dept_name VARCHAR(100) UNIQUE NOT NULL,
  location VARCHAR(100)
);

-- Instructors
CREATE TABLE IF NOT EXISTS Instructors (
  instructor_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  hire_date DATE,
  dept_id INT,
  salary DECIMAL(10,2) CHECK (salary > 20000),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

-- Courses
CREATE TABLE IF NOT EXISTS Courses (
  course_id INT PRIMARY KEY AUTO_INCREMENT,
  course_name VARCHAR(100) NOT NULL,
  credits INT CHECK (credits >= 1 AND credits <= 5),
  dept_id INT,
  instructor_id INT,
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id),
  FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

-- Students
CREATE TABLE IF NOT EXISTS Students (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  dob DATE,
  dept_id INT,
  gender ENUM('Male','Female','Other'),
  FOREIGN KEY (dept_id) REFERENCES Departments(dept_id)
);

-- Enrollments (many-to-many)
CREATE TABLE IF NOT EXISTS Enrollments (
  enroll_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  course_id INT,
  enroll_date DATE,
  grade CHAR(2),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

-- Payments
CREATE TABLE IF NOT EXISTS Payments (
  payment_id INT PRIMARY KEY AUTO_INCREMENT,
  student_id INT,
  amount DECIMAL(10,2) NOT NULL,
  payment_date DATE,
  method ENUM('Cash','Card','UPI','NetBanking'),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
);
```

**Explanation:** DDL defines structure. Use `ALTER TABLE` to add/remove columns or FK later.

---

# 6) DML (Insert / Update / Delete / Upsert) + Transactions

```sql
-- Single inserts
INSERT INTO Departments (dept_name, location)
VALUES ('Computer Science', 'Building A');

-- Multiple-row insert
INSERT INTO Students (name, email, dob, dept_id, gender)
VALUES
('Alice', 'alice@college.edu', '2002-05-14', 1, 'Female'),
('Bob', 'bob@college.edu', '2001-07-21', 2, 'Male');

-- Update
UPDATE Students
SET email = 'alice.s@college.edu'
WHERE student_id = 1;

-- Delete
DELETE FROM Payments WHERE payment_id = 10;

-- Upsert (MySQL): insert or update on duplicate key
INSERT INTO Students (student_id, name, email)
VALUES (1, 'Alice', 'newalice@college.edu')
ON DUPLICATE KEY UPDATE email = VALUES(email);

-- Transactions
START TRANSACTION;
UPDATE Instructors SET salary = salary * 1.10 WHERE dept_id = 1;
-- if everything OK
COMMIT;
-- or if problem
ROLLBACK;
```

Transactions let you group DML to be atomic.

---

# 7) DQL: SELECT basics (projection, filtering, sorting)

```sql
-- Basic select
SELECT student_id, name, email FROM Students;

-- Filtering
SELECT * FROM Students WHERE dept_id = 1 AND gender = 'Female';

-- Sorting
SELECT name, dob FROM Students ORDER BY dob DESC, name ASC;

-- Limit / offset (pagination)
SELECT * FROM Students ORDER BY student_id LIMIT 10 OFFSET 20;

-- Distinct
SELECT DISTINCT dept_id FROM Students;
```

---

# 8) Wildcards & pattern matching (`LIKE`, `_`, `%`)

```sql
-- names starting with 'A'
SELECT * FROM Students WHERE name LIKE 'A%';

-- names with 'an' anywhere
SELECT * FROM Students WHERE name LIKE '%an%';

-- 1 character wildcard
SELECT * FROM Students WHERE name LIKE 'J_n'; -- Jon, Jan

-- case-insensitive?
-- MySQL default collation often case-insensitive. PostgreSQL: use ILIKE.
SELECT * FROM Students WHERE name ILIKE '%ali%'; -- Postgres only
```

---

# 9) Common Functions — grouped with examples

### String functions

```sql
SELECT UPPER(name) AS upper_name, LOWER(email) AS low_email,
       CONCAT(name, ' <', email, '>') AS contact
FROM Students
LIMIT 5;

SELECT SUBSTRING(name, 1, 3) FROM Students;
SELECT TRIM(BOTH ' ' FROM '  hello  ');
SELECT REPLACE(name, 'a', 'x') FROM Students;
```

### Numeric functions

```sql
SELECT ABS(-5), ROUND(3.14159, 2), CEIL(2.1), FLOOR(2.9), POWER(2, 3);
```

### Date functions (MySQL)

```sql
SELECT CURDATE(), NOW(), DATE_ADD(CURDATE(), INTERVAL 7 DAY), YEAR(dob) FROM Students;
SELECT DATEDIFF(CURDATE(), dob) AS days_old FROM Students;
SELECT TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM Students;
```

### Aggregate functions

```sql
SELECT COUNT(*) AS total_students FROM Students;
SELECT dept_id, COUNT(*) AS students_in_dept FROM Students GROUP BY dept_id;
SELECT AVG(amount) AS avg_payment FROM Payments;
SELECT MIN(salary), MAX(salary) FROM Instructors;
```

### Null handling

```sql
-- MySQL: IFNULL
SELECT name, IFNULL(email, 'no-email@example.com') FROM Students;

-- Standard SQL: COALESCE returns first non-null
SELECT COALESCE(email, 'noemail@x') FROM Students;

-- NULLIF: returns NULL if equal
SELECT NULLIF('x','x'); -- returns NULL
```

---

# 10) CASE statements

```sql
-- map grade to description
SELECT student_id, course_id, grade,
  CASE
    WHEN grade = 'A' THEN 'Excellent'
    WHEN grade = 'B' THEN 'Good'
    WHEN grade = 'C' THEN 'Average'
    WHEN grade = 'D' THEN 'Poor'
    WHEN grade = 'F' THEN 'Fail'
    ELSE 'Not graded'
  END AS performance
FROM Enrollments;
```

---

# 11) GROUP BY & HAVING

```sql
-- students per department
SELECT d.dept_name, COUNT(s.student_id) AS students
FROM Departments d
LEFT JOIN Students s ON s.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name;

-- average instructor salary per dept, only show if avg > 65000
SELECT d.dept_name, AVG(i.salary) AS avg_salary
FROM Departments d
JOIN Instructors i ON i.dept_id = d.dept_id
GROUP BY d.dept_id, d.dept_name
HAVING AVG(i.salary) > 65000;
```

`HAVING` filters groups (WHERE filters rows before grouping).

---

# 12) JOINS — types with examples

### INNER JOIN (only matching rows)

```sql
SELECT s.name AS student, c.course_name
FROM Enrollments e
JOIN Students s ON e.student_id = s.student_id
JOIN Courses c ON e.course_id = c.course_id;
```

### LEFT JOIN (all left rows + matches or NULL)

```sql
-- All students and their enrollments (if any)
SELECT s.student_id, s.name, c.course_name
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id
LEFT JOIN Courses c ON e.course_id = c.course_id;
```

### RIGHT JOIN (all right rows) — MySQL supports it

```sql
-- All courses and enrolled students (NULL if none)
SELECT c.course_id, c.course_name, s.name
FROM Courses c
RIGHT JOIN Enrollments e ON c.course_id = e.course_id
RIGHT JOIN Students s ON e.student_id = s.student_id;
```

### FULL OUTER JOIN — not available in older MySQL

Use union of left & right to simulate:

```sql
-- Simulate FULL OUTER JOIN between Students and Enrollments (MySQL)
SELECT s.student_id, s.name, e.enroll_id
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id
UNION
SELECT s.student_id, s.name, e.enroll_id
FROM Students s
RIGHT JOIN Enrollments e ON s.student_id = e.student_id;
```

(If your DB supports `FULL OUTER JOIN` — use it.)

### CROSS JOIN (Cartesian product)

```sql
-- all pairs of Dept x Courses (dangerous if tables big)
SELECT d.dept_name, c.course_name
FROM Departments d
CROSS JOIN Courses c
LIMIT 20;
```

### SELF JOIN (table joined to itself)

Add mentor to Student then self-join:

```sql
ALTER TABLE Students ADD COLUMN mentor_id INT NULL, ADD FOREIGN KEY (mentor_id) REFERENCES Students(student_id);

-- Find student + mentor names
SELECT s.name AS student, m.name AS mentor
FROM Students s
LEFT JOIN Students m ON s.mentor_id = m.student_id;
```

**When to use which?**

* Use INNER when you need only matches.
* LEFT to include all from left and optional right data.
* RIGHT is the opposite (less common).
* FULL for union of left+right.
* CROSS when you want all pairs (rare).
* SELF for hierarchical or pair relationships within same entity.

---

# 13) Set operators (combine result sets)

* `UNION` — removes duplicates (like a set).
* `UNION ALL` — keeps duplicates (faster).
* `INTERSECT` — rows common to both (supported in Postgres, SQL Server; older MySQL might not).
* `EXCEPT` / `MINUS` — rows in first not in second (Postgres uses EXCEPT; Oracle uses MINUS).

Examples:

```sql
-- list of people who are either students or instructors
SELECT name, email, 'student' AS role FROM Students
UNION
SELECT name, email, 'instructor' AS role FROM Instructors;

-- keep duplicates:
SELECT name FROM Students
UNION ALL
SELECT name FROM Instructors;

-- INTERSECT (if DB supports):
SELECT email FROM Students
INTERSECT
SELECT email FROM Instructors;
```

If your DB doesn't support `INTERSECT`, you can do:

```sql
SELECT s.email FROM Students s
JOIN Instructors i ON s.email = i.email;
```

---

# 14) Subqueries & Correlated subqueries

```sql
-- subquery (non-correlated)
SELECT * FROM Courses WHERE dept_id IN (SELECT dept_id FROM Departments WHERE location = 'Building A');

-- correlated: per-row computation
SELECT s.student_id, s.name,
  (SELECT COUNT(*) FROM Enrollments e WHERE e.student_id = s.student_id) AS enroll_count
FROM Students s;
```

---

# 15) Indexes

```sql
CREATE INDEX idx_students_name ON Students(name);
CREATE INDEX idx_enroll_student_course ON Enrollments(student_id, course_id);
```

Indexes speed up reads but slow down writes and consume storage. Add indexes on FK columns and frequently filtered columns.

---

# 16) Generating **long dummy data** (fast)

Instead of hand-writing hundreds of `INSERT`s, use a stored procedure to generate rows:

```sql
DELIMITER $$
CREATE PROCEDURE gen_students(IN n INT)
BEGIN
  DECLARE i INT DEFAULT 1;
  WHILE i <= n DO
    INSERT INTO Students (name, email, dob, dept_id, gender)
    VALUES (
      CONCAT('Student', i),
      CONCAT('student', i, '@college.edu'),
      DATE_SUB(CURDATE(), INTERVAL (18 + (i % 10)) YEAR),
      ((i % 5) + 1),
      IF(i % 2 = 0, 'Female', 'Male')
    );
    SET i = i + 1;
  END WHILE;
END$$
DELIMITER ;

-- Generate 200 students
CALL gen_students(200);
```

You can similarly create `gen_enrollments(n)` and `gen_payments(n)` procedures to populate many enrollments/payments.

If you prefer Python to generate SQL, you can generate bulk INSERT statements using a small script — or use `LOAD DATA INFILE` to load CSVs.

---

# 17) 50+ Practice queries (grouped & explained)

Try these one-by-one on your DB. I give the SQL and a one-line purpose.

### SELECT basics

1. `SELECT * FROM Students LIMIT 20;` — see rows.
2. `SELECT name, email FROM Students WHERE name LIKE 'A%';` — filter by name.
3. `SELECT * FROM Students ORDER BY name ASC LIMIT 50;` — sorting.
4. `SELECT DISTINCT dept_id FROM Students;` — distinct values.

### Filtering & logical ops

5. `SELECT * FROM Payments WHERE amount BETWEEN 25000 AND 30000;`
6. `SELECT * FROM Students WHERE gender = 'Female' AND dept_id = 1;`
7. `SELECT * FROM Students WHERE email IS NULL;` — find missing emails.

### String + Date functions

8. `SELECT name, UPPER(name), CONCAT(name, ' (', email, ')') FROM Students LIMIT 5;`
9. `SELECT name, TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age FROM Students ORDER BY age DESC LIMIT 10;`
10. `SELECT DATE_FORMAT(payment_date, '%Y-%m') AS pay_month, SUM(amount) FROM Payments GROUP BY pay_month;`

### Aggregates & GROUP BY

11. `SELECT dept_id, COUNT(*) FROM Students GROUP BY dept_id;`
12. `SELECT course_id, COUNT(*) AS cnt FROM Enrollments GROUP BY course_id ORDER BY cnt DESC LIMIT 10;`
13. `SELECT dept_id, AVG(salary) FROM Instructors GROUP BY dept_id HAVING AVG(salary) > 65000;`

### Joins

14. `-- student + department name
    SELECT s.name, d.dept_name
    FROM Students s
    JOIN Departments d ON s.dept_id = d.dept_id;`

15. `-- student + courses enrolled`

```sql
SELECT s.name, c.course_name
FROM Students s
JOIN Enrollments e ON s.student_id = e.student_id
JOIN Courses c ON e.course_id = c.course_id;
```

16. `-- left join: find students with no enrollments`

```sql
SELECT s.student_id, s.name
FROM Students s
LEFT JOIN Enrollments e ON s.student_id = e.student_id
WHERE e.enroll_id IS NULL;
```

17. `-- full outer join simulation: courses with and without enrollments`

```sql
SELECT c.course_id, c.course_name, e.enroll_id
FROM Courses c
LEFT JOIN Enrollments e ON c.course_id = e.course_id
UNION
SELECT c.course_id, c.course_name, e.enroll_id
FROM Courses c
RIGHT JOIN Enrollments e ON c.course_id = e.course_id;
```

18. `-- cross join: all pairs dept x instructor`

```sql
SELECT d.dept_name, i.name
FROM Departments d
CROSS JOIN Instructors i
LIMIT 20;
```

19. `-- self join: peers who share same mentor`

```sql
SELECT s.name AS student, m.name AS mentor
FROM Students s
JOIN Students m ON s.mentor_id = m.student_id;
```

### Subqueries

20. `SELECT * FROM Students WHERE dept_id = (SELECT dept_id FROM Departments WHERE dept_name='Computer Science');`

21. `-- correlated: students who have more enrollments than average`

```sql
SELECT s.student_id, s.name
FROM Students s
WHERE (SELECT COUNT(*) FROM Enrollments e WHERE e.student_id = s.student_id) >
      (SELECT AVG(cnt) FROM (SELECT COUNT(*) AS cnt FROM Enrollments GROUP BY student_id) t);
```

### CASE

22. `SELECT name, (CASE WHEN grade = 'A' THEN 4 WHEN grade='B' THEN 3 ELSE 0 END) AS gpa FROM Enrollments;`

### Window functions (MySQL 8+)

23. `SELECT student_id, COUNT(*) OVER (PARTITION BY student_id) AS enroll_count FROM Enrollments;`
24. `SELECT student_id, course_id, ROW_NUMBER() OVER (PARTITION BY student_id ORDER BY enroll_date DESC) as rn FROM Enrollments;`

### Set operations

25. `SELECT email FROM Students UNION SELECT email FROM Instructors;`
26. `SELECT email FROM Students INTERSECT SELECT email FROM Instructors; -- if your DB supports it`

### Update/delete practice

27. `UPDATE Students SET email = CONCAT('old_', student_id, '@x') WHERE email IS NULL;`
28. `DELETE FROM Enrollments WHERE enroll_date < '2020-01-01';`

### Functions & aggregation combos

29. `SELECT course_id, SUM(CASE WHEN grade = 'A' THEN 1 ELSE 0 END) AS a_count FROM Enrollments GROUP BY course_id;`
30. `SELECT s.student_id, s.name, COUNT(e.enroll_id) AS total_enrolled FROM Students s LEFT JOIN Enrollments e ON s.student_id = e.student_id GROUP BY s.student_id, s.name ORDER BY total_enrolled DESC LIMIT 10;`

### Index & explain

31. `EXPLAIN SELECT * FROM Students WHERE name LIKE 'A%';` — see if index used.

32. `CREATE INDEX idx_students_dob ON Students(dob);` — create index then test.

### Null-handling edge cases

33. `SELECT name FROM Students WHERE email IS NOT NULL AND email != '';`
34. `SELECT COALESCE(email, 'no@email') FROM Students;`

### Advanced / analytics

35. `-- Top 5 students with most enrollments
    SELECT s.student_id, s.name, COUNT(e.enroll_id) AS enrolls
    FROM Students s
    JOIN Enrollments e ON s.student_id = e.student_id
    GROUP BY s.student_id, s.name
    ORDER BY enrolls DESC
    LIMIT 5;`

36. `-- Monthly revenue
    SELECT DATE_FORMAT(payment_date, '%Y-%m') AS ym, SUM(amount) FROM Payments GROUP BY ym ORDER BY ym;`

37. `-- find instructors who teach more than 2 courses
    SELECT i.name, COUNT(c.course_id) AS course_count
    FROM Instructors i
    JOIN Courses c ON i.instructor_id = c.instructor_id
    GROUP BY i.instructor_id, i.name
    HAVING COUNT(c.course_id) > 2;`

### Security / privileges

38. `-- create a read-only user (example)
    CREATE USER 'reader'@'localhost' IDENTIFIED BY 'strongpass';
    GRANT SELECT ON CollegeDB.* TO 'reader'@'localhost';`

### Misc / cleanup

39. `DROP TABLE IF EXISTS TempTable;`
40. `ALTER TABLE Students ADD COLUMN phone VARCHAR(15);`
41. `ALTER TABLE Students DROP COLUMN phone;`

### More practice (combos)

42. `-- Students who paid more than average payment
    SELECT DISTINCT s.name FROM Students s
    JOIN Payments p ON s.student_id = p.student_id
    GROUP BY s.student_id
    HAVING AVG(p.amount) > (SELECT AVG(amount) FROM Payments);`

43. `-- Students not enrolled in any course
    SELECT s.student_id, s.name FROM Students s
    LEFT JOIN Enrollments e ON s.student_id = e.student_id
    WHERE e.enroll_id IS NULL;`

44. `-- Courses with number of distinct students
    SELECT c.course_id, c.course_name, COUNT(DISTINCT e.student_id) AS students_count
    FROM Courses c
    LEFT JOIN Enrollments e ON c.course_id = e.course_id
    GROUP BY c.course_id;`

45. `-- Payment methods distribution
    SELECT method, COUNT(*) AS cnt FROM Payments GROUP BY method;`

46. `-- Highest paid instructor per department (uses window function)
    SELECT dept_id, instructor_id, name, salary
    FROM (
      SELECT i.*, ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salary DESC) rn
      FROM Instructors i
    ) t
    WHERE rn = 1;`

47. \`-- Students who took both Course A and Course B (IDs 1 and 2)
    SELECT student\_id FROM Enrollments WHERE course\_id = 1
    INTERSECT
    SELECT student\_id FROM Enrollments WHERE course\_id = 2; -- DB dependent

\-- Alternative:
SELECT e1.student\_id FROM Enrollments e1
JOIN Enrollments e2 ON e1.student\_id = e2.student\_id
WHERE e1.course\_id = 1 AND e2.course\_id = 2;\`

48. `-- Use COALESCE to show last known email
    SELECT name, COALESCE(email, 'unknown') FROM Students;`

49. `-- Rename a column (MySQL)
    ALTER TABLE Students CHANGE COLUMN dob date_of_birth DATE;`

50. `-- Create view
    CREATE VIEW vw_student_enroll AS
    SELECT s.student_id, s.name, c.course_name, e.enroll_date
    FROM Students s
    JOIN Enrollments e ON s.student_id = e.student_id
    JOIN Courses c ON e.course_id = c.course_id;`
    `SELECT * FROM vw_student_enroll LIMIT 10;`

---

# 18) Common gotchas & tips

* **NULL is not equal to anything**: use `IS NULL`/`IS NOT NULL`.
* **ORDER BY on aggregated queries**: place `ORDER BY` after `GROUP BY` aggregates.
* **JOINs and duplicates**: joining many-to-many tables can cause row multiplication; `DISTINCT` or `GROUP BY` may be necessary.
* **Use `EXPLAIN`** to analyze query plans and indexes.
* **Avoid `SELECT *` in production**.
* **Use transactions** when doing multiple related updates.
* **Back up before schema changes**.

---

# 19) Next steps & how I can help further

* Want me to:

  1. Expand the generator to create `Enrollments` & `Payments` with realistic distributions?
  2. Provide **step-by-step solutions** to some of the 50 practice queries with sample output?
  3. Produce a downloadable SQL file you can run directly?

Tell me which of these you want and I’ll generate it right away (SQL file, more examples, or expanded data generator).
