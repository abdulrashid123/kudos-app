import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersData, giveKudosData, selectKudosStatus, selectProfile, selectUsers } from './kudosSlice'
import Spinner from '../../components/spinner/Spinner'
import styles from './kudos.module.css'
import { FaHeart } from 'react-icons/fa';
import toastr from 'toastr';
import 'toastr/build/toastr.css'

function KudosGiver() {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const status = useSelector(selectKudosStatus)
    const profile = useSelector(selectProfile)
    const [kudos, setKudos] = useState({
   
        message:null,
        giver:null,
        receiver:null
    })

    useEffect(() => {
        dispatch(getUsersData())

      
    }, [])
    
    if(status === "loading"){
        return <Spinner/>
    }

    console.log(kudos,"kudos")
    const handleSubmit = () => {
        if(profile.kudos_remaining > 0 ){
            dispatch(giveKudosData(kudos))
        }
        else{
            toastr.error("No Kudos available")
        }
      
    }
  return (
    <div className={styles.container}>
    {users && users.length > 0 ? (
        users?.map((item, index) => (
        <div key={item.id} className={styles.grid__item}>
       
          <div className={styles.giver__info}>
            <div className={styles.user}>
                <b>{item.username}</b>
                <FaHeart
                color='green'        
                size={18}/>
            </div>
            <div className={styles.message_detail}>
            <label>Message</label>
            <textarea
            placeholder='Write a Compliment to user'
           className={styles.message__area}
            value={kudos.receiver === item.user ? item.message : ''}
            onChange={(e) => setKudos({
                ...kudos,
                receiver:item.user,
                giver:profile?.user,
                message:e.target.value
            })}
            >
            
            </textarea>
            </div>
            <div className={styles.button__area}>
                <button className={styles.save} onClick={handleSubmit} disabled={kudos.receiver !== item.user}>Submit</button>
            </div>
          </div>
          
        </div>
      ))
    ) : (
      <div className={styles.no__data}>No Users Found</div>
    )}
  </div>
  )
}

export default KudosGiver