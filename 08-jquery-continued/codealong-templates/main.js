
$(document).ready(function () {
  let source = $('#hello-world-template').html()
  let template = Handlebars.compile(source)

  let helloStatement = { helloTitle: 'Hello world', helloContent: 'GA JS class is just awesome'}

  let compiledTemplate = template(helloStatement)
  $('body').append(compiledTemplate)

// or you could have done $('body').append(template(helloStatement));
})
