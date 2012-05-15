match($path) {
	# When the path has "Main_Page", import our home Tritium
	with(/Main_Page/) {
		log("--> Importing home.ts")
		@import "home.ts"
	}
	else() {
		log("Not importing")
	}
}
