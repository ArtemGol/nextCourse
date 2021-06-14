import {useRouter} from "next/router"
import styles from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {
  const {query} = useRouter()

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя - {user.name}</div>
      </div>
    </MainContainer>

  )
}

export default User;

export const getServerSideProps = async ({params}) => {
  const fetch = require('node-fetch')
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(res => res.json())
  return {
    props: {user}, // will be passed to the page component as props
  }
}
