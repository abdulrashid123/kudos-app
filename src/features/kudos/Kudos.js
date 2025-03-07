import React,{useEffect} from 'react'
import Spinner from '../../components/spinner/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { getKudosReceivedData,  selectData, selectKudosStatus } from './kudosSlice';
import styles from './kudos.module.css'
import { FaHeart } from 'react-icons/fa';
function Kudos() {
  const dispatch = useDispatch()
  const kudosStatus = useSelector(selectKudosStatus)
  const data = useSelector(selectData)
  useEffect(() => {
    dispatch(getKudosReceivedData())
     
  }, [])
  

  if(kudosStatus === "loading"){
    return <Spinner/>
  }
  console.log("called this kudos")
  

  return (
    <div className={styles.container}>
    {data && data.length > 0 ? (
      data?.map((item, index) => (
        <div key={item.id} className={styles.grid__item}>
          <div className={styles.info}>
            <div className={styles.user}>
              <b>{item.giver_user}</b>
              <FaHeart
                color='green'        
                size={18}/>
            </div>
            <span>{item.timestamp}</span>
          </div>
          <details className={styles.message}>
            <summary>Message</summary>
            <span>{item.message}</span>
          </details>
        </div>
      ))
    ) : (
      <div className={styles.no__data}>No Data Found</div>
    )}
  </div>
  )
}

export default Kudos