package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/test", echoTest)
	http.HandleFunc("/", echoHello)
	http.ListenAndServe(":8000", nil)
}

func echoHello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>hello</h1>")
}

func echoTest(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>test</h1>")
}
