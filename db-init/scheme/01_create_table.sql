DROP TABLE IF EXISTS article;
CREATE TABLE article (
  id int NOT NULL AUTO_INCREMENT,
  article text NOT NULL,
  good bit DEFAULT 0,
  bad bit DEFAULT 0,
  isPublish bit NOT NULL,
  publishDate datetime NOT NULL,
  updateDate datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS tag;
CREATE TABLE tag (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(15) NOT NULL UNIQUE,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS article_tag;
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