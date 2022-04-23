package main

import "time"

type blog struct {
	id         int
	article    string
	is_publish bool
	good       int
	bad        int
	createDate time.Time
	updateDate time.Time
}
