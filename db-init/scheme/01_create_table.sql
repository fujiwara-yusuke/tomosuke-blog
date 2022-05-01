DROP TABLE IF EXISTS article_tag;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS tag;
DROP TABLE IF EXISTS member;

CREATE TABLE article (
  id int NOT NULL AUTO_INCREMENT,
  article text NOT NULL,
  isPublish bit NOT NULL DEFAULT 0,
  publishDate datetime,
  createDate datetime NOT NULL DEFAULT now(),
  updateDate datetime NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE tag (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(15) NOT NULL UNIQUE,
  createDate datetime NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE article_tag (
  article_id int NOT NULL,
  tag_id int NOT NULL,
  CONSTRAINT fk_article_id
    FOREIGN KEY (article_id)
    REFERENCES article (id)
    ON DELETE CASCADE ON UPDATE RESTRICT,
  CONSTRAINT fk_tag_id
    FOREIGN KEY (tag_id)
    REFERENCES tag (id)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE member (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(15) NOT NULL UNIQUE,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  level smallint(5) NOT NULL DEFAULT 0,
  email varchar(255) NOT NULL UNIQUE,
  createDate datetime NOT NULL DEFAULT now(),
  PRIMARY KEY(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;