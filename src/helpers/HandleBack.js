import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function HandleBack() {
  const [ locationKeys, setLocationKeys ] = useState([])
  const history = useHistory()
  
  history.listen(navData => {
    console.log(navData.pathname)
  })

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([ location.key ])
      }

      console.log('history.action => ', history.action)
      console.log('location.key => ', location.key)

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([ _, ...keys ]) => keys)
          // Handle forward event

        } else {
          setLocationKeys((keys) => [ location.key, ...keys ])
          // Handle back event

        }
      }
    })
  }, [ history ])
}