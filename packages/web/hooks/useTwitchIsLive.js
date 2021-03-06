import { useEffect, useState } from 'react'

import { META } from '../constants/Meta'

function useTwitchIsLive() {
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.twitch.tv/helix/streams?user_login=${META.social.twitch}`,
        {
          headers: {
            'Client-ID': process.env.TWITCH_CLIENT_ID,
          },
        }
      )
        .then(res => res.json())
        .catch(e => {})

      if (data && data.data[0]) {
        setIsLive(true)
      } else {
        setIsLive(false)
      }
    }

    fetchData()
  }, [isLive])

  return isLive
}

export default useTwitchIsLive
