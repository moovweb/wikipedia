$$("body") {
  # Give the body an id, allowing page-specific styling
  attribute("id", "_homepage")
  # Removing the ugly top banner
  $$("#mp-topbanner") {
    remove()
  }
  # Moving the featured image to the top of the page
  $$("#mp-lower") {
    move_to("..", "top")
  }
  # Adding our own class, as well as removing inline styles
  $$(".mw-body h2") {
    attribute("class", "pill")
    remove("@style")
  }
}