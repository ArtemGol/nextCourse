import {useMemo} from 'react'
import Link from 'next/link'
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

  const usersObj = useMemo(() => users.map(user =>
    <li key={user.id}>
    <Link href={`/users/${user.id}`}>
      <a>
        {user.name}
      </a>
    </Link>
  </li>), [users])

  return (
    <MainContainer keywords={'users_page'}>
      <h1>Список пользователей</h1>
      <ul>
        {usersObj}
      </ul>
    </MainContainer>
  );
};

export default Users;

export const getStaticProps = async (context) => {
  const fetch = require('node-fetch')
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json())

  return {
    props: {users}, // will be passed to the page component as props
  }
}
