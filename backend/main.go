package main

import (
	"fmt"
	"net/http"

	"github.com/yusuke/yusuke_blog/admin"
	"github.com/yusuke/yusuke_blog/blog"
)

func main() {
	http.HandleFunc("/test", echoTest)
	http.HandleFunc("/login", admin.Login)
	http.HandleFunc("/tag/get", blog.GetAllTags)
	http.HandleFunc("/tag/post", blog.CreateTag)
	http.HandleFunc("/tag/update", blog.UpdateTag)
	http.HandleFunc("/", echoHello)
	http.ListenAndServe(":8000", nil)
}

func echoHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>hello</h1>")
}

func echoTest(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>test</h1>")
}
