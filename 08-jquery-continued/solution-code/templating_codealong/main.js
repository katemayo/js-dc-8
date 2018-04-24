'use strict'
let MyApp = {}

// Compile element using handlebars
MyApp.compileItem = function (item) {
  let source = $('#to-do-template').html()
  let template = Handlebars.compile(source)
  return template(item)
}

// Note: this starter data is usually loaded from somewhere
MyApp.todos = [{toDo: 'Clean fridge'}, {toDo: 'Take out Puppy'}, {toDo: 'Finish work'}]

// Initial population of the list from todos array
MyApp.populateList = function (list) {
  MyApp.todos.forEach(function (todo) {
    let newItem = MyApp.compileItem(todo)
    list.append(newItem)
  })
}

MyApp.addToList = function (list, item) {
  let itemObject = {toDo: item.val()}
  MyApp.todos.push(itemObject)
  let compiledItem = MyApp.compileItem(itemObject)
  list.append(compiledItem)
  $('#new-thing').val('')
}

// Remove both the data from the model/array and from the DOM
MyApp.removeFromList = function ($list, $item) {
  let itemIndex = $item.index()

  // Remove item from main data array
  if (itemIndex > -1) { MyApp.todos.splice(itemIndex, 1) }

  // Remove dom element of item
  $item.remove()
}

$(function () {
  let $thingList = $('#fav-list')
  let $button = $('#new-thing-button')

  MyApp.populateList($thingList)

  /** *********************** Event Handlers *************************/

  $button.on('click', function (event) {
    // prevent the button from submitting the form
    event.preventDefault()
    let $newItemText = $('#new-thing')

    // if the field has a value, lets add it to our todo list
    if ($newItemText.val()) { MyApp.addToList($thingList, $newItemText) }
  })

  // Hover events for each list item in the to-do list. On hovering an element, its siblings get an inactive class applied
  $thingList.on('mouseenter mouseleave', 'li', function (event) {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive')
      $(this).siblings().addClass('inactive')
    } else if (event.type === 'mouseleave') {
      $(this).siblings().removeClass('inactive')
    }
  })

  $thingList.on('click', 'a.complete', function (e) {
    e.preventDefault()
    let listItem = $(this).parent('li')
    listItem.toggleClass('completed')
  })

  $thingList.on('click', 'a.delete', function (e) {
    e.preventDefault()
    let $listItem = $(this).parent('li')
    MyApp.removeFromList($thingList, $listItem)
  })
  /** *********************** End Event Handlers *************************/
})
