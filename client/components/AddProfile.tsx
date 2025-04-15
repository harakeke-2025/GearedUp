import { useAuth0 } from '@auth0/auth0-react'
import { UserData } from '../../models/user'
import { useUpsertUser } from '../hooks/useUser'
import ErrorComponent from './ErrorPage'
import ProfileForm from './ProfileForm'
import { useNavigate } from 'react-router-dom'

export default function AddProfile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const navigate = useNavigate()
  const mutation = useUpsertUser()

  const newUserData: UserData = {
    username: '',
    name: '',
    email: '',
    phone: '',
    result: '',
    myEquipment: {
      backpack: false,
      waterproofPackLiner: false,
      sleepingBag: false,
      firstAidKit: false,
      survivalKit: false,
      safetyEquipment: false,
      torchFlashlight: false,
      rubbishBag: false,
      bookingConfirmationAndId: false,
      earplugsForBunkrooms: false,
      drinkBottle: false,
      eatingAndCookingUtensils: false,
      gasCookerAndFuel: false,
      matchesOrLighter: false,
      generalToiletries: false,
      backupToiletOption: false,
      tent: false,
      sleepingMat: false,
      groundSheet: false,
      walkingClothes: false,
      hikingBoots: false,
      socks: false,
      shorts: false,
      shirt: false,
      underLayers: false,
      midLayers: false,
      raincoat: false,
      overtrousers: false,
      warmHatAndGloves: false,
      sunhatAndSunglasses: false,
      extraSocksUnderwearAndShirt: false,
      gaiters: false,
      lightweightShoesForHuts: false,
      carryFood: false,
      lightweightFood: false,
      emergencyFood: false,
      foodStorage: false,
      emergencyShelter: false,
      distressBeacon: false,
      cookingFacilities: false,
      sanitaryBins: false,
      gasCooker: false,
      fireStarters: false,
      lifeJacket: false,
      kayakOrCanoe: false,
      paddles: false,
      plasticDrumsOrEquivalent: false,
      dryBags: false,
      swimwear: false,
      sandalsOrAquaShoes: false,
      portableStoveAndFuel: false,
      candles: false,
      docConfirmationLetter: false,
    },
  }

  if (!isAuthenticated && !user) return <ErrorComponent />

  async function handleSubmit(form: UserData) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    navigate(`/quiz-outlet`)
  }
  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} form={newUserData} />
    </div>
  )
}
