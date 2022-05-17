import React from 'react'
import useFetch from '../../../../hooks/useFetch';
import style from './Map.module.css';
import { YMaps, Map, Placemark, ZoomControl, FullscreenControl, GeolocationControl } from 'react-yandex-maps'
const CONTACT_INFOS_ENDPOINT = "contactInfoes"


const YandexMap = () => {
  const { data } = useFetch(CONTACT_INFOS_ENDPOINT, null);
  return <div className={style.Map}>
    <YMaps className={style.Map_block}>
      <div className={style.Map_block}>
        <Map className={style.Map_block}
          defaultState={{
            center: [+data[0]?.latutide || 41.2995 , +data[0]?.longitude || 69.2401],
            zoom: 5,
            controls: [],
          }}>
          <Placemark geometry={[+data[0]?.latutide || 41.2995, +data[0]?.longitude || 69.2401]} />
          <FullscreenControl />
          <GeolocationControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </div>
    </YMaps>
  </div>
};
export default YandexMap;