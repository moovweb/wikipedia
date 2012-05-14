$("/html/body") {

  attribute("id", "_homepage")

  $(".//table[@id='mp-topbanner']") {
    remove()
  }
  $(".//table[@id='mp-lower']") {
    move_to("..", "top")
  }
  $(".//div[@class='mw-body']//table//h2") {
    attribute("class", "pill")
    remove("@style")
  }
}