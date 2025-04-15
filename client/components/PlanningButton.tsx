import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { usePlannedWalks } from '../hooks/useUserWalks.ts'
//------------nor rendering---------
function PlanningButton() {
  const { user, loginWithRedirect } = useAuth0()
console.log('planning', user)
  const { walkId } = useParams()
  const navigate = useNavigate()
  const addWalk = usePlannedWalks()
  console.log('working?')
  if (!walkId) {

    return null
  }

  const handleSignIn = () => {
    if (user) {
      return navigate(`/user/${user.sub}`)
    } else loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button
          onClick={() => addWalk.mutate(+walkId)}
          className="button cursor-pointer"
        >
          Plan this Walk
        </Button>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <Button onClick={handleSignIn} className="button cursor-pointer">
          Sign in
        </Button>
      </IfNotAuthenticated>

    </>
  )
}

export default PlanningButton
