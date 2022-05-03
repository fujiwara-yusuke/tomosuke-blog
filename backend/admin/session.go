package admin

import (
	"net/http"
	"os"

	"github.com/gorilla/sessions"
)

var (
	store               = sessions.NewCookieStore([]byte(os.Getenv("SESSION_KEY")))
	session_name string = "admin_session"
)

func CreateSession(w http.ResponseWriter, r *http.Request, admin *Admin) {
	session, _ := store.Get(r, session_name)

	session.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   86400 * 7,
		HttpOnly: true,
	}

	session.Values["id"] = admin.Id
	session.Values["email"] = admin.Email
	session.Values["password"] = admin.Password
	err := session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func CleanSession(w http.ResponseWriter, r *http.Request) {
	session, _ := store.Get(r, session_name)
	session.Values["id"] = ""
	session.Values["email"] = ""
	session.Values["password"] = ""
	err := session.Save(r, w)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
