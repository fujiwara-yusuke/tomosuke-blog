package blog

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/yusuke/yusuke_blog/database"
)

type Tag struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Get struct {
	Status int   `json:"status"`
	Rssult []Tag `json:"result"`
}

type Post struct {
	Status int `json:"status"`
}

func GetAllTags(w http.ResponseWriter, r *http.Request) {
	db, err := database.Init()

	if err != nil {
		log.Println("GetAllTags: データベース接続失敗")
		log.Println(err.Error())
	} else {
		log.Println("GetAllTags: データベース接続成功")
	}

	rows, err := db.Query("SELECT * FROM tag Order By id ASC")
	defer db.Close()

	var result []Tag

	for rows.Next() {
		tag := Tag{}
		err = rows.Scan(&tag.Id, &tag.Name)
		if err != nil {
			panic(err)
		}
		tag = Tag{Id: tag.Id, Name: tag.Name}
		result = append(result, tag)
	}

	AllTags := Get{http.StatusOK, result}
	res, err := json.Marshal(AllTags)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	} else {
		w.Header().Set("Content-Type", "application/json")
		w.Write(res)
	}
}

func CreateTag(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()
	if err != nil {
		return
	}
	fmt.Println(r.Form.Get("name"))
	name := r.Form.Get("name")

	db, err := database.Init()

	if err != nil {
		log.Println("CreateTag: データベース接続失敗")
		log.Println(err.Error())
	} else {
		log.Println("CreateTag: データベース接続成功")
	}
	_, err = db.Exec("INSERT INTO tag(name) VALUES(\"" + name + "\")")
	defer db.Close()

	if err != nil {
		log.Fatal(err)
	} else {
		postOK := Post{http.StatusOK}
		res, err := json.Marshal(postOK)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		} else {
			w.Header().Set("Content-Type", "application/json")
			w.Write(res)
		}
	}
}
