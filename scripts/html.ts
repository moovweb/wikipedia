# HTML Transformations go here

$("/html") {
  rewrite_links()
  absolutize_srcs()
  
  # Remove all script tags not marked with "data-keep" attribute
  remove_desktop_js();

  
  
  add_assets()

  @import sections/header.ts
  @import sections/footer.ts

  @import mappings.ts

  # Late load all the images on the site
  # lateload()
}

