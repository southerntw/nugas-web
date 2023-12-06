CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT false
);

INSERT INTO tasks (title, description, completed) VALUES
  ('Task 1', 'Description for Task 1', false),
  ('Task 2', 'Description for Task 2', true),
  ('Task 3', 'Description for Task 3', false),
  ('Task 4', 'Description for Task 4', true);
