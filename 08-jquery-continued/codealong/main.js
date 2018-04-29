function addToList ($list, thing) {
  let $thingLi = $('<li>').html(thing).addClass('fav-thing')
  addCompleteLink($thingLi)
  $list.append($thingLi)
}

function addCompleteLink ($li) {
  let $completedLink = $('<span>').html(' complete task').addClass('complete-task')
  $li.append($completedLink)

  // refactor this using event delegation
  $completedLink.on('click', function (event) {
    $li.addClass('completed')
    $completedLink.html('')
  })
}

$(document).ready(function () {
  let $thingList = $('#fav-list')
  let $things = $('.fav-thing')
  let $button = $('#new-thing-button')
  let $newThingInput = $('#new-thing')

  $things.toArray().forEach(function (li) {
    addCompleteLink($(li))
  })

  $button.on('click', function (event) {
    event.preventDefault()
    let newThing = $newThingInput.val()
    if (newThing === '') {
      alert('You must type in a value!')
    } else {
      addToList($thingList, newThing)
      $newThingInput.val('')
    }
  })

  let $thingListItems = $('#fav-list')

  $thingListItems.on('mouseenter mouseleave', 'li', function (event) {
    if (event.type === 'mouseenter') {
      $(this).removeClass('inactive')
      $(this).siblings().addClass('inactive')
    } else if (event.type === 'mouseleave') {
      $(this).siblings().removeClass('inactive')
    }
  })
})

// NEW STUFF FOR THIS CLASS
