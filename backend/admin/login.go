package admin

import (
	"encoding/json"
	"errors"
	"log"
	"net/http"

	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
	"github.com/yusuke/yusuke_blog/database"
)

type Admin struct {
	Email    string `json:"email"    db:"email"`
	Password string `json:"password" db:"password"`
}

type Post struct {
	Status int   `json:"status"`
	Result Admin `json:"result"`
}

func Login(w http.ResponseWriter, r *http.Request) {

	err := r.ParseForm()
	if err != nil {
		return
	}

	//バリデーションチェック
	var tmpAdmin Admin
	json.NewDecoder(r.Body).Decode(&tmpAdmin)
	err = validation.ValidateStruct(&tmpAdmin,
		validation.Field(&tmpAdmin.Email,
			validation.Required.Error("メールアドレスは必須入力です"),
			is.Email.Error("メールアドレスを入力して下さい"),
		),
		validation.Field(&tmpAdmin.Password,
			validation.Required.Error("パスワードは必須入力です"),
		),
	)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	db, err := database.Init()

	if err != nil {
		log.Println("CreateTag: データベース接続失敗")
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	} else {
		log.Println("CreateTag: データベース接続成功")
	}
	rows, err := db.Query("select email, password from member where email = ? and password = ?", tmpAdmin.Email, tmpAdmin.Password)
	defer db.Close()

	var admin Admin
	for rows.Next() {
		err = rows.Scan(&admin.Email, &admin.Password)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
	if len(admin.Email) > 0 && len(admin.Password) > 0 {
		postOK := Post{http.StatusOK, admin}
		res, _ := json.Marshal(postOK)
		log.Printf("email: %s, password: %s", admin.Email, admin.Password)
		w.Header().Set("Content-Type", "application/json")
		w.Write(res)
	} else {
		var failLogin = errors.New("会員登録されておりません")
		ThrowError(w, failLogin)
	}
}

func ThrowError(w http.ResponseWriter, err error) {
	log.Println(err)
	http.Error(w, err.Error(), http.StatusInternalServerError)
}
