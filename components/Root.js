import List from './List.js'

const Root = dope => {
  dope.initialState = {
    data: null,
    category: null
  }

  dope.onMount(async () => {
    const res = await fetch('../data.json')
    const data = await res.json()
    dope.state = { data }
  })

  window.onhashchange = evt => {
    const hash = location.hash
    window.scrollTo(0, 0)
    dope.state = { category: hash && hash.substring(1) }
  }

  const SortHeader = dope.make('h4', {
    text: dope.state.category ? `Displaying all  ${dope.state.category} lamps...` : 'Displaying all lamps...',
    style: {
      padding: '1em',
      margin: 0,
      fontStyle: 'italic',
      fontWeight: 300
    }
  })

  return dope.make('div', {
    style: { width: '100%' },
    children: [SortHeader, dope.inject(List, dope.state)]
  })
}

export default Root
