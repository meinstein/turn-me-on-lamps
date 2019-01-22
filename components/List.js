import ListItem from './ListItem.js'

const List = dope => {
  dope.initialState = { data: null }

  dope.onMount(async () => {
    const res = await fetch('../data.json')
    const data = await res.json()
    dope.state = { data }
  })

  window.onhashchange = evt => console.log('hash change', evt)

  if (!dope.state.data) {
    return dope.make('p', { text: 'Loading...' })
  }

  const ListItems = dope.state.data.map(lampData => {
    return dope.inject(ListItem, lampData)
  })

  return dope.make('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    children: ListItems
  })
}

export default List
