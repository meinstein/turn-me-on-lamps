import ListItem from './ListItem.js'

const List = dope => {
  dope.initialState = {
    data: null,
    category: null
  }

  dope.onMount(async () => {
    const res = await fetch('../data.json')
    const data = await res.json()
    dope.state = { data }
  })

  if (!dope.state.data) {
    return dope.make(null)
  }

  window.onhashchange = evt => {
    const hash = location.hash
    dope.state = { category: hash && hash.substring(1) }
  }

  const ListItems = dope.state.data
    .filter(({ categories }) => {
      if (!dope.state.category) {
        return true
      }
      return categories.includes(dope.state.category)
    })
    .map(lampData => dope.inject(ListItem, lampData))

  return dope.make('div', {
    children: ListItems,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  })
}

export default List
